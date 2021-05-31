const smallGlasses = document.querySelectorAll('.small-glass')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigGlass()

smallGlasses.forEach((glass, index) => {
	glass.addEventListener('click',() => highlightGlass(index))
});

function highlightGlass(index) {
	if(smallGlasses[index].classList.contains('full') && !smallGlasses[index].nextElementSibling.classList.contains('full')){
		index--
	}
	smallGlasses.forEach((glass, index2) =>{
		if(index2 <= index){
			glass.classList.add('full')
		}else{
			glass.classList.remove('full')
		}
	})
	updateBigGlass()
}

function updateBigGlass(){
	const fullGlasses = document.querySelectorAll('.small-glass.full').length
	const totalGlasses = smallGlasses.length

	if(fullGlasses === 0){
		percentage.style.visibility = 'hidden'
		percentage.style.height = 0
	}else{
		percentage.style.visibility = 'visible'
		percentage.style.height = `${330/totalGlasses*fullGlasses}px`
		percentage.innerText = `${fullGlasses / totalGlasses * 100}%`
	}
	if(fullGlasses === totalGlasses){
		remained.style.visibility = 'hidden'
		remained.style.height = 0;
	}else{
		remained.style.visibility = 'visible'
		liters.innerText = `${4 - (500 * fullGlasses / 1000)} Liters`
	}
}