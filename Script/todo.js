todoarrlist=JSON.parse(localStorage.getItem("mytodo"))
completedtodoarr=JSON.parse(localStorage.getItem("todocompleted"))||[]
DisplayData(todoarrlist)

function sortbyname(){
    var nameselect=document.querySelector("#sname").value
    if(nameselect=="asc"){
        todoarrlist.sort(function(a,b){
            if(a.name>b.name) return 1
            if(a.name<b.name) return -1
            return 0
        })
    DisplayData(todoarrlist)
}
if(nameselect=="dsc"){
    todoarrlist.sort(function(a,b){
        if(a.name>b.name) return -1
        if(a.name<b.name) return 1
        return 0
    })
DisplayData(todoarrlist)
}
}

function sortbysalary(){
    var nameselect=document.querySelector("#ssalary").value
    if(nameselect=="inc"){
        todoarrlist.sort(function(a,b){
            if(Number(a.salary)>Number(b.salary)) return 1
            if(Number(a.salary)<Number(b.salary)) return -1
            return 0
        })
        console.log(todoarrlist)
    DisplayData(todoarrlist)
}
if(nameselect=="dec"){
    todoarrlist.sort(function(a,b){
        if(Number(a.salary)>Number(b.salary)) return -1
        if(Number(a.salary)<Number(b.salary)) return 1
        return 0
       
    })
    console.log(todoarrlist)
DisplayData(todoarrlist)
}
}

function sortbyrole(){
    var roleselect=document.querySelector("#srole").value
   var filterlist=todoarrlist.filter(function(ele){
       return ele.priority==roleselect
   })
  DisplayData(filterlist)
}

function DisplayData(todoarrlist){
    document.querySelector("tbody").innerHTML=""
    todoarrlist.map(function(ele){
        var tr=document.createElement("tr")
    
        var td1=document.createElement("td")
        td1.innerText=ele.name
        var td2=document.createElement("td")
        td2.innerText=ele.qty
        var td3=document.createElement("td")
        td3.innerText=ele.salary
        var td4=document.createElement("td")
        td4.innerText=ele.priority
        var td5=document.createElement("td")
        td5.innerText="completed"
        td5.style.cursor="pointer"
         td5.addEventListener("click",function(){
             td5.style.color="Green"
             td5.innerText="Done"
            completedtodo(ele)
         })
    
    
        tr.append(td1,td2,td3,td4,td5)
        
        document.querySelector("tbody").append(tr)
    })
}

function completedtodo(ele){
    completedtodoarr.push(ele)
  localStorage.setItem("todocompleted",JSON.stringify(completedtodoarr))
}