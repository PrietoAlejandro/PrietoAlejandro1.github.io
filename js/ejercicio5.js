//area triangulo
let areatri =document.getElementById('areat')
areatri.addEventListener('click', ()=>
{
    let areatria=document.getElementById('area1').value
    let areatria2=document.getElementById('area2').value
    let total=(areatria*areatria2)/2;

    alert(`Este es el area del triangulo ${total}`)
}
    )
    //perimetro triagulo
    let peritri =document.getElementById('perit')
    peritri.addEventListener('click', ()=>
{
    let perime1=document.getElementById('l1').value
    let perime2=document.getElementById('l2').value
    let perime3=document.getElementById('l3').value
    perime1=parseInt(perime1);
    perime2=parseInt(perime2);
    perime3=parseInt(perime3);
    let total=perime1+perime2+perime3;
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //area cuadrado
    let areacua =document.getElementById('areac')
    areacua.addEventListener('click', ()=>
{
    let areacuad1=document.getElementById('areac1').value
    let areacuad2=document.getElementById('areac2').value

    areacuad1=parseInt(areacuad1);
    areacuad2=parseInt(areacuad2);

    let total=areacuad1*areacuad2;
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //perimetro cadrado
    let pericua =document.getElementById('peric')
    pericua.addEventListener('click', ()=>
{
    let perimec1=document.getElementById('la1').value
    let perimec2=document.getElementById('la2').value
    let perimec3=document.getElementById('la3').value
    let perimec4=document.getElementById('la4').value

    perimec1=parseInt(perimec1);
    perimec2=parseInt(perimec2);
    perimec3=parseInt(perimec3);
    perimec4=parseInt(perimec4);

    let total=perimec1+perimec2+perimec3+perimec4;
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //area circulo
    let areacir =document.getElementById('areaci')
    areacir.addEventListener('click', ()=>
{
    let areacirc1=document.getElementById('radio').value

    areacirc1=parseInt(areacirc1);

    const PI=3.14
    let total=(PI*areacirc1)*areacirc1;
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //perimetro circulo
    let pericir =document.getElementById('pecirc')
    pericir.addEventListener('click', ()=>
{
    let perimecirc1=document.getElementById('pradio').value    

    perimecirc1=parseInt(perimecirc1);
    const PI=3.14
    let total=2*(PI*perimecirc1);
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //area rectangulo
    let arearec =document.getElementById('arearec')
    arearec.addEventListener('click', ()=>
{
    let arearec1=document.getElementById('lada1').value
    let arearec2=document.getElementById('lada2').value

    arearec1=parseInt(arearec1);
    arearec2=parseInt(arearec2);

    let total=arearec1*arearec2;
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )

    //perimetro rectangulo
    let perirec =document.getElementById('perirec')
    perirec.addEventListener('click', ()=>
{
    let perirect=document.getElementById('ladp1').value
    let perirect2=document.getElementById('ladp2').value

    perirect=parseInt(perirect);
    perirect2=parseInt(perirect2);

    let total=2*(perirect+perirect2);
    total=parseInt(total);
    alert(`Este es el area del triangulo ${total}`)
}
    )