import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
    return <Card>
        <h1>About this project</h1>
        <p>
            <Link to="/">
                Back To Home
            </Link>
        </p>
    </Card>
}

export default AboutPage