<template>
  <div>
    <input type="text" v-model="searchVal" />
    <div v-html="'<h1>sdffdsdsfs</h1>'">

    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from "vue";

export default defineComponent({
  setup() {
    const data = [
      {
        content: "",
        correlationId: "789",
        createTime: "456",
        id: 14,
        status: 1,
        titleId: "1014128",
        titleName: "你好",
        type: 0,
        updateTime: "123",
      },
    ];
    const newData = data.map((item) => {
      return Object.assign(
        {},
        {
          titleId: item.titleId,
          title: item.titleName,
          content: ft(item.content),
        }
      );
    });
    const searchVal = ref("");
    watch(searchVal, () => {
      if(searchVal.value){
        const content = getSearchConten(searchVal.value, newData);
        console.log(content);
      } 
    });
    // 获取搜索内容
    function getSearchConten(keyword, searchList) {
      const searContent = [];
      searchList.map((item) => {
        let t_index = item.title.search(keyword);
        let c_indexArr = getStringSub(item.content, keyword);
        // 标题匹配
        if (t_index !== -1) {
          searContent.push({
            titleId: item.titleId,
            txt: item.title.substr(t_index, 12), // 保留12个字符
          });
        }
        // 内容匹配
        if (c_indexArr.length) {
          for (let i = 0; i < c_indexArr.length; i++) {
            searContent.push({
              titleId: item.titleId,
              txt: item.content.substr(c_indexArr[i], 12), // 保留12个字符
            });
          }
        }
      });
      return searContent;
    }
    // 获取字符串下标
    function getStringSub(str, searString) {
      // [0,1,2,3]
      const sum = [];
      let index = str.indexOf(searString);
      while (index > -1) {
        sum.push(index);
        index = str.indexOf(searString, index + 1);
      }
      return sum;
    }
    function ft(str) {
      return str.replace(/<[^<>]+>/g, "").replace(/&nbsp;/gi, "");
    }
    return {
      searchVal,
      data,
    };
  },
});
</script>
<style scoped>
input {
  border: 1px solid #cfcfcf;
}
</style>