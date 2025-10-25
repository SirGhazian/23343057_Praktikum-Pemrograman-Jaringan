<p align="center">
<img height="100" src="image">
</p>
<img src="https://media.tenor.com/zhIZszouG8QAAAAi/line-divider.gif" width="100%" height="2px"/>

Repository ini berisi tugas-tugas dari modul mata kuliah Praktikum Pemrograman Jaringan Universitas Negeri Padang yang dibimbing oleh pak dosen Randi Proska Sandra, S.Pd, M.Sc.

## 【 Tentang Repository 】

<img align="right" alt="Coding" width="60" src="image">

desc

## 【 Daftar Isi 】

- [Kontribusi](#kontribusi)
- [Informasi Dosen](#informasi-dosen)
- [About & Help](#about)

## 【 Daftar Jobsheet 】

- [Jobsheet 1 -- Pengenalan NodeJS](#jobsheet-01)
- [Jobsheet 2 -- Node.js Module System](#jobsheet-02)
- [Jobsheet 3 -- HTTP Request and API](#jobsheet-03)
- [Jobsheet 4 -- JavaScript Essentials](#jobsheet-04)
- [Jobsheet 5 -- Web Server and ExpressJs](#jobsheet-05)
- [Jobsheet 6 -- Jobsheet6](#jobsheet-06)
- [Jobsheet 7 -- Jobsheet7](#jobsheet-07)
- [Jobsheet 8 -- Jobsheet8](#jobsheet-08)
- [Jobsheet 9 -- Jobsheet9](#jobsheet-09)
- [Jobsheet 10 -- Jobsheet10](#jobsheet-10)
- [Jobsheet 11 -- Jobsheet11](#jobsheet-11)
- [Jobsheet 12 -- Jobsheet12](#jobsheet-12)
- [Jobsheet 13 -- Jobsheet13](#jobsheet-13)

</a>
<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/f36455e4-c903-42b8-b9ff-429f1e3d314a" id="jobsheet-01">

`✦ Pengenalan NodeJS ✦`

Node.js adalah lingkungan runtime JavaScript yang berjalan di sisi server. Node.js memungkinkan JavaScript tidak hanya digunakan di browser, tetapi juga untuk membuat aplikasi server, API, dan layanan jaringan.

Node.js dibangun di atas **V8 JavaScript Engine** (mesin yang juga digunakan oleh Google Chrome). V8 berfungsi untuk mengeksekusi kode JavaScript dengan sangat cepat.

### ⭒ Konsep Dasar Node.js

Node.js menggunakan pendekatan **asinkron** dan **event-driven**. Artinya, Node.js tidak menunggu satu proses selesai untuk memulai proses lain. Ini membuat aplikasi yang dibangun dengan Node.js lebih cepat dan efisien.

**Model Kerja:**

- **Event Loop**: Mengatur proses yang berjalan bersamaan tanpa menghentikan aplikasi.
- **Non-Blocking I/O**: Node.js bisa memproses permintaan baru walau operasi sebelumnya belum selesai.

### ⭒ Kelebihan Node.js

1. **Efisien dan Skalabel**  
   Mampu menangani banyak permintaan sekaligus dengan sumber daya minimal.
2. **Responsif**  
   Cocok untuk aplikasi real-time seperti chat atau notifikasi.
3. **Cross-Platform**  
   Bisa dijalankan di Windows, macOS, dan Linux.
4. **Bahasa Seragam**  
   Menggunakan JavaScript di sisi client dan server.
5. **Ekosistem NPM yang Besar**  
   Ribuan modul siap digunakan untuk mempercepat pengembangan.

### ⭒ Modul Penting Node.js

Node.js memiliki modul bawaan untuk kebutuhan jaringan:

- `http` dan `https`: Membuat server web.
- `net`: Membangun server TCP atau UDP.
- `fs`: Mengakses dan memanipulasi file.
- `path`: Mengelola jalur file sistem.

### ⭒ Instalasi Node.js

1. Unduh dari https://nodejs.org/
2. Jalankan installer sesuai sistem operasi.
3. Verifikasi instalasi:

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/154bdf8c-6c20-4401-ab8b-2daec584eb1c" id="jobsheet-02">

`✦ Node.js Module System ✦`

Sistem modul di Node.js membantu pengembang membagi kode menjadi bagian-bagian kecil yang bisa digunakan ulang. Setiap file JavaScript di Node.js dianggap sebagai modul yang dapat diimpor ke file lain.

**Konsep utama:**

1. **CommonJS**  
   Standar yang digunakan Node.js untuk mendefinisikan dan mengimpor modul.
2. **Modul**  
   File JavaScript independen yang berisi fungsi atau variabel yang bisa digunakan ulang.
3. **require()**  
   Digunakan untuk mengimpor modul lain ke dalam file.  
   Contoh: const fs = require('fs')
4. **module.exports**
   Digunakan untuk mengekspor fungsi atau objek agar bisa digunakan di file lain.
   Contoh: module.exports = ambilCatatan
5. **Modul Bawaan (Built-in)**  
   Node.js menyediakan modul seperti `fs`, `http`, dan `path` tanpa perlu instalasi tambahan.

### ⭒ Node Package Manager (NPM)

NPM adalah alat untuk mengelola, menginstal, dan membagikan paket dalam proyek Node.js.

**Konsep penting:**

1. **Package**  
   Kumpulan kode JavaScript dan file konfigurasi yang digunakan untuk fitur tertentu.
2. **package.json**  
   File konfigurasi proyek Node.js yang berisi informasi paket dan dependensi.
3. **Instalasi Paket**  
   Gunakan perintah: npm install [nama_package]
4. **Publikasi Paket**  
   Pengembang dapat membagikan paket mereka ke repositori NPM.

### ⭒ Command Line Arguments

Argumen tambahan yang dikirim lewat terminal saat menjalankan program.

### ⭒ Yargs

Library untuk memproses argumen terminal dengan mudah.

### ⭒ JSON

Format untuk menyimpan data pada aplikasi Node.js.

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/8b280a80-fb87-483e-b053-2625eb6a7b8b" id="jobsheet-03">

`✦ HTTP Request and API ✦`

### ⭒ HTTP Request

HTTP (Hypertext Transfer Protocol) Request adalah mekanisme utama yang digunakan klien seperti browser atau aplikasi untuk berkomunikasi dengan server web. Melalui HTTP Request, klien dapat meminta halaman web, data, atau sumber daya lainnya dari server.

**Tahapan utama dalam proses HTTP Request:**

1. **Inisiasi Permintaan**  
   Klien membuat koneksi ke server menggunakan protokol TCP/IP dan menentukan jenis permintaan, seperti GET, POST, PUT, atau DELETE.
2. **Pembentukan Request**  
   Klien menyiapkan pesan HTTP berisi metode, URI, versi HTTP, header, dan isi permintaan jika diperlukan.
3. **Pengiriman ke Server**  
   Klien mengirimkan pesan ke server tujuan sesuai alamat IP atau domain yang diminta.
4. **Pemrosesan oleh Server**  
   Server menerima permintaan, mengeksekusi instruksi sesuai metode yang digunakan, dan menyiapkan respons.
5. **Pengiriman Respons**  
   Server mengirim kembali hasil berupa HTTP Response yang berisi status, header, dan data yang diminta.
6. **Penerimaan oleh Klien**  
   Klien menerima data dari server, menampilkannya, dan jika perlu mengirim permintaan tambahan seperti gambar atau file lain.
7. **Penutupan Koneksi**  
   Setelah komunikasi selesai, koneksi dapat ditutup atau dipertahankan tergantung konfigurasi server.

**Komponen penting dalam HTTP Response:**

- **Status Code** (misal 200 OK, 404 Not Found, 500 Internal Server Error).
- **Header** (berisi metadata seperti tipe konten, panjang data, atau cookie).
- **Body** (isi data yang dikirimkan server ke klien).

HTTP menjadi fondasi komunikasi antara klien dan server dalam pengembangan aplikasi web modern.

---

### ⭒ API (Application Programming Interface)

API adalah kumpulan aturan dan protokol yang memungkinkan aplikasi saling berinteraksi dan bertukar data. API berperan sebagai jembatan antara dua sistem berbeda agar dapat saling berkomunikasi tanpa harus mengetahui detail internal satu sama lain.

**Konsep utama API:**

1. **Abstraksi**  
   API menyembunyikan detail kompleks sistem dan menyediakan antarmuka sederhana untuk digunakan oleh pengembang.
2. **Kegunaan**  
   API memungkinkan integrasi antara aplikasi, perangkat keras, atau layanan pihak ketiga seperti peta, cuaca, dan pembayaran.
3. **Model Request–Response**  
   API bekerja dengan pola permintaan dan tanggapan. Klien mengirim _request_ dan API memberikan _response_ dalam format tertentu seperti JSON atau XML.
4. **Endpoint**  
   Setiap fungsi API diakses melalui URL tertentu. Contohnya, API cuaca memiliki endpoint untuk mendapatkan data suhu atau ramalan.
5. **Format Data**  
   Umumnya menggunakan JSON karena mudah dibaca dan diproses oleh berbagai bahasa pemrograman.
6. **Autentikasi dan Otorisasi**  
   API sering dilindungi dengan mekanisme seperti API Key, Token, atau OAuth untuk memastikan hanya pengguna terverifikasi yang bisa mengakses.
7. **Dokumentasi**  
   Setiap API memiliki dokumentasi resmi yang menjelaskan endpoint, parameter, serta contoh permintaan dan respons.

---

### ⭒ Jenis API Berdasarkan Akses

1. **Private API** – Digunakan secara internal oleh organisasi.
2. **Public API** – Dapat diakses oleh siapa pun dengan izin tertentu.
3. **Partner API** – Hanya dapat digunakan oleh mitra resmi yang memiliki otorisasi.

---

### ⭒ API dalam Pengembangan Aplikasi

API memungkinkan sistem bekerja secara modular dan efisien. Contohnya:

- API **Weatherstack** menyediakan data cuaca secara real-time.
- API **Mapbox** memberikan layanan geolokasi dan peta.  
  Dengan menggunakan API, pengembang dapat menambahkan fitur kompleks tanpa membangun sistem dari awal.

---

### ⭒ Autentikasi API

Autentikasi memastikan keamanan dalam pertukaran data.

- **API Key** digunakan untuk mengidentifikasi pengguna atau aplikasi.
- **OAuth** digunakan untuk otorisasi tingkat lanjut agar pengguna bisa mengontrol data yang diizinkan diakses.

Proses autentikasi ini memastikan bahwa hanya aplikasi sah yang dapat menggunakan layanan API tertentu.

---

### ⭒ Peran HTTP dalam API

Sebagian besar API modern menggunakan protokol HTTP/HTTPS untuk komunikasi.  
Metode HTTP yang umum digunakan:

- **GET** untuk mengambil data.
- **POST** untuk mengirim data.
- **PUT** untuk memperbarui data.
- **DELETE** untuk menghapus data.

Model ini dikenal dengan istilah **RESTful API**, yaitu gaya arsitektur yang memanfaatkan standar HTTP untuk mengelola sumber daya.

---

### ⭒ Manfaat Penggunaan API

1. **Efisiensi** – Pengembang tidak perlu membuat ulang sistem yang sudah ada.
2. **Keterhubungan** – Memungkinkan integrasi lintas platform dan layanan.
3. **Keamanan** – Mengontrol akses data melalui autentikasi.
4. **Skalabilitas** – Memudahkan pengembangan sistem besar secara bertahap.
5. **Pemeliharaan Mudah** – Perubahan bisa dilakukan di satu sisi tanpa mengganggu keseluruhan aplikasi.

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/47fc03ce-4c33-4f8a-bffd-0c3bb65bfcc3" id="jobsheet-04">

`✦ JavaScript Essentials ✦`

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif dan dinamis. JavaScript dapat berjalan di sisi klien (browser) maupun di sisi server (menggunakan Node.js).

---

### ⭒ Variabel dan Tipe Data

Variabel digunakan untuk menyimpan data.  
Penulisan dapat menggunakan `var`, `let`, atau `const`.

**Tipe data utama:**

- String (teks)
- Number (angka)
- Boolean (true/false)
- Array (kumpulan data)
- Object (pasangan key-value)

---

### ⭒ Operator

JavaScript memiliki beberapa jenis operator:

- Aritmatika: `+`, `-`, `*`, `/`, `%`
- Perbandingan: `==`, `===`, `!=`, `>`, `<`
- Logika: `&&`, `||`, `!`
- Penugasan: `=`, `+=`, `-=`

---

### ⭒ Struktur Kendali

1. **Percabangan**  
   Menggunakan `if`, `else if`, `else`, dan `switch`.
2. **Perulangan**  
   Menggunakan `for`, `while`, dan `do...while`.

---

### ⭒ Fungsi

Fungsi digunakan untuk mengelompokkan perintah agar mudah dipakai ulang.

**Contoh:**

```
function tambah(a, b) {
  return a + b
}
```

Fungsi dapat disimpan dalam variabel atau ditulis sebagai _arrow function_:

```
const kali = (a, b) => a * b
```

---

### ⭒ Objek dan Array

**Objek:** Menyimpan data dalam bentuk pasangan kunci–nilai.

```
const siswa = { nama: "Budi", umur: 18 }
```

**Array:** Menyimpan banyak nilai dalam satu variabel.

```
const angka = [1, 2, 3, 4]
```

---

### ⭒ Konsep Asinkron

JavaScript mendukung pemrosesan asinkron untuk menangani banyak tugas tanpa menunggu satu selesai terlebih dahulu.

Contoh pendekatan asinkron:

- **Callback**
- **Promise**
- **Async/Await**

---

### ⭒ DOM dan Event

**DOM (Document Object Model)** memungkinkan JavaScript mengubah konten dan struktur HTML secara dinamis.  
**Event** digunakan untuk merespons tindakan pengguna seperti klik atau input.

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/4253d696-acba-49ec-8579-a95d35666747" id="jobsheet-05">

`✦ Web Server and ExpressJs ✦`

### ⭒ Web Server

Web server adalah sistem yang berfungsi menyimpan, memproses, dan mengirimkan halaman web kepada pengguna melalui jaringan internet. Ketika pengguna mengakses situs web, permintaan dikirim ke web server untuk diproses, kemudian hasilnya dikembalikan ke browser dalam bentuk halaman web.

**Komponen utama web server:**

1. **Perangkat keras (Hardware)**  
   Komputer yang menyimpan file situs web seperti HTML, CSS, gambar, dan JavaScript.
2. **Perangkat lunak (Software)**  
   Program yang mengatur cara file web dikirim ke pengguna menggunakan protokol HTTP.

**Jenis web server:**

- **Statis**: Mengirimkan file apa adanya tanpa modifikasi.
- **Dinamis**: Menghasilkan konten dengan bantuan server aplikasi dan database sebelum dikirim ke browser.

Server web berperan penting dalam memastikan komunikasi antara klien (browser) dan server terjadi dengan lancar melalui protokol HTTP.

---

### ⭒ Express.js

Express.js adalah framework backend berbasis JavaScript yang dibangun di atas Node.js. Framework ini digunakan untuk membangun aplikasi web dan API dengan cepat, terstruktur, dan efisien.

**Hubungan Node.js dan Express.js:**

- Node.js berperan sebagai lingkungan runtime yang menjalankan JavaScript di sisi server.
- Express.js menjadi lapisan framework di atas Node.js yang menyederhanakan pembuatan rute, pengelolaan request–response, dan integrasi middleware.

**Perbedaan utama:**
| Aspek | Node.js | Express.js |
|-------|----------|------------|
| Jenis | Runtime Environment | Framework Web |
| Fungsi | Menjalankan JavaScript di server | Menyusun arsitektur aplikasi web |
| Fitur | Dasar, masih perlu konfigurasi manual | Lengkap dengan fitur routing, templating, dan middleware |
| Bahasa | JavaScript, C, C++ | JavaScript |
| Kegunaan | Dasar server-side programming | Membuat aplikasi web dan REST API |

---

### ⭒ Kelebihan Express.js

1. **Cepat dan Efisien**  
   Dirancang agar proses pengembangan web menjadi singkat dan terstruktur.
2. **Penanganan Request dan Error yang Baik**  
   Mendukung banyak permintaan sekaligus serta memiliki sistem deteksi kesalahan yang kuat.
3. **Fleksibel dan Mudah Dikustomisasi**  
   Tidak memiliki aturan ketat dalam penulisan struktur aplikasi, memberi kebebasan pada pengembang.
4. **Mendukung REST API dan Middleware**  
   Cocok untuk membangun aplikasi berbasis layanan seperti API.
5. **Integrasi Mudah dengan Database**  
   Dapat terhubung ke berbagai sistem basis data seperti MongoDB, MySQL, dan PostgreSQL.

---

### ⭒ Templating dan Tampilan

Express.js dapat digabungkan dengan _template engine_ seperti Handlebars (HBS) untuk memisahkan logika program dari tampilan.  
Dengan sistem ini, tampilan web bisa dibuat dinamis menggunakan data dari server tanpa menulis HTML secara manual di setiap halaman.

**Keuntungan sistem templating:**

- Memudahkan pembuatan antarmuka yang konsisten.
- Mengurangi duplikasi kode tampilan.
- Mendukung penggunaan _partials_ seperti header dan footer bersama di banyak halaman.

---

### ⭒ Routing

Routing dalam Express.js menentukan bagaimana aplikasi merespons permintaan dari pengguna berdasarkan URL tertentu.  
Setiap rute dapat dikonfigurasi untuk memproses permintaan GET, POST, PUT, atau DELETE sesuai kebutuhan aplikasi.

---

### ⭒ Wildcard Route (404 Handling)

Wildcard route digunakan untuk menangani permintaan yang tidak cocok dengan rute mana pun di aplikasi.  
Biasanya dimanfaatkan untuk menampilkan halaman kesalahan seperti **404 - Not Found**.

Dengan ini, pengguna tetap mendapatkan informasi yang ramah meskipun halaman yang diminta tidak tersedia.

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/88657d6f-1873-4306-9265-cb8fb76e7466" id="jobsheet-06">

`✦ Jobsheet6 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/e679486d-7624-4caf-b7d3-06dee1e2b994" id="jobsheet-07">

`✦ Jobsheet7 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/6960d85a-c1fa-463a-955c-24fc0e1a748b" id="jobsheet-08">

`✦ Jobsheet8 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/77f59d7a-d0bf-442a-80e8-0fb7595513c7" id="jobsheet-09">

`✦ Jobsheet9 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/f257220c-951b-4926-97b7-35d4eb960045" id="jobsheet-10">

`✦ Jobsheet10 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/ace3e92e-606b-49cf-89ff-f9121e64c33e" id="jobsheet-11">

`✦ Jobsheet11 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/336e7ade-ebbc-4df9-9abb-9332f57e10aa" id="jobsheet-12">

`✦ Jobsheet12 ✦`

<hr/>

## <img height="50" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/a053617b-cbc1-484d-88fe-2d9de0b817c0" id="jobsheet-13">

`✦ Jobsheet13 ✦`

<hr/>
<hr/>

</br>
</a>
<hr/>
<hr/>

## <a id="kontribusi"></a>【 Kontribusi 】

Saya menyambut kontribusi dari siapa pun. Jika Anda ingin berkontribusi, silakan fork repository ini, buat branch baru untuk perubahan Anda, dan ajukan pull request. Pastikan untuk memberikan deskripsi yang jelas tentang apa yang Anda ubah dan mengapa.

1. Fork repository ini.
2. Buat branch fitur baru: `git checkout -b fitur-anda`.
3. Commit perubahan Anda: `git commit -am 'Menambahkan fitur baru'`.
4. Push ke branch: `git push origin fitur-anda`.
5. Buat pull request baru.

## <a id="informasi-dosen"></a>【 Informasi Dosen 】

<img align="left" width="160" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/58bffcd0-9983-4a84-9fc6-857c625cb609">

**Randi Proska Sandra, S.Pd, M.Sc** </br>
`Lecturer in Informatics` </br></br>
Randi completed his graduate degree at the Graduate Institute of Network Learning Technology, National Central University, Taiwan. He is a lecturer in the Informatics Bachelor Program at Universitas Negeri Padang, with interests in learning analytics, UI/UX design, software engineering project management, AI-supported educational technologies, and educational data mining. He has training from Microsoft, INTEL, AWS, and the Python Institute, and is a Google Certified Educator and Adobe Creative Educator.

## <a id="about"></a>【 About and Help 】

Untuk bantuan dan pertanyaan, silahkan hubungi sosial media saya:
<img align="right" width="100" src="https://github.com/SirGhazian/praktikum-struktur-data-UNP/assets/142916107/b140fe43-3a57-4295-8493-79d929a5e3b0">

- [![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/ghazian_tza)
- [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://www.youtube.com/channel/UCIp_064wQ8RqNSEy1asx_4w)
