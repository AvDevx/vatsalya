/* eslint-disable */
<template>
  <div>
    <label
      v-if="label"
      class="inputLabel"
      :for="id"
    >
      <strong>{{ label }}</strong>
    </label>
    <div class="inputContainer">
      <input
        :id="id"
        ref="input"
        v-bind="$attrs"
        :class="{
          'border-red': errors.length,
          'border-green': success,
          'input': true
        }"
        :type="type"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
      <div v-if="errors.length" class="errorMessage">
        {{ errors[0] }}
      </div>

      <Transition name="bounce" key="error">
      <svg xmlns="http://www.w3.org/2000/svg" v-if="errors.length" class="postIcon text-red" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      </Transition>
      
      <Transition name="bounce" key="success">
      <svg xmlns="http://www.w3.org/2000/svg" v-if="success" key="successIcon" class="postIcon text-green" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      </Transition>

      <div
        class="absolute left-0 top-0 bottom-0 w-10 block ml-2"
        v-if="withIcon"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vTextField",

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`;
      },
    },
    type: {
      type: String,
      default: "text",
    },
    value: String,
    label: String,
    errors: {
      type: Array,
      default: () => [],
    },
    success: {
      type: Boolean,
      default: false,
    },
    withIcon: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  },

  computed: {},
};
</script>

<style>
.text-red {
  color: #D04B4B;
}
.text-green {
  color: #59C5AA
}
.postIcon {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  right: 12px;
}
.inputContainer {
  position: relative;
  display: block;
}
.inputLabel{
  display: block;
  font-size: 14px;
  padding: 0.5rem 0;
}
.input {
  display: block;
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 0px 1rem 1rem 1rem;
  background: #f9f9f9;
  border: 2px transparent solid;
  font-weight: bold;
  letter-spacing: 1px;
}
.border-red {
  border: 2px solid #D04B4B;
}
.border-green {
  border: 2px solid #59C5AA;
}
.input:focus {
  outline: none !important;
  border: 2px solid #4B89D0;
}
.errorMessage {
  display: block;
  text-align: left;
  color: #D04B4B;
  font-size: 14px;
  padding: 0.5rem 2px;
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
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>