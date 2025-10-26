const yargs = require("yargs");
const catatan = require("./catatan.js");

yargs.command({
  command: "tambah",
  describe: "Menambahkan catatan baru",
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
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});

yargs.command({
  command: "hapus",
  describe: "Menghapus catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang akan dihapus",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.hapusCatatan(argv.judul);
  },
});

yargs.command({
  command: "list",
  describe: "Menampilkan semua catatan",
  handler: function () {
    catatan.listCatatan();
  },
});

yargs.command({
  command: "read",
  describe: "Membaca satu catatan",
  builder: {
    judul: {
      describe: "Judul catatan yang akan dibaca",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    catatan.bacaCatatan(argv.judul);
  },
});

yargs.parse();
