<template>
<article>
  <h2>{{title}}</h2>
  <div class="intro">
    <p>
     <span v-html="intro" ></span>
    </p>
  </div>
  <div class="image">
    <div class="image_wrapper" >
      <img :src="images_medium">
    </div>

  </div>
  <div class="text">
    <p>
      <span v-html="body"></span>

    </p>
  </div>
  
  <div>
    <ul v-for="(tag, index) in tags" :key="index">
      <li>
        <span>{{ tag}}</span>
      </li>


    </ul>

  </div>
  
  

  



</article>
</template>

<script>
import twnService from '../service/twnService';

export default {
    name: 'Article',


    data(){
      return{
        article: [],
        tags: [],
        images_medium: '',
        body: "",
        title: "",
        intro: ""


      };
    },

  methods:{
    getArticle(){
      twnService.getArticle()
      .then(response =>{
        this.article = response.data;
        this.tags = response.data.tags;
        this.title = response.data.title;
        this.body = response.data.body;
        this.intro = response.data.intro;
        this.images_medium = response.data.images[0].medium;

        console.log(this.images_medium);
       

        
     
      })
      .catch(e=>{
        console.log(e)
      });
    },


  },

  mounted(){
    this.getArticle();
  }
}
</script>

<style scoped>



ul li{
    display: inline-block;
    list-style-type: none;
    padding: 5px 10px;
    color: #fff;
    background: #ff57a2;
    border-radius: 99px;
    margin-right: 10px;
    list-style-position: outside;
    float: left;

}

h2{

  padding-right: 40px;
  margin: 60px 0;
  font-family: Booster;
  text-transform: uppercase;

  font-weight: 700;
    font-size: 48px;
    color: #14cc76;
    text-align: center;
}
.intro p{
    padding-left: 40px;
    padding-right: 40px;
      line-height: 150%;
    font-size: 24px;
    text-align: left;
    font-weight: 900;
        display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.image img{
    height: auto;
    width: 90%;
    

}
.text{
  padding-left: 45px;
  text-align: left;
   line-height: 150%;
   padding-right: 40px;
    font-size: 24px;
}


</style>