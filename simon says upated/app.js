let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2= document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){
        started= true;
        levelUp();
    }
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},254);
}

function levelUp()
 {
    userSeq  =[];
    level++;

    h2.innerText= `level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randbtn);
 }

 function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
         setTimeout(levelUp,1000);} 

    }
    else{
        h2.innerHTML=`game over, your score was <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white"; 
        },150);
        reset();

        }
 }

 function btnpress(){
    let btn= this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
 }

 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress );
 }

 function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
 }