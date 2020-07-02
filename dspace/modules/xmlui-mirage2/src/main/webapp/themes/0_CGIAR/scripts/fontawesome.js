import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faRss, faAt, faEnvelope, faChartBar, faTable } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitterSquare, faLinkedin, faMendeley, faGithub, faOrcid } from '@fortawesome/free-brands-svg-icons'

// Add solid icons to our library
library.add(faRss, faAt, faEnvelope, faChartBar, faTable)

// Add brand icons to our library
library.add(faFacebookSquare, faTwitterSquare, faLinkedin, faMendeley, faGithub, faOrcid)

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch()
