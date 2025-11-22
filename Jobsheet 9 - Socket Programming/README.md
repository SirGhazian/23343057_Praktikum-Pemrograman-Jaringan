# Tugas Jobsheet 9: Socket Programming

## 1. Perbedaan Fungsi `socket.on` (Server vs Client)

Berikut adalah perbandingan antara penggunaan `socket.on` pada `index.js` (Server) dan `chat.js` (Client).

| Aspek                   | `socket.on` di `src/index.js` (Server)                              | `socket.on` di `public/js/chat.js` (Klien)           |
| :---------------------- | :------------------------------------------------------------------ | :--------------------------------------------------- |
| **Lingkungan Eksekusi** | Node.js                                                             | Browser                                              |
| **Tujuan Utama**        | Memproses event dari klien, mengelola user, mengirim pesan ke room. | Menangkap event dari server, menampilkan data ke UI. |
| **Contoh Event**        | `join`, `kirimPesan`, `kirimLokasi`, `disconnect`                   | `pesan`, `locationMessage`, `roomData`               |
| **Fungsi Dasar**        | Menerima data dari klien dan menjalankan logika server.             | Menerima data dari server dan merender ke tampilan.  |
| **Contoh Kode**         | `socket.on("kirimPesan", (pesan, callback) => {...})`               | `socket.on("pesan", (message) => {...})`             |
| **Aksi**                | Validasi pesan, broadcast, simpan user, update room.                | Render Mustache, update sidebar, autoScroll.         |
| **Data Diterima**       | Data mentah dari input pengguna.                                    | Data yang sudah diproses server.                     |
| **Output**              | Emit event ke semua klien dalam room.                               | Ubah HTML, tampilkan pesan, tampilkan link lokasi.   |

---

## 2. Analisis Console Log Saat Chatting

Saat melakukan proses chat dan memeriksa Console browser, berikut adalah investigasi alur data yang terjadi.

| Tampilan di Console                                                    | Penyebab Muncul                                                                              | Baris Kode Berhubungan                                                                    |
| :--------------------------------------------------------------------- | :------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| **Objek Pesan**<br>`{username: "Admin", text: "Selamat datang!", ...}` | Klien menerima event pesan dari server lalu mencetak isi event ke console.                   | `socket.on("pesan", (message) => { console.log(message); })`                              |
| **Objek Pesan User**<br>`{username: "randi", text: "test", ...}`       | Server mem-broadcast pesan ke semua klien dalam room. Klien menangkap event dan mencetaknya. | `socket.on("pesan", (message) => { console.log(message); })`                              |
| **Teks**<br>`"Pesan berhasil dikirim"`                                 | Callback dari `kirimPesan` dieksekusi setelah server menerima dan mem-broadcast pesan.       | `socket.emit("kirimPesan", pesan, (error) => { console.log("Pesan berhasil dikirim"); })` |

**Alur Proses:**

1.  Klien masuk room, server mengirim pesan selamat datang, klien mencetak objek pesan.
2.  Klien mengirim pesan (`socket.emit`), server menerima, callback dijalankan (Log: "Pesan berhasil dikirim").
3.  Server broadcast pesan ke room. Klien menerima event dan mencetak objek pesan di console.

---

## 3. Penggunaan Library (Mustache, Moment, Qs)

Penjelasan fungsi library eksternal pada `chat.html`.

### Mustache

Digunakan untuk merender template HTML dinamis berdasarkan data dari server.

- **Fungsi:** Mengganti placeholder seperti `{{username}}` dan `{{message}}`.
- **Kode:**
  ```javascript
  Mustache.render(messageTemplate, {
    username: message.username,
    message: message.text,
    createdAt: moment(message.createdAt).format("H:mm"),
  });
  ```

### Moment

Digunakan untuk memformat timestamp pesan yang dikirim server agar mudah dibaca (format jam).

- **Kode:** `moment(message.createdAt).format("H:mm")`.

### Qs

Digunakan untuk mengambil nilai query string dari URL ketika klien masuk ke chat.

- **Fungsi:** Mengekstrak `username` dan `room` dari URL (misal: `/chat.html?username=xxx&room=yyy`) untuk proses join.
- **Kode:** `const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true });`.

---

## 4. Elements, Templates, dan Options pada `chat.js`

Baris kode ini memetakan elemen DOM dan data awal yang dibutuhkan aplikasi.

| Bagian        | Fungsi                                                                     | Terhubung dengan File                                    |
| :------------ | :------------------------------------------------------------------------- | :------------------------------------------------------- |
| **Elements**  | Mengambil elemen HTML (form, input, button) untuk dimanipulasi script.     | `chat.html`                                              |
| **Templates** | Mengambil template Mustache (script tag) untuk merender pesan dan sidebar. | `chat.html`                                              |
| **Options**   | Mengambil `username` dan `room` dari query string URL.                     | `index.html` (sumber data) & `chat.html` (halaman aktif) |

---

## 5. Peran `messages.js` dan `users.js`

Kedua file ini adalah modul helper yang digunakan oleh server.

| File            | Fungsi                                                                    | Hubungan Alur                                                                               |
| :-------------- | :------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------ |
| **messages.js** | Membuat format objek pesan standar (berisi username, text, timestamp).    | `index.js` (buat pesan) -> `chat.js` (terima) -> `chat.html` (tampil).                      |
| **users.js**    | Manajemen data pengguna (Join, get user, get users in room, remove user). | `index.js` (kelola user) -> `chat.js` (terima update list) -> `chat.html` (tampil sidebar). |

---

## 6. Cara Kerja Fitur Kirim Lokasi

Aplikasi mengirimkan koordinat GPS pengguna ke chat room.

**Alur dan Kode:**

1.  **Browser:** Mengambil koordinat via Geolocation API (`navigator.geolocation.getCurrentPosition`).
2.  **Klien:** Mengirim event ke server (`socket.emit("kirimLokasi", coords)`).
3.  **Server:** Menerima data, membentuk URL Google Maps, dan mem-broadcast event (`io.to(room).emit("LocationMessage")`).
4.  **Klien (Penerima):** Menerima event dan merender template link lokasi (`socket.on("LocationMessage")`).

---

## 7. Perbedaan `npm run dev` vs `npm run start`

Analisis perintah eksekusi aplikasi.

### `npm run start`

- **Perintah:** `node src/index.js`.
- **Sifat:** Menjalankan aplikasi secara standar. Tidak memantau perubahan file. Jika ada perubahan kode, server harus di-restart manual.
- **Kegunaan:** Mode produksi/stabil.

### `npm run dev`

- **Perintah:** `nodemon src/index.js`.
- **Sifat:** Menggunakan **nodemon**. Memantau seluruh perubahan file proyek dan me-restart server secara otomatis setiap kali kode disimpan.
- **Kegunaan:** Mode pengembangan (development) agar iterasi koding lebih cepat.

---

## 8. Fungsi Socket Lain yang Digunakan

Selain `socket.on`, berikut adalah fungsi socket lain yang vital dalam aplikasi ini.

| Fungsi Socket             | Lokasi         | Tujuan                                                                 |
| :------------------------ | :------------- | :--------------------------------------------------------------------- |
| `socket.emit()`           | Klien & Server | Mengirim event ke sisi seberang (klien ke server atau sebaliknya).     |
| `socket.broadcast.emit()` | Server         | Mengirim event ke semua klien **kecuali** pengirim.                    |
| `socket.join()`           | Server         | Memasukkan socket pengguna ke dalam "room" tertentu.                   |
| `io.to().emit()`          | Server         | Mengirim event (broadcast) khusus ke seluruh anggota di room tertentu. |
| `socket.on("disconnect")` | Server         | Menangani event ketika pengguna memutus koneksi (tutup tab/browser).   |

---

## 9. Konsep Real-time Bidirectional Event-based Communication

Penjelasan konsep komunikasi dua arah yang diterapkan dalam aplikasi.

- **Komunikasi Dua Arah:** Klien dan Server saling mengirim dan menerima data tanpa perlu reload halaman (HTTP Request tradisional).
- **Event-Based:** Komunikasi dipicu oleh "kejadian" (event) tertentu (misal: `join`, `pesan`, `kirimLokasi`).

**Implementasi dalam Kode:**

1.  **Klien Mengirim (Emit):** Mengirim data pesan/lokasi secara real-time.
    - `socket.emit("kirimPesan", ...)`
    - `socket.emit("join", ...)`
2.  **Server Menerima (On) & Merespons:** Memproses dan meneruskan data.
    - `socket.on("kirimPesan", ...)`
    - `io.to(user.room).emit("pesan", ...)`
3.  **Klien Menerima (On):** Update UI secara langsung saat data masuk.
    - `socket.on("pesan", ...)`
    - `socket.on("roomData", ...)`
