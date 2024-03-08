import Button from "./CompenentMain.js";
import BigPurpuseAwser from "./PurpuseAwser.js";
import Headline from "./QuizQuestionHead.js";
import SubmitButton from "./CompenentMain.js";
import answerQuiz from "./App.jsx";

// Page displaying the game, import Headline, Quiz Section and Submit button.

const FrontAnswer = (props) => {
  const rows = props.answerQuiz.map((answer, index) => {
    return <BigPurpuseAwser key={index} individualAnswer={answer} />;
  });
  return <div className="QuizSection">{rows}</div>;
};

function QuizSection(props) {
  const { answerQuiz } = props;
  return (
    <section className="allContentSection">
      <div>
        <Headline />
      </div>

      <FrontAnswer answerQuiz={answerQuiz} />
      <SubmitButton />
    </section>
  );
}

export default QuizSection;
