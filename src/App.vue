<template>
<body class="asd" >
  <div id="page-wrapper">
    <div class="page-container">
      <menu> <NavBar/></menu>
      <div class="page-content">
        <router-view/>
      </div>
    </div>


  </div>
</body>
</template>

<script>

import NavBar from '../src/components/nav/navBar'

export default {
  name: 'App',
  components:{
    NavBar
  },


}
</script>

<style>


body{
  line-height: 1;

}

 
 menu{
   width: 300px;
   flex-shrink: 0;
    flex-grow: 0;
  
 }
 .asd{
   background: #3A3D57;
   min-height: 100vh;
  background-image: url(http://proovitoo.twn.ee/assets/imgs/bg-deco-left.svg),url(http://proovitoo.twn.ee/assets/imgs/bg-deco-right.svg);
    background-repeat: no-repeat;
    background-position: left bottom,right top;
    background-size: 150px,250px;
    background-attachment: fixed;
    
 

 }

#page-wrapper {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  
   margin: 0 auto;
   
  max-width: 1200px;
  
  display: flex;
  
  flex-direction: column;
  background: #efefef;
    
}

.page-container{
  
  
  display: flex;
  background: #efefef;
  padding: 60px 0;
  flex-grow: 1;

}

.page-contant{
  padding: 0 60px;
  position: relative;
  flex-grow: 1;
}
</style>
