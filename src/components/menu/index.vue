<template>
  <section class="menu-wrappy">
    <div class="menu-conten">
      <div
        @click="itemClick(key, item)"
        :class="['menu-item', { active: active === key }]"
        v-for="(item, key) in menuList"
        :key="key"
      >
        {{ item }}
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  setup(props,{emit}) {
    const active = ref(0);
    function itemClick(key, item) {
      emit('menuClick');
      active.value = key;
      window.scrollTo({
        top: +document.getElementById(item + key).getAttribute("scrolls"),
        behavior: "smooth",
      });
    }
    return {
      itemClick,
      active,
    };
  },
});
</script>

<style scoped>
.menu-wrappy {
  width: 200px;
}
.menu-conten {
  width: 200px;
  position: fixed;
  left: 0;
  padding: 16px 0 16px 12px;
  box-sizing: border-box;
}
.menu-item {
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.menu-item.active {
  color: #0cbf19;
  font-weight: bold;
}
</style>