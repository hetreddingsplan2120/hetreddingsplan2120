<?php
session_start();
$users = json_decode(file_get_contents("data/users.json"), true);

$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

if ($email && $password) {
  foreach ($users as $u) {
    if ($u['email'] === $email && password_verify($password, $u['password'])) {
      $_SESSION['email'] = $email;
      header("Location: dashboard.php");
      exit;
    }
  }
  echo "Foute login";
}
?>

<form method="post">
  <input type="email" name="email" required>
  <input type="password" name="password" required>
  <button>Login</button>
</form>
