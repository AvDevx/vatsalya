
/* 
  import all the components you build and then export them as default
  this import will be used by index.js install function to register 
  them as global components.
*/

import vTextField from './components/vTextField.vue'
import vSelect from './components/vSelect.vue'
import vCheckBox from './components/vCheckbox.vue'
import vRadioButton from './components/vRadioButton.vue'

export default { 
  vTextField,
  vSelect,
  vCheckBox,
  vRadioButton
}