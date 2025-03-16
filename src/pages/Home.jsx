import { Link } from "react-router"

function Home() {
  return (
    <div className="bg-slate-100">
      <header className="bg-teal-500 py-6">
        <div className="container mx-auto flex justify-between items-center px-4 bg-white py-6 rounded-4xl">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dhzksppsh/image/upload/v1741941112/yfg8i6drbfqauvark2rl.png"
              alt="MediLink Logo"
              className="h-16"
            />
          </div>
          <nav className="space-x-6">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Appointment</a>
            <a href="#" className="hover:underline">Package & Program</a>
            <a href="#" className="hover:underline">Partner</a>
          </nav>
          <Link to="/login" className="btn btn-primary px-8 py-8 rounded-full font-semibold text-lg">Get Started</Link>
        </div>
      </header>

      <section className="text-center py-16 bg-gradient-to-b from-teal-500 to-teal-300 text-white">
        <div className="container mx-auto px-4">
          <span className="bg-white text-teal-500 px-4 py-1 rounded-full text-sm font-semibold">#1 Healthcare Solution</span>
          <h1 className="text-4xl font-bold mt-4">
            ส่งต่อการรักษา ด้วยบริการจาก <span className="text-teal-900">MediLink AI</span>
          </h1>
          <p className="mt-4 text-lg">
            วิเคราะห์อาหาร พบหมอหนึ่ง พร้อมเทคโนโลยีการวิเคราะห์การรักษา ด้วยคุณภาพและทีมบริหารของเรา จะช่วยให้คุณได้รับการรักษาได้อย่างง่ายดาย
          </p>
          <div className="mt-8 space-x-4">
            <a href="#" className="bg-white text-teal-500 px-6 py-3 rounded-full font-semibold">Learn more</a>
            <a href="#" className="bg-teal-700 text-white px-6 py-3 rounded-full font-semibold">Get Started</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            5 Feature <span className="text-teal-500">MediLink AI</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/rtRywmh1Kvk4wf_RPy_4jcpSgZbWc528jlQfeFtA4Bw.jpg"
                alt="Feature 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">วิเคราะห์อาหารด้วย AI</h3>
              <p className="mt-2 text-gray-600">วิเคราะห์อาหารที่คุณทานด้วย AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/WIV8KnYSsucMW9nc88LK5UcjFcdceVt8k1TrwZ6ga9k.jpg"
                alt="Feature 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">ตรวจสอบอาการเบื้องต้น</h3>
              <p className="mt-2 text-gray-600">ตรวจสอบอาการเบื้องต้นด้วย AI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/0T1rmnOEORSrCC-3zQEgJ9Ai3eaHXvJUU2qDcNFpW5A.jpg"
                alt="Feature 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">เราเลือกแพทย์ที่ตรงกับอาการของคุณ</h3>
              <p className="mt-2 text-gray-600">เลือกแพทย์ที่เหมาะสมกับอาการของคุณ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/J4jAKNmg5uv23lO0UA8JGcC4Paxsk3PmItKJsXfMWSg.jpg"
                alt="Feature 4"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">เราเลือกแพ็กเกจสุขภาพที่ตรงกับอาการของคุณ</h3>
              <p className="mt-2 text-gray-600">เลือกแพ็กเกจสุขภาพที่เหมาะสมกับอาการของคุณ</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/72xRLCCgqft8Kb1o25mJr1-6Vrs8LMn1yiUQg6p4rSk.jpg"
                alt="Feature 5"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">ระบบชำระเงินที่ปลอดภัย</h3>
              <p className="mt-2 text-gray-600">ระบบชำระเงินที่ปลอดภัยและสะดวก</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ยอดฮิต <span className="text-teal-500">Doctor</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/mxqQKDWk0cj3x4rq6kRIU1RQSo-vefpfP8gZRxd6HxU.jpg"
                alt="Doctor 1"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. ทาโร่ เทะโคโระวัตน์</h3>
              <p className="mt-2 text-gray-600">อายุรศาสตร์</p>
              <a href="#" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/45Pl3Z-A9ukcQDxl4Ysb2VxqqpRBRFwNLIMZgUbfQic.jpg"
                alt="Doctor 2"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. ทาโร่ เทะโคโระวัตน์</h3>
              <p className="mt-2 text-gray-600">อายุรศาสตร์</p>
              <a href="#" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/Y_9Q7iHES5ik1dNZt0bwgzbWAUSdrC4VjE3Yy18ZAAw.jpg"
                alt="Doctor 3"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. ทาโร่ เทะโคโระวัตน์</h3>
              <p className="mt-2 text-gray-600">อายุรศาสตร์</p>
              <a href="#" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://storage.googleapis.com/a1aa/image/MgtunnQWyVgzdmE3moHbHpy7E0GEBbS4bZLPtf9S6Kk.jpg"
                alt="Doctor 4"
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold">นพ. ทาโร่ เทะโคโระวัตน์</h3>
              <p className="mt-2 text-gray-600">อายุรศาสตร์</p>
              <a href="#" className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded-full">ดูรายละเอียด</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            ยอดฮิต <span className="text-teal-500">Package and Program</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://storage.googleapis.com/a1aa/image/QvYlkQhk8us3Aq4q4-WoSKBheodNwIairrJi77sLgsg.jpg"
                alt="Package 1"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจสุขภาพพื้นฐานและทั่วไป</h3>
              <p className="mt-2 text-gray-600">แพ็กเกจตรวจสุขภาพพื้นฐานและทั่วไป</p>
              <p className="mt-2 text-teal-500 font-semibold">8,000 บาท</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://storage.googleapis.com/a1aa/image/U8lYqPWslH4ZJU50fgE7wwYz0CXaYu_tRePQKQyYaac.jpg"
                alt="Package 2"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจหัวใจและหลอดเลือด</h3>
              <p className="mt-2 text-gray-600">ตรวจสุขภาพหัวใจ คัดกรองโรคหัวใจและหลอดเลือด</p>
              <p className="mt-2 text-teal-500 font-semibold">12,000 บาท</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://storage.googleapis.com/a1aa/image/1JRzZZzGq6s5K9FaJA60-9U0ZU-ae-urCd370Mice4Q.jpg"
                alt="Package 3"
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold">แพ็กเกจตรวจหัวใจและหลอดเลือด</h3>
              <p className="mt-2 text-gray-600">ตรวจสุขภาพหัวใจ คัดกรองโรคหัวใจและหลอดเลือด</p>
              <p className="mt-2 text-teal-500 font-semibold">12,000 บาท</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            พันธมิตรของเรา <span className="text-teal-500">Partner</span>
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="https://storage.googleapis.com/a1aa/image/1XvRdAiwl5C494pz2T4iLPTdX-UUFfOiY4G-pdxrRZc.jpg"
              alt="Map showing partner locations"
              className="w-full mb-4 rounded-lg"
            />
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <img
              src="https://storage.googleapis.com/a1aa/image/9XqQXLFBZir-BmYgZPEp5f80FET9SKEgtAQLuwrwlBg.jpg"
              alt="Partner 1"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/oHrrSkKZ45lfdNjNFhDXD3errDGzQZIE2DHK14eHJEI.jpg"
              alt="Partner 2"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/xhJxej2g7qq8WxhaCmr_jbmKrpeo9y_XT1pDP6mfv3s.jpg"
              alt="Partner 3"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/q43vhZ_oaGvKEzFtCG4f4og3BoJegq0fplCRifYbdB0.jpg"
              alt="Partner 4"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/seFZmUGJDslyzKQWQ4SDPXG9D2RhlB7eoEJp-P2-piM.jpg"
              alt="Partner 5"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/7j1LfSaTt7rF4VQm-2y0gYf5xjs40TK7a1i1QALkYjY.jpg"
              alt="Partner 6"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/QS2UxNXORzvyWr1QrrMr7W9DHi4yO796OMkthFuh8Y0.jpg"
              alt="Partner 7"
              className="h-12"
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/ePca6ogjIFNNe6stGzEhHqUocce841sxgWQBsQnNK7Y.jpg"
              alt="Partner 8"
              className="h-12"
            />
          </div>
        </div>
      </section>

      <footer className="bg-teal-500 py-6">
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