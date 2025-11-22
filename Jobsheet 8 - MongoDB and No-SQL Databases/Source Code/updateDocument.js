const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "manajer-task";

async function main() {
  try {
    await client.connect();
    console.log("✔ Terhubung ke MongoDB\n");

    const db = client.db(namaDatabase);

    // =========================================================
    // 1. UPDATE ONE
    // =========================================================

    // const updateOneResult = await db.collection("pengguna").updateOne(
    //   { _id: new ObjectId("653be4158f34d12b7d8c5b98") },

    //   // { $set: { nama: 'Randikun' } },

    //   { $inc: { usia: 1 } }
    // );

    // console.log("Hasil updateOne");
    // console.log(updateOneResult);

    // =========================================================
    // 2. UPDATE MANY
    // =========================================================

    // const updateManyResult = await db
    //   .collection("tugas")
    //   .updateMany({ StatusPenyelesaian: false }, { $set: { StatusPenyelesaian: true } });

    // console.log("Hasil updateMany");
    // console.log("Jumlah dokumen yang berubah:", updateManyResult.modifiedCount);

    // =========================================================
    // 3. Membuat semua data pengguna menjadi unik
    // =========================================================

    const semuaPengguna = await db.collection("pengguna").find().toArray();

    const operasi = semuaPengguna.map((item, index) => ({
      updateOne: {
        filter: { _id: item._id },
        update: {
          $set: {
            nama: item.nama + "_" + index,
            usia: item.usia + index,
          },
        },
      },
    }));

    const hasilBulk = await db.collection("pengguna").bulkWrite(operasi);

    console.log("SELESAI");
    console.log("Total dokumen diubah:", hasilBulk.modifiedCount);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
