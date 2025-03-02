import { QuartzComponentConstructor } from "./types"
import style from "./styles/leafBillowing.scss"

function LeafBillowing() {
  // Only render on desktop
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <div className="leaf-container">
      <div id="leaves">
        <svg style={{ width: 0, height: 0, position: "absolute" }}>
          <defs>
            <filter id="wind" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" numOctaves="2" seed="1">
                <animate
                  attributeName="baseFrequency"
                  dur="16s"
                  keyTimes="0;0.33;0.66;1"
                  values="0.005 0.003;0.01 0.009;0.008 0.004;0.005 0.003"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic">
                <animate
                  attributeName="scale"
                  dur="20s"
                  keyTimes="0;0.25;0.5;0.75;1"
                  values="45;55;75;55;45"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  )
}

LeafBillowing.css = style
export default (() => LeafBillowing) satisfies QuartzComponentConstructor
