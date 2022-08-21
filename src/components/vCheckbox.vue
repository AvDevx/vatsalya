<template>
  <div>
    <div class="checkbox-form">
      <div class="answers">
        <label
          v-for="(option, i) of options"
          :key="i"
        >
          <div class="item">
            <div class="checkboxTitle" :for="option"><strong>{{ option[text] }}</strong></div>
            <input
              :id="option"
              v-model="checked"
              type="checkbox"
              :value="option"
              @change="onChange"
            >
            <span class="checkmark" />
          </div>
          <div class="checkboxDesc" v-if="option[description]" :for="option">{{ option[description] }}</div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vCheckbox",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    text: {
      type: String,
      required: true
    },
    description: {
      type: String,
    }
  },
  data(){
    return {
      checked: []
    };
  },
  methods: {
    onChange() {
      this.$emit('input', this.checked);
    }
  }
};
</script>

<style scoped>
.checkboxDesc {
  color: #8998A9;
  margin-left: 46px;
}
.checkbox-form {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.checkbox-form .answers {
	display: flex;
	flex-direction: column;
	align-items: left;
	width: 100%;
}

.checkbox-form label {
	padding-bottom:16px; 
  margin-left: 0;
  cursor: pointer;
}

.checkbox-form .item {
	display: block;
	position: relative;
	padding-left: 46px;
  margin-left: 0;
	cursor: pointer;
	font-size: 16px;
	height: 36px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	display: flex;
	align-items: center;
}

.checkbox-form .item input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

.checkbox-form .checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 36px;
	width: 36px;
	background-color: #F8F8F8;
  border-radius: 12px;
}

.checkbox-form .item:hover input ~ .checkmark {
	background-color: #dfdfdf;
}

.checkbox-form .item input[type="checkbox"]:checked ~ .checkmark {
	background-color: #6C70F7;
}

.checkbox-form .checkmark:after {
	content: "";
	position: absolute;
	display: none;
}

.checkbox-form .item input[type="checkbox"]:checked ~ .checkmark:after {
	display: block;
  animation: bounce-in 0.5s forwards;
}

.checkbox-form .item .checkmark:after {
	width: 5px;
	height: 10px;
	border: solid white;
	border-width: 0 3px 3px 0;
}

@keyframes bounce-in {
  0% {
    transform: scale(0) translate(180%,80%) rotate(45deg);
  }
  50% {
    transform: scale(1.02) translate(180%,80%) rotate(45deg);
  }
  100% {
    transform: scale(1) translate(180%,80%) rotate(45deg);
  }
}
</style>