/* Magic Mirror
 * Module: MMM-display-text-file
 */

Module.register('MMM-display-text-file', {
  defaults: {filename: '/tmp/test.txt', updateInterval: 1, font: 'medium'},

  start() {
    Log.info(`Starting module: ${this.name}`);
    this.content = '';
    this.readFile();
    setInterval(() => {
      this.readFile();
    }, this.config.updateInterval * 60000);
  },

  readFile() {
    this.sendSocketNotification('READ_FILE_CONTENTS', this.config.filename);
  },

  getDom() {
    const wrapper = document.createElement('div');
    wrapper.classList.add(this.config.font);
    wrapper.style.textAlign = 'left';
    wrapper.innerHTML = this.content;

    return wrapper;
  },

  socketNotificationReceived(notification, payload) {
    if (notification === 'TEXT_FILE_CONTENTS') {
      this.content = payload.content;
      this.updateDom();
    }
  }
});
