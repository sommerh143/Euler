import {MathProb} from '../src/q1.js'

describe('Math', () =>{
  var math;
  beforeEach(() => {
    math = new MathProb(20);
  });

  test("should find multiples of 3 up to 20", () => {
    expect (math.multipleThree()).toEqual([3,6,9,12,15,18])
  });

  test("should find multiples of 5 up to 20", () => {
    expect (math.multipleFive()).toEqual([5,10,15])
  });

  test("should find multiples of 15 up to 20", () => {
    expect (math.multipleFifteen(20)).toEqual([15])
  });

  test("should combine results of p3a and p5a", () => {
    expect (math.combo()).toEqual([3,6,9,12,15,18,5,10,15])
  });

  test("will output the total of m5 and m3 subtracting the total of m15", () => {
    expect (math.final()).toEqual(78)
  });
});