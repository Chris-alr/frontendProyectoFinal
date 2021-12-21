<template>
 <v-container>
     <v-row>
         <v-col sm="10" class="pa-4 mx-auto">
             <vcard class="pa-2">
                 <v-img :src="`/${post.image}`"></v-img>
                 <v-card-actions class="pb-0">
                     <v-row class="mt-1 mx-1">
                         <v-col sm="2">
                             <v-btn small outlined color="primary">{{"$"+post.category}}</v-btn>
                         </v-col>
                         <v-col sm="10" class="d-flex justify-end">
                             <v-btn color="primary" :to="{ name: 'edit-post', params: { id: post._id}}">Edit</v-btn>
                             <v-btn color="red" @click="removePost(post._id)">Delete</v-btn>
                         </v-col>
                     </v-row>

                 </v-card-actions>
                 <v-card-subtitle class="headline">
                     <h3>{{post.title}}</h3>
                     <v-btn class = "mt-10" color="success" :to="{ name: 'Car'}">Comprar Promocion</v-btn>
                 </v-card-subtitle>
                 <v-card-text class="grey--text">
                     <p class="mt-5">{{post.content}}</p>
                     <p class="mt-5">{{post.created}}</p>
                 </v-card-text>
             </vcard>
         </v-col>
     </v-row>
 </v-container>
</template>

<script>
import API from "../api";

export default {
    data() {
        return{
            post:{},
        };
    },
    async created(){
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async removePost(id){
            const response = await API.deletePost(id);
            this.$router.push({name:'Home', params: { message: response.message}});
        }
    }
};
</script>
<style scoped>

</style>