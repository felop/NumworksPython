<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Don't Work - Confirm</title>
    <link rel="stylesheet" href="assets/css/confirm.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="assets/scripts/cnf.js"></script>
  </head>
  <body>
    <div id="menu">
      <h2 id="menu_name">Don't Work</h2>
      <img id="numworksLogo" src="assets/pics/NumworksUsb.png" alt="">
    </div>
    <div id="container">

      <div id="txtConfirmation">
        <form id="txtForm" action="confirm.html" method="POST">
          <textarea id="txtConfirmationArea" name="text" cols="42" rows="10"><?php echo htmlspecialchars($_POST["text"]); ?></textarea>
        </form>
      </div>

      <div id="paypalBox">

      </div>

    </div>
  </body>
</html>
