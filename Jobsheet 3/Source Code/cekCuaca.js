const request = require("postman-request");
const urlCuaca =
  "http://api.weatherstack.com/current?access_key=b5fbef7791867b6a91ae0f28a07b49cc&query=-0.898180575861472,100.35046424368649";

console.log("========== CEK CUACA ==========");

request({ url: urlCuaca, json: true }, (error, response) => {
  if (error) {
    return console.log("Terjadi kesalahan saat mengambil data cuaca!");
  }

  console.log(">>> HASIL CUACA <<<");
  console.log("Suhu saat ini: " + response.body.current.temperature + "°C");
  console.log("Kemungkinan hujan: " + response.body.current.precip + "%");
  console.log("Deskripsi cuaca: " + response.body.current.weather_descriptions[0]);
  console.log("================================");
});
