<template>
    <div class="hotel-detail">
        <p>画像のところはスライダーで表示すること</p>
        <pre>{{ hotelInfoBasic }}</pre>
        <pre>{{ hotelInfoRating }}</pre>

        <div class="hotel-detail__name">
            {{ hotelInfoBasic.hotelName }}
        </div>
        <div class="hotel-detail__address">
            {{ hotelInfoBasic.address1 }}
            {{ hotelInfoBasic.address2 }}
        </div>
    </div>    
</template>

<script>
export default {
    data: function(){
        return{
            hotelInfo: {},
            hotelInfoBasic: {},
            hotelInfoRating:{}    
        }
    },
    mounted() {
        this.hotelInfo = JSON.parse(decodeURIComponent(this.$route.query.name));
        console.log(this.hotelInfo);
        this.hotelInfoBasic = this.hotelInfo.hotel[0].hotelBasicInfo
        this.hotelInfoRating = this.hotelInfo.hotel[1].hotelRatingInfo
    },
}
</script> 