const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ResourceNotExistException = use('App/Exception/ResourceNotExistException')

class AuthorizationService {
  verifyPermission(resource, user) {
    if(!resource){
      throw new ResourceNotExistException();
    }
    if(resource.user-id != user.id){
      throw new Error();
    }
  }
} 

module.exports = new AuthorizationService();