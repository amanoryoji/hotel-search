<template>
    <div class="auth">
        <div class="auth-container">
            <h1 class="auth-title">ログイン</h1>
            <p class="auth-text">以下に登録したメールアドレスと<br>パスワードを入力してください。</p>
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
            <button v-on:click="login" class="button">ログイン</button>
            <div class="auth-link">
                <span>アカウントをお持ちではないですか？</span>
                <nuxt-link to="./register">会員登録ページ</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        login() {
            this.$store.dispatch('auth/login', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>