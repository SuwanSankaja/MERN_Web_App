import Product from '../models/product.model.js';

export const addProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: 'All fields are required' });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        res.status(201).json({success:true, message: 'Product created successfully', data: newProduct});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'Error in creating product'});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        await Product.findByIdAndDelete(id);
        res.json({success:true, message: 'Product deleted successfully'});
    } catch (error) {
        console.log(error);
        return res.status(404).json({success:false, message: 'Product not found'});
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({success:true, data: products});
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: 'Error in fetching products'});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
    try {
        await Product.findByIdAndUpdate(id, product, {new: true});
        res.json({success:true, message: 'Product updated successfully'});
    } catch (error) {
        console.log(error);
        return res.status(404).json({success:false, message: 'Product not found'});
    }}