function handleClick() {
    console.log("Hello");
}
function handleClick(){
    console.log("Bye Bye!!");
}
function handleMouseOver() {
    console.log("Say something");
}
function handleDoubleClick() {
    console.log("this is double Clicked event");
}
function handleMouseEnter() {
    console.log("mouse is entered");
}
function Button() {
 return (
    <div>

     <button onClick={handleClick}>Click Me</button>
      <h5 onClick={handleClick}>Bye</h5>
      <p onMouseOver={handleMouseOver}>Hello everyone my name is Rajia Rani ....</p>
      <button onDoubleClick={handleDoubleClick}>Double times click me</button>
      <p onMouseEnter={handleMouseEnter}></p>
    </div>
 )
}
export default Button;