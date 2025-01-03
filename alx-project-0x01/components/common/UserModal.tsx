import { UserData, UserModalProps} from '@/interfaces';
import React, { useState } from 'react';



const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    };

    return (
        <div className='fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter user name'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='username' className='block text-gray-700 font-medium mb-2'>Username</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={user.username}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter username'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter email'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='phone' className='block text-gray-700 font-medium mb-2'>Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={user.phone}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter phone number'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='website' className='block text-gray-700 font-medium mb-2'>Website</label>
                        <input
                            type='text'
                            id='website'
                            name='website'
                            value={user.website}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter website'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='address' className='block text-gray-700 font-medium mb-2'>Address</label>
                        <input
                            type='text'
                            id='address'
                            name='address'
                            value={user.address.street}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter address'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='company' className='block text-gray-700 font-medium mb-2'>Company</label>
                        <input
                            type='text'
                            id='company'
                            name='company'
                            value={user.company.name}
                            onChange={handleChange}
                            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder='Enter company name'
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none'
                        >
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>           
        </div>
    );
};

export default UserModal;
