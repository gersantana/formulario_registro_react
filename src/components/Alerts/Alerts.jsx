import PropTypes from "prop-types"

const Alerts = ({msg, color}) => {
  return (
    <div>
        <p className={`w-100 text-center mt-3 alert alert-${color}`}>{msg}</p>
    </div>
  )
}

Alerts.propTypes = {
    msg:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
}

export default Alerts
