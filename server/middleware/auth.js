
/**
 * Middle that check if the user is authentified via a authorization token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {object} json
 */
function isAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token !== '123456789') {
    return res.sendStatus(401).json({error: 'No credential'});
  }
  next();
}


module.exports = {isAuth};
