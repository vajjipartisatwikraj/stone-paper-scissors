alert("This game is developed by SATWIK");
let userscore=0;
let computerscore=0;
let userchoice;
let compchoice;
const msg=document.querySelector("#msg");
const cmd=document.querySelector("#command");
const uscore=document.querySelector("#userscore");
const cscore=document.querySelector("#computerscore");


const gencompchoice=()=>{
    const options=["stone","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const result=()=>{

    const compchoice=gencompchoice();

    if((userchoice=="paper"&& compchoice=="stone")||(userchoice=="stone"&&compchoice=="scissors")||(userchoice=="scissors"&&compchoice=="paper")){
        console.log("User won");
        msg.innerText="Won";
        cmd.style.backgroundColor="green";
        userscore++;
        uscore.innerText=userscore;
        cscore.innerText=computerscore;
    }
    else if((compchoice=="paper"&&userchoice=="stone")||(compchoice=="stone"&&userchoice=="scissors")||(compchoice=="scissors"&&userchoice=="paper")){
        console.log("Computer won");
        msg.innerText="Lost";
        cmd.style.backgroundColor="red";
        computerscore++;
        uscore.innerText=userscore;
        cscore.innerText=computerscore;
        
    }
    else{
        console.log("Draw");
        msg.innerText="Draw";
        cmd.style.backgroundColor="gold";
    }

    console.log("user score=",userscore,"\n","computer choice=",computerscore);
}


const itemscontainer = document.querySelectorAll('.item');
if (itemscontainer) {
  itemscontainer.forEach(function(item) {
    item.addEventListener("click",()=>{
        userchoice=item.getAttribute("id");
        result(userchoice);
    })
  });
}


