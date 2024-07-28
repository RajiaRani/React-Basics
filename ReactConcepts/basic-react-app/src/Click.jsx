function sayHello() {
    console.log("Hello")
};

export default function Click() {
    return (
       <div>
         <button onClick={sayHello}>Click Me</button>
         <p onClick={sayHello}>Hello, i am paragraph. </p>
       </div>
        
    )
};