// actions.jsx
export const SET_FINDINGS = 'SET_FINDINGS';
export const SET_FINDINGS_ALL = 'SET_FINDINGS_ALL';
export const SET_REGIONS = 'SET_REGIONS';
export const SET_TYPES_OF_LOST_ITEMS = 'SET_TYPES_OF_LOST_ITEMS';
export const SET_LOST_OR_FOUND = 'SET_LOST_OR_FOUND';
export const SET_SELECTED_TYPE_OF_LOST_ITEM_ID = 'SET_SELECTED_TYPE_OF_LOST_ITEM_ID';
export const SET_SELECTED_TYPE = 'SET_SELECTED_TYPE';
export const SET_SELECTED_SERIES = 'SET_SELECTED_SERIES';
export const SET_LOST_PLACE_ID = 'SET_LOST_PLACE_ID';
export const SET_SHOW_MENU = 'SET_SHOW_MENU';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_TYPE = 'SET_TYPE';
export const SET_STATISTIC_DATA = 'SET_STATISTIC_DATA';
export const setFindings = (findings) => ({
    type: SET_FINDINGS,
    payload: findings,
});

export const setFindingsAll = (findingsAll) => ({
    type: SET_FINDINGS_ALL,
    payload: findingsAll,
});
export const setStatisticData = (trueCount, falseCount, trueConditionCount) => ({
    type: SET_STATISTIC_DATA,
    payload: { trueCount, falseCount, trueConditionCount },
});
export const setRegions = (regions) => ({
    type: SET_REGIONS,
    payload: regions,
});

export const setTypesOfLostItems = (typesOfLostItems) => ({
    type: SET_TYPES_OF_LOST_ITEMS,
    payload: typesOfLostItems,
});

export const setLostOrFound = (lostOrFound) => ({
    type: SET_LOST_OR_FOUND,
    payload: lostOrFound,
});

export const setSelectedTypeOfLostItemId = (typeOfLostItemId) => ({
    type: SET_SELECTED_TYPE_OF_LOST_ITEM_ID,
    payload: typeOfLostItemId,
});

export const setSelectedType = (type) => ({
    type: SET_SELECTED_TYPE,
    payload: type,
});

export const setSelectedSeries = (series) => ({
    type: SET_SELECTED_SERIES,
    payload: series,
});

export const setLostPlaceId = (lostPlaceId) => ({
    type: SET_LOST_PLACE_ID,
    payload: lostPlaceId,
});

export const setShowMenu = (showMenu) => ({
    type: SET_SHOW_MENU,
    payload: showMenu,
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setType = (type) => ({
    type: SET_TYPE,
    payload: type,
});