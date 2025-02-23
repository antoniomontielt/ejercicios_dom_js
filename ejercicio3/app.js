// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesUl = document.createElement("ul");
document.body.appendChild(countriesUl);

for (const country of countries) {
    const countriesLi = document.createElement("li");
    countriesLi.textContent = country;
    countriesUl.appendChild(countriesLi);
}

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeClass = document.querySelector(".fn-remove-me");
removeClass.remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div = document.querySelector('div[data-function="printHere"]');

const divUl = document.createElement("ul");

div.appendChild(divUl);

for (const car of cars) {
    const divLi = document.createElement("li");
    divLi.textContent = car;
    divUl.appendChild(divLi);
}

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const divs = [];

const countriesImg = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

    for (const countryImg of countriesImg) {
        const divImg = document.createElement("div");
        const h4 = document.createElement("h4");
        h4.innerText = countryImg.title;
        const img = document.createElement("img");
        img.src = countryImg.imgUrl;
        document.body.appendChild(divImg);
        divImg.appendChild(h4);
        divImg.appendChild(img);

        divs.push(divImg);
    }

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const deleteButton = document.createElement("button");
deleteButton.innerText = "Eliminar último div";
document.body.appendChild(deleteButton);

deleteButton.addEventListener("click", () => {
    const lastDiv = divs.pop();
    lastDiv.remove();
});

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

for (const divElement of divs) {
    const deleteButtonDiv = document.createElement("button");
    deleteButtonDiv.innerText = "Elimina este div";
    divElement.appendChild(deleteButtonDiv);
    deleteButtonDiv.addEventListener("click", () => {
        divElement.remove();
    });
}

