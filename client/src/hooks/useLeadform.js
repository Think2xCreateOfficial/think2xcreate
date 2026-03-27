import { useState } from "react";
import { initialForm } from "../utils/constant/homeConstant";

export function useLeadform() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); 

  const { validate } = useLeadformValidation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    // simulate API call (replace later)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  return {
    form,
    errors,
    submitted,
    loading, 
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export function useLeadformValidation() {
  const validate = (form) => {
    const errors = {};
    
    if (!form.name?.trim()) {
      errors.name = "Name is required";
    }
    
    if (!/^\+?[\d\s\-]{10,}$/.test(form.phone)) {
      errors.phone = "Enter a valid phone number";
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email";
    }
    
    if (!form.businessType) {
      errors.businessType = "Please select a business type";
    }
    
    if (!form.service) {
      errors.service = "Please select a service";
    }
    
    return errors;
  };
  
  return { validate };
}
