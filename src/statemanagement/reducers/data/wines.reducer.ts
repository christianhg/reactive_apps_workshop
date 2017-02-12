import {Action} from "@ngrx/store";
import * as wine from "../../actions/data/wine";
import {Wine} from "../../../stock/entities/Wine";

export function winesReducer(state: Array<Wine> = [],
                             action: wine.Actions): Array<Wine> {
    switch(action.type) {
        case wine.ActionTypes.WINES_ADD:
            return [...state, action.payload.wine];
        case wine.ActionTypes.WINES_SET_ALL:
            return [...action.payload.wines];
        case wine.ActionTypes.WINES_REMOVE:
            return state.filter((wine : Wine) => wine._id !== action.payload._id);
        case wine.ActionTypes.WINES_UPDATE:
            return state.map((wine: Wine) => wine._id === action.payload._id
                ? Object.assign({}, action.payload.wine)
                : wine);
        case wine.ActionTypes.WINES_UPDATE_RATE:
            return state.map((wine: Wine) => wine._id === action.payload._id
                ? Object.assign({}, wine, { myRating: action.payload.myRating })
                : wine);
        case wine.ActionTypes.WINES_UPDATE_STOCK:
            return state.map((wine: Wine) => wine._id === action.payload._id
                ? Object.assign({}, wine, { inStock: action.payload.myStock })
                : wine);
        default:
            return state;
    }
};
