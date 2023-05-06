import Head from "next/head";
import Script from "next/script";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from "@/components/Button";
import Image from "next/image";
import HeroImg from '@/assets/hero-img.png'
import QualifiedImg from '@/assets/qualified.png'
import HeroBg from '@/assets/hero-bg.png'
import PrimaryImg from '@/assets/primary.png'
import SecondaryImg from '@/assets/school.png'
import UniversityImg from '@/assets/university.png'
import TeacherImg from '@/assets/teacher.png'
import StudentImg from '@/assets/student.png'
import JohnDoe1 from '@/assets/doe1.png'
import JohnDoe2 from '@/assets/doe2.png'
import JohnDoe3 from '@/assets/doe3.png'
import Winner1 from '@/assets/Winner1.png'
import Winner2 from '@/assets/Winner2.png'
import Winner3 from '@/assets/Winner3.png'
import { BiCircle } from 'react-icons/bi'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Brilliant Brains</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconimg.png" />
      </Head>
      <div className="">
        <Header />
        <section className="section min-h-screen pt-24 md:pt-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-primary font-bold text-lg mb-3">STUDY WITH US</p>
              <h1 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Free Scholarship For Every Bright Student</h1>
              <p className="md:text-lg">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <div className="flex justify-between bg-gray-100 rounded-lg max-w-md">
                <p className="my-4 ml-4">Lets get started</p>
                <Button>Connect with us</Button>
              </div>
            </div>
            <div className="w-full min-h-96 flex flex-col justify-end relative">
              <Image src={HeroImg} alt="" className="object-cover w-full h-full" />
              <Image src={HeroBg} alt="" width={200} height={200} className="object-cover absolute left-0 top-0 w-full h-full flex flex-col justify-end items-center -z-10" />
            </div>
          </div>
          <div className="flex justify-center gap-2 py-12 mt-4">
            <BiCircle className="text-xs rounded-full border-none text-[#928E8E] bg-[#928E8E]" />
            <BiCircle className="text-xs rounded-full border-none text-[#928E8E] bg-[#928E8E]" />
            <BiCircle className="text-xs rounded-full border-none text-primary bg-primary" />
          </div>
        </section>
        <section className="section mb-32">
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-primary font-bold text-xl mb-3">About Us</p>
              <h2 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Qualified and Highly Equipped Learning</h2>
              <p className="md:text-lg mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <Button className="text-white text-lg px-6 py-3 rounded-lg w-fit">Read More</Button>

            </div>
            <div className="w-full h-full min-h-96 flex flex-col justify-end relative">
              <Image src={QualifiedImg} fill={true} alt="" className="object-contain w-full" />
              <Image src={HeroBg} alt="" width={200} height={200} className="object-cover absolute left-10 right-40 top-10 w-full h-full flex flex-col justify-end items-center -z-10" />
            </div>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto mb-12">
            <h2 className="text-primary font-bold text-2xl">Our Programmes</h2>
            <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">
              Pick Your Educational Level
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={PrimaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Primary Education</h5>
              <p className="text-left text-[#6D6D6D]">Are you a student that needs a scholarship? or a teacher who wish to</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={SecondaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Secondary Education</h5>
              <p className="text-left text-[#6D6D6D]">Are you a student that needs a scholarship? or a teacher who wish to</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={UniversityImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Tertiary Education</h5>
              <p className="text-left text-[#6D6D6D]">Are you a student that needs a scholarship? or a teacher who wish to</p>
            </div>
            <div className="bg-[#F9E9E8] w-full rounded-2xl p-8 py-12 flex flex-col items-center gap-3">
              <Image src={PrimaryImg} alt="" className="w-16 h-16" />
              <h5 className="text-2xl font-extrabold capitalize mb-3">Primary Education</h5>
              <p className="text-left text-[#6D6D6D]">Are you a student that needs a scholarship? or a teacher who wish to</p>
            </div>
          </div>
        </section>
        <section className="section mb-32">
          <div className="flex flex-col items-center gap-4 max-w-xl mx-auto mb-12 text-center">
            <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Which One is Suitable For You</h3>
            <p>Are you a student that needs a scholarship? or a teacher who wish to Upgrade his/her Knowledge </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="max-w-md p-4 md:p-20 shadow-xl flex flex-col justify-center rounded-xl">
              <div className="max-w-sm flex flex-col gap-4 justify-center text-center mb-8">
                <Image src={StudentImg} alt="" className="h-44 w-44 rounded-full mx-auto" />
                <h4 className="text-2xl font-bold">Student</h4>
              </div>
              <div className="flex flex-col gap-3 font-bold mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
              </div>
              <Button className="md:text-lg text-white py-3.5 px-8 w-fit rounded-3xl mx-auto">View Details</Button>
            </div>
            <div className="max-w-md p-4 md:p-20 shadow-xl flex flex-col justify-center rounded-xl grad-to-right text-white">
              <div className="max-w-sm flex flex-col gap-4 justify-center text-center mb-8">
                <Image src={TeacherImg} alt="" className="h-44 w-44 rounded-full mx-auto" />
                <h4 className="text-2xl font-bold">Teacher</h4>
              </div>
              <div className="flex flex-col gap-3 font-bold mb-12">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-100"></div>
                  <p>Lorem lorem lorem lorem</p>
                </div>
              </div>
              <Button className="md:text-lg bg-[#5e0c08] text-white py-3.5 px-8 w-fit rounded-3xl mx-auto">View Details</Button>
            </div>
          </div>
        </section>
        <section className="section mb-32 text-center">
         <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto mb-12 text-center">
            <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-3">Our <br /> Ambassadors</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, explicabo recusandae necessitatibus voluptas nobis voluptatum nesciunt incidunt facilis, a provident dicta repudiandae ratione mollitia fuga deleniti! Alias explicabo aliquid repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus adipisci qui ratione excepturi unde inventore aspernatur. Accusamus numquam, officia laboriosam similique nemo repellat libero consequatur eum minima quas doloremque. </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
            <div className="max-w-sm flex flex-col gap-4 justify-center">
              <Image src={JohnDoe1} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-primary font-bold text-xl">Lorem Ileum</span>
              </div>
            </div>
            <div className="max-w-sm flex flex-col gap-4 justify-center">
              <Image src={JohnDoe2} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-primary font-bold text-xl">Lorem Ileum</span>
              </div>
            </div>
            <div className="max-w-sm flex flex-col gap-4 justify-center">
              <Image src={JohnDoe3} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-primary font-bold text-xl">Lorem Ileum</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section mb-32 py-20 px-4 flex flex-col items-center gap-4 grad-to-right text-white">
          <div className="flex flex-col items-center gap-4 max-w-3xl text-center">
            <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-2">Looking for a bright new future. It starts here</h3>
            <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem illo nostrum aperiam voluptatibus vitae? Quisquam laboriosam enim ipsum modi! Molestiae eveniet fugit perferendis quaerat ex et porro beatae enim quas!</p>
            <button className="p-5 px-12 text-lg rounded-full font-bold bg-white text-black">Get in Touch</button>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-10">Scholarship <br /> Winners</h3>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-8 text-center">
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner1} alt="" className="h-72 w-72 rounded-full" />
                <div>
                  <h4 className="text-3xl font-bold">John Doe</h4>
                  <span className="text-[#F60707] font-extrabold">First Position</span>
                </div>
              </div>
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner2} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-[#F60707] font-extrabold">Second Position</span>
              </div>
            </div>
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner3} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-[#F60707] font-extrabold">Third Position</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner1} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-[#F60707] font-extrabold">First Position</span>
              </div>
            </div>
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner2} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-[#F60707] font-extrabold">Second Position</span>
              </div>
            </div>
             <div className="max-w-sm flex flex-col gap-4 items-center">
                <Image src={Winner3} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-3xl font-bold">John Doe</h4>
                <span className="text-[#F60707] font-extrabold">Third Position</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section mb-32 ">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 grad-to-right text-white p-4 md:p-16">
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-extrabold capitalize mb-3">Become Part of Us on Our Platform</h2>
              <p className="md:text-lg mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial status, since it is the fundamental right of every child to receive  qualitative and functional education</p>
              <div className="grid grid-cols-2 gap-5 mb-4 max-w-fit">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <p>Primary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <p>Primary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <p>Primary Education</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <p>Primary Education</p>
                  </div>
              </div>
              <button className="bg-yellow-400 text-white text-lg px-6 py-3 rounded-lg w-fit">Apply Now</button>
            </div>
            <div className="flex-1 bg-gray-200 w-full h-96 md:h-[500px]"></div>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold capitalize mb-12">News & <br />Updates</h2>
          <div className="grid md:grid-cols-3 md:h-[500px] gap-8">
            <div className="bg-gray-200 w-full h-96"></div>
            <div className="bg-gray-200 w-full h-96 place-self-center"></div>
            <div className="bg-gray-200 w-full h-96 place-self-end"></div>
          </div>
        </section>
        <section className="section mb-32 ">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 grad-to-right text-white p-4 md:p-16">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-4xl md:text-5xl font-extrabold capitalize mb-3">Sign up for Our Scholarship Program Now</h3>
              <p className="text-sm md:text-base mb-4">The Brilliant Brain Scholarship Scheme is a scholarship management platform with a vision to ensuring that no person of school age is denied access to education because of his or her financial</p>
            </div>
            <form className="flex-1 flex flex-col gap-4 w-full text-black">
              <input className="p-5 px-8 rounded-full" type="text" name="username" id="username" placeholder="username" />
              <input className="p-5 px-8 rounded-full" type="email" name="email" id="email" placeholder="Enter your email address" />
              <select className="p-5 px-8 rounded-full text-black/60" name="ty[e" id="type">
                <option value="student">Student</option>
              </select>
              <button className="bg-black text-white font-medium text-lg px-14 py-4 rounded-full w-fit">Send Request</button>
            </form>
          </div>
        </section>
        <section className="section mb-32 text-center">
          <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl md:text-6xl font-extrabold capitalize mb-10">Advisory Board <br /> Members</h3>
          </div>
          <div className="flex flex-col md:flex-row md:justify-center gap-8">
            <div className="max-w-[288px] flex flex-col gap-4 items-center">
                <Image src={JohnDoe1} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-[#6D6D6D] font-extrabold mb-3">HRM, King Alfred Papapreye Diete-Spiff</h4>
                <span className="text-[#6D6D6D] font-extrabold">Chairman</span>
              </div>
            </div>
            <div className="max-w-[288px] flex flex-col gap-4 items-center">
                <Image src={JohnDoe2} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-[#6D6D6D] font-extrabold mb-3">HRM, King Alfred Papapreye Diete-Spiff</h4>
                <span className="text-[#6D6D6D] font-extrabold">Chairman</span>
              </div>
            </div>
            <div className="max-w-[288px] flex flex-col gap-4 items-center">
                <Image src={JohnDoe1} alt="" className="h-72 w-72 rounded-full" />
              <div>
                <h4 className="text-[#6D6D6D] font-extrabold mb-3">HRM, King Alfred Papapreye Diete-Spiff</h4>
                <span className="text-[#6D6D6D] font-extrabold">Member</span>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
