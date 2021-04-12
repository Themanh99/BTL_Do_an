import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      description: { type: String, required: true },
      trangthai:{ type: Boolean , required: true},
      kieudang: { type: String , required: true},
      dongsanpham: { type: String , required: true},
      category: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      ngaynhap: { type: String , required: true},
      mau: { type: String , required: true},
      brand: { type: String, required: true },
      rating: { type: Number, required: true },
      review: { type: Number, required: true },
      soluongco: { type: Number, required: true },
      isActive: { type: Boolean , required: true},
    },
    {
      timestamps: true,
    }
  );
  const Product = mongoose.model('Product', productSchema);
  
  export default Product;