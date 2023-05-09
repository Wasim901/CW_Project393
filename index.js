    // third window slideshow div starts here 
    let startIndex2 = 0;
    let movieImages4 = [
        "https://htmldemo.net/oestin/oestin/img/slider/1.jpg",
        "https://htmldemo.net/oestin/oestin/img/slider/2.jpg",
    ];

    const windowSize2 = 1;

    function slideDivs2(startIndex2) {
        const container2 = document.querySelector('#slideshow4_1');
        container2.innerHTML = '';

        for (let i = startIndex2; i < startIndex2 + windowSize2; i++) {
            const div = document.createElement('div');
            div.className = "fade"
            const image = document.createElement('img');
            const text = document.createElement("h1")
            text.className = "text"
            text.textContent = "Welcome to Oestin"
            image.src = movieImages4[i % movieImages4.length]; // use modulus to wrap around to the beginning of the array
            div.append(image, text);

            container2.appendChild(div);
        }
    }

    slideDivs2(startIndex2);

    function next2() {
        startIndex2++;
        slideDivs2(startIndex2 % movieImages4.length); // use modulus to wrap around to the beginning of the array
    }

    function prev2() {
        startIndex2--;
        slideDivs2((startIndex2 + movieImages4.length) % movieImages4.length); // use modulus to wrap around to the end of the array
    }

    document.getElementById('rightArrow2').addEventListener('click', next2);
    document.getElementById('leftArrow2').addEventListener('click', prev2);



    // Button

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myButton").style.display = "block";
        } else {
            document.getElementById("myButton").style.display = "none";
        }
    };

    // Smooth scroll to the top when the button is clicked
    document.getElementById("myButton").addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



    $('.signup-btn').click(function(e) {
        e.preventDefault();
      
        $('.pack').addClass('flip');
        
        setTimeout(function() {
          window.location.href = "Sign.html";
        }, 1000);
      });