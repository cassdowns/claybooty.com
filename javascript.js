// Variables that will be generated
var category = [
' dating',
' banking',
' recipe',
' social networking',
' news',
' navigational',
' travel',
' productivity',
' fitness',
' weather',
'n auction',
' recruitment',
' scheduling',
' messaging',
' cataloguing',
' video sharing',
'n image sharing',
'n AR',
' marketplace',
' food delivery',
' reference',
' tracking',
' training',
'n automation',
' dieting',
' delivery',
' streaming',
'n educational',
' transport',
' doomsday',
' ride-sharing',
'n appreciation',
' crowdfunding',
' micro-transactional gaming',
]

var people = [
'wizards',
'babies',
'new mums',
'witches',
'millionaires',
'cats',
'birds',
'blind people',
'astronauts',
'beekeepers',
'gamblers',
'doctors',
'farmers',
'sea captains',
'models',
'firefighters',
'real-estate agents',
'lawyers',
'yoga instructors',
'shamen',
'priests',
'writers',
'hermits',
'artists',
'hippies',
'pornographers',
'cyclists',
'tradies',
'bartenders',
'designers',
'taxidermists',
'musicians',
'high-school teachers',
'anime fans',
'sports fans',
'circus performers',
'gymnasts',
'gamers',
'florists',
'theme park owners',
'exotic animal collectors',
'dogs',
'superheroes',
'supervillains',
'germaphobes',
'massage therapists',
'imaginary friends',
'postal workers',
'archaeologists',
'personal trainers',
'royalty',
'food critics',
'safety inspectors',
'ghosts',
'paranormal investigators',
'pet detectives',
'private investigators',
'aliens',
'morticians',
'birds',
'pirates',
'adventurers',
'the elderly',
'time travellers',
'robots',
'spies',
'librarians',
'pilots',
'entomolologists',
'hypnotherapists',
'magicians',
'human statues',
'bounty hunters',
'psychics',
'job-seekers',
'cult leaders',
'nuns',
'confidence artists',
'cowboys',
'multi-level marketers',
'Donald Trump',
'high-school bullies',
'horse whisperers',
'drug dealers',
'ambulance chasers',
'second-time Bachelorette contestants',
'lizard people',
'the illuminati',
'freemasons',
'ASIO',
'the FBI',
'the CIA',
'Russian diplomats',
'mascots',
'sock-puppets',
'kids show presenters',
'game show hosts',
'bus drivers',
'failed olympians',
'Mark Zuckerberg',
'prison guards',
]

// Converts the two variables into a string
function newIdea() {
	var randomNum1 = Math.floor(Math.random() * (category.length));
	var randomNum2 = Math.floor(Math.random() * (people.length));
	document.getElementById('ideaDisplay').innerHTML = 'A' + category[randomNum1] + ' service for ' + people[randomNum2] + '.';
}

// Randomises background colour
function randomBg() {
	var x = Math.floor(Math.random() * 256);
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var bgColor = "rgb(" + x + "," + y + ',' + z + ")";
console.log(bgColor);
	
	document.body.style.background = bgColor;
}

randomBg();