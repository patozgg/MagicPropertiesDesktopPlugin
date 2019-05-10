var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;

var MagicProperties = require('./MagicPropertiesProvider');
registerBpmnJSPlugin(MagicProperties);
