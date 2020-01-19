import { createEventsGroups } from "./createEventsGroups";

describe("createEventsGroups", () => {
  it("should put the events[0] in first group, events[1] in second group and events [3] in third group ", () => {
    const events = [
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
        id: 5,
        startObj: {
          hour: 10,
          minute: 0
        },
        duration: 200,
        end: {
          hour: 12,
          minute: 20
        }
      },
      {
        id: 2,
        startObj: {
          hour: 13,
          minute: 0
        },
        duration: 120,
        end: {
          hour: 14,
          minute: 20
        }
      }
    ];

    const expected = [
      [
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
        }
      ],
      [
        {
          id: 5,
          startObj: {
            hour: 10,
            minute: 0
          },
          duration: 200,
          end: {
            hour: 12,
            minute: 20
          }
        }
      ],
      [
        {
          id: 2,
          startObj: {
            hour: 13,
            minute: 0
          },
          duration: 120,
          end: {
            hour: 14,
            minute: 20
          }
        }
      ]
    ];

    expect(createEventsGroups(events)).toEqual(expected);
  });

  it("should put the events[0] and events[1] in first group and events[3] in second group", () => {
    const events = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 180,
        end: {
          hour: 11,
          minute: 40
        }
      },
      {
        id: 5,
        startObj: {
          hour: 10,
          minute: 0
        },
        duration: 200,
        end: {
          hour: 12,
          minute: 20
        }
      },
      {
        id: 2,
        startObj: {
          hour: 13,
          minute: 0
        },
        duration: 120,
        end: {
          hour: 14,
          minute: 20
        }
      }
    ];

    const expected = [
      [
        {
          id: 3,
          startObj: {
            hour: 9,
            minute: 40
          },
          duration: 180,
          end: {
            hour: 11,
            minute: 40
          }
        },
        {
          id: 5,
          startObj: {
            hour: 10,
            minute: 0
          },
          duration: 200,
          end: {
            hour: 12,
            minute: 20
          }
        }
      ],
      [
        {
          id: 2,
          startObj: {
            hour: 13,
            minute: 0
          },
          duration: 120,
          end: {
            hour: 14,
            minute: 20
          }
        }
      ]
    ];

    expect(createEventsGroups(events)).toEqual(expected);
  });

  it("should put the events[0], events[1], events[3] and events[4] in first group", () => {
    const events = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 180,
        end: {
          hour: 11,
          minute: 40
        }
      },
      {
        id: 5,
        startObj: {
          hour: 10,
          minute: 0
        },
        duration: 200,
        end: {
          hour: 12,
          minute: 20
        }
      },
      {
        id: 2,
        startObj: {
          hour: 12,
          minute: 0
        },
        duration: 120,
        end: {
          hour: 13,
          minute: 0
        }
      },
      {
        id: 1,
        startObj: {
          hour: 13,
          minute: 0
        },
        duration: 10,
        end: {
          hour: 13,
          minute: 10
        }
      }
    ];

    const expected = [
      [
        {
          id: 3,
          startObj: {
            hour: 9,
            minute: 40
          },
          duration: 180,
          end: {
            hour: 11,
            minute: 40
          }
        },
        {
          id: 5,
          startObj: {
            hour: 10,
            minute: 0
          },
          duration: 200,
          end: {
            hour: 12,
            minute: 20
          }
        },
        {
          id: 2,
          startObj: {
            hour: 12,
            minute: 0
          },
          duration: 120,
          end: {
            hour: 13,
            minute: 0
          }
        }
      ],
      [
        {
          id: 1,
          startObj: {
            hour: 13,
            minute: 0
          },
          duration: 10,
          end: {
            hour: 13,
            minute: 10
          }
        }
      ]
    ];

    expect(createEventsGroups(events)).toEqual(expected);
  });

  it("should put the events[0] in first group", () => {
    const events = [
      {
        id: 3,
        startObj: {
          hour: 9,
          minute: 40
        },
        duration: 180,
        end: {
          hour: 11,
          minute: 40
        }
      }
    ];

    const expected = [
      [
        {
          id: 3,
          startObj: {
            hour: 9,
            minute: 40
          },
          duration: 180,
          end: {
            hour: 11,
            minute: 40
          }
        }
      ]
    ];

    expect(createEventsGroups(events)).toEqual(expected);
  });
});
