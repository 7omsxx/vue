Vue.component('player', {
    props:['nbaplayer'],
    template:`  <div><button v-on:click="$emit('enlarge-text', 0.1)">
                 Enlarge text
                    </button>
                 </div>
                 `
})



var app = new Vue({
    el:'#app',
    data:{
        players:[{title:"kobe"},{title:"lebron"},{title:"iverson"}],
        postFontSize: 1
    },
  
})


