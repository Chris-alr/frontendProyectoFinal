<template>
  <v-app id="inspire">
    <v-navigation-drawer
    
      v-model="drawer"
      class="drawer"
      app 
      
    >
    <v-list-item  >
      <v-list-item-content >
        <v-list-item-title class="h3">  
          SushInsta &copy
        </v-list-item-title>
        <v-list-item-subtitle color="white">
          "Mas rico y rapido que nunca"
        </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item> 
      <v-divider></v-divider>
      <v-list dense>
      <v-subheader>Categorias</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="white"
      >
        <v-list-item 
          v-for="(item, i) in items"
          :key="i" :to="item.link" link >
        
          <v-list-item-icon>
            <v-icon class="items" v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content >
            <v-list-item-title class="items" v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar class="v-app-bar" app color="rgba(18, 55, 122, 0.979)" >
      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <img src="../src/assets/sushixa.png" width="100" height="100" class="d-inline-block align-center" alt="logo">
      <h3 class="h3" color="white">SushInsta</h3>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null,
        items: [
          { title: 'Bienvenido', icon: 'mdi-home', link: "/" },
        { title: 'Productos', icon: 'mdi-store', link: "/home" },
        { title: 'Agregar Post', icon: 'mdi-note-plus', link: "/add-post" },
        { title: 'About', icon: 'mdi-help-box', link: "/about" },
        
       
      ],
       
       }),
  }
</script>
<style scoped>
.body{
  background-color: black;
}
.title{
    color:rgba(231, 231, 231, 0.979);
    font-family: 'Fira sans',cursive;
    font-size: 45px;
   
    font-family: system-ui;
}
.v-app-bar{
  background: linear-gradient(240deg, black,#6e1eb8);
}
.drawer{
  background: linear-gradient(360deg, black,#6e1eb8);
}
.items{
  
  font-size: 40px;
}
.h3{
  color:white;
}
</style>