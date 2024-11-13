import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulate logout and redirect to login page
    navigate('/login');
  };

  // Inline styles for the page
  const styles = {
    container: {
      textAlign: 'center',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
    },
    heroSection: {
      background: 'linear-gradient(to right, #4caf50, #81c784)',
      color: 'white',
      padding: '50px 20px',
    },
    heroTitle: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    heroText: {
      fontSize: '1.2rem',
      marginBottom: '30px',
    },
    featuresSection: {
      marginTop: '40px',
      padding: '20px',
    },
    featuresTitle: {
      fontSize: '2rem',
      marginBottom: '30px',
    },
    featuresGrid: {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '20px',
    },
    featureCard: {
      width: '30%',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    featureIcon: {
      fontSize: '40px',
      marginBottom: '10px',
      color: '#4caf50',
    },
    featureText: {
      fontSize: '1.1rem',
    },
    logoutButton: {
      marginTop: '30px',
      padding: '10px 20px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    footer: {
      marginTop: '50px',
      backgroundColor: '#333',
      color: 'white',
      padding: '10px 0',
    },
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to the Accounting System</h1>
        <p style={styles.heroText}>Manage your finances, track invoices, and simplify tax calculations with ease.</p>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>Key Features</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
           
            <h3>Automated Reports</h3>
            <p style={styles.featureText}>Generate comprehensive reports with a click of a button.</p>
          </div>
          <div style={styles.featureCard}>
           
            <h3>Invoice Management</h3>
            <p style={styles.featureText}>Track and manage all your invoices effortlessly.</p>
          </div>
          <div style={styles.featureCard}>
            
            <h3>Tax Calculations</h3>
            <p style={styles.featureText}>Simplified tax management to keep you compliant.</p>
          </div>
        </div>
      </section>

      {/* Logout Button */}
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Accounting System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
