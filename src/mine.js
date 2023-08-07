const btnclick =document.querySelectorAll(".box button");
const heding=document.querySelector(".box h3");
btnclick.forEach((item,index)=>{
    item.addEventListener("click",function(e){
        heding.innerHTML=`<h3>sussfull your click don</h3>`
        heding.style.color='red';
        heding.style.textTransform="capitalize"
        item.style.backgroundColor="black"
        item.style.color="white"
        item.style.textTransform="capitalize"
        
    })
}) 



//on click coler button
const colorboton=document.querySelectorAll(".boxtwo button");
const colorheding=document.querySelector(".boxtwo h3")
colorboton.forEach((item,index)=>{
    item.onclick=()=>{
        
        if(index==0){
            item.style.backgroundColor='red';
        }
        else if(index==1){
            item.style.backgroundColor='skyblue';
        }
        else if(index==2){
            item.style.backgroundColor='#ffffff';
        }
        else if(index==3){
            item.style.backgroundColor='orange';
        }
        else if(index==4){
            item.style.backgroundColor='DeepPink';
        }
        item.style.cursor="zoom-out"
    }
})
//onclick this vrifite icon button
const vrifiteIcon=document.querySelectorAll(".clickveryfy ul li")

vrifiteIcon.forEach((item,index)=>{
    item.addEventListener("click",function(e){
        e.target.classList.add("clickstyle")

item.innerHTML= `${item.innerText} <i class="fa-solid fa-check"></i>`



    })
})
