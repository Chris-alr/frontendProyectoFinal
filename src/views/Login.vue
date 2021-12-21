<template>

    <v-container>
        <v-row no gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Agregar Usuario</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart-form-data"  >


                        <v-text-field label="Nombre" v-model="user.name" class="form-control"
                         prepend-icon="mdi-note" :rules="rules" ></v-text-field>


                        <v-text-field label="Contraseña" v-model="user.password" prepend-icon="mdi-cash"  :rules="rules">  </v-text-field>
                      

                    <v-btn type="submit" class="mt-3" color="primary"> Agregar </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
      
    </v-container>

</template>


<script>
import APIX from '../apiUser';


export default{
    data(){

        return{
           rules : [(value)=>!!value || "Este campo es requerido!"],
            user: {
            user: "",
            password: "",
        
          
        },
       
        
        }
        
    },

    methods:{

    
        async submitForm(){
          
            const formData = new FormData();
          
       
            formData.append('name', this.user.name);
            formData.append('password', this.user.password);
            
            if(this.$refs.form.validate()){
                  console.log(this.user.name);
            console.log(this.user.password);
            console.log("si");
            console.log(formData.toString());
                const response = await APIX.addUser(formData);
                this.$router.push({name:'Home', params :{message:response.message}});
            }


          
        }

},}

</script>
