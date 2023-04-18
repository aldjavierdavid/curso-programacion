/**
 * https://www.codewars.com/kata/57a429e253ba3381850000fb
 * 
 * write function bmi that calculates body mass index (bmi = weight / height^2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */
function bmi(weight, height) {
    // Primero, tenemos que calcular el IMC. Sabemos que bmi = weight / height^2. Hacer el cálculo, y guardarlo en una variable
    // Recomendación: mostrar por console.log a ver si hemos hecho bien el cálculo
  
    let scale = "";
  
    let bmiCalculated = weight / height ** 2;
  
    // Luego, en función de este valor, debemos retornar un string indicando pues en que franja está el individuo
    if (bmiCalculated <= 18.5) {
      scale = "Underweight";
    } else if (bmiCalculated <= 25.0) {
      scale = "Normal";
    } else if (bmiCalculated <= 30.0) {
      scale = "Overweight";
    } else {
      scale = "Obese";
    }
  
    return scale;
  }
  
  //Marcos
  let pesoMarcos = bmi(68, 1.71); // peso en kg, altura en metros. "Normal"
  console.log("Peso Marcos: ", pesoMarcos);
  
  //Ofelia
  let pesoOfelia = bmi(150, 1.71); //
  console.log("Peso Ofelia: ", pesoOfelia); // "Obese"
  