<template>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
export default {
  mounted() {
    const auth = getAuth(this.$firebase)
    onAuthStateChanged(auth, (user) => {
      if(user) {
        this.$store.commit('auth/setLoginState', user !== null)
      } else {
        this.$router.push('/auth/login')
      }
    })
  }
}
</script>
