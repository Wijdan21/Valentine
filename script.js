const message =`Hii, happy valentine nellaa.i just want to say that and give you some sweet.\noh yeah this has been planned for a long time but i was a little afraid to give my plan because of what you said at that time.\n\nSo yeah that's all I want to say and give to you, and I apologize for whatever I've done up until now.\n\nAnyway, thanku yeah for everything.`;



function showLetter() {

  document.getElementById("introText").style.opacity = 0;

  document.querySelector(".btn").style.display = "none";



  setTimeout(() => {

    const letterBox = document.getElementById("letterBox");

    const typedText = document.getElementById("typedText");

    letterBox.style.display = "block";

    let i = 0;



    function typeWriter() {

      if (i < message.length) {

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 30);

      }

    }



    typeWriter();

  }, 600);

}

             
