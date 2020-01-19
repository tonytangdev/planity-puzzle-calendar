import { isOverlappingGroup } from "./isOverlappingGroup";

describe("isOverlappingGroup", () => {
  it("should return true", () => {
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
    const event = {
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

    expect(isOverlappingGroup(group, event)).toEqual(true);
  });

  it("should return false", () => {
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
    const event = {
      id: 2,
      startObj: {
        hour: 10,
        minute: 20
      },
      duration: 30,
      end: {
        hour: 10,
        minute: 50
      }
    };

    expect(isOverlappingGroup(group, event)).toEqual(false);
  });

  it("should return false", () => {
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
    const event = {
      id: 2,
      startObj: {
        hour: 11,
        minute: 20
      },
      duration: 60,
      end: {
        hour: 12,
        minute: 20
      }
    };

    expect(isOverlappingGroup(group, event)).toEqual(false);
  });
});
