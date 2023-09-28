<template >
    <div class="add-pet-view container">

        <h3 class="text-uppercase my-4">Thêm Thú Cưng</h3>

        <form method="POST" @submit.prevent="addPet" action="">
            <div class="form-row mb-4">
                <div class="form-group col-md-2">
                    <label for="id-book">Mã số</label>
                    <input type="text" class="form-control" id="id-book" v-model="posts.idBook">
                </div>

                <div class="form-group col-md-4">
                    <label for="name-Book">Tên sách</label>
                    <input type="text" class="form-control" id="name-Book" v-model="posts.nameBook">
                </div>

                <div class="form-group">
                    <label for="author">Tác Giả</label>
                    <input type="text" class="form-control" id="author" v-model="posts.author">
                </div>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="type-book">Giá bán</label>
                <input type="text" class="form-control" id="type-book" v-model="posts.typeBook">
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="shelf">Kệ sách</label>
                <select class="select" id="shelf" v-model="posts.gender">
                    <option>A1</option>
                    <option>A2</option>
                    <option>A3</option>
                </select>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="typeOf">Thể loại</label>
                <select class="select" id="typeOf" v-model="posts.typeOf">
                    <option disabled value="">Thể loại</option>
                    <option>Chó</option>
                    <option>Mèo</option>
                    <option>Hamster</option>
                    <option>Thỏ</option>
                </select>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="pathURL">Chọn hình ảnh</label><br>
                <input type="file" name="name-file" id="pathURL">
            </div>

            <button type="submit" class="btn btn-success btn-lg mb-1 mt-4 text-uppercase" @click="getNameFileImg">Thêm
                thú cưng</button>
            <button type="button" v-on:click="comebackHome()" class="btn btn-info btn-lg mb-1 mx-5 mt-4 text-white">Về trang
                chủ</button>
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            posts: {
                idBook: null,
                nameBook: null,
                author: null,
                typeBook: null,
                shelf: null,
                quality: null,
                image: null
            }
        }
    },

    methods: {
        getNameFileImg() {
            const fake_path = document.getElementById('pathURL').value;
            this.posts.image = fake_path.split("\\").pop();
        },
        addBook() {
            axios.post('http://localhost:5000/admin/books/store', this.posts)
                // .then(res => console.log(res))
                .then(res => {
                    if (res.data.status === 200) {
                        window.alert("Thêm thú cưng thành công")
                        this.posts.idBook = "";
                        this.posts.nameBook = "";
                        this.posts.author = "";
                        this.posts.typeBook = "";
                        this.posts.shelf = "";
                        this.posts.quality = "";
                        this.posts.image = "";
                        document.getElementById('pathURL').value = "";
                    }
                    else if (res.data.status === 500) {
                        window.alert("Thêm thú cưng thất bại")
                    }
                })
                .catch(err => console.log(err))
        },
        comebackHome() {
            this.$router.push("/");
        }
    }
}
</script>


<style scoped>
.add-pet-view {
    margin: 16px auto;
}

.form-row {
    display: flex;
    justify-content: space-between;
}
</style>