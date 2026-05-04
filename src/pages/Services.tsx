import { Card, CardContent } from "@/components/ui/card";

export function Services() {
    return (
        <div className="bg-[#faf7f5] min-h-screen py-30 px-6 sm:px-10">
            <div className="flex flex-col gap-10 h-full">
                <div className="flex flex-col md:flex-row h-auto md:h-50 gap-5">
                    <div className="flex-grow-1 p-2">
                        <h1 className="text-4xl font-bold aboreto-regular text-[#bd6d5d] py-2 sm:text-4xl md:text-6xl">
                            Services
                        </h1>
                            <p className="afacad-flux text-[#323743] text-base max-w-3xl sm:text-base md:text-lg">
                            I offer a range of services in web development and graphic design, including UI/UX design, front-end and back-end development. My goal is to create visually appealing, simple and user-friendly digital experiences that meet the needs of my clients. 
                            </p>
                    </div>
                    <Card className="flex-grow-11 justify-center w-full bg-gradient-to-r from-[#f2ebe5] to-[#faf7f5] md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                UI/UX Design
                                </p>
                            </span>
                            <img src="ui-img.png" alt="UI/UX Design" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-auto md:h-50">
                    <Card className="flex-grow-1 justify-center w-full md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                Front - end
                                </p>
                                <p>
                                Development
                                </p>
                            </span>
                            <img src="front-end-img.png" alt="front-end" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                    <Card className="flex-grow-1 justify-center w-full md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                Back - end
                                </p>
                                <p>
                                Development
                                </p>
                            </span>
                            <img src="back-end-img.png" alt="back-end" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                    <Card className="flex-grow-1 justify-center w-full md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                Database
                                </p>
                                <p>
                                Management
                                </p>
                            </span>
                            <img src="database-img.png" alt="database management" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-auto md:h-50">
                    <Card className="flex-grow-1 justify-center w-full md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                API
                                </p>
                                <p>
                                Integration
                                </p>
                            </span>
                            <img src="api-img.png" alt="API integration" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                    <Card className="flex-grow-1 justify-center w-full md:w-auto" >
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className="flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux text-[#323743] font-1000">
                                <p>
                                Graphic
                                </p>
                                <p>
                                Design
                                </p>
                            </span>
                            <img src="graphic-design-img.png" alt="graphic design" className="h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100 object-cover rounded-lg" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}