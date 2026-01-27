<?php
$users = json_decode(file_get_contents("data/users.json"), true);

$email = $_POST['email'] ?? null;
$password = $_POST['password'] ?? null;

if ($email && $password) {
  foreach ($users as $u) {
    if ($u['email'] === $email) {
      die("Email bestaat al");
    }
  }

  $users[] = [
    "email" => $email,
    "password" => password_hash($password, PASSWORD_DEFAULT)
  ];

  file_put_contents("data/users.json", json_encode($users, JSON_PRETTY_PRINT));
  echo "Account aangemaakt";
}
?>

<form method="post">
  <input type="email" name="email" required>
  <input type="password" name="password" required>
  <button>Register</button>
</form>
