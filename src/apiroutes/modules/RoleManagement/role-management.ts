import { REQUESTTYPE } from "../../api-enums";
import { roleManagementLinks } from "./role-links";

export const roleMgmtApiDetails = {
    addRole: {
        controllerName: roleManagementLinks.addRole,
        requestMethod: REQUESTTYPE.POST,
    },
    getAllRoles: {
        controllerName: roleManagementLinks.getAllRoles,
        requestMethod: REQUESTTYPE.POST,
    },

}