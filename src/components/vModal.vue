<script>
  export default {
    name: 'vModal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <div class="header-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="modalIcon">
              <path fill-rule="evenodd" d="M9.401 4.504c1.155-2.001 4.043-2.001 5.197 0l7.355 12.747c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 4.504zM12 9.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V10.5a.75.75 0 01.75-.75zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg>
            <slot name="header">
              This is the default tile!
            </slot>
          </div>
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            This is the default body!
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            This is the default footer!
          </slot>
          <!-- <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Close me!
          </button> -->
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>

  .modalIcon {
    width: 32px;
    height: 32px;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.418);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
  }

  .modal {
    overflow-x: auto;
    display: flex;
    flex-direction: column;

    width: 600px;
    height: auto;

    padding: 24px 0 8px 0;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 20px #0000000D;
    border: 1px solid #EBEBEB;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    display: flex;
  }

  .modal-header {
    position: relative;
    display: flex;
  }
  .header-content > .modalIcon {
    margin-right: 12px;
  }
  .header-content {
    display: flex;
    align-self: center;
    border-left: solid #FFD153 3px;
    padding: 8px calc(1.5rem - 3px);
    color: #3E3E3E;
    font-size: 28px;
    width: 100%;
    line-height: 32px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 20px 1.5rem;
    font-size: 14px;
    line-height: 24px;
    color: #606060;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>