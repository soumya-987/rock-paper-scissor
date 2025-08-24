let userscore=0;
let compscore=0;
const usersc=document.querySelector("#sc")
const compsc=document.querySelector("#pc");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const compchoice=()=>{
    const options=["rock","paper","scissor"];
    const indx=Math.floor(Math.random()*3);
    return options[indx];


};
const win=(userwin)=>{
    if (userwin){
        userscore++;
        usersc.innerText=userscore;
        console.log("you win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="#00FF00";
    }else{
        compscore++;
        console.log("comp wins");
        compsc.innerText=compscore;
        msg.innerText="You Lose.";
        msg.style.backgroundColor="red";
    }

}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="draw. Play (Again"
    msg.style.backgroundColor="yellow";
}
const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const comp=compchoice();
    console.log("comp choice =",comp);

    if (userchoice===comp) {
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=comp==="paper" ?false:true;
        } else if (userchoice==="paper"){
            userwin=comp==="scissor" ?false:true;
        }else {
            userwin=comp==="rock" ? false:true;
        }
        win(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener(("click"), () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });

});
