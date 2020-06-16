<template>
  <div id="app" class="container">
    <div class="text-center">
      <router-link :to="{name: 'inicio'}">
        <img src="@/assets/contacto.png" style='height: 230px' alt="">
      </router-link>
    </div>
    <router-view/>
  </div>
</template>


