var presence = new Presence({
  clientId: "722029746275483648"
});

var browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "radiot"
  };

   if (document.location.hostname == "www.radio-suomi.com") {
    if (document.location.pathname == "/") {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = "Etusivulla";

    } else if (document.location.pathname.includes("/radio-aalto")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_aalto";
     
    } else if (document.location.pathname.includes("/hitmix")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_hitmix";
  
    } else if (document.location.pathname.includes("/kasari-radio")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_kasari";
     
    } else if (document.location.pathname.includes("/kiss")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_kiss";

    } else if (document.location.pathname.includes("/loop")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_loop";
     
    } else if (document.location.pathname.includes("/radio-nova")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_nova";

    } else if (document.location.pathname.includes("/nrj-finland")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.details = document.querySelector(".song-name").textContent;
      presenceData.state = `Artisti: ${document.querySelector(".artist-name").textContent}`;
      presenceData.largeImageKey = "radio_nrj";

    } else if (document.location.pathname.includes("/aito-iskelma")) {
      presenceData.startTimestamp = browsingStamp;
      presenceData.state = `Artisti: `;
      presenceData.largeImageKey = "radio_iskelma";
      
    }   
  }

  if (presenceData.details == null) {
    presence.setTrayTitle();
    presence.setActivity();
  } else {
    presence.setActivity(presenceData);
  }
});
