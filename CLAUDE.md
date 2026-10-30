# Demo: Contrapeso, fisioterapia en el Clot

Web de ejemplo de una página para enseñar a posibles clientes. Es la demo 1 de la semana 2 del plan de Eric.

## Reglas

- **Negocio inventado.** Nada de datos reales: ni nombres, ni teléfonos, ni direcciones, ni reseñas, ni cifras de experiencia. Tampoco promesas de curación.
- **Marcadores.** Todo dato que falte se deja con `<mark class="edita">EDITA AQUÍ: ...</mark>` y un comentario `<!-- EDITA AQUÍ: ... -->` en el HTML. Para ver lo pendiente, busca «EDITA AQUÍ» en `index.html`.
- **Enlaces de ejemplo.** `tel:+34000000000`, `https://wa.me/34000000000` y `EDITA-AQUI@example.com`. No pertenecen a nadie; se cambian todos a la vez por los del cliente.
- **Mapa.** Es un mapa real de Google Maps que enseña solo el barrio del Clot, nunca una calle o un número, para no señalar una puerta real. Con un cliente, se cambia por su dirección y se añade Google Maps a su política de privacidad.
- **Formulario.** No envía nada y solo pide nombre, teléfono y mañana o tarde. No preguntes qué le duele a la persona: son datos de salud.
- **Google.** La etiqueta `noindex` se queda mientras el negocio sea inventado.
- **Textos.** En español, de tú y en primera persona (es una sola fisio o un solo fisio). Sin anglicismos.

## Estilo

- Idea: el mapa del dolor y la cinta de kinesiología. Lo memorable es el muñeco de la portada; el resto de la página queda sobrio.
- Colores (variables en `styles.css`): papel `#F3F6F4`, tinta `#17263A`, cinta azul `#1E46C8`, cinta rosa `#E8487A` (solo en el muñeco, nunca en texto), gris `#C9D3D1`, rotulador `#FFE45C` (solo marcadores).
- Letra: Atkinson Hyperlegible Next, de Google Fonts. Una sola familia.
- Alineado a la izquierda. Sin tarjetas iguales, sin fotos de archivo, sin eyebrows en mayúsculas.
- La única animación automática es la cinta al marcar una zona, y se quita con «reducir movimiento».

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: aspecto. `grid` en portada, primera visita y contacto; `flex` en cabecera y barra del móvil.
- `script.js`: mapa del cuerpo y formulario.
- `favicon.svg`: icono de la pestaña.

## Cómo probarla

Sirve la carpeta con un servidor mínimo de Node en `http://127.0.0.1` y comprueba escritorio y móvil (375 px), sin scroll horizontal, con el mapa funcionando con ratón y teclado.
