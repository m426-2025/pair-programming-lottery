import { betInLottery, drawLottery, Draft} from "./lottery";

test("drawLottery gibt gültige Zahlen im erlaubten Bereich zurück", () => {
  const draft = drawLottery();
  expect(draft.numbers.length).toBe(6);
  draft.numbers.forEach(n => {
    expect(n).toBeGreaterThanOrEqual(1);
    expect(n).toBeLessThanOrEqual(42);
  });

  expect(new Set(draft.numbers).size).toBe(6);

  expect(draft.extraNumber).toBeGreaterThanOrEqual(1);
  expect(draft.extraNumber).toBeLessThanOrEqual(6);
});

test("betInLottery gibt '0' zurück bei keinem Treffer", () => {
  const bet: Draft = {numbers: [1, 2, 3, 4, 5, 6], extraNumber : 1};
  const draft: Draft = {numbers: [10, 11, 12, 13, 14 ,15], extraNumber : 2};

  expect(betInLottery(bet, draft)).toBe("0");
})