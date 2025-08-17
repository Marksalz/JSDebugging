import assert from "assert";
import { test, describe } from "node:test";
import { maxOrNull } from "./function2.js";

describe("maxOrNull", () => {
  test("returns 3 for [1,2,3]", () => {
    assert.strictEqual(maxOrNull([1, 2, 3]), 3);
  });

  test("returns null for []", () => {
    assert.strictEqual(maxOrNull([]), null);
  });

  test("returns 2 for [1,-4,2]", () => {
    assert.strictEqual(maxOrNull([1, -4, 2]), 2);
  });

  test("returns -2 for [-5, -2]", () => {
    assert.strictEqual(maxOrNull([-5, -2]), -2);
  });
});
