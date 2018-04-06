//Javascript variables for the three main adventure sections.
let beginning = document.querySelector( ".adventure_1" );
let knight_path = document.querySelector( ".adventure_2" );
let blacksmith_path = document.querySelector( ".adventure_3" );

//Javascript variables for all of the ending outcomes.
let jester_ending = document.querySelector( ".ending_1" );
let knight_good_ending = document.querySelector( ".ending_2" );
let knight_bad_ending = document.querySelector( ".ending_3" );
let blacksmith_good_ending = document.querySelector( ".ending_4" );
let blacksmith_bad_ending = document.querySelector( ".ending_5" );

//Variables for the radio forms on the webpage.
let firstChoice = document.querySelector( "form" );
let secondChoice = document.querySelector( ".choice2" );
let thirdChoice = document.querySelector( ".choice3" );

//Variables for the radio selections.
let future_rad = document.querySelectorAll( ".choice1" );
let knight_rad = document.querySelectorAll( ".choice2" );
let blacksmith_rad = document.querySelectorAll( ".choice3" );

//Event listeners for all of the functions.
firstChoice.addEventListener( "click", choice1 );
secondChoice.addEventListener( "click", choice2 );
thirdChoice.addEventListener( "click", choice3 );


//This function starts the webpage at the beginning, and changes the text and background color depending on what choice the player makes.
function choice1() {

    for( let rad of future_rad ){

//If the player chooses to be a knight, this code will kick in.
        if( knight.checked ){
            beginning.hidden = true;
            knight_path.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #FF4500; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

//If the player chooses to be a blacksmith, this code will kick in.
        if( blacksmith.checked ){
            beginning.hidden = true;
            blacksmith_path.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #48D1CC; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

//If the player chooses to be a jester, this code will kick in, and feature the first of the three bad/sad endings.
        if( jester.checked ){
            beginning.hidden = true;
            jester_ending.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #ee00ee; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
          }

  }

}


//This function will take place if the player chooses to be a knight, and, like in the beginning, it will change the text and background color depending on what choice the player makes.
function choice2() {

    for( let rad of knight_rad ){

//If the player chooses the enchanted sword, this code will kick in, and feature the good ending for the knight adventure.
        if( sword.checked ){
            knight_path.hidden = true;
            knight_good_ending.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #FFD700; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

//If the player chooses the mace, this code will kick in, and feature the bad ending for the knight adventure.
        if( mace.checked ){
            knight_path.hidden = true;
            knight_bad_ending.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #A9A9A9; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

  }

}


//This function will take place if the player chooses to be a blacksmith, and, like in the beginning, it will change the text and background color depending on what choice the player makes.
function choice3() {

    for( let rad of blacksmith_rad ){

//If the player chooses the enchanted metal, this code will kick in, and feature the good ending for the blacksmith adventure.
        if( enchanted_metal.checked ){
            blacksmith_path.hidden = true;
            blacksmith_good_ending.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #e5e4e2; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

//If the player chooses the rusty metal, this code will kick in, and feature the bad ending for the blacksmith adventure.
        if( rusty_metal.checked ){
            blacksmith_path.hidden = true;
            blacksmith_bad_ending.hidden = false;
            document.body.setAttribute ( "style", "margin: 18px; padding: 18px; background: #A55D35; font-family: Old_Englished_Boots; font-size: 20pt; letter-spacing: 5px" );
        }

  }

}
