function handleFormSubmit(){
    console.log("form was submitted");
}

function Form() {
    retrun (
        <form>
            <input placeholder="write something"/>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}
export default Form;