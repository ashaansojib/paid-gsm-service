import React from 'react';

const Header = () => {
    return (
        <div>
            {/* top header content */}
            <div className='my-container border-b flex justify-between'>
                <p>Date: 10 June, 2024</p>
                <div className='flex gap-2'>
                    <p>Email: ashaansojib67@gmail.com</p>
                    <p>Phone: (+880) 1892932859</p>
                </div>
            </div>
        </div>
    );
};

export default Header;