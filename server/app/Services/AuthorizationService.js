class AuthorizationService {
  verifyPermission(resource, user) {
    if(resource.user-id != user.id){
      throw new Error();
    }
  }
} 