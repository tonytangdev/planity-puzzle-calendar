import { assignColumn } from "./assignColumn";

describe("assignColumn", () => {
  it("should set column 0 to group[0]", () => {
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
      }
    ];

    const expected = [
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
        },
        column: 0
      }
    ];

    expect(assignColumn(group)).toEqual(expected);
  });

  it("should set column 0 to group[0] and column 1 to group[1]", () => {
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
          hour: 11,
          minute: 40
        },
        duration: 20,
        end: {
          hour: 12,
          minute: 0
        }
      }
    ];

    const expected = [
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
        },
        column: 0
      },
      {
        id: 1,
        startObj: {
          hour: 11,
          minute: 40
        },
        duration: 20,
        end: {
          hour: 12,
          minute: 0
        },
        column: 1
      }
    ];

    expect(assignColumn(group)).toEqual(expected);
  });

  it("should set column 0 to group[0] and column 1 to group[1] and group[2]", () => {
    const group = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 240,
        end: {
          hour: 13,
          minute: 40
        }
      },
      {
        id: 1,
        startObj: {
          hour: 11,
          minute: 40
        },
        duration: 20,
        end: {
          hour: 12,
          minute: 0
        }
      },
      {
        id: 2,
        startObj: {
          hour: 12,
          minute: 50
        },
        duration: 20,
        end: {
          hour: 13,
          minute: 10
        }
      }
    ];

    const expected = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 240,
        end: {
          hour: 13,
          minute: 40
        },
        column: 0
      },
      {
        id: 1,
        startObj: {
          hour: 11,
          minute: 40
        },
        duration: 20,
        end: {
          hour: 12,
          minute: 0
        },
        column: 1
      },
      {
        id: 2,
        startObj: {
          hour: 12,
          minute: 50
        },
        duration: 20,
        end: {
          hour: 13,
          minute: 10
        },
        column: 1
      }
    ];

    expect(assignColumn(group)).toEqual(expected);
  });

  it("should set column 0 to group[0] and group[2] and column 1 to group[1]", () => {
    const group = [
      {
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
      },
      {
        id: 1,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 60,
        end: {
          hour: 11,
          minute: 10
        }
      },
      {
        id: 2,
        startObj: {
          hour: 11,
          minute: 0
        },
        duration: 30,
        end: {
          hour: 11,
          minute: 30
        }
      }
    ];

    const expected = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 60,
        end: {
          hour: 10,
          minute: 40
        },
        column: 0
      },
      {
        id: 1,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 60,
        end: {
          hour: 11,
          minute: 10
        },
        column: 1
      },
      {
        id: 2,
        startObj: {
          hour: 11,
          minute: 0
        },
        duration: 30,
        end: {
          hour: 11,
          minute: 30
        },
        column: 0
      }
    ];

    expect(assignColumn(group)).toEqual(expected);
  });

  it("should set column 0 to group[0], column 1 to group[1] and column 2 to group[2]", () => {
    const group = [
      {
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
      },
      {
        id: 1,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 60,
        end: {
          hour: 11,
          minute: 10
        }
      },
      {
        id: 2,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 20,
        end: {
          hour: 10,
          minute: 30
        }
      }
    ];

    const expected = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 60,
        end: {
          hour: 10,
          minute: 40
        },
        column: 0
      },
      {
        id: 1,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 60,
        end: {
          hour: 11,
          minute: 10
        },
        column: 1
      },
      {
        id: 2,
        startObj: {
          hour: 10,
          minute: 10
        },
        duration: 20,
        end: {
          hour: 10,
          minute: 30
        },
        column: 2
      }
    ];

    expect(assignColumn(group)).toEqual(expected);
  });
});
