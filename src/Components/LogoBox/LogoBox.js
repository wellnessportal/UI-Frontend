import Figure from "react-bootstrap/Figure";
import yoga from "../../Logos/yogalogo1.png";
import fitness from "../../Logos/fitnesslogo1.png";
import meditation from "../../Logos/meditationlogo.png";
import therapy from "../../Logos/therapylogo1.png";
import mindfulness from "../../Logos/mindfulnesslogo.png";
import "./LogoBox.css";
import { Link } from "react-router-dom";

function LogoBox() {
  return (
    <>
      <div className="box1">
        <Link className="link" to="/yoga">
          <Figure>
            <figimage>
              <img className="Yoga_logo" src={yoga} />
            </figimage>
            <Figure.Caption>YOGA</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/mindfulness">
          <Figure>
            <figimage>
              <img className="Mindfulness_logo" src={mindfulness} />
            </figimage>
            <Figure.Caption>MINDFULNESS</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/meditation">
          <Figure>
          <figimage>
              <img className ="Meditation_logo" src={meditation} />
            </figimage>
            <Figure.Caption> MEDITATION</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/therapy">
          <Figure>
            <figimage>
              <img className="Therapy_logo" src={therapy} />
            </figimage>
            <Figure.Caption>THERAPY</Figure.Caption>
          </Figure>
        </Link>
        <Link className="link" to="/fitness">
          <Figure>
            <figimage>
              <img className="Fitness_logo" src={fitness} />
            </figimage>
            <Figure.Caption> FITNESS</Figure.Caption>
          </Figure>
        </Link>
      </div>
    </>
  );
}

export default LogoBox;