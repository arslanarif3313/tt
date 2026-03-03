'use client';

import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ModalNewsletter() {
    // const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const modalRef = useRef(null);



    // useEffect(() => {
    //     // Show modal once per reload
    //     setTimeout(() => setIsOpen(true), 500); // optional delay

    // }, []);

    // if (!isOpen) return null;

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);
    const closeModal = () => {
        modalRef.current.close();
    }
    return (
        <dialog ref={modalRef} className="modal">
            <div className="modal-box">
                <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {/* Form */}

                <h1 className='text-2xl text-center text-primary mt-5'>
                    Subscribe our newsletter <br />for more details
                </h1>

                <form className="space-y-4 text-left">

                    <div>
                        <label className="text-sm font-medium">Full Name *</label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2  rounded bg-gray-50
                            input input-bordered 
                            "
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Email Address *</label>
                        <input
                            {...register('email', { required: true })}
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 input input-bordered  rounded bg-gray-50"
                            required
                            suppressHydrationWarning
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium">Phone Number (Optional)</label>
                        <input
                            {...register('phone')}
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full px-4 py-2 input input-bordered  rounded bg-gray-50"
                        />
                    </div>
                    {isLoading ?
                        <div className='text-center'>
                            <span className="loading loading-spinner text-primary "></span>
                        </div>
                        :
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 mt-2 rounded hover:bg-primary transition uppercase font-semibold"
                        >
                            Submit
                        </button>
                    }


                </form>

            </div>

        </dialog>


    );
}
