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
      this.$store.commit('addTask', this.newTaskTitle)
      this.newTaskTitle = ''
    }
  },
}
</script>


<style scoped>

</style>
