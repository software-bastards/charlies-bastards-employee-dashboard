
 /**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {ShallowWrapper}
 * @param {string} val - Value of data-test atribute for search 
 */
export const findByTestAttr = (wrapper, val)=>{
    return  wrapper.find(`[data-test="${val}"]`)
       
}

