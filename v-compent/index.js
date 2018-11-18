Vue.component("todo-item",{
    props:['todo'],
    template:"<li>{{todo.text}}"
})
var app = new Vue({
    el:"#app",
    data:{
        message:"i miss u ",
        todos:[
            {text:"i like java"},
            {text:"i love java"},
            {text:"i love u "}
        ],
        vagetables:[
            {id:1,text:"001"},
            {id:2,text:"002"},
            {id:3,text:"003"}
        ],
        show:true
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
 
   
})

