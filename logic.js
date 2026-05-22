const demoVideo    = document.getElementById('demo-video');
const videoInfo    = document.getElementById('video-info');
const videoNoDemo  = document.getElementById('video-no-demo');
const placeholder  = document.getElementById('video-placeholder');
const playingTitle = document.getElementById('playing-title');




// Map project IDs to their video src and display name
const projects = {
    dashboard: {name: "Runner's Dashboard", src: null },
    fitfile:   {name: '.FIT Data Visualization', src:  './videos/Fit file viewer.mp4'},
    gamebot:   {name: 'Game Automation',    src: null },
    rps:       {name: 'Rock Paper Scissors Simulator', src:  './videos/RockPaperScissorsSim.mp4'},
};

let currentProject = null;



function selectProject(id) {
    const project = projects[id];
    if (!project) return;

    // Update active card highlight
    document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active'));
    const card = document.getElementById('card-' + id);
    if (card) card.classList.add('active');

    // No demo available
    if (!project.src) {
        stopVideo();
        videoNoDemo.style.display = 'block';
        return;
    }

    // Hide no-demo notice
    videoNoDemo.style.display = 'none';

    // If same project is already playing, do nothing
    if (currentProject === id) return;

    currentProject = id;

    // Fade out video while switching
    demoVideo.classList.remove('visible');
    placeholder.classList.remove('hidden');

    // Load new video
    demoVideo.pause();
    demoVideo.src = project.src + '?t=' + Date.now();
    demoVideo.load();

    demoVideo.oncanplay = () => {
        demoVideo.play();
        demoVideo.classList.add('visible');
        placeholder.classList.add('hidden');
    };

    // Update now-playing bar
    playingTitle.textContent = project.name;
    videoInfo.style.display = 'flex';
}





function stopVideo() {
    demoVideo.pause();
    demoVideo.src = '';
    demoVideo.classList.remove('visible');
    placeholder.classList.remove('hidden');
    videoInfo.style.display = 'none';
    currentProject = null;
}