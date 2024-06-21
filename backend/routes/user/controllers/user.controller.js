const pool = require('../../../utils/connection')
const CryptoJS = require('crypto-js')

const data = {
  message: ''
}

const post = async (req, res) => {
  const { username, fullname, password } = req.body
  const passwordEncrypted = CryptoJS.SHA512(password).toString()

  try {
    pool.query(`insert into "user" ("username", "fullname", "password") values ('${username}', '${fullname}', '${passwordEncrypted}') returning "id"`,
      async (error, results) => {
        if (error) {
          console.error("ERROR: user.controller post()", error)
          data.message = 'Error creating user'
          data.error = true
          delete data.data
          return res.status(500).send(data)
        } else {
          data.message = 'User created'
          data.data = {
            id: results.rows[0].id
          }
          delete data.error
          return res.status(201).send(data)
        }
      }
    )
  } catch (error) {
    console.error("ERROR: user.controller post() trycatch", error)
    return res.status(500)
  }
}

module.exports = {
  post
}
