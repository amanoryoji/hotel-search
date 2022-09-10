<template>
    <div class="search">
        <div class="search-container">
            <h3 class="top-title">あなたの旅をよりシンプルに。<br>全国各地の宿泊施設を検索しましょう！</h3>

            <div class="search-container__box">
                <h4 class="search-container__box-title">条件から検索</h4>
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
                    <label for="city">市町村</label>
                    <select id="city" v-model="cities" v-bind:disabled="prefecture == ''">
                        <option value="">市町村を選択</option>
                        <option v-for="(item, index) in getCity" v-bind:value="item.no">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <div
                v-if="cities == 'sapporo' || cities == 'tokyo'" class="search-input">
                    <label for="detailCity">地区</label>
                    <select id="detailCity" v-model="detailCity" v-bind:disabled="cities == ''">
                        <option value="">地区を選択</option>
                        <option v-for="(item, index) in getDetailCity" v-bind:value="item.no">
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <button v-on:click="click" class="search-button">検索する</button>
            </div>
        </div>

        <div v-if="hotels != ''" class="search-container__result">
            <h4 class="search-container__result-count">検索件数：<span>{{ hotels[0].data.hotels.length }}</span>件</h4>

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
                <li v-for="hotel in getHotels">
                    <p>{{ hotel.hotel[0].hotelBasicInfo.hotelName }} </p>
                    <img v-bind:src="hotel.hotel[0].hotelBasicInfo.hotelImageUrl">
                    <p>1部屋1泊あたりの最安値：{{ hotel.hotel[0].hotelBasicInfo.hotelMinCharge }}円</p>
                    <nuxt-link v-bind:to="{path: `detail`, query: { name: encodeURIComponent(JSON.stringify(hotel))}}">
                        詳細を見る
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
const axios = require('axios');

export default {
    data: function () {
        return {
            hotels: [],
            prefecture: "",
            cities: "",
            detailCity: "",
            page:1,
            perPage: 10,
            currentPage: 1,
            pref: this.$store.state.pref,
            city: this.$store.state.city,
            detail: this.$store.state.detail,
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
                    return ((item.city == self.cities));
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
            this.$router.push({ path: ``,query:{ prefecture:this.prefecture, cities:this.cities, detailCity:this.detailCity, currentPage: this.currentPage}})
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
                this.$router.push({ path: ``,query:{ prefecture: this.prefecture, cities: this.cities, detailCity: this.detailCity}})
                axios.get(this.$store.state.url, {
                    params: {
                        applicationId: "1056638830656016957",
                        format: "json",
                        largeClassCode: "japan",
                        middleClassCode: this.prefecture,
                        smallClassCode: this.cities,
                        detailClassCode: this.detailCity,
                    }
                })
                .then(response => {
                    this.hotels.length = 0; 
                    this.hotels.push(response); 
                })
                .catch(error => {
                    alert('検索結果がありません。');
                })
                this.currentPage = 1;
            }
        }, 
    },
}
</script>

<style lang="scss">  
    a{
        text-decoration: none;
    }
    img{
        width: 300px;
        height: 169px;
        object-fit: contain;
    }
    li{
        list-style: none;
    }
    li.active{
        color: red;
    }

    button{
        border: none;
        cursor: pointer;
        outline: none;
        padding: 0;
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

        &:hover{
            border-radius: 48px;
            overflow: hidden;
        }
    }

    .search{

        &-container{
            background-image: url(/images/search-bg.jpg);
            background-size: 100% auto;
            padding: 80px 0;

            .top-title{
                margin-bottom: 50px;
                text-align: center;
                color: #fff;
                text-shadow: 0 2px 6px #333;
                font-size: 40px;
            }

            &__box{
                background: rgba(255,255,255,.8);
                width: 700px;
                padding: 50px;
                margin: 0 auto;
                box-sizing: border-box;

                &-title{
                    margin-bottom: 40px;
                }

                .search-input{
                    margin-bottom: 40px;

                    label{
                        display: block;
                        margin-bottom: 20px;
                    }

                    select{
                        width: 100%;
                        padding: 10px 0;
                    }
                }

                button{
                    width: 60%;
                }
            }

            &__result{
                background-color: rgba(21,23,33,.05);
                padding: 40px 0;

                &-count{
                    margin-bottom: 40px;
                    text-align: center;
                }

                .pagination{
                    display: flex;
                    justify-content: center;
                    margin-bottom: 40px;

                    li{
                        margin-right: 30px;

                        &:last-of-type{
                            margin-right: 0;
                        }
                    }
                }
                
                ul.hotelContents{
                    display: flex;
                    flex-wrap: wrap;
                    width: 90%;
                    margin: 0 auto;

                    li{
                        width: 33.3%;
                        margin-bottom: 30px;
                        
                        &:last-of-type{
                            margin-bottom: 0;
                        }
                    }
                }
            }
        }
    }
</style>