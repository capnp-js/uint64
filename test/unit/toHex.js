/* @flow */

import * as assert from "assert";
import { describe, it } from "mocha";

import { inject, toHex } from "../../src/index";

describe("toHex", function () {
  it("converts a uint64 with 1 as its most significant bit without a `-` sign", function () {
    const a = inject(0x80000000, 0x00000000);
    assert.equal(toHex(a), "0x8000000000000000");

    const b = inject(0x82851234, 0x87654321);
    assert.equal(toHex(b), "0x8285123487654321");
  });

  it("converts a uint64 without 1 as its most significant bit to a fixed width hex string", function () {
    const a = inject(0x00000123, 0x12345678);
    assert.equal(toHex(a), "0x0000012312345678");

    const b = inject(0x00000000, 0x00000000);
    assert.equal(toHex(b), "0x0000000000000000");
  });
});
