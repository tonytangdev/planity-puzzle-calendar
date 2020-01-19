import { calculateEnd } from "./calculateEnd";

describe("calculateEnd", () => {
  it("should add 10 minutes", () => {
    const event = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 10
    };

    const expected = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 10,
      end: {
        hour: 9,
        minute: 50
      }
    };

    expect(calculateEnd(event)).toEqual(expected);
  });

  it("should add 50 minutes", () => {
    const event = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 50
    };

    const expected = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 50,
      end: {
        hour: 10,
        minute: 30
      }
    };

    expect(calculateEnd(event)).toEqual(expected);
  });

  it("should add 1 hour", () => {
    const event = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 60
    };

    const expected = {
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

    expect(calculateEnd(event)).toEqual(expected);
  });

  it("should add 1 hour and 20 minutes", () => {
    const event = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 80
    };

    const expected = {
      id: 3,
      startObj: {
        hour: 9,
        minute: 40
      },
      duration: 80,
      end: {
        hour: 11,
        minute: 0
      }
    };

    expect(calculateEnd(event)).toEqual(expected);
  });
});
