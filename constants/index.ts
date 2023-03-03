
import {
  ClipboardDocumentListIcon,
  UserIcon,
  VideoCameraIcon,
  ViewfinderCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CheckCircleIcon,
  UsersIcon,
 } from "@heroicons/react/24/outline"
 import {HomeIcon} from '@heroicons/react/24/solid'
import { typescript, git, html,javascript,nodejs, reactjs, redux,tailwind,css} from "../assets"



 export const companies = [
  {
    name: 'MBIA-muni service',
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/MBIA-Logo.svg/1280px-MBIA-Logo.svg.png",
    role: 'Marketing|Financial analyst',
    location:'Philadelphia, US',
    start: '1997',
    end:'2000',
    dot1: 'developed P&L model for client jurisdictions to forecast income tax collection',
    dot2: 'Local Government Revenue Forecast Model Development : assigned financial model development directly under CFO. In response to RFP from each jurisdictions in Pennsylvania, those P&L proforma financials are included in the propositions. Times series regression analysis is employed to forecast earned income tax revenue for each potential and existing clients.',
    dot3: 'ad-hoc financial analysis & forecast works',
    dot4: 'W2 database management and check printing system implementation : City of Philadelphia and other surrounding jurisdictions confronted with the issue for the delay of income tax refunds due to the cross region reciprocation rule for income tax collection. this caused the delay of income tax refund payments for tax filers. As a solution, we calculate the correct refund amount from W2 database and cut checks for unpaid.',
    intro: 'MBIA muni-service (the formerly called Municipal Tax Bereau) is the wholey owned subsidiary company of MBIA, a largest bond insurance company in the US. It provides tax non-filer discovery services for each client jusrisdictions which owns MBIA bond insurance policies'
  },
  {
    name: 'Colt (Formerly known as KVH)',
    src: "https://cispe.cloud/website_cispe/wp-content/uploads/2020/12/colt-logo-web.png",
    role: 'Operation analyst | Project management',
    location:'Tokyo, Japan',
    start: '2001',
    end:'2006',
    dot1: 'monthly acrued expense report for assets for fiber network contruction in Tokyo and Osaka',
    dot2: 'developed Telcom node reservation system and its internal implementation',
    dot3: 'monthly KPI report for mean time for delivery and mean time for outage recovery for each service tiers',
    dot4: 'ITMS implementation for Shiohama Data center',
    intro: 'Colt is london based Telcom company merged with KVH in Tokyo, KVH and Colt has been simultaneously launched as a venture Telecome businesses by Fidelity Investment in Boston in order to integrate the global fiber optics network'
  },
  {
    name: 'IDEXX Labo',
    src: "https://www.logo.wine/a/logo/Idexx_Laboratories/Idexx_Laboratories-Logo.wine.svg",
    role: 'Corporate financial analyst',
    location:'Tokyo, Japan',
    start: '2006',
    end:'2006',
    dot1: 'monthly P&L forecast using TM1 BI system for APAC regions',
    dot2: 'quarterly P&L forecast using TM1 BI system for APC regions',
    dot3: 'attending annual global finance team meeting',
    dot4: 'ad-hoc analysis work and pricing strategies',
    intro: 'IDEXX Laboratories, Inc, a business model is divided into three main segments: Companion Animal Group, Water quality products, and Livestock, Poultry and Dairy solutions. The Companion Animal Group (CAG) offers a wide variety of diagnostic tools that help veterinarians and pet owners to detect pet diseases in time and possibly cure them. IDEXXs offer comprises both analyzer instruments, usually sold once to each customer, and consumable test kits, which are purchased on a recurring basis by customers.'
 
  },
  {
    name: 'Nirvana Consultant KK',
    src:"https://img17.shop-pro.jp/PA01170/085/product/167095451.jpg?cmsp_timestamp=20220310151237",
    role: 'Managing Director',
    location:'Tokyo, Japan',
    start: '2007',
    end:'current',
    dot1: 'started as revenue enhancement consulting firm for "ryokan" traditional Japanese Inn ',
    dot2: 'consulting for call center establishment and execusion for credit card concierge desk',
    dot3: 'web application development service',
    dot4: 'event and philanthropic management and consulting for NPOs',
    intro: 'After leaving Colt, I launched a new consulting business which had specialized a consulting service for the revenue enhancement, the cash flow improvement for ‘ryokan’, meaning traditional Japanese Inn and luxurious hotels. However, due to the economic impact of Lehman shock, Nirvana downsized the organization and modified its business strategies in order for it to function as a holistic consulting solution providers including promotions, live events planning and execusion, application developments for small-to-mid size businesses in and around Tokyo.'
  },
  {
    name: 'WOWOW Communication KK',
    src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/WOWOW_logo.svg/2560px-WOWOW_logo.svg.png",
    role: 'Call center business consultant',
    location:'Tokyo, Japan',
    start: '2008',
    end:'2008',
    dot1: 'call center management consult ',
    dot2: 'call center quality control',
    dot3: 'script management',
    dot4:'',
    intro:'WOWWOW communication is the wholely owned subsidiary of WOWWOW satelite broadcasting campany in Japan, WOWWOW Communication has a large scale call center for  TV program subscribers. They lauanched new business section which offer an consulting businesses for other call center business entities '
  },
  {
    name: 'International SOS',
    src:"http://smart-health.sg/wp-content/uploads/2017/03/Smart-Health-Brand-Logos-Big-19-INTERNATIONAL-SOS.png",
    role: 'Luxury market partnership manager',
    location:'Tokyo, Japan',
    start: '2009',
    end:'2009',
    dot1: 'concierge call center management',
    dot2: 'partnership development for concierge contents for card companies',
    dot3: 'event development',
    dot4:'',
    intro: 'International SOS is the world’s leading medical and travel security risk services company. We care for clients across the globe, from more than 1,000 locations in 92 countries, 26 Assistance Centres and 67 clinics takes care of business travellers and expats by critical illness, accident, civil unrest or any incident occurring abroad. Our expertise is unique: more than 11,000 employees are led by 1,400 doctors and 200 security specialists.'
  },
 ]


 export const tech = [
  {
    name: 'Angular',
    proficiency:'70%',
    src: git,
  },
  {
    name: 'React',
    proficiency:'97.5%',
    src: html,
  },
  {
    name: 'JavaScript',
    proficiency:'85%',
    src: javascript,
  },
  {
    name: 'TypeScript',
    proficiency:'85%',
    src: nodejs,
  },
  {
    name: 'Firebase',
    proficiency:'100%',
    src: reactjs,
  },
  {
    name: 'MongoDB',
    proficiency:'70%',
    src: tailwind,
  },
  {
    name: 'WEB3',
    proficiency:'40%',
    src: typescript,
  },
  {
    name: 'Solidity',
    proficiency:'40%',
    src: "css",
  },
  {
    name: 'Docker',
    proficiency:'40%',
    src: "docker",
  },
]


export const project = [
  {
    name: 'Burgundy Butterfly Social Network Establishment',
    src: reactjs,
    completion:'20%',
    front:'Nextjs/React',
    back:'firebase',
    deal:'client',
    short:'Development of SNS web application which saves victimes of abuses',
    description:'Through my experience as a victim of the economic abuse, I decided to launch react base web application which support other victims of various forms of abuses and corporate harassments. This project aims to connect each victims on SNS and provide psychological care for psychosis induced by abuses including sexual harassments, rapes, gaslighting and economic abuses'
  },
  {
    name: 'Live Streaming Shopping Smart Phone Application',
    src: reactjs,
    completion:'100%',
    front:'React Native',
    back:'firebase Agora Web RTC',
    deal:'client',
    short:'Development of smart phone concierge application using Web RTC technology',
    description:'Develop a live streaming shopping support application using Web RTC technology with react native. A host  would be able to recommend items to audience as well as to chat with audience'
  },
  {
    name: 'Philanthropic Music Streaming App Development',
    src: reactjs,
    completion:'100%',
    front:'React Native',
    back:'firebase Agora Web RTC',
    deal:'own',
    short:'Development of smart phone concierge application using Web RTC technology',
    description:'Music streaming app which allocates revenue with philanthropic projects which benefits PR for musicians and revenue enhancements for non profit organizations'
  },
  {
    name: 'Remote Work Facilitation Application',
    src: reactjs,
    completion:'100%',
    front:'React Native',
    back:'AWS',
    deal:'own',
    short:'Remote work location reservation smart phone application',
    description:'The government recommends people to work outside of Tokyo in order to help the travel industry. We build an app to allow office workers in Tokyo tralve and work from remote area in Japan. The app would allow users to reserve location which allows works to stay'
  },
  {
    name: 'Restaurant Recipe Sharing App',
    src: reactjs,
    completion:'100%',
    front:'React Native',
    back:'AWS',
    deal:'own',
    short:'Restaurant Recipe Sharing SNS using YOUTUBE API',
    description:'The project to develop a react native smart phone app which allows users to check restaurant recipes to help them during the lockdown'
  },
  {
    name: 'React Web Shopping Site',
    src: reactjs,
    completion:'100%',
    front:'React Native',
    back:'AWS',
    deal:'own',
    short:'Shopping Site using Redux State management',
    description:'The mock application project : React shopping application development using Redux and modern react hooks The payment integration is achived with Stripe API'
  },
]