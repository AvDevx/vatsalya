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
          <div class="header-content" ref="headerContent">
            <svg v-if="info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="modalIcon">
              <path fill-rule="evenodd" d="M9.401 4.504c1.155-2.001 4.043-2.001 5.197 0l7.355 12.747c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 4.504zM12 9.75a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V10.5a.75.75 0 01.75-.75zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
            </svg>
            <svg v-else-if="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="modalIcon">
              <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="modalIcon">
              <path d="M7.493 19.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 16.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3.75A.75.75 0 0115 3a2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 11.727a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507C2.28 20.482 3.105 21 3.994 21H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
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

        <footer v-if="this.$slots.footer" class="modal-footer">
          <slot name="footer">
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

<script>
  export default {
    name: 'vModal',
    props: {
      success: {
        type: Boolean,
        default: false,
      },
      info: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      }
    },
    mounted () {
      if (this.info) {
        this.$refs.headerContent.style.borderLeft = "4px solid #FFD153"
      } else if (this.error) {
        this.$refs.headerContent.style.borderLeft = "4px solid #FF5353"
      } else {
        this.$refs.headerContent.style.borderLeft = "4px solid #94E956"
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

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

    padding: 32px 0 0 0;

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
    padding: 4px calc(1.5rem - 3px);
    color: #3E3E3E;
    font-size: 28px;
    width: 100%;
    line-height: 32px;
  }

  .modal-footer {
    padding: 20px 1.5rem;
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

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>