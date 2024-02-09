export default function MsgBox({username, textColor}) {
    let styles ={ color: textColor};
    return (
        <h1 style={styles}>Hello,{username}</h1>
    )
}