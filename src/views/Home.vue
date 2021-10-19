<template>
  <v-container class="pa-6" fluid>
    <h1 class="h1 text-center font-Oswald">Lista de tarefas</h1>
    <v-form>
        <v-text-field label="Nova Tarefa" v-model="ntarefa" @keydown.enter="ad">
          <v-icon slot="append" @click="ad">mdi-send</v-icon>
        </v-text-field>
    </v-form>
    <v-divider color="purple"></v-divider>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="tarefa of tarefas" :key="tarefa.id">
          {{ tarefa.titulo }}
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-container>
</template>

<script>
import * as fb from"@/plugins/firebase.js";

export default {
  data(){
    return{
      uid:"",
      ntarefa:"",
      tarefas:[],
    };
  },
  mounted(){
    this.uid = fb.auth.currentUser.uid;
    this.Procurar()
  },
  methods:{
    async Procurar(){
      const logTasks = await fb.tasksCollection.where('owner', '==' ,this.uid).get();
      for(const doc of logTasks.docs){
        this.tarefas.push({
          id: doc.id,
          titulo: doc.data().titulo,
        });
      }
    },
    async ad(){
      await fb.tasksCollection.add({
        titulo: this.ntarefa,
        dataEnvio: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.ntarefa="";
      this.Procurar();
    },
  }
}
</script>

<style>

</style>
