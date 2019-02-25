// Stop CodePen's injected code from breaking the for-loop
// window.CP = window.CP || {};
// window.CP.shouldStopExecution = function() { return false; };
// window.CP.exitedLoop = function() {};

// var vw = window.innerWidth;
// var freq = Math.PI * 2 / 100;

// var split = "Here's an example of Sinebow text.".split("");
// var words = split.reduce(wrapText, document.querySelector(".words"));
// var chars = words.children;
// var total = words.children.length;

// var tl = new TimelineMax({ repeat: -1 })
//   .set(words, { xPercent: -100, y: 25 })
//   .to(words, vw / 200, {
//     x: vw + words.offsetWidth,
//     ease: SlowMo.ease.config(0.1, 0.7, false),
//     modifiers: {
//       x: function(x) {                
//         for (var i = 0; i < total; i++) {
//           var index = i + 25 + x * 0.4;
//           chars[i].style.color = sinebow(freq, freq, freq, 0, 2, 4, index);  
//         }
//         return x;
//       }
//     }
//   });

// function wrapText(parent, letter, i) {      
//   var span = document.createElement("span");  
//   span.textContent = letter;
//   span.style.color = sinebow(freq, freq, freq, 0, 2, 4, i + 25);
//   parent.appendChild(span);
//   return parent;
// }

// function sinebow(freq1, freq2, freq3, phase1, phase2, phase3, i) {
  
//   var width  = 127;
//   var center = 128;  

//   var r = Math.sin(freq1 * i + phase1) * width + center;
//   var g = Math.sin(freq2 * i + phase2) * width + center;
//   var b = Math.sin(freq3 * i + phase3) * width + center;
    
//   return `rgb(${r>>0},${g>>0},${b>>0})`;
// }

function discoverMore() {
  document.querySelector(".hero-section").style.filter = 'url(#blur)';
  document.querySelector(".overlay").style.visibility = 'visible';
  document.querySelector(".overlay").style.opacity = '1';
}

function closeOverlay() {
  document.querySelector(".overlay").style.opacity = '0';
  document.querySelector(".overlay").style.visibility = 'hidden';
  setTimeout(function() {
    document.querySelector(".hero-section").style.filter = 'none';
  }, 2000)
}
