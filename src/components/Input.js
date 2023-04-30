import { forwardRef } from 'react';

const Input = forwardRef(
  (props, ref) => {
    const {type, text, onChange, placeholder} = props;

  return (
    <input
      type={type}
      ref={ref}
      value={text}
      className="w-full focus:outline-none border-none text-xl p-1"
      placeholder={placeholder}
      onChange={onChange}
      style={{
        width: "100%",
        border: "none",
        fontSize: "1rem",
        padding: "5px",
      }}
    />
  );
}
);

export default Input;
