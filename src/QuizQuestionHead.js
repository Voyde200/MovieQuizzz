// Object Component create to displaying the headline with English movie name.
import randomQuestion from "./DbQuestion"

export default function Headline() {
    return (
      <div className="Headline_Section">
        <p className="SubT-presentation">Devinez le titre original de ce nom de film québécois !</p>
          <p className="Title-MovieName" >{randomQuestion[0]}</p>
        
      </div>
    );
  };
