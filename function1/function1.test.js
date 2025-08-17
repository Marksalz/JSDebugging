import assert from "assert";
import { test, describe } from "node:test";
import { sumTo } from "./function1.js";

describe("sumTo", () => {
  test("returns 0 for n = 0", () => {
    assert.strictEqual(sumTo(0), 0);
  });

  test("returns 0 for n = -1", () => {
    assert.strictEqual(sumTo(-1), 0);
  });

  test("returns 10 for n = 4", () => {
    assert.strictEqual(sumTo(4), 10);
  });
});
