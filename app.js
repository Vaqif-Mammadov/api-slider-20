
const product = document.querySelector(".product");
let liste = [];
let yoxla = 0;

const sagButton = document.querySelector('#sag');
const solButton = document.querySelector('#sol');

fetch('https://fakestoreapi.com/products/')
    .then(res => res.json())
    .then((products) => {
        liste = products.map(product => product.image);
        showImage();
    });

sagButton.addEventListener("click", () => {
    yoxla++;
    if (yoxla >= liste.length) {
        yoxla = 0;
    }
    showImage();
});

solButton.addEventListener("click", () => {
    yoxla--;
    if (yoxla < 0) {
        yoxla = liste.length - 1;
    }
    showImage();
});

function showImage() {
    product.innerHTML = "";
    const data = document.createElement("div");
    data.classList.add("images");
    const images = document.createElement("img");
    images.classList.add("foto");
    images.src = liste[yoxla];
    data.append(images);
    product.append(data);
}
