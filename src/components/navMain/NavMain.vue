<template>
  <div class="navmain">
    <div v-for="(item,index) in list" :key="index">
        <div class="item">
            <input type="checkbox" v-model="item.complate" />
            {{ item.title }}
            <button @click="del(item,index)">删除</button>
        </div>
    </div>
    <div v-if="list.length==0">
        暂无任务
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, ref, computed} from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'navMain',  //组件名称
  //接收父组件的数据
  props:{},
  //定义子组件
  components: {
  },
  setup(props, ctx) {
    let store = useStore()
    let list = computed(() =>{
        return store.state.list
    })
    let del = (item,index) =>{
        console.log(index)
        ctx.emit('del',index)
    }
    return {
        list,
        del
    }
  }
})
</script>

<style scoped lang='scss'>
.item{
    height: 35px;
    line-height: 35px;
    width: 160px;
    position: relative;
    button{
        position: absolute;
        right: 20px;
        top: 6px;
        display: none;
        z-index: 99;
    }
    &:hover{
        background-color:#ccc;
        cursor: pointer;
        button{
            display: block
        }
    }
}
</style>

