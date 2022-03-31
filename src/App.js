import FeedbackData from "./data/FeedbackData"
import { useState } from 'react'
import PropTypes from 'prop-types'
import Header from "./components/Header"
import FeedbackForm from "./components/FeedbackForm"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackList from './components/FeedbackList'

function App () {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item ) => item.id !== id))
        }
    }

    return (
        <>
            <Header text="Feedback UI" />
            <div className="container" >
                <FeedbackForm />
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={ deleteFeedback }/>
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