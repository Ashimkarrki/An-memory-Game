var a = [1, 2, 3, 4];
const add = (arr) => {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b.push(a[i] + 1);
  }
  return [...b];
};
console.log(...add(a));
