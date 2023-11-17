import api from '../api';

export async function loginUser(email, password) {
    const data = await api.post('/users/authenticate', { email, password });
    if (data.message) {
        return { error: data.message };
    }
    api.setToken(data.token);
    return data;
}