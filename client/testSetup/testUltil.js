import rootReducer from "../src/reducers"
import {createStore} from 'redux'

/**
 * @function storeFactory
 * @param {object} initialState  -initial State for the store
 * @returns {Store}- Redux Store
 */

export const storeFactory = (initialState) =>{
        return createStore(rootReducer,initialState)
}
 


 /**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {ShallowWrapper}
 * @param {string} val - Value of data-test atribute for search 
 */
export const findByTestAttr = (wrapper, val)=>{
        return  wrapper.find(`[data-test="${val}"]`)
       
}

