
<template >
    <HeaderView />

    <div class="home-view container">
        <div class="sections row">
            <template v-for="(book, index) in books" :key="index">

                <div class="card" style="width: 290px;">
                    <img class="card-img-top img-fluid" style="height: 320px;" :src="path + book.image" alt="...">
                    <div class="card-body">
                        <p class="card-title">{{book.nameBook }} - {{ book.idBook }}</p>
                        console.log(book.nameBook)
                        <!-- <p class="card-text">Đơn giá: {{ formatPrice(book.price) }}</p> -->
                    </div>
                </div>

            </template>

        </div>
    </div>

    <FooterView></FooterView>
</template>

<script>
import axios from 'axios'
import staticPath from '../assets/staticPath';
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';

export default {
    data() {
        return {
            books: []
        }
    },

    components: {
        HeaderView,
        FooterView
    },

    computed: {
        path() {
            return staticPath
        }
    },

    methods: {
        formatPrice(price) {
            return price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        }
    },

    created() {
        axios.get('http://localhost:8000/')
            .then(res => {
                this.books = res.data.books;
            })
            .catch(err => console.log(err));
    },
}
</script>


<style scoped>
.home-view {
    margin: 16px auto;
}

.card {
    display: inline-block;
    margin: 0 12px 8px;
}
</style>
