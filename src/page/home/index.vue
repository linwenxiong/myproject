<template>
  <section class="page-wrappy">
    <Menu :menuList="menuList" @menuClick="menuClick" />
    <Content :data="data" ref="content" />
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "../../components/menu/index.vue";
import Content from "../../components/content/index.vue";
import data from "../../json/home";
export default defineComponent({
  components: {
    Menu,
    Content,
  },
  setup() {
    const menuList = data.map((item) => {
      return item.title;
    });
    const showIframe = ref<boolean>(false);
    const content = ref(null);
    const menuClick = () => {
      content.value.showIframe = false;
    };
    return {
      menuClick,
      content,
      showIframe,
      data,
      menuList,
    };
  },
});
</script>
<style>
@import "../../assets/css/reset.css";
@import "../../assets/css/com.css";
</style>
<style scoped>
.page-wrappy {
  display: flex;
  background: #000;
  color: #fff;
}
</style>