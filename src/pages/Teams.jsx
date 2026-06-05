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
import NamitGupta from "../assets/team/NamitGupta.jpeg"
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
import ArnabDas from "../assets/team/ArnabDas.jpeg"
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
import DSA from "../assets/team/DSA.png"
import ADSW from "../assets/team/ADSW.jpg"
import ADSE from "../assets/team/ADSE.jpg"
import ADHM from "../assets/team/ADHM.jpg"
import Utkarsh from "../assets/team/Utkarsh.jpeg"
import ShaluDeshwal from "../assets/team/ShaluDeshwal.jpeg"
import VaibhavSingh from "../assets/team/VaibhavSingh.jpeg"
import Srijan from "../assets/team/Srijan.jpeg"


import SHIVAMSaurabh from "../assets/team/SHIVAMSaurabh.jpg"
import AkhileshChoudhary from "../assets/team/AkhileshChoudhary.jpg"
import LakshyaBhardwaj from "../assets/team/LakshyaBhardwaj.png"
import HIMANSHUYadav from "../assets/team/HIMANSHUYadav.jpeg"
import DeepakSharma from "../assets/team/DeepakSharma.jpg"
import SashankSekharSabat from "../assets/team/SashankSekharSabat.jpg"
import VinayakThakur from "../assets/team/VinayakThakur.jpeg"
import SWATIVerma from "../assets/team/SWATIVerma.png"
import VIKASHMishra from "../assets/team/VIKASHMishra.png"
import APURVAYadav from "../assets/team/APURVAYadav.jpeg"
import AYUSHKumar from "../assets/team/AYUSHKumar.jpg"
import Dewanshi from "../assets/team/Dewanshi.jpeg"
import AnkitSayannaMyana from "../assets/team/AnkitSayannaMyana.jpg"
import PrernaPatel from "../assets/team/PrernaPatel.jpg"
import TapatiParashar from "../assets/team/TapatiParashar.jpeg"
import ShwetaDadhwal from "../assets/team/ShwetaDadhwal.png"
import RanjeetMaurya from "../assets/team/RanjeetMaurya.jpeg"

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
      //  phone: "0000000000",
      // instagram: "",
      linkedin: "",
    },
    {
      name: "Prof. B. K. Panigrahi",
      role: "Dean of Student Affairs",
      image: DSA,
      email: "mailto:deansa@admin.iitd.ac.in",
      //phone: "0000000000",
      // instagram: "",
      linkedin: "",
    },
    // ─── Associate Deans ─────────────────────────────────────
    {
      name: "Prof. Sreedevi Upadhyayula",
      role: "Associate Dean Student Welfare",
      image: ADSW,
      email: "mailto:adsw@admin.iitd.ac.in",
      // phone: "0000000000",
      // instagram: "",
      linkedin: "",
    },
    {
      name: "Prof. S. Pradyumna",
      role: "Associate Dean Student Events",
      image: ADSE,
      email: "mailto:adse@admin.iitd.ac.in",
      // phone: "0000000000",
      // instagram: "",
      linkedin: "",
    },
    {
      name: "Prof. Prabal Talukdar",
      role: "Associate Dean Hostel Management",
      image: ADHM,
      email: "mailto:adhm@admin.iitd.ac.in",
      // phone: "0000000000",
      // instagram: "",
      linkedin: "",
    },

    // ─── SAC Team ─────────────────────────────────────────────

    {
      name: "Prasoon Raj",
      role: "SAC Deputy General Secretary",
      image: PrasoonRaj,
      email: "mailto:ee1230708@iitd.ac.in",
      // phone: "9958864594",
      instagram: "https://www.instagram.com/trex_4096/",
      sop: "https://drive.google.com/file/d/1_9WRNuZ7Wttpbdzm9g0NcQkADNYooveC/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/prasoon-raj-4b0369289/",
    },
    {
      name: "Utkarsh Agrawal",
      role: "SAC General Secretary",
      image: Utkarsh,
      email: "mailto:utkarsh@iitd.ac.in",
      // phone: "0000000000",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Gopal Prasad Patel",
      role: "SAC Deputy General Secretary (PG)",
      image: GopalPrasadPatel,
      email: "mailto:cez228414@iitd.ac.in",
      // phone: "7982052877",
      instagram: "",
      sop: "https://docs.google.com/document/d/1JVA8AjLPtaI5CLsHmP2cJd9EsSiL_E7U/edit",
      linkedin: "",
    },

    // ─── SAC Secretaries ──────────────────────────────────────
    {
      name: "Bavneet Singh Brar",
      role: "Udaigiri SAC Secy",
      image: BavneetSinghBrar,
      email: "mailto:Ph1240162@iitd.ac.in",
      // phone: "8302040045",
      instagram: "https://www.instagram.com/bav_neet/",
      sop: "https://drive.google.com/file/d/1BEM74H2exh7um3FzPP8PFSPBqeEjTnZD/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/bavneet-brar-4a4687326?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Gaurang Agrawal",
      role: "Satpura SAC Secy",
      image: GaurangAgrawal,
      email: "mailto:dd1244753@iitd.ac.in",
      // phone: "9529417616",
      instagram: "https://www.instagram.com/gauraang.agrawal/",
      sop: "https://drive.google.com/drive/folders/1-jD2h1yb6jTVcWBtuueH1n7kun7Kpdw4?usp=sharing",
      linkedin: "https://www.linkedin.com/in/gaurang-agrawal-7b455b220",
    },
    {
      name: "Rohit Kumar",
      role: "Girnar SAC Secy",
      image: RohitKumar,
      email: "mailto:PH1240010@iitd.ac.in",
      // phone: "8252771065",
      instagram: "https://www.instagram.com/ro_hit_3.1/",
      sop: "https://drive.google.com/file/d/1fqrk-t2lCO47AJ6GeHL1SSGZhzsZkFmu/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/rohit-kumar-aa896a313/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8O9tLp7CSCGBZBJM7GgUWA%3D%3D",
    },
    {
      name: "Parteek Kumar",
      role: "Nilgiri SAC Secy",
      image: ParteekKumar,
      email: "mailto:ch7240144@iitd.ac.in",
      // phone: "7589044443",
      instagram: "https://www.instagram.com/_parteeeeek_/",
      sop: "https://drive.google.com/file/d/1ySzGy9MqjJqmpSNvyG98EpGa-hCG1nUS/view?usp=share_link",
      linkedin: "",
    },
    {
      name: "Anhad Goel",
      role: "Aravali SAC Secy",
      image: AnhadGoel,
      email: "mailto:ms1240353@iitd.ac.in",
      // phone: "7827908120",
      instagram: "https://www.instagram.com/anhadgoel/",
      sop: "https://drive.google.com/file/d/1ysHybRquLq0tr3dVVCcIewnSasoCSkXk/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/anhad-goel-b667a5310?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
    {
      name: "Deergh Patel",
      role: "Jwalamukhi SAC Secy",
      image: DeerghPatel,
      email: "mailto:bb1240583@iitd.ac.in",
      // phone: "9099555761",
      instagram: "https://www.instagram.com/dijon.patel/",
      sop: "https://drive.google.com/file/d/1Ed1seQfni18hRHQtlYYZO-nxYRMCyk1F/view?usp=drive_link",
      linkedin: "https://linkedin.com/in/deergh-patel",
    },
    {
      name: "Namit Gupta",
      role: "Vindhyachal SAC Secy",
      image: NamitGupta,
      email: "mailto:ce1240971@civil.iitd.ac.in",
      // phone: "7983418326",
      instagram: "https://www.instagram.com/namit.gupta._/",
      sop: "https://drive.google.com/file/d/1W0gnlFAqcklR2oU-b_f5T7rwAZHLULpn/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/namit-gupta-637395347/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7yoQMF8RGyKNtp0YXb2SQ%3D%3D",
    },
    {
      name: "Chirag Dagar",
      role: "Shivalik SAC Secy",
      image: ChiragDagar,
      email: "mailto:ms1240580@iitd.ac.in",
      // phone: "7988744741",
      instagram: "https://www.instagram.com/chirag_dagar.30/",
      sop: "https://drive.google.com/file/d/1a-T65Hgx5q1w75yUa_Tace2_gcdkCD0i/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/chirag-dagar",
    },
    {
      name: "Maitri Surana",
      role: "Himadri SAC Secy",
      image: MaitriSurana,
      email: "mailto:tt1241042@iitd.ac.in",
      // phone: "8949881229",
      instagram: "https://www.instagram.com/maitri_4848/",
      sop: "https://drive.google.com/file/d/1YWxWA6lVkMYB-67-e_to54Lza4Tz1acM/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/maitri-surana-0a3192360?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    {
      name: "Mohammad Emaad arif",
      role: "Kumaon SAC Secy",
      image: MohammadEmaadArif,
      email: "mailto:cs1240157@iitd.ac.in",
      // phone: "9606763770",
      instagram: "https://www.instagram.com/infpotential6/",
      sop: "https://docs.google.com/document/d/1mlAIYY8fBdT2E2lAG1y44IOOP8IHzEzb/edit?usp=drivesdk&ouid=111002908874672489626&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/emaad-arif-707353394?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },

    {
      name: "Arnab Das",
      role: "Karakoram SAC Secy",
      image: ArnabDas,
      email: "mailto:ms1241034@iitd.ac.in",
      // phone: "9832437167",
      instagram: "https://www.instagram.com/arnabdas_1034/",
      sop: "https://drive.google.com/file/d/1eS18P1JyQFAZitMLtWeTuy77KVNxzcf2/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/arnabdas1034",
    },
    {
      name: "Arin Chhabra",
      role: "Zanskar SAC Secy",
      image: ArinChhabra,
      email: "mailto:bb1241013@dbeb.iitd.ac.in",
      // phone: "8708205095",
      instagram: "https://www.instagram.com/arin_pvtt/",
      sop: "https://docs.google.com/document/d/10zXYg7Y_teknka9zHaRGHP95GvfBuH0oaSJDd72GWTQ/edit?usp=sharing",
      linkedin: "https://www.linkedin.com/in/arinchhabra/",
    },
    {
      name: "Dakshita Garg",
      role: "Kailash SAC Secy",
      image: DakshitaGarg,
      email: "mailto:ce1240078@iitd.ac.in",
      // phone: "6375652408",
      instagram: "https://www.instagram.com/garg.dakshita06/",
      sop: "https://drive.google.com/file/d/1yOzY8nrCB9PdIxUecDTaAi5ZCmy_gz99/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/dakshita-garg-a8986530a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },


    {
      name: "Srijan",
      role: "Dronagiri SAC Secy",
      image: Srijan,
      email: "",
      // phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Tanuja Lasyal",
      role: "Saptagiri SAC Secy",
      image: TanujaLasyal,
      email: "mailto:smz248073@dms.iitd.ac.in",
      // phone: "9259206528",
      instagram: "https://www.instagram.com/Tanuja.lasyal/",
      sop: "https://docs.google.com/document/d/1p3-CrXjiHZY3gpYPW9d0SzbM0YUNakT7/edit?usp=sharing&ouid=114719906193724242660&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/tanuja-lasyal-6b84b6194",
    },
    {
      name: "Abritty Kisku",
      role: "Sahyadri SAC Secy",
      image: AbrittyKisku,
      email: "mailto:bmz248428@iitd.ac.in",
      // phone: "9382318961",
      instagram: "https://www.instagram.com/7piercings/",
      sop: "https://drive.google.com/file/d/1V_GYGRhYNQtpjMiBSzvDfPHahPSjdUBw/view?usp=share_link",
      linkedin: "https://www.linkedin.com/in/abritty-kisku/",
    },
    {
      name: "Vanshika",
      role: "Nalanda SAC Secy",
      image: VANSHIKA,
      email: "mailto:mas257109@maths.iitd.ac.in",
      // phone: "9592685498",
      instagram: "https://www.instagram.com/_vanshika_111/",
      sop: "https://drive.google.com/file/d/1DMYy0JioLiCHo4LYP-ZOGlJEPj_nFukl/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/vanshika-garg-b24ab3375?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },

    // ─── PG Representatives ───────────────────────────────────
    {
      name: "Apurva Yadav",
      role: "Research Scholar (Inside Campus)",
      image: APURVAYadav,
      email: "mailto:msz248341@iitd.ac.in",
      // phone: "7355262165",
      instagram: "https://www.instagram.com/av_iitd/",
      sop: "https://drive.google.com/file/d/1_45KRVznW6wyzxA1n5IVmOT3TQdGk_hg/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/apurva-yadav-8343023a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Ayush Kumar",
      role: "Research Scholar (Inside Campus)",
      image: AYUSHKumar,
      email: "mailto:mez258504@mech.iitd.ac.in",
      // phone: "7985940918",
      instagram: "https://www.instagram.com/_ayushmaanbhava/",
      sop: "https://drive.google.com/file/d/1-LgJX2NPjd0sX_3TUC1rkBM-krj1EWXo/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-b8a532228",
    },
    {
      name: "Tapati Parashar",
      role: "Research Scholar (Inside Campus)",
      image: TapatiParashar,
      email: "mailto:cez238124@iitd.ac.in",
      // phone: "7099417015",
      instagram: "https://www.instagram.com/tapati_parashar/",
      sop: "https://drive.google.com/file/d/1tCxGH4QaLJrmuYdv5XnGb5VHT3iQnegc/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/tapati-parashar-8b834a282/",
    },
    {
      name: "Shweta Dadhwal",
      role: "Research Scholar (Inside Campus)",
      image: ShwetaDadhwal,
      email: "mailto:phz248300@iitd.ac.in",
      // phone: "9205951059",
      instagram: "https://www.instagram.com/shweta._.dadhwal/",
      sop: "https://1drv.ms/b/c/1d1520eca1e24183/IQCrxWMCKnkHRJBhk4BeSFieAUpnQffxcOlknBxCKFsGbQg",
      linkedin: "https://www.linkedin.com/in/shweta-dadhwal-581476235?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Lakshya Bhardwaj",
      role: "Research Scholar (Outside Campus)",
      image: LakshyaBhardwaj,
      email: "mailto:mez258045@mech.iitd.ac.in",
      // phone: "8384856937",
      instagram: "",
      sop: "https://drive.google.com/file/d/1jTUESZqWy3OAJkIy0VOoXIcDB5ys0P9y/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/lakshya-bhardwaj-4a1bb1360",
    },

    {
      name: "Vinayak Thakur",
      role: "Research Scholar (Outside Campus)",
      image: VinayakThakur,
      email: "mailto:cez238664@iitd.ac.in",
      // phone: "8219635610",
      instagram: "https://www.instagram.com/vinayak_._thakur/",
      sop: "https://drive.google.com/file/d/17OcbxkJ4wbUC-cybwb2t3XvozbANs_2a/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/vintr01/",
    },
    {
      name: "Dewanshi",
      role: "Research Scholar (Outside Campus)",
      image: Dewanshi,
      email: "mailto:ctz258537@iitd.ac.in",
      // phone: "9773657653",
      instagram: "https://www.instagram.com/dewanshi_ritti3233/",
      linkedin: "",
    },
    {
      name: "Ranjeet Maurya",
      role: "Research Scholar (Outside Campus)",
      image: RanjeetMaurya,
      email: "mailto:phz248296@iitd.ac.in",
      // phone: "7408952412",
      instagram: "https://www.instagram.com/maurya_ranjeet4283/",
      sop: "https://1drv.ms/b/c/1d1520eca1e24183/IQD1aA4TNgaySrCLNRp2uk72AReF_2bwGSSXfqVafm4SZNY",
      linkedin: "https://www.linkedin.com/in/ranjeet-maurya-a17375247",
    },
    {
      name: "Shivam Saurabh",
      role: "Research Scholar (Outside Campus)",
      image: SHIVAMSaurabh,
      email: "mailto:cez258302@iitd.ac.in",
      // phone: "9304525531",
      instagram: "https://www.instagram.com/s_h_i_v_a_msaurabh/",
      sop: "https://drive.google.com/file/d/1I43GLS1hxI8gde5gzBzjKalT86bOIEXi/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/shivam-saurabh74",
    },
    {
      name: "Himanshu Yadav",
      role: "Research Scholar (Outside Campus)",
      image: HIMANSHUYadav,
      email: "mailto:cyz248129@iitd.ac.in",
      // phone: "9306323449",
      instagram: "",
      sop: "https://drive.google.com/file/d/1G9Ywk6yfDskVtOC5nttZ02qrk9bWJqQv/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/himanshu-yadav-iitd",
    },



    {
      name: "Deepak Sharma",
      role: "M. Sc Representative",
      image: DeepakSharma,
      email: "mailto:mas257100@maths.iitd.ac.in",
      // phone: "8302654561",
      instagram: "",
      sop: "https://drive.google.com/file/d/1r9FEEuXxIuLo9s1GTIjUW8lTOFvhF3N9/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/deepak-sharma-4b6536373?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Sashank Sekhar Sabat",
      role: "SwD Representative",
      image: SashankSekharSabat,
      email: "mailto:ee3251689@ee.iitd.ac.in",
      // phone: "9901202106",
      instagram: "https://www.instagram.com/sashanksabat/",
      sop: "https://docs.google.com/document/d/1SgLq6XTIY71_N9sONKuuPqVJtyFf5yVc/edit?usp=sharing&ouid=103262569569818294342&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/sashank-sabat-650977286/?skipRedirect=true",
    },

    {
      name: "Swati Verma",
      role: "PG Program Representative",
      image: SWATIVerma,
      email: "mailto:ppm254510@iitd.ac.in",
      // phone: "9458694216",
      instagram: "https://www.instagram.com/dzwati/",
      sop: "https://docs.google.com/document/d/1vfOYEgbB6_9t8PL5q0XUHF6xIOkpl0iz/edit?usp=drive_link&ouid=111422602024621090094&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/swati-verma-525117297",
    },
    {
      name: "Vikash Mishra",
      role: "M. Tech Representative",
      image: VIKASHMishra,
      email: "mailto:eea252868@ee.iitd.ac.in",
      // phone: "8081234069",
      instagram: "https://www.instagram.com/iit_delhi_lifestyle/",
      sop: "https://drive.google.com/file/d/1-Fe91ueX_i29CxV_bsEONBgepOjpJ8uO/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/vikash2708",
    },



    {
      name: "Ankit Sayanna Myana",
      role: "M. Tech Representative",
      image: AnkitSayannaMyana,
      email: "mailto:che252666@iitd.ac.in",
      // phone: "9987629057",
      instagram: "https://www.instagram.com/2myanankit/",
      sop: "https://drive.google.com/file/d/179jiwxHFnd8Y2bzFXjRuapqEA0OTHHFP/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/ankit-myana-24b5051b9/",
    },
    {
      name: "Prerna Patel",
      role: "Day Scholar Representative",
      image: PrernaPatel,
      email: "mailto:rdz228544@rdat.iitd.ac.in",
      // phone: "8272812664",
      instagram: "https://www.instagram.com/_prerna_vibes/",
      linkedin: "https://linkedin.com/in/prerna-patel-4526061a6",
    },
    {
      name: "Akhilesh Choudhary",
      role: "Married Scholar Representative",
      image: AkhileshChoudhary,
      email: "mailto:bmz248431@iitd.ac.in",
      // phone: "9980506358",
      instagram: "https://www.instagram.com/bmz248431/",
      sop: "https://drive.google.com/file/d/1QVA7A-aHJCmnp48abAkvRHIee0uLsRna/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/akhilesh-choudhary-a27276262/",
    },




    // ─── Design & Tech Team ──────────────────────────────────
    {
      name: "Pushkin Mangla",
      role: "SAC Tech Secretary",
      image: PushkinMangla,
      email: "mailto:cs5240081@iitd.ac.in",
      // phone: "7425983591",
      instagram: "https://www.instagram.com/____actually___anonymous/",
      linkedin: "https://www.linkedin.com/in/pushkin-mangla-a02098321/",
    },
    {
      name: "Aditya Banka",
      role: "SAC Design Secretary",
      image: AdityaBanka,
      email: "mailto:ch1240687@iitd.ac.in",
      // phone: "8851300023",
      instagram: "https://www.instagram.com/adityabanka_/",
      sop: "https://drive.google.com/file/d/1QhxQIJr4IX0Z6WfbxK6P8gdW2NlrGkjp/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/aditya-banka-55b151375/",
    },


    // ─── Board General & Deputy General Secretaries ──────────
    {
      name: "Sanyam Garg",
      role: "BHM Deputy General Secretary (Mess)",
      image: SanyamGarg,
      email: "mailto:mt1230732@iitd.ac.in",
      // phone: "7014374416",
      instagram: "https://www.instagram.com/sanyam.garg_304/",
      sop: "https://drive.google.com/file/d/1bwRJhsSvat4IlSv1fRsUChJNNtquvUl3/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/sanyam-garg28/",
    },
    {
      name: "Naitik Singla",
      role: "BHM General Secretary",
      image: NaitikSingla,
      email: "mailto:ee1230519@iitd.ac.in",
      // phone: "7011043806",
      instagram: "https://www.instagram.com/naitiksingla22/",
      sop: "https://drive.google.com/file/d/1uo_YTql-zyyhYTvULjthWgFw1QH3ybuP/view?usp=sharing",
      linkedin: "https://linkedin.com/in/naitiksingla",
    },
    {
      name: "Apoorv Sharma",
      role: "BHM Deputy General Secretary (Maint)",
      image: ApoorvSharma,
      email: "mailto:ee3230996@iitd.ac.in",
      // phone: "9783399711",
      instagram: "https://www.instagram.com/a_p00rv/",
      sop: "https://docs.google.com/document/d/11ZWWI8LwbMZ9v8FqQqNPGOrQHmmHyvpbJD3nLG7DZ_o/edit?usp=sharing",
      linkedin: "https://www.linkedin.com/in/apoorv-sharma-ab0889288/",
    },
    {
      name: "Hemang Mathur",
      role: "BSP General Secretary",
      image: HemangMathur,
      email: "mailto:me1230083@iitd.ac.in",
      // phone: "8287454037",
      instagram: "https://www.instagram.com/hehehemuuu/",
      sop: "https://drive.google.com/file/d/1bRujIOzuso7ub3LIyZWRbJGJyAevE5qN/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/hemang-mathur-88326a28a/",
    },
    {
      name: "Rishit Srivastava",
      role: "BSP Deputy General Secretary",
      image: RishitSrivastava,
      email: "mailto:es1231088@iitd.ac.in",
      // phone: "9651321520",
      instagram: "https://www.instagram.com/_.rishit.___/",
      sop: "https://drive.google.com/file/d/1nYovlsB3By8JwPp115-QB5rXQRLTxbYo/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/rishit-srivastava-9894211b6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },


    {
      name: "Yuvraj singh shekhawat",
      role: "BSA Deputy General Secretary",
      image: YuvrajSinghShekhawat,
      email: "mailto:ce1231209@iitd.ac.in",
      // phone: "9549058156",
      instagram: "https://www.instagram.com/yuvrajsinghshekhawat30/",
      sop: "https://drive.google.com/file/d/1YF90L7B9cKNY5qSr0FMpAYlOJPfYQJoB/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/yuvraj-singh-shekhawat-289a71320/",
    },
    {
      name: "Rachit Atul Rambhia",
      role: "BSA General Secretary",
      image: RachitAtulRambhia,
      email: "mailto:ms1231090@iitd.ac.in",
      // phone: "8454081968",
      instagram: "https://www.instagram.com/rachit_7627/",
      sop: "https://docs.google.com/document/d/13nIhA8262vnJYuxJJ0FbeT3hrKADu7-x/edit?usp=sharing&ouid=109460623462832786280&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/rachit-rambhia-iitd1201",
    },
    {
      name: "Vaibhav Singh",
      role: "BSA Deputy General Secretary (PG)",
      image: VaibhavSingh,
      email: "",
      // phone: "8840614925",
      instagram: "",
      linkedin: "",
    },
    {
      name: "",
      role: "BSW Deputy General Secretary (Men)",
      image: defaultImage,
      email: "",
      // phone: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "Amol Gupta",
      role: "BSW General Secretary",
      image: AmolGupta,
      email: "mailto:ch1230906@iitd.ac.in",
      // phone: "9999519678",
      instagram: "https://www.instagram.com/amol_gupta05/",
      sop: "https://drive.google.com/file/d/1TRBAc4nE-ZoamUq6-e_uKZ_PZaKak84e/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/amolgupta05",
    },

    {
      name: "Devesh Sharma",
      role: "BSW Deputy General Secretary (Ops)",
      image: DeveshSharma,
      email: "mailto:ce1231010@iitd.ac.in",
      // phone: "7668366340",
      instagram: "https://www.instagram.com/devesh_1811/",
      sop: "https://drive.google.com/file/d/1Ep1m5shLIEaLbDUTbL3lVCsMMZ2jHhO-/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/devesh-sharma-bb931730a/",
    },
    {
      name: "Akshit Jain",
      role: "BRCA General Secretary",
      image: AkshitJain,
      email: "mailto:bb1230860@iitd.ac.in",
      // phone: "9893084255",
      instagram: "https://www.instagram.com/_akshitjain__/",
      sop: "https://drive.google.com/file/d/1kRapP5KO6Zuz2cTI63a9bp3E3SXedU36/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/akshitjain1510",
    },

    {
      name: "Rishabh Joshi",
      role: "BRCA Deputy General Secretary",
      image: RishabhJoshi,
      email: "mailto:ch7230399@iitd.ac.in",
      // phone: "8077612330",
      instagram: "https://www.instagram.com/rishabhhjoshii/",
      sop: "https://drive.google.com/file/d/1p_Y2TCucD3VYeois_SSjXI40YBw6nI_a/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/rishabh-joshi-645243284/",
    },


    // ─── House Secretaries ───────────────────────────────────
    {
      name: "Aakash Singh",
      role: "Udaigiri House Secy",
      image: AakashSingh,
      email: "mailto:ee1231167@iitd.ac.in",
      // phone: "9417330270",
      instagram: "https://www.instagram.com/aakashsingh_10/",
      sop: "https://docs.google.com/document/d/1t_Lj-SrOPSWwgzCZD2dAUHlZ2TwFJCmX1Zm3FV_vnFo/edit?usp=sharing",
      linkedin: "",
    },
    {
      name: "Pulkit Kedia",
      role: "Satpura House Secy",
      image: PulkitKedia,
      email: "mailto:ee1231057@iitd.ac.in",
      // phone: "6377402920",
      instagram: "https://www.instagram.com/pulkit_k26/",
      sop: "https://drive.google.com/file/d/15o4IZ6pDEt1u2oNIk7Kvo4XHbxabB7zN/view?usp=sharing",
      linkedin: "https://linkedin.com/in/pulkit-kedia-a2277827b",
    },
    {
      name: "Harsh Raj Singh",
      role: "Girnar House Secy",
      image: HarshRajSingh,
      email: "mailto:tt1230537@iitd.ac.in",
      // phone: "7389246630",
      instagram: "https://www.instagram.com/hars_harchive/",
      sop: "https://drive.google.com/file/d/1yN7sGsIufjgBg5A5lw2SoBsHRb2_XeKa/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/harsh-raj-singh-b82202288?utm_source=share_via&utm_content=profile&utm_medium=member_android.",
    },
    {
      name: "Ashwary Prasad",
      role: "Nilgiri House Secy",
      image: AshwaryPrasad,
      email: "mailto:ch1230591@iitd.ac.in",
      // phone: "8905460230",
      instagram: "https://www.instagram.com/ashwary77777/",
      sop: "https://drive.google.com/file/d/1LTLNRSjKXOghTkI7_SDdKFaNIXRUxoBk/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/ashwary-prasad-410983375/?skipRedirect=true",
    },
    {
      name: "Keshav Gupta",
      role: "Aravali House Secy",
      image: KeshavGupta,
      email: "mailto:me2330002@iitd.ac.in",
      // phone: "8860623981",
      instagram: "https://www.instagram.com/keshav_2968/",
      sop: "https://drive.google.com/file/d/19eDwuYUBzKI5Qta3Y8MWJ755Qq1KCqze/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/keshavgupta2968?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Tushar Sharma",
      role: "Jwalamukhi House Secy",
      image: TusharSharma,
      email: "mailto:ch7230310@iitd.ac.in",
      // phone: "7355872032",
      instagram: "https://www.instagram.com/tushar.sh09/",
      sop: "https://drive.google.com/file/d/1pp7Ky4FJ6E95uulKLY7K3R8mN7Z8NewD/view?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/tushar-sharma-b1ba72286/",
    },
    {
      name: "Anshul goyal",
      role: "Vindhyachal House Secy",
      image: AnshulGoyal,
      email: "mailto:me1231174@iitd.ac.in",
      // phone: "7014932146",
      instagram: "https://www.instagram.com/anshulgoyal23_03/",
      sop: "https://drive.google.com/file/d/13wLtZe1cbHgyfFUkNTFQodc7wL2HrJUk/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/anshul-goyal14?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    {
      name: "Rahul Kumar",
      role: "Shivalik House Secy",
      image: RahulKumar,
      email: "mailto:bb1230201@iitd.ac.in",
      // phone: "9602121112",
      instagram: "https://www.instagram.com/_04_tenet/",
      sop: "https://drive.google.com/file/d/1JD2JWukM1_bdB6gR0i2D7j4JS1p8y1gb/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-iitdelhi",
    },
    {
      name: "Srishti Sahu",
      role: "Himadri House Secy",
      image: SrishtiSahu,
      email: "mailto:ce1231073@iitd.ac.in",
      // phone: "6265605541",
      instagram: "https://www.instagram.com/srishti_8976/",
      sop: "https://drive.google.com/file/d/1SNmKKj8SARX6Mw5bC6137vQ-gdDLisbz/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/srishti-sahu-iitd/",
    },
    {
      name: "Krish Agrawal",
      role: "Kumaon House Secy",
      image: KrishAgrawal,
      email: "mailto:ms1230214@iitd.ac.in",
      // phone: "8709820674",
      instagram: "https://www.instagram.com/krrish__14/",
      sop: "https://drive.google.com/file/d/1ZasCWltCuHsauxU6lQn-PokQn2tewC32/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/krish-agrawal-b726b1291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Abhishek Singh Dangi",
      role: "Karakoram House Secy",
      image: AbhishekSinghDangi,
      email: "mailto:es1231113@iitd.ac.in",
      // phone: "9630271254",
      instagram: "",
      sop: "https://drive.google.com/drive/folders/1vH9gjaLG9GnKwgumD4mMJ0PzvD0S1Awu",
      linkedin: "https://www.linkedin.com/in/abhisheksinghdangi",
    },
    {
      name: "Rohan Gupta",
      role: "Zanskar House Secy",
      image: RohanGupta,
      email: "mailto:me1230057@iitd.ac.in",
      // phone: "8847574501",
      instagram: "https://www.instagram.com/rohan_gupta1348/",
      sop: "https://drive.google.com/file/d/1VIFnymeS9i9i4UVehNMUpJwXRspR_k6j/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/rohangupta1348",
    },
    {
      name: "Ira Singh",
      role: "Kailash House Secy",
      image: IraSingh,
      email: "mailto:ee1230228@iitd.ac.in",
      // phone: "6377750130",
      instagram: "https://www.instagram.com/i._.singh/",
      sop: "https://docs.google.com/document/d/1-64jiQdEwaTcCU4QtBX7iDiK1ZqIwzfQTeBXjF9JLOw/edit?usp=drive_link",
      linkedin: "https://www.linkedin.com/in/isingh67",
    },
    {
      name: "Navneet Singh",
      role: "Dronagiri House Secy",
      image: NavneetSingh,
      email: "mailto:phm242162@iitd.ac.in",
      // phone: "9896417084",
      instagram: "https://www.instagram.com/sardar.navneetsingh/",
      sop: "https://drive.google.com/file/d/1oJ5raxNYWo-GTmP3RdIczY2qDShDsVRl/view?usp=sharing",
      linkedin: "https://www.linkedin.com/in/navneet-singh-b22878198",
    },
    {
      name: "Shalu Deshwal",
      role: "Saptagiri House Secy",
      image: ShaluDeshwal,
      email: "mailto:cyz228286@iitd.ac.in",
      // phone: "8295785288",
      instagram: "",
      sop: "",
      linkedin: "",
    },


    {
      name: "Sayantani Ghosh",
      role: "Sahyadri House Secy",
      image: SayantaniGhosh,
      email: "mailto:srz248218@sire.iitd.ac.in",
      // phone: "8336906802",
      instagram: "",
      sop: "https://docs.google.com/document/d/1BD3Zfrgo3g2-WPRxe3HmcwtrtO0T2Q7N/edit?usp=sharing&ouid=106464694160140157997&rtpof=true&sd=true",
      linkedin: "https://www.linkedin.com/in/sayantani-ghosh-060653252/",
    },



    {
      name: "Kanika arya",
      role: "Nalanda House Secy",
      image: KanikaArya,
      email: "mailto:phs257199@physics.iitd.ac.in",
      // phone: "9548741942",
      instagram: "https://www.instagram.com/kanikaarya1550/",
      sop: "https://drive.google.com/file/d/18TOjFk5T9nBhXFQ-0s1th4K9j8VrU68v/view?usp=drivesdk",
      linkedin: "https://www.linkedin.com/in/kanika-arya-1b3326374?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },


  ];


  const DEFAULT_LINKEDIN = "https://www.linkedin.com";
  const DEFAULT_INSTAGRAM = "https://www.instagram.com";
  const DEFAULT_EMAIL = "mailto:";

  const defteam = team.map(person => ({
    ...person,
    linkedin: person.linkedin || DEFAULT_LINKEDIN,
    instagram: person.instagram || DEFAULT_INSTAGRAM,
    email: person.email || DEFAULT_EMAIL,

  }));

  return (
    <div className="container mx-auto p-4 bg-[var(--bg-color)] flex flex-col items-center">

      {/* Director */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Director & Dean</h1>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(0, 2).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>
      </div>

      {/* Associate Deans */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Associate Deans</h1>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(2, 5).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>
      </div>

      {/* SAC Team */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">SAC Team</h1>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(5, 8).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">SAC Secretaries</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(8, 25).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">Research Scholar (Inside Campus)</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(25, 29).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">Research Scholar (Outside Campus)</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(29, 35).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">Representatives</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(35, 42).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">Design & Tech Team</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(42, 44).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>
      </div>

      {/* Board Secretaries */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">Board Secretaries</h1>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">BHM</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(44, 47).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">BSP</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(47, 49).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">BSA</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(49, 52).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">BSW</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(52, 55).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>

        <h2 className="text-2xl font-semibold text-center mb-6 text-[var(--text-color)] mt-10">BRCA</h2>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(55, 57).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>
      </div>

      {/* House Secretaries */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-8 text-[var(--text-color)] mt-8">House Secretaries</h1>
        <div className="w-5/6 flex flex-wrap justify-center gap-8 md:gap-20 m-4">
          {defteam.slice(57, 74).map((person, idx) => <TeamCard key={idx} {...person} />)}
        </div>
      </div>

    </div>
  );
}

export default Teams;
