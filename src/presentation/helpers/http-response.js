const UnAuthorizedError = require('../helpers/unauthorized-error')
const ServerError = require('./server-error')
module.exports = class httpResponse {
  static badRequest (error) {
    return {
      statusCode: 400,
      body: error
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unAuthorizedError () {
    return {
      statusCode: 401,
      body: new UnAuthorizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
