module.exports=(query)=>{
    let buttonStatus =[
        {
            name:" tất cả",
            status :"",
            class:""
        },
        {
            name:" Hoạt động",
            status :"active",
            class:""
        },
        {
            name:" Dừng hoạt động",
            status :"inactive",
            class:""
        }
    ]
    //tìm vị trí của nút bấm
    if(query.status){
        const index = buttonStatus.findIndex((item)=>{
            return item.status == query.status
        });
        // thêm class vào vị trí của nút đó
        buttonStatus[index].class="active"
    }
    else{
        const index = buttonStatus.findIndex((item)=>{
            return item.status == "";
        });
        // thêm class vào vị trí của nút đó
        buttonStatus[index].class="active"

    }
    return buttonStatus;
}