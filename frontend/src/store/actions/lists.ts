export const editList1 = (list: []) => {
    localStorage.setItem("list_1", JSON.stringify(list));
    return {
        type: 'EDIT_LIST1',
        payload: list
    }
}

export const editList2 = (list: []) => {
    localStorage.setItem("list_2", JSON.stringify(list));
    return {
        type: 'EDIT_LIST2',
        payload: list
    }
}

export const clearList1 = (list: []) => {
    localStorage.removeItem("list_1");
    return {
        type: 'CLEAR_LIST1',
    }
}

export const clearList2 = (list: []) => {
    localStorage.removeItem("list_2");
    return {
        type: 'CLEAR_LIST2',
    }
}