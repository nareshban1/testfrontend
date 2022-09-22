import { REQUESTTYPE } from "../../api-enums";
import { userManagementLinks } from "./user-links";

export const userMgmtApiDetails = {
    getAllUsers: {
        controllerName: userManagementLinks.getAllUsers,
        requestMethod: REQUESTTYPE.GET,
    },

}