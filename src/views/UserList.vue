<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">
            All Users
          </h4>
        </div>
        <div class="card-body">
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>SL#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="users.length > 0" v-for="(user, index) in users" :key="index">
              <td>{{ ++index }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.phoneNumber }}</td>
              <td>
                <router-link :to="{name: 'UserEdit', params: {id: user.id}}" class="btn btn-primary btn-sm">
                  Edit
                </router-link>
                <button class="btn btn-danger btn-sm ms-2" @click.prevent="deleteUser(user.id)">
                  Delete
                </button>
              </td>
            </tr>
            <tr v-else>
              <td colspan="100%" class="text-center">No data found!</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref}                      from 'vue';
import {db}                                  from '@/firebaseDb';
import {collection, getDocs, doc, deleteDoc} from 'firebase/firestore';

export default {
  name : "UserList",
  setup() {
    let users = ref([]);

    const getUsers = async () => {
      const userCol = collection(db, 'users');
      const userSnapshot = await getDocs(userCol);
      return userSnapshot.docs.map(doc => {
        return {
          id : doc.id,
          ...doc.data()
        }
      });
    };

    const deleteUser = async (id) => {
      if (window.confirm('Do you really want to delete this user?')) {
        await deleteDoc(doc(db, 'users', id))
            .then(async () => {
              alert('User deleted successfully.');
              users.value = await getUsers();
            })
            .catch(err => {
              alert(err.message);
            });
      }
    };

    onMounted(async () => {
      users.value = await getUsers();
    });

    return {
      users,
      deleteUser
    };
  }
}
</script>