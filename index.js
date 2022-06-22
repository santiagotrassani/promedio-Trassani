
let nota1=parseInt(prompt("Ingrese nota 1"))
let nota2=parseInt(prompt("Ingrese nota 2"))
let nota3=parseInt(prompt("Ingrese nota 3"))

let promedio=(nota1+nota2+nota3)/3
parseInt(promedio)

if(promedio>=0 && promedio <=10){
    alert("Estas desaprobado, tu nota es: "+promedio)
}
else if(promedio>=10 && promedio<=20){
    alert("Estas aprobado, tu nota es: "+promedio)
}
else{
    alert("Ingresaste una nota fuera de rango")
}