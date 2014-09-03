angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
    .factory('Schedule', function () {
        // Might use a resource here that returns a JSON array

        var events = [
            {
                "id": 0,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "NAHU PPACA Certification Program",
                "speaker": " ",
                "day": "Sunday",
                "time": "8:00 am - 4:00 pm",
                "room": "Guggenheim",
                "snippet": "NAHU PPACA Certification Program Description."
            },
            {
                "id": 1,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "DataSmart Steering Committe",
                "speaker": " ",
                "day": "Sunday",
                "time": "8:00 am - 12:00 pm",
                "room": "Avedon C",
                "snippet": "DataSmart Vertical Description."
            },
            {
                "id": 2,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "Retirement Vertical",
                "speaker": " ",
                "day": "Sunday",
                "time": "12:00 pm - 1:30 pm",
                "room": "Gallery 424",
                "snippet": "Retirement Vertical Description."
            },
            {
                "id": 3,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "Regional UBA Meetings",
                "speaker": " ",
                "day": "Sunday",
                "time": "2:00 pm - 4:00 pm",
                "room": "Various",
                "snippet": "Regional UBA Meetings Description."
            },
            {
                "id": 4,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "First-Time Attendee Orientation",
                "speaker": "Les McPhearson - CEO, United Benefit Advisors",
                "speaker2": "Matt Kistler - VP of Business Development, United Benefit Advisors",
                "speaker3": "Scott Borders - IT Director, United Benefit Advisors",
                "speaker4": "Paul Zumbrook - Senior VP, Partner Relations, United Benefit Advisors",
                "speaker5": "Jason Reeves - Survey Director, United Benefit Advisors",
                "speaker6": "Linda Rowings - Chief Compliance Officer, United Benefit Advisors",
                "speaker7": "Bill Olson - Chief Marketing Director, United Benefit Advisors",
                "day": "Sunday",
                "time": "2:00 pm - 3:30 pm",
                "room": "Montrose",
                "audience": "New Partners and first-time meeting attendees",
                "snippet": "This session, designed for new Partners and first-time meeting attendees, will provide some history of UBA, an overview of the benefits of Partnership, and touch on some of the most utilized Partner tools and services."
            },
            {
                "id": 5,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "Business Meeting (Principals only)",
                "speaker": " ",
                "day": "Sunday",
                "time": "4:00 pm - 6:00 pm",
                "room": "Guggenheim",
                "snippet": "Business Meeting (Principals only) Description."
            },
            {
                "id": 6,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "Welcome Reception",
                "speaker": " ",
                "day": "Sunday",
                "time": "6:00 pm - 7:30 pm",
                "room": "Foyer",
                "snippet": "Welcome Reception Description."
            },
            {
                "id": 7,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Sunday.png",
                "name": "Friends of Bill W.",
                "speaker": " ",
                "day": "Sunday",
                "time": "7:30 pm",
                "room": "Getty",
                "snippet": "Friends of Bill W. Description."
            },
            {
                "id": 8,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Breakfast and Networking",
                "speaker": " ",
                "day": "Monday",
                "time": "7:30 am - 9:00 am",
                "room": "Louvre",
                "snippet": "Breakfast and Networking Description."
            },
            {
                "id": 9,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "benefitbay Breakout Session",
                "speaker": " ",
                "day": "Monday",
                "time": "7:30 am - 8:00 am",
                "room": "Gallery 424",
                "snippet": "benefitbay Breakout Session Description."
            },
            {
                "id": 10,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Health Care Provider Vertical",
                "speaker": "Kathy Colbert - Marketing & Communications Coordinator, Cowden Associates, Inc.",
                "speaker2": "Peter Freska - Benefits Consultant, The LBL Group",
                "day": "Monday",
                "time": "7:30 am - 8:30 am",
                "room": "Metropolitan",
                "snippet": "Health Care Provider Vertical Description."
            },
            {
                "id": 11,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "CEO Kickoff",
                "speaker": " ",
                "day": "Monday",
                "time": "9:00 am - 9:15 am",
                "room": "Guggenheim",
                "snippet": "CEO Kickoff Description."
            },
            {
                "id": 12,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Legislative Update and Industry Outlook",
                "speaker": "Janet Trautwein - CEO, National Association of Healthcare Underwriters",
                "day": "Monday",
                "time": "9:15 am - 10:15 am",
                "room": "Guggenheim",
                "audience": "Principals, producers and staff",
                "snippet": "This session will provide an insider’s view of politics inside the Beltway and possible changes due to the mid-term elections. Ms. Trautwein will also discuss what Congress is looking at in terms of modifications to the ACA and the chances of those changes becoming reality. Current and upcoming regulatory events will be covered, with an overview of immediate compliance issues and how your clients should prepare."
            },
            {
                "id": 13,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Break",
                "speaker": " ",
                "day": "Monday",
                "time": "10:15 am - 10:30 am",
                "room": " ",
                "snippet": "Break"
            },
            {
                "id": 14,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Confidently Investing to Drive Organic Growth",
                "speaker": "Wayne Walkotten - CPA, CVA, Executive VP, MarshBerry",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": "Guggenheim",
                "audience": "Principals and future agency leaders",
                "snippet": "This session will focus on the necessary investments to sustain and grow your firm. Without well managed advisor hires for perpetuation, a sale of your firm is inevitable. This session will focus on the hiring and mentoring of new salespeople, along with improving the success of your existing producer/advisor team."
            },
            {
                "id": 15,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "HIP on HIPAA",
                "speaker": "Kelly Hugh, JD - Human Resources Consultant, CIC Benefit Consulting Group",
                "speaker2": "Andrea Kinkade - President and Owner, Kaminsky & Associates, Inc.",
                "speaker3": "Josie Martinez - Partner and General Counsel, EBS Capstone",
                "speaker4": "Lisa Scott - CEBS, Director, Compliance and Communications, Independent Benefit Services",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": "Montrose",
                "audience": "Principals, producers and staff",
                "snippet": "HIPAA compliance has become a hot topic. The rumor is that the Department of Health and Human Services (HHS) intends to increase its enforcement of the HIPAA Privacy and Security Rules. This session is intended to refresh your knowledge of HIPAA. The panel will cover the basics of HIPAA privacy and security, best practices as they relate to encryption and business associate agreements, and an overview of how Partner Firms have tackled HIPAA compliance. A short question and answer session will follow the panel discussion."
            },
            {
                "id": 16,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "UBA Tech Talk",
                "speaker": "Scott Borders - IT Director, United Benefit Advisors",
                "speaker2": "Jon McAlister - Application Support Analyst, United Benefit Advisors",
                "speaker3": "Kyle Hubbard - Software Developer, United Benefit Advisors",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": "Metropolitan",
                "audience": "Wisdom Network/EBC users, especially new Partners and staff",
                "snippet": "In this presentation, UBA’s IT staff will cover upgrades within the Wisdom Network 4 software, as well as a brief overview of the IT staff’s ticketing system upgrades to improve support responsiveness. New and exciting information around the Employee Benefit Centers (EBCs) will be introduced and discussed, as well as a new training initiative to introduce monthly Tech Webinars."
            },
            {
                "id": 17,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "'Breaking the Status Quo' - Focusing on the Actual Cost of Care",
                "speaker": "Thomas Emerick - President, Emerick Consulting, LLC",
                "speaker2": "Todd Covert - National Director, Special Products & Services, Mutual of Omaha",
                "day": "Monday",
                "time": "10:30 am - 12:00 pm",
                "room": "Teylers",
                "audience": "Principals, producers and staff",
                "snippet": "This presentation will focus on why the current solutions in healthcare are not working and independent research validating the position. The industry must start focusing on the root cause of the problem – the actual cost and quality of care."
            },
            {
                "id": 18,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Lunch with Linda",
                "speaker": "Linda Rowings, JD - Chief Compliance Officer, United Benefit Advisors",
                "day": "Monday",
                "time": "12:15 pm - 1:30 pm",
                "room": "Louvre 1 & 2",
                "audience": "Principals, producers and staff",
                "snippet": "Trying to get your arms around which compliance issues need to be addressed by year-end? Join Linda Rowings for a “lunch-n-learn” where you’ll hear an overview of what needs to be done during the fourth quarter and what to watch for in the coming year."
            },
            {
                "id": 19,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Exchange Evolution",
                "speaker": "Rob Ruiz-Moss - Vice President, Exchange Strategies & Execution, WellPoint, Inc.",
                "day": "Monday",
                "time": "2:00 pm - 4:00 pm",
                "room": "Guggenheim",
                "audience": "Principals, producers and staff",
                "snippet": "As an industry leader operating Blue Cross plans in 14 states, WellPoint invested heavily in insurance exchanges as a result of the Affordable Care Act and is believed to have more Exchange members than any other insurance carrier in the country. While 2014 was an overall success for the company, 2015 is expected to bring more carriers and more competition to this new marketplace.",
                "snippet2": "Rob Ruiz-Moss, VP of Exchange Strategy at WellPoint, will share insights into how the 2014 experience evolved during the open enrollment period and types of members that enrolled. He will also discuss the current special enrollment period, the upcoming renewal cycle, and the 2015 open enrollment period starting in just a few months. We have only completed the first chapter in our Exchange book. There are many chapters yet to be written, but there are many exciting opportunities before us."
            },
            {
                "id": 20,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Affordable Care Act Update: Today's Environment and Upcoming Provisions",
                "speaker": "John Wiesler - Vice President and National Leader of Broker and General Sales Channel, Humana, Inc.",
                "day": "Monday",
                "time": "2:00 pm - 4:00 pm",
                "room": "Guggenheim",
                "audience": "Principals, producers and staff",
                "snippet": "Health Care Reform: Where are we? Where have we been? Where are we going? This session will review today’s environment and share insights on the impact of ACA to this point, what the future may hold, and key provisions moving forward. We will review the impact to the large group, small group, and individual marketplaces."
            },
            {
                "id": 21,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "PowerPaks",
                "speaker": " ",
                "day": "Monday",
                "time": "4:00 pm - 6:00 pm",
                "room": "Various",
                "snippet": "PowerPaks Description."
            },
            {
                "id": 22,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Staff Roundtable – Communication",
                "speaker": "Julie Barnhill - Account Manager, iaCONSULTING",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": "Louvre 1",
                "audience": "Account managers, support staff, administrative staff, producers",
                "snippet": "Participants will discuss communications issues facing agency staff, including:",
                "point": "How are you managing communications overload? Are you limiting what and how frequently you provide materials to clients?",
                "point2": "Have you found an effective way to communicate PPACA to employees?",
                "point3": "What UBA materials do you use?",
                "point4": "What other materials do you use?",
                "point5": "Do you outsource? If so, what have the results been?",
                "point6": "Are you using social media? If so, what media is working best?",
                "point7": "Are you doing anything special to support early renewals?",
                "point8": "Have you made any internal changes recently that have helped with workflow or time management?"
            },
            {
                "id": 23,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Staff Roundtable – Compliance",
                "speaker": "Elizabeth Kay - Account Manager, AEIS",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": "Louvre 1",
                "audience": "Account managers, support staff, administrative staff, producers",
                "snippet": "Participants will discuss compliance issues facing agency staff, including:",
                "point": "How are you keeping up with all the compliance changes – personally, others in your firm, and your employers?",
                "point2": "What are your best sources of compliance information?",
                "point3": "Do you use any compliance products or tools on a regular basis? Does the best tool vary by employer?",
                "point4": "What strategies do you use to encourage distribution of notices and SPDs?",
                "point5": "Are you charging for compliance help? If so, for what services – plan docs, testing, 5500s, modeling – and how much?",
                "point6": "Do you provide employee communications? If so, what have you found is the best way to communicate PPACA?",
                "point7": "Have you made any workflow or other changes that have helped time management?",
                "point8": "What could UBA provide that would be most helpful to you?"
            },
            {
                "id": 24,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Staff Roundtable – 4th Quarter Strategies",
                "speaker": "Ronna Schnell - Account Executive, Coordinated Benefits Company",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": "Louvre 1",
                "audience": "Account managers, support staff, administrative staff, producers",
                "snippet": "Participants will discuss issues facing agency staff in the final quarter of the year, including:",
                "point": "Do you have a particular strategy for early renewals?",
                "point2": "Are you planning to add staff? If so, in what areas?",
                "point3": "Do you have any products or tools that you expect will provide significant help with the expected renewal volume?",
                "point4": "How do you plan to handle large quantities of printing?",
                "point5": "How do you plan to divide the workload, especially for client visits and employee meetings?",
                "point6": "How will you handle additional data entry?",
                "point7": "If your workflow is efficient, please explain how work is assigned to account managers and other staff.",
                "point8": "Have you made any internal changes that have helped time management?",
                "point9": "Are you creating standardized client meeting agendas, open enrollment presentations, plan designs, etc.?"
            },
            {
                "id": 25,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "All Star Producers",
                "speaker": "Daniel Foley - Employment Benefits Consultant, Innovative Benefit Planning, LLC",
                "speaker2": "Dominic Franchini - CBC, Vice President, HORAN",
                "speaker3": "Joe Moran - Business Development Manager, EBS Capstone",
                "speaker4": "Scott Ripley - Employee Benefits Advisor, e3 Financial",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": "Louvre 2",
                "audience": "Producers",
                "snippet": "In this panel discussion four UBA Partner Firm producers will share insights and best practices that have helped them succeed in becoming all-star producers. Covering prospecting, identifying the “ideal client,” streamlining the sales process, seeking out new business, and more, panelists will share success stories and offer strategies to build long-lasting client relationships and develop better, more profitable business for the agency."
            },
            {
                "id": 26,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Exploring Marketing Approaches Through the Eyes of the Customer",
                "speaker": "Marianne Stook - Senior Account Executive, Fisher Vista, LLC",
                "speaker2": "Geoff Mukhtar - Communications Manager, United Benefit Advisors",
                "speaker3": "Bill Olson - Chief Marketing Officer, United Benefit Advisors",
                "day": "Monday",
                "time": "4:30 pm - 6:00 pm",
                "room": "Louvre 3",
                "audience": "Principals, producers and staff",
                "snippet": "This session will begin with a presentation of key ways you can drive new business leads with UBA marketing tools and website contacts. Participants will learn:",
                "point": "How UBA attracts contacts to the website",
                "point2": "How you’re notified of a contact in your area",
                "point3": "Ways to engage with these contacts to nurture them as potential leads",
                "point4": "Marketing programs UBA offers that can help you generate more leads in your market",
                "snippet2": "Participants will then break into three roundtable discussions to enable Partners to share strategies and offer valuable feedback that will directly shape the national PR campaign. Discussion topics will include:",
                "point5": "Maximizing national leads from the UBA website",
                "point6": "Top marketing strategies in local markets",
                "point7": "Leveraging the Health Plan Survey in your market",
            },
            {
                "id": 27,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "Dine-Arounds",
                "speaker": " ",
                "day": "Monday",
                "time": "6:00 pm - 8:30 pm",
                "room": " ",
                "snippet": "Dine-Arounds Description."
            },
            {
                "id": 28,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "name": "UBApalooza – sponsored by The Principal",
                "speaker": "Featuring 'Odd Man Out'",
                "day": "Monday",
                "time": "8:30 pm",
                "room": "Guggenheim",
                "snippet": "Rock Concert – sponsored by The Principal Description."
            },
            {
                "id": 29,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "Breakfast & Networking",
                "speaker": " ",
                "day": "Tuesday",
                "time": "7:30 am - 8:30 am",
                "room": "Louvre",
                "snippet": "Breakfast & Networking Description."
            },
            {
                "id": 30,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "Business Meeting",
                "speaker": " ",
                "day": "Tuesday",
                "time": "8:30 am - 9:00 am",
                "room": "Guggenheim",
                "snippet": "Business Meeting Description."
            },
            {
                "id": 31,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "The Art of Significance - Achieving the Level Beyond Success",
                "speaker": "Dan Clark - CSP, CPAE, President & CEO, International High Performance Consulting Firm",
                "day": "Tuesday",
                "time": "9:00 am - 10:00 am",
                "room": "Guggenheim",
                "audience": "Principals, producers and staff",
                "snippet": "Successful people get what they want. Significant individuals want what they get. Successful people identify themselves in terms of what they do and seek what’s impressive. Significant individuals identify themselves in terms of who they are and seek what’s important.",
                "snippet2": "In this provocative and status quo challenging general session, Dan Clark asks you to make sure your purpose is what you say it is, and that your influence is what you need it to be. In a thought- provoking, humorous way, Dan reminds us that the purpose of a leader is to grow more leaders. So instead of merely continuing to follow the highly acclaimed business, leadership, and management gurus you have been quoting for years, you change lives by becoming one of them!"
            },
            {
                "id": 32,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "HR Practice: Build, Buy, or Rent?",
                "speaker": "Anita Nygaard - SPHR, MSOD, President, e365HR, Inc.",
                "speaker2": "Suzanne Quintero - VP, iHR Outsourcing, Independent Benefit Services",
                "speaker3": "Tina Ramey - Marketing and Business Development, VolkBell",
                "speaker4": "Pamela Verrill - Vice President of Operations, Borislow Insurance",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": "Louvre 1",
                "audience": "Principals and agency leaders",
                "snippet": "Due to the growing complexity in benefits and HR compliance, employers struggle to stay informed. They need direction on tracking and reporting employee data and navigating through performance issues. HR websites or hotlines are not always personalized enough to provide an ongoing advisory relationship. Panelists from four UBA Partner Firms will share their insights on whether to provide HR consulting services to your clients, and how to be successful when you do offer HR consulting."
            },
            {
                "id": 33,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "Unlock the Secrets of Voluntary Benefits",
                "speaker": "Bob Ruff - Vice President, Broker Marketing Services, Colonial Life",
                "speaker2": "Katie Dreiling - Assistant Vice President, National Broker Partners, Colonial Life",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": "Louvre 2",
                "audience": "Principals, producers and staff",
                "snippet": "Voluntary benefits are playing an ever greater role in today’s employee benefits plans. Brokers know voluntary insurance should be an essential part of their portfolio – that’s no secret. What is still mysterious to many brokers is exactly how to take advantage of voluntary benefits and make them work for their clients and their business. This presentation will help attendees understand the industry forces shaping the voluntary market and how to partner effectively with a voluntary provider to make their business and their clients more successful."
            },
            {
                "id": 34,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "Don’t Write Business the Old-Fashioned Way",
                "speaker": "Deanna DeHart - Producer, Benefit Resource Group",
                "speaker2": "Josh Fox - Founder and CEO, Bottom Line Concepts, LLC",
                "speaker3": "Lisa Graziano - Marketing and Business Development Manager, EBS Capstone",
                "speaker4": "Jeff Sams - LIC, Senior Vice President, Saginaw Bay Underwriters",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": "Louvre 3",
                "audience": "Principals and producers",
                "snippet": "The business landscape is constantly evolving. Has your approach to prospecting and marketing kept up with the times? Are you looking for ways to differentiate yourself and showcase your value-added services to stand out as a thought leader? This panel discussion will touch on ways to build aware- ness and feed your pipeline, provide value in areas other than insurance and retirement plans, create a marketing presence that gets results, and use the UBA Health Plan Survey as a prospecting tool."
            },
            {
                "id": 35,
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "name": "Captives",
                "speaker": "Bill Drew - Partner, LHD Benefit Advisors",
                "day": "Tuesday",
                "time": "10:15 am - 11:45 am",
                "room": "Teylers",
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

        var speakers = [
            {
                "speakerId": 0,
                "id": 10,
                "speaker": "Kathy Colbert",
                "title": "Marketing & Communications Coordinator",
                "company": "Cowden Associates, Inc.",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "Health Care Provider Vertical",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": ""
            },
            {
                "speakerId": 1,
                "id": 10,
                "speaker": "Peter Freska",
                "title": "Benefits Consultant",
                "company": "The LBL Group",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/peterFreska.jpg",
                "session": "Health Care Provider Vertical",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 2,
                "id": 12,
                "speaker": "Janet Trautwein",
                "title": "CEO",
                "company": "National Association of Healthcare",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/Janet2014.jpg",
                "session": "Legislative Update and Industry Outlook",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Janet Trautwein is the Chief Executive Officer of the National Association of Health Underwriters (NAHU) in Washington, D.C.  NAHU represents more than 100,000 employee benefits professionals involved in the design, sale, implementation and management of health plans all over the United States.  Her responsibilities include oversight of all NAHU activities and primary representation of the association to the media, government agencies and elected officials at all levels.  Prior to becoming the CEO of NAHU in 2005, Janet served for many years as the head of NAHU's government affairs department, working with members of Congress, senior government officials, governors, and state legislators, and directing the government and political affairs of the organization.  A frequent speaker on health policy issues, Janet’s expertise in issues related to the uninsured, health insurance pools, risk and reinsurance pooling, health related tax issues, and both national and global health reform has been recognized throughout the industry. Janet has been asked to testify before Congress numerous times, and has been published in major newspapers, including The Wall Street Journal, The Washington Post, and The New York Times and has appeared on hundreds of radio and television programs around the world."
            },
            {
                "speakerId": 3,
                "id": 14,
                "speaker": "Wayne Walkotten",
                "title": "CPA, CVA, Executive Vice President",
                "company": "Marshberry",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/wayneWalkotten.jpg",
                "session": "Confidently Investing to Drive Organic Growth",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 4,
                "id": 15,
                "speaker": "Kelly Hugh, JD",
                "title": "Human Resources Consultant",
                "company": "CIC Benefit Consulting Group",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/kellyHugh.jpg",
                "session": "HIP on HIPAA",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 5,
                "id": 15,
                "speaker": "Andrea Kinkade",
                "title": "President and Owner",
                "company": "Kaminsky & Associates, Inc.",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/andreaKinkade.jpg",
                "session": "HIP on HIPAA",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 6,
                "id": 15,
                "speaker": "Josie Martinez",
                "title": "Partner and General Counsel",
                "company": "EBS Capstone",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/josieMartinez.jpg",
                "session": "HIP on HIPAA",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 7,
                "id": 15,
                "speaker": "Lisa Scott",
                "title": "CEBS, Director, Compliance and Communications",
                "company": "Independent Benefit Services",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/lisaScott.jpg",
                "session": "HIP on HIPAA",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Lisa Scott is an experienced employee benefits professional and Certified Employee Benefit Specialist (CEBS) with over 15 years of experience encompassing insurer, employer, and consulting environments. A results driven, licensed insurance professional, Lisa consults on the numerous health and welfare laws and regulations as they pertain to employer sponsored health and welfare plans. Although she has capabilities to provide the full suite of compliance services, her primary focus is PPACA, The Patient Protection and Affordable Care Act, and HIPAA, The Health Insurance Portability and Accountability Act. Lisa assists colleagues and clients understand the evolving laws and regulations and how they impact employer decisions as they pertain to their health and welfare benefit plans. Lisa understands and communicates the new health care reform regulations. Additional responsibilities include facilitating webinars, seminars, and time sensitive compliance alerts. She authors white papers and assists with marketing and new business initiatives. Lisa serves as company liaison for United Benefit Advisors and is an active member of UBA's national Legal and Compliance Committee. Her positions have included a variety of roles and responsibilities; an Account Manager for an insurance company, a Benefits Manager for a large employer, and a Health and Wellness Advisor for the mid-market. Today, she focuses on compliance and communications for a highly respected advisory firm in Rockville, MD. As Past President (2011) and active member for the International Society of Certified Employee Benefit Specialists’ Capital Chapter, she helps promote educational and networking opportunities for professionals in the DC Metropolitan area."
            },
            {
                "speakerId": 8,
                "id": 16,
                "speaker": "Scott Borders",
                "title": "IT Director",
                "company": "United Benefit Advisors",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/ScottBorders_WN.jpg",
                "session": "UBA Tech Talk",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 9,
                "id": 16,
                "speaker": "Jon McAlister",
                "title": "Application Support Analyst",
                "company": "United Benefit Advisors",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/JonMcAlister_WN.jpg",
                "session": "UBA Tech Talk",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 10,
                "id": 16,
                "speaker": "Kyle Hubbard",
                "title": "Software Developer",
                "company": "United Benefit Advisors",
                "session": "UBA Tech Talk",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/KyleHubbard_WN.jpg",
                "bio": " "
            },
            {
                "speakerId": 11,
                "id": 17,
                "speaker": "Thomas Emerick",
                "title": "President",
                "company": "Emerick Consulting, LLC",
                "session": "'Breaking the Status Quo' - Focusing on the Actual Cost of Care",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "bio": " "
            },
            {
                "speakerId": 12,
                "id": 17,
                "speaker": "Todd Covert",
                "title": "National Director, Special Products & Services",
                "company": "Mutual of Omaha",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/toddCovert.jpg",
                "session": "'Breaking the Status Quo' - Focusing on the Actual Cost of Care",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 13,
                "id": 18,
                "speaker": "Linda Rowings, JD",
                "title": "Chief Compliance Officer",
                "company": "United Benefit Advisors",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/LindaRowings_WN.jpg",
                "session": "Lunch with Linda",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Linda Rowings, JD, FLMI is the Chief Compliance Officer of United Benefit Advisors.  In that role, Linda is responsible for providing assistance to partner firms on compliance issues that affect fully insured and self-funded plans, with particular emphasis on the Patient Protection and Affordable Care Act.  Linda’s focus is on providing educational materials that partner firms can share with clients and prospects, as well as use internally to remain current with ever-changing requirements. Prior to joining UBA, Linda was Human Resource Counsel for a local life insurance company, providing legal support on employment, employee benefits, compensation, and payroll issues.  Linda also has been Senior Counsel in the employee benefits group for a local law firm, focusing on health and welfare benefit issues, and General Counsel for a local third party administrator, working primarily on compliance and design issues for self-funded health and Section 125 plans.  Linda began her career as in-house counsel for a local insurance company, working principally with individual life and disability products. Linda received her JD from Indiana University (Bloomington) and her BA from the University of Virginia.  Linda holds the Fellow, Life Management Institute designation."
            },
            {
                "speakerId": 14,
                "id": 19,
                "speaker": "Rob Ruiz-Moss",
                "title": "Vice President, Exchange Strategies & Execution",
                "company": "WellPoint, Inc.",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/robRuiz-Moss.jpg",
                "session": "Exchange Evolution",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Robert Ruiz-Moss, Vice President, Exchange Strategies and Execution at WellPoint, has nearly 20 years’ experience in numerous facets of the healthcare market. Rob developed WellPoint’s business model in each of its 14 states for the Exchanges to go into effect. Rob has also served as one of nine members of Colorado’s Health Benefits Exchange Board, appointed by Governor John Hickenlooper. Rob joined WellPoint in 2009 as the general manager for Anthem Blue Cross and Blue Shield’s individual health insurance business in Colorado, Nevada, Connecticut and New Hampshire. Anthem is the largest individual insurer in Colorado, and the four states have more than 200,000 combined members. Among his significant previous positions, Rob served as chief executive officer of Imerica Life and Health Insurance Company, which offers HSA-qualified insurance plans, health savings bank accounts and PPO plans. As CEO he provided leadership and vision for the 80-member organization and grew revenue from $1.5 million to $40 million within 18 months. He was president and chief executive officer of Mountain Medical Affiliates, a physician-owned PPO providing health care services to more than 80,000 Coloradans utilizing more than 10,000 provider contracts. Rob holds a Bachelor of Science degree in accounting from the University of Colorado at Boulder and has served on the boards of the Colorado Health Foundation, HealthOne Hospital System, the Juvenile Diabetes Research Foundation and the Denver metro American Heart Association."
            },
            {
                "speakerId": 15,
                "id": 20,
                "speaker": "John Wiesler",
                "title": "Vice President and National Leader of Broker and General Sales Channel",
                "company": "Humana, Inc.",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "Affordable Care Act Update: Today's Environment and Upcoming Provisions",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "John Wiesler, Vice President and National Leader of Broker and General Sales Channel at Humana Inc. Humana is a Fortune 500 company that focuses on the well-being of its members. Humana is dedicated to shifting perceptions of the health insurance industry.  We believe our role goes beyond that of a provider to that of a well-being partner who will empower you to live a life that’s healthy, active, and rewarding. John is a 30 year industry veteran with a proven track record of success in various sales and sales management positions including 27 year tenure with Humana.  John has held positions in markets across the country, leading sales teams responsible for all case sizes and product lines.  John’s experience also includes, the Director of Sales of The Health Insurance Plan of California (The HIPC), the nation’s first statewide health insurance exchange.  Currently, John is responsible for all Humana commercial sales offices around the country overseeing over 850 health, wellness and insurance professionals. John has his Bachelor’s degree from the University of Illinois and a master’s in organizational Leadership from Ashford University.  Served on numerous local boards and charities, Keep America Beautiful and the Girl Scouts, and is currently on the board of The YMCA of Greater Green Bay and St. Mary’s/St. Vincent’s hospitals. John has his RHU and REBC designations from the National Association of Health Underwriters, the Professional designation from the Academy of Healthcare Management, and is a Certified Managed Care Executive through AHIP."
            },
            {
                "speakerId": 16,
                "id": 25,
                "speaker": "Daniel Foley",
                "title": "Employment Benefits Consultant",
                "company": "Innovative Benefit Planning, LLC",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "All Star Producers",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Daniel P. Foley is an Employee Benefits Consultant at Innovative Benefit Planning, L.L.C.  Innovative is a Benefits Consulting firm located just outside of Philadelphia in Cinnaminson, NJ.  Dan has been with Innovative for over four years and his primary role is in business development.  Dan has over 13 years of consulting experience for middle market employers in workforce management and employee benefits. Prior to joining Innovative Dan spent two years with a regional financial services firm, focusing on employee benefits, retirement plans and individual financial planning.  Dan also spent just under eight years with ADP, working with middle-market employers. Dan earned the Certified Corporate Wellness Specialist® designation and in September will complete the NAHU Health Care Reform Specialist® program.  In addition to a Health/Life/Disability insurance license, Dan also has his Series 65 securities license.  Dan has served on an advisory board of a Fortune 100 company and served on the Advisor Panel at the United Benefit Advisors (UBA) Conference in September, 2013.  Dan has a Bachelor’s of Science Degree in Finance from Seton Hall University and is currently earning the comprehensive CEBS (Certified Employee Benefits) designation through The University of Pennsylvania’s Wharton School of Business.  Dan is a member of the International Foundation of Employee Benefit Plans, Tri-State SHRM, The MY Foundation and The Legal Administrators of Philadelphia networking group."
            },
            {
                "speakerId": 17,
                "id": 25,
                "speaker": "Dominic Franchini",
                "title": "Vice President",
                "company": "HORAN",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/dominicFranchini.jpg",
                "session": "All Star Producers",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Dominic Franchini, CBC, Vice President at HORAN specializes in middle-market and large group sales.  As a strategic consultant for HORAN clients, Dominic is responsible for future strategy planning as well as overall client satisfaction. Dominic implements his strategies to enhance employee benefit programs while containing costs and improving employee understanding and appreciation of their benefits. HORAN’s current clients experience value through Dominic’s knowledge and ability to navigate the group benefit arena. Joining HORAN in 2004, Dominic worked as both a Client Specialist and Financial Analyst.  Through these positions, Dominic gained powerful insight into the challenges and opportunities associated with successful employee benefit planning."
            },
            {
                "speakerId": 18,
                "id": 25,
                "speaker": "Joe Moran",
                "title": "Business Development Manager",
                "company": "EBS Capstone",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/joeMoran.jpg",
                "session": "All Star Producers",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 19,
                "id": 25,
                "speaker": "Scott Ripley",
                "title": "Employee Benefits Advisor",
                "company": "e3 Financial",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/scottRipley.jpg",
                "session": "All Star Producers",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": "Scott is an employee benefits advisor with e3 Financial.  He is responsible for new business development for the employee benefits practice.  Scott works exclusively with entrepreneurial service businesses ranging from 25 – 500 employees in 3 key verticals: Professional / Financial Services, Technology and Nonprofit specializing in the design, implementation and ongoing management of employee benefit programs. Scott began his career selling PEO and HRIS services for ADP and Ceridian.  He joined e3 Financial in 2012 as a benefits advisor where he focuses exclusively on new business development and aquires new clients by way of client referrals, association marketing, professional networking, and direct marketing."
            },
            {
                "speakerId": 20,
                "id": 26,
                "speaker": "Marianne Stook",
                "title": "Senior Account Executive",
                "company": "Fisher Vista, LLC",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "Exploring Marketing Approaches Through the Eyes of the Customer",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 21,
                "id": 26,
                "speaker": "Geoff Mukhtar",
                "title": "Communications Manager",
                "company": "United Benefit Advisors",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/GeoffMukhtar_WN.jpg",
                "session": "Exploring Marketing Approaches Through the Eyes of the Customer",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 22,
                "id": 26,
                "speaker": "Bill Olson",
                "title": "Chief Marketing Officer",
                "company": "United Benefit Advisors",
                "imageUrl": "http://wn4.ubabenefits.com/portals/0/Images/People/BillOlson_WN.jpg",
                "session": "Exploring Marketing Approaches Through the Eyes of the Customer",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Monday.png",
                "bio": " "
            },
            {
                "speakerId": 23,
                "id": 31,
                "speaker": "Dan Clark",
                "title": "President & CEO",
                "company": "International High Performance Consulting Firm",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/danClark.jpg",
                "session": "The Art of Significance - Achieving the Level Beyond Success",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 24,
                "id": 32,
                "speaker": "Anita Nygaard",
                "title": "President",
                "company": "e365HR, Inc.",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "HR Practice: Build, Buy, or Rent",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 25,
                "id": 32,
                "speaker": "Suzanne Quintero",
                "title": "Vice President, iHR Outsourcing",
                "company": "Independent Benefit Services",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/suzanneQuintero.jpg",
                "session": "HR Practice: Build, Buy, or Rent",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 26,
                "id": 32,
                "speaker": "Tina Ramey",
                "title": "Marketing and Business Development",
                "company": "Volkbell",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/tinaRamey.jpg",
                "session": "HR Practice: Build, Buy, or Rent",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 27,
                "id": 32,
                "speaker": "Pamela Verrill",
                "title": "Vice President of Operations",
                "company": "Borislow Insurance",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/icon-76@2x.png",
                "session": "HR Practice: Build, Buy, or Rent",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 28,
                "id": 33,
                "speaker": "Bob Ruff",
                "title": "Vice President, Broker Marketing Services",
                "company": "Colonial Life",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/bobRuff.jpg",
                "session": "Unlock the Secrets of Voluntary Benefits",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 29,
                "id": 33,
                "speaker": "Katie Dreiling",
                "title": "Assistant Vice President, National Broker Partners",
                "company": "Colonial Life",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/katieDreiling.jpg",
                "session": "Unlock the Secrets of Voluntary Benefits",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 30,
                "id": 34,
                "speaker": "Deanna DeHart",
                "title": "Producer",
                "company": "Benefit Resource Group",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/deannaDeHart.jpg",
                "session": "Don't Write Business the Old-Fashioned Way",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 31,
                "id": 34,
                "speaker": "Josh Fox",
                "title": "Founder & CEO",
                "company": "Bottom Line Concepts, LLC",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/joshFox.jpg",
                "session": "Don't Write Business the Old-Fashioned Way",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 32,
                "id": 34,
                "speaker": "Lisa Graziano",
                "title": "Marketing and Business Development Manager",
                "company": "EBS Capstone",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/lisaGraziano.jpg",
                "session": "Don't Write Business the Old-Fashioned Way",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": "As the Marketing and Business Development Manager at EBS Capstone, an insurance advisory firm based in Newton, MA, Ms. Graziano is responsible for building brand awareness and developing marketing programs that help to differentiate, introduce and engage organizations that may benefit from EBS Capstone’s employee benefits capabilities and value-added services. She manages the implementation for direct marketing programs, events, public relations, marketing communications tools, multimedia and social media initiatives. In addition to her marketing role, Ms. Graziano is also the lead on special projects. Prior to joining EBS Capstone, Ms. Graziano was Vice President at Aria Marketing. Aria is a healthcare-focused integrated marketing agency. During her 12 year tenure there she managed client accounts and led all marketing communications activities for her clients. In addition she also served on the management team.  Ms. Graziano started her career in marketing at the Gartner Group where she worked exclusively for the Healthcare Vertical Division as the Marketing Programs Manager. Ms. Graziano holds a Bachelor of Science in Business Administration with a concentration in Marketing from Suffolk University. "
            },
            {
                "speakerId": 33,
                "id": 34,
                "speaker": "Jeff Sams",
                "title": "Senior Vice President",
                "company": "Saginaw Bay Underwriters",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/jeffSams.jpg",
                "session": "Don't Write Business the Old-Fashioned Way",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
            },
            {
                "speakerId": 34,
                "id": 35,
                "speaker": "Bill Drew",
                "title": "Partner",
                "company": "LHD Benefit Advisors",
                "imageUrl": "http://mobile.ubabenefits.com/Portals/0/Images/speakers/billDrew.jpg",
                "session": "Captives",
                "sessionImage": "http://mobile.ubabenefits.com/Portals/0/Images/Tuesday.png",
                "bio": " "
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
