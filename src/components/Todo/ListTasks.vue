<template>
  <v-list
      class="pt-0"
      flat
  >
    <draggable
        v-model="tasks"
        handle=".handle"
    >
      <!-- here v-model=tasks is mapped with a computed property called tasks to update the vuex store,
    when drag operation is performed -->
      <!-- here .handle is the name of the css class that is creating the drag handle -->
      <task
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered
      },
      set(value) {
        this.$store.commit('setTasks', value)
      }
    }
  },
  components: {
    'task': require('@/components/Todo/Task.vue').default,
    draggable
  }
}
</script>



