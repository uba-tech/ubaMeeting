angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Schedule', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var events = [
            {
                "id": 0,
                "imageUrl": " ",
                "name": "NAHU PPACA Certification Program",
                "speaker": "Speaker 1",
                "day": "Sunday",
                "time": "8:00 am - 4:00 pm",
                "room": " ",
                "snippet": "NAHU PPACA Certification Program Description."
            },
            {
                "id": 1,
                "imageUrl": " ",
                "name": "DataSmart Vertical",
                "speaker": "Speaker 2",
                "day": "Sunday",
                "time": "8:00 am - 12:00 pm",
                "room": " ",
                "snippet": "DataSmart Vertical Description."
            },
            {
                "id": 2,
                "imageUrl": " ",
                "name": "Retirement Vertical",
                "speaker": "Speaker 3",
                "day": "Sunday",
                "time": "12:00 pm - 1:30 pm",
                "room": " ",
                "snippet": "Retirement Vertical Description."
            },
            {
                "id": 3,
                "imageUrl": " ",
                "name": "Regional UBA Meetings",
                "speaker": "Speaker 4",
                "day": "Sunday",
                "time": "2:00 pm - 4:00 pm",
                "room": " ",
                "snippet": "Regional UBA Meetings Description."
            },
            {
                "id": 4,
                "imageUrl": " ",
                "name": "First-Time Attendee Orientation",
                "speaker": "Speaker 5",
                "day": "Sunday",
                "time": "2:00 pm - 3:30 pm",
                "room": " ",
                "snippet": "First-Time Attendee Orientation Description."
            },
            {
                "id": 5,
                "imageUrl": " ",
                "name": "Business Meeting (Principals only)",
                "speaker": " ",
                "day": "Sunday",
                "time": "4:00 pm - 6:00 pm",
                "room": " ",
                "snippet": "Business Meeting (Principals only) Description."
            },
            {
                "id": 6,
                "imageUrl": " ",
                "name": "Welcome Reception",
                "speaker": " ",
                "day": "Sunday",
                "time": "6:00 pm - 7:30 pm",
                "room": " ",
                "snippet": "Welcome Reception Description."
            },
            {
                "id": 7,
                "imageUrl": " ",
                "name": "Friends of Bill W.",
                "speaker": " ",
                "day": "Sunday",
                "time": "7:30 pm",
                "room": " ",
                "snippet": "Friends of Bill W. Description."
            },
            {
                "id": 8,
                "imageUrl": " ",
                "name": "Breakfast and Networking",
                "speaker": " ",
                "day": "Monday",
                "time": "7:30 am - 9:00 am",
                "room": " ",
                "snippet": "Breakfast and Networking Description."
            },
            {
                "id": 9,
                "imageUrl": " ",
                "name": "Health Care Provider Vertical",
                "speaker": " ",
                "day": "Monday",
                "time": "7:30 am - 8:30 am",
                "room": " ",
                "snippet": "Health Care Provider Vertical Description."
            },
            {
                "id": 10,
                "imageUrl": " ",
                "name": "Business Meeting",
                "speaker": " ",
                "day": "Monday",
                "time": "9:00 am - 9:15 am",
                "room": " ",
                "snippet": "Business Meeting Description."
            },
            {
                "id": 11,
                "imageUrl": " ",
                "name": "Main Session",
                "speaker": "Janet Trautwein, EVP & CEO, NAHU",
                "day": "Monday",
                "time": "9:15 am - 10:15 am",
                "room": " ",
                "snippet": "Main Session Description."
            },
            {
                "id": 12,
                "imageUrl": " ",
                "name": "Break",
                "speaker": " ",
                "day": "Monday",
                "time": "10:15 am - 10:30 am",
                "room": " ",
                "snippet": "Break"
            },
            {
                "id": 13,
                "imageUrl": " ",
                "name": "Marsh Berry Organic Growth",
                "speaker": " ",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": " ",
                "snippet": "Marsh Berry Organic Growth Description."
            },
            {
                "id": 14,
                "imageUrl": " ",
                "name": "HIPAA Compliance",
                "speaker": " ",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": " ",
                "snippet": "HIPAA Compliance Description."
            },
            {
                "id": 15,
                "imageUrl": " ",
                "name": "Technology (Wisdom Network 4, etc.)",
                "speaker": " ",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": " ",
                "snippet": "Technology (Wisdom Network 4, etc.) Description."
            },
            {
                "id": 16,
                "imageUrl": " ",
                "name": "Mutual of Omaha (topic to be announced)",
                "speaker": " ",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": " ",
                "snippet": "Mutual of Omaha (topic to be announced) Description."
            },
            {
                "id": 17,
                "imageUrl": " ",
                "name": "Lunch with Linda",
                "speaker": "Linda Rowings, J.D., Chief Compliance Officer, UBA",
                "day": "Monday",
                "time": "12:15 pm - 1:30 pm",
                "room": " ",
                "snippet": "Lunch with Linda Description."
            },
            {
                "id": 18,
                "imageUrl": " ",
                "name": "General Session",
                "speaker": "Rob Ruiz-Moss, Wellpoint",
                "speakerTwo": "John Wiesler, Humana",
                "day": "Monday",
                "time": "2:00 pm - 4:00 pm",
                "room": " ",
                "snippet": "General Session Description."
            },
            {
                "id": 19,
                "imageUrl": " ",
                "name": "PowerPaks",
                "speaker": " ",
                "day": "Monday",
                "time": "4:00 pm - 6:00 pm",
                "room": " ",
                "snippet": "PowerPaks Description."
            },
            {
                "id": 20,
                "imageUrl": " ",
                "name": "Staff Roundtable – Q4 strategy, HR support for clients, Compliance",
                "speaker": " ",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": " ",
                "snippet": "Staff Roundtable – Q4 strategy, HR support for clients, Compliance Description."
            },
            {
                "id": 21,
                "imageUrl": " ",
                "name": "All Star Producers",
                "speaker": " ",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": " ",
                "snippet": "All Star Producers Description."
            },
            {
                "id": 22,
                "imageUrl": " ",
                "name": "Branding and Marketing",
                "speaker": " ",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": " ",
                "snippet": "Branding and Marketing Description."
            },
            {
                "id": 23,
                "imageUrl": " ",
                "name": "Dine-Arounds",
                "speaker": " ",
                "day": "Monday",
                "time": "6:00 pm - 8:30 pm",
                "room": " ",
                "snippet": "Dine-Arounds Description."
            },
            {
                "id": 24,
                "imageUrl": " ",
                "name": "Rock Concert – sponsored by The Principal",
                "speaker": " ",
                "day": "Monday",
                "time": "8:30 pm",
                "room": " ",
                "snippet": "Rock Concert – sponsored by The Principal Description."
            },
            {
                "id": 25,
                "imageUrl": " ",
                "name": "Breakfast & Networking",
                "speaker": " ",
                "day": "Tuesday",
                "time": "7:30 am - 8:30 am",
                "room": " ",
                "snippet": "Breakfast & Networking Description."
            },
            {
                "id": 26,
                "imageUrl": " ",
                "name": "Business Meeting",
                "speaker": " ",
                "day": "Tuesday",
                "time": "8:30 am - 9:00 am",
                "room": " ",
                "snippet": "Business Meeting Description."
            },
            {
                "id": 27,
                "imageUrl": " ",
                "name": "General Session",
                "speaker": "Dan Clark, CSP, CPAE, President & CEO, Clark Success Systems",
                "day": "Tuesday",
                "time": "9:00 am - 10:00 am",
                "room": " ",
                "snippet": "General Session Description."
            },
            {
                "id": 28,
                "imageUrl": " ",
                "name": "HR Practice Build – Buy or Rent?",
                "speaker": " ",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": " ",
                "snippet": "HR Practice Build – Buy or Rent? Description."
            },
            {
                "id": 29,
                "imageUrl": " ",
                "name": "Colonial Life (topic to be announced)",
                "speaker": " ",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": " ",
                "snippet": "Colonial Life (topic to be announced) Description."
            },
            {
                "id": 30,
                "imageUrl": " ",
                "name": "Don’t Write Business the Old-Fashioned Way",
                "speaker": " ",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": " ",
                "snippet": "Don’t Write Business the Old-Fashioned Way Description."
            },
            {
                "id": 31,
                "imageUrl": " ",
                "name": "Captives",
                "speaker": " ",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": " ",
                "snippet": "Captives Description."
            }
        ];

        return {
            all: function () {
                return events;
            },
            get: function (eventId) {
                // Simple index lookup
                return events[eventId];
            }
        }
    })
    
    .factory('Evaluations', function () {
        // Might use a resource here that returns a JSON array

        var evals = [
            {
                "id": 0,
                "name": "NAHU PPACA Certification Program",
                "speaker": " ",
                "url": "#"
            },
            {
                "id": 1,
                "name": "Business Meeting",
                "speaker": " ",
                "url": "#"
            }
        ];

        return {
            all: function () {
                return evals;
            },
            get: function (evaluationId) {
                // Simple index lookup
                return evals[evaluationId];
            }
        }
    })
    
    .factory('Presentations', function () {
        // Might use a resource here that returns a JSON array

        var presentations = [
            {
                "id": 0,
                "name": "NAHU PPACA Certification Program",
                "url": "https://uba-videos.s3.amazonaws.com/uba-app/presentations/2014FallMeetingorientation_bwo.pdf"
            },
            {
                "id": 1,
                "name": "Business Meeting",
                "url": "#"
            }
        ];

        return {
            all: function () {
                return presentations;
            },
            get: function (presentationId) {
                // Simple index lookup
                return presentations[presentationId];
            }
        }
    })
    
    .factory('Speakers', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var speakers = [
            {
                "id": 0,
                "name": "NAHU PPACA Certification Program",
                "speaker": " ",
                "url": "#"
            },
            {
                "id": 1,
                "imageUrl": " ",
                "name": "Business Meeting (Principals only)",
                "speaker": " ",
                "day": "Sunday",
                "snippet": "Business Meeting (Principals only) Description."
            }
        ];

        return {
            all: function () {
                return speakers;
            },
            get: function (speakerId) {
                // Simple index lookup
                return speakers[speakerId];
            }
        }
    })


    .factory('Vendors', function () {

        var vendors = [
            {
                "id": 0,
                "name": "AmWins Group Benefits",
                "image": "http://mobile.ubabenefits.com/Portals/0/Images/amwins_benefit-group.jpg",
                "partnerType": "Certified Solution",
                "description": "The Group Benefits division of AmWINS Group, Inc. develops, distributes and administers the industry’s most innovative solutions. Together, the operating companies that comprise AmWINS Group Benefits create a complete matrix of support for our clients. Each offers a solid history of product innovation and outstanding service.",
                "booth": ""
            },

            {
                "id": 1,
                "name": "Blueprint Consulting Group",
                "image": "http://mobile.ubabenefits.com/Portals/0/Images/Blueprint-logo-new2.png",
                "partnerType": "Certified Solution",
                "description": "At Blueprint we are business advisors that work on developing strategies to make your business more valuable. Simply put if you are thinking of selling or wish to grow the business to a point where you have the option, that’s where we step in. We focus on creating high performance business culture, clear direction, high staff engagement as well as business systems.",
                "booth": ""
            },

            {
                "id": 2,
                "name": "Reliance Standard",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Reliance_Standard_notag2.jpg",
                "partnerType": "Strategic Partner",
                "description": "Reliance Standard, with more than 100 years inReliance Standard logo the insurance business, is a leading carrier specializing in disability, group term life and a suite of voluntary benefits. Reliance Standard offers competitive commission schedules and policies and maintains online tools to help advisors and their clients get the most from their ancillary products.",
                "booth": ""
            },

            {
                "id": 3,
                "name": "Symetra",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Symetra_2012_web.jpg",
                "partnerType": "Strategic Partner",
                "description": "With more than 50 years’ experience, Symetra elevates people's lives through retirement, employee benefits, and life insurance products that help provide security and confidence.",
                "booth": ""
            },

            {
                "id": 4,
                "name": "Principal Financial Group",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/principal_financial_group.jpg",
                "partnerType": "Strategic Partner",
                "description": "The Principal Financial Group® (The Principal®) is a leading global financial company offering businesses, individuals and institutional clients a wide range of financial products and services. Our range of products and services includes retirement solutions, insurance, and investment products through our diverse family of financial services companies and national network of financial professionals.",
                "booth": ""
            },

            {
                "id": 5,
                "name": "UMR",
                "image": "http://mobile.ubabenefits.com/portals/0/UMR.png",
                "partnerType": "Strategic Partner",
                "description": "We’re big.But we’re also local and regional in scope with claim offices in each time zone and account management staff close to our customers. More than 3,000 people will focus their expertise and experience on your plan. More than 1400 customers range from mid-sized, self-funded companies to coalitions of employers to large State governments.",
                "booth": ""
            },

            {
                "id": 6,
                "name": "Prescription Care Management",
                "image": "http://www.ubabenefits.com/Portals/0/Logos/Partners/prescription_care_management.jpg",
                "partnerType": "Certified Solution",
                "description": "Prescription Care Management (PCM) was created to solve a large, important and costly problem: To counter the aggressive marketing by Pharmaceutical Manufacturers to physicians and end consumers. These marketing practices have created a dramatic increase in the prescribing of high cost medications. There are benefit companies which claim to offer 'utilization management and medication management services' or cost-saving programs but they typically rely on the larger margin drugs and rebates from manufacturers to realize a cost savings. In turn, companies and plan members end up paying more for their prescription costs rather than less. With so many different pieces to the prescription puzzle, the plan member has no way of knowing how much the pharmacy benefit program has paid for the prescription as the costs are not tracked, verified, or audited.",
                "booth": ""
            },

            {
                "id": 7,
                "name": "Ethicare",
                "image": "http://mobile.ubabenefits.com/Portals/0/Images/ethicare-advisors.jpg",
                "partnerType": "Certified Solution",
                "description": "EthiCare Advisors has been a leading cost containment and medical claims settlement firm since its inception in 2002. We have been privately owned and operated since day one with a burning focus on the cost containment needs of the self-funded and fully insured insurance communities. We have consistently helped hundreds of fully insured carriers, stop-loss insurance carriers, managing general underwriters (MGUs), third-party administrators (TPAs), multiple employer union and government plans, and self-funded self- administered health plans achieve savings that improves their bottom lines.",
                "booth": ""
            },

            {
                "id": 8,
                "name": "Unum",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Unum_2010_Final.jpg",
                "partnerType": "Strategic Partner",
                "description": "At Unum, we’re in the business of helping people through difficult times in their lives. Our financial protection benefits provide individuals and their families with the financial security they need to better cope with the loss of a loved one or the inability to work due to illness or injury. We offer a full array of benefits solutions – including education, enrollment services and valuable claim support – to meet the needs of both employers and their workers. And our award-winning absence management and vocational rehabilitation services help ease the disruption to both businesses and employers by enabling them to return to full capacity as soon as they are able.",
                "booth": ""
            },

            {
                "id": 9,
                "name": "Mutual of Omaha",
                "image": "http://mobile.ubabenefits.com/portals/0/MutualOmaha.png",
                "partnerType": "Strategic Partner",
                "description": "Mutual of Omaha is a Fortune 500 mutual insurance and financial services company based in Omaha, Nebraska. The company was founded in 1909 as Mutual Benefit Health and Accident Association.",
                "booth": ""
            },

            {
                "id": 10,
                "name": "The Standard",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Standard%20Logo.jpg",
                "partnerType": "Strategic Partner",
                "description": "The Standard is a family of companies dedicated to one core purpose: helping people achieve financial well-being and peace of mind. Founded in 1906 in Portland, Ore., The Standard has earned a national reputation for quality products, expert resources, superior service, innovation and strong financial performance.",
                "booth": ""
            },

            {
                "id": 11,
                "name": "Sunlife",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/SunLife_2011.png",
                "partnerType": "Strategic Partner",
                "description": "Sun Life Financial Inc. is an international financial services company known primarily as a life insurance company, but also has a strong presence in investment management with over $494 billion in assets under management.[1] Based in Toronto, Canada, Sun Life and its partners provide insurance, retirement and investment solutions for individuals and businesses around the world including Canada, the United States, the United Kingdom, Hong Kong, the Philippines, Japan, Indonesia, India, China and Bermuda. Sun Life ranks number 236 on the Forbes Global 2000 list for 2010 as well as on the Fortune 500 list.",
                "booth": ""
            },

            {
                "id": 12,
                "name": "The Hartford",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Hartford%202009_2.jpg",
                "partnerType": "Strategic Partner",
                "description": "The Hartford Financial Services Group, Inc. (NYSE:HIG), usually known as The Hartford, is a Fortune 500 company and one of America’s largest investment and insurance companies. The Hartford's 2012 revenues were $26.4 billion. The company’s earnings are divided between property-and-casualty operations and group benefits and mutual funds.",
                "booth": ""
            },

            {
                "id": 13,
                "name": "Touchpoints",
                "image": "http://wn.ubabenefits.com/Portals/26/Graphics/Touchpoints_logo_smallx.jpg",
                "partnerType": "Strategic Partner",
                "description": "Touchpoints was founded in 2009 by consultants with a combined 60 plus years of HR, employee benefit communication, organizational development and change management experience. Built on a foundation of best practices, we help our business clients take complex ideas, messages and programs, and make them easy to understand.",
                "booth": ""
            },

            {
                "id": 14,
                "name": "The Guardian",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/Guardian%2003-04.png",
                "partnerType": "Strategic Partner",
                "description": "Guardian Anytime employee benefits plans support brokers, employers and employees with a portfolio of innovative insurance products and technology.",
                "booth": ""
            },

            {
                "id": 15,
                "name": "VSP Vision Care",
                "image": "http://www.ubabenefits.com/Portals/0/Logos/Partners/VSP-logo.png",
                "partnerType": "Strategic Partner",
                "description": "Celebrate the magic of clear, healthy vision. Our personalized eyecare helps you see well, stay healthy and maximize your individual potential. That vision drives everything we do.",
                "booth": ""
            },

            {
                "id": 16,
                "name": "HR Pro",
                "image": "http://mobile.ubabenefits.com/portals/0/Images/HRPro.png",
                "partnerType": "Partner Provided Solution",
                "description": "HRPro was originally established as a full service licensed Third Party Administrator, specializing in the administration of Cobra and Flexible Spending Accounts. Our legacy of hard work and partnering with Broker/Advisors has led to great successes and continues to foster many mutually beneficial relationships. Today our services have expanded to include HRIS Systems, Health and Welfare Administration, Payroll, Time and Labor Management, Billing and Enrollment, Health Savings Accounts, Health Reimbursement Arrangements, and Dependent Audit Services.",
                "booth": ""
            },

            {
                "id": 17,
                "name": "Benefits Passport",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/BenefitPassport.jpg",
                "partnerType": "UBA Solutions",
                "description": "The UBA Benefits Passport® private insurance exchange is a new way for employers to offer affordable insurance options to employees that is simple to implement and carefree to manage. This self-service platform provides employers a choice of multiple plans, the ability to define a level contribution, 24/7access and emergency support, and mitigates the burden of administration and compliance risk. Simply put, Benefits Passport provides you an advantage in acquiring and retaining employees and makes it easy for your employees to shop, understand and appreciate their benefits package.",
                "booth": ""
            },

            {
                "id": 18,
                "name": "Compliance Dashboard",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/ComplianceDashboard_Logo.jpg",
                "partnerType": "Strategic Partner",
                "description": "Compliance Dashboard by Capstone Administrators is an online compliance tool that helps your clients assess their compliance needs and track tasks that allows them to meet their federal health and welfare law obligations.",
                "booth": ""
            },

            {
                "id": 19,
                "name": "Colonial Life",
                "image": "http://www.ubabenefits.com/portals/0/Logos/Partners/CL-2013-logo-NOtag-2color-process.png",
                "partnerType": "Strategic Partner",
                "description": "Colonial Life & Accident Insurance Company is a market leader in providing benefits solutions in one neat package: excellence in communications, enrollments, service, and personal insurance products and services that make benefits count for employers and their employees alike.",
                "booth": ""
            },

            {
                "id": 20,
                "name": "GeoBlue",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/GeoBlue%20logo.jpg",
                "partnerType": "Certified Solution",
                "description": "GeoBlue has provided international benefits to major multinational corporations for more than 17 years and is the exclusive international solution for all Blue Cross and Blue Shield Plans. We license portions of our data, tools, and services to 19 international insurance carriers in the US, Canada, Australia, Western Europe, the Middle East, and China.",
                "booth": ""
            },

            {
                "id": 21,
                "name": "Castlight Health",
                "image": "http://www.ubabenefits.com/Portals/0/Logos/Partners/Castlight-Logo.png",
                "partnerType": "Certified Solution",
                "description": "Castlight Health was founded in 2008 by Todd Park, Bryan Roberts and Giovanni Colella. Together, they had a simple but far-reaching dream: to transform health care in the United States. Having spent their careers at the intersection of health care and technology, they sought to tackle one of health care's fundamental problems -- the lack of transparency into the price and quality of health care. Nearly every person they met told them that it could not be done and that it would never happen because the complexity of the problem was insolvable. Today, five years in, Castlight is helping employers across the country address a broad range of enterprise health care and benefits challenges. Even more, Castlight is helping people make better health care decisions and achieve better outcomes for themselves and their families. At Castlight Health, we're incredibly proud of our passionate, mission-driven team. Together, with our customers and partners, we are living our dream and truly transforming health care.",
                "booth": ""
            },

            {
                "id": 22,
                "name": "HR Services, Inc.",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/HR_Service_Inc_Logo_2012.jpg",
                "partnerType": "Certified Solution",
                "description": "HR Service, Inc. provides the following compliance solutions to ensure clients pass ERISA audits and enjoy compliance peace of mind.",
                "booth": ""
            },

            {
                "id": 23,
                "name": "Benefitbay",
                "image": "http://mobile.ubabenefits.com/portals/0/benefitbay.png",
                "partnerType": "Partner Provided Solution",
                "description": "benefitbay™ was developed to meet the needs of small and mid-sized employers under the Affordable Care Act ('Obamacare'). Experienced benefits advisors including leading members of the United Benefits Advisors (UBA) recognized that the needs of smaller employers were not being specifically addressed under the new legislation, and that there was an opportunity to provide significantly better benefits experience for employers and employees in companies with under 50 employees. Partnered with experienced business developers and technology experts who have produced top quality websites for Fortune 500 businesses, the idea was launched, financial support from highly selective angel and venture investors was secured, and a top quality website for the business was under development.",
                "booth": ""
            },

            {
                "id": 24,
                "name": "TeleContact Resource Solutions",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/TeleContactinc2.jpg",
                "partnerType": "Certified Solution",
                "description": "Since 1994, TeleContact Resource Services has provided marketing solutions for more than 3,000 clients nationwide in over 50 different industries. Their advanced marketing and lead generation services that have helped advisors across the nation capture millions of dollars in new business revenue.",
                "booth": ""
            },

            {
                "id": 25,
                "name": "PT Services Group",
                "image": "http://wn4.ubabenefits.com/portals/0/Images/Solutions/PTServices.png",
                "partnerType": "Certified Solution",
                "description": "Is it your best skill? Since 1992, The PT Services Group has specialized in appointment setting for the top producers in the insurance and financial services industries. We give them the freedom to focus exclusively on serving their clients and talking to potential prospects.",
                "booth": ""
            },

            {
                "id": 26,
                "name": "ThinkHR",
                "image": "http://mobile.ubabenefits.com/Portals/0/Images/ThinnkHR_logo.png",
                "partnerType": "Certified Solution",
                "description": "ThinkHR offers a whole new way of addressing the problem with our unique combination of technology and human assistance to help companies ensure HR compliance, resolve people issues in the moment that matters and implement best practices to bring out the best in employees.",
                "booth": ""
            }

        ];

        return {
            all: function () {
                return vendors;
            },
            get: function (venderId) {
                // Simple index lookup
                return vendors[venderId];
            }
        }
    });
