<template class="main" >
    <div id="bienvenido">
        
        <h1 align="center" class="h1" >Bienvenido a SushInsta!</h1>
         <Slider />
    <section class="parteTexto">
        <div class="texto">
            <h1> ¡Ven a disfrutar!</h1>
            <p>
                ¿Que esperas para probar los rolls mas deliciosos? Ven a visitarnos a nuestro local o pide delivery directo hasta tu hogar!
            </p>

        </div>

        <div class="img" align="right">
            <img src="../assets/eatingS.jpg">

        </div>
    </section>
     <section class="parteDos">
        <div class="imgDos">
            <img src="../assets/comiendoUno.jpg">

        </div>
        <div class="texto">
            <h1> ¡Aprovecha promociones unicas!</h1>
            <p>
                Contamos con promociones imperdibles para toda la familia!
            </p>

        </div>


    </section>
       <div> 
           Siguenos en nuestras redes!
       </div>
        <footer class="footer">
        <a href="https://www.facebook.com/">
            <div id="icono1" class="iconos"><img src="../assets/icons8_facebook_48px.png" width="40"></div>
        </a>
        <a href="https://www.instagram.com/">
            <div id="icono2" class="iconos"><img src="../assets/icons8_instagram_48px.png" width="40"></div>
        </a>
        <a href="https://www.whatsapp.com/">
            <div id="icono3" class="iconos"><img src="../assets/icons8_whatsapp_48px_1.png" width="40"></div>
        </a>

      
       
    </footer>
         

    </div>
</template>
<script>
import Slider from '../components/Slider.vue';
export default {
    name:"Bienvenido",
    components:{
        Slider
    }
}
</script>
<style >

  .h1{
      font-family: 'Fira sans',cursive;
      margin-top:1%;
      font-size: 4rem;
      color:rgba(18, 55, 122, 0.979);
  }
  .textOne{
    align-items: flex;
   
  }
.parteTexto{
    margin-top:8%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
}

.parteTexto .texto{
    margin-left: 8%;
   width: 40%;
}
.parteTexto .texto h1{
   font-family: 'Fira sans',cursive;
   letter-spacing: 2px;
   padding-bottom: 10px;
  font-size: 3.3rem;
}
.parteTexto .texto p{
   font-size: 1.3rem;
 
   color: black;

}

.parteTexto .img img{
    margin-right: 8%;
   width: 55%;
}
.parteDos{
    margin-top:8%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
}

.parteDos .texto{
    margin-right: 8%;
   width: 40%;
}
.parteDos .texto h1{
   font-family: 'Fira sans',cursive;
   letter-spacing: 2px;
   padding-bottom: 10px;
  font-size: 3.3rem;
}
.parteDos .texto p{
   font-size: 1.3rem;
 
   color: black;

}

.parteDos .imgDos img{
    margin-left: 8%;
   width: 55%;
}
.footer{
    display:flex;
    flex-direction: row;
}
</style>