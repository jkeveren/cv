function div(parent) {
	const d = document.createElement("div");
	if (parent != null) {
		parent.appendChild(d);
	}
	return d;
}

function anchor(parent, text, href) {
	const a = document.createElement("a");
	a.textContent = text;
	a.href = href;
	parent.appendChild(a);
	return a;
}

function heading(parent, text) {
	const h = div(parent);
	Object.assign(h.style, {
		fontSize: "1.7em",
		fontWeight: "bold",
		marginTop: "15px",
		borderTop: "#777 1px", // TODO: Fix
	})
	h.textContent = text;
	return h;
}

function heading2(parent, text) {
	const h = heading(parent, text);
	Object.assign(h.style, {
		fontSize: "1.2em",
		marginTop: "5px",
	});
	return h;
}

function text(parent, text) {
	const h = div(parent);
	h.textContent = text;
	return h;
}

function list(parent) {
	const ul = document.createElement("ul");
	ul.style.margin = 0;
	parent.appendChild(ul);
	return ul;
}

function listItem(parent, text) {
	const li = document.createElement("li");
	li.textContent = text;
	parent.appendChild(li);
	return li;
}

function grower(parent) {
	const d = div(parent);
	d.style.flexGrow = 1;
}

document.title = "James Keveren CV";

console.info("https://github.com/jkeveren/cv");

// make links open in new tab by default
const base = document.createElement("base");
base.target = "_blank";
document.head.appendChild(base);

// html
Object.assign(document.documentElement.style, {
	fontFamily: "arial, sans-serif",
	fontSize: "13px",
});

// body
Object.assign(document.body.style, {
	display: "flex",
	justifyContent: "center",
});

{ // container
	const container = div(document.body);
	Object.assign(container.style, {
		maxWidth: "680px",
	})

	{ // header
		const header = div(container);
		Object.assign(header.style, {
			display: "flex",
			gap: "10px",
			alignItems: "center",
			paddingBottom: "5px",
			borderBottom: "1px solid #777",
		})

		// title
		const title = div(header);
		title.textContent = "James Keveren";
		Object.assign(title.style, {
			fontSize: "2.5em",
			fontWeight: "bold",
			whiteSpace: "nowrap",
			alignSelf: "flex-end",
		})

		grower(header)

		{ // links
			const linksContainer = div(header);
			Object.assign(linksContainer.style, {
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end"
			})

			// simple links
			const links = [
				["james@jameskeveren.com", "mailto:james@jameskeveren.com"],
				// ["+44 7975 905 038", "tel:+447975905038"],
				["https://jameskeveren.com", "https://jameskeveren.com"],
			];
			for (let l of links) {
				anchor(linksContainer, ...l).style.whiteSpace = "nowrap";
			}

			// view online link
			const viewOnline = anchor(linksContainer, "View online at https://cv.keve.ren", "https://cv.keve.ren");
			viewOnline.classList.add("print"); // only show when printing

			// download link
			const downloadLink = anchor(linksContainer, "Download PDF", document.title + ".pdf")
			downloadLink.classList.add("noprint"); // only show when not printitng
			downloadLink.download = "";
		}

		// QRCode
		const QRCodeAnchor = anchor(header, "", "https://cv.jameskeveren.com");
		Object.assign(QRCodeAnchor.style, {
			marginBottom: "-3px", // negate the mystery 3px padding.
		});
		const QRCode = document.createElement("img");
		QRCode.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAACQSURBVBiVVdAxCgUxCARQwVbIVQTbgFcPbBvwKgFbwb9bJOaD8KphGAHQeIHCVr2zZ8nyHt4O9z91yqU6hWQJKMJQZjbVzCMtx8VlEtuX287xGEbZQ4k1j7KiydTjYy7jKWWAhZRzGmHPI8LqgGUmgTY9ArYQKtXdFUuWiUB52TTw1vTr3b5/AbE8AtK3ZfsDKNaSv6lCfNoAAAAASUVORK5CYII=";
		// Object.assign(QRCode.style, {
		// 	imageRendering: "pixelated",
		// 	width: "50px",
		// 	height: "50px",
		// })
		QRCodeAnchor.appendChild(QRCode);
	}

	// summary
	heading(container, "Summary");
	text(container,
		`A personable, passionate, and creative individual with expertise in various engineering disciplines and fabrication techniques.
		I've gained most of my commercial experience during my Software Engineering career but Mechanical, Electrical, and Electronic Engineering have been a huge passion of mine for my entire life as is reflected by my personal projects.
		During my experience as a Software Engineer I gained many transferable skills around teamwork, project planning and project management.`
	);

	// skills and technology
	heading(container, "Skills and Technology");
	const skillSets = [
		["Engineering", [
			"Thermal Design",
			"Circuit Design",
			"Electrical and Electronic Debugging",
			"SPICE Simulation",
			"Optoelectronics",
			"Embedded Programming",
			"I2C",
			"UART",
			"SWD",
			"PID Control",
			"Solar MPPT",
			"Adhesive and Fastener Selection",
		]],
		["CAD and CAM", [
			"Fusion 360",
			"SolidWorks",
			"FreeCAD",
			"Blender",
			"OpenScad",
			"Open CASCADE in C++",
			"KiCAD",
			"Chitubox",
			"PrusaSlicer and forks",
		]],
		["Fabrication and Production", [
			"TIG and MIG Welding (GTAW, GMAW)",
			"Soldering (electronics and metalwork)",
			"Brazing",
			"Surface Finishing",
			"FDM/FFF 3D Printing",
			"MSLA 3D Printing",
		]],
		["IT", [
			"Desktop and Server Hardware",
			"Linux",
			"DNS",
			"DHCP",
			"VLANs",
			"TLS/SSL",
			"Let's Encrypt",
			"OPNsense",
			"Unifi",
			"Unifi Edge",
			"TP-Link Omada",
			"PoE",
			"LTO Tape Storage",
			"Raspberry Pi",
			"MailEnable",
			"Google Workspace (Gsuite)",
			"Microsoft 365",
		]],
		["Linux", [
			"Arch Linux",
			"Debian",
			"CentOS",
			"Systemd",
			"Haproxy",
			"Nginx",
			"dm-crypt",
			"Rsync",
			"FFmpeg",
			"Fuse",
			"SSHFS",
			"Certbot",
		]],
		["Software Engineering", [
			"C",
			"C++",
			"Golang",
			"JavaScript",
			"TypeScript",
			"Node.js",
			"C# (.Net)",
			"Git",
			"Mercurial",
			"Jira",
			"Google Cloud",
			"AWS",
			"Firebase",
			"SQL (MSSQL, PosgreSQL)",
			"MongoDB",
			"Firestore",
			"TDD",
			"Regexp",
			"HTML",
			"CSS",
			"WebSockets",
		]],
		["Other", [
			"Google Ads",
			"Keyshot",
			"Stable Diffusion"
		]],
	];
	for (let set of skillSets) {
		heading2(container, set[0]);
		text(container, set[1].join(", "));
	}

	// Experience
	heading(container, "Experience");
	const roles = [
		[
			"",
			"Robotics product",
			"Product Development Engineer and Fabricator",
			"Jun 2022 - Dec 2024",
			[
				"Independently designed and prototyped a high end, electromechanical, consumer product.",
				"Integrated mechanical, electrical, electronic and software systems to work together effectively.",
				"Simplified complex systems for reliability and safety.",
				"Designed and built fabrication tooling including a hydraulic press, press brake dies and a custom 3D printer head.",
				"Developed and tuned an integer only PID control loop for a high speed positioning system with high accuracy and precision.",
				"Developed firmware for embedded systems that communicated using I2C and UART.",
				"Created a novel, load bearing adjustment mechanism, optimised for ease of use and small form factor.",
			]
		],
		[
			"Komi",
			"Celebrity fan intelligence platform",
			"Software Engineer and Scrum Master",
			"Mar 2022 - Jun 2022",
			[
				"Joined with four other engineers to form the new UK based engineering team.",
				"Worked in an existing, challenging codebase to build complex, client facing features including Spotify pre-saves.",
				"Led and organised the team to effectively meet deadlines and sprint goals.",
				"Facilitated team meetings to communicate with steakholders, remove blockers and plan future work.",
				"Cultivated good teamwork and communication.",
				"I really enjoyed the teamwork and leadership parts of this role.",
			]
		],
		[
			"Pharmagraph",
			"Environmental monitoring systems manufacturer",
			"CAD Consultant",
			"Jan 2020",
			[
				"Created CAD models and technical drawings for a product in Fusion 360 for manufacture.",
				"This was a small piece of work that was well received.",
			]
		],
		[
			"IFL Management",
			"Umbrella company provider",
			"Software Engineer",
			"Mar 2017 - Feb 2022",
			[
				"Managed servers, hosting of various web apps, DNS, and email.",
				"Built a QuickBooks data importer to significantly optimise processing and deduplication of financial data using in memory indexing in JavaScript.",
				"Worked in a small team to build an online quote and sales lead system using .Net and SendGrid.",
				"Built a tool for backing up office machines to OneDrive using Golang.",
				"Created a complex data pipeline to import vacancies from various sources using Node.js, .Net, MSSQL, SendGrid and microservices hosted on Google Cloud. Vacancies were normalised, filtered and deduplicated (around 30,000 per day).",
				"Used scraping, web search APIs and third party data providers to populate missing data.",
				"Helped develop an automated emailing system that handles unsubscriptions using .Net and SendGrid.",
				"Established and maintained email IP reputation.",
				"Maintained an SQL database of hundreds of thousands of vacancies, companies and contacts",
				"Created a customer facing vacancy web app in vanilla JavaScript with page and data preloading.",
				"Built a caching proxy on Firebase for a slow third party API (JobAdder)",
				"Provided technical support for products including: in house tools, Windows and Microsoft 365.",
			],
		],
	];
	for (let role of roles) {
		const [company, companyDescription, title, date, items] = role;

		const row = div(container);
		Object.assign(row.style, {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "flex-end",
			gap: "5px",
		});
		heading2(row, title);
		if (company) {
			// text(row, "at ");
			const companyElement = text(row, company);
			Object.assign(companyElement.style, {
				// fontWeight: "bold",
				marginLeft: "4px",
			})
		}
		grower(row);
		const dateElement = text(row, date);
		dateElement.style.fontWeight = "bold";
		const l = list(container);
		for (let item of items) {
			listItem(l, item);
		}
	}

	// personal projects
	heading(container, "Projects");
	const personalProjects = [
		// TODO: get projects from links on personal website.
		// TODO: convert to objects for conditionl links etc.
		[
			"Benchtop Hydraulic Press",
			"",
			"Apr 2024",
			["Mechanical Engineering", "Fabrication", "TIG Welding"],
			`Designed and fabricated a 20 Tonne hydraulic press around an off the shelf bottle jack.
			This required analysing moment and shear loads in standardised steel beams and designing reinforcements to protect against predicted failure modes.
			I purchased steel rough cut to size, trimmed, bevelled and TIG welded everything together.
			MIG would have been more suitable to the mass of wire that I laid down but I work with what I have.`
		],
		[
			"Direct Drive 3D Print Head",
			"",
			"",
			["Mechanical Engineering", "Fabrication", "TIG Welding", "DC Electrical"],
			`Converted an old Ultimaker 2 from 2.85mm bowden extruder to 1.75mm direct drive extruder.
			Moving to direct drive required a complete re-implementation of the print head but was well worth it.
			my design successfully protects the linear bearings that must stay below 80°C from the 230°C nozzle with only 5mm between.
			This was challenging to keep small and lightweight while securing all components and managing high vibration and temperature.`
		],
		[
			"Backup System",
			"",
			"Ongoing",
			["Linux", "LTO", "Cryptography", "Rsync"],
			`A constantly growing and evolving backup system that stores all of my personal data securely.
			The system follows the 3-2-1 backup strategy; 3 copies, 2 media types and 1 offsite.
			I use a custom NAS and LTO5 tapes stored offsite to satisfy these requirements.
			I modified an external HDD enclosure into a NAS with a Raspberry PI for a secondary off-site NAS that is awaiting deployment.
			All copies of the backup are encrypted with either DM-Crypt, GPG or OpenSSL.`
		],
		[
			"Solar Powered Mobility Scooter",
			"",
			"Jun 2022",
			["Electrical Engineering", "Solar"],
			`Re-implemented the electrical system of a mobility scooter to boost speed and charge via a solar panel on the roof.
			The small roof meant I was limited to a 12V solar panel but I wanted to use a higher voltage to increase vehicle speed.
			To get around this, while still using mostly off the shelf parts, I used an MPPT solar charger to charge a super capacitor bank.
			Once the bank reaches 14V, the charge controller discharges it into a constant current boost converter which charges the LiFePO4 battery bank at 55V 2A.
			The original motor driver was only rated for 24V so I replaced that with another off the shelf driver and modified the driving controls for it.
			The resulting mobility scooter was pretty fun, although a little sketchy to ride haha.`,
		],
		[
			"210kg Steel Workbench",
			"youtu.be/0LhPWrXGbMg",
			"Jul - Aug 2021",
			["Mechanical Engineering", "Fabrication"],
			`This was designed to be possible to disassemble into parts light enough to be moved by one person.
			Mild steel was an obvious choice due to it's characteristic strength, availability, low cost and weldability (for surface repairs).
			210kg workbench made entirely from steel for heat resistance, durability, and welding.
			This was designed and built to be constructed with my limited tools and without the use of welding.
			As a result this was assembled using rivnuts, bolts and folding the ends of steel box section.`,
		],
		[
			"650A DC Power Supply",
			"youtu.be/G3t07j_KhL4",
			"Dec 2021",
			["Electrical Engineering", "TIG Welding", "Fabrication"],
			`Power supply capable of providing 8kW of power for short bursts or 3kW continuous at 12-96VDC.
			This aggregates the output of eight server power supplies, modified to have a floating output.
			The power supplies are powered from a custom power distribution unit with fuse, power meter, ground connection and run/stop switch.
			Outputs can be connected in different combinations of series and parralel to achieve different voltage/current ratios.
			I typically measure current from this source with a 1kA shunt resistor.`,
		],
		[
			"Holonomic Wheel",
			"grabcad.com/library/holonomic-wheel-1",
			"Oct 2014",
			["Mechanical Engineering", "SolidWorks"],
			`Similar to a mecanum wheel, this is designed to allow a vehicle to move in any direction with as few as three wheels.
			This was designed to be manufactured using only only basic tools and 3D printing.`
			// Challenges:
			// Geometry has some complexity but not that bad.
			// Figuring out the best number of rollers.
				// To many: roller radius becomes to small
				// To few: larger rollers require deeper wheel
			// Drawbacks:
			// Must be assembled on shaft
			// Heavy
		],
		[
			"Road Bike Frameset",
			"grabcad.com/library/road-bike-5",
			"Oct 2015",
			["Mechanical Engineering", "SolidWorks"],
			`Frame and forks for a road bike, optimised to resist structural torsion forces created by pedaling at high torque.
			This project was limited by my ability to manufacture at the time.`,
		],
		// [
		// 	"Other CAD Projects",
		// 	"grabcad.com/james.keveren-1/models",
		// 	"ongoing",
		// 	["SolidWorks", "Fusion 360"],
		// 	`A series of smaller projects that I created for fun.
		// 	My models are usually somewhat parametric and are made with feature stability in mind.
		// 	Many of these models involve assemblies with medium complexity.`,
		// ],
		// [
		// 	"3D Printing Projects",
		// 	"thingiverse.com/jkeveren/designs",
		// 	"ongoing",
		// 	["3D Printing", "CAD Software", "CAM Software"],
		// 	`I have many small 3D printing projects that involved, design, printing and iteration.
		// 	Many projects were objects designed to work with existing objects for example my Samsung Galaxy S4 Case.
		// 	This required careful metrology and iteration to perfect.`
		// ],
		// [
		// 	"Home Controller",
		// 	"github.com/jkeveren/home",
		// 	"Sept 2019 - Jul 2020",
		// 	["Node.js"],
		// 	`Used to control various lights and appliances around my home using Sonoff smart switches via their HTTP API.`,
		// ],
		// [
		// 	"Forza Map",
		// 	"github.com/jkeveren/forza-map",
		// 	"Jun, Sept 2020",
		// 	["Go", "WebSockets", "UDP"],
		// 	`Map for the game Forza Horizon 4 that displays the realtime location of all configured players.`,
		// ],
		// [
		// 	"Personal Website",
		// 	"github.com/jkeveren/personal-website",
		// 	"ongoing",
		// 	["Go", "REST", "TDD"],
		// 	`Manipulates HTTP connections to "trickle" the home page.
		// 	Includes a gallery feature that is optimised for serving images over a slow connection by using compression and caching.`,
		// ],
		// [
		// 	"MassDraw",
		// 	"github.com/jkeveren/massdraw",
		// 	"Aug - Oct 2017",
		// 	["JavaScript", "Node.js", "Socket.io"],
		// 	`Allows multiple people to draw on a shared whiteboard in realtime using Socket.io and JavaScript's canvas API.`,
		// ],
		// [
		// 	"Find by Extended Attribute",
		// 	"github.com/jkeveren/find-by-extended-attribute",
		// 	"Jan 2022",
		// 	["Go", "Linux", "xattrs", "TDD"],
		// 	`Simple Linux tool to find files based on extended attribute criteria.
		// 	Similar to \"getfattr -R\" but with much more sensible output.`,
		// ],
		// [
		// 	"CV",
		// 	"github.com/jkeveren/cv",
		// 	"ongoing",
		// 	["JavaScript", "HTML", "CSS"],
		// 	`This CV is a HTML page that is built using JavaScript which I print to PDF.
		// 	When printing, some styles change allowing the web version (at cv.keve.ren) to have visible links while keeping the PDF clean.`,
		// ],
		// [
		// 	"Doogle",
		// 	"github.com/jkeveren/doogle",
		// 	"Jun 2020 and Jan 2021",
		// 	["Go", "Regexp", "Node.js", "Firebase"],
		// 	`Proxy to Google.com which replaces every instance of the word "Google" with the word "Doogle" including logos.
		// 	Any search is replaced by an image search for "beagle" with all instances of "beagle" replaces by "doogle".`,
		// ],
		// [
		// 	"Require Object",
		// 	"npmjs.com/package/require-object",
		// 	"Apr 2018",
		// 	["Node.js", "NPM", "JavaScript"],
		// 	`NPM package that allows files to be accessed via an object that replicates the directory structure of the project.
		// 	Imports modules and reads file using getters for memory efficiency.
		// 	Removes the need for fragile relative paths.`
		// ],
		// [
		// 	"Crop Collage",
		// 	"github.com/jkeveren/crop-collage",
		// 	"Nov 2021",
		// 	["C++", "Magick++"],
		// 	`Linux tool that recursively finds images with an xattr that specifies an ImageMagic geometry.
		// 	Crops to that geometry and builds a collage from those cropped images.
		// 	Allows the archival of original images and use of cropped image in collage without the necessity to store a cropped version.
		// 	Optimized to reduce memory usage.`,
		// ],
		// [
		// 	"File Drop",
		// 	"github.com/jkeveren/file-drop",
		// 	"Dec 2021",
		// 	["Go", "JavaScript", "HTML", "CSS"],
		// 	`Simple website for uploading files.
		// 	Useful when someone wants to send me a large file without an FTP client.`,
		// ],
		// [
		// 	"Crossout Market Scoring Tool",
		// 	"github.com/jkeveren/crossout-market-scoring-tool",
		// 	"Aug 2020",
		// 	["JavaScript", "Node.js"],
		// 	`Tool that analyses the market in the game Crossout in order to find the best items to buy and sell for profit.
		// 	Takes into account supply and demand, market activity and ROI.`,
		// ],
		// [
		// 	"Whitelisted File Server",
		// 	"github.com/jkeveren/whitelisted-file-server",
		// 	"Nov 2017 - Jun 2020",
		// 	["JavaScript", "Node.js"],
		// 	`Simple file server which only allows access if the clients IP is whitelisted.
		// 	Useful when sending a large files to friends with relative security and simple authentication.`,
		// ],
	];
	const printCount = Infinity;
	const noPrint = div(null);
	noPrint.classList.add("noprint");
	for (let i = 0; i < personalProjects.length; i++) {
		const [name, link, date, skills, description] = personalProjects[i];

		let parent = container;
		if (i >= printCount) {
			parent = noPrint;
		}

		const row = div(parent);
		Object.assign(row.style, {
			display: "flex",
			gap: "10px",
			alignItems: "flex-end",
		});

		heading2(row, name);

		grower(row);

		const skillsContainer = div(row);
		Object.assign(skillsContainer.style, {
			display: "flex",
			gap: "4px"
		});
		for (let s of skills) {
			const e = text(skillsContainer, s);
			Object.assign(e.style, {
				background: "#ccc",
				printColorAdjust: "exact",
				webkitPrintColorAdjust: "exact",
				borderRadius: "4px",
				padding: "0 2px",
			});
		}

		if (link){
			anchor(row, link, "https://" + link);
		}
		// text(row, date);
		text(parent, description);
	}
	// append after adding non-nopriont projects so they appear first
	container.appendChild(noPrint);

	const spacer = div(container);
	spacer.style.height = "10px";

	text(container, "For more projects check out these links:");
	const l = list(container);
	anchor(listItem(l), "grabcad.com/james.keveren-1", "https://grabcad.com/james.keveren-1/models");
	anchor(listItem(l), "thingiverse.com/jkeveren", "https://www.thingiverse.com/jkeveren/designs");
	anchor(listItem(l), "github.com/jkeveren", "https://github.com/jkeveren");
}
