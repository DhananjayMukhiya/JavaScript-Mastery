class User {
    constructor(username){
        this.username = username
    }

    logMe(){
       console.log(`USERNAME: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const jay = new User("Jay")
console.log(jay.createId());