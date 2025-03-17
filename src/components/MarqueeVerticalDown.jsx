function MarqueeVerticalDown() {
  
    return (
        <div className="w-full overflow-hidden">
        <div
          className="flex flex-col gap-4 pb-4 h-[200%] animate-marquee-vertical-down"
          style={{ '--marquee-duration': '12000ms' }}
        >
          <div className="flex flex-col flex-1 gap-4">
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/35_muhkac.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2151696224_co2khi.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141902/2150780446_hwvnbo.jpg" />
          </div>
          <div className="flex flex-col flex-1 gap-4 h-1/2">
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/35_muhkac.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2151696224_co2khi.jpg" />
            <img className="rounded-xl flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141902/2150780446_hwvnbo.jpg" />
          </div>
          
        </div>
      </div>
    );
  }
  
  export default MarqueeVerticalDown;
  