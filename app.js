const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const Photo = require('./models/Photo');

const app = express();

//* Connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//* TEMPLATE ENGINE
app.set('view engine', 'ejs');

//* MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

//* ROUTES
app.get('/', async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req, res) => {
  // console.log(req.files.image)
  // await Photo.create(req.body);
  // res.redirect('/');

  const uploadDir = 'public/uploads/';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadedImage.name,
    });
    res.redirect('/');
  });
});

//* Upload Photo with exress.fileUpload

app.get('/photos/:id', async (req, res) => {
  // res.render('add');
  //console.log(req.params.id)   // gönderilen id'yi yakalayıp yazdırıyoruz
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
});

//* Edit Photo
app.get('/photos/edit/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', { photo });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
