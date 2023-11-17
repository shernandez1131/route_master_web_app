class Api {
    constructor(baseUrl){
        if (Api.instance) {
            return Api.instance;
        }
        this.baseUrl = baseUrl;
        this.token = null;
        Api.instance = this;
    }

    static getInstance(baseUrl) {
        if (!this.instance) {
            this.instance = new Api(baseUrl);
        }
        return this.instance;
    }

    setToken(token){
        this.token = token;
    }

    async get(path, params = {}){
        const url = new URL(`${this.baseUrl}${path}`);
        url.search = new URLSearchParams(params).toString();
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });
        return response.json();
    }

    async post(path, body = {}){
        const url = new URL(`${this.baseUrl}${path}`);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }

    async put(path, body = {}){
        const url = new URL(`${this.baseUrl}${path}`);
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(body)
        });
        return response.json();
    }

    async delete(path){
        const url = new URL(`${this.baseUrl}${path}`);
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        });
        return response.json();
    }
}

const api = Api.getInstance("https://routemasterapi.azurewebsites.net/api");

export default api;