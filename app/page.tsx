"use client";
import './styles.css'
import Image from 'next/image'
import familybg from './components/images/Family.png'
import mentalHealth from './components/images/mental-health-counselors.png'
import marriagecounseling from './components/images/marriage-counselor.jpg'
import familycounseling from './components/images/family-counseling.png'
import christiancounseling from './components/images/christian-counseling.png'
import mentalperson from './components/images/mental-person.png'
import Totop from './components/Totop';
import Review from './components/review'
import Link from 'next/link'
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,  } from '@fortawesome/free-solid-svg-icons'
    config.autoAddCss = false;
export default function Home() {
 

  return (
    <div className="homeContainer">
      {/* Hero Section */}
      <div className="headerImage flex flex-wrap justify-center items-center m-auto py-8">
        <Image src={familybg} alt="Family Counseling" className="heroImage w-[400px] m-px rounded-[20px] shadow-lg" />
        <div className="heroText m-px justify-center items-center flex flex-col w-[500px]">
          <h1 className="text-4xl font-bold text-yellow-400 mb-[30px]">Welcome to S.H.R.M</h1>
          <p className="text-lg text-white w-full mb-4">At S.H.R.M, we are dedicated to helping you and your loved ones find hope, healing, and renewed purpose. Our caring team offers professional counseling and faith-based support to guide you through life&#39;s challenges and help you build stronger, healthier relationships.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col justify-center items-center flex-wrap">
  <h1 className="ourServicesTitle text-4xl font-bold mb-[40px] mt-[40px]">How We Can Help</h1>
        <div className="flex justify-around flex-wrap gap-8 items-center w-full">
          {/* Family Counseling Card */}
          <div className="flex flex-col gap-4 bg-[#23272f] rounded-xl shadow-lg p-5 text-white text-center items-center w-[300px] hover:scale-105 transition-transform">
            <Image src={familycounseling} alt="Family Counseling" className="rounded-lg w-full h-[140px] object-cover mb-2" />
            <h2 className="text-2xl font-semibold">Family Counseling</h2>
            <p className='text-gray-300 text-left'>Rebuild trust, improve communication, and create lasting harmony within your family. Our counselors help you navigate challenges together and foster a loving home environment.</p>
            <div className='text-left text-white flex items-center'>
              <Link href="/contact" className='text-yellow-400 text-[15px] underline'>Learn More</Link>
              <FontAwesomeIcon className='ml-2 text-yellow-400' icon={faArrowRight} />
            </div>
          </div>
          {/* Mental Health Card */}
          <div className="flex flex-col gap-4 bg-[#23272f] rounded-xl shadow-lg p-5 text-white text-center items-center w-[300px] hover:scale-105 transition-transform">
            <Image src={mentalHealth} alt="Mental Health" className="rounded-lg w-full h-[140px] object-cover mb-2" />
            <h2 className="text-2xl font-semibold">Mental Health Therapy</h2>
            <p className='text-gray-300 text-left'>Find support for anxiety, depression, stress, and emotional well-being. We offer a safe, confidential space to help you heal and thrive—because your mental health matters.</p>
            <div className='text-left text-white flex items-center'>
              <Link href="/contact" className='text-yellow-400 text-[15px] underline'>Learn More</Link>
              <FontAwesomeIcon className='ml-2 text-yellow-400' icon={faArrowRight} />
            </div>
          </div>
          {/* Marriage Counseling Card */}
          <div className="flex flex-col gap-4 bg-[#23272f] rounded-xl shadow-lg p-5 text-white text-center items-center w-[300px] hover:scale-105 transition-transform">
            <Image src={marriagecounseling} alt="Marriage Counseling" className="rounded-lg w-full h-[140px] object-cover mb-2" />
            <h2 className="text-2xl font-semibold">Marriage Counseling</h2>
            <p className='text-gray-300 text-left'>Strengthen your marriage, improve communication, and rediscover connection. Our counselors help couples build lasting, loving partnerships.</p>
            <div className='text-left text-white flex items-center'>
              <Link href="/contact" className='text-yellow-400 text-[15px] underline'>Learn More</Link>
              <FontAwesomeIcon className='ml-2 text-yellow-400' icon={faArrowRight} />
            </div>
          </div>
          {/* Closer Walk With God Card */}
          <div className="flex flex-col gap-4 bg-[#23272f] rounded-xl shadow-lg p-5 text-white text-center items-center w-[300px] hover:scale-105 transition-transform">
            <Image src={christiancounseling} alt="Closer Walk With God" className="rounded-lg w-full h-[140px] object-cover mb-2" />
            <h2 className="text-2xl font-semibold">Closer Walk With God</h2>
            <p className='text-gray-300 text-left'>Experience spiritual growth and renewed faith through our Christian counseling. We guide you on your journey to a deeper, more meaningful relationship with God.</p>
            <div className='text-left text-white flex items-center'>
              <Link href="/contact" className='text-yellow-400 text-[15px] underline'>Learn More</Link>
              <FontAwesomeIcon className='ml-2 text-yellow-400' icon={faArrowRight} />
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr className="w-[90%] m-auto text-white" />

{/* Engagement */}
<div className="flex justify-center items-center flex-wrap w-[100%] gap-5 ">

  <div className="flex  justify-around items-center  w-[100%]">
  <h2 className="ourServicesTitle text-4xl w-[30%] text-left mb-[50px] ">Transformative Counseling</h2>
  <h2 className="ourServicesTitle text-[30px] text-left font-bold w-[40%] mb-[50px] ">Strengthen your relationships and discover new hope for your family.</h2>

    </div>

    <div className=" engagement w-[100%] flex flex-wrap justify-around items-center align-left "> 
      <Image src={familybg} alt="hero" className="heroImage w-[30%] align-left m" />

     <div className="  engagementinfo flex  justify-center items-center  w-[40%]">

        <div className=' engagementinfo1 w-[50%] text-left mt-[-50px]'>
          <h2 className="text-2xl text-white ">Ready to Get Help?</h2>
          <p className="text-gray-400 text-left w-[80%]">Take the first step toward healing and growth. Our team is here to listen, support, and guide you every step of the way.</p>
          <div className='text-left text-white flex'>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-black text-[15px] underline '>Learn More</Link></p>
          <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400  ml-[5px]' icon={faArrowRight} />
          </div>
        </div>

        <div className='.engagementinfo1 w-[50%] text-left mt-[-50px]'>
          <h2 className="text-2xl text-white">Christian Counseling</h2>
          <p className="text-gray-400 text-left w-[80%]">Let faith be your foundation. Our Christian counselors offer spiritual guidance and practical tools to help you overcome life&#39;s obstacles.</p>
          <div className='text-left text-white flex'>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-black text-[15px] underline '>Learn More</Link></p>
          <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400 ml-[5px]' icon={faArrowRight} />
          </div>

        </div>

        </div>
      </div>

</div>
<br />
<br />
{/* projects */}
<hr className="w-[90%] m-auto text-white" />
<div className="flex  justify-around items-center  w-[100%]">
  <h2 className="ourServicesTitle text-4xl w-[30%] text-left mb-[50px] ">Refer Someone to S.H.R.M</h2>
  <h2 className="ourServicesTitle text-[30px] text-left font-bold w-[40%] mb-[50px] ">Do you know someone who may need support? We&#39;re here to help.</h2>

    </div>
    <div className="projectstyles w-[100%] flex  justify-around items-center align-left m-[20px] "> 
    <Image src={mentalperson} alt="hero" className="heroImage w-[30%] align-left " />

    <div className='projectstylesinfo w-[40%] text-left mt-[-30px]'>
          <h2 className="text-2xl text-white">Help Us Make a Difference</h2>
          <p className="text-gray-400 text-left w-[80%]">If you notice a friend, family member, or colleague struggling, reach out. Together, we can provide the care and encouragement they need to find hope and healing.</p>
          <button className=" text-black cursor-pointer  mt-[50px]">Get in Touch</button>

        </div>
      </div>
    
    </div>
    <br/>
    
    <hr className="w-[90%] m-auto text-white" />
 
  
    <div className="flex flex-col flex-wrap w-[100%] ">
  <h3 className='justify-left w-full text-white text-[30px] ml-[100px] mb-[30px]'>Stories of Hope</h3>
      <div className=' flex flex-wrap justify-center gap-7 items-center w-[100%]'>
        <div className=" gap-5 ">
          <Image src={mentalHealth} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
          <div className='text-left text-white flex'>
          <p className='text-left mt-[10px] text-white'>Mental Health Success</p>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-[16px] underline '>Learn More</Link></p>
                    <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400  ml-[5px]' icon={faArrowRight} />

          </div>
        </div>
        <div className=" gap-5 ">
          <Image src={marriagecounseling } alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
           <div className='text-left text-white flex'>
          <p className='text-left mt-[10px] text-white'>Marriage Restored</p>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-[15px] underline '>Learn More</Link></p>
                   <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400  ml-[5px]' icon={faArrowRight} />

          </div>
        </div>
        <div className=" gap-5 ">
          <Image src={familycounseling} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
          <div className='text-left text-white flex'>
          <p className='text-left mt-[10px] text-white'>Family Reunited</p>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-[15px] underline '>Learn More</Link></p>
                    <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400  ml-[5px]' icon={faArrowRight} />

          </div>
        </div>
        <div className=" gap-5 ">
          <Image src={christiancounseling} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
          <div className='text-left text-white flex'>
            <p className='text-left mt-[10px] text-white'>Faith Renewed</p>
            <p className='text-left mt-[10px] text-white ml-[10px]' ><Link href="/contact" className='text-yellow-400 text-[15px] underline '>Learn More</Link></p>
          <FontAwesomeIcon className='text-left mt-[18px] text-yellow-400  ml-[5px]' icon={faArrowRight} />
          </div>
        </div>
        
      </div>
    </div>
    <br/>
     <hr className="w-[90%] m-auto text-white" />
     <Review/>
     <br/>
     <br/>
     <Totop />
   </div>
  );
}
