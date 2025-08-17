export function findObjectByValue(objArr, value) {
  for (let index = 0; index < objArr.length; index++) {
    // changed forEach to regular for loop because when the correct answer was returned it got lost in the next forEach itaration since forEach always goes over all array elements.
    const obj = objArr[index];
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if (element === value) {
          return obj;
        }
      }
    }
  }
  return "not found";
}

findObjectByValue([{ name: "alice" }, { name: "bob" }], "alice");
