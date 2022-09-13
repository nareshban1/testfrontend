import axios from "axios";
import { useEffect, useState } from "react";
import ApiRequest from "./services/api-services";

const collections = {
  register: {
    controllerName: "http://localhost:6969/api/register",
    requestMethod: "POST",
  },
  login: {
    controllerName: "http://localhost:6969/api/login",
    requestMethod: "POST",
    // reqBodyType:"FORM-DATA"
  },
  role: {
    controllerName: "http://localhost:6969/api/roles/add",
    requestMethod: "POST",
    // reqBodyType:"FORM-DATA"
  },
  roles: {
    controllerName: "http://localhost:6969/api/roles/all",
    requestMethod: "GET",
  },
  module: {
    controllerName: "http://localhost:6969/api/module/add",
    requestMethod: "POST",
  },
  modules: {
    controllerName: "http://localhost:6969/api/module/all",
    requestMethod: "GET",
  },
  permissions: {
    controllerName: "http://localhost:6969/api/permissions/all",
    requestMethod: "GET",
  },
  adPermissions: {
    controllerName: "http://localhost:6969/api/permissions/add",
    requestMethod: "POST",
  },
};

function App() {
  const [role, setRole] = useState<any>();
  const [moduleName, setModuleName] = useState<any>();
  const [allRoles, setRoles] = useState<any>([]);
  const [allModules, setModules] = useState<any>([]);
  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [selectedRoles, setSelectedRoles] = useState<any>();
  const [selectedModule, setSelectedModule] = useState<any>();

  const [roleToAssignModule, setRoleToAssignModule] = useState<any>();

  const createRole = async () => {
    try {
      const res = await ApiRequest(collections.role, { name: role }, null);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllRoles = async () => {
    try {
      const res = await ApiRequest(collections.roles, {}, null);
      setRoles(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async () => {
    const detail = {
      name: name,
      email: email,
      password: password,
      role: selectedRoles || [],
    };
    try {
      const res = await ApiRequest(collections.register, { detail }, null);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const createModule = async () => {
    try {
      const res = await ApiRequest(
        collections.module,
        { name: moduleName },
        null
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllModules = async () => {
    try {
      const res = await ApiRequest(collections.modules, {}, null);

      setModules(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const assignRoleAModule = () => {
    console.log("first"); // i am here
  };

  useEffect(() => {
    fetchAllRoles();
    fetchAllModules();
  }, []);
  return (
    <>
      <div>
        <h1>Create Role</h1>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter Role Name"
        />
        <button onClick={createRole}>Create Role</button>
      </div>

      <div>
        <h1>Register User</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
        <label htmlFor="roles">Choose a Role:</label>

        <select
          value={[]}
          onChange={(e) => {
            let data = [...selectedRoles];
            data.push(e.target.value);
            setSelectedRoles(data);
          }}
          name="roles"
          id="roles"
        >
          {allRoles.map((role: any) => (
            <option value={role._id}>{role.name}</option>
          ))}
        </select>
        <button onClick={registerUser}>Assign Role</button>
      </div>

      <div>
        <h1>Create Module</h1>
        <input
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="Enter Module Name"
        />
        <button onClick={createModule}>Create Module</button>
      </div>

      <div>
        <h1>Roles</h1>

        <table>
          <tr style={{ color: "red" }}>Role Name</tr>

          {allRoles.map((role: any) => (
            <tr>
              <td
                onClick={() => setRoleToAssignModule(role._id)}
                key={role._id}
              >
                {role.name}
              </td>
            </tr>
          ))}
        </table>

        <label style={{ color: "green" }} htmlFor="roles">
          Give Permission of modules:
        </label>

        <select
          value={allModules}
          onChange={(e) => setSelectedModule(e.target.value)}
          name="modules"
          id="modules"
        >
          {allModules.map((module: any) => (
            <option value={module._id}>{module.name}</option>
          ))}
        </select>

        <button onClick={assignRoleAModule}>Assign Role a module</button>
      </div>
    </>
  );
}

export default App;
