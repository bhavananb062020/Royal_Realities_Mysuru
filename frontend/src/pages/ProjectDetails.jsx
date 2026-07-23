import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo-removebg.png";
import { projects } from "../data/mockData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const project = projects.find(
        (p) => p.id.toString() === id
    );

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-4xl font-bold">Project Not Found</h2>
            </div>
        );
    }

    return (
        <>
            <Header />

            <div className="bg-gray-50 min-h-screen">

                {/* Hero Banner */}
                <div className="relative h-[60vh]">

                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="hidden lg:flex absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md p-3 rounded-full hover:bg-amber-500 transition items-center justify-center"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Royal Realities"
                        className="hidden md:block absolute top-5 left-24 h-20 lg:h-24 z-20"
                    />

                    {/* Title */}
                    <div className="absolute inset-0 flex items-center justify-center">

                        <div className="text-center text-white px-6">

                            <h1
                                className="text-5xl md:text-6xl font-bold"
                                style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.8)" }}
                            >
                                {project.name}
                            </h1>

                            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-5"></div>

                            <p
                                className="mt-5 text-xl text-gray-100"
                                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8)" }}
                            >
                                {project.tagline}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-5 py-16">

                    {/* About */}
                    <section className="text-center mb-20">

                        <h2 className="text-4xl font-bold text-gray-900">
                            About the Project
                        </h2>

                        <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-3"></div>

                        <p className="text-gray-600 text-lg mt-8 max-w-4xl mx-auto leading-8">
                            {project.description}
                        </p>

                    </section>

                    {/* Gallery */}

                    {project.gallery && project.gallery.length > 0 && (

                        <section className="mb-24">

                            <div className="text-center mb-12">

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Project Gallery
                                </h2>

                                <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-3"></div>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                                {project.gallery.map((img, index) => (

                                    <div
                                        key={index}
                                        className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
                                    >

                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                                        />

                                    </div>

                                ))}

                            </div>

                        </section>

                    )}

                    {/* Videos */}

                    {project.videos && project.videos.length > 0 && (

                        <section className="mb-24">

                            <div className="text-center mb-12">

                                <h2 className="text-4xl font-bold text-gray-900">
                                    Project Videos
                                </h2>

                                <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-3"></div>

                            </div>

                            <div className="flex justify-center flex-wrap gap-10">

                                {project.videos.map((video, index) => (

                                    <div
                                        key={index}
                                        className="bg-white rounded-3xl shadow-xl overflow-hidden w-[340px] hover:shadow-2xl transition duration-300 hover:-translate-y-2"
                                    >

                                        <video
                                            controls
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-auto"
                                        >
                                            <source src={video} type="video/mp4" />
                                        </video>

                                        <div className="p-5 text-center">

                                            <h3 className="text-lg font-semibold text-gray-800">
                                                Site Progress {index + 1}
                                            </h3>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </section>

                    )}

                </div>

            </div>

            <Footer />

        </>
    );
};

export default ProjectDetails;