
var myDate = new Date();
var myDay = myDate.getDay();
var today = "";

switch(myDay) {
   case 0:
      today = "Sunday";
      coffee = {
         name:"Bubble Tea",
         pic:"bubble-tea.jpg",
         alt:"A pic of a yuymmy bubble tea.",
         color:"pink",
         day:"Tuesday",
         desc: `I like me some Bubble Tea!`
      };
      break;
   default:
      today = "Something went wrong!";
}

console.log(coffee);
alert(today);
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

function coffeeTemplate(coffee) {
   let myReturn = "";


   myReturn += 
      `<p>
			<img src="images/${coffee.pic} alt="${coffee.alt}" id="coffee">
         <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>${coffee.desc}
		</p>`
}

