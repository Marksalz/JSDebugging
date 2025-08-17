export function maxOrNull(arr) {
  let max = arr[0];
  // changed max to be intialized with arr[0] that way it will work also with negative numbers.
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}
