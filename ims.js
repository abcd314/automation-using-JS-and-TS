const puppeteer = require('puppeteer');
let x= (async ()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    
    await page.goto('https://stagingerp.afourtech.com');
    console.log("hello ");
    await page.setViewport({ width: 1280, height: 800 })
    await page.waitFor(2000);

    // await navPromise;    
    // const navigationPromise = page.waitForNavigation({ waitUntil: ['networkidle2'] })
   
    // await navigationPromise;
    await page.setDefaultNavigationTimeout(0);
    await page.click('[type="button"]');
    // await page.click('span[text="Sign in with Google"]');
    // await page.waitForNavigation();
    await page.waitFor(2000);

    const newPagePromise = new Promise(x => browser.once('targetcreated', target => x(target.page())));
    const page2= await newPagePromise;
    // await page2.setDefaultNavigationTimeout(0);
    await page2.waitFor(2000);

    
    await page2.waitForSelector('input[name=identifier]');
    await page2.$$eval('(input[name=identifier]',el => el.value = 'kalyani.pagare@afourtech.com');
    
    // await page.type('input[type=email]', 'kalyani.pagare@afourtech.com')

    // await page.click('#identifierNext > div > button');

    // await navigationPromise;

    // await page.waitForXPath('//span[text()="Sign in with Google"]');
    // const signInBtn = await page.$x("//span[text()='Sign in with Google']");
    // await signInBtn[0].click();
    await page.waitFor(2000);
    await browser.close();

});
x();