<template>
  <div>
    <label
      v-if="label"
      class="inputLabel"
      :for="id"
    >
      <strong>{{ label }}</strong>
    </label>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected[text] }}
      </div>
      <transition name="bounce">
      <div class="items" v-if="open" :class="{ selectHide: !open }">
        <div
          v-for="(option, i) of options"
          :key="i"
          @click="
            selected = option;
            open = false;
            $emit('input', option);
          "
        >
          {{ option[text] }}
        </div>
      </div>
      </transition>
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
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>
<style scoped>

.inputLabel{
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

.custom-select .items div {
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #6C70F7;
  color: white;
}

.selectHide {
  display: none;
}
.bounce-enter-active {
  animation: slide-in 0.2s;
}
.bounce-leave-active {
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
</style>