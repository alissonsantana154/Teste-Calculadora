function calcular(){
  var operacao = document.getElementById('operacao').value

  var num1 = document.getElementById('num1').value 
  var num2 = document.getElementById('num2').value

  if(num1 == '' || num1 == null){
    alert('Favor digitar um número válido')
    document.getElementById('num1').focus()
    return false
  } 
  if(num2 == '' || num2 == null){
    alert('Favor digitar um número válido')
    document.getElementById('num2').focus()
    return false
  } 

  var resultado = null

  // conversão de string para number
  num1 = Number(num1)
  num2 = Number(num2)

  if(operacao == '1'){ // soma
    resultado = num1 + num2
  } else if(operacao == '2'){ // subtração
    resultado = num1 - num2
  } else if(operacao == '3'){ // Multiplicação
    resultado = num1 * num2
  } else if(operacao == '4'){ // Divisão
    resultado = num1 / num2
  } else {
    alert('Selecione uma operação')
    return false
  }

  document.getElementById('resultado').value = resultado

}