import "./button.scss";
const Button = ({ title, bg }) => {
  return <button style={{ background: `var(${bg})` }}>{title}</button>;
};

export default Button;
