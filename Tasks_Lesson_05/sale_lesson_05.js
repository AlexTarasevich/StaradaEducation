// Система скидок: Рассчитайте итоговую цену товара с учетом скидок. 
// Если сумма покупки больше 1000 рублей, покупатель получает скидку 5%, если больше 5000 – скидка 10%. 
// Выведите итоговую цену в консоль.

let productPrice = 6000;
let purchaseAmount = 3;

let totalPrice = productPrice * purchaseAmount;

if (totalPrice > 5000) {
    let discount = 0.1; // 10% discount
    totalPrice -= totalPrice * discount;
    console.log("Скидка применина: 10%");
} else if (totalPrice > 1000) {
    let discount = 0.05; // 5% discount
    totalPrice -= totalPrice * discount;
    console.log("Скидка применина: 5%");
}

console.log("Итоговая цена: " + totalPrice.toFixed(2) + " рублей");