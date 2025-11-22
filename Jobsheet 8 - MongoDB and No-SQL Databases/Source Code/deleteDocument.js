const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "manajer-task";

async function main() {
  try {
    await client.connect();
    console.log("Berhasil terhubung ke MongoDB database server");

    const db = client.db(namaDatabase);

    // =========================================================
    // HAPUS USER
    // =========================================================

    // db.collection("tugas")
    //   .updateMany({ StatusPenyelesaian: false }, { $set: { StatusPenyelesaian: true } })
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     client.close();
    //   });

    // =========================================================
    // HAPUS TASK
    // =========================================================

    const hasilDelete = await db.collection("tugas").deleteOne({
      _id: new ObjectId("6921d323bb01d16becf7a442"),
    });

    console.log("Hasil deleteOne:", hasilDelete);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

main();
