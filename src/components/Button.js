
const Button = (props) => {
    const {text, onClick, disabled, color, marginRight} = props;

    const bgColor = color ? color : 'bg-slate-300';
    
    return(
        <button
            className={`border-none rounded-md px-2 py-2 cursor-pointer font-normal transition-all ease-in duration-100 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-500 hover:enabled:bg-dark-green hover:enabled:text-white ${bgColor} ${marginRight}`}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;