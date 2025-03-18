// import React from 'react'

function Marquee() {
    return (
        <div className="w-full overflow-hidden h-[130px]">
            <div
                className="flex flex-col gap-4 w-[200%] h-full animate-marquee"
                style={{ '--marquee-duration': '20000ms' }}
            >
                <div className="flex flex-1 gap-4 h-full">
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279774/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E_j12bgo.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279856/%E0%B8%88%E0%B8%B8%E0%B8%AC%E0%B8%B2_pcs86k.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B8%82%E0%B8%AD%E0%B8%99%E0%B9%81%E0%B8%81%E0%B9%88%E0%B8%99_yhsbod.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AA%E0%B8%B5%E0%B8%A1%E0%B8%B2_ahuc9s.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%9E%E0%B8%B4%E0%B8%87%E0%B8%84%E0%B9%8C_mvnfox.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2_qm4bg2.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%8E%E0%B8%A9%E0%B9%8C_fmac7c.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279857/%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88_shqnyi.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279858/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2_u76iqs.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279858/%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%8A%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B2%E0%B8%8A_qj98yy.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279858/%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%9A%E0%B8%94%E0%B8%B5_htro7k.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279858/%E0%B8%A1%E0%B8%87%E0%B8%81%E0%B8%B8%E0%B8%8E%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2_ek2tlt.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279858/%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5_fdarsj.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%A8%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C_n56gen.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%AA%E0%B8%87%E0%B8%82%E0%B8%A5%E0%B8%B2_b9bjpo.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%A8%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%A3%E0%B8%B2%E0%B8%8A_at2me2.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%94%E0%B8%AD%E0%B8%81_wgbrne.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%AA%E0%B8%B8%E0%B8%A3%E0%B8%B2%E0%B8%A9%E0%B8%8E%E0%B8%A3%E0%B9%8C%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5_wzud4y.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279859/%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88_d4bhmn.png" />
                    <img className="rounded-full w-32 h-32 flex flex-1 object-cover object-center" src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742279860/%E0%B8%AD%E0%B8%B8%E0%B8%94%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5_kmjpdf.png" />
                </div>
            </div>
        </div>
    )
}

export default Marquee