const sele=document.getElementById('calcu');
sele.addEventListener('click', ()=>
{
    const selec =document.getElementById('formulario').value
    const selec2 =document.getElementById('formulario2').value
    const selec3 =document.getElementById('formulario3').value

    if(selec==1 && selec3==8 && selec2==15)
    {
        alert(`Es correcto, el nombre es Tatiana, su apellido es Cabrera y orienta Js`)
    }
    else if(selec==2 && selec3==9 && selec2==16)
    {
        alert(`Es correcto `)
    }
    else if(selec==3 && selec3==10 && selec2==17)
    {
        alert(`Es correcto `)
    }
    else if(selec==4 && selec3==11 && selec2==18)
    {
        alert(`Es correcto `)
    }
    else if(selec==5 && selec3==12 && selec2==19)
    {
        alert(`Es correcto `)
    }
    else if(selec==6 && selec3==13 && selec2==20)
    {
        alert(`Es correcto `)
    }
    else if(selec==7 && selec3==14 && selec2==20)
    {
        alert(`Es correcto `)
    }
    else if(selec==8 && selec3==15 && selec2==21)
    {
        alert(`Es correcto `)
    }
    else if(selec==9 && selec3==16 && selec2==21)
    {
        alert(`Es correcto `)
    }
    else
    {
        alert(`Es incorrecto `)
    }

})
