var schools = [
  {
    name: "University of Abuja, Gwagwalada",
    city: "Gwagwalada",
    code: "Uniabuja"
  },
  {
    name: "Abubakar Tafawa Balewa University, Bauchi",
    city: "Bauchi",
    code: "ATBU Bauchi"
  },
  {
    name: "Ahmadu Bello University, Zaria",
    city: "Zaria",
    code: "ABU Zaria"
  },
  {
    name: "Bayero University, Kano",
    city: "Kano",
    code: "BUK"
  },
  {
    name: "Obafemi Awolowo University,Ile-Ife",
    city: "Ile-Ife",
    code: "OAU Ile-Ife"
  },
  {
    name: "Usumanu Danfodiyo University Sokoto",
    city: "Sokoto",
    code: "UDOS"
  },
  {
    name: "Federal University of Technology, Akure",
    city: "Akure",
    code: "FUT Akure"
  },
  {
    name: "Federal University of Agriculture, Abeokuta",
    city: "Abeokuta",
    code: "FUA Abeokuta"
  },
  {
    name: "Modibbo Adama University of Technology, Yola",
    city: "Yola",
    code: "MAUT Yola"
  },
  {
    name: "Michael Okpara University of Agricultural Umudike",
    city: "Umudike",
    code: "MOUA Umudike"
  },
  {
    name: "University of Agriculture, Makurdi",
    city: "Makurdi",
    code: "Uniagric Makurdi"
  },
  {
    name: "Federal University, Gusau",
    city: "Gusau",
    code: "FU Gusau"
  },
  {
    name: "Nigerian Defence Academy Kaduna",
    city: "Kaduna",
    code: "NDA Kaduna"
  },
  {
    name: "University of Calabar",
    city: "Calabar",
    code: "Unical"
  },
  {
    name: "University of Ibadan",
    city: "Ibadan",
    code: "UI"
  },
  {
    name: "University of Ilorin",
    city: "Ilorin",
    code: "unilorin"
  },
  {
    name: "University of Jos",
    city: "Jos",
    code: "Unijos"
  },
  {
    name: "University of Lagos",
    city: "Lagos",
    code: "Unilag"
  },
  {
    name: "University of Maiduguri",
    city: "Maiduguri",
    code: "Unimaid"
  },
  {
    name: "University of Nigeria, Nsukka",
    city: "Nsukka",
    code: "UNN"
  },
  {
    name: "University of Port-Harcourt",
    city: "Port-Harcourt",
    code: "Uniport"
  },
  {
    name: "University of Uyo",
    city: "Uyo",
    code: "Uniuyo"
  },
  {
    name: "University of Benin",
    city: "Benin",
    code: "Uniben"
  },
  {
    name: "Nnamdi Azikiwe University, Awka",
    city: "Awka",
    code: "Unizik"
  },
  {
    name: "Nigeria Police Academy Wudil",
    city: "Wudil",
    code: "NPA Wudil"
  },
  {
    name: "National Open University of Nigeria, Lagos",
    city: "Lagos",
    code: "NOUN Lagos"
  },
  {
    name: "Federal University, Birnin Kebbi",
    city: "Birnin Kebbi",
    code: "FU Birnin-Kebbi"
  },
  {
    name: "Federal University, Wukari",
    city: "Wukai",
    code: "FU Wukari"
  },
  {
    name: "Federal University, Oye-Ekiti",
    city: "Oye-Ekiti",
    code: "FU Oye-Ekiti"
  },
  {
    name: "Federal University, Otuoke",
    city: "Otuoke",
    code: "FU Otueke"
  },
  {
    name: "Federal University, Ndifu-Alike",
    city: "Ndifu-Alike",
    code: "FU Ndifu-Alike"
  },
  {
    name: "Federal University, Lokoja",
    city: "Lokoja",
    code: "FU Lokoja"
  },
  {
    name: "Federal University, Lafia",
    city: "Lafia",
    code: "FU Lafia"
  },
  {
    name: "Federal University, Kashere",
    city: "Kashere",
    code: "FU Kashere"
  },
  {
    name: "Federal University, Dutsin-Ma",
    city: "Dutsin-Ma",
    code: "FU Dutsin-Ma"
  },
  {
    name: "Federal University, Dutse",
    city: "Dutse",
    code: "FU Dutse"
  },
  {
    name: "Federal University of Technology, Owerri",
    city: "Owerri",
    code: "FUT Owerri"
  },
  {
    name: "Federal University of Technology, Minna",
    city: "Minna",
    code: "FUT Minna"
  },
  {
    name: "Federal University of Petroleum Resources, Effurun",
    city: "Effurun",
    code: "FUPRE"
  },
  {
    name: "Federal University Gashua, Yobe",
    city: "Gashua",
    code: "FUG Yobe"
  },
  {
    name: "Abia State University, Uturu",
    city: "Uturu",
    code: "ABSU Uturu"
  },
  {
    name: "Adamawa State University Mubi",
    city: "Mubi",
    code: "ADSU Mubi"
  },
  {
    name: "Adekunle Ajasin University, Akungba",
    city: "Akungba",
    code: "AAU Akungba"
  },
  {
    name: "Akwa Ibom State University of Technology, Uyo",
    city: "Uyo",
    code: "ASUT Uyo"
  },
  {
    name: "Ambrose Alli University, Ekpoma",
    city: "Ekpoma",
    code: "AAU Ekpoma"
  },
  {
    name: "Chukwuemeka Odumegwu Ojukwu University, Uli",
    city: "Uli",
    code: "COU Uli"
  },
  {
    name: "	Bauchi State University, Gadau",
    city: "Gadau",
    code: "BSU Gadau"
  },
  {
    name: "Benue State University, Makurdi",
    city: "Makurdi",
    code: "BSU Makurdi"
  },
  {
    name: "Bukar Abba Ibrahim University, Damaturu",
    city: "Damaturu",
    code: "BAIU Damaturu"
  },
  {
    name: "Cross River State University of Science &Technology, Calabar",
    city: "Calabar",
    code: "CSUST Calabar"
  },
  {
    name: "Delta State University Abraka",
    city: "Abraka",
    code: "DELSU Abraka"
  },
  {
    name: "Ebonyi State University, Abakaliki",
    city: "Abakaliki",
    code: "ESU Abakaliki"
  },
  {
    name: "Ekiti State University",
    city: "Ekiti",
    code: "EKSU"
  },
  {
    name: "Enugu State University of Science and Technology, Enugu",
    city: "Enugu",
    code: "ESUT Enugu"
  },
  {
    name: "Gombe State Univeristy, Gombe",
    city: "Gombe",
    code: "GOMSU"
  },
  {
    name: "Ibrahim Badamasi Babangida University, Lapai",
    city: "Lapai",
    code: "IBBU"
  },
  {
    name: "Ignatius Ajuru University of Education,Rumuolumeni",
    city: "Rumuolumeni",
    code: "IAUE"
  },
  {
    name: "Imo State University, Owerri",
    city: "Owerri",
    code: "IMSU"
  },
  {
    name: "Sule Lamido University, Kafin Hausa, Jigawa",
    city: "Jigawa",
    code: "SLU"
  },
  {
    name: "Kaduna State University, Kaduna",
    city: "Kaduna",
    code: "KASU"
  },
  {
    name: "Kano University of Science & Technology, Wudil",
    city: "Wudil",
    code: "KUST"
  },
  {
    name: "Kebbi State University, Kebbi",
    city: "Kebbi",
    code: "KSUSTA"
  },
  {
    name: "Kogi State University Anyigba",
    city: "Anyigba",
    code: "KSU"
  },
  {
    name: "Kwara State University, Ilorin",
    city: "Ilorin",
    code: "KWASU"
  },
  {
    name: "Ladoke Akintola University of Technology, Ogbomoso",
    city: "Ogbomoso",
    code: "LAUTECH"
  },
  {
    name: "Ondo State University of Science and Technology Okitipupa",
    city: "Okitipupa",
    code: "OSUSTECH"
  },
  {
    name: "River State University of Science and Technology",
    city: "Rivers",
    code: "UST"
  },
  {
    name: "Olabisi Onabanjo University, Ago Iwoye",
    city: "Ago Iwoye",
    code: "OOU Ago Iwoye"
  },
  {
    name: "Lagos State University, Ojo",
    city: "Ojo",
    code: "LASU"
  },
  {
    name: "Niger Delta University Yenagoa",
    city: "Yenagoa",
    code: "NDU Yenegoa"
  },
  {
    name: "Nasarawa State University Keffi",
    city: "Keffi",
    code: "NSUK"
  },
  {
    name: "Plateau State University Bokkos",
    city: "Bokkos",
    code: "PLASU"
  },
  {
    name: "Tai Solarin University of Education Ijebu Ode",
    city: "Ijebu Ode",
    code: "TASUED"
  },
  {
    name: "Osun State University Osogbo",
    city: "Osubgo",
    code: "Uniosun"
  },
  {
    name: "Northwest University Kano",
    city: "KANO",
    code: "NWU"
  },
  {
    name: "Oyo State Technical University Ibadan",
    city: "Oyo State Technical University Ibadan",
    code: "OSTU Ibadab"
  },
  {
    name: "Ondo State University of Medical Sciences",
    city: "Ondo",
    code: "OSUME"
  },
  {
    name: "Edo University Iyamo",
    city: "Iyamo",
    code: "EDU Iyamo"
  },
  {
    name: "Eastern Palm University Ogboko, Imo State",
    city: "Imo",
    code: "EPUA"
  },
  {
    name: "Achievers University, Owo",
    city: "Owo",
    code: "AU Owo"
  },
  {
    name: "Adeleke University, Ede",
    city: "Ede",
    code: "AU Ede"
  },
  {
    name: "Afe Babalola University, Ado-Ekiti",
    city: "Ado-Ekiti",
    code: "ABUAD Ado-Ekiti"
  },
  {
    name: "African University of Science & Technology, Abuja",
    city: "Abuja",
    code: "AUST Abuja"
  },
  {
    name: "Ajayi Crowther University, Ibadan",
    city: "Ibadan",
    code: "ACU Ibadan"
  },
  {
    name: "Al-Hikmah University, Ilorin",
    city: "Ilorin",
    code: "Alhikmah Ilorin"
  },
  {
    name: "Al-Qalam University, Katsina",
    city: "Katsina",
    code: "AUK Katsina"
  },
  {
    name: "American University of Nigeria, Yola",
    city: "Yola",
    code: "AUN"
  },
  {
    name: "Augustine University",
    city: "Lagos",
    code: "Augustine University"
  },
  {
    name: "Babcock University,Ilishan-Remo",
    city: "Ilishan-Remo",
    code: "BABCOCK"
  },
  {
    name: "Baze University",
    city: "Abuja",
    code: "BAZE University"
  },
  {
    name: "Bells University of Technology, Otta",
    city: "Otta",
    code: "BUT Otta"
  },
  {
    name: "Benson Idahosa University, Benin City",
    city: "Benin City",
    code: "Idahosa Uni"
  },
  {
    name: "Bingham University, New Karu",
    city: "New Karu",
    code: "Bingham"
  },
  {
    name: "Bowen University, Iwo",
    city: "Iwo",
    code: "BOWEN"
  },
  {
    name: "Caleb University, Lagos",
    city: "Lagos",
    code: "Caleb Uni"
  },
  {
    name: "Caritas University, Enugu",
    city: "Enugu",
    code: "Caritas"
  },
  {
    name: "CETEP City University, Lagos",
    city: "Lagos",
    code: "CETEP Uni"
  },
  {
    name: "Chrisland University",
    city: "Abeokuta",
    code: "Chrisland University"
  },
  {
    name: "Covenant University Ota",
    city: "Ota",
    code: "Convenant"
  },
  {
    name: "Crawford University Igbesa",
    city: "Igbesa",
    code: "Crawford Uni"
  },
  {
    name: "Crescent University",
    city: "Abeokuta",
    code: "Crescent Uni"
  },
  {
    name: "Edwin Clark University, Kaigbodo",
    city: "Kaigbodo",
    code: "ECU Kaigbodo"
  },
  {
    name: "Elizade University, Ilara-Mokin",
    city: "Ilara-Mokin",
    code: "Elizade Uni"
  },
  {
    name: "Evangel University, Akaeze",
    city: "Akaeze",
    code: "Evangel Uni"
  },
  {
    name: "Fountain Unveristy, Oshogbo",
    city: "Oshogbo",
    code: "FU Oshogbo"
  },
  {
    name: "Godfrey Okoye University, Ugwuomu-Nike",
    city: "Ugwuomu-Nike",
    code: "GOU Ugwuomu-Nike"
  },
  {
    name: "Gregory University, Uturu",
    city: "Uturu",
    code: "GU Uturu"
  },
  {
    name: "Hallmark University",
    city: "Ijebu-Itele",
    code: "Hallmark Uni"
  },
  {
    name: "Hezekiah University, Umudi",
    city: "Umudi",
    code: "Hezekiah Uni"
  },
  {
    name: "Igbinedion University Okada",
    city: "Okada",
    code: "Igbinedion Uni"
  },
  {
    name: "Joseph Ayo Babalola University, Ikeji-Arakeji",
    city: "Ikeji-Arakeji",
    code: "JABU Ikeji-Arakeji"
  },
  {
    name: "Kings University",
    city: "Odeomu",
    code: "Kings University"
  },
  {
    name: "Kwararafa University, Wukari",
    city: "Wukari",
    code: "KU Wukari"
  },
  {
    name: "Landmark University, Omu-Aran.",
    city: "Omu-Aran",
    code: "Landmark Uni"
  },
  {
    name: "Lead City University, Ibadan",
    city: "Ibadan",
    code: "LCU Ibadan"
  },
  {
    name: "Madonna University, Okija",
    city: "Okija",
    code: "Madonna"
  },
  {
    name: "Mcpherson University, Seriki Sotayo, Ajebo",
    city: "Seriki Sotayo, Ajebo",
    code: "MU Seriki Sotayo, Ajebo"
  },
  {
    name: "Micheal & Cecilia University",
    city: "Otor Ughelli North",
    code: "MCU"
  },
  {
    name: "Mountain Top University",
    city: "Prayer City",
    code: "MICU"
  },
  {
    name: "Nigerian-Turkish Nile University, Abuja",
    city: "Abuja",
    code: "NTNU Abuja"
  },
  {
    name: "Novena University, Ogume",
    city: "Ogume",
    code: "Novena Uni"
  },
  {
    name: "Obong University, Obong Ntak",
    city: "Obong Ntak",
    code: "OU Obong Ntak"
  },
  {
    name: "Oduduwa University, Ipetumodu - Osun State",
    city: "Ipetumodu",
    code: "ODU Ipetumodu"
  },
  {
    name: "Pan-Atlantic University, Lagos",
    city: "Lagos",
    code: "PAU Lagos"
  },
  {
    name: "Paul University, Awka",
    city: "Awka",
    code: "Paul Uni"
  },
  {
    name: "Redeemer's University, Mowe",
    city: "Mowe",
    code: "Redeemers Uni"
  },
  {
    name: "Renaissance University, Enugu",
    city: "Enugu",
    code: "RU Enugu"
  },
  {
    name: "Rhema University, Obeama-Asa",
    city: "Obeama-Asa",
    code: "Rhema Uni Obeama-Asa"
  },
  {
    name: "Ritman University",
    city: "Ikot Ekpene",
    code: "Ritman Uni"
  },
  {
    name: "Salem University, Lokoja",
    city: "Lokoja",
    code: "Salem Uni"
  },
  {
    name: "Samuel Adegboyega University, Ogwa",
    city: "Ogwa",
    code: "SAU Ogwa"
  },
  {
    name: "Southwestern University, Oku Owa",
    city: "Oku Owa",
    code: "SU Oku Owa"
  },
  {
    name: "Tansian University, Umunya",
    city: "Umunya",
    code: "TU Umunya"
  },
  {
    name: "University of Mkar, Mkar",
    city: "Mkar",
    code: "UM Mkar"
  },
  {
    name: "Veritas University",
    city: "Bwari",
    code: "Veritas"
  },
  {
    name: "Wellspring University, Evbuobanosa",
    city: "Evbuobanosa",
    code: "WU Evbuobanosa"
  },
  {
    name: "Western Delta University, Oghara",
    city: "Oghara",
    code: "WDU Oghara"
  },
  {
    name: "Christopher University Mowe",
    city: "Mowe",
    code: "CU Mowe"
  },
  //Colleges
  {
    name: "Adeyemi College of Education, Ondo",
    city: "Ondo",
    code: "ACE Ondo"
  },
  {
    name: "Alvan Ikoku College of Education, Owerri",
    city: "Owerri",
    code: "AICE Owerri"
  },
  {
    name: "Federal College of Educ. Abeokuta",
    city: "Abeokuta",
    code: "FCE Abeokuta"
  },
  {
    name: "Federal College of Education",
    city: "Eha-Amufu",
    code: "FCE, Eha-Amufu"
  },
  {
    name: "Federal College of Education, Kano",
    city: "Kano",
    code: "FCE Kano"
  },
  {
    name: "Federal College of Education",
    city: "Katsina",
    code: "FCE Katsina"
  },
  {
    name: "Federal college of Education, Kontagora",
    city: "Kontagora",
    code: "FCE Kontagora"
  },
  {
    name: "Federal College of Education, Obudu",
    city: "Obudu",
    code: "FCE Obudu"
  },
  {
    name: "Federal College of Education, Okene",
    city: "Okene",
    code: "FCE Okene"
  },
  {
    name: "Federal College of Education, Pankshin",
    city: "Pankshin",
    code: "FCE Pankshin"
  },
  {
    name: " Federal College of Education, Yola",
    city: "Yola",
    code: "FCE Yola"
  },
  {
    name: "Federal College of Education, Zaria",
    city: "Zaria",
    code: "FCE Zaria"
  },
  {
    name: "Federal College of Education (Technical), Akoka",
    city: "Akoka",
    code: "FCE Akoka"
  },
  {
    name: "Federal College of Education (Technical), Asaba",
    city: "Asaba",
    code: "FCE Asaba"
  },
  {
    name: "Federal College of Education (Technical), Bichi",
    city: "Bichi",
    code: "FCE Bichi"
  },
  {
    name: "Federal College of Education (Technical), Gombe",
    city: "Gombe",
    code: "FCE Gombe"
  },
  {
    name: "Federal College of Education (Technical) (Female Only), Gusau",
    city: "Gusau",
    code: "FCE Gusau"
  },
  {
    name: "Fed College of Education (Technical), Omoku",
    city: "Omoku",
    code: "FCE Omoku"
  },
  {
    name: "Federal College of Education (Technical), Potiskum",
    city: "Potiskum",
    code: "FCE Potiskum"
  },
  {
    name: "Federal College of Education (Technical) Umunze",
    city: "Umunze",
    code: "FCE Umunze"
  },
  {
    name: "Federal College of Education (Special) Oyo",
    city: "Oyo",
    code: "FCE Oyo"
  },
  {
    name: "College of Education, Agbor",
    city: "Agbor",
    code: "CE Agbor"
  },
  {
    name: "Akwa-Ibom State College of Education, Afaha-Nsit",
    city: "Afaha-Nsit",
    code: "ASCE Afaha-Nsit"
  },
  {
    name: "College of Education, Akwanga",
    city: "Akwanga",
    code: "CE Akwanga"
  },
  {
    name: "College of Education, Ankpa",
    city: "Ankpa",
    code: "CE Ankpa"
  },
  {
    name: "Adamu Augie College of Education, Argungu",
    city: "Argungu",
    code: "AACE Argungu"
  },
  {
    name: "Abia State College of Education (Technical), Arochukwu",
    city: "Arochukwu",
    code: "ABSCE Arochukwu"
  },
  {
    name: "College of Education, Azare",
    city: "Azare",
    code: "CE Azare"
  },
  {
    name: "Umar-Ibn EI-Kanemi College of Education, Dutsinma",
    city: "Dutsinma",
    code: "UECE Dutsinma"
  },
  {
    name: "Bayelsa State College of Education, Okpoama-Brass",
    city: "Okpoama-Brass",
    code: "BSCE Okpoama-Brass"
  },
  {
    name: "Isa Kaita College of Education, Dutsinma",
    city: "Dutsinma",
    code: "IKCE Dutsinma"
  },
  {
    name: "Emmanuel Alyande College of Education, Oyo",
    city: "Oyo",
    code: "EACE Oyo"
  },
  {
    name: "Enugu State College of Education (Tech.) Enugu",
    city: "Enugu",
    code: "ESCE Abakaliki Rd"
  },
  {
    name: "College of Education, Ekiadolor",
    city: "Ekiadolor",
    code: "CE Ekiadolor"
  },
  {
    name: "Umar Suleiman College of Education, Gashua",
    city: "Gashua",
    code: "USCE Gashua"
  },
  {
    name: "College of Education, Gindiri",
    city: "Gindiri",
    code: "CE Gindiri"
  },
  {
    name: "Jigawa State College of Education, Gumel",
    city: "Gumel",
    code: "JSCE Gumel"
  },
  {
    name: "Michael Otedola College of Primary Education, Moforiji",
    city: "Moforiji",
    code: "MOCPE Moforiji"
  },
  {
    name: "Delta State College of Physical Education, Mosogar",
    city: "Mosogar",
    code: "DSCPE Mosogar"
  },
  {
    name: "College of Education, Port Harcourt",
    city: "Port Harcourt",
    code: "CE Port Harcourt"
  },
  {
    name: "College of Education, Hong",
    city: "Hong",
    code: "CE Hong"
  },
  {
    name: "Adeniran Ogunsanya College of Education, Otto/Ijanikin",
    city: "Otto/Ijanikin",
    code: "AOCE Otto/Ijanikin"
  },
  {
    name: "Tai Solarin College of Education, Ijebu-Ode",
    city: "Ijebu-Ode",
    code: "TSCE Ijebu-Ode"
  },
  {
    name: "Ebonyi State College of Education, Ikwo",
    city: "Ikwo",
    code: "ESCE Ikwo"
  },
  {
    name: "College of Education, Ikere",
    city: "Ikere",
    code: "CE Ikere"
  },
  {
    name: "Osun State College of Education, Ila-Orangun",
    city: "Ila-Orangun",
    code: "OSCE Ila-Orangun"
  },
  {
    name: "College of Education, Ilesha",
    city: "Ilesha",
    code: "CE Ilesha"
  },
  {
    name: "College of Education, Ilorin",
    city: "Ilorin",
    code: "CE Ilorin"
  },
  {
    name: "College of Education, Jalingo",
    city: "Jalingo",
    code: "CE Jalingo"
  },
  {
    name: "College of Education, Gidan-Waya",
    city: "Gidan-Waya",
    code: "CE Gidan-Waya"
  },
  {
    name: "Kano State College of Education, Kumbotso Zaria Rd",
    city: "Kumbotso Zaria Rd",
    code: "KSCE Kumbotso Zaria Rd"
  },
  {
    name: "College of Education, Katsina-Ala",
    city: "Katsina-Ala",
    code: "CE Katsina-Ala"
  },
  {
    name: "Kebbi State College of Education, Argungu",
    city: "Argungu",
    code: "KSCE Argungu"
  },
  {
    name: "College of Education, (Tech), Lafiagi",
    city: "Lafiagi",
    code: "CE Lafiagi"
  },
  {
    name: "Kashim-Ibrahim College of Educ., Maiduguri",
    city: "Maiduguri",
    code: "KIC Maiduguri"
  },
  {
    name: "College of Education, Minna",
    city: "Minna",
    code: "CE Minna"
  },
  {
    name: "Mohammed Goni of Legal and Islamic Studies, Maiduguri",
    city: "Maiduguri",
    code: "MGLIS Maiduguri"
  },
  {
    name: "Nwafor Orizu College of Education, Nsugbe",
    city: "Nsugbe",
    code: "NOCE Nsugbe"
  },
  {
    name: "College of Education, Maru",
    city: "Maru",
    code: "CE Maru"
  },
  {
    name: "College of Education, Oju",
    city: "Oju",
    code: "CE Oju"
  },
  {
    name: "College of Education, Oro",
    city: "Oro",
    code: "CE Oro"
  },
  {
    name: "Oyo State College of Education, Oyo",
    city: "Oyo",
    code: "OSCE Oyo"
  },
  {
    name: "Shehu Shagari College of Education, Sokoto",
    city: "Sokoto",
    code: "SSCE Sokoto"
  },
  {
    name: "College of Education, Waka-Biu",
    city: "Waka-Biu",
    code: "CE Waka-Biu"
  },
  {
    name: "College of Education, Warri",
    city: "Warri",
    code: "CE Warri"
  },
  {
    name: "FCT College of Education",
    city: "Zuba",
    code: "FCTCE Zuba"
  },
  {
    name: "All states College of Education, Ero Community Junction Akure",
    city: "Akure",
    code: "ASCE Akure"
  },
  {
    name: "Angel Crown College of Education, Gidan-Daya",
    city: "Gidan-Daya",
    code: "ACCE Gidan-Daya"
  },
  {
    name: "Ansar-Ud-Deen College of Education, Oshodi",
    city: "Oshodi",
    code: "ACE Oshodi"
  },
  {
    name: "Elder Oyama Memorial College of Education, Obubra",
    city: "Obubra",
    code: "EOMCE Obubra"
  },
  {
    name: "Assanusiyah College of Education, Odeomu",
    city: "Odeomu",
    code: "ACE Odeomu"
  },
  {
    name: "Apa College of Education, Aido Godo-Okpoga",
    city: "Aido Godo-Okpoga",
    code: "ACE Aido Godo-Okpoga"
  },
  {
    name: "African Thinkers Community of inquiry College of Education, Enugu",
    city: "Enugu",
    code: "ATCCE Enugu"
  },
  {
    name: "Awori District College of Education, Bankole Estate Ijako-Ota",
    city: "Bankole Estate Ijako-Ota",
    code: "ADCE Bankole Estate Ijako-Ota"
  },
  {
    name: "Best Legacy College of Education, Ogbomoso",
    city: "Ogbomoso",
    code: "BLCE Ogbomoso"
  },
  {
    name: "Bauchi Institute for Arabic and Islamic Studies, Bauchi",
    city: "Bauchi",
    code: "BIAIS Bauchi"
  },
  {
    name: "Calvin Foundation College of Education, Naka",
    city: "Naka",
    code: "CFCE Naka"
  },
  {
    name: "The College of Education, Nsukka",
    city: "Nsukka",
    code: "CE Nsukka"
  },
  {
    name: "College of Education, Irra Rd. Ilemona",
    city: "Ilemona",
    code: "CE Ilemona"
  },
  {
    name: "Cornerstone College of Education, Ikeja",
    city: "Ikeja",
    code: "CCE Ikeja"
  },
  {
    name: "City College of Education, Maraba Gurku",
    city: "Maraba Gurku",
    code: "CCE Maraba Gurku"
  },
  {
    name: "Delar College of Education, Egbeda",
    city: "Egbeda",
    code: "DCE Egbeda"
  },
  {
    name: "Harvard Wilson College of Education, Aba",
    city: "Aba",
    code: "HWCE Aba"
  },
  {
    name: "Hill College of Education, Gwanji, Akwanga",
    city: "Akwanga",
    code: "HCEGA Akwanga"
  },
  {
    name: "Institute of Ecumenical Education, Enugu",
    city: "Enugu",
    code: "IEE Enugu"
  },
  {
    name: "Jama’Atu Nasir Islam College of Education, Kaduna",
    city: "Kaduna",
    code: "JNICE Kaduna"
  },
  {
    name: "Jibwis College of Arabic and Islamic Education, Gombe",
    city: "Gombe",
    code: "JCAIE Gombe"
  },
  {
    name: "College of Education, Foreign Links Campus Moro, Ife, North",
    city: "Ife, North",
    code: "CEFL Ife, North"
  },
  {
    name: "College of Education, Moro-Ife",
    city: "Moro-Ife",
    code: "CE Moro-Ife"
  },
  {
    name: "Muhyideen College of Education, Ilorin",
    city: "Ilorin",
    code: "MCE Ilorin"
  },
  {
    name: "Mufutau’ Lanihun College of Education, Oremeji",
    city: "Oremeji",
    code: "MLCE Oremeji"
  },
  {
    name: "Nana Aishat Memorial College of Education, Ilorin",
    city: "Ilorin",
    code: "NAMCE Ilorin"
  },
  {
    name: "Institute of Arabic and Islamic Studies, Olodo Ibadan",
    city: "Olodo Ibadan",
    code: "IAIS Olodo Ibadan"
  },
  {
    name: "ONIT College of Education, Abagana",
    city: "Abagana",
    code: "ONITCE Abagana"
  },
  {
    name: "Our Saviour Inst. Of Sci. & Tech. College of Education, Enugu",
    city: "Enugu",
    code: "OSISTCE Enugu"
  },
  {
    name: "The African Church College of Education, Adewale Adegun Avenue",
    city: "Adewale Adegun Avenue",
    code: "TACCE Adewale Adegun Avenue"
  },
  {
    name: "St. Augustine College of Education (Project Time), Yaba",
    city: "Yaba",
    code: "SACE Yaba"
  },
  {
    name: "Topmost College of Education, Ipaja",
    city: "Ipaja",
    code: "TCEI Ipaja"
  },
  {
    name: "Yewa Central College of Education, Adehun Abeokuta",
    city: "Adehun Abeokuta",
    code: "YCCE Adehun Abeokuta"
  },
  {
    name: "Yusuf Bala Usman College of Legal and General Studies, Daura",
    city: "Daura",
    code: "YBUCLGS Daura"
  },
  {
    name: "Kinsey College Of Education, Ilorin South",
    city: "Ilorin South",
    code: "KCE Ilorin South"
  },
  //Polytechnics
  {
    name: "Akanu Ibiam Federal Polytechnic, Unwana-Afikpo",
    city: "Unwana-Afikpo",
    code: "AIFP Unwana-Afikpo"
  },
  {
    name: "Auchi Polytechnic, Auchi",
    city: "Auchi",
    code: "APA Auchi"
  },
  {
    name: "Federal Polytechnic, Ekiti",
    city: "Ekiti",
    code: "FP Ekiti"
  },
  {
    name: "Federal Polytechnic, Bauchi",
    city: "Bauchi",
    code: "FP Bauchi"
  },
  {
    name: "Federal Polytechnic, Bida",
    city: "Bida",
    code: "FP Bida"
  },
  {
    name: "Federal Polytechnic, Damaturu",
    city: "Damaturu",
    code: "FP Damaturu"
  },
  {
    name: "Federal Polytechnic, Ede",
    city: "Ede",
    code: "FP Ede"
  },
  {
    name: "Federal Polytechnic, Idah",
    city: "Idah",
    code: "FP Idah"
  },
  {
    name: "Federal Polytechnic, Ilaro",
    city: "Ilaro",
    code: "FP Ilaro"
  },
  {
    name: "Federal Polytechnic, Ile-Oluji",
    city: "Ile-Oluji",
    code: "FP Ile-Oluji"
  },
  {
    name: "Federal Polytechnic, Kaura Namoda",
    city: "Kaura Namoda",
    code: "FP Kaura Namoda"
  },
  {
    name: "Federal Polytechnic, Mubi",
    city: "Mubi",
    code: "FP Mubi"
  },
  {
    name: "Federal Polytechnic, Namoda",
    city: "Namoda",
    code: "FP Namoda"
  },
  {
    name: "Federal Polytechnic, Nassarawa",
    city: "Nassarawa",
    code: "FP Nassarawa"
  },
  {
    name: "Federal Polytechnic, Nekede",
    city: "Nekede",
    code: "FP Nekede"
  },
  {
    name: "Federal Polytechnic, Offa",
    city: "Offa",
    code: "FP Offa"
  },
  {
    name: "Federal Polytechnic, Oko",
    city: "Oko",
    code: "FP Oko"
  },
  {
    name: "Hussaini Adamu Federal Polytechnic, Kazaure",
    city: "Kazaure",
    code: "HAFP Kazaure"
  },
  {
    name: "Kaduna Polytechnic, Kaduna",
    city: "Kaduna",
    code: "KP Kaduna"
  },
  {
    name: "Waziri Umaru Federal Polytechnic, Birnin Kebbi",
    city: "Birnin Kebbi",
    code: "WUFP Birnin Kebbi"
  },
  {
    name: "Yaba College of Technology, Yaba",
    city: "Yaba",
    code: "YCT Yaba"
  },
  {
    name: "Federal Polytechnic, Bali",
    city: "Bali",
    code: "FP Bali"
  },
  {
    name: "Federal Polytechnic, Ekowe",
    city: "Ekowe",
    code: "FP Ekowe"
  },
  {
    name: "Federal School of Dental Technology and Therapy, Enugu",
    city: "Enugu",
    code: "FSDTT Enugu"
  },
  {
    name: "Nigeria Army School of Military Engineering, Makurdi",
    city: "Makurdi",
    code: "NASME Makurdi"
  },
  {
    name:
      "Federal College of Animal Health and Production Technology, Moor Plantation",
    city: "Moor Plantation",
    code: "FCAHPT Moor Plantation"
  },
  {
    name: "Air Force Institute of Technology Nigerian Air Force, Kaduna",
    city: "Kaduna",
    code: "AFITAF Kaduna"
  },
  {
    name: "Abdu Gusau Polytechnic, Talata-Mafara",
    city: "Talata-Mafara",
    code: "AGPT Talata-Mafara"
  },
  {
    name: "Abia State Polytechnic, Aba",
    city: "Aba",
    code: "ASP Aba"
  },
  {
    name: "Abubakar Tatari Ali Polytechnic, Bauchi",
    city: "Bauchi",
    code: "ATAP Bauchi"
  },
  {
    name: "Adamawa State Polytechnic, Yola",
    city: "Yola",
    code: "ASP Yola"
  },
  {
    name: "Akwa-Ibom State College of Art and Science, Numkum",
    city: "Numkum",
    code: "ASCAS Numkum"
  },
  {
    name: "Akwa-Ibom State Polytechnic, Ikot-Osurua",
    city: "Ikot-Osurua",
    code: "ASP Ikot-Osurua"
  },
  {
    name: "Benue State Polytechnic, Ugbokolo",
    city: "Ugbokolo",
    code: "BSP Ugbokolo"
  },
  {
    name: "College of Administrative and Business Studies, Potiskum",
    city: "Potiskum",
    code: "CABS Potiskum"
  },
  {
    name: "Delta State Polytechnic, tefe Ogharra",
    city: "tefe Ogharra",
    code: "DSP tefe Ogharra"
  },
  {
    name: "Delta State Polytechnic, Ozoro",
    city: "Ozoro",
    code: "DSP Ozoro"
  },
  {
    name: "Delta State Polytechnic, Ugwashi-Uku",
    city: "Ugwashi-Uku",
    code: "DSP Ugwashi-Uku"
  },
  {
    name: "Edo State Institute of Management and Technology, Usen",
    city: "Benin City",
    code: "EDIMT Benin City"
  },
  {
    name: "Enugu Polytechnic, ",
    city: "Ani-Iri",
    code: "EP Ani-Iri"
  },
  {
    name: "Gateway ICT Institute, Itori",
    city: "Ewekoro",
    code: "GICTI Ewekoro"
  },
  {
    name: "Gateway ICT Polytechnic, Igbesa",
    city: "Igbesa",
    code: "GICTP Igbesa"
  },
  {
    name: "Gateway ICT Polytechnic, Saapade",
    city: "Saapade",
    code: "GICTP Saapade"
  },
  {
    name: "Hassan Usman Katsina Polytechnic, Katsina",
    city: "Katsina",
    code: "HUP Katsina"
  },
  {
    name: "Imo State Polytechnic, Umuagwo",
    city: "Owerri",
    code: "ISP Owerri"
  },
  {
    name: "Institute of Management. & Technology, Enugu",
    city: "Enugu",
    code: "IMT Enugu"
  },
  {
    name: "Jigawa State Polytechnic, Dutse",
    city: "Dutse",
    code: "JSP Dutse"
  },
  {
    name: "Kano State Polytechnic, Kano",
    city: "Kano",
    code: "KSP Kano"
  },
  {
    name: "Kogi State Polytechnic, Lokoja",
    city: "Lokoja",
    code: "KSP Lokoja"
  },
  {
    name: "Kwara State Polytechnic, Ilorin",
    city: "Ilorin",
    code: "KSP Ilorin"
  },
  {
    name: "Lagos State Polytechnic, Ikorodu",
    city: "Ikorodu",
    code: "LSP Ikorodu"
  },
  {
    name: "Moshood Abiola Polytechnic, Abeokuta",
    city: "Abeokuta",
    code: "MAP Abeokuta"
  },
  {
    name: "Nasarawa State Polytechnic, Lafia",
    city: "Lafia",
    code: "NSP Lafia"
  },
  {
    name: "Niger State Polytechnic, Zungeru",
    city: "Zungeru",
    code: "NSP Zungeru"
  },
  {
    name: "Nuhu Bamalli Polytechnic, Zaria",
    city: "Zaria",
    code: "NUBA Zaria"
  },
  {
    name: "Osun State College of Technology, Esa-Oke",
    city: "Esa-Oke",
    code: "OSCT Esa-Oke"
  },
  {
    name: "Osun State Polytechnic, Iree",
    city: "Iree",
    code: "OSP Iree"
  },
  {
    name: "Plateau State Polytechnic, Barkin Ladi",
    city: "Barkin Ladi",
    code: "PSP Barkin Ladi"
  },
  {
    name: "Ramat Polytechnic, Maiduguri",
    city: "Maiduguri",
    code: "RP Maiduguri"
  },
  {
    name: "Rivers State Polytechnic, Bori",
    city: "Bori",
    code: "RSP Bori"
  },
  {
    name: "Rivers State College of Arts and Science, Rumola",
    city: "Rumola",
    code: "RSCAS Rumola"
  },
  {
    name: "Rufus Giwa Polytechnic, Owo",
    city: "Owo",
    code: "RGP Owo"
  },
  {
    name: "Sokoto State Polytechnic, Sokoto",
    city: "Sokoto",
    code: "SSP Sokoto"
  },
  {
    name: "Taraba State Polytechnic, Jalingo",
    city: "Jalingo",
    code: "TSP Jalingo"
  },
  {
    name: "The Polytechnic, Ibadan",
    city: "Ibadan",
    code: "TP Ibadan"
  },
  {
    name: "Yobe State Polytechnic, Geidam",
    city: "Geidam",
    code: "YSPG Geidam"
  },
  {
    name: "Allover Central Polytechnic, Sango-Ota",
    city: "Sango-Ota",
    code: "ACP Sango-Ota"
  },
  {
    name: "Covenant Polytechnic, Aba",
    city: "Aba",
    code: "CP Aba"
  },
  {
    name: "Crown Polytechnic, Odo Ado-Ekiti",
    city: "Odo Ado-Ekiti",
    code: "CP Odo Ado-Ekiti"
  },
  {
    name: "Dorben Polytechnic, Bwari",
    city: "Bwari",
    code: "DP Bwari"
  },
  {
    name: "Fidei Polytechnic, Gboko",
    city: "Gboko",
    code: "FP Gboko"
  },
  {
    name: "Grace Polytechnic, Surulere",
    city: "Surulere",
    code: "Gp Surulere"
  },
  {
    name: "Heritage Polytechnic, Eket",
    city: "Eket",
    code: "HP Eket"
  },
  {
    name: "Ibadan City Polytechnic, Dugbe",
    city: "Dugbe",
    code: "ICP Dugbe"
  },
  {
    name: "Igbajo Polytechnic, Igbajo",
    city: "Igbajo",
    code: "IP Igbajo"
  },
  {
    name: "Interlink Polytechnic,  IJebu-Jesa",
    city: " IJebu-Jesa",
    code: "IP IJebu-Jesa"
  },
  {
    name: "Kings Polytechnic, Ubiaja",
    city: "Ubiaja",
    code: "KP Ubiaja"
  },
  {
    name: "Lagos City Polytechnic, Ikeja",
    city: "Ikeja",
    code: "LCP Ikeja"
  },
  {
    name: "Lighthouse Polytechnic, Evbuobanosa",
    city: "Evbuobanosa",
    code: "LP Evbuobanosa"
  },
  {
    name: "Nacabs Polytechnic, Akwanga",
    city: "Akwanga",
    code: "NP Akwanga"
  },
  {
    name: "Nogak Polytechnic, Ikom",
    city: "Ikom",
    code: "NP Ikom"
  },
  {
    name:
      "Our Saviour Institute of Science Agric and Technology (OSISATECH), Enugu",
    city: "Enugu",
    code: "OSISAT Enugu"
  },
  {
    name: "Prime Polytechnic, Ajaokuta",
    city: "Ajaokuta",
    code: "PP Ajaokuta"
  },
  {
    name: "Ronik Polytechnic, Ejigbo",
    city: "Ejigbo",
    code: "RP Ejigbo"
  },
  {
    name: "Shaka Polytechnic Benin City",
    city: "Benin City",
    code: "SP Benin City"
  },
  {
    name: "Temple-Gate Polytechnic, Aba",
    city: "Aba",
    code: "TGP Aba"
  },
  {
    name: "The Polytechnic, Ile-Ife",
    city: "Ile-Ife",
    code: "TP Ile-Ife"
  },
  {
    name: "The Polytechnic Imesi-Ile",
    city: "Imesi-Ile",
    code: "TP"
  },
  {
    name: "Tower Polytechnic Ibadan",
    city: "Ibadan",
    code: "TP Ibadan"
  },
  {
    name: "Wolex Polytechnic, Ikeja",
    city: "Ikeja",
    code: "WP Ikeja"
  },
  {
    name: "D.S. ADEGBENRO ICT Polytechnics, Abeokuta",
    city: "Abeokuta",
    code: "Ifo"
  },
  {
    name: "Nigerian Institute of Journalism, (NIJ), Ogba Estate, Ikeja",
    city: "Ogba Estate, Ikeja",
    code: "NIJ Ogba Estate"
  }
];
module.exports = schools;