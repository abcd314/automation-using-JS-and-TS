const puppeteer = require('puppeteer');
const expect = require('chai').expect
describe('puppeteer Test 1',()=>{
    it('should launch a browser',async function(){
        const browser= await puppeteer.launch(
            {headless:false, 
                slowMo:50,
                // devtools:true
            });
        const page = await browser.newPage();
        await page.setDefaultTimeout(10000);

        // await page.goto("https://google.com");
        // await page.waitFor(3000);
        // await page.waitForSelector('#logo');
        //to reload browser
        await page.reload();

        await page.goto('https://www.istockphoto.com/');
        await page.waitFor(3000);
        const title= await page.title();
        const url = await page.url()
        // await page.goBack();
        // await page.waitFor(3000);
        // await page.goForward();
        // await page.waitFor(3000);

        const text=await page.$eval('#site-header > div.site-width > nav.actions > div > ul > li.pricing > a',element=> element.textContent)
        console.log('Text :::: '+text)

        const count = await page.$$eval('p',element => element.length)
        console.log("Number of P tags on page "+count);

        expect(text).to.be.a('string','Pricing');
        expect(url).to.include('istock');
        expect(count).to.equal(3);
        await browser.close();

    })
});