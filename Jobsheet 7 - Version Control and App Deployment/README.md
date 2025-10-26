# Penjelasan Perintah Git"
---

## 1) Membuat Repository Baru Pada GitHub
<img width="100%" alt="1" src="https://github.com/user-attachments/assets/0dd80470-d7a5-43d5-8eda-f6a0fb4a3561" />
Langkah ini dilakukan untuk menyiapkan tempat penyimpanan proyek secara online di GitHub. Repository berfungsi sebagai wadah utama untuk menyimpan semua file proyek, riwayat versi, dan catatan perubahan.
Setelah repository dibuat, GitHub akan memberikan URL seperti https://github.com/username/nama-repo.git. Alamat ini digunakan untuk menghubungkan proyek di komputer lokal dengan GitHub menggunakan perintah git remote add origin.

---

<img width="100%" alt="2" src="https://github.com/user-attachments/assets/15dff485-e882-4ce4-a760-d0e9ff7f5b8b" />

## 2) `git init`
Perintah ini digunakan untuk membuat repositori Git baru di dalam folder proyek. Setelah dijalankan, Git akan membuat folder tersembunyi bernama `.git` yang berisi seluruh data dan riwayat versi proyek.  
Git mulai memantau semua perubahan file di folder tersebut. Setiap modifikasi, penghapusan, atau penambahan file bisa dilacak oleh Git setelah tahap ini.

## 3) `git remote add origin https://github.com/SirGhazian/website-cek-cuaca.git`
Perintah ini menghubungkan repositori lokal dengan repositori jarak jauh (remote repository) yang ada di GitHub.  
`origin` digunakan sebagai nama alias standar untuk repositori jarak jauh utama.  
Dengan mengatur remote ini, setiap kali pengguna melakukan push atau pull, Git akan tahu ke mana perubahan harus dikirim atau dari mana pembaruan harus diambil.  
Contohnya, semua perubahan dari proyek lokal di komputer akan dikirim ke alamat GitHub tersebut.

## 4) `git add .`
Perintah ini menambahkan semua file dan folder yang ada di direktori proyek ke dalam *staging area*.  
*Staging area* adalah tempat sementara sebelum perubahan benar-benar disimpan ke dalam commit.  
Titik (`.`) berarti Git akan menambahkan semua file di direktori saat ini, baik file baru, file yang diubah, maupun file yang dihapus.  
Tahap ini penting karena Git hanya akan menyimpan perubahan yang sudah masuk ke staging area.

## 5) `git commit -m "first push"`
Setelah file ditambahkan ke staging area, perintah ini digunakan untuk menyimpan snapshot proyek ke dalam riwayat Git.  
Pesan `"first push"` berfungsi sebagai catatan atau deskripsi singkat tentang isi perubahan yang dilakukan.  
Commit membantu pengembang melacak apa yang diubah di setiap versi proyek.  
Commit pertama biasanya digunakan untuk menyimpan versi awal proyek setelah struktur utama atau file dasar selesai dibuat.

## 6) `git push origin main`
Perintah ini mengirimkan semua commit dari cabang lokal `main` ke cabang `main` yang ada di repositori GitHub.  
Git akan mengunggah seluruh file dan riwayat versi ke repositori jarak jauh sehingga proyek dapat diakses atau dikerjakan bersama orang lain.  
Pesan `[new branch] main -> main` menandakan bahwa cabang `main` baru saja dibuat di GitHub karena sebelumnya belum ada.  
Setelah proses ini selesai, repositori GitHub akan berisi semua file proyek dari komputer lokal.

## Urutan Kerja Perintah
1. Buat repositori Git di folder proyek menggunakan `git init`.  
2. Hubungkan repositori lokal dengan GitHub menggunakan `git remote add origin`.  
3. Tambahkan semua file proyek ke staging area menggunakan `git add .`.  
4. Simpan perubahan dalam riwayat Git menggunakan `git commit`.  
5. Unggah seluruh commit ke GitHub menggunakan `git push`.  
