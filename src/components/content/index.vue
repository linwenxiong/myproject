<template>
  <section class="content-wrappy">
    <div class="module2-wrappy">
      <ItemsCard
        v-for="(item, key) in data"
        :key="key"
        :data="item.list"
        :id="item.title + key"
        :title="item.title"
        @cardClick="cardClick"
      />
    </div>
    <PageIframe v-model:showIframe="showIframe" :url="webUrl" />
  </section>
</template>
<script lang="ts">
import { defineComponent, ref} from "vue";
import ItemsCard from "../../components/common/items-card/index.vue";
import PageIframe from "../../components/content/components/page-iframe.vue";
export default defineComponent({
  name: "Content",
  components: {
    ItemsCard,
    PageIframe,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const showIframe = ref<boolean>(false);
    const webUrl = ref<string>("");
    function cardClick(href) {
      showIframe.value = true;
      webUrl.value = href;
    }
    return { webUrl, showIframe, cardClick };
  },
});
</script>

<style scoped>
.content-wrappy {
  flex: 1;
  position: relative;
}
</style>