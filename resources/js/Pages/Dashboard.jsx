import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth, data }) {
    const [texto, setTexto] = useState('');

    const btnChangue = () => {
        setTexto(texto == '' ? 'Samuel' : '');
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{texto}</div>
                        <h1>ETIQUETA DE ENTRADA</h1>
                        <p>{data?.name || 'No hay datos'}</p>
                    </div>
                    <button onClick={btnChangue} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Click
                    </button>
                </div>



            </div>
        </AuthenticatedLayout>
    );
}
