// ========== HARD QUESTION BANK ==========
const BOSS_DATA = {
    placevalue: {
        name: "PLACE VALUE COLOSSUS",
        icon: "fas fa-crown",
        order: 0,
        questions: [
            { text: "What is the value of the digit 9 in 9,847?", options: ["9", "90", "900", "9,000"], correct: "9,000", hint: "9 is in thousands place → 9,000" },
            { text: "In 5,203, what is the sum of the hundreds and tens digits?", options: ["2+0=2", "5+2=7", "2+3=5", "5+3=8"], correct: "2+0=2", hint: "Hundreds=2, Tens=0, sum=2" },
            { text: "Write the number: 8 thousands + 0 hundreds + 4 tens + 7 ones", options: ["8,047", "8,407", "8,470", "8,074"], correct: "8,047", hint: "8,000 + 0 + 40 + 7 = 8,047" },
            { text: "What is the expanded form of 6,305?", options: ["6000+300+5", "6000+300+50", "6000+30+5", "6000+300+0+5"], correct: "6000+300+0+5", hint: "6,305 = 6000+300+0+5" },
            { text: "Which number has 5 thousands, 2 hundreds, 0 tens, and 8 ones?", options: ["5,208", "5,280", "5,028", "5,820"], correct: "5,208", hint: "5000+200+0+8=5,208" },
            { text: "The digit 4 in 34,126 is in which place?", options: ["Thousands", "Hundreds", "Ten-thousands", "Tens"], correct: "Thousands", hint: "34,126: 3-ten thousands, 4-thousands" },
            { text: "What is 3,456 rounded to the nearest hundred?", options: ["3,400", "3,500", "3,460", "3,000"], correct: "3,500", hint: "456 ≥ 450 → round up to 3,500" },
            { text: "How many tens are in 8,240?", options: ["8", "24", "824", "8,240"], correct: "824", hint: "8,240 ÷ 10 = 824 tens" },
            { text: "What is the value of the digit 7 in 17,890?", options: ["7", "70", "700", "7,000"], correct: "7,000", hint: "17,890: 7 is in thousands place → 7,000" },
            { text: "Write 9,001 in words", options: ["Nine thousand one", "Nine thousand ten", "Nine thousand one hundred", "Nine thousand eleven"], correct: "Nine thousand one", hint: "9,001 = nine thousand one" },
            { text: "What is the smallest 4-digit number using digits 5,2,8,1?", options: ["1,258", "1,285", "1,528", "1,825"], correct: "1,258", hint: "Arrange smallest to largest: 1,2,5,8 → 1,258" },
            { text: "In 40,602, the digit 0 is in which places?", options: ["Thousands and tens", "Hundreds and ones", "Thousands and hundreds", "Tens and ones"], correct: "Thousands and tens", hint: "40,602: 0 thousands, 6 hundreds, 0 tens, 2 ones" },
            { text: "What is the place value of 6 in 162,834?", options: ["6,000", "60,000", "600", "60"], correct: "60,000", hint: "162,834: 6 is in ten-thousands place → 60,000" },
            { text: "Which is greater: 3,502 or 3,520?", options: ["3,502", "3,520", "Equal", "Cannot tell"], correct: "3,520", hint: "Compare tens place: 20 > 0" },
            { text: "What number is 1,000 more than 8,999?", options: ["9,999", "8,000", "9,000", "10,000"], correct: "9,999", hint: "8,999 + 1,000 = 9,999" }
        ]
    },
    rounding: {
        name: "ROUNDING OGRE",
        icon: "fas fa-chart-line",
        order: 1,
        questions: [
            { text: "Round 3,678 to the nearest thousand", options: ["3,000", "4,000", "3,700", "3,680"], correct: "4,000", hint: "3,678 ≥ 3,500 → 4,000" },
            { text: "Round 7,249 to the nearest hundred", options: ["7,200", "7,300", "7,250", "7,000"], correct: "7,200", hint: "7,249 < 7,250 → 7,200" },
            { text: "Round 12,850 to the nearest thousand", options: ["12,000", "13,000", "12,900", "13,000"], correct: "13,000", hint: "12,850 ≥ 12,500 → 13,000" },
            { text: "What is 99 rounded to the nearest ten?", options: ["90", "100", "99", "95"], correct: "100", hint: "99 ≥ 95 → 100" },
            { text: "Round 5,555 to the nearest ten", options: ["5,550", "5,560", "5,600", "5,500"], correct: "5,560", hint: "555 rounds to 560" },
            { text: "Estimate: 4,823 + 3,289 (nearest thousand)", options: ["8,000", "9,000", "7,000", "8,500"], correct: "8,000", hint: "4,823≈5,000, 3,289≈3,000, sum≈8,000" },
            { text: "Round 99,501 to the nearest ten-thousand", options: ["100,000", "99,000", "100,000", "99,500"], correct: "100,000", hint: "99,501 ≥ 95,000 → 100,000" },
            { text: "What is 1,499 rounded to the nearest hundred?", options: ["1,400", "1,500", "1,490", "1,000"], correct: "1,500", hint: "1,499 ≥ 1,450 → 1,500" },
            { text: "Round 2,050 to nearest hundred", options: ["2,000", "2,100", "2,050", "2,500"], correct: "2,100", hint: "050 rounds up to 100" },
            { text: "Estimate 8,745 - 3,210 (nearest hundred)", options: ["5,500", "5,600", "5,400", "5,000"], correct: "5,500", hint: "8,700 - 3,200 = 5,500" },
            { text: "Round 47,382 to nearest thousand", options: ["47,000", "48,000", "47,400", "47,500"], correct: "47,000", hint: "382 < 500 → 47,000" },
            { text: "What is 6,250 rounded to nearest hundred?", options: ["6,200", "6,300", "6,250", "6,000"], correct: "6,300", hint: "250 is halfway → round up" },
            { text: "Round 14,999 to nearest ten", options: ["14,990", "15,000", "14,900", "15,000"], correct: "15,000", hint: "999 rounds to 1,000" },
            { text: "A book has 12,487 pages. About how many to nearest thousand?", options: ["12,000", "13,000", "12,500", "12,400"], correct: "12,000", hint: "487 < 500 → 12,000" },
            { text: "Round 9,876 to nearest hundred", options: ["9,800", "9,900", "10,000", "9,880"], correct: "9,900", hint: "876 ≥ 850 → 9,900" }
        ]
    },
    addition: {
        name: "ADDITION DRAGON",
        icon: "fas fa-plus-circle",
        order: 2,
        questions: [
            { text: "2,456 + 3,789 = ?", options: ["6,245", "6,235", "6,345", "6,135"], correct: "6,245", hint: "2,456+3,789=6,245" },
            { text: "5,678 + 4,322 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "5,678+4,322=10,000" },
            { text: "7,890 + 2,110 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "7,890+2,110=10,000" },
            { text: "3,456 + 2,789 + 1,234 = ?", options: ["7,479", "7,579", "7,379", "7,679"], correct: "7,479", hint: "3,456+2,789=6,245, +1,234=7,479" },
            { text: "What is 9,999 + 1?", options: ["10,000", "9,990", "10,100", "9,999"], correct: "10,000", hint: "9,999+1=10,000" },
            { text: "4,567 + 5,433 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "4,567+5,433=10,000" },
            { text: "8,888 + 1,112 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "8,888+1,112=10,000" },
            { text: "6,543 + 2,789 = ?", options: ["9,332", "9,432", "9,232", "9,532"], correct: "9,332", hint: "6,543+2,789=9,332" },
            { text: "Add 7,777 + 2,223", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "7,777+2,223=10,000" },
            { text: "What is the sum of 1,234 + 5,678 + 3,088?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "1,234+5,678=6,912, +3,088=10,000" },
            { text: "4,567 + 4,567 = ?", options: ["9,134", "9,234", "9,034", "9,334"], correct: "9,134", hint: "4,567+4,567=9,134" },
            { text: "8,901 + 1,099 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "8,901+1,099=10,000" },
            { text: "3,210 + 4,321 + 2,469 = ?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "3,210+4,321=7,531, +2,469=10,000" },
            { text: "What is 5,555 + 4,445?", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "5,555+4,445=10,000" },
            { text: "Add: 6,789 + 3,211", options: ["10,000", "9,990", "10,100", "9,900"], correct: "10,000", hint: "6,789+3,211=10,000" }
        ]
    },
    subtraction: {
        name: "SUBTRACTION WRAITH",
        icon: "fas fa-minus-circle",
        order: 3,
        questions: [
            { text: "10,000 - 3,456 = ?", options: ["6,544", "6,554", "6,444", "6,644"], correct: "6,544", hint: "10,000-3,456=6,544" },
            { text: "8,000 - 2,789 = ?", options: ["5,211", "5,311", "5,111", "5,411"], correct: "5,211", hint: "8,000-2,789=5,211" },
            { text: "7,500 - 3,789 = ?", options: ["3,711", "3,811", "3,611", "3,911"], correct: "3,711", hint: "7,500-3,789=3,711" },
            { text: "9,999 - 5,678 = ?", options: ["4,321", "4,421", "4,221", "4,521"], correct: "4,321", hint: "9,999-5,678=4,321" },
            { text: "6,543 - 2,789 = ?", options: ["3,754", "3,854", "3,654", "3,954"], correct: "3,754", hint: "6,543-2,789=3,754" },
            { text: "What is 10,000 - 1?", options: ["9,999", "9,990", "9,900", "10,000"], correct: "9,999", hint: "10,000-1=9,999" },
            { text: "5,000 - 2,345 = ?", options: ["2,655", "2,755", "2,555", "2,855"], correct: "2,655", hint: "5,000-2,345=2,655" },
            { text: "8,888 - 4,444 = ?", options: ["4,444", "4,444", "4,344", "4,544"], correct: "4,444", hint: "8,888-4,444=4,444" },
            { text: "9,876 - 5,432 = ?", options: ["4,444", "4,544", "4,344", "4,644"], correct: "4,444", hint: "9,876-5,432=4,444" },
            { text: "7,777 - 3,333 = ?", options: ["4,444", "4,444", "4,344", "4,544"], correct: "4,444", hint: "7,777-3,333=4,444" },
            { text: "10,000 - 7,890 = ?", options: ["2,110", "2,210", "2,010", "2,310"], correct: "2,110", hint: "10,000-7,890=2,110" },
            { text: "6,000 - 2,999 = ?", options: ["3,001", "3,101", "2,901", "3,201"], correct: "3,001", hint: "6,000-2,999=3,001" },
            { text: "9,500 - 4,678 = ?", options: ["4,822", "4,922", "4,722", "5,022"], correct: "4,822", hint: "9,500-4,678=4,822" },
            { text: "8,234 - 3,456 = ?", options: ["4,778", "4,878", "4,678", "4,978"], correct: "4,778", hint: "8,234-3,456=4,778" },
            { text: "What is 10,000 - 9,999?", options: ["1", "0", "2", "10"], correct: "1", hint: "10,000-9,999=1" }
        ]
    }
};

const TOPIC_ORDER = ['placevalue', 'rounding', 'addition', 'subtraction'];
let bossStates = {};
let globalStreak = 0;
let totalPossible = 0;
let currentUnlockedIndex = 0;
let currentSelectedTopic = null;

// Initialize game
function initGame() {
    totalPossible = 0;
    for (let tid of TOPIC_ORDER) {
        const qlist = BOSS_DATA[tid].questions;
        totalPossible += qlist.length;
        bossStates[tid] = {
            currentIdx: 0,
            answers: qlist.map(q => ({ q: q, answered: false, correct: false }))
        };
    }
    document.getElementById('maxScoreSpan').innerText = totalPossible;
    updateUIStats();
    renderDashboard();
    loadTheme();
}

function updateUIStats() {
    let totalCorrectOverall = 0;
    let defeatedCount = 0;
    for (let tid of TOPIC_ORDER) {
        const state = bossStates[tid];
        if (state) {
            const correct = state.answers.filter(a => a.correct).length;
            totalCorrectOverall += correct;
            if (correct === state.answers.length) defeatedCount++;
        }
    }
    document.getElementById('totalScoreSpan').innerText = totalCorrectOverall;
    document.getElementById('slainCount').innerText = defeatedCount;
    document.getElementById('streakGlobal').innerText = globalStreak;
    
    // Update unlocked index based on defeated bosses
    currentUnlockedIndex = defeatedCount;
}

function renderDashboard() {
    const container = document.getElementById('topicsDashboard');
    container.innerHTML = '';
    
    for (let i = 0; i < TOPIC_ORDER.length; i++) {
        const tid = TOPIC_ORDER[i];
        const boss = BOSS_DATA[tid];
        const state = bossStates[tid];
        const correctCount = state.answers.filter(a => a.correct).length;
        const totalQs = state.answers.length;
        const isDefeated = correctCount === totalQs;
        const isUnlocked = i <= currentUnlockedIndex;
        
        const card = document.createElement('div');
        card.className = `topic-card ${!isUnlocked ? 'locked' : ''}`;
        if (isUnlocked && !isDefeated) {
            card.style.cursor = 'pointer';
            card.onclick = () => openBossBattle(tid);
        } else if (isDefeated) {
            card.style.cursor = 'pointer';
            card.onclick = () => openBossBattle(tid);
        }
        
        const progressPercent = (correctCount / totalQs) * 100;
        
        card.innerHTML = `
            <div class="card-header">
                <i class="${boss.icon}"></i>
                <h3>${boss.name}</h3>
            </div>
            <div class="card-body">
                <div class="boss-stats">
                    <span><i class="fas fa-trophy"></i> ${correctCount}/${totalQs}</span>
                    <span><i class="fas fa-chart-line"></i> ${Math.round(progressPercent)}%</span>
                </div>
                <div class="progress-bar-bg">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div class="card-status">
                    ${!isUnlocked ? '<span class="status-locked"><i class="fas fa-lock"></i> LOCKED - Defeat previous boss first!</span>' : 
                      isDefeated ? '<span class="status-defeated"><i class="fas fa-trophy"></i> DEFEATED! ⭐</span>' : 
                      '<span class="status-unlocked"><i class="fas fa-unlock-alt"></i> READY TO BATTLE!</span>'}
                </div>
            </div>
        `;
        container.appendChild(card);
    }
}

function openBossBattle(topicId) {
    const topicIndex = TOPIC_ORDER.indexOf(topicId);
    if (topicIndex > currentUnlockedIndex) {
        alert("⚔️ This boss is locked! Defeat the previous bosses to unlock this challenge! ⚔️");
        return;
    }
    
    currentSelectedTopic = topicId;
    const boss = BOSS_DATA[topicId];
    document.getElementById('arenaBossName').innerHTML = `<i class="${boss.icon}"></i> ${boss.name}`;
    document.getElementById('activeArena').classList.remove('hidden');
    renderBattleArena();
}

function closeArena() {
    document.getElementById('activeArena').classList.add('hidden');
    currentSelectedTopic = null;
    renderDashboard();
    updateUIStats();
}

function renderBattleArena() {
    if (!currentSelectedTopic) return;
    
    const arenaDiv = document.getElementById('dynamicArena');
    const topicId = currentSelectedTopic;
    const boss = BOSS_DATA[topicId];
    const state = bossStates[topicId];
    if (!state) return;
    
    const totalQs = state.answers.length;
    const correctCount = state.answers.filter(a => a.correct).length;
    const allAnsweredAndCorrect = state.answers.every(a => a.answered && a.correct);
    
    if (allAnsweredAndCorrect) {
        const isFinalBoss = TOPIC_ORDER[TOPIC_ORDER.length - 1] === topicId;
        const allBossesDefeated = currentUnlockedIndex === TOPIC_ORDER.length;
        
        arenaDiv.innerHTML = `
            <div class="boss-arena">
                <div class="boss-gate" style="background: ${isFinalBoss && allBossesDefeated ? 'linear-gradient(95deg, #f59e0b, #ffd700)' : '#2b6e3c'};">
                    <div class="boss-name"><i class="${boss.icon}"></i><h2>${boss.name} — DEFEATED!</h2></div>
                    <div class="boss-hp-status"><i class="fas fa-check-circle"></i> VICTORY!</div>
                </div>
                <div class="boss-core">
                    <div class="${isFinalBoss && allBossesDefeated ? 'final-victory' : 'completed-badge'}">
                        <i class="fas fa-trophy trophy-gold"></i>
                        <h2>${isFinalBoss && allBossesDefeated ? '🏆 LEGENDARY VICTORY! 🏆' : 'BOSS DEFEATED!'}</h2>
                        <p>Score: ${correctCount}/${totalQs}</p>
                        ${isFinalBoss && allBossesDefeated ? 
                            '<p><i class="fas fa-crown"></i> You are the Math Champion! <i class="fas fa-crown"></i></p>' : 
                            '<p><i class="fas fa-star"></i> Great job, warrior! <i class="fas fa-star"></i></p>'}
                        <button class="next-move" id="closeVictoryBtn"><i class="fas fa-arrow-left"></i> Return to Dashboard</button>
                    </div>
                </div>
            </div>
        `;
        document.getElementById('closeVictoryBtn')?.addEventListener('click', closeArena);
        return;
    }
    
    const current = state.answers[state.currentIdx];
    const q = current.q;
    const answeredCount = state.answers.filter(a => a.answered).length;
    const progressPercent = (answeredCount / totalQs) * 100;
    
    // Reset feedback for unanswered questions
    let feedbackHtml = `<i class="fas fa-info-circle"></i> Choose your attack!`;
    let feedbackClass = '';
    
    if (current.answered) {
        if (current.correct) {
            feedbackHtml = `<i class="fas fa-check-circle"></i> CRITICAL HIT! +1 point. Streak: ${globalStreak}x`;
            feedbackClass = 'feedback-correct';
        } else {
            feedbackHtml = `<i class="fas fa-skull"></i> MISS! Correct answer: ${q.correct}. ${q.hint || 'Keep fighting!'}`;
            feedbackClass = 'feedback-wrong';
        }
    }
    
    arenaDiv.innerHTML = `
        <div class="boss-arena">
            <div class="boss-gate">
                <div class="boss-name"><i class="${boss.icon}"></i><h2>${boss.name}</h2></div>
                <div class="boss-hp-status"><i class="fas fa-heartbeat"></i> VICTORIES: ${correctCount}/${totalQs}</div>
            </div>
            <div class="boss-core">
                <div class="question-pavilion">
                    <div class="timer-track"><div class="timer-flow" style="width: ${progressPercent}%;"></div></div>
                    <div class="question-epic"><i class="fas fa-dice-d6"></i> ${q.text}</div>
                    <div class="options-grid" id="activeOptions">
                        ${q.options.map(opt => `<button class="option-btn" data-opt="${opt.replace(/"/g, '&quot;')}"><i class="fas fa-bolt"></i> ${opt}</button>`).join('')}
                    </div>
                    <div class="feedback-area ${feedbackClass}">${feedbackHtml}</div>
                    ${current.answered ? `<button class="next-move" id="nextBossBtn"><i class="fas fa-forward"></i> NEXT CHALLENGE →</button>` : ''}
                    <div class="streak-badge"><i class="fas fa-fire"></i> STREAK: ${globalStreak}x &nbsp;|&nbsp; <i class="fas fa-chart-simple"></i> Progress: ${answeredCount}/${totalQs}</div>
                </div>
            </div>
        </div>
    `;
    
    if (!current.answered) {
        const btns = document.querySelectorAll('#activeOptions .option-btn');
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const selected = btn.getAttribute('data-opt');
                const isCorrect = (selected === q.correct);
                handleBattleAnswer(topicId, selected, isCorrect);
            });
        });
    }
    
    const nextBtn = document.getElementById('nextBossBtn');
    if (nextBtn) {
        // Remove any existing event listeners by cloning and replacing
        const newNextBtn = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);
        newNextBtn.addEventListener('click', () => nextBattleQuestion(topicId));
    }
}

function handleBattleAnswer(topicId, selected, isCorrect) {
    const state = bossStates[topicId];
    const currentQ = state.answers[state.currentIdx];
    if (currentQ.answered) return;
    
    currentQ.answered = true;
    currentQ.correct = isCorrect;
    
    if (isCorrect) {
        globalStreak++;
        updateUIStats();
        triggerConfettiBlast();
    } else {
        globalStreak = 0;
        updateUIStats();
    }
    
    renderBattleArena();
    updateUIStats();
    renderDashboard();
}

function nextBattleQuestion(topicId) {
    const state = bossStates[topicId];
    if (!state.answers[state.currentIdx].answered) return;
    
    if (state.currentIdx + 1 < state.answers.length) {
        state.currentIdx++;
        renderBattleArena();
    } else {
        // Boss completed
        renderBattleArena();
        updateUIStats();
        renderDashboard();
    }
}

function triggerConfettiBlast() {
    const canvas = document.getElementById('confettiEpic');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];
    for (let i = 0; i < 180; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            speedY: Math.random() * 8 + 5,
            speedX: (Math.random() - 0.5) * 5,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`
        });
    }
    let anim;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        for (let p of particles) {
            p.y += p.speedY;
            p.x += p.speedX;
            if (p.y < canvas.height) active = true;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        }
        if (active) anim = requestAnimationFrame(draw);
        else cancelAnimationFrame(anim);
    }
    draw();
    setTimeout(() => cancelAnimationFrame(anim), 1800);
}

// Theme management
function loadTheme() {
    const savedTheme = localStorage.getItem('mathQuestTheme') || 'dark-boy';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Set active class on the corresponding theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        if (btn.getAttribute('data-theme') === savedTheme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('mathQuestTheme', theme);
    document.getElementById('themeModal').classList.remove('show');
}

// PDF Report
function generateThemedReport() {
    let totalCor = parseInt(document.getElementById('totalScoreSpan').innerText);
    let slain = parseInt(document.getElementById('slainCount').innerText);
    let reportDiv = document.createElement('div');
    const currentTheme = document.body.getAttribute('data-theme');
    reportDiv.style.background = currentTheme.includes('light') ? '#f9f9ff' : '#1e293b';
    reportDiv.style.padding = "25px";
    reportDiv.style.borderRadius = "30px";
    reportDiv.style.color = currentTheme.includes('light') ? '#1e293b' : '#ffecb3';
    reportDiv.style.fontFamily = "'Inter', sans-serif";
    reportDiv.style.border = "2px solid #ffaa44";
    reportDiv.innerHTML = `
        <div style="text-align:center; border-bottom:2px solid #ffaa44; margin-bottom:20px;">
            <i class="fas fa-dragon" style="font-size: 40px; color:#ffaa44;"></i>
            <h2 style="font-family: 'Press Start 2P'; font-size: 1rem;">LEGENDARY MATH REPORT</h2>
        </div>
        <p><i class="fas fa-scroll"></i> Final Score: ${totalCor} / ${totalPossible}</p>
        <p><i class="fas fa-trophy"></i> Bosses Slain: ${slain} / 4</p>
        <p><i class="fas fa-fire"></i> Current Streak: ${globalStreak}</p>
        <hr style="border-color:#ffaa44; margin:15px 0;">
        <p><i class="fas fa-crown"></i> You are a Math Champion!</p>
    `;
    html2pdf().set({ margin: 0.6, filename: 'Math_Quest_Report.pdf', image: { type: 'jpeg', quality: 0.98 } }).from(reportDiv).save();
}

// Event Listeners
document.getElementById('reportPdfBtn').addEventListener('click', generateThemedReport);
document.getElementById('closeArenaBtn').addEventListener('click', closeArena);
document.getElementById('openThemeModal').addEventListener('click', () => {
    document.getElementById('themeModal').classList.add('show');
});
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('themeModal').classList.remove('show');
});
document.getElementById('applyThemeBtn').addEventListener('click', () => {
    const selected = document.querySelector('.theme-btn.active')?.dataset.theme || 'dark-boy';
    applyTheme(selected);
});
document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Start the game
initGame();