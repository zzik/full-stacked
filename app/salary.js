const salaries = require("../data/test.json").jobs
const fs = require("fs")

const checkSalary = (phrase) => {
  
  let 
  cpm = phrase.includes("mile")
  hour = phrase.includes("hour")
  day = phrase.includes("day")
  week = phrase.includes("week") 
  month = phrase.includes("month")
  year = phrase.includes("year")
  dot = phrase.includes('.')
  comma = phrase.includes(',')
  
  const parser = phrase.replace("$", "").replace("From ", "").replace("Up to ", "")
  const commaValue = parseInt(parser.replace(",", ""))
  const dotValue = parseFloat(parser)
  const noneSoFar = !phrase.includes(',')||!phrase.includes('.')
  
  if (comma&&week) {
      return commaValue*50
    } else if (comma&&month) {
      return commaValue*12
    } else if (comma&&year) {
      return commaValue
    }

  else if (dot&&cpm) {
      return dotValue*2200*50
    } else if (dot&&hour) {
      return dotValue*60*50
    } 

  else if (noneSoFar&&day) {
      return parseInt(parser)*350
    } else if (noneSoFar&&hour) {
      return parseInt(parser)*60*50
    }

    else {
      return 'wth'
    }
}


let jobObject = {
  job:{
    jobSalaries: [],
  }
}

for (let i = 0; i < salaries.length; i++) {
  const element = salaries[i].jobSalary
  
  if(!element.includes("salary")) {
    jobObject.job.jobSalaries.push(Math.floor(checkSalary(element)))
  }

}

 console.log(jobObject.job.jobSalaries)

// const obj = {
//   jobSalaries: arrayOfSalaries,
// }

// var json = JSON.stringify(obj)

// fs.writeFile("./test.json", json, "utf8", () => console.log("suxes"))