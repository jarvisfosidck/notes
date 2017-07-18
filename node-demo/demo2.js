var a = [1,2,3,4,5,6,7,8];


var sum = 0;
var i = 0;
function add (num) {
  sum += num;
  i++;
  if (a[i]) {
    add(a[i]);
  }
}
add(a[i]);

console.log(sum);


///
///
