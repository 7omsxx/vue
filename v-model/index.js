Vue.component('custom-input',{
    props:['value'],
    template:` <div>
                    <input v-bind:value="value" v-on:input="$emit('input',$event.target.value)">            
    </div>`
})


var app = new Vue({
    el:"#app",
    data:{
        searchText:"123123"
    }
})