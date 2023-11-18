<template>
    <HeaderView/>

    <div class="user-view container">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr class="text-uppercase">
                    <th scope="col-1">STT</th>
                    <th scope="col-1">username</th>
                    <th scope="col-1">password</th>
                    <th scope="col-1">name</th>
                    <th scope="col-3">position</th>
                    <th scope="col-2">phone</th>
                    <!-- <th scope="col-2">phone</th> -->
                    <th scope="col" colspan="2"></th>
                </tr>
            </thead>

            <tbody v-for="(user, index) in user" :key="index">
                <tr class="text-justify">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ user.username }}</td>
                    <td>{{ user.password }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.position }}</td>
                    <td>{{ user.phone }}</td>
                    <!-- <td>{{ user.id }}</td> -->
                    <td>
                        <router-link :to="'/user/register'" class="btn btn-link">Thêm</router-link>
                        <a href="" class="btn btn-link" @click="getIdUser(user._id)" :data-id="user._id" data-toggle="modal"
                            data-target="#delete-book-modal">Xóa</a>
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
                        <h5 class="modal-title" id="exampleModalLongTitle">Xóa người dùng?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Bạn có chắc muốn xóa người dùng này?
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="deleteUser(id)" class="btn btn-danger">Xóa bỏ</button>
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
import HeaderView from '../components/Headerview.vue';
import FooterView from '../components/FooterView.vue';

export default {
    components: { HeaderView, FooterView },
    data() {
        return {
            id:'',
            user:[],
            username: [],
            
        };
    },
    
    
    created() {
        axios.get("http://localhost:8000/admin/users")
            .then(res => {
                this.user= res.data;
                // console.log(res.data[1]._id);
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        getIdUser(id) {
            this.id = id;
            console.log(id);
            // this.$el.getAttribute('data-id');
        },
        deleteUser(id) {
            axios.delete(`http://localhost:8000/admin/user/${id}`)
                .then(() => {
                    
                    console.log(id);
                    this.$router.push("/admin/user");
                    // window.alert("Xóa thành công");
                    window.location.reload();
                })
                .catch(err => console.log(err));
        },
    },
    
}
</script>

<style scoped>
.user-view {
    margin: 16px auto;
    margin-top: 100px;

}

.btn.btn-link {
    text-decoration: none;
}
</style>
