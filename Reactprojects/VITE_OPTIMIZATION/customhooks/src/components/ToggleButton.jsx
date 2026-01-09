import useToggle from "./useToggle";

const ToggleButton = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <button
      onClick={toggle}
      style={{
        backgroundColor: isOn ? "green" : "red",
        color: "white",
        padding: "10px",
        marginBottom: "20px"
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
