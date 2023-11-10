const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// creating schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//Creating a photo
// Photo.create({
//   title: 'Photo title 2',
//   description: 'Photo description 2',
// })
//   .then((createdPhoto) => {
//     console.log('Photo Created:', createdPhoto);
//   })
//   .catch((err) => {
//     console.log('Photo create error:', err);
//   });


// read a photo from the database
// Photo.find({})
//   .then((photos) => {
//     console.log('Tüm fotoğraflar:');
//     photos.forEach((photo) => {
//       console.log(`Başlık: ${photo.title}, Açıklama: ${photo.description}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Fotoğrafları alma hatası:', error);
//   });



// update photo
// const id = '654e2de53feba401f4f68bad';

// Photo.findByIdAndUpdate(id, { 
//   title: "Photo title 2 updated",
//   description: "Photo desc 2 updated"
// })
//   .then(updatedPhoto => {
//     if (updatedPhoto) {
//       console.log('Photo Updated:', updatedPhoto);
//     } else {
//       console.log('Photo is not found.');
//     }
//   })
//   .catch(err => {
//     console.error('Photo updated error:', err);
//   });

// delete a photo

// const id = '654e2de53feba401f4f68bad';

// Photo.findByIdAndDelete(id)
//   .then((deletedPhoto) => {
//     if (deletedPhoto) {
//       console.log('Fotoğraf silindi:', deletedPhoto);
//     } else {
//       console.log('Verilen Kimlikle Fotoğraf bulunamadı.');
//     }
//   })
//   .catch((error) => {
//     console.error('Fotoğraf silme hatası:', error);
//   });

