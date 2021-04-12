import expressAsyncHandler from 'express-async-handler';
import express from 'express';
import data from '../data.js';
import Product from '../models/productModel.js';
import { isAdmin, isAuth } from '../util.js';


const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send({ products });
})
);

productRouter.get('/seed',
    expressAsyncHandler(async (req, res) => {
        // await Product.remove({});
        const createProducts = await Product.insertMany(data.products);
        res.send({ createProducts });
    })
);

productRouter.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }

}));

productRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const product = new Product({
            name: 'samle name ' + Date.now(),
            description: 'sample description',
            trangthai: true,
            kieudang: 'High',
            dongsanpham: 'vi du',
            category: 'same cate',
            image: '/images/giay1.jpg',
            price: 0,
            ngaynhap: Date.now(),
            mau: 'Do',
            brand: 'Nhan hieu',
            rating: 0,
            review: 0,
            soluongco: 0,
            isActive: true,
        });
        const createdProduct = await product.save();
        res.send({ message: 'Sản phẩm đã được tạo', product: createdProduct });
    })
);
productRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (product) {
            product.name = req.body.name;
            product.description = req.body.description;
            product.kieudang = req.body.kieudang;
            product.dongsanpham = req.body.dongsanpham;
            product.category = req.body.category;
            product.image = req.body.image;
            product.price = req.body.price;
            product.mau = req.body.mau;
            product.brand = req.body.brand;
            product.soluongco = req.body.soluongco;
            product.isActive = req.body.isActive;
            const updatedProduct = await product.save();
            res.send({ message: 'Product Updated', product: updatedProduct });
        } else {
            res.status(404).send({ message: 'Product Not Found' });
        }
    })
);
productRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        const deleteProduct = await product.remove();
        res.send({ message: 'Sản phẩm đã được xóa!', product: deleteProduct });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

export default productRouter;