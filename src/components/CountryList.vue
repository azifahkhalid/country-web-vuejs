<template>
    <div class="text-lmText dark:text-white">
        <div class="sm:flex sm:justify-between py-10 md:px-14 px-6">
            <label class="relative block">
                <span class="absolute inset-y-0 left-0 flex items-center pl-6">
                    <i class='fa-solid fa-magnifying-glass'></i>
                </span>
                <input
                    class="appearance-none shadow-md rounded cursor-pointer md:w-96 w-full h-12 py-2 pl-14 pr-4 bg-white dark:bg-dmElement"
                    type="text" placeholder="Search for a country..." v-model="countryName"
                    v-on:keyup.enter="searchCountryName" @blur="searchCountryName" />
            </label>
            <div class="relative block md:pt-0 pt-10">
                <select
                    class="appearance-none shadow-md rounded cursor-pointer h-12 px-6 pr-14 bg-white dark:bg-dmElement"
                    @change="retrieveRegion($event)">
                    <option selected disabled>Filter By Region</option>
                    <option value="africa"> Africa </option>
                    <option value="americas"> American </option>
                    <option value="asia"> Asia </option>
                    <option value="europe"> Europe </option>
                    <option value="oceania"> Oceania </option>
                </select>
                <span class="absolute inset-y-0 right-0 flex items-center sm:pr-6 pr-40 sm:pt-0 pt-10">
                    <i class="fa-solid fa-chevron-down"></i>
                </span>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center">
            <div class="list-group-item" v-for="(country, index) in countries" :key="index">
                <router-link :to="'/country/' + country.alpha3Code" class="badge badge-warning">
                    <section class="rounded-lg shadow-lg bg-white dark:bg-dmElement w-80 ">
                        <div class="h-96">
                            <img class="w-full h-1/2 rounded-lg" :src="country.flag" :alt="country.name" />
                            <div class="px-8">
                                <p class="font-extrabold text-16 line-clamp-4 pt-6 pb-4">
                                    {{ country.name }}
                                </p>
                                <div class="line-clamp-4 flex">
                                    <p class="font-semibold mr-2 mb-1">Population: </p>
                                    <p>{{ country.population }}</p>
                                </div>
                                <div class="line-clamp-4 flex">
                                    <p class="font-semibold mr-2 mb-1">Capital: </p>
                                    <p>{{ country.capital }}</p>
                                </div>
                                <div class="line-clamp-4 flex">
                                    <p class="font-semibold mr-2 mb-1">Region: </p>
                                    <p>{{ country.region }}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="p-6"></div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import CountryApi from "../services/CountryApi";

export default {
    name: "country-list",
    data() {
        return {
            countries: [],
            countryName: ""
        };
    },
    methods: {
        retrieveCountry() {
            CountryApi.getAll()
                .then(response => {
                    this.countries = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },

        retrieveRegion(event) {
            console.log('retrieveRegion(code)  ', event.target.value)
            this.countryName = null
            CountryApi.getRegion(event.target.value)
                .then(response => {
                    this.countries = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        
        searchCountryName() {
            CountryApi.getByNameWildcard(this.countryName)
                .then(response => {
                    this.countries = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted() {
        this.retrieveCountry();
    }
};
</script>

