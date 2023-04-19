/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = "https://platzi-avo.vercel.app"
const url = urlBase + "/api/avo"

const appNode = document.querySelector("#app")

window.fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const todosLosItems = []
        data.data.forEach(element => {
            console.log(element.name);
            
            const imagen = document.createElement("img")
            imagen.src = urlBase + element.image

            const title = document.createElement("h2")
            title.textContent = element.name

            const price = document.createElement("div")
            price.textContent = element.price

            const container = document.createElement("div")
            container.append(imagen, title, price)

            todosLosItems.push(container)
        });

        appNode.append(...todosLosItems)
    });

