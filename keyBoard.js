const puppeteer = require('Puppeteer');
var assert = require('assert');
const homePage = {
    searchBar:'#search-phrase',
    searchBtn:'body > div.content_wrapper > section > div > section.hero > div > div > fieldset > form > div.search-bar__main-area > button'

}

const listPage ={
    img:'body > div.content_wrapper > section > div > main > section > div.search-content__gallery-pager-wrapper > div > div > div.Gallery-module__container___1Rvo6 > div.search-content__gallery-assets > div:nth-child(1) > article > a > figure > img',
    imgTitle:'body > div.content_wrapper > section > div > main > div > div > div > div.AssetDetail-module__main___1UYQF > section.title.AssetTitle-module__title__block___1WCpA.AssetTitle-module__title___1uckK > div > h1'

}
puppeteer.launch({headless:false}).then(async browser=> {
    const page=await browser.newPage();
    await page.goto('https://istockphoto.com');
    await page.setViewport({ width: 1440, height: 710 });
    
    await page.waitFor(homePage.searchBar);
    await page.click(homePage.searchBar);
    await page.keyboard.type("Audi");
    await page.screenshot({ path: 'keyboard.png' })
    await page.keyboard.press('Enter');

    await page.waitFor(listPage.img);
    await page.click(listPage.img);

    const element = await page.waitForSelector(listPage.imgTitle); // select the element
    var title = await element.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
    console.log("****** " + title);
    var isContain = title.includes("Audi");
    console.log("******* "+ isContain);
    try{
    assert.equal(isContain,true);
    console.log("success");
    }
    catch(error)
    {
      console.log("Failure "+error);
    }
    await page.keyboard.press('PageDown');
    await page.screenshot({path:'scroll.png'});
    await page.waitFor(1000);
    await browser.close();



})