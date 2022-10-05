function contarL()
{

    let nombre = document.getElementById('texto').value
    
    function calcular(nombre)
    {
        let cantidad=nombre.length
        alert("Su nombre contiene "+cantidad+ " caracteres o letras")
    }
    calcular(nombre)
}
contarL()

function minuscula()
{

    let nombre = document.getElementById('texto').value
    
    function calcular(nombre)
    {
        let cantidad=nombre.toLowerCase()
        alert("Su palabra ingresada, en Minuscula es: "+cantidad)
    }
    calcular(nombre)
}
minuscula()

function mayuscula()
{
  let nombre = document.getElementById('texto').value
  
  function calcular(nombre)
  {
      let cantidad=nombre.toUpperCase()
      alert("Su palabra ingresada, en Mayuscula es: "+cantidad)
  }
  calcular(nombre)
}
mayuscula()

function primeraL()
{
  let nombre = document.getElementById('texto').value
  
  function calcular(nombre)
  {
      let cantidad=nombre.charAt(0)
      alert("La primera letra de la palabra que ingreso es: "+cantidad)
  }
  calcular(nombre)
}
primeraL()