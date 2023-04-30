
const Button = (props) => {
    const {text, onClick, disabled, color, marginRight, hover: recivedHover, width} = props;

    const bgColor = color ? color : 'bg-slate-300';
    const hover = recivedHover ? recivedHover : 'hover:enabled:bg-dark-green';
    
    return(
        <button
            className={`${width} border-none rounded-md px-2 py-2 cursor-pointer font-normal transition-all ease-in duration-100 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-500 ${hover} ${bgColor} ${marginRight}`}
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;