<template>
  <v-list-item-group>
    <ul>
      <li v-for="f in fList" :key="f.id">
        <span>{{f.nickname}}</span>
        <v-icon @click="removeFollow(followType,f.id)">mdi-minus-circle-outline</v-icon>
      </li>
    </ul>
  </v-list-item-group>
</template>

<script>
export default {
    props : {
      fList : {
        type: Array,
        required : true,
      },
      followType :{
        type : String,
        required : true,
      }
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