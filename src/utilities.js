export const randomizedArray = (arr) => {
  let dupli = [...arr];
  for (let i = 0; i < arr.length; i++) {
    dupli.push(arr[i]);
  }
  for (let i = 0; i < dupli.length; i++) {
    let index = Math.floor(Math.random() * dupli.length);
    let temp;
    temp = dupli[i];
    dupli[i] = dupli[index];
    dupli[index] = temp;
  }
  return dupli;
};
export const loop = () => {
  let i = [];
  for (let j = 0; j < 16; j++) {
    i.push(false);
  }
  return i;
};

export const change = (id, arr, what) => {
  let n = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === id) {
      n.push(what);
    } else {
      n.push(arr[i]);
    }
  }
  return n;
};
export const orGate = (arr1, arr2) => {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] && arr2[i]);
  }
  return arr3;
};
