const ReducerData = (state, action) => {
    switch (action.type) {
        case "GET_IMAGES":
            // console.log(action);
            return {
                ...state,
                images: action.payload
            }
        default:
        return state;
    }
};

export default ReducerData;