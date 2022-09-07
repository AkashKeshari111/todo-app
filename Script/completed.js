completedtodo=JSON.parse(localStorage.getItem("todocompleted"))


completedtodo.map(function(ele){
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=ele.name
    var td2=document.createElement("td")
    td2.innerText=ele.qty
    var td3=document.createElement("td")
    td3.innerText=ele.salary
    var td4=document.createElement("td")
    td4.innerText=ele.priority
    

    tr.append(td1,td2,td3,td4)
    
    document.querySelector("tbody").append(tr)
})