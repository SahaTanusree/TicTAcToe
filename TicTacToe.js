let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msj=document.querySelector("#msg");
let turno=true;
let count=0;
let win=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
let bx =(box)=>{
	box.addEventListener("click",()=>{
		console.log("Clicked Done");
		if(turno){
			box.innerText="0";
			turno=false;
		}else{
			box.innerText="X";
			turno=true;
		}
		box.disabled=true;
		count++;
		let iswinner=checkwinner();
		if(count==9 && !iswinner){
			gamedraw();
		}
	});
}
const gamedraw=()=>{
	msj.innerText=`Game was Draw`;
	msgcontainer.classList.remove("hide");
	disablebox();
}
boxes.forEach(bx);

const disablebox=()=>{
	for(let box of boxes){
		box.disabled=true;
	}
}

const showwinner=(winner)=>{
	msj.innerText=`Congratulation, winner is ${winner}`;
	msgcontainer.classList.remove("hide");
	disablebox();
}

const checkwinner=()=>{
	for(let pattern of win){
		let pos1=boxes[pattern[0]].innerText;
		let pos2=boxes[pattern[1]].innerText;
		let pos3=boxes[pattern[2]].innerText;
		if(pos1!="" && pos2!="" && pos3!=""){
			if(pos1===pos2 && pos2==pos3){
				console.log("Congrats!!!! You are winner",pos1);
				showwinner(pos1);
			}
		}
	}
}
const enablebox=()=>{
	for(let box of boxes){
		box.disabled=false;
		box.innerText="";
	}
}
const resetgame=()=>{
	turno=true;
	count=0;
	enablebox();
	msgcontainer.classList.add("hide");
}
newgame.addEventListener("click",resetgame);	
reset.addEventListener("click",resetgame);	

	
	