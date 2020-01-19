import { calculateEventsPosition } from "./calculateEventsPosition";

describe("calculateGroupsPosition", () => {
  it("should return the right top position 1", () => {
    const windowHeight = 720;
    const windowWidth = 4000;
    const group = [
      {
        startObj: {
          hour: 9,
          minute: 20
        },
        end: {
          hour: 10,
          minute: 10
        },
        column: 0
      },
      {
        startObj: {
          hour: 10,
          minute: 59
        },
        end: {
          hour: 11,
          minute: 0
        },
        column: 1
      },
      {
        startObj: {
          hour: 12,
          minute: 0
        },
        end: {
          hour: 13,
          minute: 30
        },
        column: 2
      },
      {
        startObj: {
          hour: 18,
          minute: 30
        },
        end: {
          hour: 19,
          minute: 0
        },
        column: 3
      }
    ];

    const expected = [
      {
        startObj: {
          hour: 9,
          minute: 20
        },
        end: {
          hour: 10,
          minute: 10
        },
        startPosition: {
          positionY: 20,
          positionX: 0
        },
        endPosition: {
          positionY: 70,
          positionX: 1000
        },
        column: 0
      },
      {
        startObj: {
          hour: 10,
          minute: 59
        },
        end: {
          hour: 11,
          minute: 0
        },
        startPosition: {
          positionY: 119,
          positionX: 1000
        },
        endPosition: {
          positionY: 120,
          positionX: 2000
        },
        column: 1
      },
      {
        startObj: {
          hour: 12,
          minute: 0
        },
        end: {
          hour: 13,
          minute: 30
        },
        startPosition: {
          positionY: 180,
          positionX: 2000
        },
        endPosition: {
          positionY: 270,
          positionX: 3000
        },
        column: 2
      },
      {
        startObj: {
          hour: 18,
          minute: 30
        },
        end: {
          hour: 19,
          minute: 0
        },
        startPosition: {
          positionY: 570,
          positionX: 3000
        },
        endPosition: {
          positionY: 600,
          positionX: 4000
        },
        column: 3
      }
    ];

    const newGroup = calculateEventsPosition(group, windowHeight, windowWidth);
    expect(newGroup).toEqual(expected);
  });
});
