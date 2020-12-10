<template>
  <v-text-field
      class="mt-1"
      :value="$store.state.searchText"
      :class="{'closed' : searchClosed && !$store.state.searchText}"
      @input="$store.commit('setSearch',$event)"
      @focus = "searchClosed = false"
      @blur = "searchClosed=true"
      placeholder="Search"
      filled
      dense
      clearable
      prepend-inner-icon="mdi-magnify"
  >
    <!-- dense property makes the field a little smaller -->
    <!-- clearable will append a cross sign to the right of the textbox -->
  </v-text-field>
</template>

<script>
export default {
  data(){
    return{
      searchClosed:true,
      searchText:''
    }
  }

}
</script>


<style scoped>

.closed {
  transition: max-width 0.3s;
  max-width: 45px;
}

</style>
