export const calcPower = (station, pos): number => {
  const [sx, sy, sr] = station;
  const [x, y] = pos;
  const dr = sr - Math.sqrt((sx - x) ** 2 + (sy - y) ** 2);
  return Math.max(0, dr) ** 2;
};

export const successStr = (
  [sx, sy,]: number[],
  power: number,
  [x, y]: number[]): string =>
  `Best link station for point ${x},${y} is ${sx},${sy} with power ${power}`;

export const failStr = ([x, y]: number[]): string =>
  `No link station within reach for point ${x},${y}`;

export const findStation = (stations, pos): string => {
  const {station, power} = stations.reduce((acc, s) => {
    const p = calcPower(s, pos);
    return (!acc.station || acc.power < p) ?
      {station: s, power: p} : acc;
  }, {station: null, power: 0});
  return power > 0 ? successStr(station, power, pos) : failStr(pos);
};
