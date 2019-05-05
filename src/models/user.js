const fs = require('fs');
const path = require('path');

const usersFile = path.join(path.dirname(process.mainModule.filename), '..', 'data', 'users.json');

const getUsersFromFile = cb => { 
    fs.readFile(usersFile, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class User {
    constructor(username, useremail, password) {
        this.username = username;
        this.useremail = useremail;
        this.password = password;
    }

    save() {
        this.id = Math.random().toString();
        // console.log('[MODEL] save', this);
        getUsersFromFile(users => {
            users.push(this);
            fs.writeFile(usersFile, JSON.stringify(users), err => {
                console.log('error:', err)
            });
        })
    }

    static fetchAll(cb) {
        getUsersFromFile(cb);
    }

    static getUserById (id, cb) {
        getUsersFromFile(users => {
            const user = users.find(u => u.id === id);
            cb(user);
        })
    }
}