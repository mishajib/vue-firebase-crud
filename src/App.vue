<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Firebase Vue CRUD</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 float-end">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Users</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/users/create">Add User</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <router-view/>
  </div>
</template>