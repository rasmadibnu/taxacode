import Hero from '../assets/img/g10.svg'
import WeAreHere from '../assets/img/Group 31.svg'
import UIUX from '../assets/img/uiux.svg'
import WebDev from '../assets/img/webdev.svg'
import MobileDev from '../assets/img/mobiledev.svg'
import Seo from '../assets/img/seo.svg'
import TemanPindah from '../assets/img/temanpindah.png'
import Arrow from '../assets/img/arrow.svg'
import PyKotes from '../assets/img/pykotes.png'
import FindJob from '../assets/img/findjob.png'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
    <section className="max-w-5xl md:mx-auto mx-5 mt-16">
        
        <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-center">
                <div>
                    <div data-aos="fade-right">
                        <img className="md:hidden block mb-8" src={Hero} alt=""/>
                    </div>
                    <div data-aos="fade-right">
                        <p className="md:text-5xl text-4xl font-semibold">Take your Business <br/> Give us the System</p>
                        <p className="mt-2 opacity-60">Any time, anywhere it doesn't matter, make your business grow up with us. We provice high service for website or mobile development.</p>
                    </div>
                    <div data-aos="fade-up" className="flex space-x-3">
                        <div className="md:mt-14 mt-8 px-5 py-3 bg-yellow-500 max-w-max text-white rounded-xl">
                            <a href="">Get Started</a>
                        </div>
                        <div className="md:mt-14 mt-8 px-5 py-3 bg-white max-w-max text-yellow-500 rounded-xl shadow-lg">
                            <a href="">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <img className="md:block hidden" src={Hero} alt=""/>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:mt-48 mt-10">
            <div data-aos="fade-right">
                <img className="w-72 mx-auto" src={WeAreHere} alt=""/>
            </div>
            <div data-aos="fade-left" className="flex items-center">
                <div>
                    <div>
                        <p className="text-4xl font-semibold">We Are Here For Your <br/> Business Solution</p>
                        <p className="mt-7 opacity-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:mt-52 mt-10">
            <p data-aos="zoom-in" className="text-4xl font-semibold md:text-center text-left">Explore What We Offer For You</p>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-12">
                <div data-aos="fade-down" className="border box-border px-5 py-5 rounded-lg">
                    <div className=" h-48">
                        <img src={UIUX} alt=""/>
                    </div>
                    <div className="md:mt-10 mt-5">
                        <p className="font-semibold text-lg">Ui & Ux Designer</p>
                        <p className="mt-3 opacity-60 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div data-aos="fade-down" className="border box-border px-5 py-5 rounded-lg">
                    <div className=" h-48">
                        <img src={WebDev} alt=""/>
                    </div>
                    <div className="md:mt-10 mt-5">
                        <p className="font-semibold text-lg">Web Development</p>
                        <p className="mt-3 opacity-60 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="border box-border px-5 py-5 rounded-lg">
                    <div className=" h-48">
                        <img src={MobileDev} alt=""/>
                    </div>
                    <div className="md:mt-10 mt-5">
                        <p className="font-semibold text-lg">Mobile Development</p>
                        <p className="mt-3 opacity-60 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div data-aos="fade-up" className="border box-border px-5 py-5 rounded-lg">
                    <div className=" h-48">
                        <img src={Seo} alt=""/>
                    </div>
                    <div className="md:mt-10 mt-5">
                        <p className="font-semibold text-lg">Search Engine Optimization</p>
                        <p className="mt-3 opacity-60 text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="md:mt-52 mt-10">
            <p data-aos="zoom-in" className="text-4xl font-semibold md:text-center text-left">Let See Our Case Studies</p>
            <div className="mt-12 md:space-y-28 space-y-5">
                <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 gap-x-10">
                    <div data-aos="fade-left">
                        <img src={TemanPindah} alt=""/>
                    </div>
                    <div data-aos="fade-right" className="flex items-center">
                        <div className="space-y-5 md:px-8 px-0">
                            <p className="text-xl font-bold">temanpindah</p>
                            <p className=" opacity-60 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <Link to='/projects/temanpindah' className="flex space-x-5 text-sm">
                                <p>View Project</p>
                                <img src={Arrow} alt="" className="w-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 gap-x-10">
                    <div className="md:hidden block">
                        <img data-aos="fade-left" src={PyKotes} alt=""/>
                    </div>
                    <div data-aos="fade-right" className="flex items-center">
                        <div className="space-y-5 md:px-8 px-0">
                            <p className="text-xl font-bold">pykotes</p>
                            <p className="opacity-60 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <Link to="/projects/pykotes" className="flex space-x-5 text-sm">
                                <p>View Project</p>
                                <img src={Arrow} alt="" className="w-4"/>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="hidden md:block">
                        <img src={PyKotes} alt=""/>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-y-10 gap-y-5 gap-x-10">
                    <div data-aos="fade-left">
                        <img src={FindJob} alt=""/>
                    </div>
                    <div data-aos="fade-right" className="flex items-center">
                        <div className="space-y-5 md:px-8 px-0">
                            <p className="text-xl font-bold">Find Jobs</p>
                            <p className=" opacity-60 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                            <Link to="/projects/find-jobs" className="flex space-x-5 text-sm">
                                <p>View Project</p>
                                <img src={Arrow} alt="" className="w-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
        </>
    )
}

export default Home;