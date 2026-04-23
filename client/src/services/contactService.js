import { api } from './api';

class ContactService {
  async submitLeadForm(formData) {
    try {
      const payload = {
        ...formData,
        website: '',       
        confirm_email: '', 
      };
      return await api.post('/api/contact', payload);
    } catch (error) {
      throw {
        success: false,
        message: error.message || 'Failed to submit. Please try again.',
        errors:  error.errors  || {},
      };
    }
  }
}

export const contactService = new ContactService();