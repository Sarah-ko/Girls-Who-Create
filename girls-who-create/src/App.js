import "./App.css";
import BiologyIcon from "./icons/biology.png";
import CalculatorIcon from "./icons/calculator.png";
import CompilerIcon from "./icons/compiler.png";
import DnaIcon from "./icons/dna.png";
import DomeIcon from "./icons/dome.png";
import ComputerIcon from "./icons/monitor.png";
import ShuttleIcon from "./icons/shuttle.png";
import TestIcon from "./icons/test.png";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function App() {
  //let workIconStyles = { background: "#06D6A0", display: 'flex', justifyContent: 'center', alignItems: 'center' };
  //let schoolIconStyles = { background: "#f9c74f" , display: 'flex', justifyContent: 'center', alignItems: 'center' };

  const iconMapping = {
    biology: {
      icon: BiologyIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    calculator: {
      icon: CalculatorIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    compiler: {
      icon: CompilerIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    dna: {
      icon: DnaIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    dome: {
      icon: DomeIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    computer: {
      icon:  ComputerIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    shuttle: {
      icon: ShuttleIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    test: {
      icon: TestIcon,
      style: {
        background: "#06D6A0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  }

  return (
    <div>
      <h1 className="title">Girls Who Create</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const { icon, style } = iconMapping[element.icon] || {};
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={style}
              icon={<img src={icon} alt={`${element.icon} Icon`} style={{ width: '40px', height: '40px' }} />}
            >
              <h3 className="vertical-timeline-element-name">
                {element.name}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    element.icon
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;