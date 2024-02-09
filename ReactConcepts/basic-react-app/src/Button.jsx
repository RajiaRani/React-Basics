function printHello() {
    console.log("Hello");
}
function printBye(){
    console.log("Bye Bye!!");
}
function saySometing() {
    console.log("Say something");
}
function Button() {
 return (
    <div>

     <button onClick={printHello}>Click Me</button>
      <h5 onClick={printBye}>Bye</h5>
      <p onClick={saySometing}>Hello everyone my name is Rajia Rani ....</p>
    </div>
 )
}
export default Button;