import _ from "lodash";

/**
 * Order a list of events by start.hour, start.startObj.minute and start.duration
 * @param {Object[]} unorderedList
 * @returns {Object[]} Returns the new ordered list
 *
 */
export function sortEvents(unorderedList) {
  var sortedList = _.orderBy(
    unorderedList,
    [
      event => event.startObj.hour,
      event => event.startObj.minute,
      event => event.duration
    ],
    ["asc", "asc", "desc"]
  );

  return sortedList;
}
