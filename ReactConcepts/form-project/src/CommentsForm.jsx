export default function CommentsForm() {
    return (
        <div>
            <h4>Give a Comment:</h4>
            <form action="">
                <input type="text" placeholder="username" /> <br /> <br />
                <textarea>Remarks</textarea>  <br /> <br />
                <input type="number" placeholder="rating" />  <br /> <br />
            </form>
        </div>
    )
}