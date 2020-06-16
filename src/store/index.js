import Vue from 'vue'
import Vuex from 'vuex'

import db from '@/firebase';
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Contactos: [],
    editarContacto: {ID: 0,Nombre: '', Apellido:'', Email: '', Telefono: 0, Cedula: ''}
  },
  mutations: {
    setContactos(state, contacts){
      state.Contactos = contacts;
    },

    setContacto(state, contacto){
      state.editarContacto.Nombre = contacto.datos.Nombre,
      state.editarContacto.Apellido = contacto.datos.Apellido,
      state.editarContacto.Email = contacto.datos.Email,
      state.editarContacto.Telefono = contacto.datos.Telefono,
      state.editarContacto.Cedula = contacto.datos.Cedula;
      state.editarContacto.ID = contacto.id
    },
    EliminarContacto(state, id){
      state.Contactos = state.Contactos.filter(filtro=> filtro.id != id)
    }
  },
  actions: {
    //Obtner contactos
    GetContactos({commit}){
      const contacts  = [];
    
      db.collection('Contactos').get()
      .then(snapshot=>{
        snapshot.forEach(doc =>{
          let obj = {
            datos: doc.data(),
            id: doc.id
          }
          contacts.push(obj);
        });
      }).catch(error => alert(error));
      commit('setContactos', contacts);
    },

    GetContacto({commit}, id){
      db.collection('Contactos').doc(id).get()
      .then((doc)=>{
        const obj = {
          datos: doc.data(),
          id: doc.id
        }

        commit('setContacto', obj);
      });
    },

    EditContacto({commit}, contacto){
      //Editar Contacto
      db.collection('Contactos').doc(contacto.ID).update({
        Nombre: contacto.Nombre,
        Apellido: contacto.Apellido,
        Email: contacto.Email,
        Telefono: contacto.Telefono,
        Cedula: contacto.Cedula
      })
      .then(()=>{
        alert('Contacto Modificado Correctamente');
        router.push({name: 'inicio'})
      });
    },

    AddContacto({commit}, contacto){
      db.collection('Contactos').add({
        Nombre: contacto.Nombre,
        Apellido: contacto.Apellido,
        Email: contacto.Email,
        Telefono: contacto.Telefono,
        Cedula: contacto.Cedula
      })
      .then(()=>{
        alert('Contacto Agregado correctamente');
        router.push({name: 'inicio'})
      })
    },

    DeleteContacto({commit}, id){
      db.collection('Contactos').doc(id).delete()
      .then(()=>{
        alert('Contacto Eliminado Correctamente');
        commit('EliminarContacto', id);
      });
    }
  },
  modules: {
  }
})
