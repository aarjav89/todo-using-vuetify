<template>
  <div class="home">

    <field-add-task/>



    <list-tasks v-if="$store.state.tasks.length" />



    <no-tasks v-else />

  </div>
</template>

<script>
import FieldAddTask from  '@/components/Todo/FieldAddTask.vue'
import ListTasks from "@/components/Todo/ListTasks";

export default {
  name: 'Home',

   components:{
      'field-add-task': FieldAddTask,
      'list-tasks' : ListTasks,
     'no-tasks' : require('@/components/Todo/NoTasks')
   }



}
</script>






