var resultado = document.getElementById('resultado')
var hist = document.getElementById('historico')
var op = {divi:false, mult:false, subt:false, soma:false}
var n1 = 0
var n2 = 0

function calcular(){
    n2 = resultado.innerHTML
    historico.innerHTML += n2
    if (op.divi){
        if(n2==0){
            resultado.innerHTML = "ERRO!"
            n1 = 0
            n2 = 0
        } else{
            calculo = n1 / n2
            tam = calculo.toString().length
            if (tam>9){
                var parteInteira = parseInt(calculo)
                var tamParteInteira = parteInteira.toString().length
                var decimais = 10 - tamParteInteira
                resultado.innerHTML = parseFloat(calculo.toFixed(decimais))
            } else{
                resultado.innerHTML = calculo
            }
            op.divi = false
        }

    } else if (op.mult){
        calculo = n1 * n2
        
        resultado.innerHTML = calculo
        op.mult = false
    } else if (op.subt){
        calculo = n1 - n2
        resultado.innerHTML = calculo
        op.subt = false
    } else{
        calculo = Number(n1) + Number(n2)
        resultado.innerHTML = Number(calculo)
        op.soma = false
    }
}

function insert(n){
    tam = resultado.innerHTML.length
    if (tam < 9){
        resultado.innerHTML += n
    }
    while (resultado.innerHTML.charAt(0)=='0' && resultado.innerHTML.length > 1){
        resultado.innerHTML = resultado.innerHTML.substring(1)
    }
}

function limpar(){
    n1 = 0
    n2 = 0
    resultado.innerHTML = 0
    hist.innerHTML = ''
}
function sinal(){
    resultado.innerHTML = -resultado.innerHTML
}
function percentual(){
    resultado.innerHTML = resultado.innerHTML/100
}
function decimal(){
    if (resultado.innerHTML.indexOf('.')==-1){
        resultado.innerHTML += '.'
    }
}
function operacao(){
    n1 = resultado.innerHTML
    hist.innerHTML = n1
    resultado.innerHTML = 0
}
function dividir(){
    operacao()
    hist.innerHTML += ' / '
    op.divi = true
}
function multiplicar(){
    operacao()
    hist.innerHTML += ' x '
    op.mult = true
}
function subtrair(){
    operacao()
    hist.innerHTML += ' - '
    op.subt = true
}
function somar(){
    operacao()
    hist.innerHTML += ' + '
    op.soma = true
}



    
    
    


