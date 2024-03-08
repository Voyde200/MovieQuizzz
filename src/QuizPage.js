import Button from "./CompenentMain.js";
import BigPurpuseAwser from "./PurpuseAwser.js";
import Headline from "./QuizQuestionHead.js";
import SubmitButton from "./CompenentMain.js";

// Page displaying the game, import Headline, Quiz Section and Submit button.

function QuizSection() {
    return (
        <section className="allContentSection">
        <div>
            <Headline />
        </div>
        <div className="QuizSection">
            <BigPurpuseAwser />
            <BigPurpuseAwser />
            <BigPurpuseAwser />
            <BigPurpuseAwser />
        </div>
        < SubmitButton />
        </section>
    );
  }

  export default QuizSection
