
let plusIcons = document.querySelectorAll('.cart-single-item-quantity-plus');
let minusIcons = document.querySelectorAll('.cart-single-item-quantity-minus');


plusIcons.forEach(singleIcon => {
  singleIcon.addEventListener('click',function(e){
    e.preventDefault()
    let parentItem = this.parentElement;
    let qty = parentItem.querySelector('.cart-single-item-quantity').value;
    let variant = parentItem.getAttribute('data-line-id');
    updateQuantity(variant, qty  + 1);
  })
})

minusIcons.forEach(singleIcon => {
  singleIcon.addEventListener('click',function(e){
    e.preventDefault()
    let parentItem = this.parentElement;
    let qty = parentItem.querySelector('.cart-single-item-quantity').value;
    let line = parentItem.getAttribute('data-variant-id');
    console.log(line, qty);
    
  })
})

function updateQuantity(line,quantiy){
    let obj = {
      line: `${quantiy}`
    }

    fetch(window.Shopify.routes.root + 'cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ obj })
    })
    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log(res) 
    })
    .catch((error) => {
      console.error('Error:', error);
    });
      

  }

