async function slowType(what, onwhichhtmlelement, startWait) {
  const chars = what.split(''); //This works in JS unlike Python.
  await new Promise(resolve => setTimeout(resolve, startWait)); //Sleep for startWait, I need the Async keyword for this
  for (var i = 0; i <= chars.length - 1; i++) { //standard js list-iteration boilerplate code
    onwhichhtmlelement.innerHTML += chars[i] + '|'; //adding the char for this iteration to the '|', mimicking the cursor
    const copy = onwhichhtmlelement.innerHTML; //Copy with which we will replace the cursor with nothng 
    await new Promise(resolve => setTimeout(resolve, 75)); //wait
    onwhichhtmlelement.innerHTML = copy.replace('|', ""); //replace the onwhichhtmlelement with the edited copy
  }
}
slowType('Hey, my name is Amogh (TheCool?)! ', document.getElementById('myname'), 0);
document.getElementById('myname').innerHTML += '<img src = "mrshakey.jpg" id = "em"> </img>';
slowType('I am a [kid] web and Android developer who is obsessed with making games & playing a game called Halo. My hobbies include gaming, coding, drawing, and breaking things that I build with Legos. I am moderately skilled with HTML, vanilla (no framework/module) JS, Python, CSS, Kotlin, Markdown (not sure that counts...), and am learning backend dev with Golang.', document.getElementById('whatido'),'Hey, my name is Amogh (TheCool?)! '.length * 75); /*This part starts typing this after typing the first intro... I used diferrent HTMLElements*/;
document.getElementById('whatido').innerHTML += '<br><br>'; //Inserting line breaks