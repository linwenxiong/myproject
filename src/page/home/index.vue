<template>
  <section class="page-wrappy">
    {{bbq}}
    <Menu :menuList="menuList" @menuClick="menuClick" />
    <Content :data="data" ref="content" />
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Menu from "../../components/menu/index.vue";
import Content from "../../components/content/index.vue";
import data from "../../json/home";
const bbq = {
  name: 'abc'
}
export default defineComponent({
  components: {
    Menu,
    Content,
  },
  asyncData({store}) {
    bbq.name = store.name
    console.log(bbq,56);
    
  },
  setup() {
    console.log(bbq);
    
    const menuList = data.map((item) => {
      return item.title;
    });
    const showIframe = ref<boolean>(false);
    const content = ref(null);
    const menuClick = () => {
      content.value.showIframe = false;
    };
    return {
      bbq,
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