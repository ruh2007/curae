import React from "react"
import "./App.css"
function Autoscroll() {
const images = [
{
    src: "https://i.pinimg.com/736x/4b/e3/a2/4be3a212859cef4ca1feb310776c3d2c.jpg",
},
{
    src: "https://i.pinimg.com/1200x/00/85/db/0085db91454c837d69a886e13a3b64f8.jpg",
},
{
    src: "https://i.pinimg.com/736x/ac/88/c9/ac88c998e2c957bae37ac45537598289.jpg",
},
{
    src: "https://i.pinimg.com/736x/b8/31/0d/b8310dfaac099b33d6a41d0731a1dd6f.jpg",
},
{
    src: "https://i.pinimg.com/1200x/1e/37/47/1e37472f6d0ab5750835ec0733b60447.jpg",
},
{
    src: "https://i.pinimg.com/736x/a4/3d/3b/a43d3baa1e0058eafdecbc07903dd661.jpg",
},
]
function AutoScrollGallery() {
const doubled = [...images, ...images] // Duplicate the images for seamless scrolling
return (
<div className="scroll-gallery">
<div className="scroll-track">
{doubled.map((img, index) => (
<div className="scroll-card" key={index}>
<img src={img.src} alt={img.alt} />
</div>
        ))}
</div>
</div>
  )
}
return <AutoScrollGallery />
}
export default Autoscroll;   