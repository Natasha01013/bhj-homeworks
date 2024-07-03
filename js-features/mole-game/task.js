//1.3. Игра - убей кротов

let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
	let hole = document.getElementById(`hole${i}`);


	hole.onclick = function() {
		if (hole.className.includes('hole_has-mole')) {
			dead.textContent++;
		} else {
			lost.textContent++;
		}	

		if (dead.textContent >= 10) {
			alert("Вы победили!");
			dead.textContent = 0;
			lost.textContent = 0;
		} 
	
		if (lost.textContent >= 5) {
			alert("Вы проиграли. Игра окончена.");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}



