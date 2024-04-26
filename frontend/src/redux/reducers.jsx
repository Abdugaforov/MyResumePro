// reducers.js
import {
    SET_FINDINGS,
    SET_FINDINGS_ALL,
    SET_REGIONS,
    SET_TYPES_OF_LOST_ITEMS,
    SET_OFFSET,
    SET_LOST_OR_FOUND,
    SET_SELECTED_TYPE_OF_LOST_ITEM_ID,
    SET_SELECTED_TYPE,
    SET_SELECTED_SERIES,
    SET_SHOW_MENU,
    SET_LOST_PLACE_ID,
    SET_LIMIT,
    SET_STATISTIC_DATA
} from '../home/actions.jsx'; // Importing action types

const initialState = {
    findings: [],
    findingsAll: [],
    regions: [],
    typesOfLostItems: [],
    offset: 0,
    limit: 10,
    lostOrFound: false,
    selectedTypeOfLostItemId: 0,
    selectedType: '',
    selectedSeries: '',
    lostPlaceId: 0,
    showMenu: false,
    trueCount: 0,
    falseCount: 0,
    trueConditionCount: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINDINGS:
            return { ...state, findings: action.payload };
        case SET_FINDINGS_ALL:
            return { ...state, findingsAll: action.payload };
        case SET_REGIONS:
            return { ...state, regions: action.payload };
        case SET_TYPES_OF_LOST_ITEMS:
            return { ...state, typesOfLostItems: action.payload };
        case SET_OFFSET:
            return { ...state, offset: action.payload };
        case SET_LIMIT:
            return { ...state, limit: action.payload };
        case SET_LOST_OR_FOUND:
            return { ...state, lostOrFound: action.payload };
        case SET_SELECTED_TYPE_OF_LOST_ITEM_ID:
            return { ...state, selectedTypeOfLostItemId: action.payload };
        case SET_SELECTED_TYPE:
            return { ...state, selectedType: action.payload };
        case SET_SELECTED_SERIES:
            return { ...state, selectedSeries: action.payload };
        case SET_LOST_PLACE_ID:
            return { ...state, lostPlaceId: action.payload };
        case SET_SHOW_MENU:
            return { ...state, showMenu: action.payload };
        case SET_STATISTIC_DATA:
            return {
                ...state,
                trueCount: action.payload.trueCount,
                falseCount: action.payload.falseCount,
                trueConditionCount: action.payload.trueConditionCount,
            };

            default:
            return state;
    }
};

export default reducer;
