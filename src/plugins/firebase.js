import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { doc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAivmCbZQa4QPhHhi5zeXXiRc8krD1gcxo",
    authDomain: "tarefas-lista-vue.firebaseapp.com",
    projectId: "tarefas-lista-vue",
    storageBucket: "tarefas-lista-vue.appspot.com",
    messagingSenderId: "815433102212",
    appId: "1:815433102212:web:64d490166fed6629e463d1"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection,doc, deleteDoc,
}