document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector('.products')
  async function fetchProducts(url) {
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < response.length; i++) {
      let title = response[i].title; 
      let truncatedTitle = title.substring(0, 20); 
      products.innerHTML += `
      <div class="product">
      <div class="row">
          <div class="col-md-2">
              <div class="card" style="width: 18rem;">
                  <div class="card-img-container"> <!-- الكلاس الجديد -->
                      <img src="${response[i].image}" class="card-img-top" alt="...">
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${truncatedTitle}</h5>
                      <p class="card-text">${response[i].price}</p>
                      <a href="./deaatils.html" class="btn"> Quick View</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
      
      `;
    }
  }
  // document.getElementById('allProductsBtn').addEventListener('click', function() {
  //   fetchProducts('https://fakestoreapi.com/products');
  // });

  // document.getElementById('electronicsBtn').addEventListener('click', function() {
  //   fetchProducts('https://fakestoreapi.com/products/category/electronics/');
  // });

  // document.getElementById('jewelryBtn').addEventListener('click', function() {
  //   fetchProducts('https://fakestoreapi.com/products/category/jewelery/');
  // });

  // document.getElementById('clothingBtn').addEventListener('click', function() {
  //   fetchProducts('https://fakestoreapi.com/products/category/jewelery');
  // });

  fetchProducts('https://fakestoreapi.com/products');
});


document.getElementById('toggleButton').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('active');
});
// تابع لتبديل وضع الدارك
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode'); // تبديل وضع الدارك على عنصر الجسم
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.classList.toggle('dark-mode'); // تبديل وضع الدارك على الأزرار
  });
}

