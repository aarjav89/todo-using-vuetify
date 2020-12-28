<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app>
      <v-img
          src="mountains.jpg"
          height="125"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          class="pa-2 pt-3"

      >
        <v-avatar size="58">
          <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
          >
        </v-avatar>

        <div class="subtitle-1 font-weight-bold white--text"> Aarjav Chandarana </div>
        <div class="subtitle-2 white--text"> aarjav89</div>

      </v-img>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
        src="mountains.jpg"
        prominent
        height="170"
    >
      <!-- prominent attribute increases the height of toolbar content to 128px -->

      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>

        <v-row>
          <v-toolbar-title class="ml-3 text-h4">
            {{ $store.state.appTitle }}
           </v-toolbar-title>
        </v-row>

        <v-row>
            <live-date-time />
        </v-row>
      </v-container>


    </v-app-bar>

    <v-main>
        <router-view> </router-view>
        <snackbar/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Todo', icon: 'mdi-format-list-checks', to:'/' },
      { title: 'About', icon: 'mdi-help-box', to:'/about' },
    ]
  }),
  components:{
    search : require('@/components/Tools/Search').default,
    snackbar : require('@/components/Shared/Snackbar').default,
    'live-date-time' : require('@/components/Tools/LiveDateTime').default
  },

}
</script>


<style>
.container{
  margin-left: 5px !important;
  max-width: 1825px !important;
}

</style>
