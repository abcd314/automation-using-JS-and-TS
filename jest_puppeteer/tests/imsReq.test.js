const assert = require('assert');
puppeteer = require('puppeteer');
jest.setTimeout(300000);

const loginPage={
    signInWithGoogle:'button[class="google-btn"]',
      
}

const erpPage={
    menuIcon:'#app > div > div:nth-child(1) > div > header > div > button',
    imsBtn:'body > div.MuiDrawer-root.MuiDrawer-modal.sidebar > div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16 > div > div.w-350 > ul:nth-child(2) > a:nth-child(10) > div'
  
}
const emailPage={
    emailTxt:'input[type=email]',
    nextBtn:'#identifierNext > div > button'
}

const passwordPage={
    passwordTxt:'input[type="password"]',
    nextBtn:'#passwordNext',
    allowBtn:'#submit_approve_access'
}

const imsTab={
    employeeReferal:'#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(1) > a',
    reqTable:'#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(2) > a',
    createReq:'#root > div > div > div > div.col-lg-3.col-md-3 > div > div > div > div > nav > ul > li:nth-child(3) > a'
}




let browser,page;
beforeEach(async()=>{
    browser = await puppeteer.launch({
        headless:false
    });
    page = await browser.newPage();
    await page.goto('https://stagingerp.afourtech.com/');
    await page.setViewport({ width: 1440, height: 710 });
    // reporter
    // .feature('Feature')
    // .story('Story');
});

afterEach(async()=>{
    await browser.close();
});

test("Ims test case 2",async()=>{

        //Login Operation
        await page.waitFor(loginPage.signInWithGoogle);
        await page.waitFor(2000);
        const newPagePromise1=new Promise(x => browser.once('targetcreated', target => x(target.page())));
        await page.click(loginPage.signInWithGoogle);
        const page2 = await newPagePromise1;
        await page2.waitFor(emailPage.emailTxt);
        await page2.type(emailPage.emailTxt,"kalyani.pagare@afourtech.com");
        await page2.click(emailPage.nextBtn);
        await page2.waitFor(5000);
        await page2.waitFor(passwordPage.passwordTxt);
        await page2.type(passwordPage.passwordTxt,"afour@28");
        await page2.click(passwordPage.nextBtn);
        await page2.waitFor(5000);
        await page2.waitFor(passwordPage.allowBtn);
        await page2.click(passwordPage.allowBtn);
        await page2.waitFor(5000);
    
        //Click on Menu Icon
        await page.waitFor(erpPage.menuIcon);
        await page.click(erpPage.menuIcon);
    
        await page.waitFor(erpPage.imsBtn);
        const imsTabPromise=new Promise(x1 => browser.once('targetcreated', target => x1(target.page())));
        //click on ims btn
        await page.click(erpPage.imsBtn);
        const imsPage = await imsTabPromise;
        await imsPage.waitFor(imsTab.reqTable);
        await imsPage.click(imsTab.reqTable);

        const ss = await imsPage.screenshot({ path: 'reqPage.png', fullPage: 'true' });
        // reporter.addAttachment('Screenshot', ss, 'reqPage/png');




});