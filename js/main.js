{
    var allProduct = document.querySelectorAll('.list .pc');
var content = document.querySelector('#content');
var addCart = document.querySelector('#pc');
var totalEGP = document.querySelector('#total-EGP');
var totalDollar = document.querySelector('#total-dollar');
var allPrice = document.querySelector('#btn-allPrice');
var showPrice = document.getElementById('show-price');
var price = document.getElementById('price');
priceAllEGP =0
priceAllDollar =0
allProduct.forEach(function (item) {
    item.addEventListener( 'click' , function () {
        priceAllEGP += +(item.getAttribute('price'))
        priceAllDollar += +((item.getAttribute('price'))/30)
        content.innerHTML += item.textContent +' .' ;
        content.style.padding = '10px 0'
        content.style.backgroundColor = '#fff'
        if (allPrice !='') {
            allPrice.style.display = 'block';
        }
        ondblclick
    })
    // price.addEventListener ("dblclick" , function () {
    //     showPrice.remove()
    // });
    price.addEventListener('click' , function () {
        showPrice.innerHTML =(item.getAttribute('price'));
        showPrice.style.padding = '5px 10px';
        showPrice.style.boxShadow = '0 0 5px 1px gray' ;
        showPrice.style.transition = 'all 0.5s' ;
        })
});
allPrice.addEventListener('click' , function () {
    totalEGP.innerHTML =(priceAllEGP + " Egp")
    totalEGP.style.padding = '10px 0'
    totalDollar.innerHTML =(priceAllDollar + " $")
    totalDollar.style.padding = '10px 0'
})

AOS.init();
}