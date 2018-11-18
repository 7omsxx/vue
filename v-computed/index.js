Vue.component("todo-item",{
    props:['todo'],
    template:"<li>{{todo.text}}"
})


var vm = new Vue({
    el: '#example',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    }
  })
var app = new Vue({
    el:"#app",
    data:{
        message:"i miss u ",
        message2:"where are you now",
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
        reverseMessage: function(){
            this.message = this.message.split("").reverse().join("");
        }
    },
    computed:{
        reverseMessage2: function () {
            return this.message2.split("").reverse().join("")
        }
    },
    computed: {
        now: function () {
          return Date.now()
        }
      }

   
})

