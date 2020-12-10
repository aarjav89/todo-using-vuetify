<template>
  <div class="text-subtitle-1 ml-3"> {{ date }} </div>
</template>

<script>
import moment from "moment";

export default {
   data(){
     return{
       date:''
     }
   },
  methods:{
     getDate(){
       this.date = moment().format('MMMM Do YYYY, h:mm:ss a');
       setTimeout(this.getDate, 1000)
     }
  },
  mounted() {
     this.getDate()
  }
}
</script>

<style scoped>

</style>
