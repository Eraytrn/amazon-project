import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve('value1');
        });
     }),

     new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
})

// Promise asenkron kodlarda bitimin beklenmesi için callback lere gore daha etkili bir yontemdir. Callbacklerde aynı gorevi yapar ama nesting
// yada projenin ileri zamanlarında zorluklar cıkarabilir. 
/*
 new Promise((resolve) => {
    loadProducts(() => {
        resolve('value1');
    });

 }).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

 }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
 });
*/

 /*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
