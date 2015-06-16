# shopifyAjax

##Usage:

- List Cart Items
> $.shopifyAjax('listCart', {
done: function (data) {
console.log(data);
},
});
 
- Add Cart Item
> $.shopifyAjax('addCart', {
data:{
  quantity: 2,
  id: 794864229
},
done: function (data) {
console.log(data);
},
});

- Update Cart Item
> $.shopifyAjax('updateCart', {
data:{
  quantity: 2,
  id: 794864229
},
done: function (data) {
console.log(data);
},
});

- Remove Cart Item
> $.shopifyAjax('removeCart', {
data:{
  id: 794864229
},
done: function (data) {
console.log(data);
},
});

- Clear Cart
> $.shopifyAjax('clearCart', {
done: function (data) {
console.log(data);
},
});

##Events
done: function (data) {}

before: function (data) {}

always: function (data) {}

error: function (data) {}

