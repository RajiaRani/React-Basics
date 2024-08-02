export default function Button() {
    let handleClick = () => {
        let randomNo = Math.floor(Math.random() *10) +1;
        let userInput = prompt("Enter any number in the range 1 to 10");
        alert(`Computer generated number is ${randomNo} and Your number is ${userInput}`);
    }
    return(
        <div>
            <h2>Match your number with computer number</h2>
            <button onClick={handleClick}>Generate Number</button>
        </div>
    )
}