

class Api {
    constructor() {
        this.storageKey = 'avrillo_auth';
        this.apiPrefix = '/api';
        this.token = null;
    }

    getToken() {
        if (this.token) {
            return this.token;
        }

        let tokenData = window.localStorage.getItem(this.storageKey);

        if (tokenData) {
            this.token = JSON.parse(tokenData).token;
        }

        return this.token;
    }

    setToken(tokenData) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(tokenData));
        this.token = tokenData.token;
    }

    async quotes() {
        return axios.get(`${this.apiPrefix}/quotes`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            }
        });
    }

    async login(data = {}) {
        return axios.post(`${this.apiPrefix}/auth`, data);
    }

    logout() {
        window.localStorage.removeItem(this.storageKey);
        //handle api logout logic here.
    }
}


const api = new Api;

export default api;