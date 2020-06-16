<template>
    <div>
        <h1>{{titulo}}</h1>
        <hr>
         <form @submit.prevent="AgregarContacto">
             <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    </div>
                    <input type="text" class="form-control mr-3" required v-model="contactoObj.Nombre">

                     <div class="input-group-text">Apellidos</div>
                    <input type="text" class="form-control" required v-model="contactoObj.Apellido">
                </div>
            </div>

            <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Cedula</div>
                    </div>
                    <input type="text" class="form-control mr-3" required v-model="contactoObj.Cedula">

                    <div class="input-group-text">Telefono</div>
                    <input type="tel"  class="form-control" required v-model="contactoObj.Telefono">
                </div>
            </div>

            <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Email</div>
                    </div>
                    <input type="email" class="form-control" required v-model="contactoObj.Email">
                </div>
            </div>

           
            <button class="form-control btn btn-success btn-sm">Guardar</button>
        </form>
    </div>
    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AgregarContacto',
    data(){
        return {
            titulo: 'Agregar Contactos',
            contactoObj: {Nombre: '', Apellido:'', Email: '', Telefono: 0, Cedula: ''}
        }
    },
    methods:{
        ...mapActions(['AddContacto']),
        AgregarContacto(){
           this.AddContacto(this.contactoObj);
        }
    },

}
</script>