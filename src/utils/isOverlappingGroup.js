import { getGroupEnd } from "./getGroupEnd";

/**
 * Find if an event overlaps a group of events
 * @param {Object[]} group
 * @param {Object} event
 * @returns true or false
 */
export function isOverlappingGroup(group, event) {
  const groupEnd = getGroupEnd(group);
  if (
    groupEnd.hour > event.startObj.hour ||
    (groupEnd.hour === event.startObj.hour &&
      groupEnd.minute > event.startObj.minute)
  ) {
    return true;
  }

  return false;
}
