const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const namaDatabase = "manajer-task";

async function main() {
  try {
    await client.connect();
    console.log("\n✔ Koneksi ke MongoDB berhasil\n");

    const db = client.db(namaDatabase);

    const byNama = await db.collection("pengguna").findOne({ nama: "Ghazian" });

    const byObjectID = await db.collection("pengguna").findOne({
      _id: new ObjectId("6921d323bb01d16becf7a441"),
    });

    const toArray = await db.collection("pengguna").find({ usia: 28 }).toArray();

    console.log("================ HASIL PENCARIAN ================\n");

    if (byNama) {
      console.log("• Berdasarkan Nama:\n", byNama, "\n");
    } else {
      console.log("• Tidak ditemukan berdasarkan Nama\n");
    }

    if (byObjectID) {
      console.log("• Berdasarkan ObjectID:\n", byObjectID, "\n");
    } else {
      console.log("• Tidak ditemukan berdasarkan ObjectID\n");
    }

    if (toArray.length > 0) {
      console.log("• Hasil Pencarian Usia (Array):\n", toArray, "\n");
    } else {
      console.log("• Tidak ada data dengan usia tersebut\n");
    }

    console.log("=================================================\n");
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
