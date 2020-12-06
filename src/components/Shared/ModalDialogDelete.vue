<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
  >

    <v-card>
      <v-card-title class="headline">
        Delete Task ?
      </v-card-title>
      <v-card-text>Are you sure you want to delete this task forever ? This action cannot be undone.</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn

            text
            @click="$emit('close')"
        >
          No
        </v-btn> <!-- on press of No btn, we have emitted an event from the child component ModalDialogDelete.vue which is listened by parent Task.vue -->
        <v-btn

            color="red"
            text
            @click="$store.dispatch('deleteTask',task.id)"
        >
          Yes
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:['task'] //received from Task.vue. used for passing task object to deleteTask method in actions.

}
</script>

<style scoped>

</style>
