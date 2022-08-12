const Button = ({ action, children }) => {
  return (
    <>
      <button className="text-white rounded-lg bg-black px-4" onClick={action}>
        {children}
      </button>
    </>
  );
};

export default Button;
