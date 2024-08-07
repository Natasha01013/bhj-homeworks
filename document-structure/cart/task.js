//Домашнее задание к занятию «Изменение структуры HTML-документа».
//Задача 3. Корзина товаров

const plus = document.querySelectorAll('.product__quantity-control_inc');
const minus = document.querySelectorAll('.product__quantity-control_dec');
const productValue = Array.from(document.getElementsByClassName('product__quantity-value'));
const productAdd = Array.from(document.getElementsByClassName('product__add'));

const cart = document.querySelector('.cart__products');
const product = Array.from(document.getElementsByClassName('product'));


for (let i = 0; i < product.length; i++) {
//уменьшаем или увеличиваем количество товаров
	plus[i].onclick = function() {
		productValue[i].textContent++
	}

	minus[i].onclick = function() {
		if (productValue[i].textContent != 1) { //уменьшаем количество, но не ниже 1
			productValue[i].textContent--
		}
	}

//добавляем товары в корзину
	productAdd[i].addEventListener('click', (elem) => {
		elem.preventDefault();

		let cartArr = Array.from(cart.getElementsByClassName('cart__product'));

		let cartQuantityValue = productValue[i].textContent;
		let productId = product[i].dataset.id;
		let productImage = product[i].querySelector('.product__image').src;

		const productInCart = cartArr.find(element => element.dataset.id === productId);

		if(productInCart) { //увеличиваем количество товаров в корзине, если товар уже добавлен
			let currentAddDiv = productInCart.querySelector(".cart__product-count");
			currentAddDiv.textContent = +currentAddDiv.textContent + +cartQuantityValue; 
		} else { //добавляем товар в корзину, если его там нет
			let addDiv = document.createElement('div'); 
			addDiv.className = "cart__product";
			addDiv.dataset.id = productId;

			addDiv.innerHTML =
				'<img class="cart__product-image" src="' +
				productImage +
				'"><div class="cart__product-count">' +
				cartQuantityValue +
				"</div>";
			cart.append(addDiv);
		}
	});
}