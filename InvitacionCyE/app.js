
// Fecha objetivo (cambia esto a la fecha deseada)
const fechaObjetivo = new Date('2023-11-19T15:59:59').getTime();

// Función para actualizar la cuenta regresiva
function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    if (tiempoRestante <= 0) {
        clearInterval(cuentaRegresivaInterval);
        document.getElementById('cuenta-regresiva').innerHTML = '¡La cuenta regresiva ha terminado!';
    }
}

// Actualiza la cuenta regresiva cada segundo
const cuentaRegresivaInterval = setInterval(actualizarCuentaRegresiva, 1000);

// Llama a la función para que comience inmediatamente
actualizarCuentaRegresiva();