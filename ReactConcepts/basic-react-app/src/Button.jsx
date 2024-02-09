function handleClick(event) {
    console.log("Hello");
    console.log(event);
}

function handleClick2(){
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
function handleMouseLeave() {
    console.log("mouse is leaved");
}
function Button() {
 return (
    <div>

     <button onClick={handleClick}>Click Me</button>
      <h5 onClick={handleClick2}>Bye</h5>
      <p onMouseOver={handleMouseOver}>Hello everyone my name is Rajia Rani ....</p>
      <button onDoubleClick={handleDoubleClick}>Double times click me</button>
      <p onMouseEnter={handleMouseEnter}> Aplly the mouse entered functionallity</p>
      <p onMouseEnter={handleMouseLeave}> Aplly the mouse leavedfunctionallity</p>
    </div>
 )
}
export default Button;