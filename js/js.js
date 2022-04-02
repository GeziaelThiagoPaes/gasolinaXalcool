
const btn_Calcular = document.querySelector('#botao_calcular');
btn_Calcular.addEventListener('click', function (e) {
    e.preventDefault();
    const valorLitro = document.querySelector('#litro').value;
    const texto = document.querySelector('#vencedor_Comparacao');
    const texto2 = document.querySelector('#valor_Gasolina');
    const texto3 = document.querySelector('#valor_alcool');
    const valorGasolina = 6.92 * valorLitro;
    const valorAlcool = 4.93 * valorLitro;
    let valAlcool = valorAlcool.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    let valgasolina = valorGasolina.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const dividir = (valorAlcool / valorGasolina).toFixed(2);
    condicao();
    function condicao() {
        if (dividir >= 0.7) {
            texto.textContent = `A gasolina é a melhor opção `;
            texto2.textContent = `valor da gasolina : ${valgasolina}`;
            texto3.textContent = `valor do álcool : ${valAlcool}`;
        } else if(dividir < 0.7) {
            texto.textContent = `O álcool é a melhor opção ${dividir}`;
            texto2.textContent = `valor da gasolina : ${valgasolina}`;
            texto3.textContent = `valor do álcool : ${valAlcool}`;
        }else{
            texto.textContent = `Campo vazio`;
        }
    }
});