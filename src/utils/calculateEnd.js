/**
 * Calculate end time and set the new property
 * @param {Object} event
 * @returns Returns the new event with property 'end'
 */
export function calculateEnd(event) {
  let newEvent = event;
  const duration = event.duration;

  const endMinute = (event.startObj.minute + duration) % 60;
  const endHour =
    event.startObj.hour + ~~((event.startObj.minute + duration) / 60);

  newEvent.end = {
    hour: endHour,
    minute: endMinute
  };

  return newEvent;
}
