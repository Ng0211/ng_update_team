import React from "react";
import TeamCard from "../components/ui/TeamCard";

import PrasoonRaj from "../assets/team/PrasoonRaj.jpg"
import defaultImage from "../assets/team/default.png"
import KrishAgrawal from "../assets/team/KrishAgrawal.jpeg"  
import BavneetSinghBrar from "../assets/team/BavneetSinghBrar.png"
import KeshavGupta from "../assets/team/KeshavGupta.jpg"
import AkshitJain from "../assets/team/AkshitJain.jpg"
import RohitKumar from "../assets/team/RohitKumar.jpg"
import SayantaniGhosh from "../assets/team/SayantaniGhosh.png"
import ParteekKumar from "../assets/team/ParteekKumar.jpeg"
import AnhadGoel from "../assets/team/AnhadGoel.jpg"
import DeerghPatel from "../assets/team/DeerghPatel.jpg"
import NamitGupta from "../assets/team/NamitGupta.jpg"
import ChiragDagar from "../assets/team/ChiragDagar.jpg"
import PulkitKedia from "../assets/team/PulkitKedia.jpg"
import MaitriSurana from "../assets/team/MaitriSurana.jpg"
import AbhishekSinghDangi from "../assets/team/AbhishekSinghDangi.jpg"
import MohammadEmaadArif from "../assets/team/MohammadEmaadArif.jpg"
import SanyamGarg from "../assets/team/SanyamGarg.jpg"
import IraSingh from "../assets/team/IraSingh.png"
import AmolGupta from "../assets/team/AmolGupta.jpg"
import RishitSrivastava from "../assets/team/RishitSrivastava.jpeg"
import AnshulGoyal from "../assets/team/AnshulGoyal.jpeg"
import AbrittyKisku from "../assets/team/AbrittyKisku.png"
import ArnabDas from "../assets/team/ArnabDas.png"
import RohanGupta from "../assets/team/RohanGupta.jpg"
import GaurangAgrawal from "../assets/team/GaurangAgarwal.jpeg"
import AakashSingh from "../assets/team/AakashSingh.jpg"
import DakshitaGarg from "../assets/team/DakshitaGarg.jpg"
import ApoorvSharma from "../assets/team/ApoorvSharma.jpg"
import SrishtiSahu from "../assets/team/SrishtiSahu.jpg"
import NaitikSingla from "../assets/team/NaitikSingla.jpg"
import AshwaryPrasad from "../assets/team/AshwaryPrasad.jpg"
import TanujaLasyal from "../assets/team/TanujaLasyal.jpeg"
import DeveshSharma from "../assets/team/DeveshSharma.jpg"
import RishabhJoshi from "../assets/team/RishabhJoshi.jpg"
import HemangMathur from "../assets/team/HemangMathur.jpg"
import ArinChhabra from "../assets/team/ArinChhabra.jpg"
import HarshRajSingh from "../assets/team/HarshRajSingh.jpg"
import RachitAtulRambhia from "../assets/team/RachitAtulRambhia.png"
import YuvrajSinghShekhawat from "../assets/team/YuvrajSinghShekhawat.jpg"
import TusharSharma from "../assets/team/TusharSharma.jpg"
import KanikaArya from "../assets/team/KanikaArya.jpeg"
import NavneetSingh from "../assets/team/NavneetSingh.jpg"
import VANSHIKA from "../assets/team/VANSHIKA.jpg"
import AlokKumarSah from "../assets/team/AlokKumarSah.png"
import SaarajGoel from "../assets/team/SaarajGoel.jpg"
import SagnikGhosh from "../assets/team/SagnikGhosh.jpg"
import KshitijSnehalkumarBokare from "../assets/team/KshitijSnehalkumarBokare.jpg"
import AdityaBanka from "../assets/team/AdityaBanka.jpg"
import RuchirrLodha from "../assets/team/RuchirrLodha.jpg"
import RahulKumar from "../assets/team/RahulKumar.jpeg"
import PushkinMangla from "../assets/team/PushkinMangla.jpeg"
import GopalPrasadPatel from "../assets/team/GopalPrasadPatel.jpeg"
import Director from "../assets/team/Director.jpg"
import DSA from "../assets/team/DSA.jpg"
import ADSW from "../assets/team/ADSW.jpg"
import ADSE from "../assets/team/ADSE.jpg"
import ADHM from "../assets/team/ADHM.jpg"
import Utkarsh from "../assets/team/Utkarsh.jpeg"
import ShaluDeshwal from "../assets/team/ShaluDeshwal.jpeg"

// ...add more imports here for each image in assets/team...
// ...existing code...

function Teams() {
  const team = [

  // ─── Director ───────────────────────────────────────────
  {
    name: "Prof. Rangana Banerjee",
    role: "Director",
    image: Director,
    email: "mailto:director@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },
  {
    name: "Prof. B. K. Panigrahi",
    role: "Dean of Student Affairs",
    image: DSA,
    email: "mailto:director@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },
  // ─── Associate Deans ─────────────────────────────────────
  {
    name: "Prof. Sreedevi Upadhyayula",
    role: "Associate Dean Student Welfare",
    image: ADSW,
    email: "mailto:adsw@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },
  {
    name: "Prof. S. Pradyumna",
    role: "Associate Dean Student Events",
    image: ADSE,
    email: "mailto:adse@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },
  {
    name: "Prof. Prabal Talukdar",
    role: "Associate Dean Hostel Management",
    image: ADHM,
    email: "mailto:adhm@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },

  // ─── SAC Team ─────────────────────────────────────────────

  {
    name: "Prasoon Raj",
    role: "SAC Deputy General Secretary",
    image: PrasoonRaj,
    email: "mailto:ee1230708@iitd.ac.in",
    phone: "9958864594",
    instagram: "https://www.instagram.com/trex_4096/",
    linkedin: "https://www.linkedin.com/in/prasoon-raj-4b0369289/",
  },
    {
    name: "Utkarsh",
    role: "SAC General Secretary",
    image: Utkarsh,
    email: "mailto:utkarsh@iitd.ac.in",
    phone: "0000000000",
    instagram: "",
    linkedin: "",
  },
  {
    name: "Gopal Prasad Patel",
    role: "SAC Deputy General Secretary (PG)",
    image: GopalPrasadPatel,
    email: "mailto:cez228414@iitd.ac.in",
    phone: "7982052877",
    instagram: "",
    linkedin: "",
  },

  // ─── SAC Secretaries ──────────────────────────────────────
  {
    name: "Bavneet Singh Brar",
    role: "Udaigiri SAC Secy",
    image: BavneetSinghBrar,
    email: "mailto:Ph1240162@iitd.ac.in",
    phone: "8302040045",
    instagram: "https://www.instagram.com/bav_neet/",
    linkedin: "https://www.linkedin.com/in/bavneet-brar-4a4687326?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
    {
    name: "Gaurang Agrawal",
    role: "Satpura SAC Secy",
    image: GaurangAgrawal,
    email: "mailto:dd1244753@iitd.ac.in",
    phone: "9529417616",
    instagram: "https://www.instagram.com/gauraang.agrawal/",
    linkedin: "https://www.linkedin.com/in/gaurang-agrawal-7b455b220",
  },
  {
    name: "Rohit Kumar",
    role: "Girnar SAC Secy",
    image: RohitKumar,
    email: "mailto:PH1240010@iitd.ac.in",
    phone: "8252771065",
    instagram: "https://www.instagram.com/ro_hit_3.1/",
    linkedin: "https://www.linkedin.com/in/rohit-kumar-aa896a313/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8O9tLp7CSCGBZBJM7GgUWA%3D%3D",
  },
  {
    name: "Parteek Kumar",
    role: "Nilgiri SAC Secy",
    image: ParteekKumar,
    email: "mailto:ch7240144@iitd.ac.in",
    phone: "7589044443",
    instagram: "https://www.instagram.com/_parteeeeek_/",
    linkedin: "",
  },
  {
    name: "Anhad Goel",
    role: "Aravali SAC Secy",
    image: AnhadGoel,
    email: "mailto:ms1240353@iitd.ac.in",
    phone: "7827908120",
    instagram: "https://www.instagram.com/anhadgoel/",
    linkedin: "https://www.linkedin.com/in/anhad-goel-b667a5310?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Deergh Patel",
    role: "Jwalamukhi SAC Secy",
    image: DeerghPatel,
    email: "mailto:bb1240583@iitd.ac.in",
    phone: "9099555761",
    instagram: "https://www.instagram.com/dijon.patel/",
    linkedin: "https://linkedin.com/in/deergh-patel",
  },
  {
    name: "Namit Gupta",
    role: "Vindhyachal SAC Secy",
    image: NamitGupta,
    email: "mailto:ce1240971@civil.iitd.ac.in",
    phone: "7983418326",
    instagram: "https://www.instagram.com/namit.gupta._/",
    linkedin: "https://www.linkedin.com/in/namit-gupta-637395347/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7yoQMF8RGyKNtp0YXb2SQ%3D%3D",
  },
  {
    name: "Chirag Dagar",
    role: "Shivalik SAC Secy",
    image: ChiragDagar,
    email: "mailto:ms1240580@iitd.ac.in",
    phone: "7988744741",
    instagram: "https://www.instagram.com/chirag_dagar.30/",
    linkedin: "https://www.linkedin.com/in/chirag-dagar",
  },
  {
    name: "Maitri Surana",
    role: "Himadri SAC Secy",
    image: MaitriSurana,
    email: "mailto:tt1241042@iitd.ac.in",
    phone: "8949881229",
    instagram: "https://www.instagram.com/maitri_4848/",
    linkedin: "https://www.linkedin.com/in/maitri-surana-0a3192360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Abhishek Singh Dangi",
    role: "Karakoram SAC Secy",
    image: AbhishekSinghDangi,
    email: "mailto:es1231113@iitd.ac.in",
    phone: "9630271254",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/abhisheksinghdangi",
  },
  {
    name: "Mohammad Emaad arif",
    role: "Kumaon SAC Secy",
    image: MohammadEmaadArif,
    email: "mailto:cs1240157@iitd.ac.in",
    phone: "9606763770",
    instagram: "https://www.instagram.com/infpotential6/",
    linkedin: "https://www.linkedin.com/in/emaad-arif-707353394?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Abritty Kisku",
    role: "Sahyadri SAC Secy",
    image: AbrittyKisku,
    email: "mailto:bmz248428@iitd.ac.in",
    phone: "9382318961",
    instagram: "https://www.instagram.com/7piercings/",
    linkedin: "https://www.linkedin.com/in/abritty-kisku/",
  },
  {
    name: "Arnab Das",
    role: "Karakoram SAC Secy",
    image: ArnabDas,
    email: "mailto:ms1241034@iitd.ac.in",
    phone: "9832437167",
    instagram: "https://www.instagram.com/arnabdas_1034/",
    linkedin: "https://www.linkedin.com/in/arnabdas1034",
  },

  {
    name: "Dakshita Garg",
    role: "Kailash SAC Secy",
    image: DakshitaGarg,
    email: "mailto:ce1240078@iitd.ac.in",
    phone: "6375652408",
    instagram: "https://www.instagram.com/garg.dakshita06/",
    linkedin: "https://www.linkedin.com/in/dakshita-garg-a8986530a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Tanuja Lasyal",
    role: "Saptagiri SAC Secy",
    image: TanujaLasyal,
    email: "mailto:smz248073@dms.iitd.ac.in",
    phone: "9259206528",
    instagram: "https://www.instagram.com/Tanuja.lasyal/",
    linkedin: "https://www.linkedin.com/in/tanuja-lasyal-6b84b6194",
  },
  {
    name: "Arin Chhabra",
    role: "Zanskar SAC Secy",
    image: ArinChhabra,
    email: "mailto:bb1241013@dbeb.iitd.ac.in",
    phone: "8708205095",
    instagram: "https://www.instagram.com/arin_pvtt/",
    linkedin: "https://www.linkedin.com/in/arinchhabra/",
  },
  {
    name: "VANSHIKA",
    role: "Nalanda SAC Secy",
    image: VANSHIKA,
    email: "mailto:mas257109@maths.iitd.ac.in",
    phone: "9592685498",
    instagram: "https://www.instagram.com/_vanshika_111/",
    linkedin: "https://www.linkedin.com/in/vanshika-garg-b24ab3375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Shalu Deshwal",
    role: "Saptagiri SAC Secy",
    image: ShaluDeshwal,
    email: "mailto:cyz228286@iitd.ac.in",
    phone: "8295785288",
    instagram: "",
    linkedin: "",
  },

  // ─── Design & Tech Team ──────────────────────────────────
  {
    name: "Pushkin Mangla",
    role: "SAC Tech Secretary",
    image: PushkinMangla,
    email: "mailto:cs5240081@iitd.ac.in",
    phone: "7425983591",
    instagram: "https://www.instagram.com/____actually___anonymous/",
    linkedin: "https://www.linkedin.com/in/pushkin-mangla-a02098321/",
  },
  {
    name: "Aditya Banka",
    role: "SAC Design Secretary",
    image: AdityaBanka,
    email: "mailto:ch1240687@iitd.ac.in",
    phone: "8851300023",
    instagram: "https://www.instagram.com/adityabanka_/",
    linkedin: "https://www.linkedin.com/in/aditya-banka-55b151375/",
  },


  // ─── Board General & Deputy General Secretaries ──────────
     {
    name: "Sanyam Garg",
    role: "BHM Deputy General Secretary",
    image: SanyamGarg,
    email: "mailto:mt1230732@iitd.ac.in",
    phone: "7014374416",
    instagram: "https://www.instagram.com/sanyam.garg_304/",
    linkedin: "https://www.linkedin.com/in/sanyam-garg28/",
  },
   {
    name: "Naitik Singla",
    role: "BHM General Secretary",
    image: NaitikSingla,
    email: "mailto:ee1230519@iitd.ac.in",
    phone: "7011043806",
    instagram: "https://www.instagram.com/naitiksingla22/",
    linkedin: "https://linkedin.com/in/naitiksingla",
  },
     {
    name: "Apoorv Sharma",
    role: "BHM Deputy General Secretary",
    image: ApoorvSharma,
    email: "mailto:ee3230996@iitd.ac.in",
    phone: "9783399711",
    instagram: "https://www.instagram.com/a_p00rv/",
    linkedin: "https://www.linkedin.com/in/apoorv-sharma-ab0889288/",
  },
     {
    name: "Hemang Mathur",
    role: "BSP General Secretary",
    image: HemangMathur,
    email: "mailto:me1230083@iitd.ac.in",
    phone: "8287454037",
    instagram: "https://www.instagram.com/hehehemuuu/",
    linkedin: "https://www.linkedin.com/in/hemang-mathur-88326a28a/",
  },
    {
    name: "Rishit Srivastava",
    role: "BSP Deputy General Secretary",
    image: RishitSrivastava,
    email: "mailto:es1231088@iitd.ac.in",
    phone: "9651321520",
    instagram: "https://www.instagram.com/_.rishit.___/",
    linkedin: "https://www.linkedin.com/in/rishit-srivastava-9894211b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },

  
     {
    name: "Yuvraj singh shekhawat",
    role: "BSA Deputy General Secretary",
    image: YuvrajSinghShekhawat,
    email: "mailto:ce1231209@iitd.ac.in",
    phone: "9549058156",
    instagram: "https://www.instagram.com/yuvrajsinghshekhawat30/",
    linkedin: "https://www.linkedin.com/in/yuvraj-singh-shekhawat-289a71320/",
  },
  {
    name: "Rachit Atul Rambhia",
    role: "BSA General Secretary",
    image: RachitAtulRambhia,
    email: "mailto:ms1231090@iitd.ac.in",
    phone: "8454081968",
    instagram: "https://www.instagram.com/rachit_7627/",
    linkedin: "https://www.linkedin.com/in/rachit-rambhia-iitd1201",
  },
    {
    name: "Name",
    role: "BSA Deputy General Secretary (PG)",
    image: defaultImage,
    email: "",
    phone: "",
    instagram: "",
    linkedin: "",
  },
    {
    name: "Amol Gupta",
    role: "BSW General Secretary",
    image: AmolGupta,
    email: "mailto:ch1230906@iitd.ac.in",
    phone: "9999519678",
    instagram: "https://www.instagram.com/amol_gupta05/",
    linkedin: "https://www.linkedin.com/in/amolgupta05",
  },

  {
    name: "Devesh Sharma",
    role: "BSW Deputy General Secretary",
    image: DeveshSharma,
    email: "mailto:ce1231010@iitd.ac.in",
    phone: "7668366340",
    instagram: "https://www.instagram.com/devesh_1811/",
    linkedin: "https://www.linkedin.com/in/devesh-sharma-bb931730a/",
  },
    {
    name: "Akshit Jain",
    role: "BRCA General Secretary",
    image: AkshitJain,
    email: "mailto:bb1230860@iitd.ac.in",
    phone: "9893084255",
    instagram: "https://www.instagram.com/_akshitjain__/",
    linkedin: "https://www.linkedin.com/in/akshitjain1510",
  },

  {
    name: "Rishabh Joshi",
    role: "BRCA Deputy General Secretary",
    image: RishabhJoshi,
    email: "mailto:ch7230399@iitd.ac.in",
    phone: "8077612330",
    instagram: "https://www.instagram.com/rishabhhjoshii/",
    linkedin: "https://www.linkedin.com/in/rishabh-joshi-645243284/",
  },


  // ─── House Secretaries ───────────────────────────────────
  {
    name: "Keshav Gupta",
    role: "Aravali House Secy",
    image: KeshavGupta,
    email: "mailto:me2330002@iitd.ac.in",
    phone: "8860623981",
    instagram: "https://www.instagram.com/keshav_2968/",
    linkedin: "https://www.linkedin.com/in/keshavgupta2968?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Sayantani Ghosh",
    role: "Sahyadri House Secy",
    image: SayantaniGhosh,
    email: "mailto:srz248218@sire.iitd.ac.in",
    phone: "8336906802",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/sayantani-ghosh-060653252/",
  },
  {
    name: "Pulkit Kedia",
    role: "Satpura House Secy",
    image: PulkitKedia,
    email: "mailto:ee1231057@iitd.ac.in",
    phone: "6377402920",
    instagram: "https://www.instagram.com/pulkit_k26/",
    linkedin: "https://linkedin.com/in/pulkit-kedia-a2277827b",
  },
  {
    name: "Ira Singh",
    role: "Kailash House Secy",
    image: IraSingh,
    email: "mailto:ee1230228@iitd.ac.in",
    phone: "6377750130",
    instagram: "https://www.instagram.com/i._.singh/",
    linkedin: "https://www.linkedin.com/in/isingh67",
  },
  {
    name: "Anshul goyal",
    role: "Vindhyachal House Secy",
    image: AnshulGoyal,
    email: "mailto:me1231174@iitd.ac.in",
    phone: "7014932146",
    instagram: "https://www.instagram.com/anshulgoyal23_03/",
    linkedin: "https://www.linkedin.com/in/anshul-goyal14?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Rohan Gupta",
    role: "Zanskar House Secy",
    image: RohanGupta,
    email: "mailto:me1230057@iitd.ac.in",
    phone: "8847574501",
    instagram: "https://www.instagram.com/rohan_gupta1348/",
    linkedin: "https://www.linkedin.com/in/rohangupta1348",
  },
  {
    name: "Aakash Singh",
    role: "Udaigiri House Secy",
    image: AakashSingh,
    email: "mailto:ee1231167@iitd.ac.in",
    phone: "9417330270",
    instagram: "https://www.instagram.com/aakashsingh_10/",
    linkedin: "",
  },
  {
    name: "Srishti Sahu",
    role: "Himadri House Secy",
    image: SrishtiSahu,
    email: "mailto:ce1231073@iitd.ac.in",
    phone: "6265605541",
    instagram: "https://www.instagram.com/srishti_8976/",
    linkedin: "https://www.linkedin.com/in/srishti-sahu-iitd/",
  },
  {
    name: "Ashwary Prasad",
    role: "Nilgiri House Secy",
    image: AshwaryPrasad,
    email: "mailto:ch1230591@iitd.ac.in",
    phone: "8905460230",
    instagram: "https://www.instagram.com/ashwary77777/",
    linkedin: "https://www.linkedin.com/in/ashwary-prasad-410983375/?skipRedirect=true",
  },
  {
    name: "Rahul Kumar",
    role: "Shivalik House Secy",
    image: RahulKumar,
    email: "mailto:bb1230201@iitd.ac.in",
    phone: "9602121112",
    instagram: "https://www.instagram.com/_04_tenet/",
    linkedin: "https://www.linkedin.com/in/rahul-kumar-iitdelhi",
  },
  {
    name: "Krish Agrawal",
    role: "Kumaon House Secy",
    image: KrishAgrawal,
    email: "mailto:ms1230214@iitd.ac.in",
    phone: "8709820674",
    instagram: "https://www.instagram.com/krrish__14/",
    linkedin: "https://www.linkedin.com/in/krish-agrawal-b726b1291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Harsh Raj Singh",
    role: "Girnar House Secy",
    image: HarshRajSingh,
    email: "mailto:tt1230537@iitd.ac.in",
    phone: "7389246630",
    instagram: "https://www.instagram.com/hars_harchive/",
    linkedin: "https://www.linkedin.com/in/harsh-raj-singh-b82202288?utm_source=share_via&utm_content=profile&utm_medium=member_android.",
  },
  {
    name: "Tushar Sharma",
    role: "Jwalamukhi House Secy",
    image: TusharSharma,
    email: "mailto:ch7230310@iitd.ac.in",
    phone: "7355872032",
    instagram: "https://www.instagram.com/tushar.sh09/",
    linkedin: "https://www.linkedin.com/in/tushar-sharma-b1ba72286/",
  },
  {
    name: "Kanika arya",
    role: "Nalanda House Secy",
    image: KanikaArya,
    email: "mailto:phs257199@physics.iitd.ac.in",
    phone: "9548741942",
    instagram: "https://www.instagram.com/kanikaarya1550/",
    linkedin: "https://www.linkedin.com/in/kanika-arya-1b3326374?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Navneet Singh",
    role: "Dronagiri House Secy",
    image: NavneetSingh,
    email: "mailto:phm242162@iitd.ac.in",
    phone: "9896417084",
    instagram: "https://www.instagram.com/sardar.navneetsingh/",
    linkedin: "https://www.linkedin.com/in/navneet-singh-b22878198",
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
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Director</h1>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
          {defteam.slice(0,2).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Associate Dean</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(2,5).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">SAC Team</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(5, 8).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-6">SAC Secretaries</h2>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
  {defteam.slice(8, 26).map((person, idx) => (
    <TeamCard key={idx} {...person} />
  ))}
</div>
<h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-6">Design & Tech Team</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
  {defteam.slice(26, 28).map((person, idx) => (
    <TeamCard key={idx} {...person} />
  ))}
</div>

      </div>

      <div className="w-full flex flex-col items-center">
  <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Board Secretaries</h1>

  <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-4">BHM</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
    {defteam.slice(28, 31).map((person, idx) => <TeamCard key={idx} {...person} />)}
  </div>

  <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-4">BSP</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
    {defteam.slice(31, 33).map((person, idx) => <TeamCard key={idx} {...person} />)}
  </div>

  <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-4">BSA</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
    {defteam.slice(33, 36).map((person, idx) => <TeamCard key={idx} {...person} />)}
  </div>

  <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-4">BSW</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
    {defteam.slice(36, 38).map((person, idx) => <TeamCard key={idx} {...person} />)}
  </div>

  <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-4">BRCA</h2>
  <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-16 m-4">
    {defteam.slice(38, 40).map((person, idx) => <TeamCard key={idx} {...person} />)}
  </div>
</div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">House Secretaries</h1>
        <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-evenly justify-items-center m-4">
          {defteam.slice(40,55).map((person, idx) => (
            <TeamCard key={idx} {...person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;
