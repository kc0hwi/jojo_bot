const axios = require('axios')
const cheerio = require('cheerio')

const randNum = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};
const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
function checkURL(url) {
    if (url)  {
        return(url.match(/\.(jpeg|jpg|gif|png|gifv)$/) != null);
    } else {
        console.log('no valid url given')
    }
    
}
//pass in a url, get json, extract random url
async function getLink(url) {
    const res = await axios.get(url)
    const childArr = res.data.data.children.length
    console.log('length of array: ', childArr)
    const indexValue = randNum(childArr)
    //const link = res.data.data.children[indexValue].data.url
    const link = res.data.data.children[indexValue].data.url_overridden_by_dest
    const subObject = false && res.data.data.children[indexValue].data.preview.reddit_video_preview
    const videoLink = false && getNestedObject(subObject, ['fallback_url'])
    console.log('link: ', link)
    console.log('videolink: ', videoLink)
    return [link, videoLink]

}

//check link type, retry if not image or video, return link
async function getLinkType(url) {
    let goLoop = true
    do {
        const [link, videoLink] = await getLink(url)
        if(videoLink) {
            console.log('video link found: ', videoLInk)
            goLoop = false

            return videoLink
        } else if (checkURL(link)) {
            console.log('regular image found: ', link)
            goLoop = false

            return link
        } else {
            console.log('Link check failed both tests, trying another post')
            //const errMsg = 'Debug: no valid link found...goddamnit Willow'
            goLoop = true
        }

    }
    //while (loopState=true)
    while (goLoop=true)

}

//const linkHistory = []
const linkHistory = []

module.exports = async function checkDuplicate(url) {
    let loopState = true
    do {
        const suggestedLink = await getLinkType(url)
        if(linkHistory.indexOf(suggestedLink) !== -1) {
            console.log(suggestedLink, " already posted")
            loopState = true
        } else {
            linkHistory.push(suggestedLink)
            if(linkHistory.length > 25) {
                console.log("linkHistory array maxed out")
                linkHistory.shift()
            }
            console.log("History: ", linkHistory)
            loopState = false
            return suggestedLink
        }
    }
    while (loopState = true)
}

// module.exports = async function checkLink(url) {
//     //const linkHistory = []
//     let loopState = true
//     do {
//         const suggestedLink = getLinkType(url)
//     }
//     while (loopState = true)
// }
// module.exports = async function checkLink(url) {
//     const [link, videoLink] = await getNsfw(url)

//     if(videoLink) {
//         console.log('video link found: ', videoLInk)
//         return videoLink
//     } else if (checkURL(link)) {
//         console.log('regular image found: ', link)
//         return link
//     } else {
//         console.log('Link check failed both tests')
//         const errMsg = 'Debug: no valid link found...goddamnit Willow'
//         return errMsg
//     }
// }

