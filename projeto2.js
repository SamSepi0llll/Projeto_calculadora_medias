const form = document.getElementById('formulario')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção" />'
const atividades = []
const notas = []
let linhas = ''
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota minima: '))


form.addEventListener('submit', function(e){
    e.preventDefault()
    adcionaLinha()
    atualizaTabela()
    atualizaMediaFinal()


})
function atualizaTabela() {
    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas
    
}
function adcionaLinha() {
    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')
    if(atividades.includes(nomeAtividade.value)){
        alert(`A Atividade: ${nomeAtividade.value} já foi adcionada!`)
    }
    else{
    atividades.push(nomeAtividade.value)
    notas.push(parseFloat(notaAtividade.value))
    let linha = '<tr>'
    linha += `<td>${nomeAtividade.value}</td>`
    linha += `<td>${notaAtividade.value}</td>`
    linha += `<td>${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`
    linhas += linha
    }
    nomeAtividade.value = ''
    notaAtividade.value = ''
}
function atualizaMediaFinal(){
    const mediaFinal = CalculaMediaFinal()
    
    document.getElementById('media-final-value').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado: spanReprovado
}
function CalculaMediaFinal(){
    let somadasnotas = 0
    for(let i = 0; i < notas.length; i++){
        somadasnotas += notas[i]
    }
    return somadasnotas / notas.length
}

