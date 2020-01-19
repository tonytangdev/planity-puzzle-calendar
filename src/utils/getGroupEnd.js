/**
 * Find the latest end in a group of events
 * @param {Object} group
 * @returns an end object
 */
export function getGroupEnd(group) {
  let end = group[0].end;
  for (let index = 1; index < group.length; index++) {
    const event = group[index];

    if (
      end.hour < event.end.hour ||
      (end.hour === event.end.hour && end.minute < event.end.minute)
    ) {
      end = event.end;
    }
  }

  return end;
}
