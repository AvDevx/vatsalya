<template>
  <div>
    <label 
      class="container"
      v-for="option in options"
      :key="option"
    > 
      <div class="checkboxTitle" :for="option"><strong>{{ option[text] }}</strong></div>
      <input
        type="radio"
        :name="name"
        :value="option"
        :id="option"
        @change="$emit('input', option)"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "vRadioButton",
  props: {
    options: {
      required: true,
      type: Array,
    },
    name: {
      required: true,
      name: String
    },
    text: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 46px;
  margin-bottom: 16px;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  width: 36px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #6C70F7;
  
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
  animation: bounce-in 0.5s forwards;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	width: 15px;
  height: 15px;
	border-radius: 50%;
	background: white;
}

@keyframes bounce-in {
  0% {
    transform: scale(0) translate(90%, 90%);
  }
  50% {
    transform: scale(1.02) translate(70%, 70%); 
  }
  100% {
    transform: scale(1) translate(70%, 70%);
  }
}

</style>
