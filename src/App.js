import Header from "./components/Header"
import FeedbackItem from './components/FeedbackItem'
import PropTypes from 'prop-types'

function App () {

    return (
        <>
            <Header text="Feedback UI" />
            <div className="container" >
                <FeedbackItem />
            </div>
        </>
    )
}
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'

}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string
}

export default App