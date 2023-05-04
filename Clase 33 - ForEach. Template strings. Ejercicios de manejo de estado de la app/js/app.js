// Tu código aquí.

// Variable de estado: un number para almacenar el valor del contador actual
let counter = 0;

// Seleccionar el botón ADD COUNT y añadir un listener para el evento 'click'. Cada vez que el usuario haga click en el botón, incrementamos en 1 la variable de estado. Luego, seleccionar el nodo donde esta la información textual y sobrescribirlo con el valro de la variable

document.querySelector(".prevBtn").addEventListener("click", () => {
  counter--;

  // Cuando usamos mucho el mismo nodo más de una vez en la función, guárdalo en una variable para simplificar el código
  updateCounter(counter);
});

document.querySelector(".nextBtn").addEventListener("click", () => {
  counter++;
  updateCounter(counter);
});

function updateCounter(value) {
  const counterElement = document.querySelector("#counter");
  counterElement.innerHTML = value;

  if (value > 0) {
    counterElement.style.color = "green";
  } else if (value < 0) {
    counterElement.style.color = "red";
  } else {
    counterElement.style.color = "#333333";
  }
}
