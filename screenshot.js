const puppeteer = require('puppeteer');
const url = process.argv[2];
if (!url) {
    throw "Please provide URL as a first argument";
}
async function run () {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}
run();
