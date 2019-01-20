/* @flow */

type i32 = number;
type u32 = number;

export opaque type UInt64: [ i32, i32 ] = [ i32, i32 ];

export function inject(hi: i32, lo: i32): UInt64 { // eslint-disable-line no-shadow
  return [ hi>>>0, lo>>>0 ];
}

export function hi(uint64: UInt64): u32 {
  return uint64[0];
}

export function lo(uint64: UInt64): u32 {
  return uint64[1];
}

export function toHex(uint64: UInt64): string {
  const h = uint64[0].toString(16);
  const l = uint64[1].toString(16);
  const pad = "00000000";
  return "0x" + pad.slice(h.length) + h + pad.slice(l.length) + l;
}
