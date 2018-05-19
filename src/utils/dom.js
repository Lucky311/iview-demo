import Vue from 'vue';

export default function getData(commit,payload){
    return (
        Vue.prototype.axios("/api/chat/getchatmsg").then(res=>{
            console.log(res.data.jiachunhua)
            const msgs = res.data.jiachunhua;
            commit('changeMsg',{msgs})
            if(msgs == ""){
                console.log("res.data.jiachunhua")
                getData(commit,payload)
            }else{
                getData(commit,payload)
                
            }
            
        })
    )
}