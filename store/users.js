function makeFollowList(){
    let nicknameList = ['쓰리초','투초','원초','제로초'];
    let result = [];
    let list = {};
    for(let i = 0; i < nicknameList.length; i++){
        list = {};
        list.nickname = nicknameList[i];
        list.id = nicknameList[i]+Math.floor(Math.random() * 1000) + 1;
        result.push(list);
    }
    return result;
}

export const state = () => ({
    me : null,
    followerList :makeFollowList(),
    followingList : makeFollowList(),
})

export const mutations = {
    setMe(state, payload){
        state.me = payload;
    },
    changeNickname(state,payload){
        state.me.nickname = payload.nickname;
    },
    removeFollowing(state,payload){
        const index = state.followingList.findIndex(v => v.id === payload.id);
        state.followingList.splice(index,1);
    },
    removeFollower(state,payload){
        const index = state.followerList.findIndex(v => v.id === payload.id);
        state.followerList.splice(index,1);
    },
}

//비동기 작업을 위한거임
export const actions = {
    // context : commit,dispatch, state,rootState,getters, rootGetters
    //signUp(context,payload) {
    signUp({commit},payload) {
        // 서버에 회원가입 요청을 보내는 부분
        commit('setMe',payload);
    },
    logIn({commit},payload) {
        commit('setMe',payload);
    },
    logOut({commit}) {
        commit('setMe',null);
    },
    changeNickname({commit},payload){
        commit('setMe',payload);
    },
    removeFollow({commit},payload){
        if(payload.type === 'following'){
            commit('removeFollowing',payload);
        }else if(payload.type === 'follower'){
            commit('removeFollower',payload);
        }
    }

}