<template>
    <div class="hotel-detail">
        <div class="hotel-detail__inner">
            <!-- <pre>{{ hotelInfo }}</pre> -->

            <div class="hotel-detail__name">
                <span>{{ hotelInfoBasic.hotelName }}</span>の詳細情報<br>
                {{ hotelInfoBasic.hotelKanaName }}
            </div>

            <div class="hotel-detail__contents">
                <div class="hotel-detail__contents-image">
                    <img v-bind:src="hotelInfoBasicImage">
                </div>
                <div class="hotel-detail__contents-content">
                    <p class="hotel-detail__contents-content-area">
                        {{ hotelInfoBasic.address1 }} <span>></span> {{ hotelInfoBasic.nearestStation }}
                    </p>
                    <table>
                        <tbody>
                            <tr class="price">
                                <th>最安料金</th>
                                <td><span>{{ hotelInfoBasic.hotelMinCharge }}</span>円〜</td>
                            </tr>
                            <tr class="review">
                                <th>評価</th>
                                <td>★<span>{{ hotelInfoBasic.reviewAverage }}</span> / お客様の声：<span>{{ hotelInfoBasic.reviewCount }}</span>件</td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="hotel-detail__contents-content-text">{{ hotelInfoBasic.hotelSpecial }}</p>
                </div>
            </div>
            <div class="hotel-detail__description">
                <div class="hotel-detail__description-title">
                    <span></span>基本情報
                </div>

                <div class="hotel-detail__description-content">
                    <div class="hotel-detail__description-content-title">アクセス・パーキング</div>
                    <table class="hotel-detail__description-content-table">
                        <tbody>
                            <tr>
                                <th>エリア</th>
                                <td>
                                    {{ hotelInfoBasic.address1 }}{{ hotelInfoBasic.address2 }}<a v-bind:href="hotelInfoBasicMap">地図を見る</a>
                                </td>
                            </tr>
                            <tr>
                                <th>最寄り駅</th>
                                <td>{{ hotelInfoBasic.nearestStation }}駅</td>
                            </tr>
                            <tr>
                                <th>アクセス</th>
                                <td>{{ hotelInfoBasic.access }}</td>
                            </tr>
                            <tr>
                                <th>駐車場</th>
                                <td>{{ hotelInfoBasic.parkingInformation }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="hotel-detail__description-content">
                    <div class="hotel-detail__description-content-title">プラン詳細</div>
                    <table class="hotel-detail__description-content-table">
                        <tbody>
                            <tr>
                                <th>プラン名</th>
                                <td>{{ hotelInfoRoom.planName }}</td>
                            </tr>
                            <tr>
                                <th>部屋名称</th>
                                <td>{{ hotelInfoRoom.roomName }}</td>
                            </tr>
                            <tr>
                                <th>チェックイン</th>
                                <td>{{ hotelInfoCharge.stayDate }}</td>
                            </tr>
                            <tr>
                                <th>1泊あたりの料金</th>
                                <td>{{ hotelInfoCharge.total }}円</td>
                            </tr>
                            <tr>
                                <th>決済方法</th>
                                <td>{{ payment }}</td>
                            </tr>
                            <tr>
                                <th>夕食有無</th>
                                <td>{{ dinner }}</td>
                            </tr>
                            <tr>
                                <th>朝食有無</th>
                                <td>{{ breakFast }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
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
            hotelInfoBasicMap:"",
            hotelInfoRoom: {},
            hotelInfoCharge: "",
            hotelInfoPayment: "",
            hotelInfoDinner: "",
            hotelInfoBreak: ""
        }
    },
    mounted() {
        this.hotelInfo = JSON.parse(decodeURIComponent(this.$route.query.name));
        this.hotelInfoBasic = this.hotelInfo.hotel[0].hotelBasicInfo;
        this.hotelInfoBasicImage = this.hotelInfo.hotel[0].hotelBasicInfo.hotelImageUrl;
        this.hotelInfoBasicMap = this.hotelInfo.hotel[0].hotelBasicInfo.hotelMapImageUrl;
        this.hotelInfoRoom = this.hotelInfo.hotel[1].roomInfo[0].roomBasicInfo;
        this.hotelInfoDinner = this.hotelInfo.hotel[1].roomInfo[0].roomBasicInfo.withDinnerFlag;
        this.hotelInfoBreak = this.hotelInfo.hotel[1].roomInfo[0].roomBasicInfo.withBreakfastFlag;
        this.hotelInfoPayment = this.hotelInfo.hotel[1].roomInfo[0].roomBasicInfo.payment;
        this.hotelInfoCharge = this.hotelInfo.hotel[1].roomInfo[1].dailyCharge
    },
    computed: {
        payment: function() {
            if(this.hotelInfoPayment == 0) {
                return '現金'
            } else if(this.hotelInfoPayment == 1) {
                return 'クレジットカード / 現金'
            } else { return 'クレジットカード'}
        },
        dinner: function() {
            if(this.hotelInfoDinner == 0) {
                return '夕食無し';
            } else { return '夕食有り'}
        },
        breakFast: function() {
            if(this.hotelInfoBreak == 0) {
                return '朝食無し'
            } else { return '朝食有り'}
        }
    },
}
</script> 

<style lang="scss">
.hotel-detail{
    
    &__inner{
        padding: 50px 100px;

        @media screen and (max-width: 1200px) {
            padding: 50px 20px;
        }

        .hotel-detail__name{
            margin-bottom: 20px;

            @media screen and (max-width: 768px) {
                line-height: 1.2;
            }

            span{
                font-size: 180%;
                font-weight: 700;
                color: #285e97;
            }
        }

        .hotel-detail__contents{
            display: flex;
            align-items: center;
            padding: 0 0 20px;
            border-bottom: 3px solid #ccc;
            margin-bottom: 40px;

            @media screen and (max-width: 768px) {
                display: block;
            }

            &-image{
                width: 40%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    margin-bottom: 20px;
                }

                img{
                    object-fit: contain;
                }
            }

            &-content{
                width: 55%;
                margin-left: 5%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                    margin-left: 0;
                }

                &-area{
                    margin-bottom: 20px;

                    span{
                        color: #999;
                        font-weight: 700;
                    }
                }

                table{
                    width: 100%;
                    margin-bottom: 40px;

                    tr{
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;

                        &:nth-of-type(2){
                            margin-bottom: 0;
                        }

                        th{
                            display: inline-block;
                            width: 15%;
                            padding: 5px;
                            margin-right: 5%;
                            text-align: center;

                            @media screen and (max-width: 768px) {
                                width: 25%;
                                margin-right: 2%;
                            }
                        }

                        td{
                            display: block;
                            width: calc(100% - 20%);

                            @media screen and (max-width: 768px) {
                                width: calc(100% - 25%);
                            }
                        }

                        &.price{

                            th{
                                background-color: #eee;
                            }

                            td{
                                span{
                                    font-size: 25px;
                                    color: #f00;
                                }
                            }
                        }

                        &.review{

                            th{
                                background-color: #ffe88c;
                            }

                            td{
                                
                                span{
                                    font-size: 25px;
                                    color: #ff5a00;
                                }
                            }
                        }
                   }
                }

                &-text{
                    line-height: 1.8;
                    font-size: 20px;
                    
                    @media screen and (max-width: 768px) {
                        font-size: 15px;
                    }
                }
            }
        }

        .hotel-detail__description{

            &-title{
                display: flex;
                align-items: center;
                margin-bottom: 30px;
                font-size: 1.8rem;
                font-weight: bold;

                @media screen and (max-width: 768px) {
                    margin-bottom: 20px;
                    font-size: 20px;
                }

                span{
                    display: block;
                    width: 25px;
                    height: 25px;
                    margin-right: 10px;
                    background-color: #00bebc;

                    @media screen and (max-width: 768px) {
                        width: 15px;
                        height: 15px;
                    }

                }
            }

            &-content{
                margin-bottom: 50px;

                @media screen and (max-width: 768px) {
                    margin-bottom: 30px;
                }

                &:last-of-type{
                    margin-bottom: 0;
                }

                &-title{
                    background-color: #cceeee;
                    font-weight: bold;
                    padding: 10px;
                    margin-bottom: 5px;
                }

                &-table{
                    width: 100%;

                    tr{
                        display: flex;
                        padding: 15px 0;
                        border-bottom: 0.1px solid #c0c0c0;
                        
                        &:last-of-type{
                            border-bottom: none;
                        }

                        th{
                            display: block;
                            width: 15%;
                            text-align: left;
                            padding-left: 10px;
                            box-sizing: border-box;

                            @media screen and (max-width: 768px) {
                                width: 30%;
                                margin-right: 5%;
                            }
                        }

                        td{
                            display: block;
                            width: calc(100% - 15%);

                            @media screen and (max-width: 768px) {
                                width: calc(100% - 35%);
                            }

                            a{
                                margin-left: 50px;
                                border: 2px solid #ccc;
                                color: #333;
                                width: 100%;
                                padding: 7px 18px 7px 10px;
                                position: relative;

                                @media screen and (max-width: 768px) {
                                    display: block;
                                    margin-left: 0;
                                    margin-top: 5px;
                                    width: 60%;
                                    padding: 5px 18px 5px 10px;
                                }

                                &:before{
                                    content: "";
                                    position: absolute;
                                    top: 38%;
                                    right: 8px;
                                    width: 8px;
                                    height: 8px;
                                    border-top: 2px solid #7a0;
                                    border-right: 2px solid #7a0;
                                    transform: rotate(45deg);
                                }

                                &:hover{
                                    opacity: 0.75;
                                }
                            }
                        }
                    }
                }
            }            
        }
    }
}
</style>