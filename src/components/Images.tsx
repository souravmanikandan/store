import img1 from '../assets/images/WhatsApp Image 2025-01-18 at 5.24.58 PM.jpeg'
import img2 from '../assets/images/WhatsApp Image 2025-01-18 at 5.30.50 PM.jpeg'
const Images = () => {
  return (
    <section className="image-section">
        <h2 className="h2-img">Images</h2>
        <main className='images'>
        <div className='image'>
        <img src={img1} alt="" />
        </div>
        <div className='image'>
        <img src={img2} alt="" />
        </div>
        </main>
    </section>
  )
}

export default Images