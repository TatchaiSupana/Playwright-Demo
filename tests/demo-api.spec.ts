import { test , expect } from "@playwright/test";

test('api login demo',async ({ playwright }) => {
    
    const request = await playwright.request.newContext({
        baseURL: 'https://demoqa.com',

    });
    const response =  await request.post('/Account/v1/Login',{
        data:{userName: 'demoqa',
        password: 'Welcome1!'
    },
    });

    await expect(response).toBeOK();
    expect(await response.json()).toEqual(expect.objectContaining({
        userId: '5db84204-cd8a-4b8b-8f3b-bcae9432d75f',
        username: 'demoqa',
        password: 'Welcome1!',
        isActive: false        

    }));

});

test('api add book demo',async ({ playwright }) => {
    
    const request = await playwright.request.newContext({
        baseURL: 'https://demoqa.com',

    });
    let response =  await request.post('/Account/v1/Login',{
        data:{userName: 'demoqa',
        password: 'Welcome1!'
    },
    });

    await expect(response).toBeOK();
    let responseData =  await response.json();
    
    response = await request.post('BookStore/v1/Books',{
        headers:{
            'Authorization': `Bearer ${responseData.token}`
            
        },

        data:{
            "userId": "5db84204-cd8a-4b8b-8f3b-bcae9432d75f", 
            "collectionOfIsbns": [
                {
                    "isbn": "9781449325862"
                }
            ]           
        },

    });
    expect(response.status()).toEqual(400);
    expect(await response.json()).toEqual(expect.objectContaining({
        "code": "1210",
        "message": "ISBN already present in the User's Collection!"      

    }));
});