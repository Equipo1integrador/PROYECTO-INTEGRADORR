const txtA = document.getElementById("txtA");
const txtB = document.getElementById("txtB");
const txtIteraciones = document.getElementById("txtIter");


const btnCalcular = document.getElementById("btnCalcular");
const pConfirmacion = document.getElementById("confirmacion");
const pxAct = document.getElementById("xAct");
const pEA = document.getElementById("EA");

btnCalcular.addEventListener('click', Calcular)

var xAnt = 0;
var xAct = 0;
var eA = 0;
var expo = 0;
var euler = 0;



function Calcular(){
        const a = parseFloat(txtA.value);
        const b = parseFloat(txtB.value);
        const iteraciones = parseInt(txtIteraciones.value);

       
       
   

        if(!isNaN(a) && !isNaN(b) && !isNaN(iteraciones)){
          
             xAnt = 0;

            
            for (let i = 0; i < iteraciones; i++)
            {
                
                expo = Math.pow(xAnt,2);

                euler = Math.exp(expo);

                xAct = (a * (euler)) / b;

                eA = ((xAct - xAnt) / xAct) * 100;

                xAnt = xAct;
            }

                pConfirmacion.style = "color:black";
                pConfirmacion.innerText = "Calculo Exitoso";

                pxAct.innerText = xAct;
                pEA.innerText = eA;
                
           
        }
        else{
            pConfirmacion.style = "color:red";
            pConfirmacion.innerText = "Calculo Imposible";
        }

}