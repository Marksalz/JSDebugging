export function sumTo(n) {
  let s = 0;
  for (let i = 1; i <= n; i++) {
    // Changed the for loop so that it runs till n including n, and now it works.
    s += i;
  }
  return s;
}
