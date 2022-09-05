<template>
    <div>
        <pre>{{ hotelInfo }}</pre>
    </div>    
</template>

<script>
export default{
    data: function(){
        return{
            hotelInfo: {},
        }
    },
    mounted() {
        this.hotelInfo = JSON.parse(decodeURIComponent(this.$route.query.name));
        console.log(this.hotelInfo);
    },
}
</script> 