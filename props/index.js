Vue.component('player', {
    props:['nbaplayer'],
    template:' <div><div v-html="nbaplayer.title"></div><h4>{{nbaplayer.title}}</h4></div>'
})



var app = new Vue({
    el:'#app',
    data:{
        players:[{title:"kobe"},{title:"lebron"},{titlename:"iverson"}]
    }
})


