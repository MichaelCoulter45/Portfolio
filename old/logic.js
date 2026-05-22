const video = document.getElementById('video-iframe');
const p = document.getElementById('p');

function loadVideo(src, buttonId) {
    console.log("loadVideo called with:", src, buttonId);

    // Hide all toggle buttons
    document.querySelectorAll('[id$="-toggle"]').forEach(btn => {
        btn.style.display = 'none';
    });

    if (!src) {
        p.textContent = "Sorry, I don't have a video yet!";
        video.classList.add('video-off');
        video.pause();
        return;
    }

    p.textContent = '';
    const toggle_button = document.getElementById(buttonId.replace('-demo', '-toggle'));

    video.src = src + '?t=' + Date.now();
    video.classList.remove('video-off');
    video.play();

    toggle_button.style.display = 'inline';
    toggle_button.textContent = 'Turn Video Off';

    toggle_button.onclick = () => {
        if (video.paused) {
            video.play();
            video.classList.remove('video-off');
            toggle_button.textContent = 'Turn Video Off';
        } else {
            video.pause();
            video.currentTime = 0;
            video.classList.add('video-off');
            toggle_button.textContent = 'Watch Demo';
        }
    };
}


function showDashboardVideo()     { loadVideo(null, 'dashboard-demo'); }
function showFitFileViewerVideo() { console.log("showFitFileViewerVideo called"); loadVideo('./videos/Fit file viewer.mp4', 'fitfile-demo'); }
function showGameBotVideo()       { loadVideo(null, 'bot-demo'); }
function showRPSVideo()           { console.log("showRPSVideo called"); loadVideo('./videos/RockPaperScissorsSim.mp4', 'rps-demo'); }














/* 
// Project Codes --> deprecated. 
function showDashboardCode() {
    const text = document.getElementById('code-display');
    text.textContent = "Dashboard Text!"


    const block = document.getElementById('code-display');
    const btn = document.getElementById('dashboard-code');

    if (block.style.display === "none") {
        block.style.display = "block";
        btn.textContent = "Hide Code";
    } else {
        block.style.display = "none";
        btn.textContent = "View Code";
    }
}
function showGameBotCode() {
    const text = document.getElementById('code-display');
    text.textContent = "Game Bot Text!"


    const block = document.getElementById('code-display');
    const btn = document.getElementById('bot-code');

    if (block.style.display === "none") {
        block.style.display = "block";
        btn.textContent = "Hide Code";
    } else {
        block.style.display = "none";
        btn.textContent = "View Code";
    }
}
function showFitFileViewerCode() {
    const text = document.getElementById('code-display');
    text.textContent = "Fit File Viewer Text!"


    const block = document.getElementById('code-display');
    const btn = document.getElementById('fitfile-code');

    if (block.style.display === "none") {
        block.style.display = "block";
        btn.textContent = "Hide Code";
    } else {
        block.style.display = "none";
        btn.textContent = "View Code";
    }
}
function showRPSCode() {
    const text = document.getElementById('code-display');
    text.textContent = "RPS Text!"



    const block = document.getElementById('code-display');
    const btn = document.getElementById('rps-code');

    if (block.style.display === "none") {
        block.style.display = "block";
        btn.textContent = "Hide Code";
    } else {
        block.style.display = "none";
        btn.textContent = "View Code";
    }
}


// &playlist=0SfMKH69fHI&controls=0&mute=1&autoplay=1&loop=1&playsinline=1
*/