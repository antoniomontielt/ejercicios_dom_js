// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const btn = document.querySelector(".showme");
console.log(btn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const title = document.querySelector("#pillado");
console.log(title);

// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);


// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const pkm = document.querySelectorAll(".pokemon");
console.log(pkm);


// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const testMe = document.querySelectorAll('span[data-function="testMe"]');
console.log(testMe);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const testMeChars = document.querySelectorAll('span[data-function="testMe"]');

const thirdChar = testMeChars[2];
console.log(thirdChar);



