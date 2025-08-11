import { useParams } from "react-router-dom";
const TestStepPage = () => {
  const { step } = useParams<{ step: string }>();
  return (
    <div className="p-4">
      <h2>Test Step {step}</h2>
    </div>
  );
};
export default TestStepPage;
