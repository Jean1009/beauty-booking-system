const LIFF_ID = "2010146418-4LJGrj4t";

const loginBtn = document.getElementById("loginBtn");
const profileDiv = document.getElementById("profile");

async function main() {
  await liff.init({ liffId: LIFF_ID });

  if (liff.isLoggedIn()) {
    const profile = await liff.getProfile();
    showProfile(profile);
  }
}

loginBtn.onclick = async () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  } else {
    const profile = await liff.getProfile();
    showProfile(profile);
  }
};

function showProfile(profile) {
  profileDiv.innerHTML = `
    <p>姓名：${profile.displayName}</p>
    <img src="${profile.pictureUrl}" width="80"/>
  `;
}

main();