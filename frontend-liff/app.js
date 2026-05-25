const LIFF_ID = "2010146418-4LJGrj4t";

const loginBtn = document.getElementById("loginBtn");
const profileDiv = document.getElementById("profile");
const bookingBtn = document.getElementById("bookingBtn"); // 👈 新增

async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (liff.isLoggedIn()) {
    const profile = await liff.getProfile();
    showProfile(profile);
  }
}

// ============================
// LOGIN
// ============================
loginBtn.onclick = async () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    const profile = await liff.getProfile();
    showProfile(profile);
  }
};

// ============================
// SHOW PROFILE
// ============================
function showProfile(profile) {
  profileDiv.innerHTML = `
    <p>姓名：${profile.displayName}</p>
    <img src="${profile.pictureUrl}" width="80"/>
  `;
}

// ============================
// API CALL（重點在這）
// ============================
async function createBooking() {
  try {
    const profile = await liff.getProfile(); // 👈 拿 LINE user

    const res = await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lineUserId: profile.userId,
        name: profile.displayName,
        service: "美睫",
        date: "2026-05-28",
        time: "14:00",
      }),
    });

    const data = await res.json();
    console.log("API response:", data);

    alert("預約成功");
  } catch (err) {
    console.error(err);
    alert("預約失敗");
  }
}

// ============================
// 按鈕綁定
// ============================
bookingBtn.addEventListener("click", createBooking);

main();