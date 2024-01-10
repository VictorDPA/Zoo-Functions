const { hours } = require('../data/zoo_data');

const weekDays = Object.keys(hours);
const dayError = 'The day must be valid. Example: Monday';
const regexDay = /(\w{1})(\w{5,8})$/i;
const regexClock = /(\w+):(\w+)-(\w{2})/gi;
const regexPeriod = /(AM|PM)$/;
const regexNumber = /(\d{2})/g;

/**
 * Validates if a given day is a valid week day.
 * @param {string} day - The day to be validated.
 * @throws {Error} - Throws an error if the day is not a valid week day.
 */
const validateDay = (day) => {
  if (!weekDays.includes(day)) throw new Error(dayError);
};

/**
 * Adjusts the parameters (day and dataHour) by applying specific formatting rules.
 *
 * @param {string} day - The day parameter to be adjusted.
 * @param {string} dataHour - The dataHour parameter to be adjusted.
 * @returns {Array.<string>} - An array containing the adjusted day and hour values.
 */
const adjustedParams = (day, dataHour) => {
  // Adjust the day parameter by converting the first letter to uppercase and the rest of the letters to lowercase
  const adjustedDay = day.replace(regexDay,
    (_, p1, p2) => p1.toUpperCase() + p2.toLowerCase());

  // Adjust the dataHour parameter by adding a colon between the hours and minutes and converting the period to uppercase
  const adjustedHour = dataHour.replace(regexClock,
    (_, p1, p2, p3) => `${p1}:${p2}-${p3.toUpperCase()}`);

  // Return an array containing the adjusted day and hour values
  return [adjustedDay, adjustedHour];
};

/**
 * Verifies the validity of a time value.
 *
 * @param {Array.<string>} time - An array containing the hour and minute values.
 * @throws {Error} - Throws an error if the hour or minutes are outside the valid range.
 * @returns {null} - Returns null if the time is valid.
 */
const verifyTime = (time) => {
  // Destructure the time array into separate hour and minute variables
  const [hour, minute] = time;

  // Check if the hour is less than 0 or greater than 12
  if (Number(hour) < 0 || Number(hour) > 12) {
    throw new Error('The hour must be between 0 and 12');
  }

  // Check if the minute is less than 0 or greater than 59
  if (Number(minute) < 0 || Number(minute) > 59) {
    throw new Error('The minutes must be between 0 and 59');
  }

  // Return null if the time is valid
  return null;
};

/**
 * Validates the format and values of a time string.
 *
 * @param {string} data - The time string to be validated.
 * @throws {Error} - Throws an error if the hour, minutes, or period are invalid.
 * @returns {Array.<string>} - Returns an array containing the validated hour, minute, and period.
 */
const validateData = (data) => {
  // Extract the hour, minute, and period from the data string using a regular expression match
  const [, hour, minute, period] = regexClock.exec(data);

  // Check if the hour represents a valid number
  if (!regexNumber.test(hour)) {
    throw new Error('The hour should represent a number');
  }
  regexNumber.lastIndex = 0;

  // Check if the minutes represent a valid number
  if (!regexNumber.test(minute)) {
    throw new Error('The minutes should represent a number');
  }
  regexNumber.lastIndex = 0;

  // Check if the period is either 'AM' or 'PM'
  if (!regexPeriod.test(period)) {
    throw new Error('The abbreviation must be \'AM\' or \'PM\'');
  }
  regexPeriod.lastIndex = 0;

  // Validate the hour and minute values using the verifyTime function
  verifyTime([hour, minute]);

  // Return an array containing the validated hour, minute, and period
  return [hour, minute, period];
};

/**
 * Determines if the zoo is open for visitation based on the provided hour, period, opening time, and closing time.
 *
 * @param {string} hour - The hour part of the time in 12-hour format.
 * @param {string} period - The period (AM or PM) of the time.
 * @param {string} open - The opening time of the zoo in 12-hour format.
 * @param {string} close - The closing time of the zoo in 12-hour format.
 * @returns {string} - Returns 'The zoo is open' if the zoo is open during the specified time, otherwise returns 'The zoo is closed'.
 */
const openForVisitation = (hour, period, open, close) => {
  // Check if the period is 'AM' and the provided hour is greater than or equal to the opening hour
  if (period === 'AM' && Number(hour) >= Number(open)) {
    return 'The zoo is open';
  }

  // Check if the period is 'PM' and the sum of the provided hour and 12 is less than the sum of the closing hour and 12
  if (period === 'PM' && (Number(hour) + 12 < Number(close) + 12)) {
    return 'The zoo is open';
  }

  // If none of the above conditions are met, the zoo is closed
  return 'The zoo is closed';
};

/**
 * Retrieves the opening hours of the zoo for the specified day and hour.
 *
 * @param {string} day - The day of the week (e.g., Monday, Tuesday, etc.).
 * @param {string} dataHour - The hour part of the time in 24-hour format (e.g., '10:00').
 * @returns {string} - Returns the status of the zoo for the specified day and hour:
 *   - 'The zoo is open' if the zoo is open during the specified time.
 *   - 'The zoo is closed' if the zoo is closed on the specified day.
 */
const getOpeningHours = (day, dataHour) => {
  // If both day and dataHour parameters are missing, return the complete opening hours
  if (!day && !dataHour) {
    return hours;
  }

  // Adjust the provided day and hour based on any special cases or adjustments
  const [adjustedDay, adjustedHour] = adjustedParams(day, dataHour);

  // Validate that the adjusted day is a valid day of the week
  validateDay(adjustedDay);

  // Retrieve the opening and closing time for the adjusted day
  const { open, close } = hours[adjustedDay];

  // If there is no opening and closing time available, the zoo is closed on the specified day
  if (!open && !close) {
    return 'The zoo is closed';
  }

  // Validate the provided dataHour and extract the hour and period
  const [hour, , period] = validateData(adjustedHour);

  // Check if the zoo is open for visitation based on the adjusted hour and period
  return openForVisitation(hour, period, open, close);
};

module.exports = { getOpeningHours, openForVisitation };
