<template>
    <HeaderView></HeaderView>

    <div class="stored-books-view container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr class="text-uppercase">
                    <th scope="col-1">idBorrow</th>
                    <th scope="col">username</th>
                    <th scope="col-3">idBook</th>
                    <th scope="col-3">dateBorrow</th>
                    <th scope="col-2">dateDue</th>
                    <th scope="col">dateReturn</th>
                    <th scope="col-2">trangthai</th>
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>

            <tbody v-for="(lisstborrow, index) in listborrow" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ lisstborrow.user.code }}</td>
                    <td>{{ lisstborrow.user.fullname }}</td>
                    <td>{{ lisstborrow.boooks.id }}</td>
                    <td>{{ lisstborrow.books.dateBorrow.split('T')[0] }}</td>
                    <td>{{ lisstborrow.books.dateDue.split('T')[0] }}</td>
                    <td>{{ lisstborrow.books.dateReturn.split('T')[0] }}</td>
                    <td>{{ lisstborrow.books.state }}</td>
                    <td>
                        <router-link :to="'/admin/borrow/' + borrow._id + '/edit'" class="btn btn-link">Sửa</router-link>
                        <a href="" class="btn btn-link" @click="getIdBorrow(borrow)" :data-id="borrow._id"
                            data-toggle="modal" data-target="#delete-book-modal">Xóa</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal -->
        <div class="modal fade" id="delete-book-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa đối tượng?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc muốn xóa đối tượng này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deleteBorrow()" class="btn btn-danger">Xóa bỏ</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterView></FooterView>
</template>

<script>
import axios from 'axios';
import HeaderView from '../components/HeaderView.vue';
import FooterView from '../components/FooterView.vue';

export default {
    data() {
        return {
            listborrow: {
                user: {
                    code: "",
                    fullname: ""
                },
                books: [
                    {
                        id: "",
                        dateBorrow: "",
                        dateDue: "",
                        dateReturn: null,
                        state: false
                    }
                ]
            },
            idBorrow: [],
            
        };
    },
    async created() {
        const x = JSON.parse(localStorage.getItem('id'))[2]
        if (x !== 'Thủ thư') {
            this.$router.push('/');
        }

        axios.get("http://localhost:8000/admin/listBorrow")
            .then(res => {
                this.listborrow = res.data; 
                console.log(this.listborrow);       
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        getIdBook(borrow) {
            this.id = borrow.id;
            // this.$el.getAttribute('data-id');
        },
        deleteBook() {
            axios.delete("http://localhost:8000/admin/borrow/" + this.id)
                .then(() => {

                    console.log(this.id);
                    this.$router.push("/admin/borrow");
                    // window.alert("Xóa thành công");
                    window.location.reload();
                })
                .catch(err => console.log(err));
        },
    },
    components: { HeaderView, FooterView }
}
</script>

<style scoped>
.stored-books-view {
    margin: 16px auto;
    margin-top: 100px;

}

.btn.btn-link {
    text-decoration: none;
}
</style>
