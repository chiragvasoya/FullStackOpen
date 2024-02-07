const PersonForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <input type="text"  value={props.personName} onChange={props.handleName} placeholder="Name" />
        <input type="text"  value={props.personNumber} onChange={props.handleNumber}  placeholder="Price" />
        <button type="submit">Add</button>
        </form>
    )
}

export default PersonForm