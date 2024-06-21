const pool = require('../../../utils/connection')

const data = {
  message: ''
}

const gets = async (req, res) => {
  const { page, perPage } = req.query

  let offset = -1

  if (page) offset = page * (perPage || 10)

  let query = 'select * from "product"'
  let count = 'select count(id) from "product"'
  if (offset >= 0) query += ' offset ' + offset + ' limit ' + (perPage || 10)

  try {
    pool.query(query + ';' + count, async (error, results) => {
      if (error) {
        console.error("ERROR: products.controller gets()", error)
        data.message = 'Error getting products'
        data.error = true
        delete data.data
        return res.status(500).send(data)
      }
      if (results[0].rows.length > 0) {
        data.message = 'Products obtained'
        if (offset >= 0) data.totalPages = Math.ceil(parseInt(results[1].rows[0].count) / (perPage || 10))
        data.data = results[0].rows
        delete data.error
        return res.status(200).send(data)
      } else {
        data.message = 'No products with the specified data'
        delete data.data
        data.error = true
        return res.status(200).send(data)
      }
    })
  } catch (error) {
    console.error("ERROR: products.controller gets() trycatch", error)
    return res.status(500)
  }
}

module.exports = {
  gets
}
