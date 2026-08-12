import {test} from "@playwright/test"

test(
    "First Test",
    async ({browser})=>{
      const context = await browser.newContext() 
     const page = await context.newPage()
     await page.goto("https://search-careers.gm.com/en/jobs/jr-202612930/senior-android-developer-trailering/")
    }
)