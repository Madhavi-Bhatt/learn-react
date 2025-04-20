import React from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  Button,
  TextField,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

// Mock Payment Service
const mockPaymentService = {
  async createPaymentIntent(amount) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      clientSecret: 'pi_mock_secret_key',
      paymentIntentId: 'pi_mock_id'
    };
  },

  async confirmPayment(paymentIntentId) {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      status: 'succeeded',
      paymentIntentId
    };
  }
};

// Demo Component
const PaymentDemo = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [amount, setAmount] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const steps = ['Enter Amount', 'Payment Details', 'Confirm Payment'];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handlePayment = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Create payment intent
      const { clientSecret, paymentIntentId } = await mockPaymentService.createPaymentIntent(amount);
      
      // Confirm payment
      const result = await mockPaymentService.confirmPayment(paymentIntentId);
      
      if (result.status === 'succeeded') {
        setSuccess('Payment successful!');
        handleNext();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              fullWidth
            />
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!amount || loading}
              fullWidth
            >
              Next
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Card Number"
              placeholder="4242 4242 4242 4242"
              fullWidth
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="Expiry Date"
                placeholder="MM/YY"
                fullWidth
              />
              <TextField
                label="CVC"
                placeholder="123"
                fullWidth
              />
            </Box>
            <Button
              variant="contained"
              onClick={handlePayment}
              disabled={loading}
              fullWidth
            >
              {loading ? <CircularProgress size={24} /> : 'Pay'}
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Alert severity="success">
              Payment completed successfully!
            </Alert>
            <Button
              variant="contained"
              onClick={() => setActiveStep(0)}
              fullWidth
            >
              Make Another Payment
            </Button>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {getStepContent(activeStep)}
    </Box>
  );
};

const Payment = () => {
  const paymentExampleCode = `
// Payment Service
const paymentService = {
  async createPaymentIntent(amount) {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }
    
    return response.json();
  },

  async confirmPayment(paymentIntentId) {
    const response = await fetch('/api/confirm-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentIntentId }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to confirm payment');
    }
    
    return response.json();
  }
};

// Payment Form Component
const PaymentForm = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { clientSecret, paymentIntentId } = await paymentService.createPaymentIntent(amount);
      
      // Initialize Stripe
      const stripe = await loadStripe('your_publishable_key');
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
        },
      });

      if (error) {
        throw error;
      }

      // Confirm payment
      const result = await paymentService.confirmPayment(paymentIntentId);
      
      if (result.status === 'succeeded') {
        // Handle success
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <div id="card-element" />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Payment Gateway Integration
      </Typography>
      
      <Typography variant="body1" paragraph>
        Payment gateway integration in React applications involves securely processing payments using services like Stripe, PayPal, or other payment providers. This concept covers the implementation of payment flows and handling payment states.
      </Typography>

      <Demo title="Payment Demo" description="Example of payment processing flow">
        <PaymentDemo />
      </Demo>

      <CodeBlock code={paymentExampleCode} title="Payment Integration Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Security Rules:
              <ul>
                <li>Never store sensitive data</li>
                <li>Use HTTPS</li>
                <li>Validate all inputs</li>
                <li>Follow PCI compliance</li>
              </ul>
            </li>
            <li>Payment Flow:
              <ul>
                <li>Create payment intent</li>
                <li>Collect payment details</li>
                <li>Process payment</li>
                <li>Handle success/failure</li>
              </ul>
            </li>
            <li>User Experience:
              <ul>
                <li>Show loading states</li>
                <li>Handle errors gracefully</li>
                <li>Provide clear feedback</li>
                <li>Support multiple payment methods</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Use payment provider SDKs</li>
                <li>Implement webhook handling</li>
                <li>Test with test cards</li>
                <li>Handle edge cases</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Payment; 