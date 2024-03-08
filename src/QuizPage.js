import Button from "./CompenentMain.js";
import BigPurpuseAwser from "./PurpuseAwser.js";
import Headline from "./QuizQuestionHead.js";
import SubmitButton from "./CompenentMain.js";

// Page displaying the game, import Headline, Quiz Section and Submit button.

function QuizSection(props) {
    const {answerQuiz} = props
    return (
        <section className="allContentSection">
        <div>
            <Headline />
        </div>
        <div className="QuizSection">
            <BigPurpuseAwser props={answerQuiz}/>
            <BigPurpuseAwser props={answerQuiz}/>
            <BigPurpuseAwser props={answerQuiz}/>
            <BigPurpuseAwser props={answerQuiz}/>
        </div>
        < SubmitButton />
        </section>
    );
  }

  export default QuizSection
