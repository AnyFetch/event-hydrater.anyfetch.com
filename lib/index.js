'use strict';

/**
 * HYDRATING FUNCTION
 *
 * @param {string} path Path of the specified file
 * @param {string} original document
 * @param {object} changes object provided by anyFetch's API. Update this object to send document's modification to anyFetch's API.
 * @param {function} cb Callback, first parameter is the error if any, then the processed data
 */
module.exports = function(path, document, changes, cb) {
  if(!document.metadata.startDate) {
    return cb(null, {});
  }

  changes.modification_date = document.metadata.startDate;
  cb(null, changes);
};
