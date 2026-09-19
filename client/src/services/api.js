const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL ? baseURL.replace(/\/+$/, '') : '';
  }

  async request(endpoint, options = {}) {
    const formattedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = this.baseURL ? `${this.baseURL}${formattedEndpoint}` : formattedEndpoint;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);
      const data = await response.json();

      if (!response.ok) {
        throw {
          status:   response.status,
          message:  data.message || 'Request failed',
          errors:   data.errors  || {},
        };
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        throw { message: 'Request timed out. Please try again.' };
      }
      throw error;
    }
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new ApiService(API_BASE_URL);