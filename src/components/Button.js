
import PropTypes from 'prop-types';

const Button = ({text , onClick }) =>{
  return(
    <>
    <button className="btn" onClick={onClick}>{text}</button>
    </>
    
  )
}


export default Button;