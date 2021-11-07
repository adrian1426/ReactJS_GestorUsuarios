import './Input.css';

const Input = props => {
  const { label, ...resto } = props;

  return (
    <div className="field">
      <label>{label}</label>
      <input
        {...resto}
      />
    </div>
  );
};

export default Input;