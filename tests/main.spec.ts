import {expect , test} from '@playwright/test';
import {PlaywrightProjects}  from '../page/Login';


test ("MyFirst Programming", async ({page}) =>{

    const playWrightLogin = new PlaywrightProjects (page);
    await playWrightLogin.goTo ();
    await playWrightLogin.loginPageStandard ();

    


     


})