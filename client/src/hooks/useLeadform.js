import { useState } from "react";
import { initialForm } from "../utils/constant/homeConstant";
import { contactService } from "../services/contactService";

export function useLeadform() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [apiError, setApiError]   = useState(''); // ← new: surface server errors

  const { validate } = useLeadformValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError(''); // clear banner on new input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await contactService.submitLeadForm(form);
      setSubmitted(true);
    } catch (error) {
      // Server-side field errors (e.g. from express-validator)
      if (error.errors && typeof error.errors === 'object') {
        setErrors(error.errors);
      }
      setApiError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
    setApiError('');
  };

  return {
    form,
    errors,
    submitted,
    loading,
    apiError, // ← expose to component
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export function useLeadformValidation() {
  const validate = (form) => {
    const errors = {};

    if (!form.name?.trim())
      errors.name = 'Name is required';

    if (!/^\+?[\d\s\-]{10,}$/.test(form.phone))
      errors.phone = 'Enter a valid phone number';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = 'Enter a valid email';

    if (!form.businessType)
      errors.businessType = 'Please select a business type';

    if (!form.service)
      errors.service = 'Please select a service';

    return errors;
  };

  return { validate };
}