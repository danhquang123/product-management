const Product = require("../../models/product.model")
const buttonStatusHelpers = require("../../helpers/buttonStatus")
const searchHelpers = require("../../helpers/search")
const phanTrangHelpers =require("../../helpers/phanTrang")
const product = require("../../models/product.model")
module.exports.index = async(req, res) => {
    // tạo ojec chứa 3 nút button
    const buttonStatus=buttonStatusHelpers(req.query);
    // nút tìm
    let ojbect= searchHelpers(req.query);
    //
    let find ={
        deleted:false
    };


    if(req.query.status)
    {
        find.status= req.query.status
    }
    //
    // nút tìm
   
    if(req.query.keyword)
    {
        
        find.title=ojbect.regex;
    }
    // nút tìm

    // phân trang
    
    
    const tongSanpham = await Product.countDocuments(find);
    let initojbectphanTrang ={
        trangHientai :1,
        soSanpham :4
    };
    
    const ojbectphanTrang= phanTrangHelpers(initojbectphanTrang,req.query,tongSanpham);
   
    

    const products = await Product.find(find).sort({position : "desc"}).limit(ojbectphanTrang.soSanpham).skip(ojbectphanTrang.skip);
    // phân trang


    console.log(products)

    res.render("admin/pages/products/index",{
        pageTitle : "danh sach san pham ",
        products : products,
        buttonStatus: buttonStatus,
        keyword: ojbect.keyword,
        phanTrang: ojbectphanTrang
    })
    
}

// Đổi trạng thái sản phấm
module.exports.changeStatus = async(req, res) => {
    const status= req.params.status;
    const id = req.params.id;
    
    await Product.updateOne({_id:id},{status:status})
    req.flash('info', 'Thay Đổi Thành Công');
    res.redirect("back");
}
// Đổi trạng thái sản phấm


// Đổi trạng nhiều thái sản phấm
module.exports.changeMulti = async(req, res) => {
    
    
    const type = req.body.type;
    const ids = req.body.ids.split(", ")
   
   
    switch (type) {
        case "active":
            await Product.updateMany({_id:{$in: ids}},{ status: type})
            req.flash('info', `Cập nhật trạng thái thành công cho ${ids.length} sản phẩm!`);
            break;
        case "inactive":
            await Product.updateMany({_id:{$in: ids}},{ status: type})
            req.flash('info', `Cập nhật trạng thái thành công cho ${ids.length} sản phẩm!`);
            break;
        case "delete":
            await Product.updateMany({_id:{$in: ids}},{
                deleted :"true",
                deletedAt: new Date()
            })
            req.flash('info', `Cập nhật trạng thái thành công cho ${ids.length} sản phẩm!`);
            break
        case "change-position":
            for (const item of ids) {
                const [id, position]=item.split("-");

                await Product.updateOne({_id: id},{ position: position})
                
            }
            req.flash('info', `Xoá  thành công cho ${ids.length} sản phẩm!`);
               
            
            break;
    
        default:
            break;
    }

    
    res.redirect("back")
}
// Đổi trạng nhiều thái sản phấm


// xoá sản phẩm
module.exports.delete = async(req, res) => {
    
    const id = req.params.id;
    
    await Product.updateOne({_id:id},
        {deleted:true,
         deletedAt: new Date()
        })
    res.redirect("back");
}
// xoá sản phẩm