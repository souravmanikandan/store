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
        <div className="flex">
            <ul>
                {mapping(toMakeWebAttractiveAndFunction)}
            </ul>
            <ul>
                {mapping(uiAndTemplates)}
            </ul>
            <ul>
                {mapping(weirdWebsites)}
            </ul>
            <ul>
                {mapping(practiceCodingAndStudy)}
            </ul>
        </div>
    </section>
  )
}

export default Links