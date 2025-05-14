import { betInLottery, Draft, drawLottery } from "./lottery.js";

const bet: Draft = {
  numbers: [5, 9, 15, 22, 35, 42],
  extraNumber: 4,
};
console.log(`bet: ${bet.numbers} +${bet.extraNumber}`);

const draft = drawLottery();
console.log(`draft: ${draft.numbers} +${draft.extraNumber}`);

const result = betInLottery(bet, draft);
console.log(`result: ${result}`);
