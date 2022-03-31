import Card from './shared/Card'
import  { useState } from 'react'

function FeedbackForm () {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return <Card>
            <form>
                <h2>How would you reate your service with us</h2>
                
                <div className='input-group'>
                    <input onChange={ handleTextChange } value={ text } type="text" />
                    <button type="submit">Submit</button>
                    
                </div>
            </form>
    </Card>
}

export default FeedbackForm