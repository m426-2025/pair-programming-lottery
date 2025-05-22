import { drawLottery } from "./lottery";

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