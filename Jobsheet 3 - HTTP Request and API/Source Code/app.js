const request = require("postman-request");
// const url =
//   "http://api.weatherstack.com/current?access_key=b5fbef7791867b6a91ae0f28a07b49cc&query=-0.898180575861472,100.35046424368649";
// request({ url: url }, (error, response) => {
//   console.log(response);
//   const data = JSON.parse(response.body);
//   console.log(data);
//   console.log(data.current);
//   console.log(data.current.temperature);
// });

// API LOKASI
const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Pariaman.json?limit=1&access_token=pk.eyJ1IjoiYWxkaTEyMzEyMyIsImEiOiJjbWdhOGMxbXcwaHU1MmlxNDVzdDJ0OTc5In0.7MgK0dUTdwzaariwBbj_eQ";

console.log("========== MENCARI DATA LOKASI ==========");

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    return console.log("Gagal menghubungi layanan geocode!");
  }

  const data = response.body;
  const latitude = data.features[0].center[1];
  const longitude = data.features[0].center[0];

  console.log(">>> Lokasi ditemukan <<<");
  console.log("Nama Lokasi     : " + data.features[0].place_name);
  console.log("Koordinat       : " + latitude + ", " + longitude);
  console.log("Tipe Lokasi     : " + data.features[0].place_type[0]);
  console.log("=========================================");

  // API CUACA
  const urlCuaca = `http://api.weatherstack.com/current?access_key=b5fbef7791867b6a91ae0f28a07b49cc&query=${latitude},${longitude}`;
  console.log("\n========== MENGAMBIL DATA CUACA =========");

  request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
      return console.log("Gagal menghubungi layanan cuaca!");
    }

    const cuaca = response.body;
    console.log(">>> Data Cuaca Ditemukan <<<");
    console.log("Lokasi          : " + cuaca.location.name);
    console.log("Suhu Saat Ini   : " + cuaca.current.temperature + "°C");
    console.log("Kelembapan      : " + cuaca.current.humidity + "%");
    console.log("Kemungkinan Hujan : " + cuaca.current.precip + "%");
    console.log("Kondisi Langit  : " + cuaca.current.weather_descriptions[0]);
    console.log("=========================================");
    console.log(
      ">>> Cuaca di " +
        cuaca.location.name +
        " terasa " +
        cuaca.current.weather_descriptions[0].toLowerCase() +
        " dengan suhu " +
        cuaca.current.temperature +
        "°C <<<"
    );
  });
});
