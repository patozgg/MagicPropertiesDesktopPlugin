'use strict';

var domify = require('min-dom/lib/domify'),
  domEvent = require('min-dom/lib/event'),
  domClasses = require('min-dom/lib/classes'),
  domQuery = require('min-dom/lib/query'),
  clear = require('min-dom/lib/clear');
var PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');
var CamundaPropertiesProvider = require('bpmn-js-properties-panel/lib/provider/camunda/CamundaPropertiesProvider');
var formHelper = require('bpmn-js-properties-panel/lib/helper/FormHelper');
var swal = require('sweetalert');
var copy = require('clipboard-copy');
var inherits = require('inherits');
var PropertiesActivator = require('bpmn-js-properties-panel/lib/PropertiesActivator');
var processProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/ProcessProps');
var eventProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/EventProps');
var linkProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/LinkProps');
var documentationProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/DocumentationProps');
var idProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/IdProps');
var nameProps = require('bpmn-js-properties-panel/lib/provider/bpmn/parts/NameProps');

var spellProps = require('./SpellProps');





// Create the custom magic tab
function createMagicTabGroups(element, elementRegistry) {
alert("enters first function");
  // Create a group called "Black Magic".
  var blackMagicGroup = {
    id: 'black-magic',
    label: 'Black Magic',
    entries: []
  };

  // Add the spell props to the black magic group.
  spellProps(blackMagicGroup, element);

  return [
    blackMagicGroup
  ];
}

function createGeneralTabGroups(element, bpmnFactory, elementRegistry, translate) {
 alert("enters here")
  var generalGroup = {
    id: 'general',
    label: 'General',
    entries: []
  };
  idProps(generalGroup, element, translate);
  nameProps(generalGroup, element, translate);
  processProps(generalGroup, element, translate);

  var detailsGroup = {
    id: 'details',
    label: 'Details',
    entries: []
  };
  linkProps(detailsGroup, element, translate);
  eventProps(detailsGroup, element, bpmnFactory, elementRegistry, translate);

  var documentationGroup = {
    id: 'documentation',
    label: 'Documentation',
    entries: []
  };

  documentationProps(documentationGroup, element, bpmnFactory, translate);

  return[
    generalGroup,
    detailsGroup,
    documentationGroup
  ];
}


function MagicPropertiesProvider(
    eventBus, bpmnFactory, elementRegistry,
    translate) {

        alert("enters second function");
  PropertiesActivator.call(this, eventBus);

  this.getTabs = function(element) {

    var generalTab = {
     id: 'general',
      label: 'General',
      groups: createGeneralTabGroups(element, bpmnFactory, elementRegistry, translate)
    };

    // The "magic" tab
    var magicTab = {
      id: 'magic',
      label: 'Magic',
      groups: createMagicTabGroups(element, elementRegistry)
    };

    // Show general + "magic" tab
    return [
    //  generalTab,
      magicTab
    ];
  };
}

inherits(MagicPropertiesProvider, PropertiesActivator);






GeneratedFormPreviewPlugin.$inject = ['eventBus', 'element','elementRegistry', 'bpmnFactory', 'elementTemplates', 'translate'];

function GeneratedFormPreviewPlugin() {

};

module.exports = {
  __init__: ['createGeneralTabGroups'],
  createGeneralTabGroups: ['type', CreateGeneralTabGroups],
  createMagicTabGroups: ['type', CreateMagicTabGroups],
    magicPropertiesProvider: ['type', magicPropertiesProvider],
    
};
//module.exports = {
  //  __init__: ['reducedPalettePlugin'],
   // reducedPalettePlugin: ['type', ReducedPalettePlugin]
//};
