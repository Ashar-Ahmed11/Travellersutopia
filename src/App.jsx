import React from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Carousal from './components/carousal'
import Welcome from './components/welcome'
import Featured from './components/featured'
import Holiday from './components/holiday'
import Footer from './components/footer'
import Consultation from './components/consultation'
import UnderConstruction from './components/underConstruction.jsx'
import Destionations from './components/destination.jsx'
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min.js'
import Home from './components/home.jsx'
import Umrah from './components/umrah.jsx'
import UmrahPackage from './components/umrahpackage.jsx'
import imageOne from './components/images/imageOne.png'
import imageTwo from './components/images/imageTwo.png'
import imageThree from './components/images/imageThree.png'
import imageFour from './components/images/imageFour.png'
import imageFive from './components/images/ImageFive.png'
import imageSix from './components/images/ImageSix.png'
import GroupPackage from './components/grouppackage.jsx'
import RegularUmrah from './components/home copy.jsx'
import GroupUmrah from './components/home copy 2.jsx'
import ContactUs from './components/contactus.jsx'
import AboutUs from './components/contactus copy.jsx'
export default function App() {
  //   const destinationList= [
  //     {title:"Budget",image:imageOne,day10:["81,000","72,200","68,000","64,600"],day15:["91,000","79,000","73,000","69,000"],day20:["106,400",	"90,000",	"81,000",	"74,500"],day28:["127,000",	"104,000",	"91,000"	,"82,500"],makkah:"Matooq ul Qari",makkahDistance:"Shuttle Service",madinah:"Rehab Al Madnah",madinahDistance:"Shuttle Service"},
  //     {title:"Budget Plus",price:"70,000",image:imageTwo},
  //     {title:"Economy",price:"70,000",image:imageThree},
  //     {title:"Economy Plus",price:"70,000",image:imageFour},
  //     {title:"Economy Premium",price:"70,000",image:imageFive},
  //     {title:"Economy Supreme",price:"70,000",image:imageSix},
  //     {title:"Standard",price:"70,000",image:imageThree},

  // ]
  const destinationList = [
    {
      title: "Package One",
      image: imageOne,
      day10: ["91,000", "79,000", "73,000", "70,000"],
      day15: ["103,000", "87,500", "79,000", "75,000"],
      day20: ["127,000", "104,000", "91,200", "84,000"],
      day28: ["155,800", "123,000", "106,000", "97,000"],
      makkah: "Matooq ul Qari",
      makkahDistance: "Shuttle Service",
      madinah: "Rehab Al Madnah",
      madinahDistance: "Shuttle Service"
    },
    {
      title: "Package Two",
      image: imageTwo,
      day10: ["87,400", "77,000", "71,500", "68,400"],
      day15: ["100,500", "86,800", "78,000", "74,000"],
      day20: ["120,000", "98,800", "86,000", "82,000"],
      day28: ["146,000", "116,500", "102,000", "93,000"],
      makkah: "Hadaya Tower",
      makkahDistance: "Shuttle Service",
      madinah: "Marjan Manazil",
      madinahDistance: "Shuttle Service"
    },
    {
      title: "Package Three",
      image: imageThree,
      day10: ["94,000", "81,700", "75,000", "71,500"],
      day15: ["108,500", "91,700", "83,000", "78,000"],
      day20: ["133,000", "109,000", "96,000", "88,000"],
      day28: ["164,000", "130,000", "113,000", "102,000"],
      makkah: "Manazil al Fateh",
      makkahDistance: "800 Meter",
      madinah: "Safa Tower",
      madinahDistance: "800 Meter"
    },
    {
      title: "Package Four",
      image: imageFour,
      day10: ["115,000", "96,000", "86,000", "81,000"],
      day15: ["141,000", "114,000", "99,999", "93,000"],
      day20: ["174,800", "136,800", "117,800", "108,000"],
      day28: ["223,000", "170,000", "143,000", "129,200"],
      makkah: "Areej ul Zahbi",
      makkahDistance: "500 Meter",
      madinah: "Dream Madinah",
      madinahDistance: "600 Meter"
    },
    {
      title: "Package Five",
      image: imageFive,
      day10: ["121,000", "100,500", "92,000", "85,000"],
      day15: ["146,000", "117,000", "105,000", "95,500"],
      day20: ["188,000", "146,000", "129,200", "115,000"],
      day28: ["241,000", "182,400", "159,000", "139,000"],
      makkah: "Diwan Al Bait / Rushd Al Majd",
      makkahDistance: "650 Meter",
      madinah: "Burj Mukhtara",
      madinahDistance: "350 Meter"
    },
    {
      title: "Package Six",
      image: imageSix,
      day10: ["149,000", "117,500", "102,500", "93,500"],
      day15: ["177,000", "136,500", "117,000", "104,500"],
      day20: ["243,000", "180,500", "150,000", "131,500"],
      day28: ["318,000", "230,500", "188,000", "162,500"],
      makkah: "Kiswah Tower",
      makkahDistance: "Shuttle Service",
      madinah: "Werd Safa / Taif Nebras",
      madinahDistance: "250 Meter"
    },
    {
      title: "Package Seven",
      image: imageThree,
      day10: ["149,000", "118,200", "103,000", "93,500"],
      day15: ["180,000", "139,000", "118,000", "107,000"],
      day20: ["243,200", "182,000", "152,000", "132,000"],
      day28: ["319,000", "233,000", "190,000", "164,000"],
      makkah: "Mella Hotel 1 or 2",
      makkahDistance: "650 Meter",
      madinah: "Bir Al Eimaan",
      madinahDistance: "250 Meter"
    },
    {
      title: "Package Eight",
      image: imageOne,
      day10: ["194,000", "148,000", "125,000", "112,000"],
      day15: ["249,000", "184,000", "152,000", "134,000"],
      day20: ["314,000", "268,000", "245,000", "232,000"],
      day28: ["445,000", "315,400", "252,000", "215,000"],
      makkah: "Nawara Shams 1",
      makkahDistance: "250 Meter",
      madinah: "Rama Al Madinah / Marajn Golden",
      madinahDistance: "100 Meter"
    }
  ];

  const groupList = {
    dec10: [
      {
        title: "Budget",
        image: imageFive,
        packageList: ["199,999", "205,500", "215,000", "233,000"],
        makkah: "Al Hidayah Tower",
        makkahDistance: "Shuttle Service",
        madinah: "Marjan Manazil",
        madinahDistance: "Shuttle Service",
      },
      {
        title: "Economy",
        image: imageThree,
        packageList: ["220,000", "230,000", "246,000", "280,000"],
        makkah: "Diwan Al Bait / Rushd Al Majd",
        makkahDistance: "650 Meter",
        madinah: "Karam Ajyal / Najoom ul Madinah",
        madinahDistance: "500 Meter",
      },
      {
        title: "Standard",
        image: imageFour,
        packageList: ["222,000", "236,000", "248,000", "281,000"],
        makkah: "Kiswah Tower",
        makkahDistance: "Shuttle Service (4 Star)",
        madinah: "Burj Mukhtraa",
        madinahDistance: "350 Meter",
      },
      {
        title: "Standard Plus",
        image: imageSix,
        packageList: ["266,000", "290,000", "372,000", "399,999"],
        makkah: "Nawara Shams 2",
        makkahDistance: "300 Meter",
        madinah: "Bir ul Eiman / Taif Nebras / Werda Safa",
        madinahDistance: "250 Meter",
      },
    ],
    dec15:
      [
        {
          title: "Budget",
          image: imageFour,
          packageList: ["210,000", "216,000", "227,000", "246,000"],
          makkah: "Al Hidayah Tower",
          makkahDistance: "Shuttle Service",
          madinah: "Marjan Manazil",
          madinahDistance: "Shuttle Service",
        },
        {
          title: "Economy",
          image: imageOne,
          packageList: ["218,000", "226,000", "238,000", "265,000"],
          makkah: "Manzail Al Fateh",
          makkahDistance: "700 Meter",
          madinah: "Dream Madinah",
          madinahDistance: "600 Meter",
        },
        {
          title: "Standard",
          image: imageFive,
          packageList: ["241,000", "254,000", "270,000", "310,999"],
          makkah: "Diwan Al Bait / Rushd Al Majd",
          makkahDistance: "550 Meter",
          madinah: "Burj Mukhtara",
          madinahDistance: "350 Meter",
        },
      ],
    dec22:
      [
        {
          title: "Budget",
          image: imageTwo,
          packageList: ["210,000", "216,000", "227,000", "246,000"],
          makkah: "Al Hidayah Tower",
          makkahDistance: "Shuttle Service",
          madinah: "Marjan Manazil",
          madinahDistance: "Shuttle Service",
        },
        {
          title: "Economy",
          image: imageSix,
          packageList: ["218,000", "226,000", "238,000", "265,000"],
          makkah: "Manzail Al Fateh",
          makkahDistance: "700 Meter",
          madinah: "Dream Madinah",
          madinahDistance: "600 Meter",
        },
        {
          title: "Standard",
          image: imageThree,
          packageList: ["241,000", "254,000", "270,000", "310,999"],
          makkah: "Diwan Al Bait / Rushd Al Majd",
          makkahDistance: "550 Meter",
          madinah: "Burj Mukhtara",
          madinahDistance: "350 Meter",
        },
      ],
    dec20:
      [
        {
          title: "Budget",
          image: imageOne,
          packageList: ["206,000", "212,500", "222,000", "242,000"],
          makkah: "Al Hidayah Tower",
          makkahDistance: "Shuttle Service",
          madinah: "Marjan Manazil",
          madinahDistance: "Shuttle Service",
        },
        {
          title: "Economy",
          image: imageFour,
          packageList: ["227,500", "238,500", "257,000", "295,000"],
          makkah: "Diwan Al Bait / Rushd Al Majd",
          makkahDistance: "650 Meter",
          madinah: "Karam Ajyal / Najoom ul Madinah",
          madinahDistance: "500 Meter",
        },
        {
          title: "Standard",
          image: imageFive,
          packageList: ["231,000", "246,000", "260,000", "297,000"],
          makkah: "Kiswah Tower",
          makkahDistance: "Shuttle Service",
          madinah: "Burj Mukhtara",
          madinahDistance: "350 Meter",
        },
        {
          title: "Standard Plus Package",
          image: imageSix,
          packageList: ["280,000", "306,000", "348,000", "431,000"],
          makkah: "Nawara Shams 2",
          makkahDistance: "300 Meter",
          madinah: "Bir ul Eiman / Taif Nebras / Werda Safa",
          madinahDistance: "250 Meter",
        }
      ]

  };





  console.clear()
  return (
    <div>
      <Navbar />

      <Switch>

        <Route exact path="/">
          {/* <Home theArr={destinationList} /> */}
          <UnderConstruction />
        </Route>
        <Route exact path="/umrah">
          <Home theArr={destinationList} anotherArr={groupList} />
          {/* <UnderConstruction/> */}
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
          {/* <UnderConstruction/> */}
        </Route>
        <Route exact path="/about-us">
          <AboutUs theArr={destinationList} anotherArr={groupList} />
          {/* <UnderConstruction/> */}
        </Route>
        <Route exact path="/regular-umrah">
          <RegularUmrah theArr={destinationList} anotherArr={groupList} />
          {/* <UnderConstruction/> */}
        </Route>
        <Route exact path="/group-umrah">
          <GroupUmrah theArr={destinationList} anotherArr={groupList} />
          {/* <UnderConstruction/> */}
        </Route>
        {/* <Route path="/umrah">
            <Umrah />
          </Route> */}
        <Route exact path="/umrah-packages/:thepackage">
          <UmrahPackage theArr={destinationList} />
        </Route>
        <Route exact path="/group-packages/:thepackage/:date">
          <GroupPackage theArr={groupList} />
        </Route>
        <Route exact path="/ota" component>
          <Redirect />
        </Route>
        {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
      </Switch>



    </div>
  )
}


function Redirect() {

  window.location.href = 'https://b2bpk.bookingagora.com/Login.aspx';
  return null;
}