function convertTxtToAudio() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  if (file) {
      var reader = new FileReader();

      reader.onload = function(e) {
          var text = e.target.result;

          if (text.trim() !== "") {
              var speech = new SpeechSynthesisUtterance(text);
              speech.lang = 'pt-BR';
              speech.rate = 1;
              speech.pitch = 4;
              window.speechSynthesis.speak(speech);
          } else {
              alert("O arquivo está vazio!");
          }
      };

      reader.readAsText(file);
  } else {
      alert("Por favor, selecione um arquivo .txt");
  }
}