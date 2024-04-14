const Hang = require("../models/Hang");

class HangController{

    //[GET]
    async getAllHang(req, res, next) {
        try {
           const hang = await Hang.find();
           res.status(200).json(hang);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    //[GET] /Hangs/:id
    async getHang(req, res, next) {
        try {
            const hang = await Hang.findById( req.params.id).lean();
            if (!hang) {
                return res.status(404).json({ message: "Không tìm thấy Hãng" });
            }
            //res.json(hang);
            res.render('Hangs/detail',{hang});
        } catch (error) {
            next(error);
        }
    }

    //[GET] 
    createHang (req, res, next){
        res.render('Hangs/create');
    }
    //[POST] /Hangs/store
    storeHang(req, res, next) {
       
        //res.json(req.body);
        
         const hang = new Hang(req.body);
         hang.save()
                 .then(() => res.redirect('/shop'))
                 .catch(error => {})
            
    }

    //[GET] /Hangs/:id/edit
    async editHang(req, res, next) {
        try {
            const updatedHang = await Hang.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean();
            if (!updatedHang) {
                return res.status(404).json({ message: "Không tìm thấy điện thoại" });
            }
            //res.json(updatedHang);
            res.render('Hangs/edit',{updatedHang});
        } catch (error) {
            next(error);
        }
    }
    //PUT /Hangs/:id
    updateHang (req, res, next){
        //res.json(req.body);
         Hang.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/admin/DSSP/Hangs'))
            .catch(next);
    }

    //[DELETE] /Hangs/:id
    deleteHang(req, res, next) {
        Hang.deleteOne({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
    }
}
module.exports = new HangController;

