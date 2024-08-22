
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let unpack = [];
   matrix.forEach ((value, index) => {
  
    if (index % 2)
 { unpack = unpack.concat(...matrix[index].reverse())}
 
 else { unpack = unpack.concat(...matrix[index])
  }
 })

  return unpack;
}
