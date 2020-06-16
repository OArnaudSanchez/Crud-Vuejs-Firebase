<template>
    <div>
        <h1 class="h1 text-center">Editar Contactos</h1>
        <hr>

        <form @submit.prevent="EditContacto(editarContacto)">
             <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Nombre</div>
                    </div>
                    <input type="text" class="form-control mr-3" required v-model="editarContacto.Nombre">

                     <div class="input-group-text">Apellidos</div>
                    <input type="text" class="form-control" required v-model="editarContacto.Apellido">
                </div>
            </div>

            <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Cedula</div>
                    </div>
                    <input type="text" class="form-control mr-3" required v-model="editarContacto.Cedula">

                    <div class="input-group-text">Telefono</div>
                    <input type="tel"  class="form-control" required v-model="editarContacto.Telefono">
                </div>
            </div>

            <div class="col-auto mb-4">
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                    <div class="input-group-text">Email</div>
                    </div>
                    <input type="email" class="form-control" required v-model="editarContacto.Email">
                </div>
            </div>
            
            <button type="submit" class="form-control btn btn-success">Modificar Contacto</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'Editar',
    data(){
        return {
            idContacto: this.$route.params.id
        }
    },
    methods:{
        ...mapActions(['GetContacto','EditContacto'])
    },
    computed:{
        ...mapState(['editarContacto'])
    },
    created(){
        this.GetContacto(this.idContacto);
    }
}
</script>