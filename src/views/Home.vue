<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import portAPI from '@/util/api';

export default {
  name: 'Home',
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {
    // 请求接口
    getAPI() {
      const data = {
        cataidx: '',
      };
      portAPI.get_book_data(data).then((res) => {
            this.data = res.message;
      });
    },
  },

};
</script>
