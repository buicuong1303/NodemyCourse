var sum = -1;
for (var i = 0; i < 100; i++) {
  var sum = i * 100;
}
console.log(i); //100, biến i sau khi thoát khỏi for là 100
console.log(sum); //9900, biến i trong vòng for chỉ chạy đến 99
