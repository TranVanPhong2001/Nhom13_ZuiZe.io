const DienThoai = require("../models/DienThoai");

class HomeController{

    //[GET] /
    index(req, res, next) {
        DienThoai.find({}).lean()
        .then(dienthoais => res.render('home',{dienthoais}))
        .catch(next);
    

       // res.render('home')
    }
    //[GET]
    //  shop(req, res, next){
    //      DienThoai.find({}).lean()
    //      .then(dienthoais => res.render('shop',{dienthoais}))
    //      .catch(next);
    //  }
    async shop(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là 1
            const limit = 6; // Số lượng sản phẩm trên mỗi trang
            const skip = (page - 1) * limit;

            // Truy vấn dữ liệu từ cơ sở dữ liệu với phân trang
            const dienthoai = await DienThoai.find({}).skip(skip).limit(limit).lean();

            // Tính toán thông tin phân trang
            const totalProducts = await DienThoai.countDocuments({});
            const totalPages = Math.ceil(totalProducts / limit);
            const nextPage = page < totalPages ? page + 1 : null;
            const prevPage = page > 1 ? page - 1 : null;
            const pages = []; // Mảng chứa số trang
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }

            res.render('shop', { dienthoai, totalPages, currentPage: page, nextPage, prevPage, pages });
        } catch (error) {
            next(error);
        }
    }
    

    async getDienThoai(req, res, next) {
        try {
            const dienthoai = await DienThoai.findById( req.params.id).lean();
            if (!dienthoai) {
                return res.status(404).json({ message: "Không tìm thấy điện thoại" });
            }
            //res.json(dienthoai);
            res.render('/detail',{dienthoai});
        } catch (error) {
            next(error);
        }
    }

    



    //[GET]
    contact(req, res){
        res.render('contact')
    }
    cart(req, res){
        res.render('Carts/cart');
    }

}
module.exports = new HomeController;

