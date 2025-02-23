// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const div = document.createElement("div");
document.body.appendChild(div);


// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div2 = document.createElement("div");
document.body.appendChild(div2);

const p = document.createElement("p");
div2.appendChild(p);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3 = document.createElement("div");
document.body.appendChild(div3);

for (let i = 0; i < 6; i++) {
    const p6 = document.createElement("p");
    div3.appendChild(p6);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p2 = document.createElement("p");
p2.textContent = "Soy dinámico!";
document.body.appendChild(p2);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");
for (const app of apps) {
    const appLi = document.createElement("li");
    appLi.textContent = app;
    ul.appendChild(appLi);
}

document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeElements = document.querySelectorAll(".fn-remove-me");
removeElements.forEach(element => {
    element.remove();
});


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const betweenP = document.createElement("p");
betweenP.innerText = "Voy en medio!";

const basicDivs = document.getElementsByTagName("div"); 
if (basicDivs.length >= 2) {
    basicDivs[0].parentNode.insertBefore(betweenP, basicDivs[1]);
}

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDivs = document.querySelectorAll(".fn-insert-here");

for (const div of insertDivs) {
    const insideP = document.createElement("p");
    insideP.innerText = "Voy dentro!";
    div.appendChild(insideP);
}



