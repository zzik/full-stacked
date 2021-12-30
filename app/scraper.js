const puppeteer = require("puppeteer")
const fs = require("fs")
const routeToken = require("./tokens.json")

;(async () => {
  // Initialize the fullscreen browser
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 10,
  })

  const page = await browser.newPage()

  const static =
    "https://www.indeed.com/jobs?q=Truck%20Driver&radius=15&filter=0&limit=30&taxo1=47yxL4FBQh-bR9eJhxFl0g"

  async function iteratePages(link) {
    let currentPage = 0
    let pageIndex = "&start=" + currentPage
    const place = routeToken.kansasCity
    const token = place.token
    const city = place.cityName
    const linkCity = city.replace(' ', '%20')
    const unitedState = place.stateName
    let location = `&l=${linkCity}%2C%20${unitedState}`
    let entireLink = link + location + pageIndex + token

    await page.goto(entireLink, { waitUntil: "networkidle2" })
    await page.waitForTimeout((Math.round(Math.random() * 12) + 1) * 1000)
    await page.keyboard.press("Escape")

    let numberOfJobs = await page.evaluate(() => {
      return document.querySelector("#searchCountPages").innerText
    })

    // Trimming the search result to show only the number of jobs for given parameters
    numberOfJobs = await numberOfJobs
      .trim()
      .replace("Page 1 of ", "")
      .replace(" jobs", "")
      .replace(",", "")


    let numberOfPages = Math.ceil(parseInt(numberOfJobs) / 30)

    let arrayOfInstances = []
    // Main iteration
    for (currentPage; currentPage < numberOfPages; currentPage++) {
      let iteration = "&start=" + currentPage * 30

      // Merging the link
      let iterationURL = link + location + iteration + token

      // Waiting for page to finish loading
      await page.goto(iterationURL, { waitUntil: "networkidle2" })

      // Waiting to avoid captcha
      await page.waitForTimeout((Math.round(Math.random() * 8) + 1) * 1000)

      // Pressing escape in case of a pop-up window
      await page.keyboard.press("Escape")

      let dataObject = await page.evaluate(async () => {
        preArray = []

        let itemArray = Array.from(document.querySelectorAll(".tapItem"))

        itemArray.forEach(async (element) => {
          let jobLink = await element.href
          let jobTitle = await element.querySelector(".jobTitle>span").innerText
          let salary = await element.querySelector(".salary-snippet-container")
            .innerText
          // salary = await checkSalary(salary)
          let companyName = await element.querySelector(".companyName")
            .innerText
          let rating = await element.querySelector(".ratingNumber>span")
            .innerText

          let collection = {
            link: jobLink,
            title: jobTitle,
            salary: salary,
            cName: companyName,
            rating: rating
          }
          await preArray.push(collection)
        })
        return preArray
      })
      arrayOfInstances.push(dataObject)
    }

    let tempy = {
      stateName:unitedState,
      city
    }

    arrayOfInstances.push(tempy)

    let json = JSON.stringify(arrayOfInstances.flat())

    fs.writeFile(`./dozen/${city}.json`, json, "utf8", () =>
      console.log("suxes")
    )
  }
  // Running the created function
  await iteratePages(static)
  // Closing the browser
  await browser.close()
})()
