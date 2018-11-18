Vue.component('player', {
    props:['nbaplayer'],
    template:`  <div><button v-on:click="$emit('welcome',0.1)">Click me to be welcomed</button>
        {{nbaplayer.title}}
    </div> `
})



var app = new Vue({
    el:'#app',
    data:{
        players:[{title:"kobe"},{title:"lebron"},{title:"iverson"}],
        postFontSize: 1
    },
  
})


