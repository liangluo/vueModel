<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import portAPI from '@util/api';

export default {
  name: 'Home',
  data(){
    return{

    }
  },
  components: {
    HelloWorld,
  },
  created(){

  },
  mounted(){

  },
  methods:{
    //请求接口
    getAPI(){
      let data ={
        cataidx:'',
      };
      portAPI.get_book_data(data).then(res=>{
            this.data = res.message;
      })
    },
  },
  
};
</script>
