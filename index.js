// shuffle array
const shuffleArray = (arr) => {
	const copyArr = [...arr]
	
	return copyArr.sort(() => Math.random() - 0.5)
}

module.exports = shuffleArray
