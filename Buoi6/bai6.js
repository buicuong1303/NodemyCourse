var phucBirthday = '26-11-1992';
var cuongBirthday = '27-11-1994';
let [dayP, monthP, yearP] = phucBirthday.split('-');
let [dayC, monthC, yearC] = cuongBirthday.split('-');
let ymdC = [yearC, monthC, dayC];
let ymdP = [yearP, monthP, dayP];
console.log('Cuong:' + ymdC.join('-'));
console.log('Phuc:', ymdP.join('-'));

let objDateC = new Date(ymdC);
let objDateP = new Date(ymdP);

if (objDateP - objDateC < 0) console.log('Phuc lớn hơn');
else console.log('Cường lớn hơn');

let affter100 = objDateC.getDate() + 100;
objDateC.setDate(affter100);
let day = objDateC.getDay();
switch (day) {
  case 0:
    console.log('CN');
    break;
  case 1:
    console.log('Thu 2');
    break;
  case 2:
    console.log('Thu 3');
    break;
  case 3:
    console.log('Thu 4');
    break;
  case 4:
    console.log('Thu 5');
    break;
  case 5:
    console.log('Thu 6');
    break;

  default:
    console.log('Thu 7');
    break;
}
