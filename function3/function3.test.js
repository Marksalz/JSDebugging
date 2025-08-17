import assert from "node:assert";
import { test, describe } from "node:test";
import { findObjectByValue } from "./function3.js";

describe("findObjectByValue", () => {
  test("returns 'not found' when searching an empty array", () => {
    assert.strictEqual(findObjectByValue([], "alice"), "not found");
  });

  test("returns the matching object when value is found", () => {
    assert.deepStrictEqual(
      findObjectByValue([{ name: "alice" }, { name: "bob" }], "alice"),
      { name: "alice" }
    );
  });
});
