const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector("parrafo");
const pid = document.querySelector("pid");
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});
/* Modifica el html en el texto que pongamos y interpretanto el html que podamos poner en él */
//h1.innerHTML = "Pato <br> Gato";
/* Modifica el html en el texto que pongamos */
//h1.innerText = "Pato <br> Gato";

/* getAtribute nos permite LEER algun atributo que tengo algun elemento. */
console.log(h1.getAttribute("class"));
/* setAtribute nos permite MODIFICAR algun atributo que tengo algun elemento. */
console.log(h1.setAttribute("class", title));

h1.classList.add("rojo");
h1.classList.remove("rojo");

 /* jum no sé */
//h1.classList.toggle("rojo");
/* nos devuelve true o false dependiendo si el elemento tien la clase que le preguntamos */
//h1.classList.contains("rojo");

const img = document.createElement('img');
img.setAttribute('src', 'https://tse2.mm.bing.net/th?id=OIP.W65e6yHYVkJPaQKo3NJ_QQHaEo&pid=Api&P=0');

pid.appendChild(img);