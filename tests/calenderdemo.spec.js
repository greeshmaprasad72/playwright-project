import { test } from "@playwright/test";

test("datepicker", async ({ page }) => {
  await page.goto("https://selenium.qabible.in/");
  
  // Navigate to Date Picker page
  await page.locator('a[href="date-picker.php"]').click();
  
  // Open the datepicker input
  const datePickerField = page.locator("#single-input-field");
  await datePickerField.click();

  // Zoom out to years view: Days -> Months -> Years
  await page.locator(".datepicker-days th.datepicker-switch").click();
  await page.locator(".datepicker-months th.datepicker-switch").click();

  const targetYear = 2029;
  const month = 8; // August (1-indexed)
  const date = 22;

  // 1. Loop until targetYear falls within the displayed year range (e.g., "2020-2029")
  while (true) {
    const yearRange = await page
      .locator(".datepicker-years th.datepicker-switch")
      .textContent();

    const [firstYear, lastYear] = yearRange.trim().split("-").map(y => parseInt(y, 10));

    if (targetYear >= firstYear && targetYear <= lastYear) {
      break; // Correct range reached, exit loop
    }

    if (targetYear < firstYear) {
      await page.locator(".datepicker-years th.prev").click();
    } else {
      await page.locator(".datepicker-years th.next").click();
    }
  }

  // 2. Select the Year
  await page.locator(".datepicker-years span.year", { hasText: targetYear.toString() }).click();

  // 3. Select the Month (nth is 0-indexed)
  await page.locator(".datepicker-months span.month").nth(month - 1).click();

  // 4. Select the Day
  await page.locator(".datepicker-days td.day:not(.old):not(.new)", { hasText: date.toString() }).click();

  await page.pause();
});