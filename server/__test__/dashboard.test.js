const route =require('../routes/dashboard')

describe('testing get route dashboard',()=>{
    const router = route.stack;

    test('should validate the get route ',()=>{
    
        expect(router[0].route.methods.get).not.toBeNull();
        expect(router[0].route.methods.get).toBeTruthy()
    })
    test('should check if the path is correct',()=>{
       
    
        expect(router[0].route.path).not.toMatch('null');
        expect(router[0].route.path).toMatch('/dashboard');
    })
})

