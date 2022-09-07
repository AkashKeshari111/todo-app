document.querySelector("#form").addEventListener("submit",mytodofn)


todoarr=JSON.parse(localStorage.getItem("mytodo"))||[]

function mytodofn(){
  event.preventDefault()

  var todoname=document.querySelector("#name").value
  var todoqty= document.querySelector("#qty").value
  var todosalary=document.querySelector("#salary").value
  var todopriority=document.querySelector("#priority").value

  var todoobj={name:todoname,
    qty:todoqty,
  salary:todosalary,
priority:todopriority}

// console.log("inside")//my fn work here

todoarr.push(todoobj)
localStorage.setItem("mytodo",JSON.stringify(todoarr))

}