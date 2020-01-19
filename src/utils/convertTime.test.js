import { convertStringToHH_MM } from "./convertTime";

test("convert string to HH:MM", () => {
  const event = {
    id: 1,
    start: "11:00",
    duration: 60
  };

  const expected = {
    id: 1,
    start: "11:00",
    startObj: {
      hour: 11,
      minute: 0
    },
    duration: 60
  };
  expect(convertStringToHH_MM(event)).toEqual(expected);
});
