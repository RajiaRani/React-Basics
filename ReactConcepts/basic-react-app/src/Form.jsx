function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>
    );
}
export default Form;