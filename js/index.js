const el = document.querySelector("#text");
const text = "Bem-vindo(a) ao meu portfolio";
const interval = 200;
const pauseBetweenIterations = 2000;

function showText(el, text, interval) {
  let index = 0;
  let direction = 1;
  let typing = true; // Variável para controlar se está digitando ou apagando

  const typer = setInterval(() => {
    el.innerHTML = text.substring(0, index);

    if (typing) {
      index++;
      if (index > text.length) {
        typing = false;
        setTimeout(() => {
          direction = -1;
        }, pauseBetweenIterations);
      }
    } else {
      index--;
      if (index === 0) {
        typing = true;
        setTimeout(() => {
          direction = 1;
        }, pauseBetweenIterations);
      }
    }
  }, interval);
}

showText(el, text, interval);
