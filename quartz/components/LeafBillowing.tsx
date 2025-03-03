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
              {/* Reduced turbulence frequency and octaves */}
              <feTurbulence type="fractalNoise" baseFrequency="0.005 0.002" numOctaves="1" seed="3">
                {/* Slower, more subtle frequency changes */}
                <animate
                  attributeName="baseFrequency"
                  dur="18s"
                  keyTimes="0;0.25;0.5;0.75;1"
                  values="0.005 0.002;0.004 0.0015;0.005 0.002;0.006 0.0025;0.005 0.002"
                  repeatCount="indefinite"
                />
              </feTurbulence>

              {/* Gentler displacement that works better with CSS animations */}
              <feDisplacementMap
                in="SourceGraphic"
                scale="20"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                {/* Subtle scale variation that won't cause rippling */}
                <animate
                  attributeName="scale"
                  dur="15s"
                  keyTimes="0;0.33;0.66;1"
                  values="20;25;15;20"
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
