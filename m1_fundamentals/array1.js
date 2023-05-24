let marks=[20,25,37,45,60,75,85,90]
console.log(marks)
console.log(marks.length)
console.log("element 1",marks[0])
console.log("element 5",marks[4])
console.log("last element",marks[7])

for(i=0;i<marks.length;i++){
    marks[i] = marks[i]*2;
    console.log(marks[i]);
}