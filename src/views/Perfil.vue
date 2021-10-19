<template>
  <v-container class="pa-6 pl-4" fluid>
    <h1 class="h1 text-center"> Perfil</h1>
    <v-form>
      <v-container>
        <v-text-field label="nome" v-model="nome"></v-text-field>
        <v-text-field label="sobrenome" v-model="sobrenome"></v-text-field>
        <v-btn color="green" dark  @click="sauverProfil()">salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import * as fb from '@/plugins/firebase.js'
export default {
  data(){
    return{
      nome:"",
      sobrenome:"",
      uid:"",
      avecProfil: false,
    }; 
  },
  async mounted(){
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection.where('uid', "==", this.uid).get();
    if(userProfile.docs.legth > 0){
      this.avecProfil = true;
      const perfil = userProfile.docs;
      this.profileId = perfil.id;
      this.nome = perfil.data().nome;
      this.sobrenome = perfil.data().sobrenome;
    }
  },
  methods:{
    async sauverProfil(){
      if(this.avecProfil === true){
        await fb.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          sobrenome: this.sobrenome,  
        })
      }
      else{
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          sobrenome: this.sobrenome,
          
        });
        this.avecProfil= true
        }
    }
  }
}
</script>

<style>

</style>