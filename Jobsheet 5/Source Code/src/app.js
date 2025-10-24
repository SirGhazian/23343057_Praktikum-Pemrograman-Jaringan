const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const direktoriPublic = path.join(__dirname, "../public");
const direktoriViews = path.join(__dirname, "../templates/views");
const direktoriPartials = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", direktoriViews);
hbs.registerPartials(direktoriPartials);

app.use(express.static(direktoriPublic));

// Halaman Utama
app.get("", (req, res) => {
  res.render("index", {
    judul: "Aplikasi Cek Cuaca",
    nama: "Muhammad Ghazian",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Tentang
app.get("/tentang", (req, res) => {
  res.render("tentang", {
    judul: "Halaman Tentang",
    nama: "Muhammad Ghazian",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Bantuan
app.get("/bantuan", (req, res) => {
  res.render("bantuan", {
    judul: "Halaman Bantuan",
    teksBantuan: "Ini adalah teks bantuan",
    nama: "Muhammad Ghazian",
    ikon: "/img/cuacaIcon.png",
  });
});

// Halaman Info Cuaca
app.get("/infoCuaca", (req, res) => {
  res.send([
    {
      prediksiCuaca: "Cuaca Hari Ini Hujan Deras Brooooo",
      lokasi: "Jepang",
    },
  ]);
});

// Halaman 404 untuk /bantuan/*
app.get(/^\/bantuan\/.*/, (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Muhammad Ghazian",
    pesanKesalahan: "Artikel yang dicari tidak ditemukan.",
    ikon: "/img/cuaca.png",
  });
});

// Halaman 404 umum untuk semua rute lain
app.get(/.*/, (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Muhammad Ghazian",
    pesanKesalahan: "Halaman tidak ditemukan.",
    ikon: "/img/cuaca.png",
  });
});

app.listen(4000, () => {
  console.log("Server berjalan di http://localhost:4000");
});
