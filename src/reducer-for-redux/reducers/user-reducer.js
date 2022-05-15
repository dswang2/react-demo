const UserReducer = {
    setUser: (state, action) => {
        return {...state, user: action.user};
    },
    delUser: () => {
        return {};
    }
}
export default UserReducer;