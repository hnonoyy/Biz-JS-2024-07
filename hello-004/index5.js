const num1 = 3;
const num2 = "3";
// == : 값만 비교함(타입은 비교 X)
console.log(num1 == num2);
console.log(num1 === num2);

// 실제로 false는 아니고 어떠한 경우만 false로 인식
const falsy = [null, undefined, false, NaN, 0, -0, 0n, ""];
falsy.forEach((f) => {
  console.log(`${f} :`, f || false);
});
