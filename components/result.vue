<template>
    <div class="hotel-detail">
        <pre>{{ hotelInfoBasic }}</pre>
        <pre>{{ hotelInfoRating }}</pre>

        <div class="hotel-detail__name">
            {{ hotelInfoBasic.hotelName }}<br>
            {{ hotelInfoBasic.hotelKanaName }}
        </div>
        <div class="hotel-detail__address">
            {{ hotelInfoBasic.address1 }}{{ hotelInfoBasic.address2 }}
        </div>

        <div class="hotel-detail__contents">
            <div class="hotel-detail__contents-image">
                <img v-bind:src="hotelInfoBasicImage">
            </div>
            <div class="hotel-detail__contents-content">
                <p class="special-text">{{ hotelInfoBasic.hotelSpecial }}</p>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data: function(){
        return{
            hotelInfo: {},
            hotelInfoBasic: {},
            hotelInfoRating:{}, 
            hotelInfoBasicImage:"",
        }
    },
    mounted() {
        this.hotelInfo = JSON.parse(decodeURIComponent(this.$route.query.name));
        console.log(this.hotelInfo);
        this.hotelInfoBasic = this.hotelInfo.hotel[0].hotelBasicInfo
        this.hotelInfoBasicImage = this.hotelInfo.hotel[0].hotelBasicInfo.hotelImageUrl
        this.hotelInfoRating = this.hotelInfo.hotel[1].hotelRatingInfo
    },
    method: {
    }
}
</script> 

<style lang="scss">
.hotel-detail__contents{
    display: flex;

    &-image{
        width: 40%;
    }
    &-content{
        width: 60%;
    }
}
</style>