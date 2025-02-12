import { Link, Head } from '@inertiajs/react'
import React from 'react'

export default function Index({ auth, files = [] }) {
    return (
        <>
            <Head title="DIF-TRANSPARENCIA" />

            <div className="min-h-screen bg-gray-100">
                {/* Header Section */}
                <section className="fixed w-64 h-full bg-lime-700 text-white p-8">
                    <header className="text-center mb-8">
                        <img
                            src="/logo.jpg"
                            alt="DIF"
                            className="rounded-full w-32 h-32 mx-auto mb-5 object-cover"
                        />
                        <h1 className="text-xl font-bold mb-2">DIF TRANSPARENCIA</h1>
                        <p className="text-gray-400">
                            Contabilidad
                            <br />
                            Gubernamental
                        </p>
                    </header>

                    <nav className="mb-8">
                        <ul className="space-y-2">
                            <li><a href="#contabilidad" className="block py-2 px-4 hover:bg-gray-700 rounded">CONTABILIDAD GUBERNAENTAL</a></li>
                            <li><a href="#two" className="block py-2 px-4 hover:bg-gray-700 rounded">ANTECEDENTES</a></li>
                            <li><a href="#three" className="block py-2 px-4 hover:bg-gray-700 rounded">TRAMITES Y SERVICIOS</a></li>
                            <li><a href="#four" className="block py-2 px-4 hover:bg-gray-700 rounded">DEPENDENCIAS</a></li>
                        </ul>
                    </nav>

                    <footer>
                        <ul className="flex justify-center space-x-4">
                            {/* <li><a href="#" className="hover:text-blue-400">Twiter</a></li> */}

                        </ul>
                    </footer>
                </section>

                {/* Main Content */}
                <div className="ml-64">
                    {/* Banner Section */}
                    <section id="contabilidad" className="min-h-screen">
                        <div className="h-64 bg-gray-300">
                            <img
                                src="/api/placeholder/1200/400"
                                alt="Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="max-w-4xl mx-auto px-8 py-16">
                            <h2 className="text-4xl font-bold mb-4">Read Only</h2>
                            <p className="text-xl text-gray-600 mb-8">
                                Just an incredibly simple responsive site template freebie by HTML5 UP.
                            </p>
                            <p className="text-gray-600">
                                Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus.
                            </p>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section id="two" className="bg-white py-16">
                        <div className="max-w-4xl mx-auto px-8">
                            <h3 className="text-3xl font-bold mb-4">Things I Can Do</h3>
                            <p className="text-gray-600 mb-8">
                                Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex items-center space-x-4">
                                    <code className="text-blue-500 text-2xl">&lt;/&gt;</code>
                                    <span>Write all the code</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-purple-500 text-2xl">□</div>
                                    <span>Stack small boxes</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-green-500 text-2xl">📚</div>
                                    <span>Read books and stuff</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-brown-500 text-2xl">☕</div>
                                    <span>Drink much coffee</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-yellow-500 text-2xl">⚡</div>
                                    <span>Lightning bolt</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="text-indigo-500 text-2xl">👥</div>
                                    <span>Shadow clone technique</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Accomplishments Section */}
                    <section id="three" className="py-16">
                        <div className="max-w-4xl mx-auto px-8">
                            <h3 className="text-3xl font-bold mb-4">A Few Accomplishments</h3>
                            <p className="text-gray-600 mb-8">
                                Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer.
                            </p>
                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Possibly broke spacetime",
                                        description: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
                                    },
                                    {
                                        title: "Terraformed a small moon",
                                        description: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
                                    },
                                    {
                                        title: "Snapped dark matter in the wild",
                                        description: "Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="flex space-x-6">
                                        <img
                                            src={`/api/placeholder/200/200`}
                                            alt=""
                                            className="w-32 h-32 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="four" className="bg-white py-16">
                        <div className="max-w-4xl mx-auto px-8">
                            <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
                            <p className="text-gray-600 mb-8">
                                Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer.
                            </p>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                                <div className="flex space-x-4">
                                    <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Send Message
                                    </button>
                                    <button className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100">
                                        Reset Form
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="bg-gray-800 text-white py-8">
                        <div className="max-w-4xl mx-auto px-8 text-center">
                            <ul className="flex justify-center space-x-4 text-sm text-gray-400">
                                <li>&copy;Todos los derechos reservados a DIF.</li>
                                <li>Design: <a href="http://manada.digital" className="hover:text-white">MANADA DIGITAL</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>

        </>

    )
}
