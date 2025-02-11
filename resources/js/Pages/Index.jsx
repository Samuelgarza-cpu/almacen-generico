import { Link, Head } from '@inertiajs/react'
import React from 'react'

export default function Index({ auth, files = [] }) {
    return (
        <>
            <Head title="DIF-TRANSPARENCIA" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-100 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                ENTRAR
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-500 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                REGISTRAR
                            </Link>
                        </>
                    )}
                </div>
                <div>
                    <h1 className='font-semibold text-gray-100 bg-gray-500'>Archivos Disponibles</h1>
                    <ul>
                        {files.map((file) => (
                            <li key={file.id}>
                                <p>{file.ano}</p>
                                <p>{file.trimestre}</p>
                                <p>{file.titulo}</p>
                                <a href={`/files/${file.id}`} download>Descargar</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </>

    )
}
