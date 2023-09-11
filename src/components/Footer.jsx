import Button from "./Button";

export default function Footer() {
  function handleLogin() {
    prompt("Inserisci l'email");
  }
  return (
    <footer>
      <div className="container-small">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Button onClick={handleLogin}>Login</Button>
    </footer>
  );
}
