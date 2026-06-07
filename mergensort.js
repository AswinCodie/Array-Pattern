/*2. Merge Two Unsorted Arrays in Sorted Order

Merge two unsorted arrays into a single sorted array in
ascending order.*/

const ar1=[2, 5, 7, 4, 1];
const ar2=[3, 6, 8, 9, 10];

const ar3=ar1.concat(ar2);
ar3.sort(function(a, b){return a-b});
console.log(ar3);

for(i=0;i<10;i++)