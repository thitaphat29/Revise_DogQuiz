var quizList = [];
var index = 0;
var currentQuiz;
var score = 0;

$(document).ready(function(){

	/* -- Declear objects-- */
	var QuestionNo_1 = {
		question : "How many types of dogs are there in the world?",
		choices : ["342","340","250","400"],
		correct_answer : "340",
		explanation : "there are about 340 breeds recognized by Federation Cynologique Internationale (FCI), the world governing body of dog breeds, known as the World Canine Organization.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}
	
	};
	var QuestionNo_2 = {
		question : "Normal adult dogs have how many teeth?",
		choices : ["24","38","42","32"],
		correct_answer : "42",
		explanation : "Adult dogs have 42 permanent teeth compared to a measly 32 average human teeth.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_3 = {
		question : "what is the favorite dog breed of Queen of England?",
		choices : ["Corgi","Basenji","Poddle","Pomeranian"],
		correct_answer : "Corgi",
		explanation : "The Pembroke Welsh Corgi, is the type of dog favored by the Queen of England.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_4 = {
		question : "Which TV series had a dog named K9 who was also a robot?",
		choices : ["Full House","Star Trek","Doctor Who","Law & Order"],
		correct_answer : "Doctor Who",
		explanation : "K-9, is the name of several fictional robotic canines in the long-running British science fiction television series, Doctor Who, first appearing in 1977.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_5 = {
		question : "Which dog breed is the smallest used in hunting?",
		choices : ["Smooth fox terrier","Miniature dachshund","Toy puddle","Chihuahua"],
		correct_answer : "Miniature dachshund",
		explanation : "Dachshunds are scent hound dog breeds who were breeds to hunt badgers and other tunneling animals, rabbits, and foxes.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_6 = {
		question : "Which dog breed is the World's largest dog breeds?",
		choices : ["Great Dane","English Mastiff","Neapolitan Mastiff","Irish Wolfhound"],
		correct_answer : "Great Dane",
		explanation : "A Great Dane currently holds the record for World's tallest living dog and tallest dog ever.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_7 = {
		question : "Which dog breed has a black tongue?",
		choices : ["Husky","Labrador","Weimaraner","Chow Chow"],
		correct_answer : "Chow Chow",
		explanation : "The chow chow and the Chinese Shar-Pei both have purple tongues; however, the chow chow is the only dog breed to have a purple tongue with purple gums and lips.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_8 = {
		question : "Which dog yodels instead of barks?",
		choices : ["Komondor","Otterhound","Basenji","Basset hound"],
		correct_answer : "Basenji",
		explanation : "Basenji's are known for being \"barkless\" and instead makes yodel type sounds or howl loudly.",
	
		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_9 = {
		question : "What is Japanese dog breed?",
		choices : ["Chihuahua","Toy puddle","Shiba Inu","Shih Tzu"],
		correct_answer : "Shiba Inu",
		explanation : "Shiba Inu is one of Japanese dog breeds that have grown popular across the world. However, most are rare and only found in Japan.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		}

	};
	var QuestionNo_10 = {
		question : "Base on Guinness World Records, which dog breed the most expensive dog ever sold.",
		choices : ["Akita","Irish Wolfhound","Saluki","Tibetan mastiff"],
		correct_answer : "Tibetan mastiff",
		explanation : "With a price tag of 10 million Chinese yuan or $1,513,417, an 11-month-old red Tibetan mastiff became the world's costliest canine when sold by breeder Lu Liang to a Chinese multi-millionaire in March 2011.",

		check_answer : function(userChoice){
			return(this.correct_answer == userChoice);
		},

	};
	/* ---------------------- */


	/* -- add object in the array -- */
	quizList.push(QuestionNo_1);
	quizList.push(QuestionNo_2);
	quizList.push(QuestionNo_3);
	quizList.push(QuestionNo_4);
	quizList.push(QuestionNo_5);
	quizList.push(QuestionNo_6);
	quizList.push(QuestionNo_7);
	quizList.push(QuestionNo_8);
	quizList.push(QuestionNo_9);
	quizList.push(QuestionNo_10);
	/* ----------------------------- */



	/*----!! Start the quiz here !!---- */
	
	$(".btn-start").click(function(){
		showNextQuestion();
	});

	$("ul").on("click","li", function(e){
		checkAnswer(this);
		displayScore();
	});

	$(".btn-next").click(function(){
		showNextQuestion();
	});

	//play again
	$(".btn-again").click(function(){
		index = 0;
		score = 0;

		showNextQuestion();
	});
});


/* ----- Step 1 : show content ---- */

function showNextQuestion(){

	$(".dog-still").css("display","block");
	$(".dog-happy").css("display","none");
	$(".dog-sad").css("display","none");

	$(".feedback").fadeOut();
	$(".intro").css("display","none");
	$(".final-score").css("display","none");

	$(".content").css("display","block");
	$(".bottom").css("display","block");
	$(".question-number").css("display","block");

	$(".content h2").text(""); // clear question
	$(".choices").find("li").remove(); // clear choices

	if(index != 10){
		$(".content h2").text(""); // clear question
		$(".choices").find("li").remove(); // clear choices
		runQuestionnaire();
		index++;
	}else {
		$(".bottom").css("display","none");
		$(".content h2").text(""); // clear question
		$(".choices").find("li").remove(); // clear choices

		//show final score
		$(".final-score").css("display","block");
		$(".total-correct span").text(score);
		$(".total-incorrect span").text(10-score);
	}


}

/* ----- Step 2 : Run Questionnaire ---- */

function runQuestionnaire(){

	currentQuiz = Object.create(quizList[index]);
	
	//question
	$(".content h2").append((index+1)+". "+currentQuiz.question);

	//answer
	for(var i=0; i<currentQuiz.choices.length; i++){
		$('ul').append('<li>'+currentQuiz.choices[i] +'</li>'); 
	}

	//display question number
	$(".question-number span").html(index+1);
	
}

function displayScore(){
	console.log("your score: " + score);
	switch(score){
		case 1 : 
			$(".img-score").css("background-position","0 -78px");
			break;
		case 2 : 
			$(".img-score").css("background-position","0 -154px");
			break;
		case 3 : 
			$(".img-score").css("background-position","0 -230px");
			break;
		case 4 : 
			$(".img-score").css("background-position","0 -307px");
			break;
		case 5 : 
			$(".img-score").css("background-position","0 -383px");
			break;
		case 6 : 
			$(".img-score").css("background-position","0 -458px");
			break;
		case 7 : 
			$(".img-score").css("background-position","0 -536px");
			break;
		case 8 : 
			$(".img-score").css("background-position","0 -612px");
			break;
		case 9 : 
			$(".img-score").css("background-position","0 -688px");
			break;
		case 10 : 
			$(".img-score").css("background-position","0 -767px");
			break;
		default : break;
	}
	
}

function checkAnswer(selectChoice){

	currentQuiz.userChoice = $(selectChoice).html();
	console.log("your answer: "+currentQuiz.userChoice);
	console.log("correct answer: "+currentQuiz.correct_answer);
	var status = currentQuiz.check_answer(currentQuiz.userChoice);

	if(status){
		displayModal();// send correct popup
		$(".feedback h2").html("You're correct");
		$(".dog-still").css("display","none");
		$(".dog-happy").css("display","block");
		score++;
	}else{
		$(".feedback h2").html("Incorrect!!");
		$(".dog-still").css("display","none");
		$(".dog-happy").css("display","none");
		$(".dog-sad").css("display","block");

		//show explanation
		displayModal(); // send incorrect popup
	}

}

function displayModal(){
	$(".feedback").fadeIn();
	//$(".feedback").css("display","block");
	$(".feedback .explanation").html(currentQuiz.explanation);

	if(index == 10){
		$(".btn-next").text("See Your Result");
	}

}