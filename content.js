const puppeteer = require('puppeteer');
async function run () {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto("https://www.google.com");
    var html = await page.content();
    console.log(html);
    browser.close() 
}
run();
