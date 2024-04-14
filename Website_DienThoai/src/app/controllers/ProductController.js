const DienThoai = require("../models/DienThoai");


class ProductController{

    //[GET]
    async getAllPhone(req, res, next) {
        try {
           const Phones = await DienThoai.find();
           res.status(200).json(Phones);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    //[GET] /products/:id
    async getPhone(req, res, next) {
        try {
            const dienthoai = await DienThoai.findById( req.params.id).lean();
            if (!dienthoai) {
                return res.status(404).json({ message: "Không tìm thấy điện thoại" });
            }
            //res.json(dienthoai);
            res.render('products/detail',{dienthoai});
        } catch (error) {
            next(error);
        }
    }

    //[GET] 
     createPhone(req, res, next) {
         res.render('products/create');      
     }
     //[POST] /products/store
     storePhone(req, res, next) {  
         //res.json(req.body);
          const dienthoai = new DienThoai(req.body);
          dienthoai.save()
                  .then(() => res.redirect('/shop'))
                  .catch(error => {})
            
     }

     //[GET] /products/:id/edit
    async editPhone(req, res, next) {
         try {
             const updatedDienThoai = await DienThoai.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
             if (!updatedDienThoai) {
                 return res.status(404).json({ message: "Không tìm thấy điện thoại" });
             }
             //res.json(updatedDienThoai);
             res.render('products/edit',{updatedDienThoai});
         } catch (error) {
             next(error);
         }
     }
    //PUT /products/:id
    updatePhone (req, res, next){
        //res.json(req.body);
         DienThoai.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/DSSP/products'))
            .catch(next);
    }

    //[DELETE] /products/:id
    deletePhone(req, res, next) {
        DienThoai.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }



}
module.exports = new ProductController;

