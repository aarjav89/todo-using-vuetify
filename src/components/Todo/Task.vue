<template>

    <v-list-item
        @click="$store.commit('doneTask',task.id)"
        :class="{ 'blue lighten-5' : task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title
              :class = "{'text-decoration-line-through':task.done}">{{task.title}}</v-list-item-title>
        </v-list-item-content>

        <!-- code for Due Date -->
        <v-list-item-action v-if="task.dueDate">
           <v-list-item-action-text>
             <v-icon small > mdi-calendar </v-icon>
             {{ task.dueDate | niceDate}}
             <!-- here niceDate is the name of the filter property we created below. It uses date-fns JS library to format the date -->
           </v-list-item-action-text>
        </v-list-item-action>
        <!-- code for Due date ends -->

        <!-- code for 3 dots menu starts -->
        <v-list-item-action>
          <task-menu :task="task"/>
        </v-list-item-action>
        <!-- code for 3 dots menu starts -->




      </template>
    </v-list-item>



</template>

<script>

import moment from 'moment'

export default {
  props: ['task'],
  filters:{
    niceDate(value){
     return moment(value).format('MMM Do YYYY');
    }
  },
  components: {
    'task-menu':require('@/components/Todo/TaskMenu').default
  }
}
</script>

