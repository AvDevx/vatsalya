<template>
  <component :is="type" :href="href" class="button" ref="button" @mouseover="hoverActive" @mouseleave="hoverLeft">
    <slot/>
  </component>
</template>

<script>
  export default {
    name: "vButton",
    props: {
      href: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      },
      backgroundColor: String,
      text: {
        type: Boolean,
        default: false
      },
      block: {
        type: Boolean,
        default: false
      },
      removePadding: {
        type: Boolean,
        default: false
      },
      color: String,
      hoverBackgroundColor: String
    },
    mounted() {
      if (this.removePadding) {
        this.$refs.button.style.padding = "0 0 0 0"
      }

      if (this.block) {
        this.$refs.button.style.display = "block"
        this.$refs.button.style.width = "100%"
      }

      if (this.color) {
        this.$refs.button.style.color = this.color
      }

      if (this.backgroundColor) {
        this.$refs.button.style.backgroundColor = this.backgroundColor
      }

      if (this.text) {
        this.$refs.button.style.backgroundColor = "transparent"
      }
    },
    methods: {
      hoverActive: function () {
        this.$refs.button.style.backgroundColor = this.hoverBackgroundColor
      },
      hoverLeft: function () {
        if (this.backgroundColor) {
          this.$refs.button.style.backgroundColor = this.backgroundColor
        }

        if (this.text) {
          this.$refs.button.style.backgroundColor = "transparent"
        }
      }
    },
    computed: {
      type() {
        if (this.href) {
          return 'a'
        } else {
          return 'button'
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    display: inline-block;
    height: 48px;
    padding: 4px 32px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    border: transparent;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
  }

</style>