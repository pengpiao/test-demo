<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
    <!-- <div>
      {{ num }}
    </div>
    <div>
      {{ name }}
    </div>
    <div>
      {{ arr }}
    </div>
    <div>
      {{ obj }}
    </div> -->
    <nav-header :list=list @add="add"></nav-header>
    <nav-main :list=list @del="del"></nav-main>
    <nav-footer :list=list @clear="clear"></nav-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import {defineComponent, ref, reactive, toRefs, computed} from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'
import {useStore} from 'vuex'

export default defineComponent({
  name: 'Home',  //组件名称
  //接收父组件的数据
  props:{},
  //定义子组件
  components: {
    HelloWorld,
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, ctx) {
    let store = useStore()
    let num1 = ref(10)
    let name1 = ref('jack')
    let arr1 = ref([1,2,3,'a'])
    let obj1 = ref({a:123})
    let data = reactive({
      name: 'jack',
      num:10,
      arr:['a','s','d'],
      obj:{price:10}
    })

    let list = computed(() =>{
      return store.state.list
    })

    let add = (val) =>{
      store.commit('addList',val)
    }

    let del = (val) =>{
      store.commit('delList', val)
    }

    let clear = (val) =>{
      store.commit('setList',val)
    }
    return {
      num1,
      name1,
      arr1,
      obj1,
      ...toRefs(data),
      list,
      clear,
      add,
      del,
    }
  }
})
</script>

<style scoped lang='scss'>

</style>

