function calcular(tipo, valor) 
{
    if (tipo === 'acao') {
        
        if(valor === 'c'){
            // Limpa o visor da calculadora
            document.getElementById('resultado').value = ''
        }
        if(valor === '/' || valor === '*'|| valor === '-'|| valor === '+'|| valor === '.'){
            // Limpa o visor da calculadora
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            let valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
        
    } else if (tipo === 'valor') {
        document.getElementById('resultado').value += valor
    } 
}