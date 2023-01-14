const generateHTML = function (draft) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>TPG</title>
<style>
   body {
       background-size: 100% 100%;
       background-repeat: no-repeat;
       margin: 0%;
       height: 100vh;
   }
   .header {
       background-color: rgb(245, 247, 155);
       border: solid black;
       text-align: center;
       font-size: 30px;
   }
   .container-body {
       display: flex;
       justify-content: space-evenly;
   }
   .card {
       background-color:rgb(255, 255, 255);
       margin-top: 4%;
       border: solid black;
       font-size: x-large;
   }
   .card-header{
       margin: 10%;
       background-color:rgb(255, 111, 118);
   }
   .card-body{
       margin: 5%;
       display:contents;
   }
</style>

</head>

<body>
<div class=header>
   <h1>My Team</h1>
</div>
<div class="container-body">
     ${draft} 
     </div>       
</body>

</html>`

}

//arr is the employee object and looking for the properties in that class
const generateCard = function (arr) {
    //if else statement
    let roleInfo;

    if (arr.title === "Manager") {
        roleInfo = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        roleInfo = `${arr.github}`
    } else if (arr.title === "Intern") {
        roleInfo = `School: ${arr.school}`
    }

    return `<div class="card">
<div class="card-header">
<h2>${arr.name}</h2>  
<h2><i class="far fa-user"></i> ${arr.title}</h2>
<hr>
</div>
<div class="card-body">
<ul>
    <li>ID: ${arr.id}</li>
    <li><a href="mailto:${arr.email}" target="_blank" rel="noopener noreferrer">${arr.email}</a></li>
    <li><a href="https://github.com/${roleInfo}">${roleInfo}</a></li>
</ul>
</div>
</div>`
}

exports.generateHTML = generateHTML
exports.generateCard = generateCard;