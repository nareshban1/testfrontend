import { REQUESTTYPE } from "../../api-enums"
import { moduleManagementLinks } from "./module-links"

export const moduleMgmtApiDetails = {
  addModule: {
    controllerName: moduleManagementLinks.addModule,
    requestMethod: REQUESTTYPE.POST,
  },
  getAllModules: {
    controllerName: moduleManagementLinks.getAllModules,
    requestMethod: REQUESTTYPE.GET,
  },
}
