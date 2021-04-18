const assert = require('assert');
puppeteer = require('puppeteer');
jest.setTimeout(30000);


let browser,page;
beforeEach(async()=>{
    browser = await puppeteer.launch({
        headless:false,devtools:false
    });
    page = await browser.newPage();
    await page.goto('https://www.istockphoto.com/');
});

afterEach(async()=>{
    await browser.close();
});


test("check home page url",async()=>{
    const url = await page.url();
    assert(url==="https://www.istockphoto.com/"); 
});

