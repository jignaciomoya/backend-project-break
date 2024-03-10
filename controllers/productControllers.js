const Product = require('../models/Product');

const showNewProductForm = (req, res) => {
  res.render('newProductForm');
};

const addProduct = async (req, res) => {
  try {
    const { name, description, image, category, size, price } = req.body;
    const product = new Product({ name, description, image, category, size, price });
    await product.save();
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const showEditProductForm = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.render('editProductForm', { product });
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const editProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { name, description, image, category, size, price } = req.body;
    await Product.findByIdAndUpdate(productId, { name, description, image, category, size, price });
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    await Product.findByIdAndDelete(productId);
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = { showNewProductForm, addProduct, showEditProductForm, editProduct, deleteProduct };
