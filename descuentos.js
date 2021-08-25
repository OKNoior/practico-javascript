const precioOriginal = 186;
const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
    console.log({
        precio,
        descuento,
        porcentajePrecioConDescuento,
        precioConDescuento
    }) ;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    
    const priceValue = inputPrice.value;
    console.log(priceValue);
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
    console.log(discountValue);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    console.log(precioConDescuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;
}

var coupons = [     {coupon: "ClienteFiel", descuento: 30},
                    {coupon: "Amor&Amistad", descuento: 15},
                    {coupon: "Promo20", descuento: 20},
                    {coupon: "BestBuy", descuento: 10},
                    {coupon: "VIPclerance", descuento: 40}
                ];

function existeCoupon(coupon){

}
function onClickButtonPriceDiscountCoupon(){
    const inputPrice = document.getElementById("InputPriceC");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const resultado = coupons.find( miCoupon => miCoupon.coupon === couponValue );
    console.log(resultado);

    if(!resultado){
        const resultP = document.getElementById("ResultPriceCoupon");
        resultP.innerText = "Coupon no encontrado" ;
        return;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, resultado.descuento);
    console.log(precioConDescuento);
    const resultP = document.getElementById("ResultPriceCoupon");
    resultP.innerText = "El precio con descuento son $" + precioConDescuento;

}
