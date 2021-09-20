const queries = {
    login
}

function login_query(userHandleName, userEmailAddress,  userPassword) {
    const sql_query = `SELECT * FROM users where userHandle = '${userHandleName}' and userEmailAddress = '${userEmailAddress}' and userPassword = '${userPassword}'`
}

module.exports = queries;