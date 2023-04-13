
const Button = (props) => {
    const {text, clickHandler, disabled} = props;
    
    return(
        <button
            className="border-none rounded-md px-2 py-2 cursor-pointer font-normal transition-all ease-in duration-100 bg-slate-300 disabled:cursor-default disabled:bg-slate-100 disabled:text-slate-500 hover:enabled:bg-dark-green hover:enabled:text-white"
            onClick={clickHandler}
            disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;