import '../Styles/TechnologiesSection.css';

const TechnologiesSection = () => {
    return(
            <section className="technologiesContent" id="technologiesContent" >

                <h2 id="h2Technologies">Technologies</h2>

                <div className="iconsContainer">

                    {/* <!-- GITHUB --> */}
                    <div className="icons">
                        <svg className="iconImg" enableBackground="new 0 0 32 32" version="1.1" viewBox="1 1 30 30"><g id="Github"><circle cx="16" cy="16" fill="#FFFFFF" r="14.5"/><path d="M30.5,16c0-1.339-0.196-2.631-0.536-3.862C27.83,6.787,22.612,3,16.5,3C8.492,3,2,9.492,2,17.5   c0,1.339,0.196,2.631,0.536,3.862C4.67,26.713,9.888,30.5,16,30.5C24.008,30.5,30.5,24.008,30.5,16z" fill="#80D8FF"/><g><path d="M20.95,29.614c-0.654,0.237-1.349-0.25-1.347-0.946c0.005-1.227,0.01-2.677,0.01-3.69    c0-1.358-0.464-2.246-0.984-2.696c3.23-0.36,6.62-1.591,6.62-7.183c0-1.59-0.561-2.889-1.491-3.907    c0.15-0.369,0.647-1.848-0.144-3.853c0,0-1.215-0.391-3.983,1.492c-1.158-0.323-2.399-0.484-3.63-0.49    c-1.233,0.006-2.473,0.167-3.63,0.49C9.601,6.949,8.383,7.34,8.383,7.34c-0.788,2.004-0.291,3.484-0.141,3.853    c-0.928,1.018-1.493,2.317-1.493,3.907c0,5.578,3.385,6.827,6.605,7.194c-0.415,0.364-0.79,1.006-0.921,1.946    c-0.827,0.373-2.926,1.016-4.221-1.209c0,0-0.766-1.397-2.22-1.5c0,0-1.417-0.018-0.1,0.885c0,0,0.951,0.448,1.609,2.129    c0,0,0.851,2.832,4.885,1.952c0.003,0.522,0.007,1.358,0.011,2.169c0.003,0.694-0.688,1.189-1.34,0.952    c-1.435-0.521-2.765-1.261-3.949-2.18C9.565,29.35,12.646,30.5,16,30.5c3.279,0,6.294-1.102,8.724-2.938    C23.584,28.421,22.316,29.118,20.95,29.614z" fill="#FFFFFF"/></g><path d="M11.393,30.176c-0.171,0-0.342-0.029-0.506-0.089C4.695,27.841,0.728,21.911,1.015,15.33   c0.012-0.275,0.232-0.485,0.521-0.478c0.276,0.012,0.49,0.246,0.478,0.521c-0.268,6.142,3.435,11.677,9.214,13.772   c0.151,0.056,0.318,0.033,0.453-0.063c0.139-0.098,0.218-0.25,0.217-0.417l-0.008-1.573c-3.927,0.561-4.857-2.375-4.867-2.406   c-0.552-1.405-1.342-1.82-1.35-1.824c-0.342-0.229-0.996-0.676-0.81-1.262c0.167-0.528,0.852-0.563,1.136-0.572   c1.736,0.122,2.616,1.693,2.652,1.76c0.956,1.643,2.414,1.446,3.335,1.094c0.09-0.452,0.239-0.863,0.439-1.216   c-2.872-0.486-6.176-1.973-6.176-7.568c0-1.531,0.479-2.88,1.424-4.016C7.465,10.408,7.205,8.97,7.917,7.157   C7.972,7.017,8.087,6.91,8.23,6.864C8.374,6.817,9.703,6.47,12.46,8.29c1.119-0.291,2.309-0.442,3.539-0.448   c1.234,0.006,2.423,0.157,3.543,0.448c2.756-1.82,4.08-1.473,4.226-1.426c0.143,0.046,0.257,0.153,0.312,0.292   c0.715,1.813,0.456,3.251,0.247,3.927c0.944,1.133,1.422,2.482,1.422,4.016c0,5.595-3.308,7.078-6.185,7.559   c0.354,0.623,0.549,1.426,0.549,2.32c0,1.013-0.005,2.465-0.01,3.692c0,0.166,0.077,0.315,0.214,0.412   c0.137,0.096,0.306,0.119,0.463,0.063C26.295,27.141,30,21.858,30,16c0-3.863-1.54-7.46-4.335-10.129   c-2.794-2.667-6.462-4.037-10.336-3.855c-0.275,0.021-0.509-0.201-0.523-0.476c-0.013-0.276,0.2-0.51,0.476-0.523   c4.152-0.19,8.08,1.274,11.073,4.131C29.351,8.007,31,11.861,31,16c0,6.277-3.97,11.937-9.878,14.084   c-0.463,0.167-0.978,0.099-1.38-0.185c-0.401-0.283-0.64-0.744-0.638-1.233c0.005-1.226,0.01-2.676,0.01-3.688   c0-1.459-0.567-2.107-0.811-2.317c-0.15-0.13-0.21-0.337-0.151-0.526c0.059-0.19,0.225-0.327,0.422-0.349   c3.054-0.34,6.176-1.401,6.176-6.686c0-1.38-0.458-2.582-1.36-3.569c-0.13-0.143-0.167-0.347-0.094-0.526   c0.139-0.34,0.524-1.537-0.042-3.198c-0.423,0.012-1.503,0.189-3.34,1.44c-0.122,0.083-0.274,0.109-0.416,0.068   c-1.084-0.302-2.293-0.465-3.499-0.472c-1.218,0.006-2.395,0.165-3.494,0.472c-0.141,0.042-0.293,0.015-0.416-0.068   c-1.83-1.245-2.91-1.427-3.346-1.438c-0.563,1.661-0.177,2.855-0.039,3.196c0.072,0.179,0.036,0.383-0.094,0.525   c-0.904,0.991-1.362,2.192-1.362,3.57c0,5.282,3.115,6.35,6.162,6.697c0.196,0.022,0.361,0.158,0.42,0.347   c0.059,0.188,0.001,0.395-0.147,0.525c-0.224,0.197-0.621,0.672-0.756,1.64c-0.023,0.17-0.133,0.316-0.29,0.386   c-0.75,0.338-3.316,1.237-4.858-1.413c-0.011-0.019-0.525-0.921-1.444-1.186c0.326,0.218,1.077,0.852,1.631,2.265   c0.043,0.133,0.808,2.409,4.313,1.646c0.148-0.031,0.301,0.003,0.419,0.098c0.118,0.094,0.187,0.237,0.188,0.387l0.011,2.17   c0.002,0.491-0.237,0.955-0.641,1.239C12,30.082,11.698,30.176,11.393,30.176z" fill="#455A64"/><path d="M15.737,31C7.474,31,1,24.411,1,16c0-3.629,1.238-7.111,3.485-9.804c0.176-0.212,0.493-0.241,0.704-0.063   C5.401,6.31,5.43,6.625,5.253,6.837C3.155,9.35,2,12.604,2,16c0,7.851,6.034,14,13.737,14C23.602,30,30,23.72,30,16   S23.602,2,15.737,2c-2.441,0-4.812,0.62-6.858,1.792C8.641,3.927,8.334,3.845,8.197,3.606C8.06,3.366,8.143,3.061,8.382,2.923   C10.579,1.665,13.123,1,15.737,1C24.153,1,31,7.729,31,16S24.153,31,15.737,31z" fill="#455A64"/><g><g><g><g><g><g><path d="M7.543,4.552c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0         c0-0.275,0.225-0.5,0.5-0.5l0,0C7.318,4.052,7.543,4.276,7.543,4.552L7.543,4.552z" fill="#455A64"/></g></g></g></g></g></g></g></svg>
                        
                        {/* <img className="iconImg" src="../Utils/Images/Icons/github.png"> */}
                    </div>

                    {/* <!-- HTML5 --> */}
                    <div className="icons">
                        <svg className="iconImg" enableBackground="new 0 0 32 32" id="Layer_1" version="1.0" viewBox="1 1 30 30" width="32px"><g><polygon fill="#E44D26" points="27.377,28.889 16.001,32 4.625,28.889 2,0 30.002,0  "/><polygon fill="#FF6C39" points="16,2 16,29.75 25.232,27.008 27.688,2  "/><polygon fill="#FFFFFF" points="24.363,6 7.607,6 8,10 8.619,17 19.503,17 19.148,20.984 16,21.99 12.857,20.984 12.648,19    8.803,19 9.262,23.987 16,25.99 22.728,23.986 23.718,13 12.252,13 12.002,10 24,10  "/></g><g/><g/><g/><g/><g/><g/></svg>
                    
                    </div>

                    {/* <!-- JAVASCRIPT --> */}
                    <div className="icons">
                        <svg className="iconImg"  fill="none" viewBox="0 0 124 141.53199999999998"><path d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z" fill="#e9ca32"/><path d="M62.468 129.277V12.085l51.064.17-9.106 104.851z" fill="#ffde25"/><g fill="#fff"><path d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"/></g></svg>
                        
                    </div>

                    {/* <!-- CSS3 --> */}
                    <div className="icons">
                        <svg className="iconImg" style={{enableBackground: "new 0 0 512 512"}} version="1.1" viewBox="0 0 512 512"><g id="_x31_21-css3"><g><g><g><g><path d="M47.575,16.379L85.6,447.023l170.751,47.852l170.686-47.822l38.092-430.674H47.575z        M47.575,16.379" style={{fill:"#2299F8"}}/></g><path d="M383.824,157.206l-4.801,54.098l-14.5,162.185l-108.172,29.994l-0.094,0.027l-108.119-30.021      l-7.541-84.817h52.968l3.938,43.992l58.785,15.908l0.029-0.027l58.875-15.912l8.023-73.3l-185.154,0.512l-5.251-50.125      l194.844-2.306l3.943-53.648l-204.005,0.572l-3.43-49.913h264.369L383.824,157.206z M383.824,157.206" style={{fill:"#FCFCFC"}}/></g></g></g></g><g id="Layer_1"/></svg>

                    </div>

                    {/* <!-- SQL --> */}
                    <div className="icons">
                        <svg className="iconImg" viewBox="0 0 1024 1024" version="1.1"><path d="M847.872 240.128v688c0 26.56-21.408 48-48 48h-576c-26.56 0-48-21.44-48-48v-832c0-26.592 21.44-48 48-48h432z" fill="#E9EDED"/><path d="M160 768.128v160c0 35.456 28.544 64 64 64h576c35.456 0 64-28.544 64-64v-160H160z" fill="#F8B84E"/><path d="M847.872 240.128h-144c-26.56 0-48-21.44-48-48v-144" fill="#F8B84E"/><path d="M336 288v48H288v32h48V416h32v-48H416v-32h-48V288h-32z m96 96c-13.344 0-24.8 6.176-33.312 14.688-8.512 8.512-14.688 19.968-14.688 33.312v32c0 12.704 5.664 23.616 13.568 32-7.904 8.384-13.568 19.296-13.568 32v32c0 12.704 5.664 23.616 13.568 32-7.904 8.384-13.568 19.296-13.568 32v32c0 13.344 6.176 24.8 14.688 33.312 8.512 8.512 19.968 14.688 33.312 14.688h160c13.344 0 24.8-6.176 33.312-14.688 8.512-8.512 14.688-19.968 14.688-33.312v-32c0-12.704-5.664-23.616-13.568-32 7.904-8.384 13.568-19.296 13.568-32v-32c0-12.704-5.664-23.616-13.568-32 7.904-8.384 13.568-19.296 13.568-32v-32c0-13.344-6.176-24.8-14.688-33.312-8.512-8.512-19.968-14.688-33.312-14.688h-160z m0 32h160c2.656 0 7.2 1.824 10.688 5.312 3.488 3.488 5.312 8 5.312 10.688v32a17.44 17.44 0 0 1-5.312 10.688 17.408 17.408 0 0 1-10.688 5.312h-160a17.408 17.408 0 0 1-10.688-5.312A17.408 17.408 0 0 1 416 464v-32c0-2.656 1.824-7.2 5.312-10.688A17.408 17.408 0 0 1 432 416z m0 96h160c2.656 0 7.2 1.824 10.688 5.312 3.488 3.488 5.312 8 5.312 10.688v32a17.44 17.44 0 0 1-5.312 10.688 17.408 17.408 0 0 1-10.688 5.312h-160a17.408 17.408 0 0 1-10.688-5.312A17.408 17.408 0 0 1 416 560v-32c0-2.656 1.824-7.2 5.312-10.688A17.408 17.408 0 0 1 432 512z m0 96h160c2.656 0 7.2 1.824 10.688 5.312 3.488 3.488 5.312 8 5.312 10.688v32a17.44 17.44 0 0 1-5.312 10.688 17.408 17.408 0 0 1-10.688 5.312h-160a17.408 17.408 0 0 1-10.688-5.312A17.408 17.408 0 0 1 416 656v-32c0-2.656 1.824-7.2 5.312-10.688A17.408 17.408 0 0 1 432 608z" fill="#F8B84E"/><path d="M623.872 799.936a16 16 0 0 0-15.744 16.256v126.432a16 16 0 0 0 0.256 4.32 16 16 0 0 0 0 0.064 16 16 0 0 0 0.352 1.44 16 16 0 0 0 0 0.064 16 16 0 0 0 0.128 0.416 16 16 0 0 0 0.448 1.12 16 16 0 0 0 0.864 1.824 16 16 0 0 0 0.64 0.992 16 16 0 0 0 1.76 2.144 16 16 0 0 0 0.352 0.416 16 16 0 0 0 0.192 0.192 16 16 0 0 0 1.056 0.896 16 16 0 0 0 0.384 0.32 16 16 0 0 0 1.12 0.736 16 16 0 0 0 2.432 1.248 16 16 0 0 0 0.896 0.32 16 16 0 0 0 5.376 0.864H688a16 16 0 1 0 0-32h-47.872v-111.808a16 16 0 0 0-16.256-16.256zM496.128 800a80.256 80.256 0 0 0-80 80c0 44 36 80 80 80 16.224 0 31.296-4.992 43.936-13.376l8.576 8.576a16 16 0 1 0 22.624-22.624l-8.512-8.512c8.416-12.672 13.376-27.808 13.376-44.064 0-44-36-80-80-80z m-193.6 0.128a16 16 0 0 0-2.016 0.384c-24.64 1.92-44.384 22.528-44.384 47.616 0 25.28 20.064 46.08 44.992 47.68a16 16 0 0 0 3.008 0.32h32c9.152 0 16 6.848 16 16 0 9.152-6.848 16-16 16h-64a16 16 0 1 0 0 32h64a16 16 0 0 0 3.296-0.384 48.096 48.096 0 0 0 44.704-47.616c0-25.152-19.84-45.888-44.576-47.68a16 16 0 0 0-3.424-0.32h-30.88a16 16 0 0 0-1.12 0 15.616 15.616 0 0 1-16-16c0-9.152 6.848-16 16-16h64a16 16 0 1 0 0-32H305.248a16 16 0 0 0-1.12 0 16 16 0 0 0-1.6 0z m193.6 31.872a47.776 47.776 0 0 1 43.2 68.672 16 16 0 0 0-11.2-4.672 16 16 0 0 0-11.456 27.264 47.744 47.744 0 0 1-68.576-43.264c0-26.688 21.344-48 48-48z" fill="#E9EDED"/></svg>
                        
                        {/* <img className="iconImg" src="../Utils/Images/Icons/sql.png">  */}
                    </div>

                    {/* <!-- C# --> */}
                    <div className="icons">
                        <svg className="iconImg" preserveAspectRatio="xMidYMid" viewBox="0 -1.428 255.582 290.108" width="2222"><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#a179dc"/><path d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z" fill="#280068"/><path d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345" fill="#390091"/><g fill="#fff"><path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"/><path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"/></g></svg>
                        
                    </div>

                    {/* <!-- JAVA --> */}
                    <div className="icons" id="javaIcon">
                        <svg className="iconImg"  style={{enableBackground:"new 0 0 512 512"}} version="1.1" viewBox="0 0 512 512" width="512px"><g id="_x31_81-java"><g><path d="M333.283,307.117c8.807-6.02,21.023-11.23,21.023-11.23s-34.768,6.29-69.357,9.165    c-42.315,3.503-87.775,4.221-110.595,1.167c-53.996-7.187,29.647-27.044,29.647-27.044s-32.433-2.154-72.413,17.07    C84.422,319.066,248.383,329.487,333.283,307.117z" style={{fill:"#5382A1"}}/><path d="M256.56,278.277c-17.07-38.362-74.659-72.054,0-130.99C349.727,73.797,301.93,26,301.93,26    c19.316,75.917-67.92,98.917-99.456,146.084C181.001,204.337,212.986,238.927,256.56,278.277z" style={{fill:"#F8981D"}}/><path d="M359.518,119.975c0.09,0-157.403,39.351-82.205,125.958c22.191,25.516-5.84,48.516-5.84,48.516    s56.332-29.108,30.457-65.495C277.762,194.993,259.254,178.103,359.518,119.975z" style={{fill:"#F8981D"}}/><path d="M354.039,362.999c-0.449,1.078-1.797,2.247-1.797,2.336    c115.266-30.277,72.861-106.824,17.787-87.416c-4.852,1.707-7.365,5.66-7.365,5.66s3.053-1.259,9.883-2.696    C400.396,275.044,440.377,318.168,354.039,362.999L354.039,362.999z" style={{fill:"#5382A1"}}/><path d="M396.443,418.971c0,0,13.027,10.692-14.285,19.047c-52.018,15.722-216.339,20.483-261.979,0.63    c-16.441-7.099,14.374-17.072,24.078-19.137c10.061-2.157,15.901-1.799,15.901-1.799c-18.238-12.847-117.963,25.247-50.671,36.119    C292.945,483.657,444.061,440.443,396.443,418.971L396.443,418.971z" style={{fill:"#5382A1"}}/><path d="M195.557,381.776c-70.706,19.766,43.035,60.555,133.055,22.011    c-14.732-5.748-25.334-12.397-25.334-12.397c-40.16,7.637-58.756,8.175-95.233,4.043    C177.948,392.019,195.557,381.776,195.557,381.776L195.557,381.776z" style={{fill:"#5382A1"}}/><path d="M357.092,469.103c-70.705,13.296-157.941,11.771-209.602,3.233c0-0.088,10.602,8.716,65.046,12.22    c82.834,5.302,210.051-2.966,213.016-42.136C425.553,442.42,419.803,457.245,357.092,469.103L357.092,469.103z" style={{fill:"#5382A1"}}/><path d="M317.922,343.144c-53.188,10.243-84.003,9.973-122.904,5.93    c-30.098-3.145-10.422-17.698-10.422-17.698c-77.982,25.874,43.304,55.164,152.281,23.269    C325.289,350.601,317.922,343.144,317.922,343.144z" style={{fill:"#5382A1"}}/></g></g><g id="Layer_1"/></svg>
                        
                        {/* <img className="iconImg" src="../Utils/Images/Icons/java.png"> */}
                    </div>

                    <div className="icons">
                        <img className="iconImg" src={require("../Utils/Images/Icons/react-native.png")}></img>
                    </div>

                    <div className="icons">
                        <img className="iconImg" src={require("../Utils/Images/Icons/unity.png")}></img>
                    </div>
                </div>
            </section>
        
    );
}

export default TechnologiesSection;