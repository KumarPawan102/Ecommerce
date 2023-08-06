        
        // JS for Menubar
        
        var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle(){
            if(MenuItems.style.maxHeight == "0px"){
                MenuItems.style.maxHeight = "200px";
            }
            else{
                MenuItems.style.maxHeight = "0px";
            }
        }

        // JS for Dark-theme

        var moon = document.getElementById("moon");
        moon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                moon.src = "images/sun.png";
            }
            else{
                icon.src = "images/moon.png";
            }
        }

        // JS for sign in & register

        var signInForm = document.getElementById("signInForm");
        var regForm = document.getElementById("regForm");
        var indicator = document.getElementById("indicator");

        function register(){
            regForm.style.transform = "translateX(0px)";
            signInForm.style.transform = "translateX(0px)";
            indicator.style.transform = "translateX(0px)";
        }

        function signIn(){
            regForm.style.transform = "translateX(300px)";
            signInForm.style.transform = "translateX(300px)";
            indicator.style.transform = "translateX(0px)";
        }


        // JS for Product detail
        
        var productImg = document.getElementById("productImg");
        var SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = function(){
            productImg.src = SmallImg[0].src;
          }
        SmallImg[1].onclick = function(){
            productImg.src = SmallImg[1].src;
        }
        SmallImg[2].onclick = function(){
            productImg.src = SmallImg[2].src;
        }
        SmallImg[3].onclick = function(){
            productImg.src = SmallImg[3].src;
        }