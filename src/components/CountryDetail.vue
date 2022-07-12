<template>
    <div class="py-12 sm:px-14 px-6 sm:h-screen h-full text-lmText dark:text-white">
        <router-link :to="'/'">
            <button class="w-36 h-10 rounded border-1 border-solid shadow-xl bg-white dark:bg-dmElement">Back</button>
        </router-link>
        <div class="grid grid-cols-1 gap-6 mt-12">
            <div class="list-group-item" v-if="country">
                <section>
                    <div class="sm:flex w-full">
                        <div class="sm:w-2/5 h-full">
                            <img class="" :src="country.flag" :alt="country.name" />
                        </div>
                        <div class="sm:w-3/5 2xl:pl-56 xl:pl-28 md:pl-14 whitespace-nowrap">
                            <p class="font-extrabold text-2xl line-clamp-4 sm:pt-6 pt-10 pb-6">
                                {{ country.name }}
                            </p>
                            <div class="sm:flex pr-48 sm:pb-10 pb-6">
                                <div class="w-1/2">
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Native Name: </p>
                                        <p>{{ country.nativeName }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Population: </p>
                                        <p>{{ country.population }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Region: </p>
                                        <p>{{ country.region }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Sub Region: </p>
                                        <p>{{ country.subregion }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Capital: </p>
                                        <p>{{ country.capital }}</p>
                                    </div>
                                </div>
                                <div class="w-1/2 sm:pt-0 pt-6 2xl:pl-0 xl:pl-28 md:pl-32 ">
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Top Level Domain: </p>
                                        <p>{{ country.topLevelDomain[0] }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Currencies: </p>
                                        <p>{{ country.currencies[0].name }}</p>
                                    </div>
                                    <div class="line-clamp-4 flex">
                                        <p class="font-semibold mr-2 mb-1">Languages: </p>
                                        {{ country.languages.map(lang => lang.name).join(', ')}}
                                    </div>
                                </div>
                            </div>
                            <div class="sm:flex">
                                <p class="font-semibold mr-2 mb-1 mt-2">Border Countries: </p>
                                <div class="">
                                    <div class="grid grid-cols-3 gap-1">
                                        <div v-for="(border, index) in countryBorders" :key="index" class="p-1">
                                            <router-link :to="`/country/${border.alpha3Code}`">
                                                <button
                                                    class="w-full h-full rounded bg-white p-2 whitespace-normal shadow-xl bg-white dark:bg-dmElement">{{border.name}}</button>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import CountryApi from "../services/CountryApi";

export default {
    name: "country-details",
    data() {
        return {
            country: null,
            countryBorders: [],
        };
    },
    methods: {
        getCountry(code) {
            console.log('code' + code)
            CountryApi.get(code)
                .then(response => {
                    this.country = response.data;
                    this.getBorder(this.country.borders)
                })
                .catch(e => {
                    console.log(e);
                });
        },

        getBorder(codes) {
            CountryApi.getBorder(codes)
                .then(response => {
                    this.countryBorders = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.message = '';
        this.getCountry(this.$route.params.code);
    }
};
</script>

