<template>
  <v-app>
    <v-app-bar app color="purple darken-2" dark elevation="1">
      <v-app-bar-nav-icon @click.stop="sidebar= !sidebar"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
      <v-list dense color="purple darken" dark>
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="sidebar= !sidebar">mdi-chevron-left</v-icon>
          </v-list-item-action>
        <v-list-item-title>
          <div class="pl-2"><h3>Trabalho Vue-Router</h3></div>
        </v-list-item-title>  
        </v-list-item>
      </v-list>
      <v-list-item @click="mini = !mini">
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Usuario</v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of itens" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{item.title}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer >
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app color="purple darken-2" dark elevation="1">
      <spam>João vitor Grünfeld De Luca 2info3</spam>
      <v-spacer></v-spacer>
      <spam>&copy;2021</spam>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return{
      sidebar: true,
      mini: false,
      itens: [
        {title:"Home", icon:"mdi-home-circle", to:"/"},
        {title:"Perfil", icon:"mdi-account-edit", to:"/perfil"},
        {title:"Sair", icon:"mdi-exit-to-app", to:"/login"},
      ]
    };
  },
}
</script>

<style>

</style>