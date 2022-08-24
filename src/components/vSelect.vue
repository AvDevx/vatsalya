<template>
  <div>
    <label v-if="label" class="inputLabel" :for="id">
      <strong>{{ label }}</strong>
    </label>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div
        class="selected"
        v-if="multiSelect"
        :class="{ open: open }"
        @click="open = !open"
      >
        {{ selectedIndex.length ?  options[selectedIndex[0]][text] : 'Please make a selection' }} 
        <div v-if="selectedIndex.length > 1" class="selectionInfo" key="info">{{ selectedIndex.length > 1 ? ` + ${selectedIndex.length - 1} ` : '' }}</div>
      </div>
      <div
        class="selected"
        v-else
        :class="{ open: open }"
        @click="open = !open"
      >
        {{ selected[text] }}
      </div>
      <Transition name="slide">
        <div class="items" v-if="open" :class="{ selectHide: !open }">
          <div v-for="(option, i) of options" :key="i" @click="setSelection(i)">
            <div class="listContainer">
              <Transition name="bounce" key="selected" mode="out-in">
              <div key="1" v-if="multiSelect && option.selected" name="checked" class="checked">
              </div>
              <div key="2" v-else-if="multiSelect && !option.selected" class="checkmark"></div>
              </Transition>
              {{ option[text] }}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "vSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    multiSelect: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    },
    label: String,
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.options[0],
      open: false,
      selectedIndex: []
    };
  },
  mounted () {
    if (this.multiSelect) {
      this.options[0].selected = true
      this.selectedIndex.push(0)
      this.$emit("input", [this.options[0]])
    } else {
      this.$emit("input", this.options[0])
    }
  },
  methods: {
    setSelection: function (index) {
      if (this.multiSelect) {
        if (this.options[index].selected) {
          this.options[index].selected = false
          this.selectedIndex.splice(this.selectedIndex.indexOf(index), 1)
        } else {
          this.options[index].selected = true
          this.selectedIndex.push(index)
        }

        this.selected = []

        console.log(this.options)
        this.options.forEach(element => {
          if (element.selected) {
            let elementToPush = Object.assign({}, element)
            delete elementToPush.selected
            this.selected.push(elementToPush)
          }
        })

        this.$emit('input', this.selected);
        this.open = true
      } else {
        this.selected = {}
        this.selected = Object.assign({}, this.options[index]);
        delete this.selected.selected
        this.open = false
        this.$emit('input', this.selected);
      }
    }
  }
}
</script>
<style scoped>
.selectionInfo {
  font-size: 12px;
  color: #a2802c;
  background-color: rgb(255 225 148 / 54%);
  padding: 9px 10px;
  margin-left: 8px;
  border-radius: 7px;
  display: inline;
}
.checked {
  height: 36px;
	width: 36px;
  margin-right: 12px;
	background-color: #6c70f7;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
.checked::before{
  position: absolute;
  content: "";
  width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
  transform: rotate(45deg) translate(210%,-20%);
}
.checkmark {
	height: 36px;
	width: 36px;
  margin-right: 12px;
	background-color: #e9e9e9;
  border-radius: 12px;
}
.listContainer {
  display: flex;
  align-items: center;
}

/* .checkbox-form .item:hover input ~ .checkmark {
	background-color: #dfdfdf;
} */

.inputLabel {
  display: block;
  font-size: 14px;
  padding: 0.5rem 0;
}

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 48px;
  line-height: 48px;
}

.custom-select .selected {
  background-color: #f9f9f9;
  border-radius: 0px 1rem 1rem 1rem;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border-radius: 0px 1rem 1rem 1rem;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: rgb(29, 28, 28) transparent transparent transparent;
}

.custom-select .items {
  border-radius: 1rem 1rem 1rem 1rem;
  overflow: hidden;
  position: absolute;
  background-color: #f9f9f9;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.custom-select .items > div {
  padding: 5px 12px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items > div:hover {
  background-color: #6c70f7;
  color: white;
}
.custom-select .items > div:hover .checkmark , .custom-select .items > div:hover .checked{
  background-color: #0a0d5e2d;
}

.selectHide {
  display: none;
}
.slide-enter-active {
  animation: slide-in 0.2s;
}
.slide-leave-active {
  animation: slide-in 0.2s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
