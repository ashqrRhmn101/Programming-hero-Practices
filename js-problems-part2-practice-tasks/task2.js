const phones = [
    {name: "Samsung", price: 30000, color: "black", quantity: 2},
    {name: "Xoami", price: 25000, color: "black", quantity: 2},
    {name: "Iphone", price: 100000, color: "black", quantity: 1},
    {name: "Realme", price: 40000, color: "black", quantity: 3},
]
function getPhones(phones){
    let totalPhonePrice = 0;
    for(const phone of phones){
        console.log(phone.name ,phone.price, "=>", phone.quantity);
        const phonePrice = phone.price*phone.quantity;
        console.log("Total Price: ", phonePrice);
        totalPhonePrice += phonePrice;
    }
    return totalPhonePrice;
}
const totalPrice = getPhones(phones);
console.log("Total Phone Price: ", totalPrice);

// function getCheapestPhones(phones){
//     // console.log(phones);
//     let lowPricePhone = phones[0];

//     for(const phone of phones){
//         if(phone.price < lowPricePhone.price){
//             lowPricePhone = phone;
//         }
//     }
//     return lowPricePhone;
// }

// console.log(getCheapestPhones(phones));