export default function CommentsForm() {
    return (
        <div>
            <h4>Give a Comment:</h4>
            <form action="">
                <input type="text" placeholder="username" /> <br /> <br />
                <textarea>Remarks</textarea>  <br /> <br />
                <input type="number" placeholder="rating"  min={1} max={5}/>  <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}