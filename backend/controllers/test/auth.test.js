const {createNewUser}=require('../userController');
const User=require('../../models/User');
jest.mock('../../models/User') 
const request={
    body:{
        username:'fake_username',
        password:'fakse_password',
        roles:['Member'],
        fullName:'fake name'
    }
}
const response={
    status:jest.fn(x=>response),
    json: jest.fn(x=>x)
}
it('should send a satus code of 400 when user already exist', async () => {
    User.findOne.mockImplementation(()=>({
        id: 1,
        username:'username',
        password:'password',
        roles:'Member',
        fullName:'fakeName'
    }))
    await createNewUser(request,response);
    expect(response.status).toHaveBeenCalledWith(409);
    expect(response.json).toHaveBeenCalledTimes(1);

});
it('should return status 201 when user is created', async () => {
    User.findOne.mockImplementation(()=>undefined);
    User.create.mockImplementation(()=>({
        username:'fake_username',
        password:'fakse_password',
        roles:['Member'],
        fullName:'fake name'
    }))
    await createNewUser(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.json).toHaveBeenCalledTimes(2);
});