// import React from 'react'

function Marquee() {
    return (
        <div className="w-full overflow-hidden h-[120px]">
            <div
                className="flex flex-col gap-4 w-[200%] h-full animate-marquee"
                style={{ '--marquee-duration': '12000ms' }}
            >
                <div className="flex flex-1 gap-4 h-full">
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/4604871_zouug8.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141900/3092_cwonvb.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    <img className="rounded-full flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742141901/2150780314_vsrgna.jpg" />
                    
                </div>
            </div>
        </div>
    )
}

export default Marquee