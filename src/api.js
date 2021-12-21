import axios from 'axios';
const url = '/api/post';
const urlUser = '/api/user';


export default class API{
    // Obtener todos los post de la BD
    static async getAllPost(){
        const res = await axios.get(url);
        console.log("Mostrando todos los posts")
        return res.data;
    }
       // Obtener post por id de la BD
       static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }
          // Insertar Posts en la BD
          static async addPost(post){
            console.log(post);
            const res = await axios.post(url,post);
            console.log(res.data);
            return res.data;
        }
            // Updatear un post en la BD
            static async updatePost(id,post){
                const res = await axios.patch(`${url}/${id}`,post);
                return res.data;0
            }
        //Eliminar un post
        static async deletePost(id){
            const res = await axios.delete(`${url}/${id}`);
            return res.data;
        }
    
}