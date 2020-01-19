/**
 * Check if an event1 overlaps on event2
 * @param {Object} event1
 * @param {Object} event2
 * @returns true if event1 overlaps on event2. Else, false.
 */
export function isOverlapping(event1, event2) {
  const start = event1.startObj;
  const end = event1.end;
  return (
    (start.hour < event2.startObj.hour ||
      (start.hour === event2.startObj.hour &&
        start.minute <= event2.startObj.minute)) &&
    (end.hour > event2.startObj.hour ||
      (end.hour === event2.startObj.hour &&
        end.minute > event2.startObj.minute))
  );
}
