
const topics = [
{
 title: "Atom va uning tuzilishi",
 icon: "⚛️",
 description: "Atomning tarkibi va zarrachalari",
 content: `
 <h3>Atom nima?</h3>
 Atom — kimyoviy elementning xossalarini saqlaydigan eng kichik zarracha.
 <h3>Atom tarkibi</h3>
 Atom uchta asosiy zarrachadan tashkil topgan:
 <ul>
 <li><b>Proton</b> — musbat zaryadli zarracha.</li>
 <li><b>Neytron</b> — elektr zaryadiga ega emas.</li>
 <li><b>Elektron</b> — manfiy zaryadli zarracha.</li>
 </ul>
 <div class="formula">Atom yadrosi = Proton + Neytron</div>
 <h3>Elektronlar</h3>
 Elektronlar atom yadrosi atrofidagi elektron qavatlarda joylashadi.
 `,
 questions: [
  ["Proton qanday zaryadga ega?", ["Musbat", "Manfiy", "Neytral", "Zaryadsiz emas"], 0],
  ["Elektron qanday zaryadga ega?", ["Musbat", "Manfiy", "Neytral", "O‘zgaruvchan"], 1],
  ["Neytronning zaryadi qanday?", ["Musbat", "Manfiy", "Neytral", "Ikki xil"], 2],
  ["Atom yadrosida nimalar bo‘ladi?", ["Elektronlar", "Proton va neytron", "Faqat elektron", "Faqat proton"], 1],
  ["Elektron qayerda joylashadi?", ["Yadroda", "Yadro atrofida", "Proton ichida", "Neytron ichida"], 1],
  ["Atomning markaziy qismi nima?", ["Elektron", "Qobiq", "Yadro", "Molekula"], 2],
  ["Proton belgisi qaysi?", ["p⁺", "e⁻", "n⁰", "O"], 0],
  ["Elektron belgisi qaysi?", ["p⁺", "e⁻", "n⁰", "H"], 1],
  ["Neytron belgisi qaysi?", ["e⁻", "p⁺", "n⁰", "Na"], 2],
  ["Oddiy neytral atomda proton va elektron soni qanday?", ["Teng", "Har doim har xil", "Elektron yo‘q", "Proton yo‘q"], 0]
 ]
},
{
 title: "Kimyoviy elementlar",
 icon: "🧬",
 description: "Elementlar va ularning belgilari",
 content: `
 <h3>Kimyoviy element nima?</h3>
 Yadro zaryadi bir xil bo‘lgan atomlar turi kimyoviy element deyiladi.
 <h3>Element belgilari</h3>
 Har bir elementning maxsus kimyoviy belgisi mavjud.
 <div class="formula">H — Vodorod | O — Kislorod</div>
 <div class="formula">Fe — Temir | Au — Oltin</div>
 <h3>Misollar</h3>
 Na — Natriy, C — Uglerod, Ag — Kumush, N — Azot.
 `,
 questions: [
  ["Oltinning belgisi qaysi?", ["Ag", "Au", "Fe", "Cu"], 1],
  ["Kislorodning belgisi qaysi?", ["K", "O", "C", "N"], 1],
  ["Temirning belgisi qaysi?", ["Te", "T", "Fe", "F"], 2],
  ["Vodorodning belgisi qaysi?", ["V", "H", "He", "Hy"], 1],
  ["Kumushning belgisi qaysi?", ["Au", "Ag", "Cu", "Fe"], 1],
  ["Uglerodning belgisi qaysi?", ["Ca", "C", "Co", "Cl"], 1],
  ["Azotning belgisi qaysi?", ["A", "N", "Az", "O"], 1],
  ["Natriyning belgisi qaysi?", ["N", "Na", "Ni", "Ne"], 1],
  ["Misning belgisi qaysi?", ["M", "Cu", "C", "Mg"], 1],
  ["Geliy belgisi qaysi?", ["H", "He", "Hg", "Li"], 1]
 ]
},
{
 title: "Kimyoviy birikmalar",
 icon: "💧",
 description: "Molekulalar va kimyoviy formulalar",
 content: `
 <h3>Kimyoviy birikma</h3>
 Ikki yoki undan ortiq element atomlaridan tashkil topgan modda kimyoviy birikma deyiladi.
 <h3>Molekula</h3>
 Molekula moddaning kimyoviy xossalarini saqlovchi eng kichik zarrachasidir.
 <h3>Formulalar</h3>
 <div class="formula">H₂O — Suv</div>
 <div class="formula">CO₂ — Karbonat angidrid</div>
 <div class="formula">NaCl — Osh tuzi</div>
 <div class="formula">NH₃ — Ammiak</div>
 `,
 questions: [
  ["Suv formulasi qaysi?", ["CO2", "H2O", "O2", "NaCl"], 1],
  ["Osh tuzi formulasi qaysi?", ["HCl", "NaCl", "CO2", "NH3"], 1],
  ["Karbonat angidrid formulasi qaysi?", ["CO2", "O2", "H2", "NaOH"], 0],
  ["Ammiak formulasi qaysi?", ["CH4", "NH3", "H2O", "HCl"], 1],
  ["Kislorod molekulasi formulasi qaysi?", ["O", "O2", "H2O", "CO"], 1],
  ["Metan formulasi qaysi?", ["CH4", "NH3", "NaCl", "CO2"], 0],
  ["Sulfat kislota formulasi qaysi?", ["HCl", "H2SO4", "HNO3", "H2O"], 1],
  ["Vodorod xlorid formulasi qaysi?", ["HCl", "NaCl", "H2SO4", "CO2"], 0],
  ["Kalsiy karbonat formulasi qaysi?", ["CaCO3", "NaCl", "H2O", "KOH"], 0],
  ["Molekula nimadan tashkil topadi?", ["Faqat protondan", "Atomlardan", "Faqat elektrondan", "Faqat neytrondan"], 1]
 ]
},
{
 title: "Moddalar va ularning xossalari",
 icon: "🧪",
 description: "Sof moddalar va aralashmalar",
 content: `
 <h3>Modda nima?</h3>
 Moddalar jismlarni tashkil etuvchi materiallardir.
 <h3>Sof moddalar</h3>
 Tarkibi va xossalari bir xil bo‘lgan moddalar. Masalan, toza suv va kislorod.
 <h3>Aralashmalar</h3>
 Ikki yoki undan ortiq moddaning birgalikdagi holati.
 <div class="formula">Havo — gazlar aralashmasi</div>
 <h3>Moddalarning xossalari</h3>
 Fizik xossalarga rang, hid, zichlik va erish harorati kiradi.
 `,
 questions: [
  ["Havo qanday modda?", ["Sof modda", "Aralashma", "Metall", "Element"], 1],
  ["Toza suv qanday modda?", ["Aralashma", "Sof modda", "Metall", "Gaz"], 1],
  ["Fizik xususiyat qaysi?", ["Rang", "Yonish", "Zanglash", "Parchalanish"], 0],
  ["Aralashma nima?", ["Bitta atom", "Bir nechta modda birikmasi", "Bitta proton", "Bitta element"], 1],
  ["Suvning agregat holatlari qaysilar?", ["Qattiq, suyuq, gaz", "Faqat suyuq", "Faqat gaz", "Faqat qattiq"], 0],
  ["Temir odatda qanday modda?", ["Gaz", "Suyuq", "Qattiq", "Plazma"], 2],
  ["Qum va suv qanday sistema?", ["Sof modda", "Aralashma", "Element", "Atom"], 1],
  ["Moddaning zichligi nimani bildiradi?", ["Hajm birligidagi massani", "Rangini", "Hidini", "Haroratini"], 0],
  ["Muz qanday modda?", ["Suvning qattiq holati", "Gaz", "Metall", "Element"], 0],
  ["Kislorod oddiy sharoitda qanday holatda?", ["Qattiq", "Suyuq", "Gaz", "Metall"], 2]
 ]
},
{
 title: "Mendeleyev davriy jadvali",
 icon: "📊",
 description: "Davrlar, guruhlar va elementlar",
 content: `
 <h3>Davriy jadval</h3>
 Kimyoviy elementlar atom raqami ortib borishi bo‘yicha joylashtirilgan jadvaldir.
 <h3>Davrlar</h3>
 Jadvalning gorizontal qatorlari davrlar deyiladi. Jami 7 ta davr mavjud.
 <h3>Guruhlar</h3>
 Jadvalning vertikal ustunlari guruhlar deyiladi. Zamonaviy jadvalda 18 ta guruh bor.
 <div class="formula">Atom raqami = Protonlar soni</div>
 `,
 questions: [
  ["Davriy jadvalda nechta davr bor?", ["5", "6", "7", "8"], 2],
  ["Zamonaviy davriy jadvalda nechta guruh bor?", ["8", "16", "18", "20"], 2],
  ["Elementlar qanday tartibda joylashgan?", ["Massa kamayishi", "Atom raqami ortishi", "Rang bo‘yicha", "Tasodifiy"], 1],
  ["Atom raqami nimaga teng?", ["Neytronlar soniga", "Protonlar soniga", "Molekulalar soniga", "Qavatlar soniga"], 1],
  ["Davriy jadvalni kim yaratgan?", ["Nyuton", "Mendeleyev", "Eynshteyn", "Faradey"], 1],
  ["Davrlar qanday joylashgan?", ["Vertikal", "Gorizontal", "Diagonal", "Aylana"], 1],
  ["Guruhlar qanday joylashgan?", ["Vertikal", "Gorizontal", "Diagonal", "Aylana"], 0],
  ["Birinchi element qaysi?", ["Kislorod", "Geliy", "Vodorod", "Uglerod"], 2],
  ["Eng oddiy atom qaysi elementga tegishli?", ["Vodorod", "Temir", "Oltin", "Kislorod"], 0],
  ["Kimyoviy elementlar qaysi jadvalda beriladi?", ["Ko‘paytirish jadvali", "Davriy jadval", "Logarifm jadvali", "Taqvim"], 1]
 ]
},
{
 title: "Kimyoviy reaksiyalar",
 icon: "🔬",
 description: "Reaksiya turlari va tenglamalar",
 content: `
 <h3>Kimyoviy reaksiya nima?</h3>
 Bir moddadan boshqa moddalarning hosil bo‘lish jarayoni kimyoviy reaksiya deyiladi.
 <h3>Reaksiya turlari</h3>
 <ul>
 <li>Birikish reaksiyasi.</li>
 <li>Parchalanish reaksiyasi.</li>
 <li>O‘rin olish reaksiyasi.</li>
 <li>Almashinish reaksiyasi.</li>
 </ul>
 <div class="formula">2H₂ + O₂ → 2H₂O</div>
 Bu reaksiyada vodorod va kisloroddan suv hosil bo‘ladi.
 <h3>Muhim qoida</h3>
 Kimyoviy reaksiyada atomlar soni saqlanadi.
 `,
 questions: [
  ["Kimyoviy reaksiya nima?", ["Modda hosil bo‘lish jarayoni", "Muzlash", "Erish", "Maydalanish"], 0],
  ["Suv hosil bo‘lish formulasi qaysi?", ["2H2+O2→2H2O", "H2O→H2", "CO2→O2", "NaCl→Na"], 0],
  ["Birikish reaksiyasida nima sodir bo‘ladi?", ["Bir necha modda birikadi", "Modda yo‘qoladi", "Faqat gaz chiqadi", "Faqat rang o‘zgaradi"], 0],
  ["Parchalanish reaksiyasi nima?", ["Bir modda bir necha moddaga ajraladi", "Moddalar birikadi", "Suv muzlaydi", "Metall eriydi"], 0],
  ["Reaksiyada atomlar soni qanday bo‘ladi?", ["Saqlanadi", "Yo‘qoladi", "Doimo ikki baravar bo‘ladi", "Nolga teng"], 0],
  ["Yonish reaksiyasi ko‘pincha qaysi gaz ishtirokida boradi?", ["Azot", "Kislorod", "Geliy", "Neon"], 1],
  ["Reaksiya tenglamasidagi strelka nimani bildiradi?", ["Hosil bo‘lish yo‘nalishini", "Ayirishni", "Bo‘lishni", "Haroratni"], 0],
  ["Reaksiya boshlanishida turgan moddalar nima deyiladi?", ["Mahsulotlar", "Reagentlar", "Katalizatorlar", "Eritmalar"], 1],
  ["Reaksiya natijasida hosil bo‘lgan moddalar nima deyiladi?", ["Reagentlar", "Mahsulotlar", "Atomlar", "Ionlar"], 1],
  ["Kimyoviy reaksiya belgilaridan biri qaysi?", ["Gaz ajralishi", "Kitob ochilishi", "Jism siljishi", "Shakl chizilishi"], 0]
 ]
},
{
 title: "Kislotalar va asoslar",
 icon: "🧫",
 description: "Kislota, ishqor va indikatorlar",
 content: `
 <h3>Kislotalar</h3>
 Suvdagi eritmasida vodorod ionlari hosil qiladigan moddalar kislotalar deyiladi.
 <div class="formula">HCl — Xlorid kislota</div>
 <div class="formula">H₂SO₄ — Sulfat kislota</div>
 <h3>Asoslar</h3>
 Metall kationi va gidroksid ionidan tashkil topgan moddalar.
 <div class="formula">NaOH — Natriy gidroksid</div>
 <h3>Indikatorlar</h3>
 Lakmus kislotali muhitda qizil, ishqoriy muhitda ko‘k rangga o‘tadi.
 `,
 questions: [
  ["Xlorid kislota formulasi?", ["HCl", "NaOH", "NaCl", "H2O"], 0],
  ["Sulfat kislota formulasi?", ["HNO3", "H2SO4", "HCl", "CO2"], 1],
  ["NaOH qanday modda?", ["Kislota", "Asos", "Tuz", "Oksid"], 1],
  ["Kislota eritmasida qaysi ion hosil bo‘ladi?", ["H+", "OH-", "Na+", "Cl-"], 0],
  ["Lakmus kislotali muhitda qanday rangga o‘tadi?", ["Ko‘k", "Qizil", "Yashil", "Rangsiz"], 1],
  ["Ishqoriy muhitda lakmus qanday rangda bo‘ladi?", ["Qizil", "Ko‘k", "Sariq", "Oq"], 1],
  ["KOH qanday modda?", ["Asos", "Kislota", "Gaz", "Oksid"], 0],
  ["HNO3 qanday kislota?", ["Sulfat", "Nitrat", "Xlorid", "Karbonat"], 1],
  ["Neytrallanish reaksiyasida odatda nima hosil bo‘ladi?", ["Tuz va suv", "Faqat gaz", "Metall", "Faqat kislota"], 0],
  ["Kislota va asos reaksiyasi nima deyiladi?", ["Neytrallanish", "Bug‘lanish", "Muzlash", "Kristallanish"], 0]
 ]
},
{
 title: "Kimyoviy gazlar",
 icon: "🌫️",
 description: "Kislorod, vodorod va azot",
 content: `
 <h3>Gazlar</h3>
 Gazlar moddaning agregat holatlaridan biridir.
 <h3>Kislorod</h3>
 Formula: O₂. Nafas olish va yonish jarayonlarida muhim.
 <h3>Vodorod</h3>
 Formula: H₂. Eng yengil kimyoviy element.
 <h3>Azot</h3>
 Formula: N₂. Atmosferadagi havoning asosiy qismini tashkil etadi.
 <div class="formula">Havo tarkibida taxminan 78% azot va 21% kislorod bor.</div>
 `,
 questions: [
  ["Kislorod formulasi?", ["O", "O2", "CO2", "H2"], 1],
  ["Vodorod formulasi?", ["H2", "H2O", "He", "O2"], 0],
  ["Azot formulasi?", ["N", "N2", "NO2", "NH3"], 1],
  ["Havoda eng ko‘p qaysi gaz bor?", ["Kislorod", "Vodorod", "Azot", "Karbonat angidrid"], 2],
  ["Kislorod yonish jarayonida qanday rol o‘ynaydi?", ["Yonishni qo‘llab-quvvatlaydi", "Har doim o‘chiradi", "Muzlatadi", "Rang beradi"], 0],
  ["Eng yengil element qaysi?", ["Kislorod", "Vodorod", "Temir", "Oltin"], 1],
  ["Karbonat angidrid formulasi?", ["CO2", "O2", "N2", "H2"], 0],
  ["Azot havoning taxminan necha foizini tashkil qiladi?", ["21%", "78%", "50%", "1%"], 1],
  ["Kislorodning kimyoviy belgisi?", ["K", "O", "C", "N"], 1],
  ["Vodorodning kimyoviy belgisi?", ["V", "H", "He", "O"], 1]
 ]
},
{
 title: "Kimyoviy hisoblashlar",
 icon: "⚖️",
 description: "Massa, mol va formulalar",
 content: `
 <h3>Nisbiy atom massa</h3>
 Element atomining nisbiy massasini bildiradi.
 <h3>Mol</h3>
 Modda miqdorining o‘lchov birligi mol hisoblanadi.
 <div class="formula">n = m / M</div>
 n — modda miqdori, m — massa, M — molyar massa.
 <h3>Avogadro doimiysi</h3>
 <div class="formula">Nₐ ≈ 6,02 × 10²³ mol⁻¹</div>
 Bir moldagi zarrachalar sonini bildiradi.
 `,
 questions: [
  ["Modda miqdorining birligi nima?", ["Kilogramm", "Mol", "Metr", "Litr"], 1],
  ["Modda miqdori formulasi qaysi?", ["n=m/M", "m=n/M", "M=n/m", "n=m×M"], 0],
  ["M — nimani bildiradi?", ["Massa", "Molyar massa", "Hajm", "Harorat"], 1],
  ["n — nimani bildiradi?", ["Modda miqdori", "Zichlik", "Harorat", "Bosim"], 0],
  ["Avogadro doimiysining taxminiy qiymati?", ["6,02×10²³", "3×10⁸", "9,8", "100"], 0],
  ["Massa qanday birlikda o‘lchanadi?", ["Kilogramm", "Sekund", "Metr", "Kelvin"], 0],
  ["Molyar massa birligi qaysi?", ["g/mol", "mol", "m/s", "Pa"], 0],
  ["Suvning formulasi?", ["H2O", "CO2", "NaCl", "NH3"], 0],
  ["Agar m=20 g, M=10 g/mol bo‘lsa n qancha?", ["1 mol", "2 mol", "10 mol", "20 mol"], 1],
  ["Bir mol moddada qancha zarracha bor?", ["6,02×10²³", "100", "1000", "10"], 0]
 ]
},
{
 title: "Tuzlar va oksidlar",
 icon: "🧂",
 description: "Ularning tarkibi va xususiyatlari",
 content: `
 <h3>Tuzlar</h3>
 Metall kationlari va kislota qoldig‘idan tashkil topgan murakkab moddalar.
 <div class="formula">NaCl — Natriy xlorid</div>
 <div class="formula">CaCO₃ — Kalsiy karbonat</div>
 <h3>Oksidlar</h3>
 Ikki elementdan tashkil topgan va ulardan biri kislorod bo‘lgan birikmalar.
 <div class="formula">CO₂ — Karbonat angidrid</div>
 <div class="formula">CaO — Kalsiy oksid</div>
 `,
 questions: [
  ["NaCl qanday modda?", ["Kislota", "Tuz", "Asos", "Gaz"], 1],
  ["CO2 qanday birikma?", ["Oksid", "Tuz", "Asos", "Metall"], 0],
  ["CaO qanday nomlanadi?", ["Kalsiy oksid", "Kalsiy xlorid", "Suv", "Natriy oksid"], 0],
  ["Oksid tarkibida qaysi element bo‘ladi?", ["Kislorod", "Oltin", "Geliy", "Argon"], 0],
  ["Osh tuzining formulasi?", ["NaCl", "HCl", "NaOH", "CaO"], 0],
  ["CaCO3 qanday modda?", ["Kalsiy karbonat tuzi", "Kislota", "Asos", "Gaz"], 0],
  ["MgO qanday birikma?", ["Oksid", "Kislota", "Tuz", "Oddiy modda"], 0],
  ["Tuzlar qanday moddalarga kiradi?", ["Murakkab moddalar", "Faqat elementlar", "Gazlar", "Metallar"], 0],
  ["Fe2O3 qanday modda?", ["Temir oksidi", "Temir tuzi", "Kislota", "Asos"], 0],
  ["K2O qanday birikma?", ["Kaliy oksid", "Kaliy xlorid", "Suv", "Ammiak"], 0]
 ]
}
];

let selectedTopic = 0;
let currentQuestion = 0;
let quizScore = 0;
let totalScore = Number(localStorage.getItem("chemistryScore")) || 0;
let lastResult = 0;

document.getElementById("totalScore").textContent = totalScore;

function hideScreens() {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.add("hidden");
    });
}

function showTopics() {
    hideScreens();
    document.getElementById("topics").classList.remove("hidden");
}

function renderTopics() {
    const list = document.getElementById("topicList");
    list.innerHTML = "";

    topics.forEach((topic, index) => {
        const card = document.createElement("div");
        card.className = "topic-card";

        const icon = document.createElement("div");
        icon.className = "topic-icon";
        icon.textContent = topic.icon;

        const title = document.createElement("h3");
        title.textContent = (index + 1) + ". " + topic.title;

        const desc = document.createElement("p");
        desc.textContent = topic.description;

        card.append(icon, title, desc);
        card.onclick = () => openLesson(index);

        list.appendChild(card);
    });
}

function openLesson(index) {
    selectedTopic = index;
    const topic = topics[index];

    hideScreens();
    document.getElementById("lesson").classList.remove("hidden");

    document.getElementById("lessonIcon").textContent = topic.icon;
    document.getElementById("lessonTitle").textContent = topic.title;
    document.getElementById("lessonContent").innerHTML = topic.content;
}

function startQuiz() {
    currentQuestion = 0;
    quizScore = 0;

    hideScreens();
    document.getElementById("quiz").classList.remove("hidden");

    showQuestion();
}

function showQuestion() {
    const topic = topics[selectedTopic];
    const q = topic.questions[currentQuestion];

    document.getElementById("quizNumber").textContent =
        `${currentQuestion + 1} / ${topic.questions.length}`;

    document.getElementById("quizScore").textContent = quizScore;

    document.getElementById("question").textContent = q[0];
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextBtn").classList.add("hidden");

    document.getElementById("progressBar").style.width =
        (currentQuestion / topic.questions.length * 100) + "%";

    const list = document.getElementById("answerList");
    list.innerHTML = "";

    q[1].forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.className = "answer";
        btn.textContent = String.fromCharCode(65 + index) + ". " + answer;

        btn.onclick = () => checkAnswer(index, btn);

        list.appendChild(btn);
    });
}

function checkAnswer(index, button) {
    const q = topics[selectedTopic].questions[currentQuestion];
    const correct = q[2];

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(btn => btn.disabled = true);

    if (index === correct) {
        quizScore += 10;
        button.classList.add("correct");

        document.getElementById("feedback").textContent =
            "✅ To‘g‘ri javob! +10 ball";
        document.getElementById("feedback").style.color = "#00ffa2";
    } else {
        button.classList.add("wrong");
        buttons[correct].classList.add("correct");

        document.getElementById("feedback").textContent =
            "❌ Noto‘g‘ri! To‘g‘ri javob: " + q[1][correct];
        document.getElementById("feedback").style.color = "#ff6688";
    }

    document.getElementById("quizScore").textContent = quizScore;

    document.getElementById("progressBar").style.width =
        ((currentQuestion + 1) / topics[selectedTopic].questions.length * 100) + "%";

    const nextBtn = document.getElementById("nextBtn");
    nextBtn.textContent =
        currentQuestion === q.length - 1 ? "NATIJANI KO‘RISH 🏆" : "KEYINGI SAVOL ➜";

    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= topics[selectedTopic].questions.length) {
        finishQuiz();
    } else {
        showQuestion();
    }
}

function finishQuiz() {
    lastResult = quizScore;

    totalScore += quizScore;
    localStorage.setItem("chemistryScore", totalScore);

    document.getElementById("totalScore").textContent = totalScore;

    hideScreens();
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("resultScore").textContent =
        quizScore + " / 100";

    let message = "";

    if (quizScore === 100) {
        message = "🌟 Ajoyib! Barcha savollarga to‘g‘ri javob berdingiz!";
    } else if (quizScore >= 70) {
        message = "👏 Juda yaxshi! Bilimingiz yaxshi!";
    } else if (quizScore >= 40) {
        message = "👍 Yaxshi harakat! Mavzuni yana takrorlang.";
    } else {
        message = "📚 Mavzuni yana o‘rganib, qayta urinib ko‘ring!";
    }

    document.getElementById("resultMessage").textContent = message;
}

function retryQuiz() {
    startQuiz();
}

renderTopics();
