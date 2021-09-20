const queries = {
    signup_query,
};

function signup_query() {
    const sql_query = "INSERT INTO users (userHandle, userPassword, userName, userPhoneNumber, userInsertedTime, userUpdatedTime , userEmailAddress) VALUES (?,?,?,?,?,?,?)";
    return sql_query;
}

module.exports = queries;