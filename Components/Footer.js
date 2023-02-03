import React from 'react'

export const Footer = () => {
  return (
    <div className="grid grid-cols1 md:grid-cols-4 gap-y-10 px-32
    py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Just a cool clone</p>
            <p>Referrals accepted</p>
            <p>Its nice to meet you</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>Jade Ferguson</p>
            <p>Presents</p>
            <p>Airbnb clone website</p>
            <p>Connect on Linkedin?</p>
            <p>Join Now</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Easter Eggs</p>
            <p>Report a Problem</p>
            <p>Privacy</p>
        </div>
    </div>
  );
}

export default Footer;
