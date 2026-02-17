<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2>Create Account</h2>
      <p>Start securing your digital legacy today</p>
      
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="form.name"
            required
            placeholder="Enter your full name"
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="form.email"
            required
            placeholder="Enter your email"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="form.password"
            required
            placeholder="Choose a password (min. 6 characters)"
            minlength="6"
          >
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="form.confirmPassword"
            required
            placeholder="Confirm your password"
          >
        </div>
        
        <button type="submit" class="btn" :disabled="loading">
          {{ loading ? 'Creating account...' : 'Register' }}
        </button>
        
        <p v-if="error" class="error">{{ error }}</p>
      </form>
      
      <p class="auth-link">
        Already have an account? 
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      error: ''
    }
  },
  methods: {
    async handleRegister() {
      // Validate passwords match
      if (this.form.password !== this.form.confirmPassword) {
        this.error = 'Passwords do not match'
        return
      }
      
      this.loading = true
      this.error = ''
      
      try {
        // For now, just simulate registration
        localStorage.setItem('token', 'dummy-token')
        localStorage.setItem('user', JSON.stringify({ 
          name: this.form.name,
          email: this.form.email 
        }))
        
        this.$router.push('/dashboard')
      } catch (err) {
        this.error = 'Registration failed. Please try again.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
/* Same styles as LoginView */
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding: 20px;
}

.auth-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  width: 100%;
  max-width: 400px;
}

h2 {
  margin: 0 0 10px;
  color: #333;
  text-align: center;
}

.auth-box p {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover:not(:disabled) {
  background: #5a67d8;
}

.btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

.auth-link {
  margin-top: 20px;
  text-align: center;
}

.auth-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}
</style>