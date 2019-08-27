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
                    <follow-list :fList="followingList" :followType="'following'"/>
                </v-container>
            </v-card>
            <v-card style="margin-bottom: 20px">
                <v-container grid-list-xs>
                    <v-subheader>팔로워</v-subheader>
                    <follow-list :fList="followerList" :followType="'follower'"/>
                </v-container>
            </v-card> 
        </v-container>
    </div>
</template>
<script>
import FollowList from '~/components/FollowList'
import { mapState } from 'vuex';

export default {
    // layout : 'admin',
    components :{
        FollowList,
    },
    computed:{
            ...mapState('users',['followerList','followingList']),
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
    methods :{
        onChangeNickname(){
            this.$store.dispatch('users/changeNickname',{
                nickname : this.nickname
            })
        },
    },
    head() {
        return {
            title : '프로필'
        }
    },
}
</script>
<style scoped>

</style>