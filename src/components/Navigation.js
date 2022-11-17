import { Link } from "react-router-dom"
import Menu from '../assets/img/menu.svg'
const Navigation = ({setStateSidebar, ...props}) => {
    return (
        <section id="navbar" className="max-w-5xl md:mx-auto mx-5">

        <div className="flex justify-between py-7">
            <div>
                <Link to="/" className="text-2xl font-semibold">Taxacode</Link>
            </div>
            <div>
                <img className="md:hidden block" src={Menu} onClick={() => setStateSidebar(!props.stateSidebar)} alt="menubutton" />
                <ul className="md:flex space-x-5 hidden opacity-60">
                    <li>
                        <Link to="#">About</Link>
                    </li>
                    <li>
                        <Link to="#">Service</Link>
                    </li>
                    <li>
                        <Link to="#">Workflow</Link>
                    </li>
                    <li>
                        <Link to="#">Project</Link>
                    </li>
                    <li>
                        <Link to="#">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>

    </section>
    );
};

export default Navigation;