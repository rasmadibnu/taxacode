import Facebook from '../assets/img/facebook.svg'
import Twitter from '../assets/img/twitter 1.svg'
import Telegram from '../assets/img/paper-plane 1.svg'
import Github from '../assets/img/github 1.svg'

const Footer = () => {
    return (
        <section id="footer" className="bg-black opacity-90 mt-24 py-10">

        <div className="max-w-5xl md:mx-auto mx-5 grid md:grid-cols-5 grid-cols-2 gap-6 text-white">
            <div>
                <p className="font-medium text-base">Find Us</p>
                <div className="mt-5">
                    <ul className="flex space-x-5">
                        <li>
                            <a href="#">
                                <img src={Facebook} alt="" className="w-6"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Twitter} alt="" className="w-6"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Telegram} alt="" className="w-6"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={Github} alt="" className="w-6"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div></div>
            <div>
                <p className="font-medium text-base">Studio</p>
                <div className="mt-5">
                    <ul className="space-y-4 text-xs opacity-60">
                        <li>Our Team</li>
                        <li>Culture</li>
                        <li>Documentation</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="font-medium text-base">Service</p>
                <div className="mt-5">
                    <ul className="space-y-4 text-xs opacity-60">
                        <li>Ui & Ux</li>
                        <li>Website Development</li>
                        <li>Mobile Development</li>
                        <li>Search Engine Optimization</li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="font-medium text-base">Resource</p>
                <div className="mt-5">
                    <ul className="space-y-4 text-xs opacity-60">
                        <li>About</li>
                        <li>Service</li>
                        <li>Workflow</li>
                        <li>Case Studies</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="max-w-5xl md:mx-auto mx-5 md:flex md:justify-between mt-20 text-white text-xs opacity-60">
            <div>
                <ul className="flex space-x-5 ">
                    <li>Term of use</li>
                    <li>Privacy policy</li>
                    <li>Condition Agreements</li>
                </ul>
            </div>
            <div className="md:mt-0 mt-2">
                <p>Copyright 2022 All RIght Reserved</p>
            </div>
        </div>

        </section>
    );
};

export default Footer;