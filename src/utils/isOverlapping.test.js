import { isOverlapping } from "./isOverlapping";

describe("isOverlapping", () => {
  it("should return true", () => {
    const event1 = {
      id: 2,
      startObj: {
        hour: 10,
        minute: 50
      },
      duration: 120,
      end: {
        hour: 12,
        minute: 50
      },
      column: 1
    };

    const event2 = {
      id: 1,
      startObj: {
        hour: 11,
        minute: 55
      },
      duration: 20,
      end: {
        hour: 12,
        minute: 15
      },
      column: 1
    };

    expect(isOverlapping(event1, event2)).toEqual(true);
  });

  it("should return true", () => {
    const event1 = {
      id: 2,
      startObj: {
        hour: 11,
        minute: 50
      },
      duration: 120,
      end: {
        hour: 13,
        minute: 50
      },
      column: 1
    };

    const event2 = {
      id: 1,
      startObj: {
        hour: 11,
        minute: 55
      },
      duration: 20,
      end: {
        hour: 12,
        minute: 15
      },
      column: 1
    };

    expect(isOverlapping(event1, event2)).toEqual(true);
  });

  it("should return true", () => {
    const event1 = {
      id: 2,
      startObj: {
        hour: 11,
        minute: 50
      },
      duration: 120,
      end: {
        hour: 13,
        minute: 50
      },
      column: 1
    };

    const event2 = {
      id: 1,
      startObj: {
        hour: 11,
        minute: 50
      },
      duration: 20,
      end: {
        hour: 12,
        minute: 10
      },
      column: 1
    };

    expect(isOverlapping(event1, event2)).toEqual(true);
  });

  it("should return false", () => {
    const event1 = {
      id: 2,
      startObj: {
        hour: 11,
        minute: 50
      },
      duration: 10,
      end: {
        hour: 12,
        minute: 0
      },
      column: 1
    };

    const event2 = {
      id: 1,
      startObj: {
        hour: 12,
        minute: 0
      },
      duration: 20,
      end: {
        hour: 12,
        minute: 20
      },
      column: 2
    };

    expect(isOverlapping(event1, event2)).toEqual(false);
  });

  it("should return true", () => {
    const event1 = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 60,
      end: {
        hour: 10,
        minute: 40
      }
    };

    const event2 = {
      id: 2,
      startObj: {
        hour: 10,
        minute: 0
      },
      duration: 30,
      end: {
        hour: 10,
        minute: 30
      }
    };

    expect(isOverlapping(event1, event2)).toEqual(true);
  });
});
