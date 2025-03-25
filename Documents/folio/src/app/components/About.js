import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="p-10">
      <div className="flex flex-col md:flex-row items-center gap-10 p-10 rounded-lg justify-between content-center mx-auto">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <h1 className="text-center sm:text-6xl md:text-5xl lg:text-6xl font-extrabold text-[#727D73]">ABOUT</h1>
          <p className="text-center sm:text-lg md:text-md font-bold text-[#727D73]">THE AUTHOR</p>
          <div className="w-[250px] md:w-[300px] lg:w-[350px] h-[320px] md:h-[250px] lg:h-[400px] overflow-visible rounded-full">
            <Image
              src="/img/2x2ID.png"
              alt="Profile Picture"
              width={250}
              height={320}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="bg-[#727D73] text-white p-10 md:w-[600px] lg:w-[800px] rounded-3xl drop-shadow-lg flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-6">
            <p className="md:text-md text-justify leading-relaxed">
            Hello! I am Jansen Corpin-Solayao, a Bachelor of Science in Computer Science graduated from Biliran Province State University (BiPSU).
            I love exploring new things and taking on challenges. I am passionate about graphic design, filming, photography, and reading books.
            I completed my internship at the Central Visayas Information Sharing Network (CVISNet) Foundation, where I spent nearly four months.
            During that time, I discovered my true passion—designing. Programming has been one of my greatest challenges, but I truly enjoyed the journey and the learning experience.
            I have learned PHP using the Laravel framework, React Next.js, Flutter, and WordPress.
            I am a dedicated professional, and as a fresh graduate, I am excited to be part of your project and eager to contribute my skills and knowledge acquired during my college years and internship.
            Most importantly, I look forward to gaining knowledge from your team.
            </p>

            {/* Download CV Button */}
            <div className="mt-6 flex justify-left">
              <Link href="files/CV_Solayao-Jansen.pdf" target="_blank">
                <button className="relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#d9d9d9] hover:bg-[#F0F0D7] text-[#727d73] font-bold group py-2 px-4 rounded-lg">
                  <span className="w-56 h-48 rounded bg-[#AAB99A] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-[#727d73] transition-colors duration-300 ease-in-out group-hover:text-white">
                    Preview CV
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full md:w-1/2 space-y-8">
            {[
              { title: "Front-end Development", percent: 50, color: "bg-[#BCCCDC]", hover: "bg-[#89A8B2]" },
              { title: "UI/UX Design", percent: 65, color: "bg-[#89A8B2]", hover: "bg-[#A59D84]" },
              { title: "Graphic Design", percent: 80, color: "bg-[#C1BAA1]", hover: "bg-[#F0F0D7]" },
              { title: "Photography", percent: 90, color: "bg-[#A59D84]", hover: "bg-[#BCCCDC]" },
            ].map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between sm:text-md font-bold">
                  <span>{skill.title}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-[#D9D9D9] rounded-full h-2 mt-1">
                    <div className={`${skill.color} h-2 rounded-full transition-all duration-300 ease-in-out group-hover:${skill.hover}`}
                       style={{ width: `${skill.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
