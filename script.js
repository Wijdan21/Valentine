const message =`Hii, happy valentine nellaa.i just want to say that and give you some sweet.\noh yeah this has been planned for a long time but i was a little afraid to give my plan because of what you said at that time.\n\nSo yeah that's all I want to say and give to you, May today you feel appreciated, loved, and remembered—because you are that important.

\nWhatever happens in the future, I just hope you're always happy. And if one day you need someone to share your story with, I'll still be there.\n yeah i've heard a lot from all pov and i feel guilty and yeah if there is another chance i will try to be the best for you\n I hope that opportunity really exists. \n\nAnyway, thanku yeah for everything.`;



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

