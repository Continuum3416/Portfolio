import Image from 'next/image';

export default function EventCard({ info }) {
  return (
    <div className="group hover:bg-zinc-900 transition-all duration-200 cursor-pointer font-Jura flex flex-col md:flex-row bg-black shadow-md rounded-lg p-4 mb-4" data-aos="fade-up">
      {/* Left Column: Time Frame */}
      <div className="md:w-1/4 md:pr-4 flex justify-center">
        <span className="text-gray-400 text-base font-semibold pb-2 mb-2 border-b-2 md:border-b-0">{info.time_frame}</span>
      </div>

      {/* Right Column: Job Information */}
      <div className="md:w-3/4">
        <h3 className="text-xl font-bold text-slate-300">{info.organization}</h3>
        <h4 className="text-lg text-gray-500 group-hover:text-green-500">{info.job_title}</h4>
        <p className="mt-2 text-gray-300 pt-3 pb-5 text-justify">{info.description}</p>
        
        {/* Languages and Tools */}
        <div className="mt-2 flex flex-wrap">
          {info.languages_and_tools.map((tool, index) => (
            <div key={index} className="bg-blue-800 text-slate-100 rounded-full px-3 py-1 mr-2 mb-2">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}