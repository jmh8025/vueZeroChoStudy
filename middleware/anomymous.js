export default function({store,redirect}){
    if(store.state.users.me){
        alert("권한이 없습니다.");
        redirect('/');
    }
}