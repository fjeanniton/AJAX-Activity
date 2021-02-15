function dogApi () {
    
  let dog = new XMLHttpRequest();
  dog.onreadystatechange = function () {
      if(this.readyState === 4 && this.status === 200) {
          let doggy = JSON.parse(this.response);
          console.log(doggy.message);
          document.getElementById('dogPic1').src= doggy.message[0];
          document.getElementById('dogPic2').src= doggy.message[1];
          document.getElementById('dogPic3').src= doggy.message[2];
      }
        
  };
  dog.open('GET', 'https://dog.ceo/api/breeds/image/random/3', true);
  dog.send();
  }




  <<!DOCTYPE html>
<html lang=“en”>
<head>
    <meta charset=“UTF-8">
    <link href=‘http://fonts.googleapis.com/css?family=Varela+Round’ rel=‘stylesheet’ type=‘text/css’>
  <link rel=“stylesheet” href=“css/main.css”>
    <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
    <title>Dog.API</title>
</head>
<body>
<img id=“dogPic1” height=“250px” width=“250” alt=“”>
<img id=“dogPic2” height=“250px” width=“250” alt=“”>
<img id=“dogPic3” height=“250px” width=“250” alt=“”>
   <button onclick=“dogApi()“>Fetch</button>
   
   <script src=“main.js”></script>
</body>
</html>





  
  
  