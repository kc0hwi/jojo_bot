const axios = require('axios')
const cheerio = require('cheerio')



const randNum = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};

module.exports = async function getImage(url) {
        const res = await axios.get(url)
        const childArr = res.data.data.children.length
        const indexValue = randNum(childArr)
        const link = res.data.data.children[indexValue].data.url
        console.log(link)
    return link
}