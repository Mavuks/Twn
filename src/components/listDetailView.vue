<template>
    
       <tbody>
        <tr :class="isSelected == detailsview && isSelected != null ? 'rowcover' : 'detailsrow'">
          <td >{{detailsview.firstname}}</td>
          <td>{{detailsview.surname}}</td>
          <td>{{detailsview.sex | sex}}</td>
          <td>{{detailsview.personal_code | birthDate}}</td>
          <td>{{detailsview.phone}}</td>
        </tr>
        <tr>
        <td colspan="10" class="details" :class="isSelected == detailsview && isSelected != null ? 'expanded' : 'vanish'">
             
                <li class="person_info" >
                    <div>
                        <img :src="detailsview.images[0].small">
                    </div>
                
                    <div class="content" v-html="detailsview.intro" />
                </li>
         </td>
         </tr>
      </tbody>

</template>

<script>

export default {
    props:{
        detailsview: {},
        isSelected:{}
},


  filters:
  {
    sex: function  (value){
      if(value == "f"){
          return "Naine";
      }else{
        return "Mees"
      }
    },
  
  birthDate: function (value){
    var year= 0;
    var month = value.toString().substring(3,5);
    var day = value.toString().substring(5,7);
    var birthYear = value.toString().substring(1,3)

    if(value.toString().length != 11){
      return false;
    }
    
    switch(value.toString().substring(0,1)){
      case '1':
        case '2':
            {
                year = parseInt(1800);
                break;
            }
        case '3':
        case '4':
            {
                year = parseInt(1900);
                break;
            }
        case '5':
        case '6':
            {
                year =parseInt(2000) ;
                break;
            }
        default:
            {               
                return false;
            } 
    }
    var y = parseInt(birthYear);
    var p = year + y;
    

    return p  + "." + month + "." +day;
  },
},
    

}
  
</script>
<style scoped>

.rowcover{
  background: #ff57a2;
  color: white;
  cursor: pointer;

}

 img{
width: 150px;
height: auto;

} 

.detailsrow:hover{
  color:#ff57a2;
}
.expanded{
    
    width: auto;
    height: 100px;
    column-span: all;
    border-bottom: 1px solid #ccc;
}
.vanish{
  display:none;
  
}
.content{
        font-size: 16px;
        padding-left: 10px;
        display: inline;
        width: 450px;
        text-overflow: ellipsis;
        overflow: hidden; 
 
        
         
}
tr{
  display: table-row;

}

.person_info{
  padding-top: 10px;
  padding-bottom: 10px;
    overflow: hidden;
    width: auto;
    display: flex;
    position: relative;
    height: 115px;
       
}

</style>
