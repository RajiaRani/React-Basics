function printHello() {
    console.log("Hello");
}
function printBye(){
    console.log("Bye Bye!!");
}

function Button() {
 return (
    <div>

     <button onClick={printHello}>Click Me</button>
      <h5 onClick={printBye}>Bye</h5>
    </div>
 )
}
export default Button;