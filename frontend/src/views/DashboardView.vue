<template>
  <div class="dashboard">
    <div class="container">
      <h1>Welcome, {{ userName }}!</h1>
      
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">{{ accounts.length }}</div>
          <div class="stat-label">Total Accounts</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{{ nominees.length }}</div>
          <div class="stat-label">Trusted Nominees</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">30</div>
          <div class="stat-label">Inactivity Days</div>
        </div>
      </div>

      <div class="actions">
        <button class="btn" @click="showAddAccount = true">+ Add Account</button>
        <button class="btn btn-secondary" @click="showAddNominee = true">+ Add Nominee</button>
      </div>

      <div class="accounts-section">
        <h2>Your Digital Accounts</h2>
        <div v-if="accounts.length === 0" class="empty-state">
          <p>No accounts added yet. Click "Add Account" to get started.</p>
        </div>
        <div class="accounts-grid" v-else>
          <div v-for="account in accounts" :key="account.id" class="account-card">
            <h3>{{ account.platform }}</h3>
            <p class="account-name">{{ account.accountName }}</p>
            <p class="username">{{ account.username }}</p>
            <div class="account-actions">
              <button class="btn-small" @click="viewAccount(account)">View</button>
              <button class="btn-small btn-danger" @click="deleteAccount(account.id)">Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div class="nominees-section">
        <h2>Trusted Nominees</h2>
        <div v-if="nominees.length === 0" class="empty-state">
          <p>No nominees added yet. Add trusted people who can access your accounts.</p>
        </div>
        <div class="nominees-grid" v-else>
          <div v-for="nominee in nominees" :key="nominee.id" class="nominee-card">
            <h3>{{ nominee.name }}</h3>
            <p>{{ nominee.email }}</p>
            <p class="badge">{{ nominee.accounts }} accounts</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Account Modal -->
    <div v-if="showAddAccount" class="modal">
      <div class="modal-content">
        <h3>Add New Account</h3>
        <form @submit.prevent="addAccount">
          <div class="form-group">
            <label>Platform</label>
            <select v-model="newAccount.platform" required>
              <option value="">Select platform</option>
              <option value="Email">Email</option>
              <option value="Social Media">Social Media</option>
              <option value="Banking">Banking</option>
              <option value="Cloud Storage">Cloud Storage</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Account Name</label>
            <input v-model="newAccount.accountName" required placeholder="e.g., Personal Gmail">
          </div>
          <div class="form-group">
            <label>Username/Email</label>
            <input v-model="newAccount.username" required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" v-model="newAccount.password" required>
          </div>
          <div class="form-group">
            <label>Account URL (optional)</label>
            <input v-model="newAccount.accountUrl" placeholder="https://...">
          </div>
          <div class="form-actions">
            <button type="submit" class="btn">Save</button>
            <button type="button" class="btn btn-secondary" @click="showAddAccount = false">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      userName: '',
      accounts: [],
      nominees: [],
      showAddAccount: false,
      showAddNominee: false,
      newAccount: {
        platform: '',
        accountName: '',
        username: '',
        password: '',
        accountUrl: ''
      }
    }
  },
  mounted() {
    this.loadUserData()
    this.loadAccounts()
    this.loadNominees()
  },
  methods: {
    loadUserData() {
      const user = JSON.parse(localStorage.getItem('user') || '{}')
      this.userName = user.name || 'User'
    },
    loadAccounts() {
      // Sample data for now
      this.accounts = [
        {
          id: 1,
          platform: 'Gmail',
          accountName: 'Personal Email',
          username: 'john@gmail.com'
        },
        {
          id: 2,
          platform: 'Facebook',
          accountName: 'Personal Profile',
          username: 'john.doe'
        }
      ]
    },
    loadNominees() {
      // Sample data for now
      this.nominees = [
        {
          id: 1,
          name: 'Jane Doe',
          email: 'jane@email.com',
          accounts: 2
        }
      ]
    },
    async addAccount() {
      // Add account logic here
      console.log('Adding account:', this.newAccount)
      this.showAddAccount = false
      // Reset form
      this.newAccount = {
        platform: '',
        accountName: '',
        username: '',
        password: '',
        accountUrl: ''
      }
    },
    viewAccount(account) {
      alert(`Viewing ${account.accountName} - In real app, this would show decrypted password`)
    },
    deleteAccount(id) {
      if (confirm('Are you sure?')) {
        this.accounts = this.accounts.filter(a => a.id !== id)
      }
    }
  }
}
</script>

<style scoped>
.dashboard {
  padding: 40px 0;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 10px;
}

.stat-label {
  color: #666;
}

.actions {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.btn-secondary {
  background: #718096;
}

.accounts-section, .nominees-section {
  margin-bottom: 40px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.accounts-grid, .nominees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.account-card, .nominee-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.account-card h3, .nominee-card h3 {
  color: #333;
  margin-bottom: 10px;
}

.account-name {
  font-weight: 500;
  color: #667eea;
  margin-bottom: 5px;
}

.username {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.account-actions {
  display: flex;
  gap: 10px;
}

.btn-small {
  padding: 5px 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
}

.btn-danger {
  background: #e53e3e;
}

.badge {
  display: inline-block;
  background: #e2e8f0;
  padding: 3px 10px;
  border-radius: 15px;
  font-size: 12px;
  color: #4a5568;
  margin-top: 10px;
}

.empty-state {
  background: #f7fafc;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  color: #718096;
}

/* Modal styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-content h3 {
  margin-bottom: 20px;
  color: #333;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}
</style>