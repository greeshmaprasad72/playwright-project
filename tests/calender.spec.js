import test from "@playwright/test";

test("datepicker", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/");
  const datepicker = page.locator('a[href="date-picker.php"]');
  await datepicker.click();
  const datePickerField =  page.locator("#single-input-field");
 await datePickerField.click();
  await page.locator(".datepicker-days th.datepicker-switch").click();
  await page.locator(".datepicker-months th.datepicker-switch").click();
  const targetYear = 2028;
  const month = 8;
  const date = 22;
  while (true) {
    const yearRange = await page
      .locator(".datepicker-years th.datepicker-switch")
      .textContent();

    const firstYear = parseInt(yearRange.split("-")[0]);
    const lastYear = parseInt(yearRange.split("-")[1]);

    console.log(yearRange);
    console.log(firstYear.toString())
    if (targetYear >= firstYear && targetYear <= lastYear)  break;
        //  console.log("breakkkk")
       
    console.log("here")
  console.log(await page.locator(".datepicker-years th.next").isVisible())
    if (targetYear < firstYear) {
        console.log(datePickerField.textContent())
        console.log("first")
        console.log(await page.locator(".datepicker-years th.prev").isVisible())
      await page.locator(".datepicker-years th.prev").click();
    } else {
        console.log(datePickerField.textContent())
        console.log("second")
      await page.locator(".datepicker-years th.next").click();
    }
}
    console.log(datePickerField.textContent())
    console.log("third")
    console.log(await page.locator(".datepicker-years th.next").isVisible())

    await page.getByText(targetYear.toString(), { exact: true }).first().click();
    // await page.locator({hasText: targetYear.toString()}).first().click()

    await page
      .locator(".month")
      .nth(month - 1)
      .click();
    await page.getByText(date.toString(), { exact: true }).first().click();
   
  
  await page.pause();
});
