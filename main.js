document.querySelector('.front-cover').addEventListener('dblclick', function() {
    document.querySelector('.inside').classList.toggle('inside-active')
    document.querySelector('.front-cover').classList.toggle('front-cover-off')
})
const cardSelect = document.getElementById('card-select')
const slots = document.getElementsByClassName('slot')
const cardImages = document.getElementsByClassName('card-images') 
const screen = document.querySelector('.screen')
const cardsContent = document.querySelector('.cards-content')
const cardsContentDivs = cardsContent.querySelectorAll('div')
const cardsPages = document.querySelector('.cards-pages')
const cardsPagesDivs = cardsPages.querySelectorAll('div')
const locations = document.querySelector('.locations')

contactContent = document.querySelector('.contact-content')
contactContentUl = contactContent.querySelector('ul')
contactContentIls = contactContentUl.querySelectorAll('li')
contactContentIls.forEach(li => {
    li.addEventListener('click', function(event) {
        if (! event.target.closest('a') ) {
            const link = li.querySelector('a')
            if (link) {
                link.click()
            }
        }
    })
});

function contentActive () {
    return document.querySelector('.content-active')
}

function imageActive () {
    return cardSelect.querySelector('.card-images')
}

for (image of cardImages) {
    image.addEventListener('dragstart', function(e) {
       selected = e.target
    })
}

cardSelect.addEventListener('dragover', function(e) {
    e.preventDefault()
})

const images = document.querySelectorAll('.card-images')

function findEmptySlot() {
     for (slot of slots) {
                if (slot.querySelector('.card-images') === null) {
                    return slot
                }
            }
}

cardSelect.addEventListener('dblclick', function(e) {
    const classList = '.' + e.target.classList.value.split(' ')[1]
    const currentContent = document.querySelector(classList + '-content')
     if (cardSelect.querySelector('.card-images') !== null) {
      document.querySelector(classList + '-content').classList.remove('content-active')
      findEmptySlot().appendChild(e.target)
      fixContent(currentContent)
     }        
}
)

function fixContent(currentContent) {
    if (currentContent.querySelector('ul') !== null) {
         const currentContentUl = currentContent.querySelector('ul')
         const currentContentP = currentContent.querySelector('p')
         const currentContentButton = currentContent.querySelector('button')
         currentContentP.classList.remove('p-inactive')
         currentContentButton.classList.remove('inactive-button')
         currentContentUl.classList.remove('ul-active')
    }
}

for (image of images) {
    if (image.parentElement.classList.contains('slot')  ) {
        image.addEventListener('dblclick', function(e) {
            const classList = '.' + e.target.classList.value.split(' ')[1]
            if (cardSelect.querySelector('.card-images') === null) {
                 cardSelect.appendChild(e.target)
                 document.querySelector(classList + '-content').classList.add('content-active')
                 mainThing()
            }
        })
    }
}

cardSelect.addEventListener('drop', function(e) {
    if (cardSelect.querySelector('.card-images') === null) {
         cardSelect.appendChild(selected)
         const currentContent = document.querySelector(`.${selected.classList.value.split(' ')[1]}-content`)
         currentContent.classList.add(`content-active`) 
         mainThing()         
         selected = null 
    }
})

  const pOne = document.createElement('p')
  const pTwo = document.createElement('p')
                    const quoteTextP = document.querySelector('.quote-text') 
                    const quoteAuthorP = document.querySelector('.quote-author') 


  async function generateQuote() {
                    try {
                    const res = await fetch('https://type.fit/api/quotes')
                    if (!res.ok) {
                        throw new Error(`http error! status:${res.status}`)
                    }
                    const data = await res.json()
                    function generateRandomNumber () {
                    return ((Math.random()*15).toFixed(0)) 
                    }
                    const quote = data[generateRandomNumber()]
                    const quoteText = quote.text
                    const quoteAuthor = (quote.author.split(', '))[0]
                    quoteTextP.textContent = quoteText
                    quoteAuthorP.textContent = quoteAuthor
                    } catch (error){
                         quoteTextP.textContent = `Don't count the days, make the days count. `
                          quoteAuthorP.textContent = 'Muhammad Ali'
                    }
                    }







// skinCare







   function mainThing() {
       const currentContent = contentActive()
    if (currentContent !== null) {
            const classList = '.' + currentContent.classList.value.split('-content')[0]
            const currentPage = document.querySelector(`.${imageActive().classList.value.split(' ')[1]}-page`)
            currentContent.classList.add(`content-active`) 
            if (currentContent.querySelector('button') !== null) {
              currentContent.querySelector('button').addEventListener('click', function() {
                if (currentContent.classList.contains('origin-content') === true ) {
                    document.querySelector('.inside').classList.remove('inside-active')
                    document.querySelector('.front-cover').classList.remove('front-cover-off')
                     
                    const array = []

                    for (item of slots) {
                        if (item.querySelector('img') === null ) {
                           array.push(item)
                        } 
                    }
                    
                    array[0].appendChild(document.querySelector(classList))
                    document.querySelector(classList + '-content').classList.remove('content-active')
                }
                if (currentContent.classList.contains('skin-care-content') === true ) {
                    document.querySelector('.inside').classList.remove('inside-active')
                    start()
                }
                 
                function contentHandler() {
                    const inactiveUl = currentContent.querySelector('ul')
                    const activeP = currentContent.querySelector('p')   
                    const activeButton = currentContent.querySelector('button')
                    inactiveUl.classList.add('ul-active')
                    activeP.classList.add('p-inactive')
                    activeButton.classList.add('inactive-button')
                    const activeUl = currentContent.querySelector('.ul-active')
                    const ulButton = activeUl.querySelector('button')
                    ulButton.addEventListener('click', function() {
                    inactiveUl.classList.remove('ul-active')
                    activeP.classList.remove('p-inactive')
                    activeButton.classList.remove('inactive-button') } )
                    if (currentContent.classList.contains('content-active') === false ) {
                    inactiveUl.classList.remove('ul-active')
                    activeP.classList.remove('p-inactive')
                    activeButton.classList.remove('inactive-button')
                    }
                }

                if (currentContent.classList.contains('contact-content') === true || currentContent.classList.contains('magnetic-force-content') === true) {
                    contentHandler()
                }

                if (currentContent.classList.contains('golden-dictionary-content') === true ) {
                    turnOn()
                }
               
                if (currentContent.classList.contains('imp-wink-content') === true) {
                        const currentP = currentContent.querySelector('p')
                        const pArray = currentP.textContent.split('AMAZING')
                        const pOneText = pArray[0]
                        const pTwoText = pArray[1]
                        currentContent.querySelector('button').style.display = 'none'
                        pOne.classList.add('swordp')
                        pTwo.classList.add('swordp')
                        pOne.classList.add('swordp-one')
                        pTwo.classList.add('swordp-two')
                        pOne.textContent = pOneText
                        pTwo.textContent = pTwoText
                        currentContent.appendChild(pOne)
                        currentContent.appendChild(pTwo)
                        currentP.style.display = 'none'
                        document.querySelector('.inside').classList.add('inside-wink')
                       
                        for (slot of slots) {
                            if (slot.querySelector('img') !== null) {
                                slot.querySelector('img').style = `animation: upDown 2s linear infinite;`
                            }
                        } 
                    
                    
                       setTimeout(() => {
                        currentContent.querySelector('button').style.display = 'block'
                        currentContent.querySelector('p').style.display = 'block'
                        document.querySelector('.inside').classList.remove('inside-wink')
                       pOne.remove()
                       pTwo.remove()
                        for (slot of slots) {
                            if (slot.querySelector('img') !== null) {
                                slot.querySelector('img').style = `animation: none;`
                            }
                        currentContent.classList.remove('content-active')
                        findEmptySlot().appendChild(document.querySelector(classList))
                        } 
                       }, 4000)
                }
                if (currentContent.classList.contains('magnetic-force-content') === true) {
                    contentHandler()
                    const locations = document.querySelector('.locations')
                    const ul = currentContent.querySelector('ul')
                    const liList = ul.querySelectorAll('li')
                    for (li of liList) {
                        li.addEventListener('click', function(e) {
                        const liClassList = e.target.classList.value
                        const currentLocation = locations.querySelector('.' + liClassList)
                        if (liClassList !== 'start-point') {
                        document.querySelector('.inside').classList.remove('inside-active')
                        currentLocation.classList.add('location-active')
                        locations.classList.add('locations-active')
                        if (currentLocation.classList.contains('about')) {
                            startAbout()
                        } 
                        currentLocation.querySelector('button').addEventListener('click', function() {
                        currentLocation.classList.remove('location-active')
                        document.querySelector('.inside').classList.add('inside-active')
                        locations.classList.remove('locations-active')
                        if (currentLocation.classList.contains('about')) {
                            endAbout()
                        }
                            
                           })
                            } else {
                                 document.querySelector('.inside').classList.remove('inside-active')
                                 document.querySelector('.front-cover').classList.remove('front-cover-off')
                                  findEmptySlot().appendChild(document.querySelector(classList))
                                  document.querySelector(classList + '-content').classList.remove('content-active')
                            }
                        }) 
                    }
                }
                if (currentPage !== null ) {
            cardsPages.classList.add('cards-pages-active')
            currentPage.classList.add(`page-active`) 
            document.querySelector('.inside').classList.remove('inside-active')
            const arrayTwo = []
                    for (item of slots) {
                        if (item.querySelector('img') === null ) {
                           arrayTwo.push(item)
                        } 
                    }
                    document.querySelector(classList + '-content').classList.remove('content-active')
                    arrayTwo[0].appendChild(document.querySelector(classList))
                    
            for (div of cardsPagesDivs) {
                 if (!div.classList.contains('puffball-container') ) {
                        div.querySelector('.back').addEventListener('click', function() {
                 cardsPages.classList.remove('cards-pages-active')
                 currentPage.classList.remove(`page-active`) 
                 document.querySelector('.inside').classList.add('inside-active') })
                 }
}
                } 
        })
            }
         }
   }
  





for (slot of slots) {
    
}

for (slot of slots) {
        slot.addEventListener('dragover', function(e) {
        e.preventDefault()
    })
       slot.addEventListener('drop', function(e) {
        if (e.target.querySelector('.card-images') === null 
        && e.target !== selected 
        && e.target.classList.contains('card-images') === false ) { 
            console.log(e.target)
        const currentContent = document.querySelector(`.${selected.classList.value.split(' ')[1]}-content`)
        if (currentContent !== null) {
            currentContent.classList.remove(`content-active`)
            fixContent(currentContent)
         } 
        e.target.appendChild(selected)
        selected = null 
        }
    })
}








// puffball
const puffballPage = document.querySelector('.hyper-puffball-page')
let puffballIndex = 0
let emptySlotsArray = []
const gameArray = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]
const puffballContainer = document.querySelector('.puffball-container')
function epmtySlots () {
    for (item of gameArray) {
      
            const emptySlotDiv = document.createElement('div')
            emptySlotDiv.classList.add('empty-slot')
            emptySlotsArray.push(emptySlotDiv)
            puffballContainer.appendChild(emptySlotDiv) 
         if (item === 2) {
          const puffballHtml = `   
                                  <img src="images/Asset 1@2x-8.png" alt="" /> `
        const b = puffballContainer.querySelector('.empty-slot') 
        b.classList.add('puffball')        
        b.innerHTML = puffballHtml                   
        }
    }
}

epmtySlots()
function control() {
  const a = Math.floor( Math.random() * 4 ) + 1
    if (a === 1) {
      if (puffballIndex > 9) {
         puffballIndex -= 10
         
      }
    }  else if (a === 2) {
       if (puffballIndex < 188 ) {
           puffballIndex +=  10
           
       }
    } else if (a === 3) {
      if (puffballIndex % 10 !== 0  && puffballIndex > 0) {
          puffballIndex -= 1
          if (document.querySelector('.puffball').style = 'transform: rotateY(0deg);') {
              document.querySelector('.puffball').style = 'transform: rotateY(180deg);'
          }
    }
    } else if (a === 4) {
      if ((puffballIndex + 1) % 10 !== 0  && puffballIndex > 0) {
         puffballIndex += 1
         if (document.querySelector('.puffball').style = 'transform: rotateY(180deg);') {
              document.querySelector('.puffball').style = 'transform: rotateY(0deg);'
          }
      }
    } 
    return puffballIndex
}

const puffballP = document.createElement('p')
puffballP.textContent = 'GAME OVER YOU WON!'


function move() {
     const currentPuffBall = document.querySelector('.puffball')
     const ha = puffballContainer.querySelectorAll('.empty-slot')[control()]
     currentPuffBall.classList.remove('puffball')
     currentPuffBall.classList.add('empty-slot')
     currentPuffBall.innerHTML = ''
     ha.classList.add('puffball')
     ha.innerHTML = `   
                    <img src="images/Asset 1@2x-8.png" alt="" />  `
                    document.querySelector('.puffball').addEventListener('click', function(e) {
                      if (e.target.classList.contains('puffball')) {
                          e.target.classList.add('puffball-touched')
                          puffballContainer.appendChild(puffballP)
                          puffballPage.querySelector('.back').textContent ='BACK CHAMP!'
                          return clearInterval(timerId)
                      }       
                    })
}

let timerId

const puffballStart = puffballPage.querySelector('.start')

puffballStart.addEventListener('click', startGame)

function startGame() {
    console.log('start game')
       clearInterval(timerId)
       puffballIndex = 0
             if (puffballContainer.querySelector('p') !== null) {
             puffballContainer.removeChild(puffballContainer.querySelector('p'))  
             }
             puffballPage.querySelector('.back').textContent =  'YOU WANNA GIVE UP LOSER!'
             document.querySelector('.puffball').innerHTML = ''
  document.querySelector('.puffball').classList.remove('puffball-touched')
  document.querySelector('.puffball').classList.remove('puffball')
  emptySlotsArray[0].classList.add('puffball')
  emptySlotsArray[0].innerHTML = `   
                    <img src="images/Asset 1@2x-8.png" alt="" /> `
  document.querySelector('.puffball').style = 'transform: rotateY(0deg);'
                    timerId = setInterval(move, 250)
}

puffballPage.querySelector('.back').addEventListener('click', function() {
    startGame()
    clearInterval(timerId)
})



// skin care



const skinCareContainer = document.querySelector('.skin-care-container')
const soapContainer = skinCareContainer.querySelector('.soap-container')
const imageContainer = skinCareContainer.querySelector('.img-container')
const videoContainer = skinCareContainer.querySelector('.video-container')
const copyContainer = skinCareContainer.querySelector('.copy-container')
const mainContainer = skinCareContainer.querySelector('.main-container')
const copyHthree = copyContainer.querySelector('h3')
const soapImage = soapContainer.querySelector('img')
const faceImage = imageContainer.querySelector('img')
const uglyFace = imageContainer.querySelector('.ugly-face')
const freshFace = imageContainer.querySelector('.fresh-face')
const deadpoolFace = imageContainer.querySelector('.deadpool')
const deadpoolVideo = videoContainer.querySelector('video')
const deadpoolVideoSpan = videoContainer.querySelector('span')
const soapFoam = imageContainer.querySelector('.soap-foam')
let selectedSoap
const copyText =  'NO magic card can cure your skin, but Biwi soap Can.'
const copyArray = copyText.split(' ')
let currentIndex = 0


function start() {
    currentIndex = 0
    skinCareContainer.style.display = 'block'
    copyContainer.style.display = 'block'
    videoContainer.style.display = 'none'
    mainContainer.style.display = 'none'
    clearInterval(soapTimerId)
    deadpoolVideo.classList.remove('off')
    deadpoolVideoSpan.classList.add('off')
    copyHthree.textContent = ''
    soapTimerId =  setInterval(loadCopy, intervalTime)
    setTimeout(function() {
    soapContainer.style.display = 'block'
    imageContainer.style.display = 'flex'
    copyContainer.style.display = 'none'
    mainContainer.style.display = 'block'
    uglyFace.classList.remove('face-off')
    deadpoolFace.classList.add('face-off')
    freshFace.classList.add('face-off')
    videoContainer.style.background = 'black'
},  16000)
}

function loadCopy() {
         if (currentIndex === 0  || currentIndex === copyArray.length - 1 ) {
            copyHthree.innerHTML += `<span>${copyArray[currentIndex]} </span>`
            currentIndex += 1
        } else if (currentIndex === copyArray.length) {
            clearInterval(soapTimerId)
        }
         else {
            copyHthree.innerHTML += copyArray[currentIndex] + ' '
            currentIndex += 1
        }
        }

let intervalTime = 1000
let soapTimerId 





soapImage.addEventListener('dragstart', function(e) {
      selectedSoap = e.target
})
imageContainer.addEventListener('dragover', function(e) {
     e.preventDefault()
} )

function createSoapEffect() {
    imageContainer.appendChild(soapImage)
    soapImage.classList.add('active-soap')
    soapFoam.classList.add('soap-foam-active')
}

imageContainer.addEventListener('drop', dropSoap)

soapImage.addEventListener('dblclick', dropSoap)

function dropSoap(e) {
      soapImage.setAttribute('draggable', 'false')
      soapImage.removeEventListener('dblclick', dropSoap)
    if (uglyFace.classList.contains('face-off') === false) {
    createSoapEffect()
    setTimeout(fixThings, 5000)
    } else if (freshFace.classList.contains('face-off') === false) {
    createSoapEffect()
    setTimeout(fixThings, 5000)
    } else {
        imageContainer.style.display = 'none'
        soapContainer.style.display = 'none'
         videoContainer.style.display = 'block'
         mainContainer.style = `background-color: black;
                                display: block;`
        deadpoolVideo.play()
        deadpoolVideo.addEventListener('ended', lastScene)
        setTimeout(fixThings, 5000)
    }
}


const skinCareCard = document.querySelector('.skin-care')
const skinCareContent = document.querySelector('.skin-care-content')

function lastScene() {
            deadpoolVideo.classList.add('off')
            deadpoolVideoSpan.classList.remove('off')
            mainContainer.style = `background-color: #9acd32;
                                   display: block;`
            videoContainer.style = `background-color: #9acd32;
                                    display: block;`
            setTimeout(function() {
               skinCareContainer.style.display = 'none'
               document.querySelector('.inside').classList.toggle('inside-active')
               findEmptySlot().appendChild(skinCareCard)
               skinCareContent.classList.remove(`content-active`)
            }, 5000)
        }


soapContainer.addEventListener('dragover', function(e) {
    e.preventDefault()
})
soapContainer.addEventListener('drop', function(e) {
    soapImage.classList.remove('active-soap')
     soapContainer.appendChild(soapImage)
} )

function fixThings() {
    soapImage.classList.remove('active-soap')
    soapFoam.classList.remove('soap-foam-active')
    soapContainer.appendChild(soapImage)
    soapImage.setAttribute('draggable', 'true')
    soapImage.addEventListener('dblclick', dropSoap)
    if(uglyFace.classList.contains('face-off') === false) {
     uglyFace.classList.add('face-off')
     freshFace.classList.remove('face-off')
    }
    else if(freshFace.classList.contains('face-off') === false) {
     freshFace.classList.add('face-off')
     deadpoolFace.classList.remove('face-off')
    } 
}


// projects

const projects = locations.querySelector('.projects')
const projectsSquaresContainer = projects.querySelector('.squares-container')

// about 
const about = locations.querySelector('.about')
const aboutCard = document.querySelector('.about-card')
const description = aboutCard.querySelector('.description')
const dragon = about.querySelector('.dragon')
console.log(dragon)
const descriptionText = `Hello! I'm Youssef ELGhazzi, a passionate and self-taught front-end developer with a knack for crafting seamless and engaging user experiences. My journey into web development began out of pure curiosity and a desire to understand how websites work.`
const descriptionTextArray = descriptionText.split(' ') 
const aboutSquaresContainer = about.querySelector('.squares-container')
for (i=0 ; i < 400 ; i++) {
   const square = document.createElement('div')
    if (i < 20 && i !== 0) {
     square.classList.add('square-top')
    } else if (i > 379) {
     square.classList.add('square-bottom')
    } else if (i % 20 === 0 ) {
        square.classList.add('square-left')
    } else if ((i + 1) % 20 === 0  ) {
        square.classList.add('square-right')
    }
    if (i === 0) {
        square.classList.add('square-top-left')
    }
    if (i === 19) {
        square.classList.add('square-top-right')
    }
    if (i === 399) {
        square.classList.add('square-bottom-right')
    }
    if (i === 380) {
        square.classList.add('square-bottom-left')
    }
    aboutSquaresContainer.appendChild(square)
    projectsSquaresContainer.appendChild(square)
}
for (i=0 ; i < 400 ; i++) {
   const square = document.createElement('div')
    if (i < 20 && i !== 0) {
     square.classList.add('square-top')
    } else if (i > 379) {
     square.classList.add('square-bottom')
    } else if (i % 20 === 0 ) {
        square.classList.add('square-left')
    } else if ((i + 1) % 20 === 0  ) {
        square.classList.add('square-right')
    }
    if (i === 0) {
        square.classList.add('square-top-left')
    }
    if (i === 19) {
        square.classList.add('square-top-right')
    }
    if (i === 399) {
        square.classList.add('square-bottom-right')
    }
    if (i === 380) {
        square.classList.add('square-bottom-left')
    }
    aboutSquaresContainer.appendChild(square)
}


let aboutCurrentIndex = 0

function fix() {
    if (aboutCurrentIndex < descriptionTextArray.length) {
        aboutCard.style = ` background: rgba(240, 146, 53, 0.04);`
        description.textContent += descriptionTextArray[aboutCurrentIndex] + ' '
        aboutCurrentIndex += 1
    } else {
        aboutCard.style = `background: #f092350a;
                             box-shadow: 0px 0px 6px 0px var(--second-color);`
        dragon.style.display = 'block' 
        aboutCurrentIndex = 0
        clearInterval(aboutTimerId)                
    }
}
 let aboutTimerId

function endAbout() {
    clearInterval(aboutTimerId)
    aboutCurrentIndex = 0
    description.textContent = ''
    console.log('haah')
    aboutCard.style = `background: transparent;
                             box-shadow: none;`
        dragon.style.display = 'none' 
}

function startAbout() {
    clearInterval(aboutTimerId)
    aboutTimerId = setInterval(fix, 500) 
}


// quote start


const quotesContainer = document.querySelector('.quotes-container')
const paperPlaneContainer = document.querySelector('.paper-plane-container')
const paperPageContainer = document.querySelector('.paper-page-container')
const paperPlane = paperPlaneContainer.querySelector('img')
const paperPage = paperPageContainer.querySelector('.paper-page')
const paperAudio = paperPlaneContainer.querySelector('audio')
const quoteText = paperPage.querySelector('.quote-text')
const quoteAuthor = paperPage.querySelector('.quote-author')
const btnOn = paperPageContainer.querySelector('.btn-on')
const btnOff = paperPlaneContainer.querySelector('.btn-off')
const backBtn = quotesContainer.querySelector('.back')

backBtn.addEventListener('click', function() {
    document.querySelector('.inside').classList.add('inside-active')
    quotesContainer.style.display = 'none'
    findEmptySlot().appendChild(document.querySelector('.golden-dictionary'))
    document.querySelector('.golden-dictionary-content').classList.remove('content-active')
})



btnOn.addEventListener('click', function() {
    turnOn()
})
paperPlane.addEventListener('animationend', function() {
btnOff.classList.add('btn-off-hover')
setTimeout(turnOff,500) })

btnOff.addEventListener('click', turnOff)



function turnOff() {
    paperPlaneContainer.style.display = 'none'
    paperPageContainer.style.display = 'flex'
    fetchQuotes()
}
function turnOn() {
    paperAudio.play()
    document.querySelector('.inside').classList.remove('inside-active')
    quotesContainer.style.display = 'flex'
    paperPlaneContainer.style.display = 'block'
    paperPageContainer.style.display = 'none'
    btnOff.classList.remove('btn-off-hover')
}

function randomNumber() {
   return  (Math.random() * 14).toFixed(0)
}

async function fetchQuotes() {
    try {
    const res = await fetch('https://type.fit/api/quotes')
    if(!res.ok) {
        throw new Error('response was not ok' + res.statusText)
    }
    const data = await res.json()
    const quoteObject = data[randomNumber()]
    let quoteObjectAuthor
    if (quoteObject.author.includes(', type.fit')) {
     quoteObjectAuthor = quoteObject.author.replace(', type.fit', '.')
    } else {
        quoteObjectAuthor = quoteObject.author
    }
    quoteText.textContent = quoteObject.text
    quoteAuthor.textContent = quoteObjectAuthor
    } catch (error) {
        quoteText.textContent = 'You Should Enjoy The Little Detours To The Fullest.'
        quoteAuthor.textContent = 'Ging'
    }
} 



// quote end