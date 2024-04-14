
const Cart = require("../models/Cart")
const DienThoai = require('../models/DienThoai');

class CartController{

    

    // Controller để hiển thị giỏ hàng
    getCart = async (req, res) => {
        try {
            const cartItems = await Cart.find().populate('DienThoai').lean();; // Lấy danh sách các mục trong giỏ hàng, và populate thông tin của sản phẩm từ model 'DienThoai'
            res.render('carts/create',{cartItems}); // Render view 'cart' và truyền dữ liệu của giỏ hàng vào
            //res.json(cartItems);
        } catch (error) {
            console.error('Error getting cart:', error);
            res.status(500).send('Internal Server Error');
        }
    };

    // Controller để thêm sản phẩm vào giỏ hàng
    addToCart = async (req, res) => {
        try {
            const { name1, quantity, image, price, DienThoai } = req.body;
            const cartItem = new Cart({ name1, quantity, image, price, DienThoai });
            await cartItem.save();
            //res.json(cartItem);
            res.redirect('/carts/create'); // Sau khi thêm vào giỏ hàng, chuyển hướng đến trang giỏ hàng
        } catch (error) {
            console.error('Error adding to cart:', error);
            res.status(500).send('Internal Server Error1');
        }
    };
    removeFromCart = async (req, res) => {
        try {
            const itemId = req.params.id;
            await Cart.findByIdAndDelete(itemId);
            res.sendStatus(200); // Gửi mã trạng thái 200 (OK) nếu xóa thành công
        } catch (error) {
            console.error('Error removing item from cart:', error);
            res.status(500).send('Internal Server Error');
        }
    };

}
module.exports = new CartController;

