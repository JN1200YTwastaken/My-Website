/* 
function aboutme() {
    var newWindow = window.open("", "_blank", "width=750,height=750");
    
    // Write content to the new window
    var content = " <html> <head> <title>More about me</title> <style> body { border: 5px solid white; background-color: rgb(57, 54, 54);font-size: 24pt; font-family: sans-serif; text-align: center;} h1 { color: white; font-size: 30pt; text-align: center; } button { text-align: center; border: 3.2px solid white; padding: none; margin: none; border-radius: 25px; background: transparent; color: white; font-size: 25pt; height: 100px; width: 250px; } button:hover { opacity: 50%; height: 110px; width: 275px; font-size: 28pt; } </style> </head> <body> <h1> More about me: </h1> <h1> Hello! I'm Jonathan i'm 13 years old and I live in Hungary. </h1> </body> </html>";
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();
  }

  function hobbies() {
    var newWindow = window.open("", "_blank", "width=750,height=750");
    
    // Write content to the new window
    var hobbies = " <html> <head> <title>More about me</title> <style> body { border: 5px solid white; background-color: rgb(57, 54, 54);font-size: 24pt; font-family: sans-serif; text-align: center;} h1 { color: white; font-size: 30pt; text-align: center; }ul, li { color: white; text-align: left;} button { text-align: center; border: 3.2px solid white; padding: none; margin: none; border-radius: 25px; background: transparent; color: white; font-size: 25pt; height: 100px; width: 250px; } button:hover { opacity: 50%; height: 110px; width: 275px; font-size: 28pt; } </style> </head> <body> <h1>My hobbies: </h1> <ul> <li>Balisong flipping</li> <li>Bike riding</li> <li>programming</li> <li>touchtyping</li> </ul> </body> </html>";
    newWindow.document.open();
    newWindow.document.write(hobbies);
    newWindow.document.close();
  }

  function proglangs() {
    var newWindow = window.open("", "_blank", "width=750,height=750");
    
    // Write content to the new window
    var hobbies = " <html> <head> <title>More about me</title> <style> body { border: 5px solid white; background-color: rgb(57, 54, 54);font-size: 24pt; font-family: sans-serif; text-align: center;} h1 { color: white; font-size: 30pt; text-align: center; }ul, li { color: white; text-align: left;} button { text-align: center; border: 3.2px solid white; padding: none; margin: none; border-radius: 25px; background: transparent; color: white; font-size: 25pt; height: 100px; width: 250px; } button:hover { opacity: 50%; height: 110px; width: 275px; font-size: 28pt; } </style> </head> <body> <h1>Programming languages i know: </h1> <ul><li>html</li><li>css</li><li>javascript</li></ul> <h1> programming languages i'm learning: </h1>  <h1> programming languages i'm  planning to learn: </h1> </body> </html>";
    newWindow.document.open();
    newWindow.document.write(hobbies);
    newWindow.document.close();
  }
  */

  /* OLD PROTOTYPE
  function openStyledWindow() {
    var newWindow = window.open("", "_blank", "width=750,height=750");
    
    // Write content to the new window
    var content = "<html><head><title>More about me</title><style>body{background-color: dimgray;font-size: 24pt;color: white;font-family:Arial,sans-serif;text-align:center;}h1{color:white;}.content{margin:20px;}</style></head><body><h1>More about me</h1><div class='content'>Hi! My name is Körmöndi Jonatán.</div></body></html>";
    newWindow.document.open();
    newWindow.document.write(content);
    newWindow.document.close();
  }
   */



  /* New prototype */


  function aboutme(width, height) {
    const left = (window.innerWidth - width) / 2;   // Calculate the left position
    const top = (window.innerHeight - height) / 2; // Calculate the top position
  
    const features = `width=750px,height=750px,left=580px,top=160px,resizable=yes`;
  
    const newWindow = window.open('', '_blank', features);
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>About me</title>
  <style>
  body {
    background-color: rgb(57, 54, 54);
    color: white;
    text-align: center;
    font-size: 14pt;
    border: 4px solid white;

  }
  .preventselect {
    user-select: none;
  }

  .header {
    font-size: 36pt;
  }

button {
  text-align: center;
  border: 3.2px solid white;
  padding: none;
  margin: 10px;
  border-radius: 25px;
  background: transparent;
  color: white;
  font-size: 25pt;
  height: 100px;
  width: 250px;
}

button:hover {
  opacity: 50%;
  height: 110px;
  width: 275px;
  font-size: 28pt;
  }

</style>
        </head>
        <body class="preventselect">
<h1 class="header"> About me: </h1>
          <h1>Hi! I'm Jonathan but people call me "Jona". I'm 13 years old my birthday is on the 2nd of december.</h1>
        </body>
      </html>
    `);
    newWindow.document.close();
  }





  function hobbies(width, height) {
    const left = (window.innerWidth - width) / 2;   // Calculate the left position
    const top = (window.innerHeight - height) / 2; // Calculate the top position
  
    const features = `width=750px,height=750px,left=580px,top=160px,resizable=yes`;
  
    const newWindow = window.open('', '_blank', features);
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Hobbies and interests</title>
  <style>
  body {
    background-color: rgb(57, 54, 54);
    color: white;
    text-align: center;
    font-size: 14pt;
    border: 4px solid white;

  }
  .preventselect {
    user-select: none;
  }

  .header {
    font-size: 36pt;
  }

button {
  text-align: center;
  border: 3.2px solid white;
  padding: none;
  margin: 10px;
  border-radius: 25px;
  background: transparent;
  color: white;
  font-size: 25pt;
  height: 100px;
  width: 250px;
}

button:hover {
  opacity: 50%;
  height: 110px;
  width: 275px;
  font-size: 28pt;
  }

  ul, li {
    font-size: 32pt;
    margin: none;
  }

</style>
        </head>
        <body class="preventselect">
<h1 class="header"> My hobbies and interests: </h1>
<ul>
<li>Balisong flipping</li>
<li>Bike riding</li>
<li>programming</li>
<li>touchtyping</li>
</ul> 
        </body>
      </html>
    `);
    newWindow.document.close();
  }





  
  function proglangs(width, height) {
    const left = (window.innerWidth - width) / 2;   // Calculate the left position
    const top = (window.innerHeight - height) / 2; // Calculate the top position
  
    const features = `width=750px,height=750px,left=580px,top=160px,resizable=yes`;
  
    const newWindow = window.open('', '_blank', features);
    newWindow.document.open();
    newWindow.document.write(`
      <html>
        <head>
          <title>Programming languages</title>
  <style>
  body {
    background-color: rgb(57, 54, 54);
    color: white;
    text-align: center;
    font-size: 14pt;
    border: 4px solid white;

  }
  .preventselect {
    user-select: none;
  }

  .header {
    font-size: 36pt;
  }

button {
  text-align: center;
  border: 3.2px solid white;
  padding: none;
  margin: 10px;
  border-radius: 25px;
  background: transparent;
  color: white;
  font-size: 25pt;
  height: 100px;
  width: 250px;
}

button:hover {
  opacity: 50%;
  height: 110px;
  width: 275px;
  font-size: 28pt;
  }

  ul, li {
    font-size: 32pt;
    margin: none;
  }

</style>
        </head>
        <body class="preventselect">
<h1 class="header"> Programming languages i know: </h1>
<ul>
<li>html</li>
<li>css</li>
</ul>

<h1 class="header"> Programming languages i'm learning: </h1>

<ul>
<li>javascript</li>
</ul>

<h1 class="header"> Programming languages I want to learn: </h1>

<ul>
<li>Python</li>
<li>C#</li>
</ul>
        </body>
      </html>
    `);
    newWindow.document.close();
  }
