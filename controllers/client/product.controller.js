const Product = require("../../models/product.model")

module.exports.index = async(req, res) => {

    const products = await Product.find({
        deleted: false,
        status: "active"
    }).sort({position:"desc"})
    


    const newProducts= products.map(item =>{
        item.priceNew=((item.price*(100 - item.discountPercentage))/100).toFixed(0);

        return item
    })

    res.render('client/pages/products/index.pug',{
        pageTitle : "trang sản phẩm",
        products : newProducts
    })
    
}

module.exports.add = (req, res) => {
    res.send("them")
}

module.exports.edit = (req, res) => {
    res.send("sửa")
}

module.exports.delete = (req, res) => {
    res.send("xoá ")
}


module.exports.detail = async(req, res) => {

    try {
        const slug= req.params.slug;
       

        const product = await Product.findOne({
            slug: slug,
            deleted: false,
            status: "active"
        });
        
        
        res.render('client/pages/products/detail.pug',{
            pageTitle : "trang chi tiết sản phẩm",
            product : product,
        })
    } catch (error) {
        res.redirect("/");
    }
}
