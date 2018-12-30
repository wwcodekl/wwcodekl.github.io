
var participantCtx = document.getElementById("participantPieChart").getContext('2d');
var participantPieChart = new Chart(participantCtx, {
    type: 'pie',
    data: {
        labels: ["Female", "Male"],
        datasets: [{
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [59.14, 40.86]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Peatix sign-ups by gender'
        }
    }
});

var volunteerCtx = document.getElementById("volunteerPieChart").getContext('2d');
var volunteerPieChart = new Chart(volunteerCtx, {
    type: 'pie',
    data: {
        labels: ["Female", "Male"],
        datasets: [{
            backgroundColor: ["#6e202c", "#271452"],
            data: [59.09, 40.91]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Speakers and Volunteers by gender'
        }
    }
});

var eventBarCtx = document.getElementById("eventBarChart").getContext('2d');
const events = [
    {
        code: "5_freebsd",
        name: "FreeBSD Project and How To Become Part Of It",
        shortname: "FreeBSD",
        female: 40.0,
        male: 60.0
    },
    {
        code: "13_ethereum",
        name: "Ethereum workshop: Creating Distributed Applications",
        shortname: "Ethereum workshop",
        female: 44.7,
        male: 55.3
    },
    {
        code: "18_blockchain_use_cases",
        name: "Smart Contracts and Blockchain Use-Cases",
        shortname: "Smart Contracts",
        female: 51.6,
        male: 48.4
    },
    {
        code: "16_health",
        name: "Health Tech - How to hack your own health with technology?",
        shortname: "Health Tech",
        female: 55.4,
        male: 44.6
    },
    {
        code: "14_civictech",
        name: "Civic Tech - What is it and how do we contribute?",
        shortname: "Civic Tech",
        female: 55.6,
        male: 44.4
    },
    {
        code: "9_dlt",
        name: "Blockchain and Distributed Ledger Technology",
        shortname: "DLT",
        female: 59.4,
        male: 40.6
    },
    {
        code: "10_python4",
        name: "Python 104",
        shortname: "Python 104",
        female: 60.0,
        male: 40.0
    },
    {
        code: "15_arduino",
        name: "Internet of Things (IoT) Arduino Workshop",
        shortname: "Arduino Workshop",
        female: 60.0,
        male: 40.0
    },
    {
        code: "8_security",
        name: "The future of security and privacy with decentralised identity",
        shortname: "Security and Privacy",
        female: 60.4,
        male: 39.6
    },
    {
        code: "11_agile",
        name: "Agile Series: What Lies Beyond the Code?",
        shortname: "Agile",
        female: 60.8,
        male: 39.2
    },
    {
        code: "17_webpack",
        name: "Introduction to Webpack",
        shortname: "Webpack",
        female: 66.7,
        male: 33.3
    },
    {
        code: "12_panel",
        name: "Career Choice Showdown: Technical vs Management",
        shortname: "Technical vs Management",
        female: 67.2,
        male: 32.8
    },
    {
        code: "6_python2_3",
        name: "Python 102 & 103",
        shortname: "Python 102/103",
        female: 71.8,
        male: 28.2
    },
    {
        code: "1_python1",
        name: "Python 101",
        shortname: "Python 101",
        female: 74.5,
        male: 25.5
    }
];

var eventBarChart = new Chart(eventBarCtx, {
    type: 'bar',
    data: {
        labels: [
            events.find(x => x.code === "1_python1").shortname,
            events.find(x => x.code === "5_freebsd").shortname,
            events.find(x => x.code === "6_python2_3").shortname,
            events.find(x => x.code === "8_security").shortname,
            events.find(x => x.code === "9_dlt").shortname,
            events.find(x => x.code === "10_python4").shortname,
            events.find(x => x.code === "11_agile").shortname,
            events.find(x => x.code === "12_panel").shortname,
            events.find(x => x.code === "13_ethereum").shortname,
            events.find(x => x.code === "14_civictech").shortname,
            events.find(x => x.code === "15_arduino").shortname,
            events.find(x => x.code === "16_health").shortname,
            events.find(x => x.code === "17_webpack").shortname,
            events.find(x => x.code === "18_blockchain_use_cases").shortname
        ],
        datasets: [
            {
                label: 'Female',
                data: [
                    events.find(x => x.code === "1_python1").female,
                    events.find(x => x.code === "5_freebsd").female,
                    events.find(x => x.code === "6_python2_3").female,
                    events.find(x => x.code === "8_security").female,
                    events.find(x => x.code === "9_dlt").female,
                    events.find(x => x.code === "10_python4").female,
                    events.find(x => x.code === "11_agile").female,
                    events.find(x => x.code === "12_panel").female,
                    events.find(x => x.code === "13_ethereum").female,
                    events.find(x => x.code === "14_civictech").female,
                    events.find(x => x.code === "15_arduino").female,
                    events.find(x => x.code === "16_health").female,
                    events.find(x => x.code === "17_webpack").female,
                    events.find(x => x.code === "18_blockchain_use_cases").female
                ],
                backgroundColor: "#3e95cd"
            },
            {
                label: 'Male',
                data: [
                    events.find(x => x.code === "1_python1").male,
                    events.find(x => x.code === "5_freebsd").male,
                    events.find(x => x.code === "6_python2_3").male,
                    events.find(x => x.code === "8_security").male,
                    events.find(x => x.code === "9_dlt").male,
                    events.find(x => x.code === "10_python4").male,
                    events.find(x => x.code === "11_agile").male,
                    events.find(x => x.code === "12_panel").male,
                    events.find(x => x.code === "13_ethereum").male,
                    events.find(x => x.code === "14_civictech").male,
                    events.find(x => x.code === "15_arduino").male,
                    events.find(x => x.code === "16_health").male,
                    events.find(x => x.code === "17_webpack").male,
                    events.find(x => x.code === "18_blockchain_use_cases").male
                ],
                backgroundColor: "#8e5ea2"
            },
        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true,
                ticks: {
                    autoSkip: false
                }
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});

$(function () {
});

$(document).ready(function () {
    $('.title').animate({ 'opacity': '1' }, 1500);
    $('#section-events').delay(250).animate({ 'opacity': '1' }, 1500);
    $(window).scroll(function () {
        $('.fade-in').each(function (i) {
            var middle_of_object = $(this).position().top + $(this).outerHeight() - $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > middle_of_object) {
                $(this).delay(100).animate({ 'opacity': '1' }, 1500);
            }
        });
    });

});

const groups = [
    {
        name: "Ruby Malaysia",
        link: "https://www.meetup.com/ruby-malaysia/"

    },
    {
        name: "KualaLumpurJS",
        link: "https://www.facebook.com/groups/kualalumpurjs/events/"
    },
    {
        name: "DevOps Malaysia",
        link: "https://www.meetup.com/DevOpsMalaysia/"
    },
    {
        name: "Ethereum Malaysia",
        link: "https://www.meetup.com/ETHMALAYSIA/"
    },
    {
        name: "Golang Kuala Lumpur",
        link: "https://www.meetup.com/Golang-Kuala-Lumpur/"
    },
    {
        name: "Elixir Malaysia",
        link: "https://www.meetup.com/Elixir-Malaysia/"
    },
    {
        name: "Rust",
        link: "??"
    },
    {
        name: "Women Who Code KL",
        link: "https://www.meetup.com/Women-Who-Code-Kuala-Lumpur/"
    }
]
