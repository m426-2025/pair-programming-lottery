export type Draft = {
  numbers: number[]; // [1..42]
  extraNumber: number; // [1..6]
};

export function drawLottery(): Draft {
  const pool = Array.from({ length : 42}, (_, i) => i + 1);
  const numbers: number[] = [];

  while (numbers.length < 6) {
    const index = Math.floor(Math.random() * pool.length);
    numbers.push(pool.splice(index, 1)[0]);
  }

  const extraNumber = Math.floor(Math.random() * 6) + 1;

  return { numbers, extraNumber};
}

export function betInLottery(bet: Draft, draft: Draft): string {
  const matchCount = bet.numbers.filter(n => draft.numbers.includes(n)).length;
  const extraMatch = bet.extraNumber === draft.extraNumber;

  if (matchCount == 0 && !extraMatch) return "0";
  if (matchCount == 0 && extraMatch) return "0+";
  return matchCount + (extraMatch ? "+" : "");
}
