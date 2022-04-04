
const texto = document.querySelector('#vencedor_Comparacao');
const texto2 = document.querySelector('#valor_Gasolina');
const texto3 = document.querySelector('#valor_alcool');
const valorLitro = document.querySelector('#litro');

function criarBotoes(texto, callback) {
    const containerBotao = document.querySelector('#containerBotao');
    const newbutton= document.createElement('button');
    newbutton.textContent=texto;
    callback(newbutton);
    containerBotao.appendChild(newbutton);
};
criarBotoes('Calcular',(newbutton)=>{
   newbutton.addEventListener('click', ()=>{
    const calcularLitro = valorLitro.value;
    const valorGasolina = 6.92 * calcularLitro;
    const valorAlcool = 4.93 * calcularLitro;
    let valAlcool = valorAlcool.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    let valgasolina = valorGasolina.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const dividirValor = (valorAlcool / valorGasolina).toFixed(2);
    condicao();
    function condicao() {
        if (dividirValor >= 0.7) {
            texto.textContent = `A gasolina é a melhor opção `;
            texto2.textContent = `valor da gasolina : ${valgasolina}`;
            texto3.textContent = `valor do álcool : ${valAlcool}`;
        } else if(dividirValor < 0.7) {
            texto.textContent = `O álcool é a melhor opção ${dividirValor}`;
            texto2.textContent = `valor da gasolina : ${valgasolina}`;
            texto3.textContent = `valor do álcool : ${valAlcool}`;
        }else{
            texto.textContent = `Campo vazio`;
            texto2.textContent = `valor da gasolina : 0`;
            texto3.textContent = `valor do álcool : 0`;
        }

    }
   });
});
criarBotoes('Resetar', (newbutton)=>{
    newbutton.style.backgroundColor='blue';
    newbutton.addEventListener('click',()=>{
        form.reset();
        texto.textContent='';
        texto2.textContent='';
        texto3.textContent='';
    })
    
});