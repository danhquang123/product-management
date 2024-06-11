module.exports=(query)=>{
    let ojbect={
        keyword: "",
        regex:""
    }

    if(query.keyword)
        {
            ojbect.keyword= query.keyword
            const regex= new RegExp( ojbect.keyword,"i");
           ojbect.regex=regex;
        }
    return ojbect;
}