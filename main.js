function getParameter(x){
params= window.location.href.split("?")[1].split("&"); 
for(i=0;i<params.length;i++){
    // ["id","example"]
 e = params[i].split("=");
 if(e[0] == x){
 return e[1];
}
}
}
var id = getParameter("id")

const data = {
    "alllevels": {
        "l1" : {
           "q":"i overtook the 2nd place in race what is my position?",
           "a1":"1",
           "a2":"2",
           "a3":"3",
           "a4":"4",
        },
        "l2":{
          "q":"which one is longest",
          "a1":"March",
          "a2":"February",
          "a3":"May",
          "a4":"Jun",
        },
        "l3":{
          "q":"4 + 5 x 5 - 2 = ?",
          "a1":"27",
          "a2":"43",
        },
        "l4":{
          "q":"Memorize them in order of: 1,49,80,5,7,11,101",
          "a1":"1,49,80,7,11,5,101 ",
          "a2":"1,49,11,5,80,7,101 ",
          "a3":"1,49,80,5,7,11,101 ",
          "a4":"49,1,80,7,11,5,101 ",
        },
        "l5":{
          "q":"how many alphabets are in alphabets",
          "a1":"12",
          "a2":"8",
          "a3":"26",
          "a4":"19",
        },
        "l6":{
          "q":"If, 1 = 10, 2 = 100, 3 = 250, q",
          "a1":"1", 
          "a2":"0.5",
          "a3":"1000",
          "a4":"500",
          "a5":"50",
          "a6":"300",
        },
        "l7":{
          "q":"11+2+3+10+2+3+10+2+3+11=?",
          "a1":"57",
          "a2":"75",
          "a3":"23",
          "a4":"100",
        },
        "l8":{
          "q":"Count holes in trouser",
          "a1":"7",
          "a2":"3",
          "a3":"10",
          "a4":"9",
        },
    
    },
}
var k = data[id]

// document.getElementById("").innerText = 
var qustiontext = document.getElementById("qh1")
var qustionimg = document.getElementById("q-img")
var input = document.getElementById("input")
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var a4 = document.getElementById("a4")
var a5 = document.getElementById("a5")
var a6 = document.getElementById("a6")
// l1
if( id === "Fd66e295-3506-403c-9988-6685118e3c6a" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l1.q
    a1.innerHTML = data.alllevels.l1.a1
    a2.innerHTML = data.alllevels.l1.a2
    a3.innerHTML = data.alllevels.l1.a3
    a4.innerHTML = data.alllevels.l1.a4

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href="/play.html?id=4c28422e-80e6-4a33-8872-94801ad59069"},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href="/play.html?id=4c28422e-80e6-4a33-8872-94801ad59069"},3000)}
    
    a1.addEventListener("click",correct)
    
    a2.addEventListener("click",notcorrect)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)
}
// l2
if( id === "4c28422e-80e6-4a33-8872-94801ad59069" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l2.q
    a1.innerHTML = data.alllevels.l2.a1
    a2.innerHTML = data.alllevels.l2.a2
    a3.innerHTML = data.alllevels.l2.a3
    a4.innerHTML = data.alllevels.l2.a4

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=Efe89ba8-2b48-4756-8f83-0ddb698bb14f'},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=Efe89ba8-2b48-4756-8f83-0ddb698bb14f'},3000)}
    
    a1.addEventListener("click",notcorrect)
    
    a2.addEventListener("click",correct)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)
}
// l3       
if( id === "Efe89ba8-2b48-4756-8f83-0ddb698bb14f" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l3.q
    a1.innerHTML = data.alllevels.l3.a1
    a2.innerHTML = data.alllevels.l3.a2
     
    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href = "/play.html?id=F0ab4ff3-B755-461f-B1e5-401ac969b37a"},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href = "/play.html?id=F0ab4ff3-B755-461f-B1e5-401ac969b37a"},3000)}
    a1.addEventListener("click",correct)
    a1.addEventListener("click",notcorrect)
}
// l4
if( id === "F0ab4ff3-B755-461f-B1e5-401ac969b37a" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l4.q
    
    setTimeout(()=>{
    qustiontext.remove()      
    a1.innerHTML = data.alllevels.l4.a1
    a2.innerHTML = data.alllevels.l4.a2
    a3.innerHTML = data.alllevels.l4.a3
    a4.innerHTML = data.alllevels.l4.a4

    },6000)

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=6cac0aeb-4e15-4475-A338-1205eea7150c'},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=6cac0aeb-4e15-4475-A338-1205eea7150c'},3000)}
    
    a1.addEventListener("click",notcorrect)
    
    a2.addEventListener("click",notcorrect)
    
    a3.addEventListener("click",correct)
    
    a4.addEventListener("click",notcorrect)
}
// l5
if( id === "6cac0aeb-4e15-4475-A338-1205eea7150c" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l5.q
    a1.innerHTML = data.alllevels.l5.a1
    a2.innerHTML = data.alllevels.l5.a2
    a3.innerHTML = data.alllevels.l5.a3
    a4.innerHTML = data.alllevels.l5.a4

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href="play.html?id=78bfb071-0144-4bd6-Bfec-30beb6967e8d"},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href="play.html?id=78bfb071-0144-4bd6-Bfec-30beb6967e8d"},3000)}
    
    a1.addEventListener("click",notcorrect)
    
    a2.addEventListener("click",correct)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)
}
// level 6
if( id === "78bfb071-0144-4bd6-Bfec-30beb6967e8d" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l6.q
    a1.innerHTML = data.alllevels.l6.a1
    a2.innerHTML = data.alllevels.l6.a2
    a3.innerHTML = data.alllevels.l6.a3
    a4.innerHTML = data.alllevels.l6.a4
    a5.innerHTML = data.alllevels.l6.a5
    a6.innerHTML = data.alllevels.l6.a6

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=33ab35c6-9a05-4ef9-Bd05-F33a83118d61'},3000)}
    function notcorrect(){this.style.backgroundColor ="red";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=33ab35c6-9a05-4ef9-Bd05-F33a83118d61'},3000)}
    
    a1.addEventListener("click",correct)
    
    a2.addEventListener("click",notcorrect)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)

    a5.addEventListener("click",notcorrect)

    a6.addEventListener("click",notcorrect)
}
// level 7 
if( id === "33ab35c6-9a05-4ef9-Bd05-F33a83118d61" )
{
    console.log("your id is : " + id)
    qustiontext.innerHTML = data.alllevels.l7.q
    a1.innerHTML = data.alllevels.l7.a1
    a2.innerHTML = data.alllevels.l7.a2
    a3.innerHTML = data.alllevels.l7.a3
    a4.innerHTML = data.alllevels.l7.a4

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=8090984a-F309-4f60-9492-96718416958f'},3000)}
    function notcorrect(){this.style.backgroundColor = "red";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=8090984a-F309-4f60-9492-96718416958f'},3000)}
    
    a1.addEventListener("click",correct)
    
    a2.addEventListener("click",notcorrect)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)
}
//  level 8
if( id === "8090984a-F309-4f60-9492-96718416958f" )
{
    console.log("your id is : " + id)
    qustiontext
    qustionimg.src = "level.png"
    a1.innerHTML = data.alllevels.l8.a1
    a2.innerHTML = data.alllevels.l8.a2
    a3.innerHTML = data.alllevels.l8.a3
    a4.innerHTML = data.alllevels.l8.a4

    function correct(){this.style.backgroundColor ="#0077b7";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=Ba760b9a-9fa2-471a-B837-83b635ae41e3'},3000)}
    function notcorrect(){this.style.backgroundColor = "red";this.style.color="#fff";setTimeout(()=>{location.href='/play.html?id=Ba760b9a-9fa2-471a-B837-83b635ae41e3'},3000)}
    
    a1.addEventListener("click",correct)
    
    a2.addEventListener("click",notcorrect)
    
    a3.addEventListener("click",notcorrect)
    
    a4.addEventListener("click",notcorrect)
}