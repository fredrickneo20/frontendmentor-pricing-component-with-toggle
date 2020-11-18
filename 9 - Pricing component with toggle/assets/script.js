let circle = document.getElementById('circle-1');
let price = document.getElementsByClassName('price');
const newPrice = [19.99, 24.99, 39.99];
const regPrice = [199.99, 249.99, 399.99];

const movePeriod = () => {
    circle.classList.toggle('circle-2');
    if(price[0].textContent === '$199.99'){
        for(let i=0; i<price.length; i++){
            price[i].innerHTML = `<span>&dollar;</span>${newPrice[i]}`;
        }
    } else{
        for(let i=0; i<price.length; i++){
            price[i].innerHTML = `<span>&dollar;</span>${regPrice[i]}`;
        }
    }
}

circle.onclick = movePeriod;
