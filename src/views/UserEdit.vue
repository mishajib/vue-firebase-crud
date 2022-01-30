<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Edit User</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="userUpdate">
            <div class="form-group mb-3">
              <label for="name">Name</label>
              <input type="text" id="name" class="form-control" v-model="name" placeholder="Enter name" autofocus>
            </div>

            <div class="form-group mb-3">
              <label for="email">Email</label>
              <input type="email" id="email" class="form-control" v-model="email" placeholder="Enter email">
            </div>

            <div class="form-group mb-3">
              <label for="phone-number">Phone Number</label>
              <input type="text" id="phone-number" class="form-control" v-model="phoneNumber"
                     placeholder="Enter phone number">
            </div>

            <router-link :to="{name:'UserList'}" class="btn btn-danger">
              Cancel
            </router-link>
            <button type="submit" class="btn btn-primary ms-2">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
import {db}                          from '@/firebaseDb';
import {getDoc, doc, updateDoc}      from "firebase/firestore";
import {useRouter}                   from 'vue-router';

export default {
  name  : "UserEdit",
  props : ['id'],
  setup(props) {
    let user = reactive({
      name        : "",
      email       : "",
      phoneNumber : "",
    });

    const router = useRouter();

    const userUpdate = async () => {
      const snap = await getDoc(doc(db, 'users', props.id));
      if (snap.exists()) {
        await updateDoc(doc(db, 'users', props.id), user)
            .then(() => {
              router.push({name : 'UserList'});
            })
            .catch(error => {
              console.log(error);
            });
      } else {
        alert('No user found!');
      }
    };

    onMounted(async () => {
      const snap = await getDoc(doc(db, 'users', props.id));
      if (snap.exists()) {
        user.name = snap.data().name;
        user.email = snap.data().email;
        user.phoneNumber = snap.data().phoneNumber;
      } else {
        alert('No user found!');
      }
    });

    return {
      ...toRefs(user),
      userUpdate,
    };
  },
}
</script>