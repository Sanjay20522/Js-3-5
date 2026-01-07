import withFormHandling from "./component/withFormHandling";
import Form from "./component/Form";

const App = () => {
  const EnhancedForm = withFormHandling(Form);
  return (
    <div>
      <EnhancedForm/>
    </div>
  );
};

export default App;
