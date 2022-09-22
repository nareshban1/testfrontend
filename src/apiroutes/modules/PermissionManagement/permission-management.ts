import { REQUESTTYPE } from "../../api-enums";
import { permissionManagementLinks } from "./permission-links";

export const permissionMgmtApiDetails = {
    addPermission: {
        controllerName: permissionManagementLinks.addPermission,
        requestMethod: REQUESTTYPE.POST,
    },
    getAllPermissions: {
        controllerName: permissionManagementLinks.getAllPermissions,
        requestMethod: REQUESTTYPE.GET,
    },
    getUserPermission: {
        controllerName: permissionManagementLinks.getUserPermission,
        requestMethod: REQUESTTYPE.GET,
    },

}