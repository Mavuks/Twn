<template>
<article>
  <h2>nimekiri</h2>
  <div>
     <table>
      <thead >
            <tr>
              <th @click="sort('firstname')" v-bind:class="[currentSort === 'firstname' ? currentSortDir : '']">Eesnimi</th>
              <th @click="sort('surname')" v-bind:class="[currentSort === 'surname' ? currentSortDir : '']">Perekonnanimi</th>
              <th @click="sort('sex')" v-bind:class="[currentSort === 'sex' ? currentSortDir : '']">sugu</th>
              <th @click="sort('personal_code')" v-bind:class="[currentSort === 'personal_code' ? currentSortDir : '']">Sünnikuupäev</th>
              <th @click="sort('phone')" v-bind:class="[currentSort === 'phone' ? currentSortDir : '']">telefon</th>
            </tr>
      </thead>
          <details-view v-for="(lit, index) in sortedProducts" :key= index :detailsview="lit" 
          :isSelected="selectedItem" @click.native="handleClick(lit)"/>
     
   </table>
      <p>
    <button class="next round" @click="prevPage">&#8249;</button> 
    <span> {{currentPage}} of {{totalPages}} </span>
    <button class="next round" @click="nextPage">&#8250;</button>
    </p>
    
  </div>
    
  
</article>
</template>

<script>
import twnService from '../service/twnService';
import detailsView from './listDetailView.vue';


export default {


    name: 'Article',


    data(){
      return{
        selectedItem: null,
        list: [],
        currentSort: '',
        currentSortDir: 'asc',
        pageSize: 10,
        currentPage: 1,
        clickedItem:"",
        pages: 0,
        
     
        

      };
    },
    components:{
       detailsView
    },
    computed: {
                  sortedProducts: function(){
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                return this.list.sort((p1,p2) => {
                    let modifier = 1;
                    if(this.currentSortDir === 'desc') modifier = -1;
                    if(p1[this.currentSort] < p2[this.currentSort]) return -1 * modifier;
                    if(p1[this.currentSort] > p2[this.currentSort]) return 1 * modifier;
                    return 0;
                }).filter((row, index) => {
                  let start = (this.currentPage-1)*this.pageSize;
                  let end = this.currentPage*this.pageSize;
                  if(index >= start && index < end) return true;
                })
            },

            totalPages: function(){
              return this.list.length/this.pageSize;
              

            }
        },


  methods:{
    //Get Päring listi objektide saamiseks
    getArticle(){
      twnService.getList()
      .then(response =>{
        this.list = response.data.list;
      })
      .catch(e=>{
        console.log(e)
      });
    },

          nextPage:function() {
        if((this.currentPage*this.pageSize) < this.list.length) this.currentPage++;
      },
      prevPage:function() {
        if(this.currentPage > 1) this.currentPage--;
      },

    getClickedItem(value){
      this.clickedItem = value;
      

    },

    

    handleClick(item){
      if(this.selectedItem != item){
        this.selectedItem = item;
      }else{
        this.selectedItem = '';
      }
    },


 
    sort:function(s) {
    
    if(s === this.currentSort) {
      this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    }
    this.currentSort = s;
  },
   


  },

  mounted(){
    this.getArticle();
  },

} 
</script>

<style >

  .asc:after{
            content: "\25B2"
        }

        .desc:after{
            content: "\25BC"
        }

  .next {
  background-color: #ff57a2;
  color: white;
}

.round {
  padding: 8px;
  border-radius: 50%;
}

table{
  
    border-spacing: 0;
    table-layout: fixed;  
    text-align: left;  
    padding-right: 30px;
}
        

th{
    font-family: Booster;
    color: #ff57a2;
    text-transform: uppercase;
    font-weight: 900;
    text-align: left;
    
    width: 820px;
}
td{
  padding: 10px;
    border-bottom: 1px solid #ccc;
    text-align: left;
    cursor: pointer;
}



h2{
  max-width: 1200px;
  padding-right: 40px;
  margin: 60px 0;
  font-family: Booster;
  text-transform: uppercase;
  padding-bottom: 30px;

  font-weight: 700;
    font-size: 58px;
    color: #14cc76;
    text-align: center;
} 

</style>