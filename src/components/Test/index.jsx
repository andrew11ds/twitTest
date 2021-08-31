import { Helmet } from "react-helmet";
import { Button } from 'react-bootstrap';
const Test = () => {
    return (
        <>
            <div className="mb-2">
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            </div>
        </>
    );
}

export default Test;