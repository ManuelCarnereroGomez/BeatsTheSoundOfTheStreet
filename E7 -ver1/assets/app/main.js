let nombreArticulo = document.querySelector(".nombreArticulo");
let textoBarra = nombreArticulo;
let imgArticulo = document.querySelector(".imgArticulo");
let t3 = document.querySelector(".t3");
let articulo = document.querySelectorAll(".articulo");
let contenedorArticulos = document.querySelector(".contenedorArticulos");
let abrirArticulo = (e) =>{
    let artSel = datos[Number(e.currentTarget.id)];
    contenedorArticulos.innerHTML = `${artSel.articulo}`;

}
let datos;
fetch('assets/data/data.json')
.then(res => res.json())
.then(data => {
    let listaArticulos = document.querySelector("#articulos");
    datos = data;
    data.forEach((item, index) => {
        let dentro = `<li class="art" id="${index}">
        <h2 style="cursor: pointer;">${item.nombreArticulo}</h2>`
        listaArticulos.innerHTML += dentro;
    });
})
.then(() => {
    let art = document.querySelectorAll(".art");
    art.forEach((item) => {
        item.addEventListener('click', abrirArticulo)
    });
});
let pagArticulos = (e) =>{
    window.open(`articulo.html`, '_blank');
}
articulo.forEach(item => {
    item.addEventListener('click', pagArticulos);
})