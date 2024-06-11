module.exports = (ojbectphanTrang,query,tongSanpham)=>{
    

    if(query.page){
        ojbectphanTrang.trangHientai= parseInt(query.page)
    }
    
    ojbectphanTrang.skip=(ojbectphanTrang.trangHientai -1)*ojbectphanTrang.soSanpham;
    
    
    
    
    ojbectphanTrang.soTrang = Math.ceil(tongSanpham/ojbectphanTrang.soSanpham);
    
    return ojbectphanTrang;
}