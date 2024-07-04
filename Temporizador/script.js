let interval;

function iniciar_reloj() {
  clearInterval(interval);
  const texto_alarma = document.getElementById("medidor-tiempo");

  // cambia el color del elemento que sirve como medidor cuando la función es ejecutada
  texto_alarma.style.color = "red";

  /* obtener los valores que el usuario ha definido en los 3 campos del html y los convertimos en 
   valores con base 10 */
  const hora = parseInt(document.getElementById("horas").value, 10);
  const minuto = parseInt(document.getElementById("minutos").value, 10);
  const segundo = parseInt(document.getElementById("segundos").value, 10);

  // Se obtiene la suma del tiempo en segundos
  let tiempo_total = hora * 3600 + minuto * 60 + segundo;

  // el h1 que sirve como indicador del tiempo es modificado mediante a la llamada a la funcion "formatTime"
  // la funcion devuelve el formato con el cual se va modificando el h1 conforme van pasando los segundos
  texto_alarma.textContent = formatTime(tiempo_total);

  // Se establece un interval para disminuir la cantidad de tiempo restante conforme va pasando cada segundo
  // y tambien se va actualizando cada segundo el formato del h1 que muestra el tiempo restante
  interval = setInterval(() => {
    tiempo_total--;
    texto_alarma.textContent = formatTime(tiempo_total);

    if (tiempo_total <= 0) {
      clearInterval(interval);
      console.log("Tiempo terminado");
      texto_alarma.style.color = "black";

      // Restablecer los valores iniciales cuando la cuenta ha finalizado
      document.getElementById("horas").value = 0;
      document.getElementById("minutos").value = 0;
      document.getElementById("segundos").value = 0;
      texto_alarma.textContent = "00:00:00";
    }
  }, 1000);
}

/* Mecanismo para darle formato al tiempo */
function formatTime(segundos) {
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}
