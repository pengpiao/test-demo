<template>
  <div class="navhead">
    <input v-model="value" @keyup.enter="add" placeholder="请输入任务名称" />
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'navHeader',  //组件名称
  //接收父组件的数据
  props:{
    list:{
        type: Array
    }
  },
  //定义子组件
  components: {
  },
  setup(props, ctx) {
    let value = ref('')
    let add = ()=>{
        console.log(value.value)
        if(!value.value.trim()){
            alert('任务不能为空')
            return false
        }
        let flag = false
        props.list.map((item) =>{
            if(item.title===value.value){
                flag = true
                return
            }
        })
        if(flag){
            alert('任务已经存在')
            return false
        }
        ctx.emit('add',{title:value.value,complate:false})
        value.value = ''
    }
    return {
        value,
        add
    }
  }
})
</script>

<style scoped lang='scss'>
input{
    margin-bottom: 10px;
}
</style>

