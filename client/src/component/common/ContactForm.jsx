import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { businessTypes, serviceOptions } from '../../utils/constant/contactData';
import { contactService } from '../../services/contactService';

/**
 * Unified Shared Contact Form Component
 * Used across Home page, Contact page, and all lead capture sections.
 * Features Radio Options for Business Type & Multi-Select Chips for Services.
 */
export const ContactForm = ({ className = '', title, subtitle }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    services: [],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError('');
  };

  const handleRadioChange = (type) => {
    setForm((prev) => ({ ...prev, businessType: type }));
    if (errors.businessType) {
      setErrors((prev) => ({ ...prev, businessType: '' }));
    }
    if (apiError) setApiError('');
  };

  const handleServiceToggle = (option) => {
    setForm((prev) => {
      const exists = prev.services.includes(option);
      const updated = exists
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option];
      return { ...prev, services: updated };
    });
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
    if (apiError) setApiError('');
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.phone.trim() || !/^\+?[\d\s-]{10,}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.businessType) newErrors.businessType = 'Please select a business type';
    if (form.services.length === 0) newErrors.services = 'Please select at least one service';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        businessType: form.businessType,
        service: form.services.join(', '),
        message: form.message.trim() || 'Interested in growing business digital presence.'
      };

      await contactService.submitLeadForm(payload);
      setSubmitted(true);
    } catch (err) {
      setApiError(err?.message || 'Failed to submit form. Please try again or connect on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      phone: '',
      email: '',
      businessType: '',
      services: [],
      message: ''
    });
    setErrors({});
    setSubmitted(false);
    setApiError('');
  };

  return (
    <div className={`bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs ${className}`}>
      
      {title && (
        <div className="mb-6 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-tight">{title}</h3>
          {subtitle && <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">{subtitle}</p>}
        </div>
      )}

      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-black text-gray-900">Inquiry Sent Successfully!</h3>
          <p className="text-sm text-gray-500 font-medium max-w-md mx-auto leading-relaxed">
            Thank you for connecting with Think2xCreate. Our strategy team will review your business requirements and contact you shortly.
          </p>
          <button
            onClick={handleReset}
            className="inline-block bg-gray-900 hover:bg-black text-white font-extrabold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer mt-2"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          
          {apiError && (
            <div className="flex items-center gap-2 p-3.5 bg-red-50 border border-red-200 rounded-2xl text-xs font-bold text-red-700">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{apiError}</span>
            </div>
          )}

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="unified-name" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
                Your Name <span className="text-yellow-500">*</span>
              </label>
              <input
                id="unified-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Anand Kumar"
                className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none transition-all ${
                  errors.name ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100'
                }`}
              />
              {errors.name && <p className="text-xs font-bold text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="unified-phone" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-yellow-500">*</span>
              </label>
              <input
                id="unified-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none transition-all ${
                  errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100'
                }`}
              />
              {errors.phone && <p className="text-xs font-bold text-red-500 mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="unified-email" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-yellow-500">*</span>
            </label>
            <input
              id="unified-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. anand@company.com"
              className={`w-full px-4 py-3 bg-gray-50 border rounded-2xl text-sm font-semibold text-gray-900 focus:bg-white focus:outline-none transition-all ${
                errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-200' : 'border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100'
              }`}
            />
            {errors.email && <p className="text-xs font-bold text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Business Type — Radio Buttons Option */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
                Business Type <span className="text-yellow-500">*</span>
              </label>
              <span className="text-[10px] font-bold text-gray-400">(Select one option)</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1" role="radiogroup" aria-label="Business Type">
              {businessTypes.map((type) => {
                const isChecked = form.businessType === type;
                return (
                  <label
                    key={type}
                    onClick={() => handleRadioChange(type)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border select-none ${
                      isChecked
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-xs scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="businessTypeRadio"
                      value={type}
                      checked={isChecked}
                      onChange={() => handleRadioChange(type)}
                      className="sr-only"
                    />
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center transition-colors ${
                        isChecked ? 'bg-black text-yellow-400' : 'border border-gray-300 bg-white'
                      }`}
                    >
                      {isChecked && <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                    </div>
                    <span>{type}</span>
                  </label>
                );
              })}
            </div>
            {errors.businessType && <p className="text-xs font-bold text-red-500 mt-1.5">{errors.businessType}</p>}
          </div>

          {/* Services — Multi-Select Chips */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-black text-gray-700 uppercase tracking-wider">
                Services Needed <span className="text-yellow-500">*</span>
              </label>
              <span className="text-[10px] font-bold text-gray-400">(Select one or multiple)</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1" role="group" aria-label="Services Needed">
              {serviceOptions.map((option) => {
                const isSelected = form.services.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleServiceToggle(option)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border select-none ${
                      isSelected
                        ? 'bg-yellow-400 text-black border-yellow-400 shadow-xs scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-black text-yellow-400' : 'border border-gray-300 bg-white'
                      }`}
                    >
                      {isSelected && <span className="text-[10px] font-black leading-none">✓</span>}
                    </div>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
            {errors.services && <p className="text-xs font-bold text-red-500 mt-1.5">{errors.services}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="unified-message" className="block text-xs font-black text-gray-700 uppercase tracking-wider mb-1.5">
              Tell Us About Your Project (Optional)
            </label>
            <textarea
              id="unified-message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              placeholder="Briefly describe your business goals or requirements..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm font-semibold text-gray-900 focus:bg-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 focus:outline-none transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                <span>Sending Request...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Growth Inquiry</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-gray-400 text-center font-medium">
            We respect your privacy. Your information is 100% secure and never shared.
          </p>

        </form>
      )}

    </div>
  );
};

export default ContactForm;
