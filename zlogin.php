<?php
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == 'b221210553@sakarya.edu.tr' && $password == 'b221210553') {
        header("Location: girisAnasayfa.html");
        exit();
    } else {
        $error_message = "Yanlış kullanıcı adı ve şifre, lütfen tekrar giriniz.";
    }
}
?>
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEBPROJE</title>
    <link rel="stylesheet" href="zlogin.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>HOŞ GELDİNİZ</h1>
            <h2>B221210553 NUMARALI ÖĞRENCİNİN</h2>
            <h3>SAYFASINA GEÇMEK İÇİN KULLANICI ADI VE ŞİFRENİZİ GİRİNİZ</h3>
        </header>
        <form action="https://google.com" method="post">
            <label for="username">Kullanıcı Adı:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Şifre:</label>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Giriş Yap">
        </form>
        <?php
        if (isset($error_message)) {
            echo "<h1 style='color: red;'>$error_message</h1>";
        }
        ?>
    </div>
</body>
