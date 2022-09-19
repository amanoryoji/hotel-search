<template>
    <div class="auth">
        <div class="auth-container">
            <h1 class="auth-title">会員登録</h1>
            <p class="auth-text">以下に登録するメールアドレスと<br>パスワードを入力してください。</p>
            <div class="auth-row">
                <label for="email">メールアドレス</label>
                <input 
                type="email"
                placeholder="email"
                v-model="email"
                >
            </div>
            <div class="auth-row">
                <label for="password">パスワード</label>
                <input 
                type="password"
                placeholder="password"
                v-model="password"
                >
            </div>
            <button v-on:click="signUp" class="button">登録する</button>
            <div class="auth-link">
                <span>アカウントをお持ちですか？</span>
                <nuxt-link to="./login">ログインページ</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
export default{
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        signUp() {
            const auth = getAuth(this.$firebase)
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then( userCredential => {
                // console.log( userCredential.user )
                this.$router.push('/')   
            })
            .catch( e => {
                alert('エラーが発生しました。')
            })
        }
    }
}
</script>