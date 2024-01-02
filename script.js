var defaultText="# Hello, Markdown!\nThis is a **preview**.";

document.addEventListener("DOMContentLoaded", function markdown(){
  document.getElementById('editor').innerHTML=defaultText;
  var preview=document.getElementById('preview');
  preview.innerHTML=marked.parse(document.getElementById('editor').innerHTML);
}); 

function textChange(){ 
var input=document.getElementById('editor').value; document.getElementById('preview').textContent=marked.parse(input);
};
