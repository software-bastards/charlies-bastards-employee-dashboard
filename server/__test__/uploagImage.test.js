
const route =require('../routes/uploadImage')

describe('testing post route upload Images',()=>{
    const router = route.stack;

    test('should validate the post route ',()=>{
    
        expect(router[0].route.methods.post).not.toBeNull();
        expect(router[0].route.methods.post).toBeTruthy()
    })
    test('should check if the path is correct',()=>{
       
    
        expect(router[0].route.path).not.toMatch('null');
        expect(router[0].route.path).toMatch('/upload');
    })
})
describe('testing get route upload Images',()=>{
    const router = route.stack;

    test('should validate the get route ',()=>{
    
        expect(router[1].route.methods.get).not.toBeNull();
        expect(router[1].route.methods.get).toBeTruthy()
    })
    test('should check if the path is correct',()=>{
       
    
        expect(router[1].route.path).not.toMatch('null');
        expect(router[1].route.path).toMatch('/upload/images');
    })
})