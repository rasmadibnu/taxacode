import React from "react";
import Close from '../assets/img/close.svg'

const Drawer = ({setStateSidebar, ...props}) => {
    if(props.stateSidebar){
        return (
            <>
            <div
                    className="bg-white fixed shadow-lg top-0 right-0 md:w-2/5 w-3/5 h-screen z-10">
                    <div className="md:px-8 px-6 py-7">
                        <img src={Close} width="32px" alt="close" onClick={() => setStateSidebar(!props.stateSidebar)}/>
                        <div className="mt-10">
                            <div className="text-md uppercase font-bold text-gray-700">Menu</div>
                            <div className="md:space-y-5 space-y-2 mt-5">
                                <div>
                                    <a href="#about"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">About
                                        Me</a>
                                </div>
                                <div>
                                    <a href="#projects"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Projects</a>
                                </div>
                                <div>
                                    <a href="#contact"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Contact</a>
                                </div>
                                <div>
                                    <a href="coming_soon.html"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Blogs</a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <div className="text-md uppercase font-bold text-gray-700">Social</div>
                            <div className="md:space-y-5 space-y-2 mt-5">
                                <div>
                                    <a href="https://instagram.com/azrielfatur"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Instagram</a>
                                </div>
                                <div>
                                    <a href="https://github.com/azrielfatur"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Github</a>
                                </div>
                                <div>
                                    <a href="https://dribbble.com/azrielfatur"
                                        className="md:text-2xl text-lg capitalize font-bold transition hover:border-red-600 border-transparent border-b-4">Dribbble</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <></>
        )
    }
}

export default Drawer;