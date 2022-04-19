import apiClient from 'services/api/apiService';
import queryString from 'query-string';

export const authService = {
  login(params) {
    return apiClient.request({
      method: 'POST',
      url: 'uaa-service/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: 'my-api',
        password: '12345678',
      },
      data: queryString.stringify(params),
    });
  },

  register(params) {
    return apiClient.request({
      method: 'POST',
      url: 'uaa-service/public-api/accounts',
      params: params,
    });
  },

  refreshToken(refresh_token: string) {
    return apiClient.request({
      method: 'POST',
      url: 'uaa-service/oauth/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: 'my-api',
        password: '12345678',
      },
      data: queryString.stringify({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    });
  },
};
