<template>
    <div>
        order
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import instance from '../../utils/request'
export default defineComponent({
    setup() {
        instance.get('/getDate')
    },
})
</script>
