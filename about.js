const teamMembersDiv = document.getElementById("about-team")
const defaultAvatar = "assets/img/maxim-berg-qqbXgiOAWyE-unsplash.jpg"

fetch("team_members.json")
.then((response) => response.json())
.then((teamMembers) => {
  console.log({ teamMembers });
  const children = teamMembers.map((member)=>{
      const {name, duties, role} = member;

      let avatar = '';
      avatar += `<img src="${defaultAvatar}" alt="avatar">`;

      let childInfo = "";
      childInfo = `<h2>${name}</h2>`;
      childInfo += `<p>${name} ${duties}</p>`;
      childInfo += `<div class="role">${role}</div>`;


      teamMembersDiv.innerHTML += `<div class="team-member">${avatar} <div class="member-info">${childInfo}</div></div>`;
  })

})
.catch((error) => {
  console.error("Error:", error);
  resultDiv.innerHTML = "An error occurred while fetching data.";
});