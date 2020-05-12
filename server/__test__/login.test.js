
const route =require('../routes/login')

test('should validate the post route ',()=>{
    const router = route.stack;

    expect(router[0].route.methods.post).not.toBeNull();
    expect(router[0].route.methods.post).toBeTruthy()
})
test('should check if the path is correct',()=>{
    const router = route.stack;

    expect(router[0].route.path).not.toMatch('null');
    expect(router[0].route.path).toMatch('/login');
})
