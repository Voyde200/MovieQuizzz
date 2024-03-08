// Object Component to display the purpuse to awnser to the quiz.

import randomMovie from "./App";

export default function Profile(props) {
  const { individualAnswer } = props;
  return (
    <div className="BigPurpuseAwser">
      <h3> {individualAnswer} </h3>
    </div>
  );
}
