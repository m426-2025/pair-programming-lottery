export type Draft = {
  numbers: number[]; // [1..42]
  extraNumber: number; // [1..6]
};

export function drawLottery(): Draft {
  // TODO: implement lottery (random numbers and one random extra number)
  return { numbers: [], extraNumber: -1 };
}

export function betInLottery(bet: Draft, draft: Draft): string {
  // TODO: compare bet against draft, return result
  return "";
}
