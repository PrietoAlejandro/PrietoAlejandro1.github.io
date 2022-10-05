const calcular=document.getElementById('calcu');
calcular.addEventListener('click', ()=>
{
    const ids=document.getElementById('formulario').value
    const ids2=document.getElementById('formulario2').value
    const ingresado=document.getElementById('numero').value


    //fahrengeit a Celcius
    if (ids==1 && ids2==5) 
    {
        const ingres=(parseFloat(ingresado)-32)*(5/9)
        alert(`Esto es el resultado de fahrengeit a Celcius ${ingres}`)
    }
    //Celcius A fahrengeit
    else if(ids==2 && ids2==4)
    {
        const ingres = (parseFloat(ingresado)*1.8) + 32;
        alert(`Este es el resultado de Celcius A fahrengeit ${ingres}`)
    }
    //KELVIN A FAHRENGEIT
    else if(ids==3 && ids2==4) 
    {
        const ingres = (parseFloat(ingresado)-273.15)*(9/5) + 32;
        alert(`Este es el resultado de KELVIN A FAHRENGEIT ${ingres}`)
    }
    //FAHRENGEIT A KELVIN
    else if(ids==1 && ids2==6)
    {
        const ingres = (parseFloat(ingresado)-32)*(5/9) + 273.15;
        alert(`Este es el resultado de FAHRENGEIT A KELVIN  ${ingres}`)
    }
    //celcius a kelvin
    else if(ids==2 && ids2==6)
    {
        const ingres = (parseFloat(ingresado)-32)*(5/9) + 273.15;
        alert(`Este es el resultado de celcius a kelvin  ${ingres}`)
    }
    //kelvin a celcius
    else if(ids==3 && ids2==5)
    {
        const ingres = (parseFloat(ingresado)-273.15);
        alert(`Este es el resultado de kelvin a celcius  ${ingres}`)
    }
})