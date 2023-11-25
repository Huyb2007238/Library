<template>
    <HeaderView />
    <div class="add-borrow container">
        <h3 class="text-uppercase mt-4 mb-4 ">Thêm mượn sách</h3>

        <form method="PUT" @submit.prevent="updateBorrow()" action="">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputID">ID người mượn</label>
                    <input type="text" class="form-control" id="inputID" placeholder="ID" required="true"
                        v-model="borrow.user.code">
                </div>
                <div class="form-group col-md-6">
                    <label for="inputFullname">Họ và tên</label>
                    <input type="text" class="form-control" id="inputFullname" placeholder="Fullname" required="true"
                        v-model="borrow.user.fullname">
                </div>
            </div>


            <div class="row" v-for="(item, index) in borrow.books " :key="index">
                <div class="form-group">
                    <label for="inputAddress">ID sách</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="CTUxxxx" required="true"
                        v-model="borrow.books[index].id">
                </div>
                <div class="form-group">
                    <label for="inputAddress">Ngày Mượn</label>
                    <input type="date" class="form-control" id="inputAddress" placeholder="" required="true"
                        v-model="borrow.books[index].dateBorrow.split('T')[0]">
                </div>
                <div class="form-group">
                    <label for="inputAddress">Hạn Trả</label>
                    <input type="date" class="form-control" id="inputAddress" placeholder="" required="true"
                        v-model="borrow.books[index].dateDue.split('T')[0]">
                </div>
                <div class="form-group">
                    <label for="inputAddress">Ngày trả</label>
                    <input type="date" class="form-control" id="inputAddress" placeholder=""
                        v-model="borrow.books[index].dateReturn.split('T')[0]">
                </div>
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <button id="xoa" type="button" class="btn btn-dark" style="width: 100px; font: 1em sans-serif"
                            margin="padding" @click="removeElement(index)">
                            + Xóa
                        </button>
                    </div>
                </div>


            </div>
            <div class="form-group col-md-2">
                <!-- <button id="them" type="button" class="btn btn-dark" style="width: 170px; font: 1em sans-serif"
                    margin="padding" @click="addElement()">
                    + Thêm mượn sách
                </button> -->
            </div>
            <button id="btnsubmit" type="submit" class="btn btn-primary">Thêm mới</button>
        </form>
    </div>
    <FooterView />
</template>

<script>
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';
import axios from 'axios';
export default {
    data() {
        return {
            borrow: {
                user: {
                    code: "",
                    fullname: ""
                },
                books: [
                    {
                        id: "",
                        dateBorrow: "",
                        dateDue: "",
                        dateReturn: "",
                        state: false
                    }
                ]
            },
        }
    },
    components: {
        HeaderView,
        FooterView
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    created() {
        axios.get('http://localhost:8000/admin/borrows/' + this.id + '/edit')
            .then(res => {
                console.log(this.id);
                this.borrow = res.data;
                console.log(res.data);
            })
            .catch(err => console.log(err));
    },
    methods: {
        addElement() {
            this.borrow.books.push({ id: "", dateDue: "", dateReturn: "" });
        },
        removeElement(idx) {
            this.borrow.books.splice(idx, 1);
        },
        updateBorrow() {
            const x = JSON.parse(localStorage.getItem('id'))[2]
            if (x !== 'Thủ thư') {
                this.$router.push('/');
            }
            axios
                // .put('http://localhost:8000/admin/borrows/'+this.id+'/edit')
                .put(`http://localhost:8000/admin/borrows/${this.id}/edit`,this.borrow)
                .then(res => {
                    console.log(res.data);
                    if (res.status === 200) {
                        // this.$router.push('/admin/borrows/edit');
                        window.alert("Cập nhật thông tin thành công")
                    }
                    else if (res.status === 500) {
                        window.alert("Cập nhật thông tin thất bại")
                    }
                })
                .catch(err => console.error('Error updating borrow:', err))
                window.alert("Thông tin nhập đã có");
        },
    }
}


</script>

<style>
.add-borrow {
    margin: 16px auto;
    margin-top: 100px;
}

#xoa {
    margin-top: 3px;
}

#them {
    margin-left: -14px;
}

#btnsubmit {
    margin-bottom: 20px;
}
</style>