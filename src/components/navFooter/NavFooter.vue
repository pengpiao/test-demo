<template>
  <div class="navfoot">
    <div>
        已完成 {{ wc }} / 全部 {{ list.length }}
    </div>
    <div class="btn">
        <button v-if="wc>0" @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, computed, ref} from 'vue'

export default defineComponent({
  name: 'navFooter',  //组件名称
  //接收父组件的数据
  props:{
      list:{
        type:Array
      }
  },
  //定义子组件
  components: {},
  setup(props, ctx) {
      let wc = computed(() =>{
          let newarr = props.list.filter((item) =>{
              return item.complate
          })
          return newarr.length
      })
      let clear = () =>{
          console.log('清除已完成')
          let newarr = props.list.filter((item) =>{
              return !item.complate
          })
          ctx.emit('clear',newarr)
      }
    return {
        clear,
        wc,
    }
  }
})
</script>

<style scoped lang='scss'>
.navfoot{
    display: flex;
    align-items: center;
    .btn{
        margin-left: 10px;
    }
}
</style>

