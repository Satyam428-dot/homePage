export default function Button({ children, variant = 'outline', className = '', ...rest }) {
    return (
        <button type = "button" className={`btn btn--${variant} ${className}`} {...rest}>
            <span className="btn_dot" aria-hidden="true">^</span>
            {children}
        </button>
    );
}