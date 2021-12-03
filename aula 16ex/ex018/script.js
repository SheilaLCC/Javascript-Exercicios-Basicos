let num = document.querySelector('input#fnum')/*controle para relação com numero no html*/
let lista = document.querySelector('select#flista')/*controle para relação com a lista no html */
let res = document.querySelector('div#res')/*controle para relação com a div resultado*/
let valores = []/*declaração global do vetor vazio que sera usado para analisar os dados */

function adicionar(){    /*função sera executada quando o botão adicionar definido no html, for clicado */
    if(isNumero(num.value) && !inLista(num.value, valores)){/*1º teste, verificar se é um numero e se ja se encontra na lista, só vai adicionar se for verdade os dois*/
        valores.push(Number(num.value))/*se tiver tudo certo, vou fazer com que os valores, que é meu indice, push é adicionar um elemento num vetor, vou adicionar o number que esta dentro de num.value */
        let item = document.createElement('option')/*para adicionar os numeros dentro do select de forma dinamica e exibir */
        item.text = `Valor ${num.value} adicionado.` /*meu item vai ser uma string interpolada exibindo o valor do numero adicionado*/
        lista.appendChild(item)/*para adicionar o item na lista */
        res.innerHTML=''/*Limpar a digitação do numero anterior */
        
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value =  ''/*Limpar a digitação do numero anterior*/
    num.focus() /*depois de limpar o foco é como se eu clicasse no mouse em cima denovo para digitar*/

}

function finalizar(){/*função sera iniciada quando o botão finalizar for clicado */
    if(valores.length == 0){/*!ºteste se o vetor estiver vazio, exibira a mensagem abaixo */
        alert('Adicionar valores para finalizar!')
    }else{
        let tot = valores.length/*variaveis total de elementos que o vetor tem */
        let maior = valores [0]/*considerando um unico numero na posição zero do vetor sendo o primeiro numero*/
        let menor = valores [0]/*considerando um unico numero na posição zero do vetor sendo o primeiro numero*/
        let soma = 0/* */
        let media= 0/* */
        for (let pos in valores){/*laço de percurso para varrer o vetor inteiro,também uso para soma e media, leia-se para cada posição em valores */
            soma += valores[pos]/*vai somando todos os valores do vetor*/
            if(valores[pos] > maior)/*1ºteste, se valores na posição pos, for maior, do que o maior valor*/
            maior=valores[pos]/*o maior valor passa a ser, o valores pos */
            if (valores[pos] < menor)/*2ºteste, se o valores pos, for menor do que o menor, o menor valor*/
            menor=valores[pos] /*o menor valor, passa a ser o valores pos*/         
        }
        media = soma / tot/*sabendo soma e total de elementos calcula-se a media */
        
        res.innerHTML = ''/*limpa campo digitado anteriormente */
        res.innerHTML += ` <p> Ao todo , temos ${tot} números cadastrados.</p>`/*impressao na tela */
        res.innerHTML += ` <p> O maior valor informado foi ${maior}.</p>`/* */
        res.innerHTML += ` <p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += ` <p> Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += ` <p> A media dos valores é ${media}.</p>`
    }

}

/*Para eu fazer a adição dos elementos tenho que inserir mais duas funções pode ser embaixo da função adicionar ou emcima o programa faz o içamento, essas funções tem que ter o mesmo nome que foi usado dentro do teste if que verificou o numero e a lista */

function isNumero(n){ /*vai receber um numero,*/
    if(Number(n)>= 1 && Number(n) <=100){/*1º teste só aceita valores entre 1 e 100 */
        return true
    }else{
        return false
    }
}
function inLista(n, l ) {/*vai receber um numero e uma lista, quero saber se o numero esta na lista */
    if (l.indexOf(Number(n)) != -1){/*2º teste, se na lista o numero for diferente de -1 , então ele esta na lista */
        return true
    }else{
        return false
    }   
}