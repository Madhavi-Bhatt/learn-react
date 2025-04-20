import React, { useState } from 'react';
import { 
  Typography, 
  Box, 
  Paper, 
  TextField, 
  Button, 
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormHelperText
} from '@mui/material';
import CodeBlock from '../../components/common/CodeBlock';
import Demo from '../../components/common/Demo';

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    subscribe: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.country) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission
    }
  };

  const formExampleCode = `
import React, { useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem } from '@mui/material';

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Name"
      />
      <TextField
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        label="Email"
      />
      <FormControl>
        <Select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <MenuItem value="us">United States</MenuItem>
          <MenuItem value="uk">United Kingdom</MenuItem>
          <MenuItem value="ca">Canada</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit">Submit</Button>
    </form>
  );
};
`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Forms & Events
      </Typography>
      
      <Typography variant="body1" paragraph>
        Forms in React are controlled components where form data is handled by the state within the component.
      </Typography>

      <Demo title="Form Example" description="A complete form with validation">
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            name="age"
            label="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            error={!!errors.age}
            helperText={errors.age}
          />
          <FormControl error={!!errors.country}>
            <InputLabel>Country</InputLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
              label="Country"
            >
              <MenuItem value="us">United States</MenuItem>
              <MenuItem value="uk">United Kingdom</MenuItem>
              <MenuItem value="ca">Canada</MenuItem>
            </Select>
            {errors.country && <FormHelperText>{errors.country}</FormHelperText>}
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
            }
            label="Subscribe to newsletter"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </Demo>
      <CodeBlock code={formExampleCode} title="Form Example Code" />

      <Paper sx={{ p: 2, mt: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" gutterBottom>
          Things to Remember
        </Typography>
        <Typography variant="body2" component="div">
          <ul>
            <li>Form Element Rules:
              <ul>
                <li>Use value prop for controlled inputs</li>
                <li>Use onChange for updates</li>
                <li>Handle all form elements (input, select, textarea)</li>
                <li>Prevent default form submission</li>
              </ul>
            </li>
            <li>Event Handling Rules:
              <ul>
                <li>Use camelCase for event names</li>
                <li>Pass function references</li>
                <li>Use event.preventDefault() when needed</li>
                <li>Access event.target.value for inputs</li>
              </ul>
            </li>
            <li>Form State Rules:
              <ul>
                <li>Initialize state for each field</li>
                <li>Update state on every change</li>
                <li>Validate on change or submit</li>
                <li>Handle form submission</li>
              </ul>
            </li>
            <li>Best Practices:
              <ul>
                <li>Use controlled components</li>
                <li>Implement proper validation</li>
                <li>Handle all edge cases</li>
                <li>Provide user feedback</li>
              </ul>
            </li>
          </ul>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Forms; 