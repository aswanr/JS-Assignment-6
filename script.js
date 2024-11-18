const colom = document.querySelectorAll('.colom');
const hed=document.getElementsByTagName('h1')[0];
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
    const cells = [ 
        document.getElementById("one").textContent, 
        document.getElementById("two").textContent, 
        document.getElementById("three").textContent, 
        document.getElementById("four").textContent, 
        document.getElementById("five").textContent, 
        document.getElementById("six").textContent,
        document.getElementById("seven").textContent, 
        document.getElementById("eight").textContent,
        document.getElementById("nine").textContent 
    ];
    const winninpattern=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],
    ];
     winninpattern.forEach(combination=>{ 
        const [a, b, c] = combination;
        console.log(a);
         if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c])
             { 
                alert(`Won By: ${cells[a]}`); 
                return restart(); 
            } 
     })
     if(cells[a] !==cells[b] && cells[a] !== cells[c]){
        alert("its draw.....");
     }
}

function restart(){
    colom.forEach(div=>{        
        div.textContent="";
        hed.textContent="Tic Tac Toe";
    }); 
}