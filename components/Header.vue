<template>
    <div class="header">
        <div class="header-inner">
            <h1 class="header-title">
                <a href="/">TravelSearch</a>
            </h1>
            <div v-if="isLogin" v-on:click="logout" class="header-link">
                ログアウト
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isLogin() {
            return this.$store.state.auth.isLoggedIn
        }
    },
    methods:{
        logout() {
            this.$store.dispatch('auth/logout')
        }
    }
}
</script>