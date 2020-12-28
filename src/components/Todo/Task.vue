<template>

    <v-list-item
        @click="$store.commit('doneTask',task.id)"
        :class="{ 'blue lighten-5' : task.done }"
        :ripple="false"
        class="white"
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
             <!-- here niceDate is the name of the filter property we created below. It uses moment JS library to format the date -->
           </v-list-item-action-text>
        </v-list-item-action>
        <!-- code for Due date ends -->

      <!-- code for vertical dots menu -->
        <v-list-item-action>
          <task-menu :task="task"/>
        </v-list-item-action>
        <!-- code for 3 dots menu starts -->

        <!-- code for displaying sort icon in grid starts -->
        <v-list-item-action v-if="$store.state.sorting">
          <v-btn
              class="handle"
            color="primary"
            icon
            >
            <v-icon> mdi-drag-horizontal-variant </v-icon>
          </v-btn>
        </v-list-item-action>
        <!-- code for displaying sort icon in grid ends -->




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

<style>
.sortable-ghost{
  opacity: 0;
}

.sortable-drag{
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
}
</style>

