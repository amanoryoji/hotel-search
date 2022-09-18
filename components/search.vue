<template>
    <div class="search" id="search">
        <div class="search-container">
            <h3 class="top-title">あなたの旅をよりシンプルに。<br>全国各地の宿泊施設を検索しましょう！</h3>

            <div class="search-container__box">
                <h4 class="search-container__box-title">エリアを選択</h4>

                <div class="search-input">
                    <label for="prefecture">都道府県<span class="required">必須</span></label>
                    <select id="pref" v-model="prefecture">
                        <option value="">都道府県を選択</option>
                        <option v-for="(item, index) in getPref" v-bind:value="item.no">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <div class="search-input">
                    <label for="city">市町村<span class="required">必須</span></label>
                    <select id="city" v-model="cities" v-bind:disabled="prefecture == ''">
                        <option value="">市町村を選択</option>
                        <option v-for="(item, index) in getCity" v-bind:value="item.no">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <div
                v-if="cities == 'sapporo' || cities == 'tokyo' || cities == 'nagoyashi' || cities == 'shi'" class="search-input">
                    <label for="detailCity">地区<span class="required">必須</span></label>
                    <select id="detailCity" v-model="detailCity" v-bind:disabled="cities == ''">
                        <option value="">地区を選択</option>
                        <option v-for="(item, index) in getDetailCity" v-bind:value="item.no">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <h4 class="search-container__box-title">日付を選択</h4>

                <div class="search-input search-input__date">
                    <label for="chechIn">チェックイン<span class="required">必須</span></label>
                    <no-ssr>
                        <datePicker
                        v-model="checkIn"
                        :format="DatePickerFormat"
                        ></datePicker>
                    </no-ssr>
                </div>

                <div class="search-input search-input__date">
                    <label for="checkout">チェックアウト<span class="required">必須</span></label>
                    <no-ssr>
                        <datePicker
                        v-model="checkOut"
                        :format="DatePickerFormat"
                        ></datePicker>
                    </no-ssr>
                </div>

                <button v-on:click="click" class="button search-button">検索する</button>
            </div>
        </div>

        <div id="result">
            <div v-if="hotels != ''" class="search-container__result">
                <h4 class="search-container__result-count">
                    検索件数：<span>{{ hotels[0].data.hotels.length }}</span>件
                </h4>

                <no-ssr>
                    <paginate
                    v-model="currentPage"
                    :page-count="getPageCount"
                    :click-handler="clickCallback"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :hide-prev-next=true
                    :container-class="'pagination'"
                    ></paginate>
                </no-ssr>

                <ul class="hotelContents">
                    <li v-for="hotel in getHotels" class="hotelContents-list">
                        <p class="hotelContents-list__name">{{ hotel.hotel[0].hotelBasicInfo.hotelName }} </p>
                        <div class="hotelContents-list__image">
                            <img v-bind:src="hotel.hotel[0].hotelBasicInfo.hotelImageUrl">
                        </div>
                        <p class="hotelContents-list__price">1泊あたりの最安値：<span>{{ hotel.hotel[0].hotelBasicInfo.hotelMinCharge }}</span>円</p>
                        <p class="hotelContents-list__review">★{{ hotel.hotel[0].hotelBasicInfo.reviewAverage }}</p>
                        <nuxt-link v-bind:to="{path: `detail`, query: { name: encodeURIComponent(JSON.stringify(hotel))}}" class="button">
                            詳細を見る
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios');
import moment from 'moment';

export default {
    data: function () {
        return {
            hotels: [],
            prefecture: "",
            cities: "",
            detailCity: "",
            page:1,
            perPage: 9,
            currentPage: 1,
            pref: this.$store.state.pref,
            city: this.$store.state.city,
            detail: this.$store.state.detail,
            checkIn:"",
            checkOut:"",
            DatePickerFormat:'yyyy-MM-dd',
        }
    },
    computed: {
        getPref: {
            get: function () {
                const self = this;
                return self.pref.filter(function (item) {
                    return item;
                });
            },
            set: function (v) {
                this.pref = v;
            }
        },
        getCity: {
            get: function () {
                const self = this;
                return self.city.filter(function (item) {
                    return ((item.pref == self.prefecture));//item.prefとself.prefectureはhokkaido
                });
            },
            set: function (v) {
                this.pref = v;
            }
        },
        getDetailCity: {
            get:function() {
                const self = this;
                return self.detail.filter(function (item) {
                    return ((item.city == self.cities && item.pref == self.prefecture));
                })
            },
            set: function(v) {
                this.pref = v;
            }
        },
        getHotels: function() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            let hotel = this.hotels[0].data.hotels
            return hotel.slice(start,current)
        },
        getPageCount: function() {
            let hotel = this.hotels[0].data.hotels;//30
            return Math.ceil(hotel.length / this.perPage);
        },
    },
    watch: {
        prefecture: function(newVal,oldVal) {
            this.detailCity = ''
            if(oldVal == '') {
                if(this.$route.query.cities != undefined) {
                    this.cities = this.$route.query.cities
                    this.detailCity = this.$route.query.detailCity
                }
               
            } else if(oldVal != '') {
                this.cities = ''
                this.detailCity = ''
            }
        },
        cities: function(newVal, oldVal) {
           if(oldVal != '') {
                this.detailCity = ''
            }
            
        },
    },
    mounted() {
        if(this.$route.query.prefecture !== undefined && this.$route.query.cities !== undefined) {
            this.prefecture = this.$route.query.prefecture;
            this.cities = this.$route.query.cities;
            this.detailCity = this.$route.query.detailCity;
            this.checkIn = moment(this.$route.query.checkIn).format('YYYY-M-D');
            this.checkOut = moment(this.$route.query.checkOut).format('YYYY-M-D');
            if(this.$route.query.currentPage != undefined) {
                this.currentPage = Number(this.$route.query.currentPage);
            }
            axios.get(this.$store.state.url, {
                params: {
                    applicationId: "1056638830656016957",
                    format: "json",
                    largeClassCode: "japan",
                    middleClassCode: this.prefecture,
                    smallClassCode: this.cities,
                    detailClassCode: this.detailCity,
                    checkinDate: this.checkIn,
                    checkoutDate: this.checkOut
                }
            })
            .then(response => {
                this.hotels.push(response);
            })
            .catch(error => {
                alert('エラーが発生しました。')
            })
        }
    },
    methods: {
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);//currentPageを更新する、Number型で取得する
            this.$router.push({ path: ``,query:{ prefecture:this.prefecture, cities:this.cities, detailCity:this.detailCity, checIn: this.checkIn, checkOut: this.checkOut, currentPage: this.currentPage}})
        },
        click() {
            if(this.prefecture == '') {
                alert('県を入力してください')
            };
            if(this.prefecture != '' && this.cities == ''){
                alert('市町村を選択してください')
            };
            if(this.cities == 'sapporo' || this.cities == 'tokyo') {
                if(this.detailCity == ''){
                    alert('地区を選択してください')
                }
            };
            if(this.cities !== '') {
                this.$router.push({ path: `/`,query:{ prefecture: this.prefecture, cities: this.cities, detailCity: this.detailCity, checIn: this.checkIn, checkOut: this.checkOut}})
                axios.get(this.$store.state.url, {
                    params: {
                        applicationId: "1056638830656016957",
                        format: "json",
                        largeClassCode: "japan",
                        middleClassCode: this.prefecture,
                        smallClassCode: this.cities,
                        detailClassCode: this.detailCity,
                        checkinDate: moment(this.checkIn).format('YYYY-M-D'),
                        checkoutDate: moment(this.checkOut).format('YYYY-M-D')
                    }
                })
                .then(response => {
                    this.hotels.length = 0; 
                    this.hotels.push(response); 
                })
                .catch(error => {
                    alert('検索結果がありません。');
                })
                let search = document.getElementById('search');
                let resultHeight = search.getBoundingClientRect();
                console.log(resultHeight.bottom + window.pageYOffset)
                window.scrollTo({
                    // top:resultHeight.bottom + window.pageYOffset + 100000,
                    top:1000,
                    behavior:'smooth'
                });
                this.currentPage = 1;
            }
        }, 
    }
}
</script>

<style lang="scss">
.button{
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
    background: linear-gradient(135deg,#c00,#ec64a9);
    padding: 12px 8px;
    display: block;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    transition: 0.2s;

    @media screen and (max-width: 768px) {
        padding: 6px 4px;
        font-size: 15px;
    }

    &:hover{
        border-radius: 48px;
        overflow: hidden;
        opacity: 0.75;
    }
}

.search{
    height: 100vh;

    &-container{
        background-image: url(/images/search-bg.jpg);
        background-size: 100% auto;
        background-size: cover;
        background-repeat: none;
        padding: 80px 0 100px;

        @media screen and (max-width: 768px) {
            padding: 50px 0;
        }

        .top-title{
            margin-bottom: 50px;
            text-align: center;
            color: #fff;
            text-shadow: 0 3px 6px #000;
            font-size: 40px;

            @media screen and (max-width: 768px) {
                margin-bottom: 20px;
                font-size: 20px;
            }
        }

        &__box{
            background: rgba(255,255,255,.8);
            width: 700px;
            padding: 50px;
            margin: 0 auto;
            box-sizing: border-box;

            @media screen and (max-width: 768px) {
                width: 90%;
                padding: 20px;
            }

            &-title{
                margin-bottom: 40px;
                font-size: 25px;

                @media screen and (max-width: 768px) {
                    margin-bottom: 20px;
                    font-size: 20px;
                }
            }

            .search-input{
                margin-bottom: 40px;

                @media screen and (max-width: 768px) {
                    margin-bottom: 20px;
                }
                
                &.search-input__date{
                    display: inline-block;
                    margin-right: 40px;

                    @media screen and (max-width: 768px) {
                        margin-right: 0;
                    }

                    input{
                        width: 100%;
                        padding: 10px 10px 10px 10px;
                        box-sizing: border-box;
                    }
                }

                label{
                    display: block;
                    margin-bottom: 20px;
                    font-weight: 700;

                    @media screen and (max-width: 768px) {
                        font-size: 14px;
                    }

                    span.required{
                        width: 50px;
                        margin-left: 10px;
                        color: #d94f5d;
                        border: 1px solid #d94f5d;
                        border-radius: 10px;
                        padding: 2px 8px;
                        font-weight: 700;
                        font-size: 13px;

                        @media screen and (max-width: 768px) {
                            font-size: 11px;
                        }
                    }
                }

                select{
                    width: 100%;
                    padding: 10px 10px 10px 10px;
                    box-sizing: border-box;
                }
            }

            button{
                width: 60%;

                @media screen and (max-width: 768px) {
                    width: 80%;
                    margin-top: 10px;
                }
            }
        }

        &__result{
            background-color: rgba(21,23,33,.05);
            padding: 40px 0;

            &-count{
                margin-bottom: 40px;
                text-align: center;
                font-size: 30px;

                @media screen and (max-width: 768px) {
                    font-size: 20px;
                }

                span{
                    font-size: 40px;
                    color: #c00;

                    @media screen and (max-width: 768px) {
                        font-size: 25px;
                    }
                }
            }
            
            .hotelContents{
                display: flex;
                flex-wrap: wrap;
                gap: 40px 5%;
                width: 90%;
                margin: 0 auto;
                padding: 0;

                @media screen and (max-width: 1000px) {
                    gap: 40px 10%;
                    
                }

                @media screen and (max-width: 768px) {
                    gap: 30px 0;
                    margin: 0 auto 30px;
                }

                &-list{
                    width: 30%;
                    text-align: center;

                    @media screen and (max-width: 1000px) {
                        width: 45%;
                    }

                    @media screen and (max-width: 768px) {
                        width: 100%;
                    }

                    &__name{
                        margin-bottom: 10px;
                        color: #285e97;
                        font-weight: 700;
                        font-size: 18px;
                    }
                    
                    &__image{
                        margin-bottom: 10px;

                        img{
                            width: 100%;
                            height: 300px;
                            object-fit: cover;
                        }
                    }

                    &__price{
                        margin-bottom: 5px;

                        span{
                            font-size: 20px;
                            color: #f00;
                        }
                    }

                    &__review{
                        margin-bottom: 5px;
                        color: #ff5a00;
                    }

                    .button{
                        width: 40%;
                        padding: 5px 0;
                        font-size: 1rem;
                        background:linear-gradient(#F89174, #FFC778);

                        @media screen and (max-width: 768px) {
                            width: 50%;
                        }
                    }
                }
            }

            .pagination{
                display: flex;
                justify-content: center;
                margin-bottom: 60px;
                padding-left: 0;

                @media screen and (max-width: 768px) {
                    margin-bottom: 30px;
                }

                li{
                    margin-right: 30px;
                    padding: 0 10px;
                    color: #95999e;

                    @media screen and (max-width: 768px) {
                        margin-right: 20px;
                    }

                    &.active{
                        color: #c00;
                        
                        a{
                            font-weight: 700;
                        }
                    }

                    &:last-of-type{
                        margin-right: 0;
                    }

                    a{
                        font-size: 23px;
                    }
                }
            }
        }
    }
}
</style>