const DienThoai = require("../models/DienThoai");

class AdminController{

    //[GET] /DSSP/products
    showQLDS (req, res, next){
        DienThoai.find({}).lean()
        .then(dienthoais => res.render('admin/products',{ dienthoais, layout: 'admin' }))
        .catch(next);
        
    }
    //[GET] 
    createPhone(req, res, next) {
        res.render('admin/products/create',{layout: 'admin'});      
    }
    //[POST] /products/storeS
    storePhone(req, res, next) {  
        res.json(req.body);
         const dienthoai = new DienThoai(req.body);
         dienthoai.save()
                 .then(() => res.redirect('/admin/products'))
                 .catch(error => {})
            
    }

    //[GET] admin/products/:id/edit
    async editPhone(req, res, next) {
        try {
            const updatedDienThoai = await DienThoai.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
            if (!updatedDienThoai) {
                return res.status(404).json({ message: "Không tìm thấy điện thoại" });
            }
            //res.json(updatedDienThoai);
            res.render('admin/products/edit',{updatedDienThoai, layout: 'admin'});
        } catch (error) {
            next(error);
        }
    }
   //PUT /products/:id
    updatePhone (req, res, next){
        //res.json(req.body);
            DienThoai.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/products'))
            .catch(next);
    }
    // [DELETE] /products/:id
    deletePhone(req, res, next) {
         DienThoai.deleteOne({_id: req.params.id})
         .then(() => res.redirect('back'))
         .catch(next);
    }
}
module.exports = new AdminController;

