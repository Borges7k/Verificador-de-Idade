function verificar() {
 var data = new Date()
 var ano = data.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO]verifique os dados e tente novamente!')
 } else {
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var gênero = ''
var img = document.createElement('img')
img.setAttribute('id' , 'foto')

if(fsex[0].checked) {
    gênero = 'homem'
     if (idade >=0 && idade < 10){
      //criança
      img.setAttribute('src','./Imagens/Babe-M.png')
     } else if (idade < 21){
      //jovem
      img.setAttribute('src','./Imagens/Jovem-M.png')
     } else if (idade < 50) {
      //adulto
      img.setAttribute('src','./Imagens/Adulto-M.png')
     } else {
      //idoso
      img.setAttribute('src','./Imagens/Idoso-M.png')
     }
    } else if (fsex[1].checked) {
    gênero = 'mulher'
     if (idade >=0 && idade < 10){
      //criança
      img.setAttribute('src','./Imagens/Babe-F.png')
     } else if (idade < 21){
      //jovem
      img.setAttribute('src','./Imagens/Jovem-F.png')
     } else if (idade < 50) {
      //adulto
      img.setAttribute('src','./Imagens/Adulta-f.png')
     } else {
      //idoso
      img.setAttribute('src','./Imagens/Idoso-F.png')
     }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
 }
}
