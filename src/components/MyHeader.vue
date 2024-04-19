<template>
  <header class="navbar bg-base-100">
    <div class="flex-none">
      <a class="btn btn-ghost text-xl normal-case">Dragan Websites</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Solutions</router-link>
        </li>
        <li>
          <router-link to="/">Products</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
        </li>
      </ul>
    </div>
    <div class="flex-1">
      <slot></slot>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>
