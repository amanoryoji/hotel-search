<template>
    <div>
        <pre>{{ info }}</pre>
        <p>{{ confirm }}</p>
    </div>    
</template>


<script>
export default{
    data: function(){
        return{
            info: "",
        }
    },
    created() {
        this.info = decodeURIComponent(this.$route.query.name)
    },
    computed:{
        confirm(){
            console.log(this.info.hotelNo)
        }
    }
}
</script> 