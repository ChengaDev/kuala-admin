class Auth {
    constructor() {
        this.authenticated = false;
    }

    login() {
        this.authenticated = true;
    }

    logout() {
        this.authenticated = false;
    }

    isAuthenticated() {
        debugger;
        return this.authenticated;
    }
}

export default new Auth();
