import apiClient from ".";

export async function getUser() {
  return await apiClient.get('/users', {
    withCredentials: true
  })
}
