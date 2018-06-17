/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var nam1 = document.getElementById('name1');
nam1.innerHTML = 'Tay-Tay';
/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var pos2 = document.getElementById('position2');
pos2.innerHTML = 'Project Manager';
/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/


var alis3 = document.getElementById('alias3');
alis3.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var prof = document.getElementsByClassName('profile');
prof[0].innerHTML = 'itslit';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

prof[1].innerHTML = 'boards dont hit back';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var a = document.getElementsByClassName('alias');
a[2].innerHTML = 'fire';

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var createDiv = document.createElement('div');
createDiv.id = 'name7';
createDiv.innerHTML = 'Peter Griffin'
var getD = document.getElementById('nameParent');
getD.appendChild(createDiv);
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var cdiv = document.createElement('div');
cdiv.id = 'alias8';
cdiv.innerHTML = 'Oldman River Walk';
var get = document.getElementById('aliasParent');
get.appendChild(cdiv);

//Final Boss
/*9. Create your own profile.*/

var profElement = document.createElement('div');
profElement.id = 'prof';
var approf = document.getElementsByClassName('block3 col-sm-4');
approf[2].appendChild(profElement);
var nameElement = document.createElement('div');
nameElement.id = 'name';
nameElement.innerHTML = 'isaiah';
var apname = document.getElementById('prof');
apname.appendChild(nameElement);
