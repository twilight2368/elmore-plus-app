import apiClient from ".";

export async function signup(payload) {
  return await apiClient.post('/auth/sign-up', payload)
}

export async function signin(payload) {
  return await apiClient.post('/auth/sign-in', payload)
}

export async function logout() {
  return await apiClient.post('/auth/logout', null, {
    withCredentials: true
  })
}

export async function facebookAuth(payload) {
  return await apiClient.post('/auth/facebook-login', payload)
}
