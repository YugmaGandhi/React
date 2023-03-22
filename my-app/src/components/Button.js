import PropTypes from 'prop-types'

const Button = ({color,text, onToggleForm}) => {

  return <button style={{backgroundColor:color}} className='btn' onClick={onToggleForm}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func,
}
export default Button
