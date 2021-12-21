import axios from 'axios';
const url = '/api/user';


export default class APIX{
 
          // Insertar Usuarios en la BD
          static async addUser(user){
              console.log("funca"+user.name);
            const res = await axios.post(url,user);
            return res.data;
        }

}