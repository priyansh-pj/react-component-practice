import './Wrapper.css';

const Wrapper = (elements) => {
    return (
        <ul id='concepts'>{elements.children}</ul>
    )
}

export default Wrapper