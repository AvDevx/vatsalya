<template>
  <div>
    <transition name="slide">
      <div class="drawer" ref="drawer" id="drawer" v-show="open">
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "vDrawer",
  props:{
    open: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "40%"
    },
    backgroundColor: {
      type: String,
      default: "#fff"
    }
  },
  mounted() {
    this.$refs.drawer.style.width = this.width
    this.$refs.drawer.style.backgroundColor = this.backgroundColor
    this.$refs.drawer.style.setProperty('--drawerWidth', `-${this.width}`)
  }
}
</script>
<style scoped>
.drawer {
  --drawerWidth: -40%;
  position: fixed; 
  height: 100%;
  width: 40%;
  background: blueviolet;
  left: 0;
  top: 0;
  box-shadow: 10px 0px 120px rgba(34, 34, 34, 0.425);
  overflow-y: auto;
  
}
.slide-enter-active {
  animation: slide-in 0.6s;
}
.slide-leave-active {
  animation: slide-in 0.4s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateX(var(--drawerWidth));
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

</style>