// Question # 1:
var itemsArray = [
	{ name: "juice", price: 50, quantity: 3 },
	{ name: "cookie", price: 30, quantity: 9 },
	{ name: "shirt", price: 880, quantity: 1 },
	{ name: "pen", price: 100, quantity: 2 }
  ];
  function calculateTotal(items) {
	let totalPrice = 0;
	for (let i = 0; i < items.length; i++) {
	  let itemTotal = items[i].price * items[i].quantity; 
	  console.log(`${items[i].name}: Total Price = ${itemTotal}`); 
	  totalPrice += itemTotal;
	}
	document.write(`Total Price of all items: ${totalPrice}` + "<br>");
  }
  calculateTotal(itemsArray);
  



// Question # 2:
var user = {
	name: "Alfred",
	email: "alfred@example.com",
	password: "securePassword123",
	age: 25,
	gender: "Male",
	city: "Toronto",
	country: "Canada"
  };
  function checkProperty(object, property) {
	return object.hasOwnProperty(property) ? `${property} exists` : `${property} does not exist`;
  }
  console.log(checkProperty(user, 'age'));    
  console.log(checkProperty(user, 'country')); 
  console.log(checkProperty(user, 'firstName')); 
  console.log(checkProperty(user, 'lastName')); 



// Question # 3:
function User(name, email, password, age, gender, city, country) {
	this.name = name;
	this.email = email;
	this.password = password;
	this.age = age;
	this.gender = gender;
	this.city = city;
	this.country = country;
  }
  var user1 = new User("Ayesha", "ayesha09@gmail.com", "password123", 25, "Female", "Toronto", "Canada");
  var user2 = new User("Ahmed", "ahmed12@gmail.com", "password456", 30, "Male", "New York", "USA");
  var user3 = new User("Sara", "sara7@emily.com", "password789", 22, "Female", "London", "UK");
  console.log(user1);
  console.log(user2);
  console.log(user3);
  
  
// Question # 4:
function Person(name, gender, address, education, profession) {
	this.name = name;
	this.gender = gender;
	this.address = address;
	this.education = education;
	this.profession = profession;
  }
  function saveToLocalStorage(records) {
	localStorage.setItem('populationRecords', JSON.stringify(records));
  }
  function getFromLocalStorage() {
	const records = localStorage.getItem('populationRecords');
	return records ? JSON.parse(records) : [];
  }
  function displayRecords() {
	const records = getFromLocalStorage();
	const recordsDiv = document.getElementById('records');
	recordsDiv.innerHTML = ''; 
	records.forEach((record, index) => {
	  recordsDiv.innerHTML += `
		<p><strong>Record ${index + 1}</strong>: ${record.name}, ${record.gender}, 
		${record.address}, ${record.education}, ${record.profession}</p>
	  `;
	});
  }
  document.getElementById('populationForm').addEventListener('submit', function (e) {
	e.preventDefault(); 
	const name = document.getElementById('name').value;
	const gender = document.querySelector('input[name="gender"]:checked').value;
	const address = document.getElementById('address').value;
	const education = document.getElementById('education').value;
	const profession = document.getElementById('profession').value;
	const newPerson = new Person(name, gender, address, education, profession);
	const records = getFromLocalStorage();
	records.push(newPerson);
	saveToLocalStorage(records);
	displayRecords();
	document.getElementById('populationForm').reset();
  });
  window.onload = displayRecords;