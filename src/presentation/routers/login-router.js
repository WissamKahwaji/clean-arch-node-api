const httpResponse = require('../helpers/http-response')
module.exports = class LoginRouter {
  constructor (authUseCaseSpy) {
    this.authUseCaseSpy = authUseCaseSpy
  }

  route (httpRequest) {
    if (!httpRequest || !httpRequest.body || !this.authUseCaseSpy || !this.authUseCaseSpy.auth) {
      return httpResponse.serverError()
    }
    const { email, password } = httpRequest.body
    if (!email) {
      return httpResponse.badRequest('email')
    }
    if (!password) {
      return httpResponse.badRequest('password')
    }
    const accessToken = this.authUseCaseSpy.auth(email, password)
    if (!accessToken) {
      return httpResponse.unAuthorizedError()
    }
    return httpResponse.ok()
  }
}
