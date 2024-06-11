// trạng thái lọc hoạt động dừng và hoạt động

const buttonStatus = document.querySelectorAll("[button-status]")
if(buttonStatus.length>0){

    let url = new URL(window.location.href) //lấy ra đc url hiện tại

    buttonStatus.forEach(button =>{
        button.addEventListener("click",()=>{
            const status= button.getAttribute("button-status")
            
            url.searchParams.set("status",status); // rồi xét url trạng thái mới

            window.location.href= url.href // chuyển hướng url sang trang mình muốn
        });
    });
};

// trạng thái lọc hoạt động dừng và hoạt động

// nút tìm
const formSearch = document.querySelector("#form-search");
if(formSearch){
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = e.target.elements.keyword.value;
    if(value){
      url.searchParams.set("keyword", value);
    } else{
      url.searchParams.delete("keyword");
    }

    

    window.location.href = url.href;
   
  });
}

// nút tìm

// phân trang

const buttonTrang = document.querySelectorAll("[button-trang]")
if(buttonTrang.length >0){
  let url = new URL(window.location.href);
  buttonTrang.forEach(button =>{
    button.addEventListener("click",()=>{
      const page= button.getAttribute("button-trang")
      console.log(page);

      url.searchParams.set("page", page);
      window.location.href = url.href;
    });
  });
}
// phân trang


// đổi trạng thái
const buttonChangestatus= document.querySelectorAll("[button-change-status]")
if(buttonChangestatus.length > 0){
  const formchangeStatus = document.querySelector("#form-change-status");
  const path = formchangeStatus.getAttribute("data-path");
  buttonChangestatus.forEach(button =>{

    button.addEventListener("click",()=>{

      const status=button.getAttribute("data-status");

      const id = button.getAttribute("data-id")

      const statusChange = status == "active" ? "inactive" : "active";

      const action = path + `${statusChange}/${id}?_method=PATCH`;

      formchangeStatus.action=action;

      formchangeStatus.submit();
    });
  });
}
// đổi trạng thái

// đổi  trạng thái nhiều sản phẩm
const checkboxMulti = document.querySelector("[checkbox-multi]")
console.log(checkboxMulti)
if(checkboxMulti){
  const checkAll= checkboxMulti.querySelector("input[name='checkAll']");
  const checkId = checkboxMulti.querySelectorAll("input[name='id']");

  console.log(checkAll)
  console.log(checkId)
    checkAll.addEventListener("click",()=>{
      if(checkAll.checked){
        checkId.forEach((input)=>{
          input.checked= true;
        })
      }
      else{
        checkId.forEach((input)=>{
          input.checked = false;
        })
      }
    });

    checkId.forEach((input)=>{
      input.addEventListener("click",()=>{
        const count = checkboxMulti.querySelectorAll("input[name='id']:checked").length;

        if(count == checkId.length)
          {
            checkAll.checked = true;
          }
        else{
          checkAll.checked = false;
        }
      });
    });
}


const formChangeMulti = document.querySelector("[form-change-multi]");
if(formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    // ngăn chặn việc tải lại trang khi chưa thực hiện những công việc bên dưới
    e.preventDefault();

    const typeChange = e.target.elements.type.value;
    if(typeChange === "delete"){
      const isConfirm = confirm("Bạn có chắc muốn xóa những sản phẩm này không?")
      if(!isConfirm){
        //return thì những câu lệnh dưới sẽ không được thực thi
        return;
      }
    }

    const checkboxMulti = document.querySelector("[checkbox-multi]");
    
    const inputsChecked = checkboxMulti.querySelectorAll(
      "input[name='id']:checked"
    );

    if(inputsChecked.length > 0) {
      let ids = [];

      inputsChecked.forEach(input => {
        
        const id = input.value;

        if(typeChange == "change-position") {
          //hàm closest là hàm tìm đến node cha gần nhất có trong ("tên node cha")
          const position = input.closest("tr").querySelector("input[name='position']").value;

          ids.push(`${id}-${position}`);
        } else {
          ids.push(id);
        }
      });

      const inputIds = formChangeMulti.querySelector("input[name='ids']");

      inputIds.value = ids.join(", ");

      // vè có lệnh e.preventDefault(); ở trên nên bị chặn submit, vì vậy phải có câu lệnh này sau 
      // khi xử lý logic để gửi data cho ông backend
      formChangeMulti.submit();
    } else {
      alert("Vui lòng chọn ít nhất một bản ghi!");
    }
  });
}
// đổi  trạng thái nhiều sản phẩm

// xoá sản phẩm
const buttondelete= document.querySelectorAll("[button-delete]")
if(buttondelete.length > 0){
  const formdelete = document.querySelector("#form-delete");
  const path = formdelete.getAttribute("data-path");
 
  
    buttondelete.forEach(button =>{

      button.addEventListener("click",()=>{
        const hoi = confirm("bạn có chắc bạn muốn xoá sản phẩm ?")
        
        if(hoi){
          const id = button.getAttribute("data-id")
  
        
  
          const action = path + `/${id}?_method=DELETE`;
    
          formdelete.action=action;
    
          formdelete.submit();
        }
       
      });
    });
  
 
}
// xoá sản phẩm

// thời gian hiện thông báo

const showAlert = document.querySelector("[show-alert]")
if(showAlert){
  const time =parseInt( showAlert.getAttribute("data-time")) || 3000;
  const closeAlert = document.querySelector("[close-alert]");
  setTimeout(()=>{
    showAlert.classList.add("alert-hidden");
  },time);
  console.log(time)

  closeAlert.addEventListener("click",()=>{
    showAlert.classList.add("alert-hidden");
  });

}
// thời gian hiện thông báo