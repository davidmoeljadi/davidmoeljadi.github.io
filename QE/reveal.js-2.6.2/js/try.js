function jawab() {
        var output = document.getElementById("output");
        console.log(output);
        output.style.fontSize = "25px";
        output.innerHTML = "INDRA found" + " 2 ".bold() + "parse tree(s) for" + " anjingnya sedang menggonggong".italics();
        document.getElementById("outputBox").src = "../images/demo.jpg";
      }
function hapus() {
        var inputBox = document.getElementById("inputBox");
        var output = document.getElementById("output");
        console.log(output);
        output.style.fontSize = "25px";
        output.innerHTML = "";
        document.getElementById("outputBox").src = "../images/blank.jpg";
        inputBox.value = "";
      }
function terjemah() {
        var output = document.getElementById("output");
        var outputBox = document.getElementById("outputBox");
        console.log(output);
        output.style.fontSize = "40px";
        output.innerHTML = "<pre>" + "Possible translations for " + 
        "<i>" + "anjingnya sedang menggonggong" + "</i>" + ":" + 
        "\n" + "\n" + 
        "* Strict translation(s)" + "\n" + 
        "1. The dogs are barking" + "\n" + 
        "2. Her dogs are barking" + "\n" + 
        "3. His dogs are barking" + "\n" + "\n" +  
        "* All translation(s)" + "\n" + 
        "1. The dogs are barking     7. The dog is barking" + "\n" + 
        "2. The dogs were barking    8. The dog was barking" + "\n" +
        "3. Her dogs are barking     9. Her dog is barking" + "\n" + 
        "4. Her dogs were barking   10. Her dog was barking" + "\n" + 
        "5. His dogs are barking    11. His dog is barking" + "\n" + 
        "6. His dogs were barking   12. His dog was barking" + "\n" + "</pre>";
        document.getElementById("outputBox").src = "../images/blank.jpg";
      }