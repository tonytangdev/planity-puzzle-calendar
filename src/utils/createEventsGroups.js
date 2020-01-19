import { isOverlappingGroup } from "./isOverlappingGroup";

/**
 * Put each event inside a group of events
 * @param {Object[]} events
 * @returns Returns a list of groups of events
 */
export function createEventsGroups(events) {
  let groups = [];

  let currentGroup = [];
  for (let index = 0; index < events.length; index++) {
    const event = events[index];
    let eventIsOverlappingGroup =
      currentGroup.length !== 0
        ? isOverlappingGroup(currentGroup, event)
        : false;

    if (currentGroup.length !== 0 && !eventIsOverlappingGroup) {
      groups.push(currentGroup);
      currentGroup = [];
    }

    // cannot be an else statement
    // need this part to be executed for each iteration
    // else, events not overlapping will be lost
    if (currentGroup.length === 0 || eventIsOverlappingGroup) {
      currentGroup.push(event);
    }

    if (index === events.length - 1) {
      groups.push(currentGroup);
    }
  }
  return groups;
}
