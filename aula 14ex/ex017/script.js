function tabuada(){ /*essa função chama o botão gerar tabuada inserido no html */
    let num=document.getElementById('txtn')/* essa variavel pega id do paragrafo numero no html */
    let tab=document.getElementById('seltab')/* essa variavel pega o id do select na area de tabuada no html */
    if(num.value.length ==0){/* primeiro teste, o campo numero não pode estar vazio,se estiver vai aparecer a mensagem abaixo*/
        window.alert('Por favor, digite um numero!')
    }else{/* calcular a tabuada do numero digitado */
        let n=Number(num.value)/* essa variavel é numero que sera digitado pelo usuario */
        let c=1/* o contador da tabuada, inicio com 1 e vai até 10 */
        tab.innerHTML= " " /*antes de começar a mostrar a tabuada a area de select sera limpa*/
        while (c<=10) { /* fazer o calculo da tabuada pode ser usado o for ou while */
            let item = document.createElement('option')/*criar elementos dentro do js de forma dinamica, guardar dentro de uma variavel, dentro do select eu coloco options*/
            item.text= `${n} x ${c} = ${n*c}`/* exibe de maneira formatada a multiplicação dos numeros e o resultado dentro do options */
            item.value = `tab${c}`/*é importante para outras linguagens para seleção de item, para o js não é tão importante */
            tab.appendChild(item) /*adicionar o tab declarado na função e exibir dentro do elemento adiciona o elemento filho que é o item */
            c++/* incrementa o valor de c até 10, que é a quantidade de vezes da tabuada */
            
        }
    }
}