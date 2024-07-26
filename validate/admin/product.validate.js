module.exports.createPost =(req,res,next)=>{
    if( !req.body.title){
        req.flash('error', 'hãy nhập thông tin tên sản phẩm ?');
        res.redirect("back");
        return;
    }

    if( req.body.title.length<5){
        req.flash('error', 'thông tin sản phẩm quá ngắn?');
        res.redirect("back");
        return;
    }
    next();
}