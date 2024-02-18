import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState ({
        username:"",
        remarks:"",
        rating:""
    });

    return (
        <div>
            <h4>Give a Comment:</h4>
            <form action="">
                <input type="text" placeholder="username"  value={formData.username}/> <br /> <br />
                <textarea placeholder="remarks add few" value={formData.remarks}>Remarks</textarea>  <br /> <br />
                <input type="number" placeholder="rating"  min={1} max={5} value={formData.rating}/>  <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}