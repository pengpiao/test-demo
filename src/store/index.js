import { createStore } from 'vuex'

export default createStore({
  //定义所需要的状态，数据共享，每个组件都可以使用
  state: {
    name: 'jack',
    list:[
      {title:'吃饭',complate:false},
      {title:'睡觉',complate:false},
      {title:'敲代码',complate:true}
    ],
  },
  //同步修改state,里面都是方法
  mutations: {
    //两个参数 state 和 需要修改的值
    setName(state,payload){
      state.name = payload
    },
    addList(state,payload){
      state.list.push(payload)
    },
    delList(state,payload){
      state.list.splice(payload,1)
    },
    setList(state,payload){
      state.list = payload
    }
  },
  //异步提交mutations
  actions: {
    //两个参数 状态store 和 需要修改的值
    ansySetName(store,params){
      setTimeout(() => {
        //commit 是提交mutations 调用mutations的方法
        store.commit('setName',params)
      }, 2000);
    },
  },
  modules: {
  }
})
