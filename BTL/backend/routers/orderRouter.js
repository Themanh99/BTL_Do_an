import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth } from '../util.js';
import Order from '../models/orderModel.js';

const orderRouter = express.Router();

orderRouter.get('/lichsumua' , isAuth ,expressAsyncHandler(async(req,res) =>{
    const orders = await Order.find({user: req.user._id});
    res.send(orders);
}))
orderRouter.post('/',isAuth, expressAsyncHandler(async(req,res) => {
    if(req.body.orderItems.length ===0){
        res.status(400).send({message: 'Gio hang trong'});
    }
    else{
        const order = new Order({
            orderItems: req.body.orderItems,
            ConfirmInfo: req.body.ConfirmInfo,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
          });
        const createOrder = await order.save();
        res.status(201).send({message: 'New Order vua duoc tao' , order: createOrder});
    }
}));
orderRouter.get('/:id' , isAuth , expressAsyncHandler(async(req,res) => {
    const order  = await Order.findById(req.params.id);
    if(order){
        res.send(order);
    }else{
        res.status(404).send({message : 'Order not found'});
    }
}))

export default orderRouter;