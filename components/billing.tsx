'use client'

import React, { useState } from 'react';
import { BadgeCheck, Info, Rocket } from 'lucide-react';
import { LiaAwardSolid } from 'react-icons/lia';
import { PiHandshake } from 'react-icons/pi';
import { Button } from './ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

const PricingCards = () => {
  const [billingCycle, setBillingCycle] = useState('once-off');

  return (
    <div className="mx-auto mt-10 px-4">
      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-[#292a2d] p-1">
          <button
            onClick={() => setBillingCycle('once-off')}
            className={`px-6 py-2 text-sm font-medium rounded transition-all ${
              billingCycle === 'once-off'
                ? 'bg-white dark:bg-[#202124] text-gray-900 dark:text-white shadow'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Once-Off
          </button>
          <button
            onClick={() => setBillingCycle('recurring')}
            className={`px-6 py-2 text-sm font-medium rounded transition-all ${
              billingCycle === 'recurring'
                ? 'bg-white dark:bg-[#202124] text-gray-900 dark:text-white shadow'
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            Recurring
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center">
        {/* Fixed Price Card */}
        <div className="w-full max-w-md">
          <div className="bg-[#f8f8f8] dark:bg-[#202124] rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
            <div className="p-6">
              <h6 className="text-2xl font-semibold mb-2">Fixed Price</h6>
              <p className="mb-4">
                Perfect for well-defined projects with clear requirements and deliverables.
              </p>
              
              {/* Pricing */}
              <div className="mb-4">
                {billingCycle === 'once-off' ? (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R150,000</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">- R500,000</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">One-time payment</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R25,000</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">3-6 month engagement</p>
                  </div>
                )}
              </div>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                <LiaAwardSolid size={20} />
                Small to medium projects
              </span>

              <div className="relative flex p-0 mt-6 items-center">
                <p className="flex-shrink me-4">Included</p>
                <div className="flex-grow border-t -mt-[1.2rem]"></div>
              </div>

              <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Detailed project scope
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Fixed timeline & budget
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Milestone-based payments
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Complete documentation
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  3 months post-launch support
                </li>
              </ul>
              <Button className="bg-[#3c3e41] hover:dark:bg-[#161618] text-white rounded-[0.2rem] w-full">
                <span className="flex gap-2 items-center justify-center">Get started</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Time & Materials Card */}
        <div className="w-full max-w-md mt-4 shadow-sm">
          <div className="relative bg-[#f8f8f8] dark:bg-[#202124] border-2 border-green-500 rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
            <div className="bg-green-500 rounded-xs px-3 py-1 text-xs text-white absolute top-0 right-0 mt-5 mr-5">
              Most Popular
            </div>
            <div className="p-6">
              <h6 className="text-2xl font-semibold mb-2">Time & Materials</h6>
              <p className="mb-4">
                Ideal for evolving projects that require flexibility and iterative development.
              </p>

              {/* Pricing */}
              <div className="mb-4">
                {billingCycle === 'once-off' ? (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R850</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">- R1,500/hr</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pay as you go</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R45,000</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">160 hours monthly retainer</p>
                  </div>
                )}
              </div>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                <PiHandshake size={20} />
                Long-term partnerships
              </span>

              <div className="relative flex p-0 mt-6 items-center">
                <p className="flex-shrink me-4">Included</p>
                <div className="flex-grow border-t -mt-[1.2rem]"></div>
              </div>

              <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Flexible scope adjustments
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Pay for actual hours worked
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Sprint-based delivery
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Weekly progress reports
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Priority support access
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  And more
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex items-center gap-1 text-green-600 hover:text-green-700 ml-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium">Show Everything</span>
                        <Info className="w-4 h-4" />
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="relative flex p-0 items-center mb-3 cursor-pointer">
                        <p className="flex-shrink me-4">More</p>
                        <div className="flex-grow border-t -mt-[1.2rem]"></div>
                      </div>
                      <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                        <li className="flex items-center dark:text-[#c4c5c7]">
                          <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                          Transparent time tracking
                        </li>
                        <li className="flex items-center dark:text-[#c4c5c7]">
                          <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                          Bi-weekly sprint planning
                        </li>
                        <li className="flex items-center dark:text-[#c4c5c7]">
                          <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                          Code reviews & QA testing
                        </li>
                        <li className="flex items-center dark:text-[#c4c5c7]">
                          <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                          Technical documentation
                        </li>
                        <li className="flex items-center dark:text-[#c4c5c7]">
                          <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                          Agile methodology
                        </li>
                      </ul>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
              <Button className="bg-[#09b850] hover:bg-[#0B9944] text-white rounded-[0.2rem] w-full">
                Get started
              </Button>
            </div>
          </div>
        </div>

        {/* Dedicated Team Card */}
        <div className="w-full max-w-md">
          <div className="bg-[#f8f8f8] dark:bg-[#202124] rounded-sm shadow-2xs overflow-hidden group transition-shadow duration-300">
            <div className="p-6">
              <h6 className="text-2xl font-semibold mb-2">Dedicated Team</h6>
              <p className="mb-4">
                Get a dedicated team of developers working exclusively on your project.
              </p>

              {/* Pricing */}
              <div className="mb-4">
                {billingCycle === 'once-off' ? (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R500,000+</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">6-12 month project</p>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">R85,000</span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">3-5 person team</p>
                  </div>
                )}
              </div>

              <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#292a2d] border rounded-[0.2rem] inline-flex items-center gap-2">
                <Rocket size={20} />
                Enterprise solutions
              </span>

              <div className="relative flex p-0 mt-6 items-center">
                <p className="flex-shrink me-4">Included</p>
                <div className="flex-grow border-t -mt-[1.2rem]"></div>
              </div>

              <ul className="space-y-2 mb-2 sm:mb-4 w-full">
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Full-time team commitment
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Direct team communication
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Your project roadmap
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  Scalable team size
                </li>
                <li className="flex items-center dark:text-[#c4c5c7]">
                  <BadgeCheck className="text-[#0B9944] mr-2" size="18" />
                  6 months post-launch support
                </li>
              </ul>
              <Button className="bg-[#3c3e41] hover:dark:bg-[#161618] text-white rounded-[0.2rem] w-full">
                <span className="flex gap-2 items-center justify-center">Get started</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Note */}
      <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>All prices in South African Rand (ZAR). Final pricing depends on project complexity and requirements.</p>
      </div>
    </div>
  );
};

export default PricingCards;