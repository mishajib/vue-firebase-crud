<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Add New User</h5>
        </div>
        <div class="card-body">
          <form @submit.prevent="submitForm">
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
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs}   from "vue";
import {db}                 from '@/firebaseDb';
import {collection, addDoc} from "firebase/firestore";

export default {
  name : "UserCreate",
  setup() {
    let form = reactive({
      name        : "",
      email       : "",
      phoneNumber : ""
    });

    const submitForm = () => {
      addDoc(collection(db, 'users'), form)
          .then((res) => {
            form.name = "";
            form.email = "";
            form.phoneNumber = "";
          })
          .catch(error => {
            console.log(error);
          });

    };

    return {
      ...toRefs(form),
      submitForm
    };
  },
}
</script>