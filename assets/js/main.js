const smallGlasses = document.querySelectorAll('.small-glass')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


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
}