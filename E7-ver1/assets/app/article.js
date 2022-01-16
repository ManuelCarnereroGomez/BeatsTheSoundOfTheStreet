fetch('../assets/data/data.json')
.then(res => res.json())
.then(data => {
    let textoBarra = document.getElementsByClassName('textoBarra');
    textoBarra.innerHTML = `${data[0].nombreArticulo}`
    let imagen = document.getElementsByClassName('imgArticulo');
    imagen.src = `${data[0].imagen}`;
    let titulo = document.getElementsByClassName('nombreArticulo');
    titulo.innerHTML = `${data[0].nombreArticulo}`
    let texto = document.getElementsByClassName('t3');
    texto.innerHTML = `${data[0].texto}`;
})