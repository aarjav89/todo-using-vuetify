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
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Aarjav's Todo List</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
    snackbar : require('@/components/Shared/Snackbar').default
  }
}
</script>
