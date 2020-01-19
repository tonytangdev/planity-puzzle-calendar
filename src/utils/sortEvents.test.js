import { sortEvents } from "./sortEvents";

test("sort a list of elements by start and duration", () => {
  const events = [
    {
      id: 1,
      startObj: {
        hour: 11,
        minute: 0
      },
      duration: 60
    },
    {
      id: 2,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 120
    },
    {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 10
    },
    {
      id: 4,
      startObj: {
        hour: 15,
        minute: 25
      },
      duration: 20
    },
    {
      id: 5,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 200
    },
    {
      id: 6,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 10
    }
  ];

  const expected = [
    {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 10
    },
    {
      id: 5,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 200
    },
    {
      id: 2,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 120
    },
    {
      id: 6,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 10
    },
    {
      id: 1,
      startObj: {
        hour: 11,
        minute: 0
      },
      duration: 60
    },
    {
      id: 4,
      startObj: {
        hour: 15,
        minute: 25
      },
      duration: 20
    }
  ];

  const result = sortEvents(events);
  expect(result).toEqual(expected);
});
