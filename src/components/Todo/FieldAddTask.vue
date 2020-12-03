<template>
  <div>
    <v-text-field
        v-model="newTaskTitle"
        outlined
        label="Add Task"
        append-icon="mdi-plus"
        class="pa-3"
        hide-details
        clearable
        @click:append="addTask()"
        @keyup.enter="addTask()"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return{
      newTaskTitle:'',
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch('addTask', this.newTaskTitle) // we call dispatch to use method in actions and not commit.
      this.newTaskTitle = ''
    }
  },
}
</script>


