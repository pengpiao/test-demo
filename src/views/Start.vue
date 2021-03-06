<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default defineComponent({
    name:'Start',
    components:{},
    props:{},
    setup(props,ctx) {
        let router = useRouter()
        let route = useRoute()
        // console.log(route.query.a);
        
        let start = () =>{
            router.push({
                name:'Home',
                query:{}
            })
        }
        return{
            start
        }
    }
})
</script>

