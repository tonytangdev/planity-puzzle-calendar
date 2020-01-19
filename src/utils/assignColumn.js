import { isOverlapping } from "./isOverlapping";

/**
 * Assign column for each events in the group
 * @param {Object} group
 * @returns the new group with columns on events
 */
export function assignColumn(group) {
  let newGroup = group;
  let nbrCol = 1;
  newGroup[0].column = 0;
  if (group.length > 1) {
    newGroup[1].column = 1;
    nbrCol++;
  }

  if (group.length === 1 || group.length === 2) {
    return newGroup;
  }

  for (let i = 2; i < group.length; i++) {
    let event = newGroup[i];
    let j = i - 1;
    while (event.column === undefined && j >= 0) {
      const previousEvent = newGroup[j];
      if (!isOverlapping(previousEvent, event)) {
        event.column = previousEvent.column;
      }
      j--;
    }

    if (event.column === undefined) {
      nbrCol++;
      event.column = nbrCol - 1;
    }
  }

  return newGroup;
}
