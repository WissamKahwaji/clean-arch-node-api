const MissingParamError = require('./missing-param-error')
const UnAuthorizedError = require('../helpers/unauthorized-error')
module.exports = class httpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }

  static unAuthorizedError () {
    return {
      statusCode: 401,
      body: new UnAuthorizedError()
    }
  }

  static ok () {
    return {
      statusCode: 200
    }
  }
}
