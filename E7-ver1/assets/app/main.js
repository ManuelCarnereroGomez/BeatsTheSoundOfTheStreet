let nombreArticulo = document.querySelector(".nombreArticulo");
let textoBarra = nombreArticulo;
let imgArticulo = document.querySelector(".imgArticulo");
let t3 = document.querySelector(".t3");
let articulo = document.querySelectorAll(".articulo")

let abrirArticulo = (e) =>{
    window.open(`../../pages/articulo.html`);
}

let articulo1 = document.querySelector("#uno");
let articulo2 = document.querySelector("#dos");
let articulo3 = document.querySelector("#tres");
let articulo4 = document.querySelector("#cuatro");
let articulo5 = document.querySelector("#cinco");

fetch('assets/data/data.json')
.then(res => res.json())
.then(data => {
    
})