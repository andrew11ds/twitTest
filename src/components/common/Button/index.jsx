import Cta from './../../../lib/ui/Cta';

const Button = ({ text, className = "button button__primary", ...rest }) => <div>
    <Cta
        {...rest}
    >{text}</Cta>
</div>;

export default Button;