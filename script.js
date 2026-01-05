let score = 0;
let current = 1;
const total = document.querySelectorAll(".mowafaq").length;

function answer(id, correct){
    // تحديث النقاط
    if(correct){ score++; }

    // تحديث لون الموقف فور الضغط
    const card = document.querySelectorAll(".mowafaq")[id-1];
    if(correct){
        card.style.background = "#d0f0c0"; // أخضر فاتح
        alert("✅ قرار ممتاز!");
    } else {
        card.style.background = "#f9d0d0"; // أحمر فاتح
        alert("⚠️ حاول تركز!");
    }

    // تحديث النقاط والموقف الحالي
    document.getElementById("score").innerText = score;
    document.getElementById("q").innerText = current + 1;

    // الانتقال للتقرير النهائي بعد آخر موقف
    if(current === total){
        setTimeout(showReport, 300);
    } else {
        current++;
    }
}

document.body.innerHTML = `
    <div style="text-align:center; background:${bgColor}; padding:50px; min-height:100vh">
        <h1>التقرير النهائي</h1>
        <p>درجتك: ${score} من ${total}</p>
        <p>${resultText}</p>
        <hr>
        <button onclick="location.reload()">إعادة المحاولة</button>
        <small>Worked by Mohamed & Abdallah</small>
    </div>
`;
// مؤثر صوتي
function playSound(correct){
  const audio = new Audio(correct ? 'sounds/correct.mp3' : 'sounds/wrong.mp3');
  audio.play();
}

function answer(id, correct){
  // تحديث النقاط
  if(correct) score++;

  // تلوين الكارت حسب القرار
  const card = document.querySelectorAll(".mowafaq")[id-1];
  card.style.background = correct ? "#d0f0c0" : "#f9d0d0";

  // تشغيل الصوت
  playSound(correct);

  // تحديث العرض
  document.getElementById("score").innerText = score;
  document.getElementById("q").innerText = current + 1;

  // الانتقال للتقرير النهائي أو الموقف التالي
  if(current === total){
    setTimeout(()=>{ window.location.href = "report.html?score="+score; }, 500);
  } else {
    current++;
  }
}
