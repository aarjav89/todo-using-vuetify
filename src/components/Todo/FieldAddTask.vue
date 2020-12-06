<template>
  <div>
    <v-text-field
        v-model="newTaskTitle"
        outlined
        label="Add Task"

        class="pa-3"
        hide-details
        clearable
        @keyup.enter="addTask()"
    >

      <template v-slot:append>
        <v-icon
           @click="addTask"
           color="primary"
           :disabled="!newTaskTitle"
        > mdi-plus </v-icon>
      </template>


    </v-text-field>
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
      if(!this.newTaskTitleInvalid){
        this.$store.dispatch('addTask', this.newTaskTitle) // we call dispatch to use method in actions and not commit.
        this.newTaskTitle = ''

      }
    }
  },
  computed:{
    newTaskTitleInvalid(){
      return !this.newTaskTitle
    }
  }
}
</script>


