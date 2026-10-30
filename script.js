// ===== Mapa del cuerpo =====
// Al tocar una zona: se marca su botón, se pega su cinta y se ve su texto.
const botonesZona = document.querySelectorAll('.zona-boton');
const cintas = document.querySelectorAll('.cinta');
const textosZona = document.querySelectorAll('.zona');

function elegirZona(zonaElegida) {
  botonesZona.forEach((boton) => {
    boton.setAttribute('aria-pressed', boton.dataset.zona === zonaElegida);
  });
  cintas.forEach((cinta) => {
    cinta.classList.toggle('activa', cinta.dataset.zona === zonaElegida);
  });
  textosZona.forEach((texto) => {
    texto.classList.toggle('activa', texto.dataset.zona === zonaElegida);
  });
  // En móvil el texto queda debajo del dibujo: lo acercamos solo si no se ve
  document.querySelector('.zona.activa').scrollIntoView({ block: 'nearest' });
}

botonesZona.forEach((boton) => {
  boton.addEventListener('click', () => elegirZona(boton.dataset.zona));
});

// ===== Formulario =====
// Es una demo: comprueba los campos y avisa, pero no envía nada a ningún sitio.
const formulario = document.getElementById('formulario');
const campoNombre = document.getElementById('nombre');
const campoTelefono = document.getElementById('telefono');
const mensajeEnviado = document.getElementById('enviado');

// Con JavaScript ya funciona, así que activamos el botón
formulario.querySelector('button[type="submit"]').disabled = false;

function marcarCampo(campo, esValido) {
  const error = document.getElementById(campo.id + '-error');
  error.hidden = esValido;
  // aria-describedby solo mientras hay error: si no, el lector de pantalla lo leería antes de tiempo
  if (esValido) {
    campo.removeAttribute('aria-invalid');
    campo.removeAttribute('aria-describedby');
  } else {
    campo.setAttribute('aria-invalid', 'true');
    campo.setAttribute('aria-describedby', error.id);
  }
}

function telefonoValido(texto) {
  // Quita espacios, guiones y paréntesis, y pide al menos 9 cifras
  const soloCifras = texto.replace(/[\s().-]/g, '').replace(/^\+/, '');
  return /^\d{9,15}$/.test(soloCifras);
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // evita que la página se recargue

  const nombreOk = campoNombre.value.trim() !== '';
  const telefonoOk = telefonoValido(campoTelefono.value);

  marcarCampo(campoNombre, nombreOk);
  marcarCampo(campoTelefono, telefonoOk);
  mensajeEnviado.textContent = '';

  if (!nombreOk) {
    campoNombre.focus();
  } else if (!telefonoOk) {
    campoTelefono.focus();
  } else {
    mensajeEnviado.textContent = 'Esta web es una demo: tu mensaje no se ha enviado.';
    formulario.reset();
    // Que la barra del móvil no tape el aviso
    mensajeEnviado.scrollIntoView({ block: 'nearest' });
  }
});
