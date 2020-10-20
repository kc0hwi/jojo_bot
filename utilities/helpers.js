const randomPuppy = require('random-puppy')


function getSFW(subreddit) {
    return randomPuppy(subreddit)
}

function postImage(channel, image) {
    channel.send(image)
}

function randomSub(listArr) {
    limit = listArr.length
    const arrIndex = randNum(limit)
    //console.log(listArr[arrIndex])
    return listArr[arrIndex]
}
const randNum = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};

module.exports = {getSFW, postImage, randomSub}