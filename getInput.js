   Lungo.Events.init({
   	'tap section#main article#configuration a.button#0': function(){
   	   var name = document.getElementById('section#main article#configuration label#0').value
   		alert("Your name is " + name);
   		 console.log("name is  " + name);
   		 Lungo.router.article("main", "main-article")
   	}
   });