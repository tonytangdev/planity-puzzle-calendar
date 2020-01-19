const START_HOUR = 9;
const ONE_HOUR_IN_MINUTES = 60;
const TWELVE_HOUR_IN_MINUTES = 12 * ONE_HOUR_IN_MINUTES;

/**
 * Calculate start position of the group considering the calendar goes from 9am to 9pm
 * @param {Object} group
 * @param {number} windowHeight Height of the window
 * @param {number} windowWidth Width of the window
 * @returns Return a new group object with startPosition for each events
 */
export function calculateEventsPosition(group, windowHeight, windowWidth) {
  let nbrCol = 0;

  for (let index = 0; index < group.length; index++) {
    const event = group[index];
    if (event.column >= nbrCol) {
      nbrCol++;
    }
  }

  const oneMinuteHeight = windowHeight / TWELVE_HOUR_IN_MINUTES;

  let newGroup = group.map(event => {
    const startPosition = calculateEventStartPosition(
      event,
      oneMinuteHeight,
      windowWidth,
      nbrCol
    );

    const endPosition = calculateEventEndPosition(
      event,
      oneMinuteHeight,
      windowWidth,
      nbrCol
    );

    event.startPosition = startPosition;
    event.endPosition = endPosition;

    return event;
  });

  return newGroup;
}

/**
 * Calculate the postion of the start of an event
 * @param {Object} event
 * @param {number} oneMinuteHeight
 * @param {number} windowWidth
 * @param {number} nbrCol
 * @returns Returns a new event object with startPosition
 */
export function calculateEventStartPosition(
  event,
  oneMinuteHeight,
  windowWidth,
  nbrCol
) {
  return calculateHourPosition(
    oneMinuteHeight,
    event.startObj.hour,
    event.startObj.minute,
    windowWidth,
    nbrCol,
    event.column,
    false
  );
}

/**
 * Calculate the postion of then end of an event
 * @param {Object} event
 * @param {number} oneMinuteHeight
 * @param {number} windowWidth
 * @param {number} nbrCol
 * @returns Returns a new event object with endPosition
 */
export function calculateEventEndPosition(
  event,
  oneMinuteHeight,
  windowWidth,
  nbrCol
) {
  return calculateHourPosition(
    oneMinuteHeight,
    event.end.hour,
    event.end.minute,
    windowWidth,
    nbrCol,
    event.column,
    true
  );
}

/**
 * Calculate the postion of the hour given
 * @param {number} oneMinuteHeight
 * @param {number} hour
 * @param {number} minute
 * @param {number} windowWidth
 * @param {number} nbrCol
 * @param {number} eventCol
 * @param {boolean} isEndPos if isEndPos, the x position changes
 * @returns Returns a new event object with position
 */
export function calculateHourPosition(
  oneMinuteHeight,
  hour,
  minute,
  windowWidth,
  nbrCol,
  eventCol,
  isEndPos
) {
  const hours = hour - START_HOUR;
  const positionY = (hours * 60 + minute) * oneMinuteHeight;

  const widthSingleEvent = windowWidth / nbrCol;
  let positionX = eventCol * widthSingleEvent;
  if (isEndPos) {
    positionX += widthSingleEvent;
  }

  const position = {
    positionY: positionY,
    positionX: positionX
  };
  return position;
}
