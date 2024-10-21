// let p = document.getElementsByClassName("parent");
// const h1 = document.createElement("h1"); 
// h1.innerText = "Element is created by DOM Function";
// h1.style.backgroundColor = "cyan";
// p[0].appendChild(h1);  
// p[0].removeChild(h1)


// const display = document.getElementById("disp")
// console.log(display)
// function getData(){
//     console.log("calling function ")
//     display.innerHTML="<h3>Welcome to the abes engineering college</h3>"
// };

const promise1 = new Promise((resolve,reject)=>{
    let a=Math.floor(Math.random()*100);
    console.log(a)
    if(a<100 && a>0){
        resolve("value is between 0 and 1")

    }else{
        reject("value is not between")
    }
});

promise1.then((msg)=>{console.log(msg)})
.catch(error=>{console.log("please check the issue")})
.finally((msg)=>{console.log("thing are going good")})


const productContainer = document.getElementById("product-container");

fetch("https://dummyjson.com/products")
    .then(response => response.json())  
    .then(res => {
        
        res.products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.innerHTML = `<h3>Product ID: ${product.id}</h3>
                                    <p>Product Title: ${product.title}</p>`;
            productContainer.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.log("No data received: " + error);
        productContainer.innerHTML = "<p>Failed to fetch product data</p>";  
    });



