let tasti = document.querySelectorAll('.tasti *');

let array = [];

function add(n,m){
    return Number(n)+Number(m);
}

function mult(n,m){
    return Number(n)*Number(m);
}

function sub(n,m){
    return Number(n)-Number(m);
}

function div(n,m){
    return Number(n)/Number(m);
}

function operate(n,opstring,m){
    
    switch(opstring){
        
        case "+":
            schermo.textContent = add(n,m);
            break;
        case "*":
            schermo.textContent = mult(n,m);
            break;
        case "/":
            schermo.textContent = div(n,m);
            break;
        case "-":
            schermo.textContent = sub(n,m);
        break;
    }
    array=[];

}
function show(){
    console.log(array);
}
function clean(){
    schermo.textContent = '';
}

/*
for (i=0;i<16;i++){
    div = document.createElement('div');
    tasti.appendChild(div);
    div.addEventListener('click',()=>{console.log('ciao')})

}
*/
let schermo = document.querySelector('.schermo');
for (i=0;i<16;i++){
 

    tasti[i].addEventListener('click',function (testo){
        let choice = testo.currentTarget.textContent; 
        switch(choice){
            case "AC":
                clean();
                array=[];
                break;
            case "=":
                array.push(schermo.textContent)
                show()
                operate(array[0],array[1],array[2])
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                array.push(schermo.textContent);
                array.push(testo.currentTarget.textContent);
                show();
                clean();
                schermo.textContent = testo.currentTarget.textContent;
            break;
            default:
                schermo.textContent = schermo.textContent.replace('+', '');
                schermo.textContent = schermo.textContent.replace('-', '');
                schermo.textContent = schermo.textContent.replace('*', '');
                schermo.textContent = schermo.textContent.replace('/', '');
                show();
                schermo.textContent = testo.currentTarget.textContent + schermo.textContent;
                break;
        }
    })
}

