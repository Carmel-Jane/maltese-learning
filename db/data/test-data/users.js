const bcrypt = require('bcrypt');

const usersDataTest = [
    {username: 'testuser1', name:'Test 1', password: 'password1', savedWords: ['1','2']},
    {username: 'testuser2', name:'Test 2', password: 'password2', savedWords: ['1','2']},
    {username: 'testuser3', name:'Test 3', password: 'password3', savedWords: ['1','2']},
    {username: 'testuser4', name:'Test 4', password: 'password4', savedWords: ['1','2']}
];

usersDataTest.forEach(user => {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
});

module.exports = usersDataTest;