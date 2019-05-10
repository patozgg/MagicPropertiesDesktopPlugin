'use strict';

module.exports = function(electronApp, menuState) {
  return [{
    label: 'Magic Properties Provider',
    enabled: function() {
      return true;
    },
    action: function() {
    }
  }];
};
