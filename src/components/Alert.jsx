// 12. Create a button that displays an alert message when clicked.

export default function Alert() {
  return (
    <button onClick={showAlert}>Click me</button>
  )
}

function showAlert() {
  alert("Button clicked !");
}
