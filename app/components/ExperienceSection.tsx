'use client';

import { motion } from 'framer-motion';

const professionalSkills = [
  {
    name: 'React',
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" className="w-full h-full text-cyan-400">
          <circle cx="24" cy="24" r="4" fill="currentColor" />
          <ellipse cx="24" cy="24" rx="20" ry="8" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Angular',
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" className="w-full h-full">
          <path fill="#DD0031" d="M125 0L0 46.3l23 157.1L125 250l102-46.6 23-157.1z" />
          <path fill="#C3002F" d="M125 0v250l102-46.6 23-157.1z" />
          <path fill="#FFF" d="M125 32l58.1 154.2h-25.7l-12.5-35.1H105l-12.3 35.1H67.1zm0 42.6l-15.9 45.3h31.8z" />
        </svg>
      </div>
    ),
  },
 {
  name: 'HTML',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-full h-full"
      >
        <title>HTML5 Logo Badge</title>
        <path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512" />
        <path fill="#EF652A" d="M256,472 L405,431 440,37 256,37" />
        <path
          fill="#EBEBEB"
          d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
        />
        <path
          fill="#FFF"
          d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"
        />
      </svg>
    </div>
  ),
},
 {
  name: 'CSS',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <img
        src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
        alt="CSS Logo"
        className="w-full h-full object-contain"
      />
    </div>
  ),
},
  {
  name: 'JavaScript',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 630 630"
        className="w-full h-full"
        fill="#f7df1e"
      >
        <rect width="630" height="630" fill="#f7df1e" />
        <path
          d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"
          fill="#000"
        />
      </svg>
    </div>
  ),
},
  {
  name: 'Node.js',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <img
        src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
        alt="Node.js Logo"
        className="w-full h-full object-contain"
      />
    </div>
  ),
},
  {
  name: 'Python',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 255"
        className="w-full h-full"
        aria-hidden="true"
        role="img"
      >
        <defs>
          <linearGradient id="blueGradient" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="yellowGradient" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blueGradient)"
          d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"
        />
        <path
          fill="url(#yellowGradient)"
          d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"
        />
      </svg>
    </div>
  ),
},
{
  name: 'SQL',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 240"
        className="w-full h-full"
        fill="none"
      >
        <title>Sql data base with logo</title>
        <defs>
          <style type="text/css">
            {`
              #black {
                fill:#333;
              }
              @media (prefers-color-scheme:dark) {
                #black {
                  fill: white;
                }
              }
            `}
          </style>
        </defs>

        <path
          d="m35,50 v150  a 85,35 1 1 0 170,0 v-150 m-170,50  a 85,35 1 1 0 170,0 m-170,50 a 85,35 1 1 0 170,0"
          style={{ fill: 'none', stroke: '#df6c20', strokeWidth: 15 }}
        />
        <ellipse
          cx="120"
          cy="50"
          ry="35"
          rx="85"
          style={{ fill: 'none', stroke: '#df6c20', strokeWidth: 15 }}
        />
        <path
          d="m300,100 a 25,25 1 1 0 -50,0 a 20,25 1 0 0 25,25 a 20,25 1 0 1 20,25 a 25,25 1 0 1 -50,-5 "
          style={{ fill: 'none', stroke: '#df6c20', strokeWidth: 15 }}
        />
        <path
          d="m375,175 a 50,50 1 1 1 15,-5 m-15,-20 l30,40 "
          style={{ fill: 'none', stroke: '#df6c20', strokeWidth: 15 }}
        />
        <path
          d="m440,70 v80  a 25,25 1 0 0 25,25 h20 "
          style={{ fill: 'none', stroke: '#df6c20', strokeWidth: 15 }}
        />
      </svg>
    </div>
  ),
},
  {
  name: 'Git',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 96 96"
        className="w-full h-full text-orange-600"
        fill="currentColor"
      >
        <path d="M90.156 41.965 50.036 1.848a5.918 5.918 0 0 0-8.372 0l-8.328 8.332 10.566 10.566a7.03 7.03 0 0 1 7.23 1.684 7.034 7.034 0 0 1 1.669 7.277l10.187 10.184a7.028 7.028 0 0 1 7.278 1.672 7.04 7.04 0 0 1 0 9.957 7.05 7.05 0 0 1-9.965 0 7.044 7.044 0 0 1-1.528-7.66l-9.5-9.497V59.36a7.04 7.04 0 0 1 1.86 11.29 7.04 7.04 0 0 1-9.957 0 7.04 7.04 0 0 1 0-9.958 7.06 7.06 0 0 1 2.304-1.539V33.926a7.049 7.049 0 0 1-3.82-9.234L29.242 14.272 1.73 41.777a5.925 5.925 0 0 0 0 8.371L41.852 90.27a5.925 5.925 0 0 0 8.37 0l39.934-39.934a5.925 5.925 0 0 0 0-8.371" />
      </svg>
    </div>
  	),
  },
 {
  name: 'Azure',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 96 96"
        className="w-full h-full"
      >
        <defs>
          <linearGradient
            id="grad1"
            x1="-1032.172"
            x2="-1059.213"
            y1="145.312"
            y2="65.426"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#114a8b" />
            <stop offset="1" stopColor="#0669bc" />
          </linearGradient>
          <linearGradient
            id="grad2"
            x1="-1023.725"
            x2="-1029.98"
            y1="108.083"
            y2="105.968"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopOpacity=".3" />
            <stop offset=".071" stopOpacity=".2" />
            <stop offset=".321" stopOpacity=".1" />
            <stop offset=".623" stopOpacity=".05" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="grad3"
            x1="-1027.165"
            x2="-997.482"
            y1="147.642"
            y2="68.561"
            gradientTransform="matrix(1 0 0 -1 1075 158)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#3ccbf4" />
            <stop offset="1" stopColor="#2892df" />
          </linearGradient>
        </defs>
        <path
          fill="url(#grad1)"
          d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"
        />
        <path
          fill="#0078d4"
          d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z"
        />
        <path
          fill="url(#grad2)"
          d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"
        />
        <path
          fill="url(#grad3)"
          d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"
        />
      </svg>
    </div>
	),
 },
  {
  name: 'AWS',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 304 182"
        className="w-full h-full"
      >
        <style>{`
          .st0{fill:#252F3E;}
          .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FF9900;}
        `}</style>
        <g>
          <path
            className="st0"
            d="M86.4,66.4c0,3.7,0.4,6.7,1.1,8.9c0.8,2.2,1.8,4.6,3.2,7.2c0.5,0.8,0.7,1.6,0.7,2.3c0,1-0.6,2-1.9,3l-6.3,4.2
            c-0.9,0.6-1.8,0.9-2.6,0.9c-1,0-2-0.5-3-1.4C76.2,90,75,88.4,74,86.8c-1-1.7-2-3.6-3.1-5.9c-7.8,9.2-17.6,13.8-29.4,13.8
            c-8.4,0-15.1-2.4-20-7.2c-4.9-4.8-7.4-11.2-7.4-19.2c0-8.5,3-15.4,9.1-20.6c6.1-5.2,14.2-7.8,24.5-7.8c3.4,0,6.9,0.3,10.6,0.8
            c3.7,0.5,7.5,1.3,11.5,2.2v-7.3c0-7.6-1.6-12.9-4.7-16c-3.2-3.1-8.6-4.6-16.3-4.6c-3.5,0-7.1,0.4-10.8,1.3c-3.7,0.9-7.3,2-10.8,3.4
            c-1.6,0.7-2.8,1.1-3.5,1.3c-0.7,0.2-1.2,0.3-1.6,0.3c-1.4,0-2.1-1-2.1-3.1v-4.9c0-1.6,0.2-2.8,0.7-3.5c0.5-0.7,1.4-1.4,2.8-2.1
            c3.5-1.8,7.7-3.3,12.6-4.5c4.9-1.3,10.1-1.9,15.6-1.9c11.9,0,20.6,2.7,26.2,8.1c5.5,5.4,8.3,13.6,8.3,24.6V66.4z M45.8,81.6
            c3.3,0,6.7-0.6,10.3-1.8c3.6-1.2,6.8-3.4,9.5-6.4c1.6-1.9,2.8-4,3.4-6.4c0.6-2.4,1-5.3,1-8.7v-4.2c-2.9-0.7-6-1.3-9.2-1.7
            c-3.2-0.4-6.3-0.6-9.4-0.6c-6.7,0-11.6,1.3-14.9,4c-3.3,2.7-4.9,6.5-4.9,11.5c0,4.7,1.2,8.2,3.7,10.6C37.7,80.4,41.2,81.6,45.8,81.6z
            M126.1,92.4c-1.8,0-3-0.3-3.8-1c-0.8-0.6-1.5-2-2.1-3.9L96.7,10.2c-0.6-2-0.9-3.3-0.9-4c0-1.6,0.8-2.5,2.4-2.5h9.8
            c1.9,0,3.2,0.3,3.9,1c0.8,0.6,1.4,2,2,3.9l16.8,66.2l15.6-66.2c0.5-2,1.1-3.3,1.9-3.9c0.8-0.6,2.2-1,4-1h8c1.9,0,3.2,0.3,4,1
            c0.8,0.6,1.5,2,1.9,3.9l15.8,67l17.3-67c0.6-2,1.3-3.3,2-3.9c0.8-0.6,2.1-1,3.9-1h9.3c1.6,0,2.5,0.8,2.5,2.5c0,0.5-0.1,1-0.2,1.6
            c-0.1,0.6-0.3,1.4-0.7,2.5l-24.1,77.3c-0.6,2-1.3,3.3-2.1,3.9c-0.8,0.6-2.1,1-3.8,1h-8.6c-1.9,0-3.2-0.3-4-1
            c-0.8-0.7-1.5-2-1.9-4L156,23l-15.4,64.4c-0.5,2-1.1,3.3-1.9,4c-0.8,0.7-2.2,1-4,1H126.1z M254.6,95.1c-5.2,0-10.4-0.6-15.4-1.8
            c-5-1.2-8.9-2.5-11.5-4c-1.6-0.9-2.7-1.9-3.1-2.8c-0.4-0.9-0.6-1.9-0.6-2.8v-5.1c0-2.1,0.8-3.1,2.3-3.1c0.6,0,1.2,0.1,1.8,0.3
            c0.6,0.2,1.5,0.6,2.5,1c3.4,1.5,7.1,2.7,11,3.5c4,0.8,7.9,1.2,11.9,1.2c6.3,0,11.2-1.1,14.6-3.3c3.4-2.2,5.2-5.4,5.2-9.5
            c0-2.8-0.9-5.1-2.7-7c-1.8-1.9-5.2-3.6-10.1-5.2L246,52c-7.3-2.3-12.7-5.7-16-10.2c-3.3-4.4-5-9.3-5-14.5c0-4.2,0.9-7.9,2.7-11.1
            c1.8-3.2,4.2-6,7.2-8.2c3-2.3,6.4-4,10.4-5.2c4-1.2,8.2-1.7,12.6-1.7c2.2,0,4.5,0.1,6.7,0.4c2.3,0.3,4.4,0.7,6.5,1.1
            c2,0.5,3.9,1,5.7,1.6c1.8,0.6,3.2,1.2,4.2,1.8c1.4,0.8,2.4,1.6,3,2.5c0.6,0.8,0.9,1.9,0.9,3.3v4.7c0,2.1-0.8,3.2-2.3,3.2
            c-0.8,0-2.1-0.4-3.8-1.2c-5.7-2.6-12.1-3.9-19.2-3.9c-5.7,0-10.2,0.9-13.3,2.8c-3.1,1.9-4.7,4.8-4.7,8.9c0,2.8,1,5.2,3,7.1
            c2,1.9,5.7,3.8,11,5.5l14.2,4.5c7.2,2.3,12.4,5.5,15.5,9.6c3.1,4.1,4.6,8.8,4.6,14c0,4.3-0.9,8.2-2.6,11.6
            c-1.8,3.4-4.2,6.4-7.3,8.8c-3.1,2.5-6.8,4.3-11.1,5.6C264.4,94.4,259.7,95.1,254.6,95.1z"
          />
          <g>
            <path
              className="st1"
              d="M273.5,143.7c-32.9,24.3-80.7,37.2-121.8,37.2c-57.6,0-109.5-21.3-148.7-56.7c-3.1-2.8-0.3-6.6,3.4-4.4
              c42.4,24.6,94.7,39.5,148.8,39.5c36.5,0,76.6-7.6,113.5-23.2C274.2,133.6,278.9,139.7,273.5,143.7z"
            />
            <path
              className="st1"
              d="M287.2,128.1c-4.2-5.4-27.8-2.6-38.5-1.3c-3.2,0.4-3.7-2.4-0.8-4.5c18.8-13.2,49.7-9.4,53.3-5
              c3.6,4.5-1,35.4-18.6,50.2c-2.7,2.3-5.3,1.1-4.1-1.9C282.5,155.7,291.4,133.4,287.2,128.1z"
            />
          </g>
        </g>
      </svg>
    </div>
	),
 },
{
  name: 'PowerBI',
  icon: (
    <div className="w-10 h-10 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 630 630"
        className="w-full h-full"
        role="img"
        aria-label="Power BI Logo"
      >
        <defs>
          <linearGradient id="linearGradient-1" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stopColor="#EBBB14" offset="0%" />
            <stop stopColor="#B25400" offset="100%" />
          </linearGradient>
          <linearGradient id="linearGradient-2" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stopColor="#F9E583" offset="0%" />
            <stop stopColor="#DE9800" offset="100%" />
          </linearGradient>
          <path
            id="path-3"
            d="M346,604 L346,630 L320,630 L153,630 C138.640597,630 127,618.359403 127,604 L127,183 C127,168.640597 138.640597,157 153,157 L320,157 C334.359403,157 346,168.640597 346,183 L346,604 Z"
          />
          <filter
            id="filter-4"
            x="-9.1%"
            y="-6.3%"
            width="136.5%"
            height="116.9%"
            filterUnits="objectBoundingBox"
          >
            <feOffset dx="20" dy="10" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
            <feColorMatrix
              values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0530211976 0"
              type="matrix"
              in="shadowBlurOuter1"
            />
          </filter>
          <linearGradient id="linearGradient-5" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop stopColor="#F9E68B" offset="0%" />
            <stop stopColor="#F3CD32" offset="100%" />
          </linearGradient>
        </defs>
        <g id="PBI-Logo" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g id="Group" transform="translate(77.5, 0)">
            <rect
              id="Rectangle"
              fill="url(#linearGradient-1)"
              x="256"
              y="0"
              width="219"
              height="630"
              rx="26"
            />
            <g id="Combined-Shape">
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-4)"
                xlinkHref="#path-3"
              />
              <use fill="url(#linearGradient-2)" fillRule="evenodd" xlinkHref="#path-3" />
            </g>
            <path
              d="M219,604 L219,630 L193,630 L26,630 C11.6405965,630 0,618.359403 0,604 L0,341 C0,326.640597 11.6405965,315 26,315 L193,315 C207.359403,315 219,326.640597 219,341 L219,604 Z"
              fill="url(#linearGradient-5)"
              id="Combined-Shape"
            />
          </g>
        </g>
      </svg>
    </div>
  ),
}
];

const experienceItems = [
	{
		role: 'Software Developer Intern',
		company: 'IBM',
		duration: 'May 2024 - Present',
		description:
			'Developing and maintaining EDI data processing scripts using Python and SQL, reducing data-related support tickets by 35% and improving integration accuracy for over 150 partner systems.',
		logo: '/ibm.png',
	},
	{
		role: 'Analyst Intern',
		company: 'Deloitte',
		duration: 'May 2023 - Aug 2023',
		description:
			'Built an Azure-hosted web portal to support Canada’s largest class-action lawsuit for 50,000 Indigenous individuals, while also developing Python scripts to extract data from hard drives and visualizing insights in PowerBI dashboards.',
		logo: '/deloitte.png',
		articleLink:
			'https://medium.com/@rohanuppal35/my-internship-experience-at-deloitte-4007792f2f63',
	},
	{
		role: 'Computer Engineering Intern',
		company: 'Ontario Power Generation',
		duration: 'May 2022 - Dec 2022',
		description:
			'Built two internal websites for trend analysis and employee engagement using ReactJs, Javascript, and HTML/CSS while leading a 10-member team from concept to deployment to implement touchscreen kiosks within a nuclear power plant.',
		logo: '/opg.png',
		articleLink:
			'https://medium.com/@rohanuppal35/my-internship-experience-at-opg-767bb97fab12',
	},
];

const achievements = [
	{
		title: 'Infobesity Challenge Winner',
		date: '2023',
		description:
			'Designed an AI software that fact-checks information in Youtube videos for mindful information consumption.',
		certificateLink: 'https://drive.google.com/file/d/1o4ohu8gHJeSZRz3-aiZpn9sjde6-20sm/view?usp=sharing',
		projectLink:
			'https://docs.google.com/presentation/d/1ZhJtCdh3roCm-arWipC8uphTWMqkg0J4vvwKsl_t2_8/edit?slide=id.g229b3bbf4b0_6_68#slide=id.g229b3bbf4b0_6_68',
	},
	{
		title: 'BOLT Hackathon Winner',
		date: '2023',
		description:
			'Designed an AR Navigation and Chatbot integrated website to improve the customer service experience for the retail industry.',
		certificateLink: 'https://drive.google.com/file/d/194JrjYPmd3cjOlmiU6tNcbamxh5TzUJz/view?usp=sharing',
		projectLink:
			'https://docs.google.com/presentation/d/1glWIYVIooQNmv6lAElKIHbsubKdC1n8Z/edit?slide=id.p1#slide=id.p1',
	},
];

export default function ExperienceSection() {
	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-black min-h-screen" id="experience">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section Title */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-12 text-center"
				>
					Experience
				</motion.h2>

				{/* Experience */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12"
				>
					<h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Work Experience</h3>
					<div className="space-y-8">
						{experienceItems.map(({ role, company, duration, description, logo, articleLink }) => (
              <div
                key={role}
                className="bg-white/15 rounded-xl p-6 transition-colors flex flex-col-reverse md:flex-row items-center md:justify-between"
              >
                {/* Text section */}
                <div className="flex-1 md:pr-4 text-center md:text-left">
                  <h4 className="text-xl font-semibold">{role}</h4>
                  <p className="text-gray-400 italic">{duration}</p>
                  <p className="mt-2">{description}</p>
                  {articleLink && (
                    <a
                      href={articleLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-medium inline-flex items-center gap-1 mt-2 hover:text-blue-200 transition-colors duration-200 group"
                    >
                      Read More
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                        ↗
                      </span>
                    </a>
                  )}
                </div>

                {/* Logo */}
                {logo && (
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-32 h-20 object-contain rounded-md p-2 mb-4 md:mb-0 md:ml-6"
                  />
                )}
              </div>
            ))}
					</div>
				</motion.div>

				{/* Achievements */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12"
				>
					<h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Achievements</h3>
					<div className="space-y-8">
						{achievements.map(({ title, date, description, certificateLink, projectLink }) => (
							<div
								key={title}
								className="bg-white/15 rounded-xl p-6 transition-colors flex justify-between flex-col md:flex-row md:items-center"
							>
								{/* Left: Text */}
								<div className="md:flex-1 md:pr-6">
									<h4 className="text-xl font-semibold">{title}</h4>
									<p className="text-gray-400 italic">{date}</p>
									<p className="mt-2">{description}</p>
								</div>

								{/* Right: Buttons stacked vertically */}
								<div className="flex flex-col gap-3 mt-4 md:mt-0">
									{certificateLink && (
										<a
											href={certificateLink}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors text-center"
										>
											Certificate
										</a>
									)}
									{projectLink && (
										<a
											href={projectLink}
											target="_blank"
											rel="noopener noreferrer"
											className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors text-center"
										>
											Project
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</motion.div>

				{/* Professional Skills */}
				{/* Professional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Professional Skills</h3>
					
					<div className="bg-white/10 rounded-xl p-6">
						<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
							{professionalSkills.map((skill) => (
								<div key={skill.name} className="flex flex-col items-center text-center">
									{skill.icon}
									<p className="text-sm mt-2">{skill.name}</p>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
