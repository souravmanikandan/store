import { toMakeWebAttractiveAndFunction } from '../data/array'
import { uiAndTemplates } from '../data/array'
import { weirdWebsites } from '../data/array'
import { practiceCodingAndStudy } from '../data/array'

const Links = () => {
    type LinkItems = {
        text: string,
        link: string
    }

    const mapping = (arrayItems: LinkItems[]) => (
        arrayItems.map((item, index) => (
            <li key={index}><a href={item.link} target="_blank">{item.text}</a></li>
        ))
    )
    
  return (
    <section className="link-section">
        <h2 className="h2-link">Links</h2>
        <div>
            <ul className='flex'>
                {mapping(toMakeWebAttractiveAndFunction)}
            </ul>

            <h3>ui</h3>
            <ul className='flex'>
                {mapping(uiAndTemplates)}
            </ul>

            <h3>practice</h3>
            <ul className='flex'>
                {mapping(practiceCodingAndStudy)}
            </ul>

            <h3>weird website</h3>
            <ul className='flex'>
                {mapping(weirdWebsites)}
            </ul>

        </div>
    </section>
  )
}

export default Links