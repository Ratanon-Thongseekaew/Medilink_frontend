import { Link } from "react-router"
import MarqueeVerticalUp from "../components/MarqueeVerticalUp"
import MarqueeVerticalDown from "../components/MarqueeVerticalDown"
import FadeOverlay from "../components/FadeOverlay"
import MapLocations from "../components/MapLocations"
import Marquee from "../components/Marquee"
import FadeOverlayBrand from "../components/FadeOverlayBrand"
import {Link as ScrollLink, Element } from "react-scroll"

function Home() {
  return (
    <div className="bg-slate-100">
      <header className="py-4 fixed top-0 w-full z-[999]">
        <div className="container mx-auto flex justify-between items-center px-4 bg-white py-2 rounded-4xl">
          <div className="flex items-center">
            <ScrollLink to="home" smooth={true} duration={500}>
            <img
              src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
              alt="MediLink Logo"
              className="h-16"
            />
            </ScrollLink>
          </div>
          <nav className="space-x-6">
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-emerald-400 cursor-pointer font-bold text-gray-600">About Us</ScrollLink>
            <ScrollLink to="doctor" smooth={true} duration={500} className="hover:text-emerald-400 cursor-pointer font-bold text-gray-600">Appointment</ScrollLink>
            <ScrollLink to="program" smooth={true} duration={500} className="hover:text-emerald-400 cursor-pointer font-bold text-gray-600">Package & Program</ScrollLink>
            <ScrollLink to="partner" smooth={true} duration={500} className="hover:text-emerald-400 cursor-pointer font-bold text-gray-600">Partner</ScrollLink>
          </nav>
          <Link to="/login" className="btn btn-primary px-6 py-7 rounded-full font-semibold text-lg">Get Started</Link>
        </div>
      </header>

      <Element name="home">
      <section className="text-center h-[650px] bg-gradient-to-b from-[#2DD4BF] to-slate-100 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2">
            <div className="text-left pt-[180px]">
              <span className="bg-white text-emerald-400 px-4 py-1 rounded-full text-sm font-semibold">#1 Healthcare Solution</span>
              <h1 className="text-4xl font-bold mt-8 mb-4 text-black">
                ส่งต่อการรักษา ด้วยบริการ
              </h1>
              <h2 className="text-4xl font-bold text-black">จาก <span className="text-emerald-600">MediLink AI</span></h2>
              <p className="mt-4 text-lg text-gray-600">
                วิเคราะห์อาหาร พบหมอหนึ่ง พร้อมเทคโนโลยีการวิเคราะห์การรักษา <br/>ด้วยคุณภาพและทีมบริหารของเรา จะช่วยให้คุณได้รับการรักษา<br/>ได้อย่างง่ายดาย
              </p>
              <div className="mt-8 space-x-4">
                <a href="#learn" className="bg-transparent text-emerald-400 border border-emerald-400 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black">Learn more</a>
                <Link to="/login" className="btn btn-primary px-6 py-6 rounded-full font-semibold text-lg">Get Started</Link>
              </div>
            </div>
            <div className="overflow-hidden h-[450px] mt-[140px] relative">
              <div className="grid grid-cols-3 gap-6 h-full">
                {/** Column 1 */}
                <div className="h-full">
                  <MarqueeVerticalUp />
                  {/* Fade Overlay */}
                  <FadeOverlay />
                </div>

                {/** Column 2 */}
                <div className="h-full">
                  <MarqueeVerticalDown />
                  {/* Fade Overlay */}
                  <FadeOverlay />
                </div>

                {/** Column 3 */}
                <div className="h-full">
                  <MarqueeVerticalUp />
                  {/* Fade Overlay */}
                  <FadeOverlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Element>

      <Element name="about">
      <section className="py-16 pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            5 Feature <span className="text-emerald-400">MediLink AI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white pb-6 rounded-4xl shadow-md text-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742354390/ai-assistant-01_q0cvvb.jpg"
                alt="Feature 1"
                className="mx-auto mb-4 w-full rounded-t-4xl"
              />
              <h3 className="text-xl font-semibold">วิเคราะห์อาหารด้วย AI</h3>
              <p className="mt-2 text-gray-600">วิเคราะห์อาหารที่คุณทานด้วย AI</p>
            </div>
            <div className="bg-white pb-6 rounded-4xl shadow-md text-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742354518/checking_dh2jp5.jpg"
                alt="Feature 2"
                className="mx-auto mb-4 w-full rounded-t-4xl"
              />
              <h3 className="text-xl font-semibold">ตรวจสอบอาการเบื้องต้น</h3>
              <p className="mt-2 text-gray-600">ตรวจสอบอาการเบื้องต้นด้วย AI</p>
            </div>
            <div className="bg-white pb-6 rounded-4xl shadow-md text-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742354983/appointment-1_gbffdr.jpg"
                alt="Feature 3"
                className="mx-auto mb-4 w-full rounded-t-4xl"
              />
              <h3 className="text-xl font-semibold">เราเลือกแพทย์ที่ตรงกับอาการของคุณ</h3>
              <p className="mt-2 text-gray-600">เลือกแพทย์ที่เหมาะสมกับอาการของคุณ</p>
            </div>
            <div className="bg-white pb-6 rounded-4xl shadow-md text-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742356047/pro_kthwoc.jpg"
                alt="Feature 4"
                className="mx-auto mb-4 w-full rounded-t-4xl"
              />
              <h3 className="text-xl font-semibold">เราเลือกแพ็กเกจสุขภาพที่ตรงกับอาการของคุณ</h3>
              <p className="mt-2 text-gray-600">เลือกแพ็กเกจสุขภาพที่เหมาะสมกับอาการของคุณ</p>
            </div>
            <div className="bg-white pb-6 rounded-4xl shadow-md text-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742359452/doctor_dpojok.jpg"
                alt="Feature 5"
                className="mx-auto mb-4 w-full rounded-t-4xl"
              />
              <h3 className="text-xl font-semibold">ระบบชำระเงินที่ปลอดภัย</h3>
              <p className="mt-2 text-gray-600">ระบบชำระเงินที่ปลอดภัยและสะดวก</p>
            </div>
          </div>
        </div>
      </section>
      </Element>

      <Element name="doctor">
      <section className="py-16 bg-gray-100 pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ยอดฮิต <span className="text-emerald-400">Doctor</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-2_ywmkvi.jpg"
                alt="Doctor 1"
                className="mx-auto w-48 h-48 mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">พญ. ณัฐริกา พิพัฒน์พรชัย</h3>
              <p className="mt-2 text-gray-600">เวชศาสตร์ความงามและการชะลอวัย</p>
              <a href="#" className="mt-4 inline-block bg-emerald-400 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-6_hzxohp.jpg"
                alt="Doctor 2"
                className="mx-auto w-48 h-48 mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. กฤตภาส วัฒนกุลชัย</h3>
              <p className="mt-2 text-gray-600">ศัลยกรรมกระดูกและข้อ</p>
              <a href="#" className="mt-4 inline-block bg-emerald-400 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-4_gel7vc.jpg"
                alt="Doctor 3"
                className="mx-auto w-48 h-48 mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. ปวเรศ วิชัยโย</h3>
              <p className="mt-2 text-gray-600">อายุรศาสตร์โรคหัวใจและหลอดเลือด</p>
              <a href="#" className="mt-4 inline-block bg-emerald-400 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368418/doctor-3_s9lqmy.jpg"
                alt="Doctor 4"
                className="mx-auto w-48 h-48 mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">พญ. พิชญา สุทธาวัฒน์</h3>
              <p className="mt-2 text-gray-600">ทันตกรรมจัดฟัน</p>
              <a href="#" className="mt-4 inline-block bg-emerald-400 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
          </div>
        </div>
      </section>
      </Element>

      <Element name="program">
      <section className="py-16 pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ยอดฮิต <span className="text-emerald-400">Package and Program</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368421/health_checkup_package_banner_msva4n.jpg"
                alt="Package 1"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจสุขภาพพื้นฐานและทั่วไป</h3>
              <p className="mt-2 text-gray-600">แพ็กเกจตรวจสุขภาพพื้นฐานและทั่วไป</p>
              <p className="mt-2 text-emerald-400 font-semibold">8,000 บาท</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/heart_vascular_screening_banner_vasvn7.jpg"
                alt="Package 2"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจหัวใจและหลอดเลือด</h3>
              <p className="mt-2 text-gray-600">ตรวจสุขภาพหัวใจ คัดกรองโรคหัวใจและหลอดเลือด</p>
              <p className="mt-2 text-emerald-400 font-semibold">12,000 บาท</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://res.cloudinary.com/dhzksppsh/image/upload/v1742368419/womens_health_checkup_banner_jducxh.jpg"
                alt="Package 3"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจสุขภาพสตรี</h3>
              <p className="mt-2 text-gray-600">ใส่ใจสุขภาพคุณผู้หญิงทุกช่วงวัย ตรวจครบครัน ครอบคลุมทุกความเสี่ยง ทั้งสุขภาพทั่วไปและเฉพาะทาง</p>
              <p className="mt-2 text-emerald-400 font-semibold">12,000 บาท</p>
            </div>
          </div>
        </div>
      </section>
      </Element>

      <Element name="partner">
      <section className="py-16 bg-gray-100 pt-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            พันธมิตรของเรา <span className="text-emerald-400">Partner</span>
          </h2>
          <div className="rounded-lg shadow-md">
            <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <MapLocations />
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-8 relative">
            <Marquee />
            <FadeOverlayBrand />
          </div>
        </div>
      </section>
      </Element>

      <footer className="bg-[#2DD4BF] py-6">
        <div className="container mx-auto text-center text-white">
          <img
            src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
            alt="MediLink Logo"
            className="mx-auto mb-2 h-16"
          />
          <p className="text-sm">© 2025 MediLink International. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home