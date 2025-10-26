const fs = require("fs");

const buku = {
  judul: "Cara Mencetak Gol Indah",
  penulis: "Cristiano Ronaldo",
};

const bookJSON = JSON.stringify(buku);
fs.writeFileSync("./testsite/1-jsontest.json", bookJSON);
