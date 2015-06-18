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
  id: 3162199619
},
done: function (data) {
console.log(data);
},
});

- Update Cart Item
> $.shopifyAjax('updateCart', { data:{ 3162199619: 10 }, done: function (data) { console.log(data); }, });

- Remove Cart Item
> $.shopifyAjax('removeCart', {
data:{
  id: [3162199619, 3162199612, 3162199616],
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

