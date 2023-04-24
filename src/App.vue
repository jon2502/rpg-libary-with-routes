<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/libary">character libary</router-link>
  </nav>
  <router-view/>
  <footer>&copy; copyrihtgs reserverd 2023</footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: rgb(98, 10, 28);
}

nav a {
  font-weight: bold;
  color: #28afc1;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
