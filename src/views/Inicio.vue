<template>
    <div>
        <h1 class="h1 text-center">Registro de Contactos</h1>
        <div>
            <router-link :to="{name: 'agregar'}" >
                <button class="form-control btn btn-primary btn-sm mb-3">Nuevo Contacto</button>
            </router-link>
        </div>
        <div>
            <table class="table table-bordered">
                <thead class="thead">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cedula</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contacto of Contactos" :key="contacto.id" >
                        <td >{{contacto.datos.Nombre}}</td>
                        <td>{{contacto.datos.Apellido}}</td>
                        <td>{{contacto.datos.Telefono}}</td>
                        <td>{{contacto.datos.Email}}</td>
                        <td>{{contacto.datos.Cedula}}</td>

                        <td>
                            <router-link :to="{name: 'editar', params:{id: contacto.id}}" >
                                <button class="form-control btn btn-warning btn-sm">EDIT</button> 
                            </router-link>
                        </td>
                        <td>
                            <button @click="Eliminar(contacto.id)" class="form-control btn btn-danger btn-sm">DEL</button> 
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
        </div>

    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Inicio',
        methods:{
           ...mapActions(['GetContactos','DeleteContacto']),
           Eliminar(id){
               if(confirm('Realmente desea eliminar el contacto')){
                   this.DeleteContacto(id);
               }
           }
        },
        computed:{
            ...mapState(['Contactos',]),
        },
        created(){
            this.GetContactos();

        }
    }
</script>

<style lang="sass" scoped>

</style>