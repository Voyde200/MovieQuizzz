import BigPurpuseAwser from "./PurpuseAwser.js";
import Headline from "./QuizQuestionHead.js";

function QuizSection() {
    return (
        <section>
        <div>
            <Headline />
        </div>
        <div className="QuizSection">
            <BigPurpuseAwser />
            <BigPurpuseAwser />
            <BigPurpuseAwser />
            <BigPurpuseAwser />
        </div>
        </section>
    );
  }

  export default QuizSection
