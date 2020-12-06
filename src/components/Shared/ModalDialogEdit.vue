<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
  >

    <v-card>
      <v-card-title class="headline">
        Edit Task ?
      </v-card-title>
      <v-card-text>
        Edit the title of this task.

        <v-text-field
            v-model="taskTitle"
            @keyup.enter = "updateTask"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn

            text
            @click="$emit('close')"
        >
         Cancel
        </v-btn> <!-- on press of No btn, we have emitted an event from the child component ModalDialogDelete.vue which is listened by parent Task.vue -->
        <v-btn
            color="red darken-1"
            text
            @click="updateTask"
            :disabled="taskTitleInvalid"
        >
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:['task'], //received from Task.vue. used for passing task object to deleteTask method in actions.
  data()
  {
    return{
      taskTitle : null
    }
  },
  mounted(){
    this.taskTitle = this.task.title
  },
  methods:{
    updateTask(){
      if(!this.taskTitleInvalid){
        let payload = {
          id :this.task.id,
          title: this.taskTitle

        }
        this.$store.dispatch('updateTaskTitle',payload)
        // we call dispatch instead of commit when we want to commit 2 mutuations.. here we want to mutate(call) updateTaskTitle and showSnackBar
        this.$emit('close')
      }
    }

  },
  computed:{
    taskTitleInvalid(){
      return !this.taskTitle || this.taskTitle === this.task.title
    }
  }
}
</script>

<style scoped>

</style>
