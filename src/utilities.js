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
