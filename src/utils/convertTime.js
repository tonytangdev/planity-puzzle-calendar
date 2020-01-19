/**
 * convert string 'HH:MM' to {hour: HH, minute: MM}
 *
 * @param {Object} event
 * @example '09:11' => {hour: 9, minute: 11}
 * @returns {Object} Returns the event with start as numbers
 */
export function convertStringToHH_MM(event) {
  let result = event;
  const stringStart = event.start;
  const hour = parseInt(stringStart.split(":")[0]);
  const minute = parseInt(stringStart.split(":")[1]);

  result.startObj = {
    hour: hour,
    minute: minute
  };

  return result;
}
