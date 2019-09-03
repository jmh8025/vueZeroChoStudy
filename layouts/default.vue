<template>
    <v-app>
        <nav>
            <v-toolbar dark color="red">
                <v-toolbar-title>
                    <nuxt-link to="/">
                        <v-img src="https://kw.mncapro.com/upload/eems/logo/sookmyung_m.ac.kr/2019/99/logo.png" width="70%" height="70%"></v-img>
                    </nuxt-link>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-form @submit.prevent="onSearchHashtag">
                        <v-text-field 
                            v-model="hashtag"
                            label="검색" 
                            hide-details 
                            prepend-icon="mdi-magnify" 
                            :style="{display:'flex', alignItems:'center', height :'100%'}" 
                        />
                    </v-form>
                    <v-btn text nuxt to="/profile" :style="{display:'flex', alignItems:'center'}">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup" :style="{display:'flex', alignItems:'center'}">
                        <div>회원가입</div>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
        </nav>
        <v-row>
            <v-col cols="12" md="4">
                <login-form/>
            </v-col>
            <v-col cols="12" md="8">
                <nuxt/>
            </v-col>
        </v-row>
    </v-app>
</template>
<script>
import 'vuetify/dist/vuetify.min.css'
import LoginForm from '~/components/LoginForm';
export default {
    components:{
        LoginForm,
    },
    data(){
        return{
            hashtag : '',
        }
    },
    computed : {
    },
    methods :{
        onSearchHashtag(){
            console.log("2222222222222222",this.hashtag);
            this.$router.push({
                path : `/hashtag/${this.hashtag}`,
            })
            this.hashtag = '';
        }
    }
}

</script>
<style scoped>
a{
    display: inline-block;
    text-decoration : none;
    color : inherit;
}
</style>