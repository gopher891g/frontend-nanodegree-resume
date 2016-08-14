var bio = {
    "name": "Christian Price",
    "role": "Technologist",
    "contacts": {
        "mobile": "(803) 414-7261",
        "email": "price_ca@me.com",
        "github": "gopher891g",
        "location": "Columbia, SC, US"
    },
    "welcomeMSG": "Clever, composed technologist with a zeal for gadgets and design.",
    "skills": ["educational technology", "research", "teaching", "development"],
    "bioPic": "images/sig.png"
};

var education = {
    "schools": [{
        "name": "University of South Carolina",
        "location": "Colubmia, SC, US",
        "degree": "BFA",
        "major": ["Studio Art", "Visual Design"],
        "dates": "2003 - 2007",
        "url": "sc.edu"
    }, {
        "name": "Midlands Technical College",
        "location": "Colubmia, SC, US",
        "degree": "Associate",
        "major": ["Humanities", "Business"],
        "dates": "2005-2003",
        "url": "midlandstech.edu"
    }, ],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "date": "2016",
        "url": "udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "University of South Carolina",
        "title": "Senior Information Resource Consultant",
        "dates": "August 2014 - May 2015",
        "description": "Managed technology and operations for the College of Education."
    }, {
        "employer": "University of South Carolina",
        "title": "Information Resource Consultant II",
        "dates": "March 2008 - August 2014",
        "description": "Responsible for all items pertaining to IT for the SC Honors College. Maintained hardware, software, databases, mail server, website, 10 seat computer lab, 3 smart classrooms, 2 conference rooms and listservs. Designed Honors College brochures, flyers, handouts, and graphic presentations. Academic adviser for art studio, art history, art education, dance, media arts, theatre, speech, and classics."
    }, {
		"employer": "University of South Carolina",
        "title": "Information Resource Consultant I",
        "dates": "November 2006 - March 2008",
        "description": "Setup and managed computer labs."
    }]
};

var projects = {
    "projects": [{
        "title": "Sample project 1",
        "dates": "2014",
        "description": "stuff, stuff, and more stuff",
        "images": [
            "images/ashe2.png"
        ]
    }, {
        "title": "Sample project 2",
        "dates": "2014",
        "description": "stuff, stuff, and more stuff",
        "images": [
            "images/ashe2.png", "images/philosoraptor.png"
        ]
    }]
};
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMSG);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedWelcomeMSG);
    $("#header").append(formattedBioPic);
    
    for (var contact in bio.contacts) {
        var formattedContacts = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);

        $("#topContacts").append(formattedContacts);
        $("#footerContacts").append(formattedContacts);
    }

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace(
            "%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

    }
};


bio.display();

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $('#education').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
        var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);
        $('.education-entry:last').append(formattedName + formattedDegree);
        $('.education-entry:last').append(formattedDates);
        $('.education-entry:last').append(formattedLocation);
        $('.education-entry:last').append(formattedMajor);
    }
    for (var z = 0; z < education.onlineCourses.length; z++) {
        $('#education').append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[z].title);
        var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[z].school);
        var formattedDate = HTMLonlineDates.replace('%data%', education.onlineCourses[z].date);
        var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[z].url);
        var formattedOnlinecourseheasder = formattedTitle + formattedSchool;
        $('.online-entry:last').append(formattedOnlinecourseheasder);
        $('.online-entry:last').append(formattedDate);
        $('.online-entry:last').append(formattedURL);
    }
};
education.display();

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);




        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();




function inName(_name) {
    var name;
    if (_name) {
        name = _name;
    } else {
        name = bio.name;
    }
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);