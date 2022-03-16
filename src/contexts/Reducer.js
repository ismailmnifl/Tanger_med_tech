const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
                allReservations: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                isFetching: false,
                error: false,
                allReservations: action.payload.allReservations,

            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
                allReservations: null,

            };
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
                allReservations: null,

            };
            
        default:
            return state;
    }
}

export default Reducer;