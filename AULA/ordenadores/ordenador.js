let lista = [8,3,7,9,10,25,0,1,98,14,9,4,0];
let quantidade = 50;
let menor = 1;
let maior =  1000;

const gerarNumeros = () => {
for(let i = 1; i < quantidade; i++){
lista.push(Math.floor(Math.random((maior - menor + 1)+ menor)));
}
}
const mostrar = ( ) =>{
    document.getElementById("saida_lista").innerHTML = lista;
}
const  bubbleSort = () =>{
    let trocar = true;
    while(trocar){
        let valor;
        trocar = false
        for(let i = 0; i < lista.length - 1; i++){
            if(lista[i] > lista[i+1]){
                valor = lista[i]
                lista[i] = lista[i+1]
                lista[i+1] = valor
                trocar = true
                mostrar();
                console.log(lista);
                console.log(lista);
            }
        }
    }
}
(() => {
 mostrar();
})();