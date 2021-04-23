const Button = ({width, text, children, onClick}) => {
    return (
    <button style={{width: width}} 
    className='btn-grad' onClick={onClick}>{children}
    </button>
    )
}

export default Button
