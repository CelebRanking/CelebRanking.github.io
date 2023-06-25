<!DOCTYPE html>
<html>
  <head>
    <title>Pick your movie celeb family</title>
    <link rel="icon" type="image/png" href="../icons/favicon.png" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="celebfamily.css">

    <script>
      // Überprüfen, ob der "pageviews"-Schlüssel im localStorage existiert
      if(localStorage.getItem("pageviews")) {
          // Wenn vorhanden, erhöhe den Wert um 1
          localStorage.setItem("pageviews", parseInt(localStorage.getItem("pageviews")) + 1);
      } else {
          // Wenn nicht vorhanden, setze den Wert auf 1
          localStorage.setItem("pageviews", 1);
      }
      
      // Abrufen der Anzahl der Seitenaufrufe aus dem localStorage
      var pageviews = localStorage.getItem("pageviews");
      
      // Anzeigen der Anzahl der Seitenaufrufe auf der Webseite
      document.write("Anzahl der Seitenaufrufe: " + pageviews);
  </script>

  </head>
  <body>

    <?php
    // Dateiname für die Speicherung der Seitenaufrufe
    $filename = "pageviews.txt";

    // Lesen des aktuellen Seitenaufruf-Zählers aus der Datei
    $pageviews = (int)file_get_contents($filename);

    // Erhöhen des Zählers um 1
    $pageviews++;

    // Speichern des aktualisierten Zählers in der Datei
    file_put_contents($filename, $pageviews);
    ?>

    <div class="container">
      <h1>Pick your movie celeb family</h1>
        <div class="budget">  
          <p>Total Budget: <span id="budget">20</span></p>
        </div>
        <div class="info-text">You are director of a movie and you have 20 points to build your own celeb family. Simple click on the celebs to buy them. Please select only one celeb for each row. When you're done feel free to click on the "copy to clipboard" button and past your results as a reddit comment. Have fun and thank you for playing!</div>
      <div class="row">
        <div class="col-12">
          <h5>Your mother</h5>
        </div>
          <div class="col-md-4">
            <img src="../assets/img/Salma Hayek.jpg" class="img-fluid rounded" alt="Salma Hayek" id="Salma Hayek" data-price="3">
            <p class="text-center">Salma Hayek - Cost: 3</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Gal Gadot.jpg" class="img-fluid rounded" alt="Gal Gadot" id="Gal Gadot" data-price="2">
            <p class="text-center">Gal Gadot - Cost: 2</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Jessica Chastain.jpg" class="img-fluid rounded" alt="Jessica Chastain" id="Jessica Chastain" data-price="1">
            <p class="text-center">Jessica Chastain - Cost: 1</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h5>Your older sister</h5>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Sydney Sweeney.jpg" class="img-fluid rounded" alt="Sydney Sweeney" id="Sydney Sweeney" data-price="3">
            <p class="text-center">Sydney Sweeney - Cost: 3</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Florence Pugh.jpg" class="img-fluid rounded" alt="Florence Pugh" id="Florence Pugh" data-price="2">
            <p class="text-center">Florence Pugh - Cost: 2</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Madison Pettis.jpg" class="img-fluid rounded" alt="Madison Pettis" id="Madison Pettis" data-price="1">
            <p class="text-center">Madison Pettis - Cost: 1</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h5>Your younger sister</h5>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Jenna Ortega.jpg" class="img-fluid rounded" alt="Jenna Ortega" id="Jenna Ortega" data-price="3">
            <p class="text-center">Jenna Ortega - Cost: 3</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Olivia Rodrigo.jpg" class="img-fluid rounded" alt="Olivia Rodrigo" id="Olivia Rodrigo" data-price="2">
            <p class="text-center">Olivia Rodrigo - Cost: 2</p>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Millie Bobby Brown.jpg" class="img-fluid rounded" alt="Millie Bobby Brownn" id="Millie Bobby Brown" data-price="1">
            <p class="text-center">Millie Bobby Brown - Cost: 1</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h5>Your 1st aunt</h5>
          </div>
          <div class="col-md-4">
            <img src="../assets/img/Margot Robbie.jpg" class="img-fluid rounded" alt="Margot Robbie" id="Margot Robbie" data-price="3">
            <p class="text-center">Margot Robbie - Cost: 3</p>
          </div>
            <div class="col-md-4">
              <img src="../assets/img/Megan Fox.jpg" class="img-fluid rounded" alt="Megan Fox" id="Megan Fox" data-price="2">
              <p class="text-center">Megan Fox - Cost: 2</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Mila Kunis.jpg" class="img-fluid rounded" alt="Mila Kunis" id="Mila Kunis" data-price="1">
              <p class="text-center">Mila Kunis - Cost: 1</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Your 2nd aunt</h5>
            </div>
              <div class="col-md-4">
                <img src="../assets/img/Emilia Clarke.jpg" class="img-fluid rounded" alt="Emilia Clarke" id="Emilia Clarke" data-price="3">
                <p class="text-center">Emilia Clarke - Cost: 3</p>
              </div>
              <div class="col-md-4">
                <img src="../assets/img/Alexandra Daddario.jpg" class="img-fluid rounded" alt="Alexandra Daddario" id="Alexandra Daddario" data-price="2">
                <p class="text-center">Alexandra Daddario - Cost: 2</p>
              </div>
              <div class="col-md-4">
                <img src="../assets/img/Kaley Cuoco.jpg" class="img-fluid rounded" alt="Kaley Cuoco" id="Kaley Cuoco" data-price="1">
                <p class="text-center">Kaley Cuoco - Cost: 1</p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h5>Your 3rd aunt</h5>
              </div>
                <div class="col-md-4">
                  <img src="../assets/img/Elizabeth Olsen.jpg" class="img-fluid rounded" alt="Elizabeth Olsen" id="Elizabeth Olsen" data-price="3">
                  <p class="text-center">Elizabeth Olsen - Cost: 3</p>
                </div>
                <div class="col-md-4">
                  <img src="../assets/img/Jennifer Lawrence.jpg" class="img-fluid rounded" alt="Jennifer Lawrence" id="Jennifer Lawrence" data-price="2">
                  <p class="text-center">Jennifer Lawrence - Cost: 2</p>
                </div>
                <div class="col-md-4">
                  <img src="../assets/img/Zoe Kravitz.jpg" class="img-fluid rounded" alt="Zoe Kravitz" id="Zoe Kravitz" data-price="1">
                  <p class="text-center">Zoe Kravitz - Cost: 1</p>
                </div>
              </div>
          <div class="row">
            <div class="col-12">
              <h5>Your girlfriend</h5>
            </div>
              <div class="col-md-4">
                <img src="../assets/img/Hailee Steinfeld.jpg" class="img-fluid rounded" alt="Hailee Steinfeld" id="Hailee Steinfeld" data-price="3">
                <p class="text-center">Hailee Steinfeld - Cost: 3</p>
              </div>
              <div class="col-md-4">
                <img src="../assets/img/Madison Beer.jpg" class="img-fluid rounded" alt="Madison Beer" id="Madison Beer" data-price="2">
                <p class="text-center">Madison Beer - Cost: 2</p>
              </div>
              <div class="col-md-4">
                <img src="../assets/img/Lili Reinhart.jpg" class="img-fluid rounded" alt="Lili Reinhart" id="Lili Reinhart" data-price="1">
                <p class="text-center">Lili Reinhart - Cost: 1</p>
              </div>
            </div>
          <div class="row">
            <div class="col-12">
              <h5>Your girlfriends mother</h5>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Ana De Armas.jpg" class="img-fluid rounded" alt="Ana De Armas" id="Ana De Armas" data-price="3">
              <p class="text-center">Ana De Armas - Cost: 3</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Natalie Portman.jpg" class="img-fluid rounded" alt="Natalie Portman" id="Natalie Portman" data-price="2">
              <p class="text-center">Natalie Portman - Cost: 2</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Felicity Jones.jpg" class="img-fluid rounded" alt="Felicity Jones" id="Felicity Jones" data-price="1">
              <p class="text-center">Felicity Jones - Cost: 1</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h5>Your girlfriends sister</h5>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Victoria Justice.jpg" class="img-fluid rounded" alt="Victoria Justice" id="Victoria Justice" data-price="3">
              <p class="text-center">Victoria Justice - Cost: 3</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Nathalie Emmanuel.jpg" class="img-fluid rounded" alt="Natalie Emmanuel" id="Natalie Emmanuel" data-price="2">
              <p class="text-center">Natalie Emmanuel - Cost: 2</p>
            </div>
            <div class="col-md-4">
              <img src="../assets/img/Elle Fanning.jpg" class="img-fluid rounded" alt="Elle Fanning" id="Elle Fanning" data-price="1" >
              <p class="text-center">Elle Fanning - Cost: 1</p>
            </div>
          </div>

      <h2>Selected Celebs:</h2>
      <textarea id="selectedcelebs" rows="3" cols="50" readonly></textarea>
      <button id="copyButton">Copy results to Clipboard</button>
      <h6>made by u/Txmmy_CR</h6>
    </div>

    <script src="celebfamily.js"></script>
  </body>
</html>
