// Problem 1 Solution
function Audit(){
const links = document.getElementsByTagName('a');

console.log('Total Links Are : ',links.length);
console.log('The Links Name Are : ' );

for( let link of links){
    console.log(link.innerText);
}
}
Audit();


// Problem 2 Solution
function Automate(){

const tasks = document.getElementsByTagName('li');
const taskArray = [...tasks]
let count = 1;
for( let task of taskArray){
    task.innerText = `${count++}. ${task.innerText}`
}
}
Automate()


// Problem 3 Solution
function Header(){
const chapters = document.getElementsByTagName('h1');
const sections = document.getElementsByTagName('h2');

for( let chapter of chapters){
    chapter.innerText = 'Chapter: ' + chapter.innerText
}
for( let section of sections){
    section.innerText = 'Section: ' + section.innerText
}
}
Header();

// Problem 4 Solution
function ReadMore(){
    const paragraphs = document.getElementsByTagName('p');
    for( let paragraph of paragraphs){
        paragraph.innerText = paragraph.innerText + " - Read More"
    }
}
ReadMore();

// Problem 5 Solution
function Span(){
    const spans = document.getElementsByTagName('span');
    for( let span of spans){
        span.innerText = "Important: " + span.innerText 
    }
}
Span();