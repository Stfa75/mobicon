import { PlayCircle } from "lucide-react";
import "./stue.css";

export default function Stue() {
  return (
    <>
      <div className="wrapper">
        <p className="overskrift">Smart Indstillinger</p>
        <article className="lysbox">
          <p className="stuelys">Lys i stuen</p>
          <section className="lys">
            <p className="text">Alt lys</p>
            <label className="switch-label">
              <input type="checkbox" className="switch-input" />
              <span className="switch-slider"></span>
            </label>
          </section>

          <section className="lys">
            <p className="text">Loftslampe</p>
            <label className="switch-label">
              <input type="checkbox" className="switch-input" />
              <span className="switch-slider"></span>
            </label>
          </section>

          <section className="lys">
            <p className="text">Bordlampe 1</p>
            <label className="switch-label">
              <input type="checkbox" className="switch-input" />
              <span className="switch-slider"></span>
            </label>
          </section>

          <section className="lys">
            <p className="text">Bordlampe 2</p>
            <label className="switch-label">
              <input type="checkbox" className="switch-input" />
              <span className="switch-slider"></span>
            </label>
          </section>
        </article>
      </div>
    </>
  );
}
