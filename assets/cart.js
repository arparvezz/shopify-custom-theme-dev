function updateSCart(){
  fetch('?sections=s-cart')
  .then(f => f.text())
  .then(textData => {
    let div = document.createElement('div');
    let obj = JSON.parse(textData);
    let finalData = obj['s-cart'];
    div.innerHTML = finalData;
    let updateSectionHTML = div.querySelector('.s-cart-wrapper').innerHTML;

    document.querySelector('.s-cart-wrapper').innerHTML = updateSectionHTML;
  })
  .catch(err => console.log(err))
}