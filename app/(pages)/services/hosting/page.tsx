import HostingShowcase from '@/components/HostingShowCase'
import { CalendarPlus } from 'lucide-react'
import Link from 'next/link'
import { GoDotFill, GoStarFill } from 'react-icons/go'

const HostingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col md:flex-row w-full justify-between items-start gap-3 max-w-7xl mx-auto xl:py-20 pb-0 mt-10 sm:mt-0 px-4 lg:px-0">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Breadcrumb */}
          <nav className="mt-6" aria-label="breadcrumb">
            <ol className="flex items-center justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500">
                  Home
                </Link>
              </li>
              <GoDotFill size={10} className="mt-1 text-gray-500" />
              <li>
                <Link href="/services" className="hover:text-[#0B9944] hover:dark:text-green-500 transition-colors duration-500">
                  Services
                </Link>
              </li>
              <GoDotFill size={10} className="mt-1 text-gray-500" />
              <li className="text-[#0B9944] dark:text-green-500 transition-colors duration-500">
                Hosting and Domain
              </li>
            </ol>
          </nav>

          <h1 className="text-[40px] md:text-5xl lg:text-[4rem] font-bold leading-tight sm:max-w-4xl">
            Lightning-Fast
            <span className="inline-block" aria-label="Ocean of Tech Logo">
                <svg
                    width="76"
                    height="51"
                    viewBox="0 0 76 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 mx-2 h-auto sm:w-20 md:w-24 lg:w-28 xl:w-16 transition-all duration-300"
                >
                    {/* Left white half-circle with dark stroke */}
                    <mask id="left-mask">
                    <path
                        d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 0 32.263 0 25.5C0 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 0 25.5 0L25.5 25.5L25.5 51Z"
                        fill="white"
                    />
                    </mask>
                    <path
                    d="M25.5 51C18.737 51 12.251 48.3134 7.46878 43.5312C2.6866 38.749 0 32.263 0 25.5C0 18.737 2.6866 12.251 7.46878 7.46878C12.251 2.6866 18.737 0 25.5 0L25.5 25.5L25.5 51Z"
                    fill="white"
                    stroke="#202124"
                    strokeWidth="4"
                    mask="url(#left-mask)"
                    />

                    {/* Middle dark half-circle */}
                    <path
                    d="M50.5 51C43.737 51 37.251 48.3134 32.4688 43.5312C27.6866 38.749 25 32.263 25 25.5C25 18.737 27.6866 12.251 32.4688 7.46878C37.251 2.6866 43.737 0 50.5 0L50.5 25.5L50.5 51Z"
                    fill="#202124"
                    />

                    {/* Right green half-circle */}
                    <path
                    d="M75.5 51C68.737 51 62.251 48.3134 57.4688 43.5312C52.6866 38.749 50 32.263 50 25.5C50 18.737 52.6866 12.251 57.4688 7.46878C62.251 2.6866 68.737 0 75.5 0V25.5L75.5 51Z"
                    fill="#09B850"
                    />
                </svg>
            </span>
            Hosting That Scales
          </h1>

          <p className="text-lg max-w-3xl">
          Premium web hosting and domain registration services backed by 99.99% uptime, blazing-fast servers, and 24/7 expert support. Your website deserves the best infrastructure.
          </p>
          
          <div className="flex flex:col sm:flex-row items-center justify-center">
              <div className="grid md:grid-cols-2 gap-6 pt-6 sm:divide-x">
                  <Link className="flex items-center gap-2 group pe-3" href="https://g.page/r/CU3CZKX3tetcEBM/review" target="_blank">
                      <div className="text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                          </svg>
                      </div>
                      <div className="mt-2">
                          <h6 className="font-semibold group-hover:text-[#0B9944] dark:group-hover:text-[#09b850] transition-colors ease-in-out duration-500">10+ Google reviews</h6>
                          <div className="flex items-center gap-2 -mt-2">
                              <span className="text-xs mb-3">
                                  5/5
                              </span>
                              <ul className="flex items-center space-x-1 mb-3">
                                  <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                  <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                  <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                  <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                                  <li><GoStarFill className="fill-yellow-500" size={13}/></li>
                              </ul>
                          </div>
                      </div>
                  </Link>
                  <Link href="tel:0698902422" className="bg-[#202124] hover:bg-[#3c3e41] text-white px-[1.2rem] py-[0.8rem] rounded-sm font-semibold inline-flex gap-2 transition-all duration-500 ease-in-out items-center">
                      <CalendarPlus size={19}/> Book a meeting
                  </Link>
              </div>
          </div>

          <HostingShowcase />
        </div>
      </section>
    </div>
  )
}

export default HostingPage