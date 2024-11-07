const colom = document.querySelectorAll('.colom');
var hed=document.getElementsByTagName('h1')[0];
let text=true;

colom.forEach(div=>{
    div.addEventListener('click',()=>{
    if(div.textContent===""){
        div.textContent = text ? 'x' : 'o';
        text = !text;
        winnerchecking();
    }
    });
});

function winnerchecking(){
    const a=document.getElementById("one").textContent;
    const b=document.getElementById("two").textContent;
    const c=document.getElementById("three").textContent;
    const d=document.getElementById("four").textContent;
    const e=document.getElementById("five").textContent;
    const f=document.getElementById("six").textContent;
    const g=document.getElementById("seven").textContent;
    const h=document.getElementById("eight").textContent;
    const i=document.getElementById("nine").textContent;
    
    if (a !== "" && a === b && c === b) {
        hed.textContent = `The Winner is : ${a}`;
        return setTimeout(restart,3000);
    } 
    else if(d !== "" && d === e && e === f) {
        hed.textContent = `The Winner is : ${d}`;
        return setTimeout(restart,3000);
    }
    else if(g !== "" && g === h && h === i){
        hed.textContent = `The Winner is : ${g}`;
        return setTimeout(restart,3000);
    }
    else if(a !== "" && a === d && d === g) {
        hed.textContent = `The Winner is : ${a}`;
        return setTimeout(restart,3000);
    }
    else if(b !== "" && b === e && e === h) {
        hed.textContent = `The Winner is : ${b}`;
        return setTimeout(restart,3000);
    }
    else if(c !== "" && c === f && f === i) {
        hed.textContent = `The Winner is : ${c}`;
        return setTimeout(restart,3000);
    }
    else if(a!== "" && a === e && e=== i){
        hed.textContent = `The Winner is : ${a}`;
        return setTimeout(restart,3000);
    }
    else if(c !== "" && c=== e && e === g){
        hed.textContent = `The Winner is : ${c}`;
        return setTimeout(restart,3000);
    }

    else if (a !== "" && b !== "" && c !== "" && d !== "" && e !== "" && f !== "" && g !== "" && h !== "" && i !== "" )
         {
            alert("It's a draw!"); 
            hed.textContent = "This match is draw";
            return setTimeout(restart,4000);
         }
}

function restart(){
    colom.forEach(div=>{        
        div.textContent="";
        hed.textContent="Tic Tac Toe";
        
    }); 
}