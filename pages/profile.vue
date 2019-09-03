//프로필
<template>
    <div>
        <v-container grid-list-xs>
            <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs>
                    <v-subheader>내 프로필</v-subheader>
                    <v-form v-model="valid" @submit.prevent="onChangeNickname">
                        <v-text-field
                            label="닉네임"
                            v-model="nickname"
                            :rules="nicknameRules"
                            required
                        ></v-text-field>
                    <v-btn color="blue" type="submit">수정</v-btn>
                    </v-form>
                </v-container>
            </v-card>
             <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs>
                    <v-subheader>팔로잉</v-subheader>
                    <follow-list  :users="followingList" :remove="removeFollowing"/>
                    <v-btn v-if="hasMoreFollowing" @click="loadMoreFollowings" dark color="blue" style="width=100%">더보기</v-btn>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs>
                    <v-subheader>팔로워</v-subheader>
                    <follow-list  :users="followerList" :remove="removeFollower"/>
                    <v-btn v-if="hasMoreFollower" @click="loadMoreFollowers" dark color="blue" style="width=100%">더보기</v-btn>
                </v-container>
            </v-card> 
        </v-container>
    </div>
</template>
<script>
import FollowList from '~/components/FollowList'

export default {
    // layout : 'admin',
    components :{
        FollowList,
    },
    computed:{
      followerList(){
        return this.$store.state.users.followerList;
      },
      followingList(){
        return this.$store.state.users.followingList;
      },
      hasMoreFollowing(){
        return this.$store.state.users.hasMoreFollowing;
      },
      hasMoreFollower(){
        return this.$store.state.users.hasMoreFollower;
      },
    },
    data(){
        return {
            valid : false,
            nickname : '',
            nicknameRules : [
                v=> !!v || '닉네임을 입력하셔야합니다.',
            ]
        }
    },
    fetch({store}){
        store.dispatch('users/loadFollowers');
        store.dispatch('users/loadFollowings');
    },
    methods :{
        onChangeNickname(){
            this.$store.dispatch('users/changeNickname',{
                nickname : this.nickname
            })
        },
        removeFollower(id){
            this.$store.dispatch('users/removeFollower',{id})
        },
        removeFollowing(id){
             this.$store.dispatch('users/removeFollowing',{id})
        },
        loadMoreFollowings(){
             this.$store.dispatch('users/loadFollowings')
        },
        loadMoreFollowers(){
             this.$store.dispatch('users/loadFollowers')
        }
    },
    head() {
        return {
            title : '프로필'
        }
    },
    middleware : 'authenticated',
}
</script>
<style scoped>

</style>