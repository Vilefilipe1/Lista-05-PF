Array.prototype.myMap = function(callback) {
    let newArray = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
      let counter = callback(this[i]);
      newArray.push(counter);
    }
    return newArray;
  };
  
  let arr = [1, 2, 3];
  arr = arr.myMap(e => e * 2);
  console.log(arr);  

  const sum = (list) => list.reduce((acc,x)=>acc+x,0)
  console.log(sum(arr))
