const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
dbConnection();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
