/*criar um programa que vc digite um numero no inicio, um numero no fim e um passo que é a forma como ele vai contar pulando de 1 em 1, ou de 2 em 2, como vc desejar e vai imprimir na tela a contagem*/

function contar(){/*função que sera executada quando clicar no botão contar */
    let ini = document.getElementById('txti')/*Criando os controles pegando o id */
    let fim = document.getElementById('txtf')/*Criando os controles pegando o id */
    let passo = document.getElementById('txtp')/*Criando os controles pegando o id */
    let res = document.getElementById('res')/*pegar a div res */

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){/*testes para verificar se os dados foram informados, inicio,fim e passo não podem estar vazios, caso qualquer um esteja, vai aparecer a mensagem abaixo */
        res.innerHTML='Impossível Contar!'
        window.alert('[ERRO] Faltam dados!')
    }else {
        res.innerHTML = 'Contando: <br>'/*exibe na tela a mensagem entre aspas, neste caso, a palavra contando */
        let i=Number(ini.value)/*criada para contar e converter o numero que esta na caixa de texto ini  */
        let f=Number(fim.value)/*criada para contar e converter o numero que esta na caixa de texto fim */
        let p=Number(passo.value)/*criada para contar e converter o numero que esta na caixa de texto passo */
        if( i<=0){/*não pode ser menor igual a zero, se acontecer, o contador vai assumir 1 */
            alert('Passo invalido!Considerando valor do passo = a 1' )
            p = 1
        }
        if(i < f) {
            //Contagem crecente
            for(let c=i; c<=f; c+=p){/*contagem simples , contador começa no inicio enquanto o contador for menor ou igual ao fim o contador recebe ele mesmo mais o passo*/
                res.innerHTML += `${c} \u{1F449}`/*o res recebe o que ele já tem, no caso a palavra contando, mais a string formatada, que é o que tem no c */
            }            
    } else {
        //Contagem regressiva
        for( let c=i; c>=f; c-= p){/*contagem simples , contador começa no inicio enquanto o contador for menor ou igual ao fim o contador recebe ele mesmo menos o passo*/
            res.innerHTML+=`${c} \u{1F449}`/*o res recebe o que ele já tem, no caso a palavra contando, mais a string formatada, que é o que tem no c. Para colocar os emojis, buscar no google unicode emoji list, na frente de cada emoji tem o código do desenho, no js, substitui U+ por \u e os demais numeros entre chaves {}*/
        }
    }
    res.innerHTML += `\u{1F3C1}`/*Para colocar os emojis, buscar no google unicode emoji list, na frente de cada emoji tem o código do desenho, no js, substitui U+ por \u e os demais numeros entre chaves {},colocar todo o código sempre entre crases */
} }