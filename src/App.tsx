import axios from "axios"
import { useEffect, useState } from "react"
import ApiRequest from "./services/ApiServices/api-services"
import Select from "react-select"
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  // const [role, setRole] = useState<any>()
  // const [moduleName, setModuleName] = useState<any>()
  // const [allRoles, setRoles] = useState<any>([])
  // const [allModules, setModules] = useState<any>([])
  // const [allPermissions, setAllPermissions] = useState<any>([])
  // const [allUsers, setAllUsers] = useState<any>([])
  // const [name, setName] = useState<any>("")
  // const [email, setEmail] = useState<any>("")
  // const [password, setPassword] = useState<any>("")
  // const [selectedRoles, setSelectedRoles] = useState<any[]>([])
  // const [selectedRole, setSelectedRole] = useState<any>()
  // const [selectedModule, setSelectedModule] = useState<any>()
  // const [checkedState, setCheckedState] = useState(new Array(permissions.length).fill(false))
  // const [roleToAssignModule, setRoleToAssignModule] = useState<any>()



  // const createRole = async () => {
  //   try {
  //     const res = await ApiRequest(collections.role, { name: role }, null)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchAllRoles = async () => {
  //   try {
  //     const res = await ApiRequest(collections.roles, {}, null)
  //     setRoles(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const registerUser = async () => {
  //   const detail = {
  //     name: name,
  //     email: email,
  //     password: password,
  //     roles:
  //       selectedRoles.map((role) => {
  //         return { name: role.name, id: role._id }
  //       }) || [],
  //   }
  //   try {
  //     const res = await ApiRequest(collections.register, { ...detail }, null)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  // const getUserPermissions = async () => {
  //   try {
  //     const res = await ApiRequest(collections.getUserPermissions, {}, null)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const createModule = async () => {
  //   try {
  //     const res = await ApiRequest(collections.module, { name: moduleName }, null)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchAllModules = async () => {
  //   try {
  //     const res = await ApiRequest(collections.modules, {}, null)

  //     setModules(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const assignRoleAModule = async () => {
  //   const reqData = {
  //     moduleId: selectedModule?._id,
  //     moduleName: selectedModule?.name,
  //     roleId: selectedRole?._id,
  //     roleName: selectedRole?.name,
  //     allowCreate: checkedState[0],
  //     allowUpdate: checkedState[1],
  //     allowDelete: checkedState[2],
  //     allowRead: checkedState[3],
  //   }
  //   try {
  //     const res = await ApiRequest(collections.addPermissions, reqData, null)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchAllPermissions = async () => {
  //   try {
  //     const res = await ApiRequest(collections.permissions, {}, null)

  //     setAllPermissions(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const fetchAllUsers = async () => {
  //   try {
  //     const res = await ApiRequest(collections.allUsers, {}, null)
  //     setAllUsers(res.data.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleOnChange = (position: number) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //     index === position ? !item : item,
  //   )
  //   setCheckedState(updatedCheckedState)
  // }
  // useEffect(() => {
  //   fetchAllRoles()
  //   fetchAllModules()
  //   fetchAllPermissions()
  //   fetchAllUsers()
  //   getUserPermissions()
  // }, [])
  return (
    <div className='container'>
      {/* <div className='mb-5'>
        <h3>Roles</h3>
        <div className='d-flex align-items-center justify-content-between'>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder='Enter Role Name'
          />
          <button onClick={createRole}>Create Role</button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Role Name</th>
            </tr>
          </thead>
          <tbody>
            {allRoles.map((role: any, index: number) => {
              return (
                <tr key={role._id}>
                  <th scope='row'>{index + 1}</th>
                  <td> {role.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className='mb-5'>
        <h3>Register User</h3>
        <div className='row gx-2 align-items-center'>
          <div className='col-2'>
            <input
              type='text'
              className='w-100'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Name'
            />
          </div>
          <div className='col-3'>
            <input
              type='text'
              className='w-100'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
            />
          </div>
          <div className='col-2'>
            <input
              type='text'
              className='w-100'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password'
            />
          </div>
          <div className='col-4'>
            <Select
              options={allRoles.map((role: any) => {
                return { ...role, label: role.name, value: role._id }
              })}
              value={selectedRoles}
              onChange={(value) => {
                console.log(value)
                setSelectedRoles([...value])
              }}
              placeholder='Select Role'
              isMulti
            />
          </div>
          <div className='col-1 text-end'>
            <button onClick={registerUser}>Create</button>
          </div>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>User Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Roles</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user: any, index: number) => {
              return (
                <tr key={user._id}>
                  <th scope='row'>{index + 1}</th>
                  <td> {user.name}</td>
                  <td> {user.email}</td>
                  <td>
                    {" "}
                    {user.roles.map((role: any) => (
                      <span className='badge bg-secondary me-2' key={role.id}>
                        {role.name}
                      </span>
                    ))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>


      <div className='mb-5'>
        <h3>Module</h3>
        <div className='d-flex align-items-center justify-content-between'>
          <input
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            placeholder='Enter Module Name'
          />
          <button onClick={createModule}>Create Module</button>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Module Name</th>
            </tr>
          </thead>
          <tbody>
            {allModules.map((module: any, index: number) => {
              return (
                <tr key={module._id}>
                  <th scope='row'>{index + 1}</th>
                  <td> {module.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className='mb-5'>
        <h3 className=''>Module Permissions</h3>
        <div className='row gx-2 align-items-center m-0'>
          <div className='col-3'>
            <Select
              options={allModules.map((module: any) => {
                return { ...module, label: module.name, value: module._id }
              })}
              value={selectedModule}
              onChange={(value) => setSelectedModule(value)}
            />
          </div>
          <div className='col-3'>
            <Select
              options={allRoles.map((role: any) => {
                return { ...role, label: role.name, value: role._id }
              })}
              value={selectedRole}
              onChange={(value) => setSelectedRole(value)}
            />
          </div>
          <div className='col-4'>
            {permissions.map((item, index) => {
              return (
                <div className='form-check form-check-inline' key={index}>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id={`custom-checkbox-${index}`}
                    value={item}
                    checked={checkedState[index]}
                    name={item}
                    onChange={() => handleOnChange(index)}
                  />
                  <label className='form-check-label' htmlFor={`custom-checkbox-${index}`}>
                    {item}
                  </label>
                </div>
              )
            })}
          </div>
          <div className='col-2 text-end'>
            <button onClick={assignRoleAModule}>Assign</button>
          </div>
        </div>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>id</th>
              <th scope='col'>Module Name</th>
              <th scope='col'>Role Name</th>
              <th scope='col'>Permissions</th>
            </tr>
          </thead>
          <tbody>
            {allPermissions.map((perm: any, index: number) => {
              return (
                <tr key={perm._id}>
                  <th scope='row'>{index + 1}</th>
                  <td> {perm.module_name}</td>
                  <td> {perm.role_name}</td>
                  <td>
                    {perm.create && <span className='badge bg-secondary me-2'>Create</span>}
                    {perm.delete && <span className='badge bg-secondary me-2'>Delete</span>}
                    {perm.update && <span className='badge bg-secondary me-2'>Update</span>}
                    {perm.read && <span className='badge bg-secondary '>Read</span>}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default App
