
function desconto(price, discount){
if(discount>0 && discount<10) {
    return finalPrice=price*(1+discount/100);
}
else if(discount>=10 && discount<30) {
    return finalPrice=price*(1-discount/100);
}
else if(discount===0 || discount===undefined) {
    return finalPrice=2*price;
}
else {
    return finalPrice=price;
};
};
