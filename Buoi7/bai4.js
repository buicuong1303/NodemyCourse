const object = {
  name: 'nodemy',
};

//object = 'Nodemy'; //không gán lại được, vì ta đã khai báo biến object vs từ khoá const. khi ta gán trực tiếp như vậy
//thì biến object đã tham chiếu tới một vùng nhớ khác, điều này const không cho phép

object.name = 'Nodemy'; //gán được, vì biến object không hề bị thay đổi vùng nhớ, ta chỉ thay đổi giá trị của trường name mà thôi
console.log(object);
