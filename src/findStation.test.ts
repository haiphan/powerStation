import {calcPower, failStr, findStation, successStr} from './findStation';

test('Should get correct power station', () => {
  const s1 = [0, 0, 10];
  const s2 = [20, 20, 5];
  const s3 = [10, 0, 12];
  const stations = [s1, s2, s3];

  const pos1 = [0, 0];
  const expected1 = successStr(s1, calcPower(s1, pos1), pos1);
  const actual1 = findStation(stations, pos1);
  expect(actual1).toEqual(expected1);

  const pos2 = [100, 100];
  const expected2 = failStr(pos2);
  const actual2 = findStation(stations, pos2);
  expect(actual2).toEqual(expected2);

  const pos3 = [15, 10];
  const expected3 = successStr(s3, calcPower(s3, pos3), pos3);
  const actual3 = findStation(stations, pos3);
  expect(actual3).toEqual(expected3);

  const pos4 = [18, 18];
  const expected4 = successStr(s2, calcPower(s2, pos4), pos4);
  const actual4 = findStation(stations, pos4);
  expect(actual4).toEqual(expected4);
});
