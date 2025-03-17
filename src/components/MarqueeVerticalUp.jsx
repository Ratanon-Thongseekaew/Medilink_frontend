// import React from 'react';

const MarqueeVerticalUp = () => {
    return (
      <div className="w-full overflow-hidden">
        <div
          className="flex flex-col gap-4 pb-4 h-[200%] animate-marquee-vertical-up"
          style={{ '--marquee-duration': '12000ms' }}
        >
          <div className="flex flex-col flex-1 gap-4 h-1/2">
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/4604871_zouug8.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/3092_cwonvb.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
          </div>
          <div className="flex flex-col flex-1 gap-4 h-1/2">
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/4604871_zouug8.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/3092_cwonvb.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
          </div>
        </div>
      </div>
    );
  };  

export default MarqueeVerticalUp;
