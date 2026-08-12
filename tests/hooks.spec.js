import { test } from "@playwright/test"

//playwright hooks are used to run the code before and after the test
test.beforeEach("BeforeEach", async ({page})=>{
    console.log("run before every test")
    
})

test("test1", async ({page})=>{
    console.log("test1 executed")
})

test("test2", async ({page})=>{
    console.log("test2 executed")
})

test.afterEach("AfterEach", async ({page})=>{
    console.log("run after every test")
    
})

test.beforeAll("beforeAll", async ({browser})=>{
    console.log("Welcome to my test")
    
})

test.afterAll("afterAll", async ({browser})=>{
    console.log("Thank you")
    
})
test.describe("login scenarios", async()=>{
test(" login successful", async({page})=>{
console.log("login successful")
})


test("invalid login", async({page})=>{
console.log("invalid login")
})



})