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
  // TODO: compare bet against draft, return result
  return "";
}
