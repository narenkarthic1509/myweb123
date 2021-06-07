Webcam.set({

height : 300,
width : 350, 
Image_format : 'png', 
png_quality : 150

});

camera = document.getElementById("camera");
Webcam.attach('#camera');


function takeSnapshot(){
    Webcam.snap(function (data_uri){
      document.getElementById('result').innerHTML =  '<img id="captured_image" src="'+ data_uri +'"/>'
    });
}

console.log('ml5 version : ',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZaSufKAwY/model.json',modelLoaded);

function modelLoaded(){
  console.log(modelLoaded);
}


function check(){
   image =  document.getElementById("captured_image");
   classifier.classify(image,gotResult);
}

function gotResult(error,result){
    if(error){
      console.log(error);
    }
    else{
      console.log(result);
      document.getElementById("prediction-object").innerHTML = result[0].label;
      speak();
    }
}

function speak(){
   var synth = window.speechSynthesis();
   var speak_data = "the prediction is : " + result[0].label;
   var utter_this = new SpeechSynthesisUtterance(synth.speak_data);
   synth.speak(utter_this);

  if(result[0].label == "thumbs up"){
    document.getElementById("prediction-gesture").innerHTML = "&#128077;";
  }

  if(result[0].label == "thumbs down"){
    document.getElementById("prediction-gesture").innerHTML = "&#128078;";
  }

  if(result[0].label == "rock"){
    document.getElementById("prediction-gesture").innerHTML = "&#129304;";
  }

  if(result[0].label == "butterfly"){
    document.getElementById("prediction-gesture").innerHTML = "&#128080;";
  }

  if(result[0].label == "superb"){
    document.getElementById("prediction-gesture").innerHTML = "&#128076;";
  }

  if(result[0].label == "stop"){
    document.getElementById("prediction-gesture").innerHTML = "&#128400;";
  }

  if(result[0].label == "space between 2 fingers"){
    document.getElementById("prediction-gesture").innerHTML = "&#128406;";
  }

}