const yargs = require("yargs");
const catatan = require("./catatan.js");

yargs.version("10.1.0");

// Command tambah
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Judul: " + argv.judul);
    console.log("Isi: " + argv.isi);
  },
});

// Command hapus
yargs.command({
  command: "hapus",
  describe: "hapus catatan",
  handler: function () {
    console.log("Catatan berhasil dihapus");
  },
});

// Command list untuk menampilkan semua catatan
yargs.command({
  command: "list",
  describe: "menampilkan semua catatan",
  handler: function () {
    console.log("Menampilkan semua catatan...");
  },
});

yargs.command({
  command: "read",
  describe: "membaca sebuah catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang ingin dibaca",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Membaca catatan dengan judul: " + argv.judul);
  },
});

// Jalankan yargs
yargs.parse();
