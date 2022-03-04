<template>
<transition  name="slide-fade">
  <div class="iframe-wrappy" v-if="showIframe">
    <div class="firame-top-box">
      <span class="firame-top-btn" @click="goBack">返回</span>  {{url}}</div>
    <iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</transition>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    url: {
      type: String,
      default: "",
    },
    showIframe: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:showIframe"],
  setup(props, { emit }) {
    function goBack() {
      emit("update:showIframe", false);
    }
    return {
      goBack,
    };
  },
});
</script>

<style scoped>
.firame-top-btn {
  margin-right: 40px;
}
.firame-top-box {
  height: 40px;
  line-height: 40px;
  background: #000;
  cursor: pointer;
 
}
.iframe-wrappy {
  position: fixed;
  top: 0;
  left: 200px;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: #fff;
}
.slide-fade-enter-active {
  /* transition: all .8s ease-out; */
  transition: all .8s cubic-bezier(1,-0.04,.59,.78);
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1,-0.04,.59,.78);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(100%);
}
</style>