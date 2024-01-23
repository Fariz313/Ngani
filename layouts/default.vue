<template>
  <div class="container n-container-primary">
    <nav class="navbar">
      <div class="container-fluid">
        <router-link to="/"
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarToggleExternalContent2"
          aria-controls="navbarToggleExternalContent2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </router-link>
        <img src="~/assets/img/logo.png" alt="" srcset="" />
      </div>
    </nav>
    <div>
      <slot />
    </div>
    <div class="footer-page d-flex">
      <div class="container footer-page-container d-flex">
        <router-link to="/" class="btn fs-2 circle-button p-2">
          <i class="fas fa-home"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page2" class="btn fs-2 circle-button p-2 ">
          <i class="fas fa-seedling"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page3" class="btn fs-2 circle-button p-2 ">
          <i class="fas fa-tint"></i>
        </router-link>
      </div>
      <div class="container footer-page-container d-flex">
        <router-link to="/page4" class="btn fs-2 circle-button p-2 ">
          <i class="fas fa-water"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>