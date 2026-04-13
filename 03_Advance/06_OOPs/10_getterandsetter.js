class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}dhananjay`
    }

    set password(value) {
        this._password = value
    }
}

const Dhananjay = new User("dhananjay@jay.com", 123)
console.log(Dhananjay.password);
console.log(Dhananjay.email);