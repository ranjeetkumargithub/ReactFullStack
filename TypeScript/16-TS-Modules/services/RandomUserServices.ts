import { IRandomUser, IRandomUserData } from "../models/IRandomUserData";

export class RandomUserService {
    private static usersData:IRandomUserData = {
        results: [
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Samantha",
              last: "Williams"
            },
            location: {
              street: {
                number: 7583,
                name: "Beach Road"
              },
              city: "Gisborne",
              state: "Northland",
              country: "New Zealand",
              postcode: 12978,
              coordinates: {
                latitude: "51.7278",
                longitude: "64.3044"
              },
              timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
              }
            },
            email: "samantha.williams@example.com",
            login: {
              uuid: "de9ec128-00a4-41f8-9c3e-e16b4c865930",
              username: "whitetiger166",
              password: "cezer121",
              salt: "aQsf8ItU",
              md5: "d2d0165a1700d9fe707ccefbe2694537",
              sha1: "6f57d90285a745d5de7fe826a7b4aa1ea79078ca",
              sha256: "d4368ea311cd3e18b5afa4c119adb0e9fe5c6e26cef712b2cde00d1bf9b79402"
            },
            dob: {
              date: "1966-04-17T10:14:28.430Z",
              age: 56
            },
            registered: {
              date: "2016-10-26T00:31:03.608Z",
              age: 6
            },
            phone: "(753)-351-0113",
            cell: "(492)-921-7727",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/24.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/24.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/24.jpg"
            },
            nat: "NZ"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Delores",
              last: "Armstrong"
            },
            location: {
              street: {
                number: 8753,
                name: "Hillcrest Rd"
              },
              city: "Dubbo",
              state: "Australian Capital Territory",
              country: "Australia",
              postcode: 4381,
              coordinates: {
                latitude: "-63.3365",
                longitude: "-126.5877"
              },
              timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City"
              }
            },
            email: "delores.armstrong@example.com",
            login: {
              uuid: "56f3e42b-c3b0-4b40-b3e5-511177ffcab2",
              username: "bluewolf302",
              password: "blue22",
              salt: "fBB98VOT",
              md5: "f8d2f5a63738b74e8b2928b505297f0c",
              sha1: "d25f4eef618628b29d495a200455c24d3888cc7f",
              sha256: "673c70907904ed57964f957aa6f3f9b43871a961c359bde0b5268d9e3e037e4f"
            },
            dob: {
              date: "1982-07-15T03:31:06.132Z",
              age: 40
            },
            registered: {
              date: "2009-02-16T23:59:53.956Z",
              age: 13
            },
            phone: "08-1025-7272",
            cell: "0496-059-527",
            id: {
              name: "TFN",
              value: "766705344"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/10.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            },
            nat: "AU"
          },
          {
            gender: "male",
            name: {
              title: "Monsieur",
              first: "Bernhard",
              last: "Gauthier"
            },
            location: {
              street: {
                number: 1735,
                name: "Rue des Jardins"
              },
              city: "Perroy",
              state: "Neuchâtel",
              country: "Switzerland",
              postcode: 1418,
              coordinates: {
                latitude: "-58.2755",
                longitude: "159.1116"
              },
              timezone: {
                offset: "-3:30",
                description: "Newfoundland"
              }
            },
            email: "bernhard.gauthier@example.com",
            login: {
              uuid: "3a51d213-8c4c-43e9-89e9-3cbaac196776",
              username: "crazyelephant933",
              password: "lorraine",
              salt: "fGqvIPy5",
              md5: "20ebb21d256ce7f418100fcfcb15459f",
              sha1: "b0dbbc6f99fd84946eb91fcd60b29b4fccc4a476",
              sha256: "b80648871ba5e913d0ba527a297217cb006b1381e64d27835072302c5b36102d"
            },
            dob: {
              date: "1983-08-17T09:21:38.638Z",
              age: 39
            },
            registered: {
              date: "2009-07-27T15:49:40.271Z",
              age: 13
            },
            phone: "078 220 88 61",
            cell: "077 543 30 17",
            id: {
              name: "AVS",
              value: "756.2097.0390.59"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/95.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg"
            },
            nat: "CH"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Fedora",
              last: "Skorohod"
            },
            location: {
              street: {
                number: 7316,
                name: "Dalya"
              },
              city: "Burshtin",
              state: "Avtonomna Respublika Krim",
              country: "Ukraine",
              postcode: 86603,
              coordinates: {
                latitude: "-60.4628",
                longitude: "-167.7501"
              },
              timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima"
              }
            },
            email: "fedora.skorohod@example.com",
            login: {
              uuid: "2552ba7c-1845-48a6-a843-ea5f09341dca",
              username: "browncat798",
              password: "peace1",
              salt: "HmTJWtam",
              md5: "e0019db825ab5c409729421db82d1595",
              sha1: "758c3ec893b002f51d6e4b4ce39c45efe660d67b",
              sha256: "b08fa13f9d0132702e7d3adfc7369c6cd9b9918c0551ebd87c175791e7bb1c51"
            },
            dob: {
              date: "1958-01-17T20:06:53.047Z",
              age: 65
            },
            registered: {
              date: "2003-02-07T05:39:18.457Z",
              age: 19
            },
            phone: "(068) H11-3212",
            cell: "(098) B17-2983",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/66.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
            },
            nat: "UA"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Rusana",
              last: "Gavrilenko"
            },
            location: {
              street: {
                number: 7112,
                name: "Ivasyuka"
              },
              city: "Pomichna",
              state: "Donecka",
              country: "Ukraine",
              postcode: 30672,
              coordinates: {
                latitude: "-54.0301",
                longitude: "-3.9496"
              },
              timezone: {
                offset: "+3:00",
                description: "Baghdad, Riyadh, Moscow, St. Petersburg"
              }
            },
            email: "rusana.gavrilenko@example.com",
            login: {
              uuid: "875502b4-0fc1-45e0-9fe9-ec03b220d83b",
              username: "purplemeercat888",
              password: "chuai",
              salt: "cH0dusvD",
              md5: "ffcc4f7c3daec89f9a52965d65b3999d",
              sha1: "b49c36b87dbdf5447a5f8b23b914a4f8de7ff2b5",
              sha256: "2d1e1571d1185b912060f46919fd106eb74fc050c3d907277170adff9b46dae6"
            },
            dob: {
              date: "1949-04-20T05:38:18.130Z",
              age: 73
            },
            registered: {
              date: "2018-02-13T04:48:51.593Z",
              age: 4
            },
            phone: "(096) J64-6261",
            cell: "(068) F51-9621",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/27.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg"
            },
            nat: "UA"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Sergio",
              last: "Santiago"
            },
            location: {
              street: {
                number: 6872,
                name: "Avenida de Castilla"
              },
              city: "Santa Cruz de Tenerife",
              state: "Melilla",
              country: "Spain",
              postcode: 11875,
              coordinates: {
                latitude: "13.0686",
                longitude: "104.3757"
              },
              timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima"
              }
            },
            email: "sergio.santiago@example.com",
            login: {
              uuid: "503a31c3-0a44-4224-824b-12b4fd5efc21",
              username: "heavyrabbit486",
              password: "chef",
              salt: "bVebQssU",
              md5: "2f49d148c2241dd1c6bf0de3cf29fdac",
              sha1: "31db74315622ffb41852fe980701d59c749213b2",
              sha256: "3021ea7fcd10a815ac672a247c69137aa4b3793d5929eba4dfd790f713cce344"
            },
            dob: {
              date: "1979-04-23T03:23:42.977Z",
              age: 43
            },
            registered: {
              date: "2010-12-28T07:10:44.168Z",
              age: 12
            },
            phone: "955-544-059",
            cell: "694-939-816",
            id: {
              name: "DNI",
              value: "62738617-F"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/17.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/17.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/17.jpg"
            },
            nat: "ES"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Akash",
              last: "Sheikh"
            },
            location: {
              street: {
                number: 4977,
                name: "Shanmugham Rd"
              },
              city: "Parbhani",
              state: "Gujarat",
              country: "India",
              postcode: 54540,
              coordinates: {
                latitude: "9.2880",
                longitude: "76.0477"
              },
              timezone: {
                offset: "-9:00",
                description: "Alaska"
              }
            },
            email: "akash.sheikh@example.com",
            login: {
              uuid: "3b3308f0-5457-43a9-a1c4-75a693a34382",
              username: "sadlion715",
              password: "love",
              salt: "VcAa46rM",
              md5: "cfc5b2235cae2c5275dc25c549e9a1a0",
              sha1: "e5d45c5a6d3493a20d0a14400c9eea406465889b",
              sha256: "8d008cbd9088f7b5a6ecf0a00a074f1e02beab43e12e2cfda56bd7716b240fc8"
            },
            dob: {
              date: "1951-11-07T03:20:10.846Z",
              age: 71
            },
            registered: {
              date: "2014-11-18T00:45:27.935Z",
              age: 8
            },
            phone: "7306649432",
            cell: "7836214956",
            id: {
              name: "UIDAI",
              value: "111017449467"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/35.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg"
            },
            nat: "IN"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Andrea",
              last: "Thomsen"
            },
            location: {
              street: {
                number: 1497,
                name: "Grønnevej"
              },
              city: "Sundby/Erslev",
              state: "Midtjylland",
              country: "Denmark",
              postcode: 71183,
              coordinates: {
                latitude: "84.5587",
                longitude: "51.5972"
              },
              timezone: {
                offset: "-1:00",
                description: "Azores, Cape Verde Islands"
              }
            },
            email: "andrea.thomsen@example.com",
            login: {
              uuid: "3157fd3a-1cc0-40c1-8b44-b37c69628987",
              username: "sadpeacock617",
              password: "japanees",
              salt: "vi4nkWQJ",
              md5: "1a16ade894fa9600943c8d33f4b73fb3",
              sha1: "55e38ae7b535744704b36693be8890aaa3d0f410",
              sha256: "3ec7c280679e2ad2f2c286f7c0f0b26d4a0cf6e07a3b516187027bbd7d5cab22"
            },
            dob: {
              date: "1998-03-05T14:13:26.317Z",
              age: 24
            },
            registered: {
              date: "2020-03-21T03:42:05.580Z",
              age: 2
            },
            phone: "94295506",
            cell: "78806882",
            id: {
              name: "CPR",
              value: "050398-5944"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/44.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg"
            },
            nat: "DK"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Patrick",
              last: "Carter"
            },
            location: {
              street: {
                number: 3598,
                name: "King Street"
              },
              city: "York",
              state: "Tayside",
              country: "United Kingdom",
              postcode: "D71 4UH",
              coordinates: {
                latitude: "-13.2524",
                longitude: "-163.4381"
              },
              timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi"
              }
            },
            email: "patrick.carter@example.com",
            login: {
              uuid: "9ff7e5ee-1993-4c6e-a2b3-901d27db57c0",
              username: "angrymouse571",
              password: "concorde",
              salt: "Q0eiNXEf",
              md5: "14f2c0144a2527ac9f93dfbf29467046",
              sha1: "460bd8c287fdd7d6c69953c0e3cc5ad252ccb527",
              sha256: "d0f90397677f29c42f17b9d9878f77740080fa82c1bca773dd5819f459b59a7a"
            },
            dob: {
              date: "1977-09-23T01:30:42.921Z",
              age: 45
            },
            registered: {
              date: "2003-09-03T00:04:25.286Z",
              age: 19
            },
            phone: "016973 58875",
            cell: "07955 466814",
            id: {
              name: "NINO",
              value: "MN 54 78 83 C"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/92.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg"
            },
            nat: "GB"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Yeni",
              last: "Archuleta"
            },
            location: {
              street: {
                number: 2887,
                name: "Prolongación Norte Arce"
              },
              city: "Las Cañadas",
              state: "Veracruz",
              country: "Mexico",
              postcode: 10160,
              coordinates: {
                latitude: "-14.0518",
                longitude: "-175.7865"
              },
              timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi"
              }
            },
            email: "yeni.archuleta@example.com",
            login: {
              uuid: "ee498b9a-2a51-451a-96f7-443d5a327e8a",
              username: "sadbutterfly547",
              password: "blaine",
              salt: "eZq6Zge6",
              md5: "b2fbd05ce19d68247b17b0740bc0c5a0",
              sha1: "2809ca5cd4ba2e303baea6db4f983a97b90c7929",
              sha256: "25ea6a3623eb19af7965dd49f79578468a3cc5d06b0ddf4b389879aa7819723d"
            },
            dob: {
              date: "1954-08-11T02:43:58.982Z",
              age: 68
            },
            registered: {
              date: "2004-08-24T16:17:18.974Z",
              age: 18
            },
            phone: "(611) 656 8953",
            cell: "(603) 338 2358",
            id: {
              name: "NSS",
              value: "84 23 74 5181 4"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/77.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg"
            },
            nat: "MX"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Floyd",
              last: "White"
            },
            location: {
              street: {
                number: 2968,
                name: "Edwards Rd"
              },
              city: "Darwin",
              state: "Australian Capital Territory",
              country: "Australia",
              postcode: 9412,
              coordinates: {
                latitude: "-71.3766",
                longitude: "-130.9012"
              },
              timezone: {
                offset: "+9:00",
                description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
              }
            },
            email: "floyd.white@example.com",
            login: {
              uuid: "212b76f6-ab4b-41f6-a24d-7a52e32ca97b",
              username: "tinydog811",
              password: "redline",
              salt: "zWb74mCC",
              md5: "bbdc30c7dabe77bb99f8103b2f1bf95a",
              sha1: "557bec01257b322fdfd1a22c80f038a1a120f1d3",
              sha256: "86f0831e7a81c577d54227bdd70a4042952417877c0cb43043280a017cc826b2"
            },
            dob: {
              date: "1981-09-01T03:23:21.797Z",
              age: 41
            },
            registered: {
              date: "2009-07-17T07:14:34.602Z",
              age: 13
            },
            phone: "08-3076-6786",
            cell: "0429-999-320",
            id: {
              name: "TFN",
              value: "749862358"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/85.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg"
            },
            nat: "AU"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Adam",
              last: "Rinke"
            },
            location: {
              street: {
                number: 2158,
                name: "Uhlandstraße"
              },
              city: "Unterallgäu",
              state: "Niedersachsen",
              country: "Germany",
              postcode: 70390,
              coordinates: {
                latitude: "44.9504",
                longitude: "26.8980"
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic"
              }
            },
            email: "adam.rinke@example.com",
            login: {
              uuid: "fe7f73f9-819c-4cd0-aed3-8e6670b2954f",
              username: "brownmeercat188",
              password: "prince1",
              salt: "3MLRxjkD",
              md5: "cde348bb1c24012efc52c95b58673264",
              sha1: "f06616135bd6728cf5a5037bf449ddeb188ca621",
              sha256: "b4fd3c23f9397abfa4ce77f140fef28805becfc35d2799691cd3e9a00dceb05f"
            },
            dob: {
              date: "1981-11-17T01:33:52.714Z",
              age: 41
            },
            registered: {
              date: "2006-06-19T10:59:46.403Z",
              age: 16
            },
            phone: "0481-4306020",
            cell: "0175-5000649",
            id: {
              name: "SVNR",
              value: "45 161181 R 457"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/90.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg"
            },
            nat: "DE"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Zoran",
              last: "Vasić"
            },
            location: {
              street: {
                number: 2063,
                name: "Slavka Milićevića"
              },
              city: "Opovo",
              state: "Srem",
              country: "Serbia",
              postcode: 72787,
              coordinates: {
                latitude: "66.8705",
                longitude: "174.7324"
              },
              timezone: {
                offset: "-9:00",
                description: "Alaska"
              }
            },
            email: "zoran.vasic@example.com",
            login: {
              uuid: "af12ac71-40a8-491e-b33c-20d5af2bf3dd",
              username: "bluegoose678",
              password: "magician",
              salt: "ODp1kz2G",
              md5: "51035f3e39dcc3b69996e30fc5c44864",
              sha1: "9d2ccfde829c1a0229ee7d83d421d78c75312ba6",
              sha256: "209179875fd8718d91f8a446588ad174c915cd1348da888ab46a4996d714e525"
            },
            dob: {
              date: "1955-03-06T04:54:42.093Z",
              age: 67
            },
            registered: {
              date: "2020-10-13T07:33:42.023Z",
              age: 2
            },
            phone: "024-3600-306",
            cell: "066-1248-942",
            id: {
              name: "SID",
              value: "135030042"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/56.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg"
            },
            nat: "RS"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Ethel",
              last: "Day"
            },
            location: {
              street: {
                number: 9298,
                name: "Ash Dr"
              },
              city: "Eugene",
              state: "Idaho",
              country: "United States",
              postcode: 94365,
              coordinates: {
                latitude: "-36.1325",
                longitude: "153.9015"
              },
              timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City"
              }
            },
            email: "ethel.day@example.com",
            login: {
              uuid: "586c520e-992d-482e-9dbd-29e1ca704210",
              username: "browngorilla657",
              password: "romans",
              salt: "72HiGo8r",
              md5: "d15e5d9cfd61c2cb710510c9d9db0f39",
              sha1: "5cce858e2e12d3012ee70d416335283ffcbade6a",
              sha256: "dd7c169eeb45e9b433bde40d7fbfdf1cd56417f27fa6f30b0ac66a05a6af9ccc"
            },
            dob: {
              date: "1950-10-21T05:33:41.626Z",
              age: 72
            },
            registered: {
              date: "2007-07-14T03:32:45.047Z",
              age: 15
            },
            phone: "(624) 251-8359",
            cell: "(949) 841-4502",
            id: {
              name: "SSN",
              value: "768-42-4791"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/25.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg"
            },
            nat: "US"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Jeanne",
              last: "Denys"
            },
            location: {
              street: {
                number: 6581,
                name: "Alfred St"
              },
              city: "Beaumont",
              state: "New Brunswick",
              country: "Canada",
              postcode: "S0P 9H9",
              coordinates: {
                latitude: "-8.8425",
                longitude: "44.8056"
              },
              timezone: {
                offset: "-3:00",
                description: "Brazil, Buenos Aires, Georgetown"
              }
            },
            email: "jeanne.denys@example.com",
            login: {
              uuid: "6d1b7e41-a59d-4dc8-9b88-8799045dd7d7",
              username: "blackgorilla942",
              password: "benfica",
              salt: "NHgxMZtg",
              md5: "ef8474ee0dc177077f53423580fdf103",
              sha1: "12311049eda8d7074ae643719825a3e07d5c191d",
              sha256: "7db901617e638258b8047418d8c1378564bff6c5ef892ccc41307d76d80cb5ed"
            },
            dob: {
              date: "1985-06-30T01:19:43.329Z",
              age: 37
            },
            registered: {
              date: "2015-11-13T02:12:24.803Z",
              age: 7
            },
            phone: "Z49 T42-8325",
            cell: "K49 Z92-0072",
            id: {
              name: "SIN",
              value: "990712333"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/89.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg"
            },
            nat: "CA"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Celia",
              last: "Molina"
            },
            location: {
              street: {
                number: 5369,
                name: "Calle Nebrija"
              },
              city: "Bilbao",
              state: "Melilla",
              country: "Spain",
              postcode: 48253,
              coordinates: {
                latitude: "-63.8785",
                longitude: "-164.3626"
              },
              timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa"
              }
            },
            email: "celia.molina@example.com",
            login: {
              uuid: "8435096c-f9d2-472c-a934-8e00c88f896a",
              username: "blackfish101",
              password: "sherry",
              salt: "WlTS6KV9",
              md5: "65df1c7e0d3b18b4ed875da5a3a8cbf7",
              sha1: "866cff280ae144fc437c55edb69968ed07c277ae",
              sha256: "31e3986e530404895a55e45c5ee5d0b956b8c1b0d6facfb193bd29adca111290"
            },
            dob: {
              date: "2000-12-09T02:41:10.080Z",
              age: 22
            },
            registered: {
              date: "2018-05-29T15:01:00.392Z",
              age: 4
            },
            phone: "942-906-522",
            cell: "690-755-146",
            id: {
              name: "DNI",
              value: "55383337-S"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/21.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg"
            },
            nat: "ES"
          },
          {
            gender: "male",
            name: {
              title: "Monsieur",
              first: "Jean-Pierre",
              last: "Fournier"
            },
            location: {
              street: {
                number: 6051,
                name: "Avenue des Ternes"
              },
              city: "Agno",
              state: "Graubünden",
              country: "Switzerland",
              postcode: 8772,
              coordinates: {
                latitude: "26.9846",
                longitude: "136.2119"
              },
              timezone: {
                offset: "+11:00",
                description: "Magadan, Solomon Islands, New Caledonia"
              }
            },
            email: "jean-pierre.fournier@example.com",
            login: {
              uuid: "161a310a-cddd-4a2b-a6c4-7165d831f5aa",
              username: "angryelephant267",
              password: "4128",
              salt: "lR3aP9U1",
              md5: "2819a72eb7a70458285cdbf9cdd72e7f",
              sha1: "0b80fbc9bcc6e16e172bb4abfc371fa62f2ba2bc",
              sha256: "fd5b6bdcbc12d233ff7e9077a7de47505cfd2d0011bb92b0781123a2805b1688"
            },
            dob: {
              date: "1973-12-26T02:03:16.667Z",
              age: 49
            },
            registered: {
              date: "2008-01-30T22:02:42.585Z",
              age: 15
            },
            phone: "079 063 30 49",
            cell: "078 415 09 75",
            id: {
              name: "AVS",
              value: "756.6315.6608.16"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/19.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/19.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/19.jpg"
            },
            nat: "CH"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Stephanus",
              last: "Hoving"
            },
            location: {
              street: {
                number: 3840,
                name: "Kapelaan Poellplein"
              },
              city: "Meeuwen",
              state: "Zuid-Holland",
              country: "Netherlands",
              postcode: "8641 VB",
              coordinates: {
                latitude: "-18.0232",
                longitude: "-174.4284"
              },
              timezone: {
                offset: "+7:00",
                description: "Bangkok, Hanoi, Jakarta"
              }
            },
            email: "stephanus.hoving@example.com",
            login: {
              uuid: "27529657-897b-4dd4-9a8f-0ab4e7e01d4e",
              username: "blackrabbit177",
              password: "sound",
              salt: "jU48QMme",
              md5: "6328ef87492ca15a80298a3e300fdef7",
              sha1: "b398bf212670c3d8acbbc177def54c53dd1305a0",
              sha256: "415ead4b3c8851beeea8842f6e6535895696a92f77bbef6e941f7d6a0f8966d4"
            },
            dob: {
              date: "1946-10-05T01:27:34.967Z",
              age: 76
            },
            registered: {
              date: "2006-09-14T18:40:08.001Z",
              age: 16
            },
            phone: "(0471) 309612",
            cell: "(06) 30622779",
            id: {
              name: "BSN",
              value: "38038264"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/78.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg"
            },
            nat: "NL"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Alice",
              last: "Melgård"
            },
            location: {
              street: {
                number: 4749,
                name: "Bjørnehiet"
              },
              city: "Skomrak",
              state: "Nordland",
              country: "Norway",
              postcode: "0169",
              coordinates: {
                latitude: "58.8246",
                longitude: "-139.5431"
              },
              timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi"
              }
            },
            email: "alice.melgard@example.com",
            login: {
              uuid: "1e2b1721-c22a-48ad-b960-556d359ce635",
              username: "blackbear220",
              password: "mindy",
              salt: "t82qK7Vr",
              md5: "8ae1db157dfdd7b3ce77ec9d96230433",
              sha1: "124bb35eb5bcb37a04a527c9eafcf620afb1a9a2",
              sha256: "241fd814fc76b800026ef8b9400add7c11b3e89df8235515d8f2e1d4cba57f69"
            },
            dob: {
              date: "1981-09-14T23:18:37.345Z",
              age: 41
            },
            registered: {
              date: "2012-06-22T14:34:51.333Z",
              age: 10
            },
            phone: "74764715",
            cell: "46045468",
            id: {
              name: "FN",
              value: "14098139657"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/74.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/74.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/74.jpg"
            },
            nat: "NO"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Noah",
              last: "Andersen"
            },
            location: {
              street: {
                number: 7136,
                name: "Søbakken"
              },
              city: "Snertinge",
              state: "Sjælland",
              country: "Denmark",
              postcode: 35074,
              coordinates: {
                latitude: "51.2159",
                longitude: "-19.0313"
              },
              timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok"
              }
            },
            email: "noah.andersen@example.com",
            login: {
              uuid: "92d27035-fe43-451b-ac0f-e377bd2ca5de",
              username: "orangesnake473",
              password: "ingrid",
              salt: "vEXoP9fl",
              md5: "e5642a49d80dd7fefc31c5b672541a88",
              sha1: "8ede0edc7fab7c66157e6eb8c11f94c86ab00da6",
              sha256: "e7a72ddafa1d9fb35ab78a65f2d0aa508ad3f7af346a0f15079274c52d741297"
            },
            dob: {
              date: "1971-07-31T06:42:41.378Z",
              age: 51
            },
            registered: {
              date: "2004-04-02T23:26:31.564Z",
              age: 18
            },
            phone: "74998340",
            cell: "50106835",
            id: {
              name: "CPR",
              value: "310771-8555"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/68.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg"
            },
            nat: "DK"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Barbara",
              last: "Perry"
            },
            location: {
              street: {
                number: 8402,
                name: "Herbert Road"
              },
              city: "Ballybofey-Stranorlar",
              state: "Offaly",
              country: "Ireland",
              postcode: 74472,
              coordinates: {
                latitude: "-28.7078",
                longitude: "-148.4371"
              },
              timezone: {
                offset: "-5:00",
                description: "Eastern Time (US & Canada), Bogota, Lima"
              }
            },
            email: "barbara.perry@example.com",
            login: {
              uuid: "ba9bd93e-ffe5-440b-bfd9-458df310b63e",
              username: "silvermouse717",
              password: "lucille",
              salt: "z0OZIuCA",
              md5: "d6a679a5e031d462e4f0411e67f1b890",
              sha1: "8dd88ddccc26590598164b9404d0e5af8b6c5d85",
              sha256: "8dfeb971e40d8936ea6aba169b1be7bb968f1cb051895b7a0528edba6cfa720a"
            },
            dob: {
              date: "1986-06-04T17:27:27.575Z",
              age: 36
            },
            registered: {
              date: "2003-06-09T17:40:19.993Z",
              age: 19
            },
            phone: "051-663-9845",
            cell: "081-363-3707",
            id: {
              name: "PPS",
              value: "7577139T"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/43.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg"
            },
            nat: "IE"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Fernando",
              last: "Osullivan"
            },
            location: {
              street: {
                number: 9408,
                name: "North Street"
              },
              city: "Navan",
              state: "South Dublin",
              country: "Ireland",
              postcode: 12177,
              coordinates: {
                latitude: "70.0353",
                longitude: "8.5757"
              },
              timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong"
              }
            },
            email: "fernando.osullivan@example.com",
            login: {
              uuid: "ae99b622-7b49-41a3-a7c2-641a03088010",
              username: "yellowbutterfly620",
              password: "martine",
              salt: "0svqy51G",
              md5: "347aa26b2c2a78a9ec86b7d2f54b0083",
              sha1: "bd41ff523399010540a9a45e4010527c1290eb00",
              sha256: "27bdb2c7ecc056f0f240768510b3610dcd29a3d64666ca826bfbbe09d5f00026"
            },
            dob: {
              date: "1998-10-26T06:36:28.862Z",
              age: 24
            },
            registered: {
              date: "2012-02-07T18:55:58.081Z",
              age: 10
            },
            phone: "021-548-7750",
            cell: "081-991-7511",
            id: {
              name: "PPS",
              value: "0806847T"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/81.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
            },
            nat: "IE"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Teodemiro",
              last: "Melo"
            },
            location: {
              street: {
                number: 4087,
                name: "Rua Duque de Caxias "
              },
              city: "São Vicente",
              state: "Rondônia",
              country: "Brazil",
              postcode: 94978,
              coordinates: {
                latitude: "33.0939",
                longitude: "-24.7563"
              },
              timezone: {
                offset: "-3:00",
                description: "Brazil, Buenos Aires, Georgetown"
              }
            },
            email: "teodemiro.melo@example.com",
            login: {
              uuid: "e6ebd7fe-13c9-4dba-b3d2-6d8936a2e966",
              username: "bigrabbit820",
              password: "football",
              salt: "vVGBf3eK",
              md5: "76a007a12695a1022e31a4a4e5a16169",
              sha1: "222084d8df2730ae80dc4f3383be25c4d644df4b",
              sha256: "74884875254c3b2b26a98b57d882ed8c17a0d215220b8cc7c6df09af80d2fdc5"
            },
            dob: {
              date: "1989-03-06T18:57:13.953Z",
              age: 33
            },
            registered: {
              date: "2009-08-24T01:34:42.527Z",
              age: 13
            },
            phone: "(71) 8618-4187",
            cell: "(66) 6226-3415",
            id: {
              name: "CPF",
              value: "559.322.010-35"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/32.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
            },
            nat: "BR"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Noah",
              last: "Van Riet"
            },
            location: {
              street: {
                number: 7038,
                name: "Henk van Riessenlaan"
              },
              city: "Oud-Beijerland",
              state: "Drenthe",
              country: "Netherlands",
              postcode: "1963 VD",
              coordinates: {
                latitude: "-18.8598",
                longitude: "45.9244"
              },
              timezone: {
                offset: "+5:30",
                description: "Bombay, Calcutta, Madras, New Delhi"
              }
            },
            email: "noah.vanriet@example.com",
            login: {
              uuid: "01419914-6cf7-4314-8051-063f95303e04",
              username: "purpledog969",
              password: "troll",
              salt: "aHcuiX5b",
              md5: "b8f07d900756457cefbe42b25ed32884",
              sha1: "e208445e7c8d195749e47f48e19f3dffc2cc6662",
              sha256: "8ec6fd6beb8013d48378eadb4f7cab495b5defc9a4c7e8867180f98ff46df0c6"
            },
            dob: {
              date: "1998-11-23T06:05:56.220Z",
              age: 24
            },
            registered: {
              date: "2019-01-28T01:08:24.485Z",
              age: 4
            },
            phone: "(0590) 439728",
            cell: "(06) 60586979",
            id: {
              name: "BSN",
              value: "67369072"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/1.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg"
            },
            nat: "NL"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Petter",
              last: "Hjelmeland"
            },
            location: {
              street: {
                number: 1235,
                name: "Skausnaret"
              },
              city: "Storebø",
              state: "Aust-Agder",
              country: "Norway",
              postcode: "7732",
              coordinates: {
                latitude: "-49.1876",
                longitude: "157.4610"
              },
              timezone: {
                offset: "+10:00",
                description: "Eastern Australia, Guam, Vladivostok"
              }
            },
            email: "petter.hjelmeland@example.com",
            login: {
              uuid: "ed8283f4-c369-4144-9361-81c58ff7fd63",
              username: "angryfrog481",
              password: "medic",
              salt: "rQIiILiG",
              md5: "960c7fb639b5911705b224643a5b5de0",
              sha1: "2d46688837656f414ded8e3919d6f813c614759a",
              sha256: "6fdb11b0f5347f1977b593007c9e791823ba9be46223fc8bc04192564ae80f76"
            },
            dob: {
              date: "1944-10-30T02:39:07.072Z",
              age: 78
            },
            registered: {
              date: "2008-12-03T04:12:35.890Z",
              age: 14
            },
            phone: "30038089",
            cell: "45092782",
            id: {
              name: "FN",
              value: "30104439701"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/34.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg"
            },
            nat: "NO"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Juvenal",
              last: "Ribeiro"
            },
            location: {
              street: {
                number: 3302,
                name: "Rua Dezenove de Outubro"
              },
              city: "Mogi Guaçu",
              state: "Bahia",
              country: "Brazil",
              postcode: 22176,
              coordinates: {
                latitude: "-15.6997",
                longitude: "17.8704"
              },
              timezone: {
                offset: "-6:00",
                description: "Central Time (US & Canada), Mexico City"
              }
            },
            email: "juvenal.ribeiro@example.com",
            login: {
              uuid: "04f3e981-e59c-4ae6-87bf-12a9405a1041",
              username: "greenmouse471",
              password: "mohammed",
              salt: "yHwZBqgj",
              md5: "328a271958b8e45522f25d83b557eb3a",
              sha1: "cbda126f20e0949e92c7652cba69417f23b84d21",
              sha256: "61c98c78719459ee6f3d2a1c41cbcb89646336dd08c5b18de8ea5fa94e9b921d"
            },
            dob: {
              date: "1954-05-05T20:17:22.835Z",
              age: 68
            },
            registered: {
              date: "2003-02-24T22:35:10.628Z",
              age: 19
            },
            phone: "(29) 3335-3556",
            cell: "(48) 1208-1369",
            id: {
              name: "CPF",
              value: "118.315.493-97"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/48.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg"
            },
            nat: "BR"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Levi",
              last: "Carvalho"
            },
            location: {
              street: {
                number: 330,
                name: "Rua Um"
              },
              city: "Piracicaba",
              state: "Paraná",
              country: "Brazil",
              postcode: 62172,
              coordinates: {
                latitude: "23.7085",
                longitude: "13.4742"
              },
              timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
            },
            email: "levi.carvalho@example.com",
            login: {
              uuid: "169d5122-6eba-4ef7-bc63-d53866ffe400",
              username: "blueleopard704",
              password: "overkill",
              salt: "pFvWXNoO",
              md5: "c62eb81c82590b626a02cb13761af7ee",
              sha1: "b68b444881e54fd74285937e58db4acf206c8359",
              sha256: "75183564a4352cba51aa7f47f4b7c6989bbcd9500ede06ec181bdcebdd8439a3"
            },
            dob: {
              date: "1996-08-30T02:06:15.848Z",
              age: 26
            },
            registered: {
              date: "2015-07-09T10:51:55.418Z",
              age: 7
            },
            phone: "(80) 8575-2610",
            cell: "(37) 7596-1880",
            id: {
              name: "CPF",
              value: "709.089.888-64"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/65.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
            },
            nat: "BR"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Nikolina",
              last: "Jevtić"
            },
            location: {
              street: {
                number: 2173,
                name: "Četvrtog Jula"
              },
              city: "Majdanpek",
              state: "Central Banat",
              country: "Serbia",
              postcode: 44135,
              coordinates: {
                latitude: "40.5703",
                longitude: "-82.5908"
              },
              timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz"
              }
            },
            email: "nikolina.jevtic@example.com",
            login: {
              uuid: "fd4af0f6-35d9-4b67-86fe-e1b14555b09f",
              username: "organicswan157",
              password: "dannyboy",
              salt: "enDWvnQV",
              md5: "a83b547309a69e3f206983fa8abc6e33",
              sha1: "793468201201c2ec6b7533d5ba7a8ee066b2c31b",
              sha256: "49738d8b9fafcf0095dfdefbd3787bb178b0df3cac447a30c47789bc4849bd9b"
            },
            dob: {
              date: "1951-09-02T06:02:52.551Z",
              age: 71
            },
            registered: {
              date: "2004-07-31T03:31:56.168Z",
              age: 18
            },
            phone: "035-9635-771",
            cell: "067-1105-277",
            id: {
              name: "SID",
              value: "740834712"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/4.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg"
            },
            nat: "RS"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Leo",
              last: "Anderson"
            },
            location: {
              street: {
                number: 7276,
                name: "Botany Road"
              },
              city: "Invercargill",
              state: "Otago",
              country: "New Zealand",
              postcode: 23115,
              coordinates: {
                latitude: "-35.4217",
                longitude: "146.1398"
              },
              timezone: {
                offset: "-3:00",
                description: "Brazil, Buenos Aires, Georgetown"
              }
            },
            email: "leo.anderson@example.com",
            login: {
              uuid: "4a39288e-1c6c-42bb-a9cf-c240fc373f1a",
              username: "redpeacock242",
              password: "sooner",
              salt: "Um7nebjf",
              md5: "0ab748ebcc46aea11d566df8ce10fbc9",
              sha1: "42027d0a712bdf5f58ca5bbc1aeb36da7ac4c00f",
              sha256: "92fdfaefae37fe46946279d9d0f3bc3b54e501ab88bbde78c111d0d9d6171548"
            },
            dob: {
              date: "1996-01-09T06:36:35.809Z",
              age: 27
            },
            registered: {
              date: "2009-06-02T21:08:14.468Z",
              age: 13
            },
            phone: "(295)-359-2647",
            cell: "(495)-999-8147",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/86.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg"
            },
            nat: "NZ"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Buse",
              last: "Tuğluk"
            },
            location: {
              street: {
                number: 8468,
                name: "Istiklal Cd"
              },
              city: "Kahramanmaraş",
              state: "Aksaray",
              country: "Turkey",
              postcode: 33861,
              coordinates: {
                latitude: "13.7925",
                longitude: "-107.8568"
              },
              timezone: {
                offset: "+2:00",
                description: "Kaliningrad, South Africa"
              }
            },
            email: "buse.tugluk@example.com",
            login: {
              uuid: "3f0b8916-a895-4e55-9bb2-675f9005d3bd",
              username: "greenduck425",
              password: "wilson",
              salt: "ghOXQK93",
              md5: "82a693ee359ac5f38013f403312cb77b",
              sha1: "4f60271e794bbb478bfe0be37d4d5d3298d7ae15",
              sha256: "40a37f7215dc1bb399bc26723915f452c57b15f58b76582fdf6655757a143221"
            },
            dob: {
              date: "1945-11-30T09:36:09.378Z",
              age: 77
            },
            registered: {
              date: "2005-12-16T11:08:33.696Z",
              age: 17
            },
            phone: "(816)-326-4526",
            cell: "(030)-016-8067",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/71.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg"
            },
            nat: "TR"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Niilo",
              last: "Laurila"
            },
            location: {
              street: {
                number: 1801,
                name: "Hämeenkatu"
              },
              city: "Posio",
              state: "Pirkanmaa",
              country: "Finland",
              postcode: 73114,
              coordinates: {
                latitude: "-89.1058",
                longitude: "61.8855"
              },
              timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
            },
            email: "niilo.laurila@example.com",
            login: {
              uuid: "fcd00428-43df-4195-a07f-c6280fb9a518",
              username: "happyduck209",
              password: "butterfl",
              salt: "OSFsMhQQ",
              md5: "f0ae6f76327f62be02719a60a852af4b",
              sha1: "196440426881aff236c4d64ea1e3d341d3f90976",
              sha256: "8922ebd54379d34c14d1f26050d848967996f4a81620a0f3dd11b281318b893c"
            },
            dob: {
              date: "1989-04-11T08:01:18.831Z",
              age: 33
            },
            registered: {
              date: "2017-02-06T02:46:55.851Z",
              age: 6
            },
            phone: "09-513-150",
            cell: "045-854-73-16",
            id: {
              name: "HETU",
              value: "NaNNA883undefined"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/86.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg"
            },
            nat: "FI"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Bojana",
              last: "Vujčić"
            },
            location: {
              street: {
                number: 4674,
                name: "Gavre Plavšića"
              },
              city: "Knić",
              state: "Srem",
              country: "Serbia",
              postcode: 31067,
              coordinates: {
                latitude: "19.5826",
                longitude: "67.9596"
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic"
              }
            },
            email: "bojana.vujcic@example.com",
            login: {
              uuid: "0c1ab5d5-d6e8-4fd2-befb-931d2c103c96",
              username: "smallgorilla896",
              password: "greenbay",
              salt: "Zrc9nYq4",
              md5: "fd86fbf338762a4b5eab7ec4a73e477e",
              sha1: "899735d1ed74e5813ea875c4faa76390d5e21863",
              sha256: "b471cc0bbcae9731918fcc9e5c24bab23473074ab5e89c4c701ff7d7a6549e0d"
            },
            dob: {
              date: "1997-09-23T01:02:59.306Z",
              age: 25
            },
            registered: {
              date: "2014-06-03T12:50:25.703Z",
              age: 8
            },
            phone: "014-9890-117",
            cell: "063-1092-687",
            id: {
              name: "SID",
              value: "477326592"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/42.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg"
            },
            nat: "RS"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Marizete",
              last: "Dias"
            },
            location: {
              street: {
                number: 1014,
                name: "Rua Três"
              },
              city: "Resende",
              state: "Minas Gerais",
              country: "Brazil",
              postcode: 11862,
              coordinates: {
                latitude: "-60.8041",
                longitude: "-97.2923"
              },
              timezone: {
                offset: "+9:30",
                description: "Adelaide, Darwin"
              }
            },
            email: "marizete.dias@example.com",
            login: {
              uuid: "a2bd76c2-40ea-434c-9093-3cbe5d15d397",
              username: "smallladybug120",
              password: "magick",
              salt: "S2obAh0J",
              md5: "cb5e20e4d5abcecc7e5f964cb728f392",
              sha1: "af21573b24605da60b07bbda19610d7fe524bfe0",
              sha256: "d83a3556489fd0383b3e3a33b2aa7e1c6bac8c5dadd4bcea0b6c6502caff194d"
            },
            dob: {
              date: "1976-03-04T07:12:01.472Z",
              age: 46
            },
            registered: {
              date: "2011-06-23T22:47:41.857Z",
              age: 11
            },
            phone: "(40) 6578-8663",
            cell: "(18) 1233-4872",
            id: {
              name: "CPF",
              value: "642.360.679-85"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/66.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/66.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/66.jpg"
            },
            nat: "BR"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Katrin",
              last: "Caron"
            },
            location: {
              street: {
                number: 6483,
                name: "Ir.Lelystraat"
              },
              city: "Den Burg",
              state: "Overijssel",
              country: "Netherlands",
              postcode: "9332 ZV",
              coordinates: {
                latitude: "68.8021",
                longitude: "67.7136"
              },
              timezone: {
                offset: "+5:45",
                description: "Kathmandu"
              }
            },
            email: "katrin.caron@example.com",
            login: {
              uuid: "62c0be08-bb71-4b7b-9fd4-9fc49202a8cb",
              username: "brownbutterfly132",
              password: "beerman",
              salt: "wGARLgYc",
              md5: "f66e34a09dfa526b778f3fc60b126b38",
              sha1: "5f21e8431dfa0b8df4166fe7cfaf557fdae1d2d8",
              sha256: "0f9a7c022a6564584254fa53f933c015ddb901237b02e33cbf9a8b992252c694"
            },
            dob: {
              date: "1946-05-28T23:30:55.224Z",
              age: 76
            },
            registered: {
              date: "2013-04-21T22:06:05.836Z",
              age: 9
            },
            phone: "(031) 0752675",
            cell: "(06) 43004048",
            id: {
              name: "BSN",
              value: "23924246"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/10.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg"
            },
            nat: "NL"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Ognjen",
              last: "Vidaković"
            },
            location: {
              street: {
                number: 4369,
                name: "Braće Jelića"
              },
              city: "Čačak",
              state: "Bor",
              country: "Serbia",
              postcode: 80367,
              coordinates: {
                latitude: "-13.7606",
                longitude: "91.3495"
              },
              timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong"
              }
            },
            email: "ognjen.vidakovic@example.com",
            login: {
              uuid: "a6b29691-697b-4d73-845b-0fbdcd457c3a",
              username: "yellowelephant447",
              password: "woowoo",
              salt: "XWVc42A3",
              md5: "e2cc676d46fa2e203af33aea40557041",
              sha1: "87a60a5395ead668adb5d99f39ea92fcf9172b80",
              sha256: "ee14d009d8e1b8d61839541e0c6cedba299c6497538e956f1a5a2f32987bb82a"
            },
            dob: {
              date: "1960-10-29T15:02:44.385Z",
              age: 62
            },
            registered: {
              date: "2014-07-10T20:39:38.339Z",
              age: 8
            },
            phone: "018-8808-945",
            cell: "065-8246-336",
            id: {
              name: "SID",
              value: "088261436"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/68.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg"
            },
            nat: "RS"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Alicia",
              last: "Chevalier"
            },
            location: {
              street: {
                number: 9584,
                name: "Avenue Paul Eluard"
              },
              city: "Tourcoing",
              state: "Vaucluse",
              country: "France",
              postcode: 55654,
              coordinates: {
                latitude: "86.9644",
                longitude: "-145.8347"
              },
              timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi"
              }
            },
            email: "alicia.chevalier@example.com",
            login: {
              uuid: "278d671a-b6fe-4d47-8812-1ad68e888792",
              username: "organicwolf914",
              password: "336699",
              salt: "pqei2Zor",
              md5: "73eba9b40a404d77f266cb941107bb84",
              sha1: "b2dc1ae38fbfa87b470379a26166fbf4113964ac",
              sha256: "ee8bb1bd5c39d1afaca6b580e87f8b9cbe13861ad867770f9bef6011c12c4434"
            },
            dob: {
              date: "1989-07-07T20:02:44.095Z",
              age: 33
            },
            registered: {
              date: "2014-01-09T22:16:42.896Z",
              age: 9
            },
            phone: "02-60-99-77-60",
            cell: "06-80-54-79-22",
            id: {
              name: "INSEE",
              value: "2890609885314 53"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/17.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            nat: "FR"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Shannon",
              last: "Bryant"
            },
            location: {
              street: {
                number: 99,
                name: "Wycliff Ave"
              },
              city: "South Bend",
              state: "Alaska",
              country: "United States",
              postcode: 55619,
              coordinates: {
                latitude: "39.6909",
                longitude: "100.6065"
              },
              timezone: {
                offset: "0:00",
                description: "Western Europe Time, London, Lisbon, Casablanca"
              }
            },
            email: "shannon.bryant@example.com",
            login: {
              uuid: "3d41bb6f-ad85-4768-8aab-07a9a6ed686a",
              username: "lazycat147",
              password: "socks",
              salt: "JGtGrOpZ",
              md5: "faa4454d1641c811a336eddd1d6e643d",
              sha1: "243f3a42025847860e647daad8f2808fd3ce0976",
              sha256: "7808a85624c2c8644b7d9cf49a2123d0675a6dd36a441b10dd5e4ab6cd928cf5"
            },
            dob: {
              date: "1966-07-28T19:08:38.333Z",
              age: 56
            },
            registered: {
              date: "2022-04-16T20:35:25.893Z",
              age: 0
            },
            phone: "(955) 495-3930",
            cell: "(798) 281-6605",
            id: {
              name: "SSN",
              value: "002-35-1959"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/50.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg"
            },
            nat: "US"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Kirilo",
              last: "Borojević"
            },
            location: {
              street: {
                number: 2143,
                name: "Porodice Petrović"
              },
              city: "Bečej",
              state: "Šumadija",
              country: "Serbia",
              postcode: 21110,
              coordinates: {
                latitude: "-29.9959",
                longitude: "-49.8925"
              },
              timezone: {
                offset: "-8:00",
                description: "Pacific Time (US & Canada)"
              }
            },
            email: "kirilo.borojevic@example.com",
            login: {
              uuid: "b0cb8cb2-6f82-45bd-b8bc-0f4546ed89f1",
              username: "organicelephant748",
              password: "redskins",
              salt: "EmiY1bJb",
              md5: "3ca6c9effbe7990c500cc3fa5d40bcbf",
              sha1: "dc90b449ec3208a174c1b203dacc6904db53017a",
              sha256: "98cc5b18a262e671996179a178917d15d26f832d1ba30947c7c5843b65ea1588"
            },
            dob: {
              date: "1966-08-13T07:23:48.227Z",
              age: 56
            },
            registered: {
              date: "2009-12-13T04:48:53.295Z",
              age: 13
            },
            phone: "035-0839-326",
            cell: "067-8702-771",
            id: {
              name: "SID",
              value: "600109861"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/81.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
            },
            nat: "RS"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Jagdish",
              last: "Shenoy"
            },
            location: {
              street: {
                number: 5826,
                name: "Santhekatte"
              },
              city: "Nangloi Jat",
              state: "Dadra and Nagar Haveli",
              country: "India",
              postcode: 48205,
              coordinates: {
                latitude: "14.0934",
                longitude: "163.5779"
              },
              timezone: {
                offset: "-10:00",
                description: "Hawaii"
              }
            },
            email: "jagdish.shenoy@example.com",
            login: {
              uuid: "7d487cbc-81ff-41c8-910d-0ad6b05e9565",
              username: "yellowduck995",
              password: "times",
              salt: "rtxEL7Kz",
              md5: "5881f912db8f08fe0cb4a675d6e03ee7",
              sha1: "52e970fef04df4b16543eeb2cc0c6591580d02df",
              sha256: "aef87dbfec483ba7273ab85322d4b6608ac3b2c44728c6f1790cc18473bf2a6e"
            },
            dob: {
              date: "1953-08-01T20:23:52.551Z",
              age: 69
            },
            registered: {
              date: "2009-05-02T20:58:24.587Z",
              age: 13
            },
            phone: "8687016329",
            cell: "9604142623",
            id: {
              name: "UIDAI",
              value: "308108016327"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/83.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            },
            nat: "IN"
          },
          {
            gender: "female",
            name: {
              title: "Miss",
              first: "Mirna",
              last: "Janković"
            },
            location: {
              street: {
                number: 7218,
                name: "Dositeja Obradovića"
              },
              city: "Odžaci",
              state: "Raška",
              country: "Serbia",
              postcode: 34900,
              coordinates: {
                latitude: "70.5637",
                longitude: "110.8053"
              },
              timezone: {
                offset: "+8:00",
                description: "Beijing, Perth, Singapore, Hong Kong"
              }
            },
            email: "mirna.jankovic@example.com",
            login: {
              uuid: "f5c871e1-951c-4cc5-9b2d-a1c73dcaba34",
              username: "tinysnake303",
              password: "labrador",
              salt: "lsk1D0w0",
              md5: "9b223d49100d5c1f91d18de87a832079",
              sha1: "1953cbba311c20b1366c12d8920394c94f26dcad",
              sha256: "f125eb9d5eb102ee25226d922463ede3aaa177147830c4a236636b792d8642c9"
            },
            dob: {
              date: "1961-11-02T04:53:07.973Z",
              age: 61
            },
            registered: {
              date: "2008-05-24T10:17:32.517Z",
              age: 14
            },
            phone: "031-6555-990",
            cell: "062-3483-155",
            id: {
              name: "SID",
              value: "386230249"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/17.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            nat: "RS"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Eleonora",
              last: "Borjan"
            },
            location: {
              street: {
                number: 7301,
                name: "Vase Savića "
              },
              city: "Petrovac na Mlavi",
              state: "Toplica",
              country: "Serbia",
              postcode: 71207,
              coordinates: {
                latitude: "31.5570",
                longitude: "-52.4211"
              },
              timezone: {
                offset: "-3:30",
                description: "Newfoundland"
              }
            },
            email: "eleonora.borjan@example.com",
            login: {
              uuid: "62889f54-3020-458a-8bd2-bbba1708052c",
              username: "happygorilla525",
              password: "again",
              salt: "FRlZlIT7",
              md5: "1f48fd7f31ad655e3a0e355224b69987",
              sha1: "c82a39a2dcdfe70c2c1618b598bf2621308fb513",
              sha256: "bcf70190848ac27570d4e8726eac35e9b7bbb6b59deaacc719c59eeeb32faa59"
            },
            dob: {
              date: "1956-07-30T06:38:53.380Z",
              age: 66
            },
            registered: {
              date: "2012-02-03T17:25:07.293Z",
              age: 11
            },
            phone: "027-0449-147",
            cell: "069-4118-140",
            id: {
              name: "SID",
              value: "906057552"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/54.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg"
            },
            nat: "RS"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Catherine",
              last: "Jones"
            },
            location: {
              street: {
                number: 2359,
                name: "Mockingbird Hill"
              },
              city: "Albury",
              state: "Victoria",
              country: "Australia",
              postcode: 313,
              coordinates: {
                latitude: "75.2773",
                longitude: "-169.8045"
              },
              timezone: {
                offset: "+5:00",
                description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
              }
            },
            email: "catherine.jones@example.com",
            login: {
              uuid: "e92ffd01-0653-44d5-a8e0-76fb4e8a09ea",
              username: "silverbird497",
              password: "2000",
              salt: "nhhw4Cqr",
              md5: "1fb4458dd32353299c478fb18128b271",
              sha1: "71a6ef925d51e56b5422622fa3afe55b37bc5bf7",
              sha256: "8a8ea32bea13e82ad7eee5a409ccbd8d40d55858509d039112fb35e6ae76f2c5"
            },
            dob: {
              date: "1996-12-17T15:59:51.647Z",
              age: 26
            },
            registered: {
              date: "2005-12-13T14:14:51.192Z",
              age: 17
            },
            phone: "08-2632-1577",
            cell: "0401-529-834",
            id: {
              name: "TFN",
              value: "291661560"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/6.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
            },
            nat: "AU"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Leon",
              last: "Rhodes"
            },
            location: {
              street: {
                number: 8649,
                name: "W Campbell Ave"
              },
              city: "Hervey Bay",
              state: "Tasmania",
              country: "Australia",
              postcode: 1622,
              coordinates: {
                latitude: "80.6626",
                longitude: "79.8616"
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic"
              }
            },
            email: "leon.rhodes@example.com",
            login: {
              uuid: "fab5be0b-33fa-45d2-b1c5-f1cc0b4b8289",
              username: "blackostrich982",
              password: "cherokee",
              salt: "P7SDn8jO",
              md5: "e679b45f0be5f2ff08edacf50d79a411",
              sha1: "413f2d179e43d0e4ee35a8e7cb19ba33fd018d11",
              sha256: "cced8e50acb67b22dd5d2d8759cc692651ecfbd7a2b92e69b70e2563040cac6d"
            },
            dob: {
              date: "1947-09-29T09:55:57.927Z",
              age: 75
            },
            registered: {
              date: "2020-07-14T09:46:43.943Z",
              age: 2
            },
            phone: "04-9982-5794",
            cell: "0405-912-051",
            id: {
              name: "TFN",
              value: "521530934"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/29.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/29.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/29.jpg"
            },
            nat: "AU"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Lohit",
              last: "Banerjee"
            },
            location: {
              street: {
                number: 6327,
                name: "Camac St"
              },
              city: "Dhanbad",
              state: "Andaman and Nicobar Islands",
              country: "India",
              postcode: 92901,
              coordinates: {
                latitude: "-66.3726",
                longitude: "9.0708"
              },
              timezone: {
                offset: "+4:00",
                description: "Abu Dhabi, Muscat, Baku, Tbilisi"
              }
            },
            email: "lohit.banerjee@example.com",
            login: {
              uuid: "90560553-015d-40de-890e-4be403d079d3",
              username: "goldendog703",
              password: "elway7",
              salt: "1UketF3H",
              md5: "271cd8a9c0da6ab45d0d58bbb55f515f",
              sha1: "a9b36681a74b1def53e02531d009b5e953d438eb",
              sha256: "d0aba77257b3369736e60868d64129f15c1148bb6720a166daf305828fc1aa8f"
            },
            dob: {
              date: "1969-09-25T09:39:52.101Z",
              age: 53
            },
            registered: {
              date: "2005-12-06T11:43:26.759Z",
              age: 17
            },
            phone: "7924350902",
            cell: "8280838280",
            id: {
              name: "UIDAI",
              value: "855981202491"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/31.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg"
            },
            nat: "IN"
          },
          {
            gender: "male",
            name: {
              title: "Mr",
              first: "Iván",
              last: "Laureano"
            },
            location: {
              street: {
                number: 1307,
                name: "Diagonal Meza"
              },
              city: "Hoctun",
              state: "Nayarit",
              country: "Mexico",
              postcode: 98909,
              coordinates: {
                latitude: "-30.5664",
                longitude: "-89.1327"
              },
              timezone: {
                offset: "+11:00",
                description: "Magadan, Solomon Islands, New Caledonia"
              }
            },
            email: "ivan.laureano@example.com",
            login: {
              uuid: "822685d7-4129-4596-a074-e5559689a6e2",
              username: "greenelephant388",
              password: "lifetime",
              salt: "MOhEspbn",
              md5: "503aff7d153c46c161c225274fd834b9",
              sha1: "ab7764ca9a5ec437ac467c2f7e94202ef4848164",
              sha256: "69fdbf5f1db517d0f30521c341e4b2e12f0dd2ed493b77b39a4cf0433f17dcb0"
            },
            dob: {
              date: "1986-07-01T12:04:53.078Z",
              age: 36
            },
            registered: {
              date: "2013-08-30T02:57:34.926Z",
              age: 9
            },
            phone: "(671) 562 0340",
            cell: "(667) 868 3019",
            id: {
              name: "NSS",
              value: "56 11 90 5255 6"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/men/33.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg"
            },
            nat: "MX"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "یلدا",
              last: "موسوی"
            },
            location: {
              street: {
                number: 2760,
                name: "راستوان"
              },
              city: "ورامین",
              state: "زنجان",
              country: "Iran",
              postcode: 51658,
              coordinates: {
                latitude: "-43.6545",
                longitude: "-165.8388"
              },
              timezone: {
                offset: "+3:00",
                description: "Baghdad, Riyadh, Moscow, St. Petersburg"
              }
            },
            email: "yld.mwswy@example.com",
            login: {
              uuid: "d26af13d-6397-4f5e-8169-2a0ea79385cc",
              username: "happyfrog476",
              password: "fatima",
              salt: "tvP1WEt3",
              md5: "24c1169ac2959eeb77627215073a069a",
              sha1: "0f65ed9c4f84699ebc0ddc2995cff92e9b019b3e",
              sha256: "9109187cea5c3ca57f1d870104ebf6178c08002874849aba162c02f7caff322f"
            },
            dob: {
              date: "1993-05-10T08:09:06.031Z",
              age: 29
            },
            registered: {
              date: "2007-03-26T02:40:25.622Z",
              age: 15
            },
            phone: "006-67040231",
            cell: "0953-090-4353",
            id: {
              name: "",
              value: null
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/54.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/54.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/54.jpg"
            },
            nat: "IR"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Anna",
              last: "Pierce"
            },
            location: {
              street: {
                number: 7075,
                name: "Boghall Road"
              },
              city: "Ashbourne",
              state: "Wicklow",
              country: "Ireland",
              postcode: 82329,
              coordinates: {
                latitude: "25.6969",
                longitude: "-98.6699"
              },
              timezone: {
                offset: "+4:30",
                description: "Kabul"
              }
            },
            email: "anna.pierce@example.com",
            login: {
              uuid: "aa28aeaa-d0e9-4c93-a205-cc9eb1dd1b0f",
              username: "angryleopard372",
              password: "1988",
              salt: "bmTkXVX0",
              md5: "76ee2b0218b3f49a424a1a7733c54a2c",
              sha1: "47bc3b670586ed39217d7439f4548d1ea3f8e950",
              sha256: "ef3fae3bff66642149bff519ede2885ca21be3995dea73f916c0e60eeaf7c736"
            },
            dob: {
              date: "1973-09-21T10:54:02.100Z",
              age: 49
            },
            registered: {
              date: "2009-10-22T22:55:38.911Z",
              age: 13
            },
            phone: "021-867-5671",
            cell: "081-531-9139",
            id: {
              name: "PPS",
              value: "1363628T"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/31.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg"
            },
            nat: "IE"
          },
          {
            gender: "female",
            name: {
              title: "Mrs",
              first: "Georgia",
              last: "Carter"
            },
            location: {
              street: {
                number: 3767,
                name: "Bollinger Rd"
              },
              city: "Cary",
              state: "Vermont",
              country: "United States",
              postcode: 29706,
              coordinates: {
                latitude: "-82.7811",
                longitude: "111.8388"
              },
              timezone: {
                offset: "-10:00",
                description: "Hawaii"
              }
            },
            email: "georgia.carter@example.com",
            login: {
              uuid: "fdeda6de-a464-4327-9613-7c53ac49d111",
              username: "orangefish932",
              password: "feeling",
              salt: "QzW2xf6U",
              md5: "e441ad238fa37ba52686231eae0ad90e",
              sha1: "e5b82d6a426cb69f7129f6883e55137c221018b7",
              sha256: "ff2e433b35647ad1755df40ca440ed6dd8c5720767f8b691b477363fa53e5393"
            },
            dob: {
              date: "1998-09-07T12:21:25.918Z",
              age: 24
            },
            registered: {
              date: "2007-01-27T11:28:30.852Z",
              age: 16
            },
            phone: "(769) 553-3854",
            cell: "(827) 947-9818",
            id: {
              name: "SSN",
              value: "701-50-7389"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/57.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg"
            },
            nat: "US"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Beatrice",
              last: "Kowalski"
            },
            location: {
              street: {
                number: 9556,
                name: "Maple Ave"
              },
              city: "Melbourne",
              state: "Prince Edward Island",
              country: "Canada",
              postcode: "M7D 6O3",
              coordinates: {
                latitude: "-81.8581",
                longitude: "133.5189"
              },
              timezone: {
                offset: "-4:00",
                description: "Atlantic Time (Canada), Caracas, La Paz"
              }
            },
            email: "beatrice.kowalski@example.com",
            login: {
              uuid: "9fa48bb2-b221-483c-bc70-d57c23c7905b",
              username: "greenrabbit814",
              password: "warlord",
              salt: "nlsC2ii9",
              md5: "8d5ebf8d2898c3d8c745765bda10334b",
              sha1: "ac99070a840534af855bb4d6bd4174b137e0c98b",
              sha256: "2d2bf793bfa5936ca448581996ed0b33e4022d2d6d3800ba6edf480ad7d3c9d0"
            },
            dob: {
              date: "1989-01-21T16:20:12.140Z",
              age: 34
            },
            registered: {
              date: "2006-03-13T06:41:07.493Z",
              age: 16
            },
            phone: "S56 X11-1731",
            cell: "Q05 Q75-0341",
            id: {
              name: "SIN",
              value: "741375836"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/64.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg"
            },
            nat: "CA"
          },
          {
            gender: "female",
            name: {
              title: "Ms",
              first: "Tilde",
              last: "Christiansen"
            },
            location: {
              street: {
                number: 9019,
                name: "Egevangen"
              },
              city: "Ølstykke",
              state: "Hovedstaden",
              country: "Denmark",
              postcode: 76731,
              coordinates: {
                latitude: "-76.3880",
                longitude: "-58.7088"
              },
              timezone: {
                offset: "-2:00",
                description: "Mid-Atlantic"
              }
            },
            email: "tilde.christiansen@example.com",
            login: {
              uuid: "92b3f310-21da-4b2e-9d4e-848e396b7e9e",
              username: "lazysnake625",
              password: "todd",
              salt: "yse9hVvO",
              md5: "1eb26426808125e66d49ebddc89c4c1c",
              sha1: "eb442647740a672fd583af33aac880eddce33d11",
              sha256: "224a50cef521bf74cfe24858094c5b0ef935614018118cf7d031e36bb4f297b3"
            },
            dob: {
              date: "1969-01-15T00:45:27.297Z",
              age: 54
            },
            registered: {
              date: "2021-06-30T11:32:58.181Z",
              age: 1
            },
            phone: "09711613",
            cell: "89480711",
            id: {
              name: "CPR",
              value: "140169-4843"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/93.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg"
            },
            nat: "DK"
          }
        ],
        info: {
          seed: "1c68dfbafe1aa8ce",
          results: 50,
          page: 1,
          version: "1.4"
        }
      };

      public static getAllUsers():IRandomUser[] | null | undefined{
            return this.usersData.results;
      }
}