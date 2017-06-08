//CONTINENTS
    // South America: {id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"}
    // North America: {id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"}
    // Europe: {id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"}
    // Africa: {id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"}

// Class that contains 1 story for a disease.
var DiseaseStory = function() {
    this.h2;                //Map Title
    this.h3;                //Sidebar Title 
    this.date;              //Sidebar Date (ex. "1954-1958")
    this.deaths;            //Sidebar Deaths (ex. "10,000 daths")
	this.deathBar;          //Ratio between total deaths and deaths
    this.description;       //Description of story.
    this.dataProvider;      //Information to be passed to amMap to update map
};

// Lists created to hold the stories for each disease.
var blackDeath = new Array();
var influenza = new Array();
var typhus = new Array();
var measles = new Array();
var smallPox = new Array();
var cholera = new Array();
var sars = new Array();
var hivAIDS = new Array();

// Counters and Constants
var curDisease = "";
var counter = 0;
var DEATH_TOLL_MAX = 300000000;
var BLACK_MAX = 87000000;
var TYPHUS_MAX = 4000000;
var INFLUENZA_MAX = 55000000;
var MEASLES_MAX = 200000000;
var POX_MAX = 300000000;
var CHOLERA_MAX = 4400000;
var SARS_MAX = 769;
var HIV_MAX = 39000000;

// BLACK DEATH
blackDeath[0] = new DiseaseStory();
blackDeath[0].h2 = "by BLACK DEATH";
blackDeath[0].h3 = "BLACK DEATH";
blackDeath[0].date = "1347-1855";
blackDeath[0].deaths = "87,000,000 deaths";
blackDeath[0].deathBar = BLACK_MAX/DEATH_TOLL_MAX;
blackDeath[0].description = "The Black Death devastated the human population when it reigned. As a pandemic, it took out the world's population by 20%. The disease was so deadly particularily because it was easily carried by fleas on the black rats of merchant ships and because sanitation was poor. ";
blackDeath[0].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"IN"},{id:"MN"},{id:"IT"},{id:"RU"},{id:"TR"},{id:"FR"},{id:"ES"},{id:"PT"},{id:"GB"},{id:"DE"},{id:"EG"},{id:"NO"},{id:"SY"},{id:"IL"},{id:"SA"},{id:"IQ"},{id:"IR"},{id:"DK"},{id:"SE"},{id:"YE"},{id:"PS"},{id:"LB"},{id:"IS"},{id:"CN"},{id:"HK"},{id:"CN"},{id:"HK"},{id:"TW"},{id:"JP"},{id:"IN"},{id:"EG"},{id:"ZA"},{id:"US"},{id:"AU"},{id:"RU"},{id:"BR"},{id:"GB"},{id:"FR"},{id:"AR"},{id:"CU"},{id:"BO"},{id:"EC"},{id:"MG"},{id:"PY"},{id:"PE"},{id:"PR"},{id:"TT"},{id:"VE"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"}]
};

blackDeath[1] = new DiseaseStory();
blackDeath[1].h3 = "BLACK DEATH, ORIGIN";
blackDeath[1].date = "1347-1453";
blackDeath[1].deaths = "25,000,000 deaths";
blackDeath[1].deathBar = 25000000/BLACK_MAX;
blackDeath[1].description = "The wave of Black Death originated in China, spreading through India and Mongolia through the Silk Road.";
blackDeath[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"IN"},{id:"MN"}]
};

blackDeath[2] = new DiseaseStory();
blackDeath[2].h3 = "BLACK DEATH";
blackDeath[2].date = "1347-1453";
blackDeath[2].deaths = "10,000,000 deaths";
blackDeath[2].deathBar = 10000000/BLACK_MAX;
blackDeath[2].description = "The plague reached Europe through multiple ways. Port cities were the first to be affected by merchants carrying the disease.";
blackDeath[2].dataProvider = {
    map: "worldLow",
    areas:[{id:"IT"},{id:"RU"},{id:"TR"},{id:"CN"},{id:"IN"},{id:"MN"}]
};

blackDeath[3] = new DiseaseStory();
blackDeath[3].h3 = "BLACK DEATH";
blackDeath[3].date = "1347-1453";
blackDeath[3].deaths = "35,000,000 deaths";
blackDeath[3].deathBar = 35000000/BLACK_MAX;
blackDeath[3].description = "It devasted the world at an increasingly high rate; 50% of the European population was infected.";
blackDeath[3].dataProvider = {
    map: "worldLow",
    areas:[{id:"FR"},{id:"ES"},{id:"PT"},{id:"GB"},{id:"DE"},{id:"EG"},{id:"NO"},{id:"SY"},{id:"IL"},{id:"SA"},{id:"IQ"},{id:"IR"},{id:"DK"},{id:"SE"},{id:"YE"},{id:"PS"},{id:"LB"},{id:"IS"},{id:"IT"},{id:"RU"},{id:"TR"},{id:"CN"},{id:"IN"},{id:"MN"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"}]
};

blackDeath[4] = new DiseaseStory();
blackDeath[4].h3 = "THIRD PLAGUE, ORIGIN";
blackDeath[4].date = "1855";
blackDeath[4].deaths = "60,000 deaths";
blackDeath[4].deathBar = 60000/BLACK_MAX;
blackDeath[4].description = "The Third Plague started in China. Because of a rebellion, people moved nto bigger cities; as a result, the disease travelled into Hong Kong.";
blackDeath[4].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"HK"}]
};

blackDeath[5] = new DiseaseStory();
blackDeath[5].h3 = "THIRD PLAGUE";
blackDeath[5].date = "1855";
blackDeath[5].deaths = "11,000,000 deaths";
blackDeath[5].deathBar = 11000000/BLACK_MAX;
blackDeath[5].description = "Widespread distribution happened easily with global shipping.";
blackDeath[5].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"HK"},{id:"TW"},{id:"JP"},{id:"IN"},{id:"EG"},{id:"ZA"},{id:"US"},{id:"AU"},{id:"RU"},{id:"BR"},{id:"GB"},{id:"FR"},{id:"AR"},{id:"CU"},{id:"BO"},{id:"EC"},{id:"MG"},{id:"PY"},{id:"PE"},{id:"PR"},{id:"TT"},{id:"VE"}]
};

// INFLUENZA
influenza[0] = new DiseaseStory();
influenza[0].h2 = "by INFLUENZA";
influenza[0].h3 = "INFLUENZA";
influenza[0].date = "1580-Present";
influenza[0].deaths = "55,000,000 deaths";
influenza[0].deathBar = INFLUENZA_MAX/DEATH_TOLL_MAX;
influenza[0].description = "The Influenza virus evolves quickly, accounting for endless outbreaks. The Russian Flu, the Spanish Flu, the Asian Flu, the Hong Kong Flu and the Swine Flu are all new strains of the same virus. These new strains ravaged new and old populations. The Spanish Flu is one of the most deadliest pandemics in history, taking a great number of lives in the short period of time. ";
influenza[0].dataProvider = {
    map: "worldLow",
    areas:[{id:"UZ"},{id:"RU"},{id:"AU"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"US"},{id:"FR"},{id:"ES"},{id:"JP"},{id:"IN"},{id:"ID"},{id:"WS"},{id:"PF"},{id:"CA"},{id:"BR"},{id:"GB"},{id:"SL"},{id:"NZ"},{id:"TO"},{id:"NR"},{id:"FJ"},{id:"CN"},{id:"IL"},{id:"PH"},{id:"VN"}]
};

influenza[1] = new DiseaseStory();
influenza[1].h3 = "FIRST PANDEMIC";
influenza[1].date = "1580";
influenza[1].deaths = "8,000+ deaths";
influenza[1].deathBar = 8000/INFLUENZA_MAX;
influenza[1].description = "The first record of an influenza outbreak was in 1580. It began in Russia and spread to Europe and Africa.";
influenza[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"RU"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"}]
};

influenza[2] = new DiseaseStory();
influenza[2].h3 = "RUSSIAN FLU, ORIGIN";
influenza[2].date = "1889-1890";
influenza[2].deaths = "";
influenza[2].deathBar = 8000/INFLUENZA_MAX;
influenza[2].description = "The first reported case of Russian flu happened in Bukhara, Uzebekistan.";
influenza[2].dataProvider = {
    map: "worldLow",
    areas:[{id:"UZ"}]
};

influenza[3] = new DiseaseStory();
influenza[3].h3 = "RUSSIAN FLU";
influenza[3].date = "1889-1890";
influenza[3].deaths = "1,000,000 deaths";
influenza[3].deathBar = 1000000/INFLUENZA_MAX;
influenza[3].description = "The modern world allowed transmission of the flu through railroads and boat.";
influenza[3].dataProvider = {
    map: "worldLow",
    areas:[{id:"UZ"},{id:"RU"},{id:"AU"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"}]
};

influenza[4] = new DiseaseStory();
influenza[4].h3 = "SPANISH FLU, ORIGIN";
influenza[4].date = "1918-1919";
influenza[4].deaths = "500,000 deaths";
influenza[4].deathBar = 500000/INFLUENZA_MAX;
influenza[4].description = "The Spanish flu is one of the deadliest outbreaks in history, spreading and killing the fastest. H2N1 strain of the flu was observed in Kansas.";
influenza[4].dataProvider = {
    map: "worldLow",
    areas:[{id:"US"}]
};

influenza[5] = new DiseaseStory();
influenza[5].h3 = "SPANISH FLU";
influenza[5].date = "1918-1919";
influenza[5].deaths = "50,000,000 deaths";
influenza[5].deathBar = 50000000/INFLUENZA_MAX;
influenza[5].description = "The conditions of the war catalyzed the transmission range and rate of the flu. Weakened soldiers were more susceptible to the disease while they travelled and spread the virus.";
influenza[5].dataProvider = {
    map: "worldLow",
    areas:[{id:"US"},{id:"FR"},{id:"ES"},{id:"JP"},{id:"IN"},{id:"ID"},{id:"WS"},{id:"PF"},{id:"CA"},{id:"BR"},{id:"GB"},{id:"SL"},{id:"NZ"},{id:"TO"},{id:"NR"},{id:"FJ"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"}]
};

influenza[6] = new DiseaseStory();
influenza[6].h3 = "ASIAN FLU, ORIGIN";
influenza[6].date = "1957-1958";
influenza[6].deaths = "";
influenza[6].deathBar = 8000/INFLUENZA_MAX;
influenza[6].description = "A H2N2 virus caused the next outbreak. It was first identified in Guizhou, China.";
influenza[6].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"}]
};

influenza[7] = new DiseaseStory();
influenza[7].h3 = "ASIAN FLU";
influenza[7].date = "1957-1958";
influenza[7].deaths = "2,000,000 deaths";
influenza[7].deathBar = 2000000/INFLUENZA_MAX;
influenza[7].description = "The virus spread globally.";
influenza[7].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"SG"},{id:"HK"},{id:"US"}]
};

influenza[8] = new DiseaseStory();
influenza[8].h3 = "HONG KONG FLU, ORIGIN";
influenza[8].date = "1968-1969";
influenza[8].deaths = "500,000 deaths";
influenza[8].deathBar = 500000/INFLUENZA_MAX;
influenza[8].description = "The Hong Kong flue was an H3N2 strain. The outbreak began in Hong Kong.";
influenza[8].dataProvider = {
    map: "worldLow",
    areas:[{id:"HK"}]
};

influenza[9] = new DiseaseStory();
influenza[9].h3 = "HONG KONG FLU";
influenza[9].date = "1968-1969";
influenza[9].deaths = "1,000,000 deaths";
influenza[9].deathBar = 1000000/INFLUENZA_MAX;
influenza[9].description = "Then, it began spreading globally via Vietnam war troops.";
influenza[9].dataProvider = {
    map: "worldLow",
    areas:[{id:"HK"},{id:"VN"},{id:"SG"},{id:"IN"},{id:"PH"},{id:"CN"},{id:"AU"},{id:"US"},{id:"JP"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"}]
};

influenza[10] = new DiseaseStory();
influenza[10].h3 = "SWINE FLU, ORIGIN";
influenza[10].date = "2009";
influenza[10].deaths = "";
influenza[10].deathBar = 8000/INFLUENZA_MAX;
influenza[10].description = "A new version of the H1N1 arose in Veracruz, Mexico.";
influenza[10].dataProvider = {
    map: "worldLow",
    areas:[{id:"MX"}]
};

influenza[11] = new DiseaseStory();
influenza[11].h3 = "SWINE FLU";
influenza[11].date = "2009";
influenza[11].deaths = "180,000 deaths";
influenza[11].deathBar = 180000/INFLUENZA_MAX;
influenza[11].description = "As the virus spread globally, clinics began to be overwhelmed by the number of infected people.";
influenza[11].dataProvider = {
    map: "worldLow",
    areas:[{id:"US"},{id:"CA"},{id:"MX"},{id:"BR"},{id:"GB"},{id:"FR"},{id:"ES"},{id:"AU"},{id:"IL"},{id:"NZ"}]
};

// TYPHUS
typhus[0] = new DiseaseStory();
typhus[0].h2 = "by TYPHUS";
typhus[0].h3 = "TYPHUS";
typhus[0].date = "1489-1945";
typhus[0].deaths = "4,000,000 deaths";
typhus[0].deathBar = TYPHUS_MAX/DEATH_TOLL_MAX;
typhus[0].description = "Typhus is an endemic disease, and despite the multiple outbreaks over a span of time, it continues today. The typhus bacteria transports through lice, mites, and ticks; conditions created by prisons and war aided the spread of this disease.";
typhus[0].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"},{id:"IE"},{id:"US"},{id:"CA"},{id:"PL"},{id:"RO"},{id:"RS"},{id:"MX"},{id:"CN"},{id:"IR"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"CV"},{id:"EH"}]
};

typhus[1] = new DiseaseStory();
typhus[1].h3 = "SPAIN, ORIGIN";
typhus[1].date = "1489";
typhus[1].deaths = "17,000 deaths";
typhus[1].deathBar = 17000/TYPHUS_MAX;
typhus[1].description = "The first record of typhus happened in Spain, during the Spanish Reige of Moorish Granada. The Spanish lost more soldiers to typhus than they did to the battle.";
typhus[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"}]
};

typhus[2] = new DiseaseStory();
typhus[2].h3 = "SECOND OUTBREAK";
typhus[2].date = "1618-1649";
typhus[2].deaths = "10% of German population";
typhus[2].deathBar = .1;
typhus[2].description = "Prisons were a breeding ground for typhus, where prisoners were in filthy rooms. It reoccured routinely in England, then in Germany during the English Civil War, the Thirty Years' War and the Napoleonic Wars.";
typhus[2].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"}]
};

typhus[3] = new DiseaseStory();
typhus[3].h3 = "THIRD OUTBREAK";
typhus[3].date = "1812";
typhus[3].deaths = "70,000 deaths";
typhus[3].deathBar = 70000/TYPHUS_MAX;
typhus[3].description = "Typhus' move to Russia is the major contributor to Napoleon's retreat in Moscow; the disease killed more French soldiers than the opposition.";
typhus[3].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"}]
};

typhus[4] = new DiseaseStory();
typhus[4].h3 = "FORTH OUTBREAK";
typhus[4].date = "1816-1819";
typhus[4].deaths = "100,000 deaths";
typhus[4].deathBar = 100000/TYPHUS_MAX;
typhus[4].description = "Typhus spread to Ireland and an outbreak occured during a famine.";
typhus[4].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"},{id:"IE"}]
};

typhus[5] = new DiseaseStory();
typhus[5].h3 = "FIFTH OUTBREAK";
typhus[5].date = "1847-1848";
typhus[5].deaths = "20,000 deaths";
typhus[5].deathBar = 20000/TYPHUS_MAX;
typhus[5].description = "Typhus outbreaks come to the US and Canada through Irish immigrants escaping the Great Irish Famine.";
typhus[5].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"},{id:"IE"},{id:"US"},{id:"CA"}]
};

typhus[6] = new DiseaseStory();
typhus[6].h3 = "SIXTH OUTBREAK";
typhus[6].date = "1918-1922";
typhus[6].deaths = "3,000,000 deaths";
typhus[6].deathBar = 3000000/TYPHUS_MAX;
typhus[6].description = "The disease spread rapidly and reached its peak affection during the First World War. It devastated armies and those nursing soldiers.";
typhus[6].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"},{id:"IE"},{id:"US"},{id:"CA"},{id:"PL"},{id:"RO"},{id:"RS"}]
};

typhus[7] = new DiseaseStory();
typhus[7].h3 = "SEVENTH OUTBREAK";
typhus[7].date = "1939-1945";
typhus[7].deaths = "Thousands of deaths";
typhus[7].deathBar = 500000/TYPHUS_MAX;
typhus[7].description = "Typhus expanded further during WWII. It killed people in prisoner-of-war camps, ghettos, and Nazi concentration camps. Victims were put in mass graves.";
typhus[7].dataProvider = {
    map: "worldLow",
    areas:[{id:"ES"},{id:"DE"},{id:"GB"},{id:"RU"},{id:"IE"},{id:"US"},{id:"CA"},{id:"PL"},{id:"RO"},{id:"RS"},{id:"MX"},{id:"CN"},{id:"IR"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"}]
};

// MEASLES
measles[0] = new DiseaseStory();
measles[0].h2 = "by MEASLES";
measles[0].h3 = "MEASLES";
measles[0].date = "180AD-Present";
measles[0].deaths = "200,000,000 deaths";
measles[0].deathBar = MEASLES_MAX/DEATH_TOLL_MAX;
measles[0].description = "As an airbourne disease, measles is quick to spread. Measles trace very far back in human history. As an endemic disease, it still takes thousands of lives yearly in developing countries.";
measles[0].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};

measles[1] = new DiseaseStory();
measles[1].h3 = "MEASLES, ORIGIN";
measles[1].date = "180AD-Present";
measles[1].deaths = "200,000,000 deaths";
measles[1].deathBar = 200000000/MEASLES_MAX;
measles[1].description = "The Antonine Plague is thought to have been an measles outbreak, and claimed many lives.";
measles[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"IT"}]
};

measles[2] = new DiseaseStory();
measles[2].h3 = "MEASLES";
measles[2].date = "180AD-Present";
measles[2].deaths = "200,000,000 deaths";
measles[2].deathBar = 200000000/MEASLES_MAX;
measles[2].description = "Everytime a new area was introduced to measles, the effect was devstating; it could take 60% of the population at times.";
measles[2].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};



// SMALL POX
smallPox[0] = new DiseaseStory();
smallPox[0].h2 = "by SMALL POX";
smallPox[0].h3 = "SMALL POX";
smallPox[0].date = "1122BC-1980";
smallPox[0].deaths = "300,000,000 deaths";
smallPox[0].deathBar = POX_MAX/DEATH_TOLL_MAX;
smallPox[0].description = "Smallpox has been with the human race since the very beginning, taking large numbers with each reoccuring outbreak. It is still the most devastating pandemic history. The technology of vaccinations erradicated smallpox in 1980.";
smallPox[0].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};

smallPox[1] = new DiseaseStory();
smallPox[1].h3 = "SMALL POX, ORIGIN";
smallPox[1].date = "1122BC-1980";
smallPox[1].deaths = "100,000,000 deaths";
smallPox[1].deathBar = 100000000/POX_MAX;
smallPox[1].description = "The earliest evidence of smallpox is found in Japan, China, Egypt and India. It continued to be an endemic disease.";
smallPox[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"JP"},{id:"EG"},{id:"IN"}]
};

smallPox[2] = new DiseaseStory();
smallPox[2].h3 = "SMALL POX";
smallPox[2].date = "1122BC-1980";
smallPox[2].deaths = "300,000,000 deaths";
smallPox[2].deathBar = 300000000/POX_MAX;
smallPox[2].description = "By mid-18th century, smallpox was a pandemic in all corners of the glove except for Australia. In Europe, it was the leading cause of death.";
smallPox[2].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};

// CHOLERA
cholera[0] = new DiseaseStory();
cholera[0].h2 = "by CHOLERA";
cholera[0].h3 = "CHOLERA";
cholera[0].date = "1816-Present";
cholera[0].deaths = "4,400,000 deaths";
cholera[0].deathBar = CHOLERA_MAX/DEATH_TOLL_MAX;
cholera[0].description = "Cholera swept the world in seven large outbreaks, with an 8th recently in Haiti. It especially wreaked havoc in Russia throughout its many pandemics. Cholera is spread through drinking contaminated water.";
cholera[0].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"JP"},{id:"IR"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"IT"},{id:"BD"},{id:"HT"}]
};

cholera[1] = new DiseaseStory();
cholera[1].h3 = "INDIA, ORIGIN";
cholera[1].date = "1816";
cholera[1].deaths = "";
cholera[1].deathBar = 400000/CHOLERA_MAX;
cholera[1].description = "Cholera began in Bengal, endemic to the Lower Ganges River. Pilgrims carried the disease to other parts of India.";
cholera[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"}]
};

cholera[2] = new DiseaseStory();
cholera[2].h3 = "FIRST PANDEMIC";
cholera[2].date = "1816-1826";
cholera[2].deaths = "110,000 deaths";
cholera[2].deathBar = 110000/CHOLERA_MAX;
cholera[2].description = "The range of disease expanded beyond the borders of India with the inclusion of the British Army and Navy.";
cholera[2].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"}]
};

cholera[3] = new DiseaseStory();
cholera[3].h3 = "SECOND PANDEMIC";
cholera[3].date = "1829-1851";
cholera[3].deaths = "200,000 deaths";
cholera[3].deathBar = 200000/CHOLERA_MAX;
cholera[3].description = "The disease further spread, reaching continents over the ocean.";
cholera[3].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"}]
};

cholera[4] = new DiseaseStory();
cholera[4].h3 = "THIRD PANDEMIC";
cholera[4].date = "1852-1860";
cholera[4].deaths = "300,000 deaths";
cholera[4].deathBar = 300000/CHOLERA_MAX;
cholera[4].description = "The third outbreak mainly affected Russia.";
cholera[4].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"}]
};

cholera[5] = new DiseaseStory();
cholera[5].h3 = "FOURTH PANDEMIC";
cholera[5].date = "1863-1875";
cholera[5].deaths = "704,596 deaths";
cholera[5].deathBar = 704596/CHOLERA_MAX;
cholera[5].description = "Another cholera outbreak took place, spreading through inland waterways from port cities.";
cholera[5].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"}]
};

cholera[6] = new DiseaseStory();
cholera[6].h3 = "FIFTH PANDEMIC";
cholera[6].date = "1881-1896";
cholera[6].deaths = "981,899 deaths";
cholera[6].deathBar = 981899/CHOLERA_MAX;
cholera[6].description = "A fifth outbreak occured, significantly affecting Europe and America while spreading further.";
cholera[6].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"JP"},{id:"IR"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"}]
};

cholera[7] = new DiseaseStory();
cholera[7].h3 = "SIXTH PANDEMIC";
cholera[7].date = "1899-1923";
cholera[7].deaths = "1,500,000 deaths";
cholera[7].deathBar = 1500000/CHOLERA_MAX;
cholera[7].description = "Russia was greatly affected by another outbreak of cholera.";
cholera[7].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"JP"},{id:"IR"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"IT"}]
};

cholera[8] = new DiseaseStory();
cholera[8].h3 = "SEVENTH PANDEMIC";
cholera[8].date = "1962-1966";
cholera[8].deaths = "570,000 deaths";
cholera[8].deathBar = 570000/CHOLERA_MAX;
cholera[8].description = "Advances in transportation and mass migrations transmitted a new strain of cholera.";
cholera[8].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"JP"},{id:"IR"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"IT"},{id:"BD"}]
};

cholera[9] = new DiseaseStory();
cholera[9].h3 = "HAITI";
cholera[9].date = "2010-Present";
cholera[9].deaths = "8,000 deaths";
cholera[9].deathBar = 8000/CHOLERA_MAX;
cholera[9].description = "After the earthquake, people began drinking from the Artibonite River. This is the worst outbreak in recent history.";
cholera[9].dataProvider = {
    map: "worldLow",
    areas:[{id:"IN"},{id:"CN"},{id:"ID"},{id:"TH"},{id:"PH"},{id:"IQ"},{id:"SY"},{id:"TZ"},{id:"MU"},{id:"RU"},{id:"HU"},{id:"GB"},{id:"FR"},{id:"CA"},{id:"US"},{id:"ES"},{id:"MX"},{id:"RU"},{id:"SA"},{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"},{id:"AL"},{id:"AD"},{id:"AM"},{id:"AT"},{id:"AZ"},{id:"BY"},{id:"BE"},{id:"BA"},{id:"BG"},{id:"HR"},{id:"CY"},{id:"CZ"},{id:"DK"},{id:"EE"},{id:"FI"},{id:"FR"},{id:"GE"},{id:"DE"},{id:"GR"},{id:"HU"},{id:"IS"},{id:"IE"},{id:"IT"},{id:"KZ"},{id:"LV"},{id:"LI"},{id:"LT"},{id:"LU"},{id:"MK"},{id:"MT"},{id:"MD"},{id:"MC"},{id:"ME"},{id:"NL"},{id:"NO"},{id:"PL"},{id:"PT"},{id:"RO"},{id:"SM"},{id:"RS"},{id:"SK"},{id:"SI"},{id:"ES"},{id:"SE"},{id:"CH"},{id:"TR"},{id:"UA"},{id:"GB"},{id:"AI"},{id:"AG"},{id:"AW"},{id:"BS"},{id:"BB"},{id:"BZ"},{id:"BM"},{id:"CA"},{id:"KY"},{id:"CR"},{id:"CU"},{id:"CW"},{id:"BM"},{id:"DO"},{id:"SV"},{id:"GL"},{id:"GD"},{id:"GP"},{id:"GT"},{id:"HT"},{id:"HN"},{id:"JM"},{id:"MQ"},{id:"MX"},{id:"MS"},{id:"NI"},{id:"PA"},{id:"PR"},{id:"BL"},{id:"KN"},{id:"LC"},{id:"MF"},{id:"PM"},{id:"VC"},{id:"SX"},{id:"TT"},{id:"TC"},{id:"US"},{id:"VG"},{id:"JP"},{id:"IR"},{id:"AR"},{id:"BO"},{id:"BR"},{id:"CL"},{id:"CO"},{id:"EC"},{id:"FK"},{id:"GF"},{id:"GY"},{id:"PY"},{id:"PE"},{id:"SR"},{id:"UY"},{id:"VE"},{id:"IT"},{id:"BD"},{id:"HT"}]
};

// SARS
sars[0] = new DiseaseStory();
sars[0].h2 = "by SARS";
sars[0].h3 = "SARS";
sars[0].date = "2002-2003";
sars[0].deaths = "769 deaths";
sars[0].deathBar = SARS_MAX/DEATH_TOLL_MAX;
sars[0].description = "The SARS epidemic - a respiratory disease - spread like forest fire globally due to air travel. A delay in reporting also led the a delay in controlling the outbreak. "
sars[0].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"HK"},{id:"VN"},{id:"TW"},{id:"SG"},{id:"US"},{id:"PH"},{id:"CA"}]
};

sars[1] = new DiseaseStory();
sars[1].h3 = "CHINA, ORIGIN";
sars[1].date = "2002-2003";
sars[1].deaths = "349 deaths";
sars[1].deathBar = 349/SARS_MAX;
sars[1].description = "The first victim of SARS was a farmer in the Guangdong province of China. The Chinese government delayed reporting the disease to WHO, causing a delay in the efforts to control it.";
sars[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"}]
};

sars[2] = new DiseaseStory();
sars[2].h3 = "THE SPREAD";
sars[2].date = "2002-2003";
sars[2].deaths = "299 deaths";
sars[2].deathBar = 299/SARS_MAX;
sars[2].description = "The SARS spread to Hong Kong via a doctor that was treating cases of the disease. He travelled to Hong Kong to attend a wedding and transmitted it to the hotel guests and staff he stayed with.";
sars[2].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"HK"}]
};

sars[3] = new DiseaseStory();
sars[3].h3 = "PANDEMIC";
sars[3].date = "2002-2003";
sars[3].deaths = "125 deaths";
sars[3].deathBar = 125/SARS_MAX;
sars[3].description = "Global travel allowed SARS to spread as a pandemic. Infected hotel guests in Hong Kong travelled to various locations of the world - such as Vietnam and Singapore - and brought the virus with them.";
sars[3].dataProvider = {
    map: "worldLow",
    areas:[{id:"CN"},{id:"HK"},{id:"VN"},{id:"TW"},{id:"SG"},{id:"US"},{id:"PH"},{id:"CA"}]
};

// HIV/AIDS
hivAIDS[0] = new DiseaseStory();
hivAIDS[0].h2 = "by HIV / AIDS";
hivAIDS[0].h3 = "HIV / AIDS";
hivAIDS[0].date = "1981-Present";
hivAIDS[0].deaths = "39,000,000";
hivAIDS[0].deathBar = HIV_MAX/DEATH_TOLL_MAX;
hivAIDS[0].description = "HIV/AIDS is harder to notice as a pandemic because of a prolonged period with no symptoms. However, the virus spread all across the world via unprotected sexual intercourse. While there are efforts to control the disease, numbers continue to grow in developing countries. ";
hivAIDS[0].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};

hivAIDS[1] = new DiseaseStory();
hivAIDS[1].h3 = "AFRICA, ORIGIN";
hivAIDS[1].date = "1981-Present";
hivAIDS[1].deaths = "5,900,000 deaths";
hivAIDS[1].deathBar = 5900000/HIV_MAX;
hivAIDS[1].description = "HIV is believed to have originated from non-human primates in Africa and transferred to humans through bushmeat activities.";
hivAIDS[1].dataProvider = {
    map: "worldLow",
    areas:[{id:"DZ"},{id:"AO"},{id:"BJ"},{id:"BW"},{id:"BF"},{id:"BI"},{id:"CM"},{id:"CF"},{id:"TD"},{id:"KM"},{id:"CD"},{id:"CG"},{id:"DJ"},{id:"EG"},{id:"GQ"},{id:"ER"},{id:"ET"},{id:"GA"},{id:"GM"},{id:"GH"},{id:"GN"},{id:"GW"},{id:"KE"},{id:"LS"},{id:"LR"},{id:"LY"},{id:"MG"},{id:"MW"},{id:"ML"},{id:"MR"},{id:"MU"},{id:"MA"},{id:"MZ"},{id:"NA"},{id:"NE"},{id:"NG"},{id:"RW"},{id:"ST"},{id:"SN"},{id:"SL"},{id:"SO"},{id:"ZA"},{id:"SS"},{id:"SD"},{id:"SZ"},{id:"TZ"},{id:"TG"},{id:"TN"},{id:"UG"},{id:"ZM"},{id:"ZW"},{id:"CI"},{id:"EH"}]
};

hivAIDS[2] = new DiseaseStory();
hivAIDS[2].h3 = " HIV / AIDS";
hivAIDS[2].date = "1981-Present";
hivAIDS[2].deaths = "39,000,000 deaths";
hivAIDS[2].deathBar = 39000000/HIV_MAX;
hivAIDS[2].description = "The pandemic grew through the rise of colonialism in Africa, the virus being spread through trains and the sex trade. The pandemic was first noticed for being prominent in gay men in the States.";
hivAIDS[2].dataProvider = {
    map: "worldLow",
    getAreasFromMap: true
};