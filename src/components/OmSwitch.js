import {
        Switch,
        Route
} from 'react-router-dom'
import './content.css';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import Work from './work/Work';
import Contact from './contact/Contact';

export default ()=>{
        return (
                <div className="content">

                        <Switch>
                                <Route path="/portfolio">
                                        <Portfolio />
                                </Route>
                                <Route path="/about">
                                        <About />
                                </Route>
                                <Route path="/work">
                                        <Work />
                                </Route>
                                <Route path="/contact">
                                        <Contact />
                                </Route>
                                <Route path="/">
                                        <Portfolio />
                                </Route>
                        </Switch>

                </div>
        )
}