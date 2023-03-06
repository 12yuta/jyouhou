
let count = 0;
const mainElement = document.querySelector("div.main>img");

const url = [
        "https://images.beinsports.com/VicveZeoG-dXOyww1dSMR05zbDo=/full-fit-in/1000x0/unaisimon-cropped_wtaiiv29slb2195zl445lpasg.jpg",
        "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203415743550&ssbinary=true",
        "https://www.football-zone.net/wp-content/uploads/2020/08/20200829_Leonardo-Bonucci_ap.jpg",
        "https://i0.wp.com/www.birdiefootball.com/wp-content/uploads/2021/06/methode-times-prod-web-bin-e2a4d6fe-ef5f-11e8-bea1-693d823de728-scaled.jpg?w=1280&ssl=1",
        "https://amd-pctr.c.yimg.jp/r/iwiz-amd/20210708-00010021-footballc-000-1-view.jpg",
        "https://www.soccer-king.jp/wp-content/uploads/2019/02/GettyImages-1126495583.jpg",
        "https://pbs.twimg.com/media/D86VipfUwAIbefK.jpg",
        "https://kruf468c.user.webaccel.jp/files/topics/72352_ext_04_0.jpg?v=1587972226",
        "https://www.football-zone.net/wp-content/uploads/2022/02/20200215_James-Maddison_GettyImages.jpg",
        "https://www.football-zone.net/wp-content/uploads/2019/06/20190621_Eden-Hazard.jpg",
        "https://number.ismcdn.jp/mwimgs/3/b/-/img_3b83b88b5c025e3cab4ba92798da5aa4175536.jpg",
        "https://www.football-zone.net/wp-content/uploads/2021/02/20200211_Gareth-Bale_getty.jpg"


];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
