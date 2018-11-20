const localkey = "todoListjs"

export default {
    fetch:function(){
        return JSON.parse(window.localStorage.getItem(localkey) || '[]')
    },
    save (items){
        window.localStorage.setItem(localkey,JSON.stringify(items))
    }
}