const pool = require('../../../utils/connection')

const data = {
  message: ''
}

const gets = async (req, res) => {
  const { page, perPage } = req.query

  let offset = -1

  if (page) offset = page * (perPage || 10)

  let query = 'select "name", "user_products"."id", "state" from "user_products" join "product" on "user_products"."product_id" = "product"."id" where "user_id" = ' + req.userId
  let count = 'select count("user_products"."id") from "user_products" join "product" on "user_products"."product_id" = "product"."id" where "user_id" = ' + req.userId
  if (offset >= 0) query += ' offset ' + offset + ' limit ' + (perPage || 10)

  try {
    pool.query(query + ';' + count, async (error, results) => {
      if (error) {
        console.error("ERROR: userProducts.controller gets()", error)
        data.message = 'Error getting user products'
        data.error = true
        delete data.data
        return res.status(500).send(data)
      }
      if (results[0].rows.length > 0) {
        data.message = 'User products obtained'
        if (offset >= 0) data.totalPages = Math.ceil(parseInt(results[1].rows[0].count) / (perPage || 10))
        data.data = results[0].rows
        delete data.error
        return res.status(200).send(data)
      } else {
        data.message = 'No user products with the specified data'
        delete data.data
        data.error = true
        return res.status(200).send(data)
      }
    })
  } catch (error) {
    console.error("ERROR: userProducts.controller gets() trycatch", error)
    return res.status(500)
  }
}

const get = async (req, res) => {
  const { id } = req.params
  try {
    pool.query(`select * from "user_products" join "product" on "user_products"."product_id" = "product"."id" where "user_products"."user_id" = ${req.userId} and "user_products"."id" = ${id}`,
      async (error, results) => {
        if (error) {
          console.error("ERROR: userProducts.controller get()", error)
          data.message = 'Error getting user product'
          data.error = true
          delete data.data
          return res.status(500).send(data)
        }
        if (results.rows.length > 0) {
          data.message = 'User product obtained'
          data.data = results.rows[0]
          delete data.error
          return res.status(200).send(data)
        } else {
          data.message = 'User product not exists'
          data.error = true
          delete data.data
          return res.status(200).send(data)
        }
      }
    )
  } catch (error) {
    console.error("ERROR: userProducts.controller get() trycatch", error)
    return res.status(500)
  }
}

const post = async (req, res) => {
  const { productId } = req.body
  try {
    pool.query(`insert into "user_products" ("product_id", "user_id") values (${productId}, ${req.userId}) returning "id"`,
      async (error, results) => {
        if (error) {
          console.error("ERROR: userProducts.controller post()", error)
          data.message = 'Error creating user product'
          data.error = true
          delete data.data
          return res.status(500).send(data)
        } else {
          data.message = 'User product created'
          data.data = {
            id: results.rows[0].id
          }
          delete data.error
          return res.status(201).send(data)
        }
      }
    )
  } catch (error) {
    console.error("ERROR: userProducts.controller post() trycatch", error)
    return res.status(500)
  }
}

const put = async (req, res) => {
  const { id } = req.params
  const { state } = req.body
  try {
    pool.query(`update "user_products" set "state" = '${state}' where "user_id" = ${req.userId} and "id" = ${id}`,
      async (error, results) => {
        if (error) {
          console.error("ERROR: userProducts.controller put()", error)
          data.message = 'Error updating user product'
          data.error = true
          delete data.data
          return res.status(500).send(data)
        } else {
          data.message = 'User product updated'
          delete data.error
          return res.status(200).send(data)
        }
      }
    )
  } catch (error) {
    console.error("ERROR: userProducts.controller put() trycatch", error)
    return res.status(500)
  }
}

const remove = async (req, res) => {
  const { productId } = req.params
  try {
    pool.query(`delete from "user_products" where "id" = ${productId} and "user_id" = ${req.userId}`,
      async (error, results) => {
        if (error) {
          console.error("ERROR: userProducts.controller remove()", error)
          data.message = 'Error deleting user product'
          data.error = true
          delete data.data
          return res.status(500).send(data)
        } else {
          data.message = 'User product deleted'
          delete data.error
          return res.status(200).send(data)
        }
      }
    )
  } catch (error) {
    console.error("ERROR: userProducts.controller remove() trycatch", error)
    return res.status(500)
  }
}

module.exports = {
  gets,
  get,
  post,
  put,
  remove
}
