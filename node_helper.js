/* Magic Mirror
 * Module: MMM-ping
 *
 * By fewieden https://github.com/fewieden/MMM-ping
 *
 * MIT Licensed.
 */

/* eslint-env node */

const NodeHelper = require('node_helper');
const fs = require('fs');

module.exports = NodeHelper.create({
  socketNotificationReceived(notification, payload) {
    if (notification === 'READ_FILE_CONTENTS') {
      var self = this;
      fs.readFile(payload, 'utf8', function(err, data) {
        if (err) {
          self.sendSocketNotification(
              'TEXT_FILE_CONTENTS', {payload, content: 'not found'});
        } else {
          self.sendSocketNotification(
              'TEXT_FILE_CONTENTS', {payload, content: data});
        }
      });
    }
  }
});
