import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState ({
        username:"",
        remarks:"",
        rating:""
    });

    let handleInputChange = (event) => {
      setFormData((currData) => {
        return {...currData, [event.target.name]:event.target.value};
      });
    };

    let handleSubmit = (event) =>{
        console.log(formData);
        event.preventDefault({
            username:"",
            remarks:"",
            rating:""
        });
    }

    return (
        <div>
            <h4>Give a Comment:</h4>
            <form action="">
                <label htmlFor="username"></label>
                <input 
                type="text" 
                placeholder="username"  
                value={formData.username}
                id="username"
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                /> <br /> <br />

                <label htmlFor="remarks"></label>
                <textarea 
                placeholder="remarks add few" 
                value={formData.remarks}
                id="remarks"
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                ></textarea>  <br /> <br />

                <label htmlFor="rating"></label>
                <input type="number" 
                placeholder="rating" 
                 min={1} max={5} 
                 value={formData.rating}
                 id="rating"
                 onChange={handleInputChange}
                 onSubmit={handleSubmit}
                 />  <br /> <br />
                <button>Add Comment</button>
            </form>
        </div>
    )
}