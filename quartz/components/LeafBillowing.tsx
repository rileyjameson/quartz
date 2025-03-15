import { QuartzComponentConstructor } from "./types"
import style from "./styles/leafBillowing.scss"

function LeafBillowing() {
  // Only render on desktop
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null
  }

  return (
    <div className="leaf-container">
      <div id="leaves">{/* Removed SVG filter */}</div>
    </div>
  )
}

LeafBillowing.css = style
export default (() => LeafBillowing) satisfies QuartzComponentConstructor
