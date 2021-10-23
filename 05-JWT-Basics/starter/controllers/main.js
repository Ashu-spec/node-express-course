const logIn = async (req, res) => {
    res.send('Fake Login/Register/Signup')
}   
const dashBoard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello User`, secret: `Your Lucky Number Is ${luckyNumber}`})
}
module.exports = { logIn, dashBoard }