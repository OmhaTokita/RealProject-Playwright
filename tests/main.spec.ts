import {expect as expectt , test as tryy} from '@playwright/test';
import {PlaywrightProjects}  from '../page/Login';
import {addtoCart}  from '../page/addtoCart';

 tryy("Login Page", async ({page}) =>{

    const playWrightLogin = new PlaywrightProjects (page);
    await playWrightLogin.goTo ();
    await playWrightLogin.loginPageStandard ();
   // await playWrightLogin.loginValidation ();
    const add2Cart = new addtoCart (page); 
    await add2Cart.multipleAddtoCart (); 
   
     
})


tryy.skip("validation of nothing", async ({page})=>{

    const playWrightLogin = new PlaywrightProjects (page);
    await playWrightLogin.goTo ();
    await playWrightLogin.loginPageStandard ();
   // await playWrightLogin.loginValidation ();
    const add2Cart = new addtoCart (page); 
    await add2Cart.multipleAddtoCart (); 
});