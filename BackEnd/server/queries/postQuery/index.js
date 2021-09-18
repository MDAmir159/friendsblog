
const queries = {
    postComment_query,
    updateCommentNumber_query,
    fetchComments_query,
    checkLiked,
    likePost,
    IncLikeNumber_query,
    unlikePost,
    DecLikeNumebr_query
};

function postComment_query() {
    const sql_query = `INSERT INTO comments (postId, userId, commentDescription, commentBy, commentWritingTime) VALUES (?,?,?,?,?)`;
    return sql_query;
}

function updateCommentNumber_query(postId) {
    const sql_query1 = `Update posts set comments_number = comments_number + 1 where postId = ${postId}`;
    return sql_query1;
}

function fetchComments_query(postId) {
    const sql_query1 = `SELECT x.countt, commentId, postId, userId, commentDescription, commentBy, commentWritingTime FROM comments, (SELECT COUNT(postId) as countt FROM comments WHERE postId = '${postId}') as x WHERE postId = '${postId}'`;
    return sql_query1;
}

function checkLiked(postId, userId) {
    const sql_query1 = `SELECT * FROM relation_user_post WHERE postId = '${postId}' AND userId = '${userId}'`
    return sql_query1;
}

function likePost() {
    const sql_query1 = `INSERT INTO relation_user_post (userId, postId) VALUES (?,?)`;
    return sql_query1;
}

function IncLikeNumber_query(postId) {
    const sql_query1 = `Update posts set likes_number = likes_number + 1 where postId = '${postId}'`;
    return sql_query1;
}

function unlikePost(postId, userId) {
    const sql_query1 = `DELETE FROM relation_user_post WHERE postId = '${postId}' AND userId = '${userId}'`
    return sql_query1;
}

function DecLikeNumebr_query(postId) {
    const sql_query1 = `Update posts set likes_number = likes_number - 1 where postId = '${postId}'`;
    return sql_query1;
}

module.exports = queries;

