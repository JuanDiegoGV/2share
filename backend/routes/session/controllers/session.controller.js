const pool = require('../../../utils/connection')
const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')

const data = {
  message: ''
}

const post = async (req, res) => {
  const { username, password } = req.body
  const passwordEncrypted = CryptoJS.SHA512(password).toString()

  try {
    pool.query(`select "id", "fullname" from "user" where "username" = '${username}' and "password" = '${passwordEncrypted}' `, async (error, results) => {
      if (error) {
        console.error("ERROR: session.controller post()", error)
        data.message = 'Error getting user'
        data.error = true
        delete data.data
        return res.status(500).send(data)
      }
      if (results.rows.length > 0) {
        const user = results.rows[0]
        var token = jwt.sign({
          id: user.id,
          name: user.fullname,
        }, process.env.JWTSECRET, { expiresIn: '7d' });
        data.message = 'User obtained'
        data.data = {
          id: user.id,
          name: user.fullname,
          token: CryptoJS.AES.encrypt(token, process.env.AESTOKEN).toString()
        }
        delete data.error
        return res.status(200).send(data)
      } else {
        data.message = 'Credentials wrong'
        delete data.data
        data.error = true
        return res.status(401).send(data)
      }
    })
  } catch (error) {
    console.error("ERROR: session.controller post() trycatch", error)
    return res.status(500)
  }
}

module.exports = {
  post
}
