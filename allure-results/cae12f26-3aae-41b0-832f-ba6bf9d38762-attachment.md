# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown.spec.js >> dropdown
- Location: tests\dropdown.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#message-one')
Expected substring: "Red"
Received string:    "Selected Color : Green"

Call log:
  - Expect "toContainText" with timeout 50000ms
  - waiting for locator('#message-one')
    64 × locator resolved to <div class="my-2" id="message-one">Selected Color : Green</div>
       - unexpected value "Selected Color : Green"

```

```yaml
- text: "Selected Color : Green"
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | 
  3  | test("dropdown", async ({page})=>{
  4  |     await page.goto("https://selenium.qabible.in/")
  5  |     await page.locator("a[href='simple-form-demo.php']").click()
  6  |     await page.locator("a[href='select-input.php']").click()
  7  |     const selectInput= page.locator("#single-input-field")
  8  |     await selectInput.selectOption("Green")
  9  |     const message= page.locator("#message-one")
  10 |     await message.click()
> 11 |     await expect(message).toContainText("Red")
     |                           ^ Error: expect(locator).toContainText(expected) failed
  12 |     await page.pause()
  13 | })
```