<template>
    <div class="edit-pet-view container">
        <h3 class="text-uppercase mt-4 mb-4">Cập nhật thông tin thú cưng</h3>

        <form method="POST" @submit.prevent="updatePet">
            <div class="form-row mb-4">
                <div class="form-group col-md-2">
                    <label for="id-pet">ID</label>
                    <input type="text" class="form-control" id="id-pet" v-model="this.pet.ID">
                </div>

                <div class="form-group col-md-4">
                    <label for="name-breed">Giống</label>
                    <input type="text" class="form-control" id="name-breed" v-model="this.pet.breed">
                </div>

                <div class="form-group">
                    <label for="color">Màu sắc</label>
                    <input type="text" class="form-control" id="color" v-model="this.pet.color">
                </div>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="price">Giá bán</label>
                <input type="text" class="form-control" id="price" v-model="this.pet.price">
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="gender">Gender</label>
                <select class="select" id="gender" v-model="this.pet.gender">
                    <option disabled value="">Giới tính</option>
                    <option>Đực</option>
                    <option>Cái</option>
                </select>
            </div>

            <div class="form-group mb-4">
                <label class="form-label" for="typeOf">Thể loại</label>
                <select class="select" id="typeOf" v-model="this.pet.typeOf">
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

            <button type="submit" class="btn btn-primary text-uppercase">
                Lưu lại
            </button>
        </form>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            pet: {
                ID: null,
                breed: null,
                color: null,
                gender: null,
                typeOf: null,
                price: null,
                image: null
            }
        }
    },

    computed: {
        id() {
            return this.$route.params.id;
        }
    },

    created() {
        axios
            .get('http://localhost:3000/admin/pets/' + this.id + '/edit')
            .then(res => {
                this.pet = res.data;
            })
            .catch(err => {
                console.log(err)
            })
    },

    methods: {
        updatePet() {
            axios.put('http://localhost:3000/pets/' + this.id, this.pet)
                .then(res => {
                    if (res.data.status === 201) {
                        this.$router.push('/admin/stored/pets');
                        window.alert("Cập nhật thông tin thành công")
                    }
                    else if (res.data.status === 501) {
                        window.alert("Cập nhật thông tin thất bại")
                    }

                })
                .catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.edit-pet-view {
    margin: 16px auto;
}

.form-group label {
    font-weight: bold;
}

.form-row {
    display: flex;
    justify-content: space-between;
}
</style>