function searchFood(item) {
  return new Promise(function fun1(res, rej) {
    console.log("Searching start for", item, ".........");
    setTimeout(function timer1() {
      let data = `list of ${item}`;
      res({ item, data });
    }, 3000); 
  });
}
function orderFood(item) {
  return new Promise(function fun2(res, rej) {
    console.log("select", item);
    setTimeout(function timer2() {
      let id = Math.floor(Math.random() * 9999999);
      res({ item, id });
    }, 4000);
  });
}

function payments(item, id) {
  return new Promise(function fun3(res, rej) {
    console.log(`payment for ${item} with id no :- ${id}`);

    setTimeout(function timer3() {
      let status = true;
      res(status);
    }, 5000);
  });
}

let result = searchFood("pizza")
  .then(function consumer1(abhi) {
    console.log(abhi.data);
    return orderFood(abhi.item);
  })
  .then(function consumer2(orderID) {
    console.log("order created successfully with id no ", orderID.id);
    return payments(orderID.item, orderID.id);
  })
  .then(function consumer3(status) {
    console.log("payment successfull with status", status);
  });
