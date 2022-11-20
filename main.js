//B1

// let numbercheck = (value) => {
//     return (Number.isInteger(value));
// };
// console.log(numbercheck('abc'));
// console.log(numbercheck(-7));
// console.log(numbercheck(3));
// console.log(numbercheck(0));
// console.log(numbercheck('efg'));


//B2

// function permute(xs) {
//     let ret = [];
   
//     for (let i = 0; i < xs.length;i ++) {
//       let rest = permute(xs.slice(0, i).concat(xs.slice(i + 1)));
   
//       if(!rest.length) {
//         ret.push([xs[i]])
//       } else {
//         for(let j = 0; j < rest.length;j ++) {
//           ret.push([xs[i]].concat(rest[j]))
//         }
//       }
//     }
//     return ret;
//   }
   
//   console.log(permute([1,2,5]).join("\n"));


//B3

function unique(arr) {
    return Array.from(new Set(arr)) 
  }
  console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 4]))