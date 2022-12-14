import { REQUESTTYPE } from "./api-enums"
import { apiLinks } from "./api-links"
import { roleMgmtApiDetails } from "./modules/RoleManagement/role-management"
import { userMgmtApiDetails } from "./modules/UserManagement/user-management"
import { permissionMgmtApiDetails } from "./modules/PermissionManagement/permission-management"
import { moduleMgmtApiDetails } from "./modules/ModuleManagement/module-management"

export const apiDetails = {
  register: {
    controllerName: apiLinks.login,
    requestMethod: REQUESTTYPE.POST,
  },
  login: {
    controllerName: apiLinks.register,
    requestMethod: REQUESTTYPE.POST,
  },
  verifyEmail: {
    controllerName: apiLinks.verifyEmail,
    requestMethod: REQUESTTYPE.POST,
  },
  requestEmailVerification: {
    controllerName: apiLinks.requestEmailVerification,
    requestMethod: REQUESTTYPE.POST,
  },
  resetPassword: {
    controllerName: apiLinks.resetPassword,
    requestMethod: REQUESTTYPE.POST,
  },
  requestPasswordChange: {
    controllerName: apiLinks.requestPasswordChange,
    requestMethod: REQUESTTYPE.POST,
  },
  roleMgmtApiDetails,
  userMgmtApiDetails,
  permissionMgmtApiDetails,
  moduleMgmtApiDetails,
}
