    // props.children
    // props.bidule
    // props.title
    // props.content
// eslint-disable-next-line react/prop-types
function Chapter({ title, content }) {
    return(<>
        <h2>{ title }</h2>
        <p>{ content }</p>
        <hr />
    </>);
}

export default Chapter;