// global variables
const $modalMap = document.getElementById("modalMap");
const $closeModalMap = document.getElementById("closeModalMap");
// variables de para proceso de los productos
const $modalImageProduct = document.getElementById("modalImageProduct");
const $closeModalImageProduct = document.getElementById("closeModalImageProduct");
const $modalDetailProduct = document.getElementById("modalDetailProduct");
const $closeModalDetailProduct = document.getElementById("closeModalDetailProduct");
// variables de los insumos de fabrica
const $modalImageInput = document.getElementById("modalImageInput");
const $closeModalImageInput = document.getElementById("closeModalImageInput");
const $modalDetailInput = document.getElementById("modalDetailInput");
const $closeModalDetailInput = document.getElementById("closeModalDetailInput");

(function(){
	// coruosel
    bulmaCarousel.attach('#slider', {
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
    });

	$closeModalMap.addEventListener("click", ()=>{
		$modalMap.classList.remove("is-active");
	})
	//productos
	$closeModalImageProduct.addEventListener("click", ()=>{
		$modalImageProduct.classList.remove("is-active");
	})
	$closeModalDetailProduct.addEventListener("click", ()=>{
		$modalDetailProduct.classList.remove("is-active");
	})
	//insumos
	$closeModalImageInput.addEventListener("click", ()=>{
		$modalImageInput.classList.remove("is-active");
	})
	$closeModalDetailInput.addEventListener("click", ()=>{
		$modalDetailInput.classList.remove("is-active");
	})
})();

function openMap(){
	$modalMap.classList.add("is-active");
}

// productos
function openImageProductModal(){
	$modalImageProduct.classList.add("is-active");
}

function openDetailProductModal(){
	$modalDetailProduct.classList.add("is-active");
}

//insumos
function openImageInputModal(){
	$modalImageInput.classList.add("is-active");
}

function openDetailInputModal(){
	$modalDetailInput.classList.add("is-active");
}

// add chat messenger
// https://www.youtube.com/watch?v=TisjtrKJXM0