import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import About2 from '@/assets/about1.png'
import About1 from '@/assets/about2.png'

const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <section className='section top-section grad-to-right grad-to-right flex flex-col gap-3 text-white'>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-argentinum mb-3">About Us</h1>
            <span className='font-bold'>Home / About Us</span>
        </section>
        <section className='section pt-12 pb-10 relative after:absolute after:translate-y-6 after:bottom-0 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white'>
            <h1 className="text-2xl text-primary font-bold font-argentinum py-3">
                The Brilliant Brain Scholarship Scheme
            </h1>
        </section>
        <section className="section py-20 bg-primary text-white">
            <div className="flex flex-col md:flex-row gap-12 mb-20">
                <div className="flex-1 relative md:-top-20">
                    <Image src={About1} alt="" className="w-full max-w-sm" />
                </div>
                <div className="flex-1 max-w-lg flex flex-col gap-3">
                    <p>Are you a passionate and driven individual aspiring to pursue your dreams, but financial constraints stand in your way? Look no further! At Brilliant Brains, we believe that everyone deserves a chance to unlock their true potential and achieve their academic goals. We are dedicated to connecting deserving students like you with life-changing scholarship opportunities.</p>
                    <p>
                        Our scholarship program is open to students from all walks of life. Whether you are a high school student looking to pursue a bachelor’s degree or a working professional hoping to advance your career with a master’s degree, we have a scholarship for you. We offer scholarships in a wide range of disciplines, including business, engineering, medicine, law, and more. Our scholarships are available for students at all levels of study, from undergraduate to postgraduate.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="flex-1 max-w-lg flex flex-col gap-3">
                    <p>Don&#39;t let financial barriers hinder your dreams. Take the first step towards achieving your academic aspirations by exploring the world of scholarships with Brilliant Brains. Sign up now to create your profile and unlock a world of opportunities waiting for you.</p>
                  <p>
                    Everyone deserves a chance to pursue their dreams. At Brilliant Brains, we believe that financial constraints should not stand in the way of your academic aspirations. We are committed to helping you achieve your goals by connecting you with life-changing scholarship opportunities. Our scholarship program is open to students from all walks of life. Whether you are a high school student looking to pursue a bachelor’s degree or a working professional hoping to advance your career with a master’s degree, we have a scholarship for you. We offer scholarships in a wide range of disciplines, including business, engineering, medicine, law, and more. Our scholarships are available for students at all levels of study, from undergraduate to postgraduate.
                  </p>
                   
                </div>
                <div className="flex-1 flex justify-end">
                    <Image src={About2} alt="" className="w-full max-w-sm" />
                </div>
            </div>
        </section>
        <section className="section flex flex-col gap-3 pt-20 pb-20 relative after:absolute after:top-0 after:-translate-y-6 after:-left-[10%] after:w-[120%] after:h-16 after:rounded-[100%] after:bg-white">
            <p>
                At Brilliant Brains, we are committed to empowering individuals through education and fostering a community of lifelong learners. With a passion for knowledge and a dedication to excellence, we strive to provide transformative educational experiences that shape lives and make a positive impact.
            </p>
            <p>
                Our vision is to be a leading institution that inspires and equips individuals to reach their full potential. We believe in the power of education to transform lives, unlock opportunities, and create a better future for individuals and society as a whole.
            </p>
            <p>
                Our mission is to provide accessible, high-quality education that nurtures intellectual curiosity, fosters critical thinking, and promotes personal and professional growth. We aim to create an inclusive learning environment that celebrates diversity, encourages collaboration, and prepares individuals to thrive in a rapidly changing world.
            </p>   
            <p>
                At Brilliant Brains, we take a holistic approach to education, focusing not only on academic excellence but also on the development of well-rounded individuals. We prioritize practical, hands-on learning experiences that bridge the gap between theory and practice. Through innovative teaching methods, state-of-the-art resources, and a supportive community, we aim to inspire a love for learning and cultivate essential skills for success in the modern world.
            </p>
            <p>
                Our team of passionate educators and staff members are the heart and soul of Brilliant Brains. With expertise in their respective fields, they are committed to providing a nurturing and stimulating learning environment. Our faculty members are not only knowledgeable professionals but also mentors who guide and inspire students to explore their passions and achieve their goals.
            </p>    
            <p>
                We maintain high standards of academic rigor, continually updating our curriculum to align with industry demands and emerging trends. We foster a culture of continuous improvement, encouraging students and staff alike to strive for excellence in all aspects of their educational journey.
            </p>
            <p>
            Whether you are a student, parent, educator, or lifelong learner, we invite you to join our vibrant learning community. Together, we can embark on a journey of discovery, growth, and lifelong learning. Explore our range of programs, engage with our passionate community, and unlock your potential at Brilliant Brains.
            </p>
        </section>
        <Footer />
    </div>
  )
}

export default AboutUs