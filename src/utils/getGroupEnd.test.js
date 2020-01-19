import { getGroupEnd } from "./getGroupEnd";

describe("getGroupEnd", () => {
  it("should get group[1].end", () => {
    const group = [
      {
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
      },
      {
        id: 1,
        startObj: {
          hour: 9,
          minute: 50
        },
        duration: 30,
        end: {
          hour: 10,
          minute: 20
        }
      }
    ];

    const expected = {
      hour: 10,
      minute: 20
    };

    expect(getGroupEnd(group)).toEqual(expected);
  });

  it("should get group[0].end", () => {
    const group = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 120,
        end: {
          hour: 11,
          minute: 40
        }
      },
      {
        id: 1,
        startObj: {
          hour: 9,
          minute: 50
        },
        duration: 70,
        end: {
          hour: 11,
          minute: 20
        }
      }
    ];

    const expected = {
      hour: 11,
      minute: 40
    };

    expect(getGroupEnd(group)).toEqual(expected);
  });

  it("should get group[0].end", () => {
    const group = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 20,
        end: {
          hour: 10,
          minute: 0
        }
      },
      {
        id: 1,
        startObj: {
          hour: 9,
          minute: 50
        },
        duration: 10,
        end: {
          hour: 10,
          minute: 0
        }
      }
    ];

    const expected = {
      hour: 10,
      minute: 0
    };

    expect(getGroupEnd(group)).toEqual(expected);
  });
});
