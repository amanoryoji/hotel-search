<template>
    <div class="search">
        <div>
            <label for="prefecture">地域</label>
            <select id="pref" v-model="prefecture">
                <option value="">都道府県を選択</option>
                <option v-for="(item, index) in getPref" v-bind:value="item.no">
                    {{ item.name }}
                </option>
            </select>

            <label for="city">市町村</label>
            <select id="city" v-model="cities" v-bind:disabled="prefecture == ''">
                <option value="">市町村を選択</option>
                <option v-for="(item, index) in getCity" v-bind:value="item.no">
                    {{ item.name }}
                </option>
            </select>

            <span
            v-if="cities == 'sapporo' || cities == 'tokyo'">
                <label for="detailCity">地区</label>
                <select id="detailCity" v-model="detailCity" v-bind:disabled="cities == ''">
                    <option value="">地区を選択</option>
                    <option v-for="(item, index) in getDetailCity" v-bind:value="item.no">
                        {{ item.name }}
                    </option>
                </select>
            </span>

            <span>
            {{ this.prefecture }}
            {{ this.cities }}
            {{ this.detailCity }}
            </span>

            <button v-on:click="click">検索する</button>
        </div>

        <div v-if="hotels != ''">
            <h3>検索件数：{{ hotels[0].data.hotels.length }}件</h3>

            <no-ssr>
                <paginate
                :page-count="getPageCount"
                :click-handler="clickCallback"
                :prev-text="'<'"
                :next-text="'>'"
                ></paginate>
            </no-ssr> 

            <ul style="margin-top:30px;">
                <li v-for="hotel in getHotels" style="margin-bottom:20px">
                    <p>{{ hotel.hotel[0].hotelBasicInfo.hotelName }} </p>
                    <img v-bind:src="hotel.hotel[0].hotelBasicInfo.hotelImageUrl">
                    <p>最安料金{{ hotel.hotel[0].hotelBasicInfo.hotelMinCharge }}円</p>
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
            let hotel = this.hotels[0].data.hotels;
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
                console.log('detailCity: oldVal != ""')
                this.detailCity = ''
            }
            
        },
    },
    
    mounted() {
        // this.prefecture = this.$route.query.prefecture;
        // this.cities = this.$route.query.cities;
        // console.log(this.prefecture)
        // if(this.prefecture !== undefined && this.cities !== undefined) {
        if(this.$route.query.number !== undefined) {
            this.currentPage = this.$route.query.number
        }

        if(this.$route.query.prefecture !== undefined && this.$route.query.cities !== undefined) {
            this.prefecture = this.$route.query.prefecture;
            this.cities = this.$route.query.cities;
            this.detailCity = this.$route.query.detailCity;
            console.log('moutend： ' + this.prefecture);
            console.log('mounted： ' + this.cities);
            console.log('mouted：　' + this.detailCity);

            const response = axios.get(this.$store.state.url, {
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
                console.log(response);
                this.hotels.push(response);
            })
        }
    },
    methods: {
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
                const response = axios.get(this.$store.state.url, {
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
                    console.log(response);
                    this.hotels.length = 0; 
                    this.hotels.push(response); 
                })
                .catch(error => {
                    alert('検索結果がありません。');
                })
            }
        }, 
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);//currentPageを更新する、Number型で取得する
            this.$router.push({ path: ``,query:{ prefecture:this.prefecture, cities:this.cities, detailCity:this.detailCity, number: this.currentPage}})
        },
    },
}
</script>

<style scoped>  
    a{
        text-decoration: none;
    }
    img{
        width: 300px;
        height: 169px;
        object-fit: contain;
    }
</style>