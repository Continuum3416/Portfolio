// "use client"; 
// import { useEffect } from "react";
import Image from "next/image";
import ProfileImage from '../components/ProfileImage';
import EventCard from '../components/ExperienceCard';
import '@fortawesome/fontawesome-free/css/all.min.css';



const exp = [
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Computer Vision Research Intern',
    description: 'Utilized MPI for multi‑core and OpenMP for multi‑thread processing, along with NVIDIA CUDA, to accelerate feature detection, seam finding, image processing, and stitching algorithms to handle real‑time image processing on drones. Achieved a 300% increase in the speed of the image stitching process and decreased the parallel-processing cost by 61%.',
    time_frame: 'Jun. 2024 - Sep. 2024',
    languages_and_tools: ['C++', 'Python','OpenCV', 'MPI', 'OpenMP', 'CUDA', 'CMake'],
  },
  {
    organization: 'California Polytechnic State University, Pomona' ,
    job_title: 'Collision Avoidance and Detection Research Intern',
    description: 'Collaborated with a team of electrical, computer, aerospace, and mechanical engineers to implement collision avoidance and detection software on drones. Utilized Gazebo, Ubuntu, and ORB SLAM3 to compute drone\'s stereo camera trajectory and a sparse 3D reconstruction.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['C++', 'Python', 'ORB_SLAM_3', 'Ubuntu', 'Gazebo', 'PX4', 'CMake'],
  },
  {
    organization: 'SMACS - Webs-for-Clubs' ,
    job_title: 'Web developer',
    description: 'Collaborated with a team of fellow developers to create static and dynamic, functional, and easy‑to‑maintain websites for various clubs at local college. Utilized Node.js, Next.js, and Tailwind CSS to build fully functional and informative websites, aiming at providing information and updating announcements.',
    time_frame: 'Sep. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'Nodejs' , 'Nextjs' , 'Tailwind CSS', 'AOS'],
  },
  {
    organization: 'www.neumannium.com' ,
    job_title: 'Web developer',
    description: 'I am developing an article‑based website dedicated to education, numeric algorithm discussion, and computer physics simulation. This is a website to display my writings about various projects, ranging from physics, mathematics to computer science. Stay tuned, as it will be released soon.',
    time_frame: 'Jul. 2024 - Present',
    languages_and_tools: ['Javascript', 'HTML', 'CSS', 'AOS', 'MathJax'],
  },
  {
    organization: 'Mt. SAC' ,
    job_title: 'Math, Physics, and C.S. Tutor',
    description: 'I tutor various subjects, ranging from math and physics to computer science at Mt. San Antonio College. I work at two positions: embedded tutor, where I conducted after-class tutoring sessions and assisted professors in organizing classwork, and drop-in tutor, where I provided one-on-one tutoring sessions when the students came to me. I also created and distributed comprehensive study notes to support students in understanding math concepts.',
    time_frame: 'Feb. 2024 - Present',
    languages_and_tools: ['Differential Equations', 'Linear Algebra', 'C++', 'Java', 'Calculus', 'Classical Mechanics'],
  },
  {
    organization: 'Chladni Patterns Generator' ,
    job_title: 'Personal Project',
    description: 'I developed a Python application to generate Chladni patterns on square and circular domains. The patterns are obtained by solving for eigenvalues problems of the two-dimensional wave equation using separation of variables.',
    time_frame: 'Feb. 2024 - May. 2024',
    languages_and_tools: ['Python', 'PDE', 'C++', 'Numpy'],
    link: 'https://github.com/Continuum3416/Chladni-Patterns-Generator'
  },
];


//
export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
      
      <div className="grid grid-rows-[0px_1fr_5px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start" id="main">
        <div className="mr-auto ml-auto" data-aos="zoom-in">
        <ProfileImage />
        </div>

        <div className="text-center font-Jura mr-auto ml-auto text-4xl" data-aos="zoom-in">
          Don <span className="font-bold">Le</span>
        </div>

        <div className="text-center font-Jura mr-auto ml-auto text-xl text-blue-700" data-aos="zoom-in">
          SOFTWARE AND WEB DEV
        </div>
        
        <p className="text-center font-Jura mr-auto ml-auto" data-aos="zoom-in">
          I am an engineering student with experience in web-development, computer vision, and scientific programming.
        </p>

        <p className="text-center font-Jura mr-auto ml-auto" data-aos="zoom-in">
          <span className="font-bold">Languages:</span> C/C++, Python, TeX, Javascript, HTML5, CSS3, Assembly [x86], Java, Matlab
        </p>

        <p className="text-center font-Jura mr-auto ml-auto w-full md:w-4/5" data-aos="zoom-in">
          My work so far consists mostly of image-processing, collision-detection with drones, and physics simulation. As mentioned, I also do web-development, either in vanilla JS with CSS3, or Next.js with Tailwind CSS (I was threatened by my friend to use Tailwind).
        </p>


        <div className="flex justify-center space-x-5 flex-wrap mr-auto ml-auto">
        <a href="mailto:ledongduu@gmail.com" className="hover:bg-gray-400 p-3 rounded-full transition duration-300 ease-in-out" data-aos="fade-in" data-aos-delay="200" data-aos-easing="ease-in-out">
          <i className="fas fa-envelope fa-xl"></i>
        </a>
        <a href="https://github.com/Continuum3416" target="_blank" className="hover:bg-gray-400 p-2 rounded-full transition duration-300 ease-in-out" data-aos="fade-in" data-aos-delay="400" data-aos-easing="ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z"></path>
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/don-d-le/" target="_blank" className="hover:bg-gray-400 p-2 rounded-full transition duration-300 ease-in-out" data-aos="fade-in" data-aos-delay="600" data-aos-easing="ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"></path>
          </svg>
        </a>

        <a href="https://discordapp.com/users/750019342518714398" target="_blank" className="hover:bg-gray-400 p-2 rounded-full transition duration-300 ease-in-out" data-aos="fade-in" data-aos-delay="800" data-aos-easing="ease-in-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M26.413,6.536c-1.971-.902-4.052-1.543-6.189-1.904-.292,.523-.557,1.061-.793,1.612-2.277-.343-4.592-.343-6.869,0-.236-.551-.5-1.089-.793-1.612-2.139,.365-4.221,1.006-6.194,1.909C1.658,12.336,.596,17.987,1.127,23.558h0c2.294,1.695,4.861,2.984,7.591,3.811,.615-.827,1.158-1.704,1.626-2.622-.888-.332-1.744-.741-2.56-1.222,.215-.156,.425-.316,.628-.472,4.806,2.26,10.37,2.26,15.177,0,.205,.168,.415,.328,.628,.472-.817,.483-1.676,.892-2.565,1.225,.467,.918,1.011,1.794,1.626,2.619,2.732-.824,5.301-2.112,7.596-3.808h0c.623-6.461-1.064-12.06-4.46-17.025Zm-15.396,13.596c-1.479,0-2.702-1.343-2.702-2.994s1.18-3.006,2.697-3.006,2.73,1.354,2.704,3.006-1.192,2.994-2.699,2.994Zm9.967,0c-1.482,0-2.699-1.343-2.699-2.994s1.18-3.006,2.699-3.006,2.723,1.354,2.697,3.006-1.189,2.994-2.697,2.994Z"></path></svg>
        </a>  
        <a href="https://www.instagram.com/don.d.le/" target="_blank" className="hover:bg-gray-400 p-2 rounded-full transition duration-300 ease-in-out" data-aos="fade-in" data-aos-delay="1000" data-aos-easing="ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path></svg>
        </a>  
      </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-t-2 border-blue-700 pt-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://drive.google.com/drive/folders/1yW-UBJ5ur0TDWlJ5QnCJdM8DC0jsSjTw?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          View my CV
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 overscroll-none"
          href="#projects"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          View my Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          View my Blogs
        </a>
      </footer>

    </div>
    <div className="bg-black text-white items-center justify-items-center p-4 pt-20 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div id="projects" className="text-center font-Jura mr-auto ml-auto text-5xl mt-5 mb-14">Projects and Experience</div>

    <div className="">
      <div className="grid grid-cols-1 ms:grid-cols-2 gap-4">
        {exp.map((job, index) => (
          <EventCard key={index} info={job} />
        ))}
      </div>
    </div>

      
    </div>
      <footer className="bg-black text-center text-white font-Jura pb-6">Made with Next, Tailwind, and AOS  •  <a target="_blank" className="hover:text-blue-300" href="https://github.com/Continuum3416/Portfolio">Github</a></footer>
    </div>

  );
}


