import { createPinia, defineStore } from 'pinia';
import axios from 'axios';
const pinia = createPinia();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('BlogWeb_token') || '',
  }),
  actions: {
    async fetchToken(username, password) {
      try {
        // Gửi yêu cầu API để lấy token
        const response = await axios.post('/v1/api/users/login', { username, password });

        // Lưu token vào store và localStorage
        this.$patch((state) => {
          state.token = response.data.token;
          localStorage.setItem('BlogWeb_token', response.data.token);
        });
      } catch (error) {
        // Xử lý lỗi khi gọi API
        this.$patch((state) => {
          state.token = '';
          localStorage.removeItem('BlogWeb_token');
        });
      }
    },
  },
});

export default pinia;
