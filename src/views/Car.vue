<template>

  <v-simple-table>
    
      <thead>
          <v-container>
                   <v-row no-gutters align="center">
                        <v-col sm="4" class="pa-3">
                            <v-card class= "pa-1" >
                                <v-img heigth="30" :src="`/${post.image}`"></v-img>
                            </v-card>
                         </v-col>
                     </v-row>
          </v-container>
      
            
        <tr>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Contenido
          </th>
          <th class="text-left">
            Precio
          </th>
        
        </tr>
      </thead>
      <tbody>
          <tr>
          <td>{{ post.title }}</td>
          <td>{{ post.content }}</td>
           <td>{{ "$"+post.category }}</td>
           
        </tr>
       <v-checkbox
      v-model="checkbox"
      :label="`Delivery`"
    ></v-checkbox>
      
    <div v-show="checkbox==true">
        <form>
        <label for="fname">Nombre:</label><br>
        <input class="texto" type="text" name="name" border="black" require><br>
        <label for="lname">Direccion:</label><br>
        <input class="texto"  type="text" name="addres" require>
        
    
        </form>
     <a href="/buyed">  
     <button class="button">Enviar</button>  
   </a>
        
    </div>
      
      </tbody>
      <section aling="center">
           <h1 align="center" class="textoFooter">El pago se realiza una vez entregado el pedido!</h1>
      </section>

</v-simple-table>
  

</template>


<script>

import API from '../api';


export default{
   
    data(){

        return{
           
            post: {
            name: "",
            category: "",
            content: "",
            image:""
            },
            image:"",
            checkbox: false,
       
        
        };
        
    },
    async created(){
            const response = await API.getPostByID(this.$route.params.id);
            this.post = response;
        },
    methods:{
    
        agregarReparto(){
            const valor = post.category + 3000;
            return valor;
        }

    },
    }

</script>
<style scoped>
.checkboxes{
    align-items: right;
}
.checkboxes-input{
    display:inline-block;
    margin-right: 10px;
    font-size: 20px;
}
.checkboxes-label{
     margin-left:10%;
    display:inline-block;
    align-content: right;
    align-items: right;
    color:green;
    font-size:20px;
    margin-right:10px;
    margin-top:30px;
    margin-left:30px;
    
}
.texto{
    
    margin-left:10%;
    border:solid green;
}
.button{
    padding: 10px 8px;
    border-radius: 20px;
    background-color: green;
    margin-top: 4px;
    margin-left:17%;
    color:black;
}
.textoFooter{
    margin-left:50%;
}
</style>