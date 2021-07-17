
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/profile', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const projectSeed = [{
title:"Mood Muse",
project_link:"https://raynagweinreb.github.io/MoodMuse/",
    gitlab_link:"https://github.com/raynagweinreb/MoodMuse",
    photo:""
},
{
    title:"Fitness Tracker",
    project_link:"https://peaceful-thicket-58145.herokuapp.com/",
    gitlab_link:"https://github.com/raynagweinreb/FitnessTracker",
    photo:""
},
{
    title:"My Portfolio",
    project_link:"https://raynagweinreb.github.io/MyPortfolio/",
    gitlab_link:"https://github.com/raynagweinreb/MyPortfolio",
    photo:""
},
{
    title:"Password Generator",
    project_link:"https://raynagweinreb.github.io/PasswordGenerator/",
    gitlab_link:"https://github.com/raynagweinreb/PasswordGenerator",
    photo:""

},
{
    title:"Weather Dashboard",
    project_link:"https://raynagweinreb.github.io/WeatherDashboard/",
    gitlab_link:"https://github.com/raynagweinreb/WeatherDashboard",
    photo:""
},
{
    title:"Workday Scheduler",
    project_link:"https://raynagweinreb.github.io/DailyWorkScheduler/",
    gitlab_link:"https://github.com/raynagweinreb/DailyWorkScheduler",
    photo:""
}
]
db.Project.deleteMany({})
.then(()=>db.Project.collection.insertMany(projectSeed))
.then((data)=>{
    console.log(data.result.n+"records inserted")
    process.exit(0)
})
.catch((err) => {
    console.error(err);
    process.exit(1);
})