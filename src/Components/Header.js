import Button from './Button'
const Header = ({ title }) => {
    return (
        <header>
            <h1 >{title}</h1>
            <Button color= 'hotpink' text='Header'  />
        </header>
    )
}
// const headingStyle = {
//     color:'blueviolet', backgroundColor: 'black' 
// }
export default Header
