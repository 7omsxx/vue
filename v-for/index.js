var app = new Vue({
    el:"#app",
    data:{
        message:"i miss u ",
        todos:[
            {text:"i like java"},
            {text:"i love java"},
            {text:"i love u "}
        ],
        show:true
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
 
   
})