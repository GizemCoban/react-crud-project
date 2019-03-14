const addReducer = (state = [] , action) => {

  switch (action.type) {
    case 'ADD_TENANT':
      return[
        ...state,
        {
          tName: action.tName,
          tStatus: action.tStatus
        }
      ]
    default:
      return state
  }
}
export default addReducer