import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../config/axiosConfig';

export default function NotificationButton() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        api.get('/service/pendings')
            .then((response) => setNotifications(response.data))
            .catch((error) => console.error(error))
    }, [])


    const toggleMenu = () => {
        if (notifications.length <= 0) return;
        setOpen(!open);
    }
    const goToDetail = (id) => {
        setOpen(false);
        navigate(`/services/request/${id}`);
    };

    return (
        <div className="relative inline-block text-left ">
            <button
                onClick={toggleMenu}
                className="relative text-2xl p-2 rounded hover:bg-gray-200 transition"
            >
                <svg class="h-8 w-8 text-blue-950"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {notifications.length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1.5">
                        {notifications.length}
                    </span>
                )}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-96 max-h-56 overflow-y-auto bg-white border border-gray-300 shadow-lg rounded-md z-10 divide-y divide-gray-200">
                    {
                        notifications.map((n) => (
                            <div key={n.id_servicio} className="px-4 py-3">
                                <div className="flex justify-between">
                                    <h4 className="font-semibold text-sm text-gray-800">{n.title}</h4>
                                    <button
                                        onClick={() => goToDetail(n.id_servicio)}
                                        className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                                    >
                                        Ver
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">{n.detail}</p>

                            </div>
                        ))
                    }
                </div>
            )}

        </div>
    );
}
