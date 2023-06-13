import "./style.css";

function Button({ onClick, text, type }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={type === "action" ? "action-button" : "main-button"}
      >
        {text.toUpperCase()}
      </button>
    </div>
  );
}

export default Button;
