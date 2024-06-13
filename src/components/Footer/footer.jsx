import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto flex justify-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} TCET COMP A Roll No. 61-65. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;