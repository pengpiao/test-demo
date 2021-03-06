<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">返回首页</button>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
  name:'About',
  components:{},
  props:{},
  setup(props,ctx) {  
    let router = useRouter()
    let back = () =>{
      router.go(-1)
    }
    return {
      back
    }
  }
})
</script>