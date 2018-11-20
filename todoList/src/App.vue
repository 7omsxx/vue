<template>
  <div id="app">
     <h1> <span v-html="title">
      </span>  
     </h1>  
     <input v-model="newItem" v-on:keyup.enter="addNew">
     <ul>
          <li v-for="item in items" v-bind:key="item.label" :class="{isFinished:item.isFinished,liClassStyle:true}"
          @click="toggleFinish(item)">
              {{item.label}}
          </li>
     </ul>
  </div>
</template>

<script>
import Store from './store'
console.log(Store)
export default {
  name: 'App',
  data(){
    return {
      title:"<span>this is a todoList<span>",
      items:Store.fetch(),
      liClass:"liClassStyle",
      newItem:""
    }
  },
  methods:{
    toggleFinish:function(item){
      console.log(item)
          item.isFinished=!item.isFinished;
    },
    addNew:function(){
      console.log(this.newItem);
      var item = {label:this.newItem,isFinished:false};
      this.items.push(item);
       this.newItem = "";
    }
  },
  watch:{
    items:{
      handler:function(items){
        Store.save(items)
      },
      deep:true
    }
  }
}
</script>

<style>
.isFinished{
  text-decoration:underline;
  text-decoration-color: aquamarine
  }
.liClassStyle{
width: 200px;
margin-left: 400px;
font-size:2em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
