// Button componenet, essentially little bit of styling and function for the button component in the Quiz

const Button = ({width, text, children, onClick}) => {
    return (
    <button style={{width: width}} 
    className='btn-grad' onClick={onClick}>{children}
    </button>
    )
}

export default Button
