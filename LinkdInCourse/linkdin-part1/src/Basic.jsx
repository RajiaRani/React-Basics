function Basic(props) {
    let image_url = "https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2h8ZW58MHx8MHx8fDA%3D";
    return(
      <section>
       <img src={image_url} alt="image" />
        <ul>
          {
            props.dishObject.map((dish) => (
              <b key={dish.id}><li>{dish.title}</li></b>
            ))
          }
        </ul>
      </section>
    )
  }
  export default Basic;