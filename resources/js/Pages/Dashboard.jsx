import api from '@/Classes/Api';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard(props) {
    const [quotes, setQuotes] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {

        if (!api.getToken()) {
            window.location = '/login';
            return;
        }

        getQuotes();

    }, []);

    const getQuotes = () => {
        setFetching(true);
        api.quotes()
            .then(response => {
                setFetching(false);
                setQuotes(response.data.quotes);
            })
            .catch(error => {
                setFetching(false);
                console.log(error);
            })
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Quotes</h2>}
        >
            <Head title="Quotes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {
                                quotes.map(quote => (
                                    <div>{quote}</div>
                                ))
                            }
                        </div>
                    </div>
                    <div class="text-center">
                        <PrimaryButton onClick={() => {
                            getQuotes();
                        }} className="mt-4" disabled={fetching}>
                            refresh
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
