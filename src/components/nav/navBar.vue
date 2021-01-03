<template>
<div>
    <div >
        <a href="/list" class="logo"> <img src="https://www.twn.ee/wp-content/uploads/2018/01/menu-logo-blue.svg" alt=""></a>
    </div>
    <div class="menu">
        <ul><router-link to="/list" exact class="menu"> NimeKiri</router-link></ul>
        <ul><router-link to="/article" class="menu"> Artikkel</router-link></ul>
        
    </div>
</div>    
</template>

<style scoped>

.logo{
    display: block;
    text-align: center;
    color: #333;
    text-decoration: none;
    font-style: italic;
    width:100%;
    margin: 0 auto 20px;
    padding: 0 35px;
    padding-left: 15px;

}
.router-link-exact-active  {
    color: green;
    font-weight: 700;
}

.menu{
   text-decoration: none!important;
   
}
ul{
    display: block;
    font: inherit;
    line-height: 120%;
    
    position: relative;
    text-align: right;
    overflow: hidden;
    font-size: 24px;
    padding: 15px 35px;
    text-transform: uppercase;
    
    
}

</style>