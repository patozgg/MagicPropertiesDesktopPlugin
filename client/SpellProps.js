var entryFactory = require('bpmn-js-properties-panel/lib/factory/EntryFactory');
var is = require('bpmn-js/lib/util/ModelUtil');
//import {
 // is
//} from 'bpmn-js/lib/util/ModelUtil';


 function SpellProps(group, element) {

  // Only return an entry, if the currently selected
  // element is a start event.

  if (is(element, 'bpmn:StartEvent')) {
      alert("enters here");
    group.entries.push(entryFactory.textField({
      id : 'spell',
     description : 'Apply a black magic spell',
      label : 'Spell',
      modelProperty : 'spell'
    }));
  }
};

SpellProps.$inject = [ 'group', 'element'];