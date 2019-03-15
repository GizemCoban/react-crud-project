export const addTenant = (tName, tStatus) => ({
  type: 'ADD_TENANT',
    payload: {tName, tStatus}
})