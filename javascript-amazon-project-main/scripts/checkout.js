import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

/*
function loadPage(){
    return new Promise((resolve) => {
        console.log('load page');
        resolve();
    }).then(() => {
        return loadProductsFetch();
    }).then(() => {
        return new Promise((resolve) => {
            resolve('value2');
        });
    });
}
*/

// async fonksiyonlar return olarak new Promise dondururler. Tekrar tekrar new promise yazmaya gerek kalmaz.
// await async ile birlikte kullanilir. promise in bitmesini bekler yeni satira gecmek icin.
// async await can only be used with Promises.
// bu fonksiyon yukarıdaki fonksiyonun kisayoludur.
async function loadPage(){

    await loadProductsFetch();

    const value = await new Promise((resolve) => {
        loadCart(() => {
            resolve('value3');
        });
});

    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();

/*
Promise.all([
    loadProductsFetch(),
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
*/

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
