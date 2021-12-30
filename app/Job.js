const dataset = require("../data/test.json").jobs
const fs = require('fs')

let arrayOfObjects = []


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

  if (phrase.includes("salary section empty")) {return}
  
  else if (comma&&week) {
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


// BENEFITS
//#region

const dental = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("dental") ||
    textContent.includes("dental insurance")
  ) {
    return true
  }
  return false
}
const medical = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("medical") ||
    textContent.includes("medical insurance")
  ) {
    return true
  }
  return false
}
const life = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("life insurance")) {
    return true
  }
  return false
}
const health = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("health insurance")) {
    return true
  }
  return false
}
const vision = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("vision")) {
    return true
  }
  return false
}
const retirement = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("401k") ||
    textContent.includes("401(k)") ||
    textContent.includes("401 k") ||
    textContent.includes("retirement") ||
    textContent.includes("retirement plan")
  ) {
    return true
  }
  return false
}
const pto = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("pto") ||
    textContent.includes("p.t.o.") ||
    textContent.includes("p.t.o") ||
    textContent.includes("paid time off") ||
    textContent.includes("paid time-off") ||
    textContent.includes("paid leave")
  ) {
    return true
  }
  return false
}
const signOn = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("sign-on bonus") ||
    textContent.includes("sign on bonus") ||
    textContent.includes("sign up bonus") ||
    textContent.includes("sign-up bonus")
  ) {
    return true
  }
  return false
}

//#endregion

// TRAILERS
//#region

const straightTruck = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("straight truck") ||
    textContent.includes("straight-truck")
  ) {
    return true
  }
  return false
}
const dryVan = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("dry van") ||
    textContent.includes("dryvan") ||
    textContent.includes("dry-van")
  ) {
    return true
  }
  return false
}
const flatBed = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("flatbed") ||
    textContent.includes("flat bed") ||
    textContent.includes("flat-bed")
  ) {
    return true
  }
  return false
}
const stepDeck = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("stepdeck") ||
    textContent.includes("step deck") ||
    textContent.includes("step-deck")
  ) {
    return true
  }
  return false
}
const cns = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("conestoga") || textContent.includes("cns")) {
    return true
  }
  return false
}
const rgn = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("rgn") ||
    textContent.includes("removable gooseneck") ||
    textContent.includes("gooseneck")
  ) {
    return true
  }
  return false
}
const srgn = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("stretch rgn") ||
    textContent.includes("stretch removable gooseneck")
  ) {
    return true
  }
  return false
}
const lowBoy = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("lowboy") ||
    textContent.includes("low-boy") ||
    textContent.includes("low boy")
  ) {
    return true
  }
  return false
}
const reefer = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("reefer") || textContent.includes("refridgerated")) {
    return true
  }
  return false
}
const spec = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("specialized trailer")) {
    return true
  }
  return false
}

//#endregion

// REQUIREMENTS
//#region

const cdla = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("class a") ||
    textContent.includes("cdl a") ||
    textContent.includes("cdl-a") ||
    textContent.includes("c.d.l. a") ||
    textContent.includes("c.d.l a")
  ) {
    return true
  }
  return false
}
const cdlb = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("class b") ||
    textContent.includes("cdl b") ||
    textContent.includes("cdl-b") ||
    textContent.includes("c.d.l. b") ||
    textContent.includes("c.d.l b")
  ) {
    return true
  }
  return false
}
const experience = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("years of experience") ||
    textContent.includes("experience required")
  ) {
    return true
  }
  return false
}
const violations = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("no violations") ||
    textContent.includes("no preventable") ||
    textContent.includes("violation")
  ) {
    return true
  }
  return false
}
const bgCheck = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("background check") ||
    textContent.includes("bg check") ||
    textContent.includes("criminal")
  ) {
    return true
  }
  return false
}
const physicalCheck = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("physical check")) {
    return true
  }
  return false
}

//#endregion

// ENDORSEMENTS
//#region

const doubleTriples = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("double/triple") ||
    textContent.includes("double triple") ||
    textContent.includes("doubles triples") ||
    textContent.includes("double triples")
  ) {
    return true
  }
  return false
}
const tanker = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (textContent.includes("tanker")) {
    return true
  }
  return false
}
const hazmat = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("hazmat") ||
    textContent.includes("haz mat") ||
    textContent.includes("haz-mat") ||
    textContent.includes("hazardous")
  ) {
    return true
  }
  return false
}
const tankerHazmat = (str, el) => {
  let textContent = str[el].jobText.toLowerCase()
  if (
    textContent.includes("tanker hazmat") || textContent.includes('tanker-hazmat') || textContent.includes('combo')
  ) {
    return true
  }
  return false
}

//#endregion

for (let index = 0; index < dataset.length; index++) {
  let job = {
    index: index,
    link: dataset[index].jobLink,
    annualSalary: checkSalary(dataset[index].jobSalary),
    weeklySalary: checkSalary(dataset[index].jobSalary)/50,
    benefits: {
      medical: medical(dataset, index),
      dental: dental(dataset, index),
      life: life(dataset, index),
      health: health(dataset, index),
      vision: vision(dataset, index),
      retirement: retirement(dataset, index),
      pto: pto(dataset, index),
      signOn: signOn(dataset, index),
    },
    trailers: {
      straightTruck: straightTruck(dataset, index),
      dryVan: dryVan(dataset, index),
      flatBed: flatBed(dataset, index),
      stepDeck: stepDeck(dataset, index),
      cns: cns(dataset, index),
      rgn: rgn(dataset, index),
      srgn: srgn(dataset, index),
      lowBoy: lowBoy(dataset, index),
      reefer: reefer(dataset, index),
      spec: spec(dataset, index),
    },
    requirements: {
      cdla: cdla(dataset, index),
      cdlb: cdlb(dataset, index),
      experience: experience(dataset, index),
      violations: violations(dataset, index),
      bgCheck: bgCheck(dataset, index),
      physicalCheck: physicalCheck(dataset, index),
    },
    endorsements: {
      "doubleTriples":doubleTriples(dataset,index),
      "tanker":tanker(dataset,index),
      "hazmat":hazmat(dataset,index),
      "tankerHazmat":tankerHazmat(dataset,index),
    },
  }
  arrayOfObjects.push(job)
}

let jobSort = JSON.stringify(arrayOfObjects)



fs.writeFile("../data/processed-jobs.json", jobSort, "utf8", () => console.log("!"))

// console.log(arrayOfObjects[0])