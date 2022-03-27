<template>
  <div>
    {{ datas }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import instance from "../../utils/request";
export default defineComponent({
  setup() {
    const datas = ref([]);
    try {
      instance.get("/getDate").then((res) => {
        datas.value = res;
      });
    } 
    catch (err) {
      console.log(err);
    }

    return {
      datas,
    };
  },
});
</script>
