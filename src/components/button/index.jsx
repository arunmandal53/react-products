/* eslint-disable react/prop-types */

function Button(props) {
    const {
        children,
        onClick
    } = props;

    return (
        <>
            <button onClick={onClick} className="p-4 border border-blue-500 w-fit">{children}</button>
        </>
    )
}

export default Button;