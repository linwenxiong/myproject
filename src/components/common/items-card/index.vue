<template>
  <div class="item-card-wrappy" ref="cardObj" :scrolls="scroll">
    <h2 class="module2-title">{{ title }}</h2>
    <section class="module2-content">
      <div
        class="module2-item"
        @click="itemClick(item.url)"
        v-for="(item, index) in data"
        :key="index"
      >
        <h3 class="module2-item-title">
          <i><img class="module2-icon" :src="item.logo" alt="" /></i
          >{{ item.name }}
        </h3>
        <div class="module2-item-txt">
          {{ item.explain }}
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
export default defineComponent({
  name: "ItemCard",
  emits:["cardClick"],
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    title: {
      type: String,
      default: "暂无标题",
    },
  },
  setup(prop, { emit }) {
    function itemClick(href) {
        emit('cardClick',href)
    }
    const cardObj = ref(null);
    const scroll = ref(0);
    nextTick(() => {
      scroll.value = cardObj.value?.offsetTop;
    });
    return {
      scroll,
      cardObj,
      itemClick,
    };
  },
});
</script>
