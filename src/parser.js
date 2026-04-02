/**
 * parser.js
 *
 * This module provides functions for parsing and validating data related to the mobile app.
 */

/**
 * Parses a date string in the format YYYY-MM-DD and returns a Date object.
 *
 * @param {string} dateString - The date string to parse.
 * @returns {Date | null} - A Date object if the string is valid, null otherwise.
 */
export function parseDate(dateString) {
  if (!dateString) {
    return null;
  }

  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    return null;
  }

  const parts = dateString.split('-');
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return null;
  }

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  try {
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
      return null; // Invalid date (e.g., February 30th)
    }
    return date;
  } catch (error) {
    return null;
  }
}

/**
 * Parses a string representing a floating-point number.
 * Returns null if the string is not a valid number.
 * @param {string} value - The string to parse.
 * @returns {number | null} - The parsed number, or null if parsing fails.
 */
export function parseNumber(value) {
  if (!value) {
    return null;
  }

  const num = parseFloat(value);

  if (isNaN(num)) {
    return null;
  }

  return num;
}

/**
 * Validates an email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, false otherwise.
 */
export function isValidEmail(email) {
  if (!email) {
      return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Parses a JSON string. Returns null if parsing fails.
 * @param {string} jsonString - The JSON string to parse.
 * @returns {object | null} - The parsed JSON object, or null if parsing fails.
 */
export function parseJson(jsonString) {
  if (!jsonString) {
    return null;
  }

  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}