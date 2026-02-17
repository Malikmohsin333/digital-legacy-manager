<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar" v-if="showNavbar">
      <div class="container nav-container">
        <router-link to="/" class="logo">Digital Legacy Manager</router-link>
        <div class="nav-links">
          <router-link to="/dashboard" v-if="isLoggedIn">Dashboard</router-link>
          <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
          <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
          <a href="#" @click.prevent="logout" v-if="isLoggedIn">Logout</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    showNavbar() {
      // Don't show navbar on login/register pages
      return !['Login', 'Register'].includes(this.$route.name)
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.isLoggedIn = false
      this.$router.push('/login')
    },
    checkLoginStatus() {
      this.isLoggedIn = !!localStorage.getItem('token')
    }
  },
  watch: {
    '$route'() {
      this.checkLoginStatus()
    }
  },
  mounted() {
    this.checkLoginStatus()
  }
}
</script>

<style>
@import './assets/style.css';

.navbar {
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #667eea;
  text-decoration: none;
}

.nav-links a {
  margin-left: 20px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  color: #667eea;
}

main {
  margin-top: 70px;
  min-height: calc(100vh - 70px);
}
</style>