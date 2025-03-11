let speech = new SpeechSynthesisUtterance();
let btn = document.getElementById("btn");
let textarea = document.getElementById("textplace");


btn.addEventListener("click", () => {

    if ('speechSynthesis' in window) {
        speech.text = textarea.value;
        window.speechSynthesis.speak(speech);

        if (speech.text.trim() === "") {
            alert("Please enter some text to speak.");
            return;
        }

    } else {
        alert("Speech synthesis is not supported in your browser.");
    }
});

let voices = [] ; 
let voiceSelect = document.getElementById("voices");

window.speechSynthesis.onvoiceschanged=()=>{

    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)));
}; 

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});
