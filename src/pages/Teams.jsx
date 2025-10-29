import React from "react";
import TeamCard from "../components/ui/TeamCard";
import AsheshMishra from "../assets/team/AsheshMishra.jpg"
import YogeshTillani from "../assets/team/YogeshTillani.jpeg"
import KeshavKaushik from "../assets/team/KeshavKaushik.jpg"
import ArnavWadhwa from "../assets/team/ArnavWadhwa.jpg"
import RishimaChaturvedi from "../assets/team/RishimaChaturvedi.jpg"
import NamanGupta from "../assets/team/NamanGupta.jpg" 
import ArjunYadav from "../assets/team/ArjunYadav.jpg"
import UtsaviAgrawal from "../assets/team/UtsaviAgrawal.jpg"
import PrasoonRaj from "../assets/team/PrasoonRaj.jpg"
import Sanjana from "../assets/team/Sanjana.jpg"
import SunnySaw from "../assets/team/SunnySaw.jpg"
import ShabdapritiG from "../assets/team/ShabdapritiG.webp"
import AnujAgrawal from "../assets/team/AnujAgrawal.jpg"
import OmThakre from "../assets/team/OmThakre.jpg"
import UtkarshAgrawal from "../assets/team/UtkarshAgrawal.jpg"
import defaultImage from "../assets/team/default.png"
import AdityaMarathe from "../assets/team/AdityaMarathe.jpg"
import VarunMishra from "../assets/team/VarunMishra.jpg"
import RavishJha from "../assets/team/RavishJha.png"
import HarshMohanShrivasatava from "../assets/team/HarshMohanShrivasatava.jpg"
import AnkitaSharma from "../assets/team/AnkitaSharma.jpg"
import HarshParihar from "../assets/team/HarshParihar.jpg"
import PrashantRewar from "../assets/team/PrashantRewar.jpg"
import Namisha from "../assets/team/Namisha.jpg"
import GopalPrasadPatel from "../assets/team/GopalPrasadPatel.jpg"
import RahulKumar from "../assets/team/RahulKumar.jpg"
import VivekKushwah from "../assets/team/VivekKushwah.jpg"
// import HarshitKothari from "../assets/team/HarshitKothari.png"
// ...add more imports here for each image in assets/team...
// ...existing code...

function Teams() {
  const team = [
    {
      name: "Ashesh Mishra",
      role: "General Secretary",
      image: AsheshMishra,
      email: "ee1221155@iitd.ac.in",
      phone: "tel:9695201794",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Yogesh Tillani",
      role: "Deputy General Secretary",
      image: YogeshTillani,
      email: "ce1221537@iitd.ac.in",
      phone: "tel:9755182508",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/yogesh-tillani-7789b3256/",
    },
    {
      name: "Keshav Kaushik",
      role: "Aravali SAC Secretary",
      image: KeshavKaushik,
      email: "",
      phone: "",
      instagram: "https://instagram.com/",
      linkedin: "https://sac.iitd.ac.in/ourteam.html#",
      percentageOffset:"20%",

    },
    {
      name: "Arnav Wadhwa",
      role: "Girnar SAC Secretary",
      image: ArnavWadhwa,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"60%",
    },
    {
      name: "Rishima Chaturvedi",
      role: "Himadri SAC Secretary",
      image: RishimaChaturvedi,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Naman Gupta",
      role: "Jwalamukhi SAC Secretary",
      image: NamanGupta,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"60%",
    },
    {
      name: "Arjun Yadav",
      role: "Karakoram SAC Secretary",
      image: ArjunYadav,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"60%",
    },
    {
      name: "Utsavi Agrawal",
      role: "Kailash SAC Secretary",
      image: UtsaviAgrawal,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Prasoon Raj",
      role: "Kumaon SAC Secretary",
      image: PrasoonRaj,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"60%",
    },
    {
      name: "Sanjana",
      role: "Nalanda SAC Secretary",
      image: Sanjana,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"20%",

    },
    {
      name: "Sunny Saw",
      role: "Nilgiri SAC Secretary",
      image: SunnySaw,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Shabdapriti G",
      role: "Sahyadri SAC Secretary",
      image: ShabdapritiG,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Anuj Agrawal",
      role: "Satpura SAC Secretary",
      image: AnujAgrawal,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"30%",
    },
    {
      name: "Om Thakre",
      role: "Shivalik SAC Secretary",
      image: OmThakre,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Utkarsh Agrawal",
      role: "Udaigiri SAC Secretary",
      image: UtkarshAgrawal,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"30%",

    },
    {
      name: "Shivam Meena",
      role: "Vindhyachal SAC Secretary",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Aditya Marathe",
      role: "M.Tech Representative",
      image: AdityaMarathe,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"30%",

    },
    {
      name: "Varun Mishra",
      role: "M.Tech Representative",
      image: VarunMishra,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Kamlesh Kumar",
      role: "M.Sc Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Anshul Angira",
      role: "PG Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Deepak Kumar",
      role: "Day Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Ravish Jha",
      role: "SwD Representative",
      image: RavishJha,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"20%",
    },
    {
      name: "Harsh Mohan Shrivasatava",
      role: "Research Scholar Representative",
      image: HarshMohanShrivasatava,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
      percentageOffset:"30%",

    },
    {
      name: "Sandeep Kumar",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Subrat Kumar Swain",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Ankita Sharma",
      role: "Research Scholar Representative",
      image: AnkitaSharma,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Sarvesh Pandey",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Shailash Kumar Verma",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Teena",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Gopal Prasad Patel",
      role: "Research Scholar Representative",
      image: GopalPrasadPatel,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Preeti Sharma",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Tanya Batra",
      role: "Research Scholar Representative",
      image: defaultImage,
      email: "",
      phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Harsh Parihar",
      role: "Technical Secretary",
      image: HarshParihar,
      email: "mailto:tt1230494@iitd.ac.in",
      phone: "tel:9269511511",
      instagram: "https://www.instagram.com/nyfikenp007/",
      linkedin: "https://www.linkedin.com/in/harsh-parihar-7777b6219/",
      percentageOffset:"20%",

    },
    {
      name: "Prashant Rewar",
      role: "Technical Secretary",
      image: PrashantRewar,
      email: "mailto:ph1221859@iitd.ac.in",
      phone: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/prashant-rewar-b8785225b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Namisha",
      role: "Design Secretary",
      image: Namisha,
      email: "mailto:ms1230061@iitd.ac.in",
      phone: "tel:9216322036",
      instagram: "https://www.instagram.com/_nxmisha/",
      linkedin: "https://www.linkedin.com/in/namisha-chiravdya-1427321b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      name: "Rahul Kumar",
      role: "Technical Executive",
      image: RahulKumar,
      email: "mailto:ce1240049@iitd.ac.in",
      phone: "",
      instagram: "https://www.instagram.com/rahul_kumar87127/",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-iitd/",
    },
    {
      name: "Soumyavardhan Maheshwari",
      role: "Technical Executive",
      image: defaultImage,
      email: "mailto:ce1240049@iitd.ac.in",
      phone: "",
      instagram: "https://www.instagram.com/soumyavardhan_maheshwari/",
      linkedin: "https://www.linkedin.com/in/soumyavardhan-maheshwari-66b74226a/",
    },
    {
      name: "Vivek Kushwah ",
      role: "Technical Executive",
      image: VivekKushwah,
      email: "mailto:ce1240049@iitd.ac.in",
      phone: "",
      instagram: "https://www.instagram.com/vivek_kushwah9387?igsh=cnh6bzlxMnBqejRi",
      linkedin: "https://www.linkedin.com/in/vivek-kushwah-7467bb326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const DEFAULT_LINKEDIN = "https://www.linkedin.com";
  const DEFAULT_INSTAGRAM = "https://www.instagram.com";

  const defteam = team.map(person => ({
    ...person,
    linkedin: person.linkedin || DEFAULT_LINKEDIN,
    instagram: person.instagram || DEFAULT_INSTAGRAM,
  }));

  return (
    <div className="container mx-auto p-4 bg-[var(--bg-color)] flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">SAC Team Members</h1>
        <div className="w-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-evenly justify-items-center m-4">
          {defteam.slice(0,2).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Secretaries</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(2,16).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Post Graduate Team</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(16, 32).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Design and Tech Team</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(32,38).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
