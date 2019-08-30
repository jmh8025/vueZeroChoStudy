<template>
  <v-list-item-group>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{user.nickname}}</span>
        <v-icon @click="remove(user.id)">mdi-minus-circle-outline</v-icon>
      </li>
    </ul>
  </v-list-item-group>
</template>

<script>
export default {
    props : {
      users :{
        type : Array,
        required : true,
      },
      remove : {
        type : Function,
        required : true,
      }
    },
    computed: {
    },
    methods :{
      removeFollow(followType,id){
        console.log(`type:${followType}, id:${id}`)
        this.$store.dispatch('users/removeFollow',{
          type : followType,
          id : id,
        })
        .then(() => {
          alert('삭제가 완료되었습니다.');
        })
        .catch(()=> {
          alert('에러가 발생했습니다.');
        })
      }
    }
}
</script>

<style>

</style>