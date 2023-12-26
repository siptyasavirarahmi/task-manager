const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);
        //db.collection('pengguna').deleteMany({
          //  usia: 21
        //}).then((result) => {
          //  console.log(result);
        //}).catch((error) => {
          //  console.error(error);
        //})
        // Menggunakan deleteOne untuk menghapus satu data tugas
        const deletedTugas = await db.collection('tugas').deleteOne({
            Deskripsi: 'Memberikan bimbingan'
        });

        if (deletedTugas.deletedCount === 1) {
            console.log('Data Tugas berhasil dihapus');
        } else {
            console.log('Data Tugas tidak ditemukan');
        }
    } catch (error) {
        console.error(error);
    }
}

main();