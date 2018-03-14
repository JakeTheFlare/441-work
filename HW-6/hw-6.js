// parent node
var body = document.body;
body.innerText = "";
body.style.padding = "15px";
body.style.margin = "12px";
body.style.background = 'rgb(205,127,50)';

// div tag
let el = document.createElement ("div");

// child node 1, Heading 1
let Child_1 = document.createElement ("h1");
Child_1.innerText = "Welcome to Canine Central!";
Child_1.setAttribute ("style", "padding: 1rem; font-family: American Typewriter; font-style: bold; font-size: 3em; letter-spacing: 5px; color: 'black'; text-align: center; border-style: solid; border-color: black; border-width: 4px; background: #800000");
el.appendChild (Child_1);
body.appendChild (el);

// image node
var Image = document.createElement ("img");
Image.setAttribute ("src", "coke_puppy.jpg");
Image.setAttribute ("width", "400");
Image.setAttribute ("height", "520");
Image.setAttribute ("alt", "A puppy in a Coca-Cola can.");
Image.setAttribute ("align", "middle");
Image.setAttribute ("style", "display: block; margin-top: 1em; margin-bottom: 1em; margin-left: auto; margin-right: auto; border-style: solid; border-color: black; border-width: 5px");
el.appendChild (Image);
body.appendChild (el);

// child node 2, Heading 2
let Child_2 = document.createElement ('h2');
Child_2.innerText = "What you need to know about us.";
Child_2.setAttribute ("style", "padding: 1rem; font-family: American Typewriter; font-style: bold; font-size: 1.5em; letter-spacing: 3px; color: 'black'; text-align: center; border-style: solid; border-color: black; border-width: 4px; background: #A52A2A");
el.appendChild (Child_2);
body.appendChild (el);

// child node 3, Paragraph 1
let Child_3 = document.createElement ('p');
Child_3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque vitae nibh euismod luctus. Sed in aliquam justo. Donec neque nulla, sagittis ac tortor vel, elementum porta nibh. Nullam ac scelerisque libero, eu consectetur elit. Quisque non tortor et mi tincidunt semper. Vestibulum nulla risus, porta suscipit velit eget, maximus faucibus arcu. Suspendisse mollis nulla non eros suscipit finibus. In fermentum auctor magna, ut porta dolor malesuada nec. Proin vitae mauris sed ante gravida egestas. Pellentesque magna est, volutpat id posuere pharetra, dictum at enim. Donec nec eleifend velit, accumsan semper erat. Nunc eget enim diam. Nullam vulputate justo eget nunc volutpat tincidunt. Maecenas rutrum cursus ipsum nec lobortis. Sed consectetur tincidunt nisl, in consequat quam faucibus varius.";
Child_3.setAttribute ("style", "padding: 2rem; margin-top: -1.5em; font-family: American Typewriter; font-style: regular; font-size: 14pt; letter-spacing: 5px; color: 'black'; text-align: left; border-style: solid; border-color: black; border-width: 4px; background: #8B4513");
el.appendChild (Child_3);
body.appendChild (el);

// child node 4, Paragraph 2
let Child_4 = document.createElement ('p');
Child_4.innerText = "Aenean a mi ut justo tempus ornare. Ut ultrices vulputate orci. Praesent eu dolor a lectus feugiat imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis vitae urna dignissim, gravida urna a, venenatis orci. Curabitur mattis ligula eros, faucibus blandit nulla euismod vitae. Quisque scelerisque feugiat magna, quis semper elit malesuada id. Nullam in diam varius odio dictum aliquet. Duis sed molestie risus. Donec consectetur ultrices luctus. Integer ornare justo lectus, vitae maximus erat blandit a. Phasellus quis dapibus neque. Integer quis odio vitae massa bibendum tempor. Aliquam nec consectetur risus. Sed porta aliquet ornare.";
Child_4.setAttribute ("style", "padding: 2rem; margin-top: -1.5em; font-family: American Typewriter; font-style: regular; font-size: 14pt; letter-spacing: 5px; color: 'black'; text-align: left; border-style: solid; border-color: black; border-width: 4px; background: #A0522D");
el.appendChild (Child_4);
body.appendChild (el);

// child node 5, Link
let Child_5 = document.createElement ('a');
Child_5.innerText = "Click here for more cute images.";
Child_5.setAttribute ("href", "http://www.funnypuppysite.com");
Child_5.setAttribute ("style", "padding: 3rem; font-family: American Typewriter; font-style: regular; font-size: 12pt; letter-spacing: 5px");
el.appendChild (Child_5);
body.appendChild (el);
