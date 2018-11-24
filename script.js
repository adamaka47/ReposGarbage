function myFirstApp(name, age) {
	alert("Меня зовут " + name + " и это моя программа!");


	function checkAge() {
		if (age > 18) {
			alert('У тебя все получится');
		} else {
			alert('Тебе нет 18 дно');
		}
	}

	checkAge();

	function calcPow(num) {
		console.log(num*num);
	}

	calcPow(4);

		function showSkills() {
		let skills = ['html', 'css', 'jquery', 'browser'];

		for (let i = 0; i < skills.length; i++) {
			document.writeln("Я владею " + skills[i] + "<br>");
		}
	}
	showSkills();

}

myFirstApp("Adam", 19);


