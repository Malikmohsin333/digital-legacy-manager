<template>
  <div class="home">
    <div class="hero">
      <div class="container">
        <h1>Secure Your Digital Legacy</h1>
        <p class="subtitle">Never lose access to your digital assets. Ensure your loved ones can access what matters most.</p>
        <div class="cta-buttons">
          <router-link to="/register" class="btn btn-primary">Get Started</router-link>
          <router-link to="/login" class="btn btn-secondary">Login</router-link>
        </div>
      </div>
    </div>

    <div class="features">
      <div class="container">
        <h2>How It Works</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🔐</div>
            <h3>Secure Storage</h3>
            <p>Your passwords and account details are encrypted and stored safely</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Trusted Nominees</h3>
            <p>Assign trusted people to access specific accounts after verification</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⏰</div>
            <h3>Dead Man's Trigger</h3>
            <p>Automatic activation after period of inactivity</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3>Easy Management</h3>
            <p>Simple dashboard to manage all your digital accounts</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn-primary {
  background: white;
  color: #667eea;
  padding: 15px 30px;
  font-size: 18px;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 30px;
  font-size: 18px;
}

.features {
  padding: 80px 0;
  background: #f8f9fa;
}

.features h2 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 60px;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}
</style>