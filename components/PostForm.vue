<template>
    <v-card style="margin-bottom:20px">
        <v-container grid-list-xs>
            <v-form
                ref="form" 
                v-model="valid"
                @submit.prevent="onSubmitForm" 
            >
                <v-textarea 
                    outlined
                    auto-grow
                    clearable
                    v-model="content"
                    label="어떤 신기한 일이 있었나요?"
                    :hide-details="hideDetails"
                    :success="success"
                    :success-messages="successMessages"
                     :rules="[v => !!v.trim() || '내용을 입력하세요.']"
                    @input="onChangeTextarea"
                />
                <v-btn color="green" type="submit" absolute right>찍찍</v-btn>
                <v-btn>이미지 업로드</v-btn>
            </v-form>            
        </v-container>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            hideDetails : false,
            successMessages : '',
            success : false,
            valid : false,
            content: '',
        }
    },
    computed : {
        ...mapState('users',['me']),
    },
    methods:{
        onChangeTextarea(value){
            if(value.length){
                this.hideDetails  = true;
                this.success = false;
                this.successMessages = '';
            }
        },
        onSubmitForm(){
            if(this.$refs.form.validate()){
                this.$store.dispatch('posts/add',{
                    content : this.content,
                    User : {
                        nickname : this.me.nickname,
                    },
                    Comments :[],
                    Images : [],
                    id : Date.now(),
                    createdAt : Date.now(),
                })
                .then(() => {
                    this.content = '';
                    this.hideDetails = false;
                    this.success = true;
                    this.successMessages = '게시글 등록 성공!';
                })
                .catch(() => {
                    alert("에러 발생!")
                });
            }
        }
    }
}
</script>