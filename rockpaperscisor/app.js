let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoi=()=>{
    const option=["rock","paper","scisor"];
    const rndmidx=Math.floor(Math.random()*3);
    return option[rndmidx];
}

const showwinner=(userwin, userchoice, compchoice)=>{
    if (userwin==true) {
        userscore++;
        console.log("User Win");
        msg.innerText=`You Win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscorepara.innerText=userscore;
    } else {
        compscore++;
        console.log("Comp Win");
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
        msg.innerText=`You Lose ${compchoice} beats ${userchoice}`;
        compscorepara.innerText=compscore;
    }
}

const playgame=(userchoice)=>{
    console.log("User Choice",userchoice);
    const compchoice=gencompchoi();
    console.log("Comp Choice", compchoice);
    if (userchoice===compchoice) {
        console.log("Game is draw");
        msg.innerText="Draw";
        msg.style.backgroundColor="#081b31";
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"? false:true; 
        }
        if(userchoice==="paper"){
            userwin= compchoice==="scisor"? false:true; 
        }
        if(userchoice==="scisor"){
            userwin= compchoice==="rock"? false:true; 
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})