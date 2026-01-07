function withAlert(WrappedComponent) {
  return function AlertComponent(props) {
    const handleClick = () => {
      alert("Button clicked!");
    };
return <WrappedComponent {...props} onClick={handleClick} />;
  };
}
export default withAlert;