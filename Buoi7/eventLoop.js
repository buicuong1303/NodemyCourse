console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
setTimeout(() => {
  console.log(4);
}, 1000);
console.log(3);

// 1 3 4 2
// đầu tiên chương trình chạy từ trên xuống, gặp hàm console.log(1) là hàm đồng bộ nên nạp vào call stack và thực thi ngay
//Tiếp đó, setTimeout() sẽ được đẩy vào stack và thực hiện. Lúc này, nó sẽ khởi tạo một bộ đếm Timer() có trong web APIs (nghĩa là khi setTimeout() được gọi, bản thân nó đã chạy xong luôn rồi và sẽ được lấy ra khỏi stack).
//Tiếp tục gặp hàm setTimeOut, cơ chế như trên
//
//sau thời gian chờ thì sẽ đẩy hàm console.log(4); vào queue trước vì có thời gian chờ ngắn hơn, sau đó là console.log(2)
//Cuối cùng sẽ nạp callback lại vào stack khi stack rỗng
