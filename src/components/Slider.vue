<template >


    <div class="slider">
        <button  @click="prev" type="button" class="btn btn-left">
            <img src="../assets/izq.png" class="icons">
        </button>

        
        <div   class="container-slides" :style="{transform: `translateX(${index}px)`, transition:`${transition}`}">
            <img src="../assets/comiendoCuatro.jpg" class="img-slider">
            <img src="../assets/ComiendoDos.jpg" class="img-slider">
            <img src="../assets/Comiendotres.jpg"  class="img-slider">
            <img src="../assets/comiendocinco.jpg" class="img-slider">
         
        </div>
         <button  @click="next" type="button" class="btn btn-right">
            <img src="../assets/dere.png" class="icons">
        </button>
    </div>
</template>
<script>
//Poner imagenes en 1200x796
export default {
    name: 'Slider',
    data: function(){
        return{
            index: 0,
            transition: "transform 0.5s ease"
        }
    },
    methods:{
        next(){
            console.log(this.index)
            if(this.index === -2100){
                  
                this.index = 0;
            }else{
             
                this.index -=700;
            }
        },
        prev(){
            if(this.index === 0){
              
                this.index=-2100;
            
            }else{
                
                this.index +=700;
            }
        }
    }
}
</script>
<style scoped >
    .slider{
        width: 700px;
        height: 450px;
        margin: 100px auto 0;
        overflow: hidden;
        position: relative;

    }
    .container-slides{
        display:flex;

    }
    .img-slider{
        width: 100%;
        height: auto;
    }
    .btn{
        background: white;
        outline:none;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display:block;
        position: absolute;
        z-index:1000;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items:center ;
    }
    .icons{
        width: 15px;
    }
    .btn-left{
        top:50%;
        left:5px;
        transform: translateY(-50%)
    }
     .btn-right{
        top:50%;
        right:5px;
        transform: translateY(-50%)
    }
</style>