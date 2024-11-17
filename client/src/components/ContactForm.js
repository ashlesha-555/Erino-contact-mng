import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import axios from 'axios';

// Validation Schema using Yup
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[a-zA-Z]+$/, 'First Name should contain only alphabets'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[a-zA-Z]+$/, 'Last Name should contain only alphabets'),
  email: yup
    .string()
    .email('Invalid email format')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .matches(/^[0-9]{10}$/, 'Phone Number must be 10 digits'),
  company: yup.string().required('Company name should not be empty'),
  jobTitle: yup.string().required('Role should not be empty'),
});

const ContactForm = ({ fetchContacts }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/contacts', data);
      fetchContacts();
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to add contact. Please try again.');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ my: 2 }}>
      <Typography variant="h5" gutterBottom>
        Add New Contact
      </Typography>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('firstName')}
            label="First Name"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            {...register('lastName')}
            label="Last Name"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12}>
          <TextField
            {...register('email')}
            label="Email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={12}>
          <TextField
            {...register('phoneNumber')}
            label="Phone Number"
            fullWidth
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
        </Grid>

        {/* Company Name */}
        <Grid item xs={12}>
          <TextField
            {...register('company')}
            label="Company"
            fullWidth
            error={!!errors.company}
            helperText={errors.company?.message}
          />
        </Grid>

        {/* Role */}
        <Grid item xs={12}>
          <TextField
            {...register('jobTitle')}
            label="Role"
            fullWidth
            error={!!errors.jobTitle}
            helperText={errors.jobTitle?.message}
          />
        </Grid>
      </Grid>

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
