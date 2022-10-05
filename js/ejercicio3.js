const lados=document.getElementById('calcu');
lados.addEventListener('click', ()=>
{
    const uno=document.getElementById('numero').value
    const dos=document.getElementById('numero2').value
    const tres=document.getElementById('numero3').value


    if(uno==dos && uno ==tres)
    {
        alert(`Este es un triangulo equilatero `)
    }
    else if(uno==dos || dos==tres || uno==tres )
    {
        alert(`Este es un triangulo isosceles `)
    }
    else
    {
        alert(`Este es un triangulo escaleno `)
    }
})