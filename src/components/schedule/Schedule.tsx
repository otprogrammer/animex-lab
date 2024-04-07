"use client";
import React, { useEffect, useRef, useState } from "react";

import dayjs from "../../../lib/dayjs";
import { Tab, Transition } from "@headlessui/react";
import supabase from "../../../utils/supabase";
import GridContainer from "../container/GridContainer";
import { days } from "../../../utils/Vars";

function Airing() {
  const [activeDay, setActiveDay] = useState<any>();

  useEffect(() => {
    setActiveDay(days.filter((t) => t.i == todayIndex)[0]?.name);
    // fetchAiring()
    fetchSchedule();
  }, []);

  const today = dayjs();
  const todayIndex = today.day();

  const [selectedTab, setSelectedTab] = useState(todayIndex);
  const [scheduleData, setScheduleData] = useState<any>();

  const d = [
    {
      title: "Monday",
      animes: [
        {
          slug: "ochibi-san",
          title: {
            english: null,
            native: "オチビサン",
            romaji: "Ochibi-san",
            userPreferred: "Ochibi-san",
          },
          type: "TV_SHORT",
          anilistID: "168992",
          malID: "56588",
          synonyms: ["The Diary of Ochibi-san", null],
          description:
            "<i>\"I can help you laugh, but I can't take away the tears you've shed.\" </i><br><br>\nIn Mametsubu-cho, a town somewhere in the ancient Japanese city of Kamakura, Ochibi-san lives a relaxed, easy life. With his friend Nazeni the dog, Jack the naughty kitten, and Pankui the hungry dog, Ochibi-san's year in Mametsubu-cho is filled with encounters and new discoveries! Flower-viewing in spring, swimming in summer, collecting leaves in fall, and eating yummy food in winter.\n<br><br>\n(Source: Crunchyroll)",
          episodeNum: 17,
          animeLength: 24,
          genres: ["Slice of Life"],
          status: "RELEASING",
          season: "FALL",
          averageScore: null,
          nextAiringEpisode: {
            airingAt: 1712458800,
            episode: 24,
          },
          duration: 5,
          trailerVideo: "D4Xi_jLCykg",
          relatedAnime: [
            {
              type: "ANIME",
              format: "ONA",
              relationType: "PARENT",
              relationName: "Parent",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20947-Qg0QUi31tjeb.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx20947-Qg0QUi31tjeb.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20947-7uPxrc63bFxM.jpg",
              meanScore: 71,
              episodes: 36,
              description:
                "Japan Anima(tor)'s Exhibition is the showcase of the animations produced by various directors with love and energy, which are planned from original projects, spin-off projects, promotional films, Music PV, and VJ Films etc...Episodes:#01: The Dragon Dentist (Directed by Outarou Maijou)#02: HILL CLIMB GIRL (Directed by Azuma Tani)#03: ME!ME!ME! (Directed by Hibiki Yoshizaki)#04: Carnage (Directed by Akira Honma)#05: Yoshikazu Yasuhiko & Ichiro Itano: Collection of Key Animation Films (collection of key animation from 1979's Mobile Suit Gundam)#06: 20min Walk From Nishi-Ogikubo Station, 2 Bedrooms, Living Room, Dining Room, Kitchen, 2mos Deposit, No Pets Allowed (Directed by Takeshi Honda & Mahiro Maeda)#07: Until you come to me. (Directed by Tadashi Hiramatsu)#08: Tomorrow from there (Directed by Akemi Hayashi)#09: Denkou Choujin Gridman: boys invent great hero (Directed by Akira Amemiya)#10: YAMADELOID (Directed by Takashi Horiuchi & Masahiro Emoto)#11: POWER PLANT No. 33 (Directed by Yasuhiro Yoshiura & Kengo Saito)#12: Evangelion: Another Impact (Confidential) (Directed by Shinji Aramaki)#13: Kanón (Directed by Mahiro Maeda)#14: SEX and VIOLENCE with MACHSPEED (Directed by Hiroyuki Imaishi)#15: Obake-Chan (Directed by Shigeto Koyama)#16: Tsukikage no Tokio (Directed by Takanobu Mizuno)#17: THREE FALLEN WITNESSES (Directed by Satoru Utsunomiya)#18: The Diary of Ochibi (Directed by Masashi Kawamura)#19: I can Friday by Day! (Directed by Kazuya Tsurumaki)#20A: ME!ME!ME! CHRONIC feat.daoko / TeddyLoid (Directed by Hibiki Yoshizaki, remix of short #3)#20B: (Making of) evangelion:Another Impact (Making of video of short #12)#21: ICONIC FIELD (Directed by Ikuto Yamashita)#22: IBUSEKI YORUNI (Directed by Tadashi Hiramatsu) #23: Memoirs of amorous gentlemen (Produced by Cork Inc.)#24: Rapid Rouge (Directed by Daisuke Onitsuka)#25: HAMMERHEAD (Directed by Otaro Maijo)#26: COMEDY SKIT 1989 (Directed by Kazuto Nakazawa)#27: BUBU & BUBULINA (Directed by Takashi Nakamura)#28: ENDLESS NIGHT (Directed by Sayo Yamamoto)#29: BUREAU OF PROTO SOCIETY (Directed by Yasuhiro Yoshiura)#30: The Ultraman (Directed by Akitoshi Yokoyama)#31: GIRL (Directed by Hibiki Yoshizaki)#32: Neon Genesis IMPACTS. (Directed by Yuhei Sakuragi)#33: Ragnarok (Directed by Kazuyoshi Katayama)#34: Robot on the Road (Directed by Hiroyuki Okiura)#35: Cassette Girl (Directed by Hiroyasu Kobayashi)Note: #20A and #20B (special) are counted as two separate episodes in the episode total.",
              startDate: {
                year: 2014,
                month: 11,
                day: 7,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred: "Nihon Animator Mihonichi",
                english: "Japan Anima(tor)’s Exhibition",
                romaji: "Nihon Animator Mihonichi",
              },
              anilistID: 20947,
              slug: "nihon-animator-mihonichi",
            },
          ],
          startDate: {
            year: 2023,
            month: 10,
            day: 8,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1708869123,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/22DpP1IgUBGt8t9UhRRi6ivzgcN.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/22DpP1IgUBGt8t9UhRRi6ivzgcN.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/22DpP1IgUBGt8t9UhRRi6ivzgcN.jpg",
          },
          airingTime: 1711941000000,
          delayed: false,
          scheduledEpisode: 24,
        },
        {
          slug: "saint-seiya-knights-of-the-zodiac-season-3",
          title: {
            english:
              "Saint Seiya: Knights of the Zodiac - Battle for Sanctuary Part 2",
            native:
              "聖闘士星矢：Knights of the Zodiac バトル・サンクチュアリ Part 2",
            romaji:
              "Saint Seiya: Knights of the Zodiac Battle Sanctuary Part 2",
            userPreferred:
              "Saint Seiya: Knights of the Zodiac Battle Sanctuary Part 2",
          },
          type: "ONA",
          anilistID: "158988",
          malID: "53748",
          synonyms: [null],
          description:
            "The final hour is approaching! There are only five hours left until the arrow of the God Killer pierces Athena's heart. Only the Pope, who sits atop the sanctuary, can save Athena. However, in order for Seiya and the other four Bronze Saints to reach the Pope's Chamber, they must break through the Twelve Palaces protected by the Golden Saints. There are five more palaces waiting for them to reach the Pope's Chamber. Can Seiya and his team defeat the powerful enemies that stand in their way and reach the Pope's Chamber, where the shocking truth is hidden?<br>\n<br>\n(Source: Crunchyroll News)",
          episodeNum: 2,
          animeLength: 12,
          genres: ["Adventure", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: null,
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10687-iDNjbDXrZQ2U.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx10687-iDNjbDXrZQ2U.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/10687-FTzLIQSolcQF.jpg",
              meanScore: 57,
              episodes: 1,
              description:
                'A CG anime to commemorate the 25th anniversary of the series and the 40th anniversary of its mangaka.From the dawn of time, there have been warriors who protected the Goddess Athena. Once forces of evil appear, these warriors, called the Saints will present themselves. A young woman, Saori Kido, learns about this force known as "Cosmos" and that she is the reincarnation of Athena, protector of love and peace on Earth. However, the Pope of the Sanctuary, who is in the charge of all the Saints, does not take kindly to Saori, and targets her for usurping the identity of Athena. An assassin is sent out to kill her. Fortunately, one of the Bronze Saints, Seiya, manages to protect her. But will Seiya be able to protect Saori through to the end in the gripping saga of Saint Seiya: Legend of Sanctuary?',
              startDate: {
                year: 2014,
                month: 7,
                day: 1,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred: "Saint Seiya: LEGEND of SANCTUARY",
                english: null,
                romaji: "Saint Seiya: LEGEND of SANCTUARY",
              },
              anilistID: 10687,
              slug: "saint-seiya-legend-of-sanctuary",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151659-48lXm3Dl2Km9.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx151659-48lXm3Dl2Km9.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151659-EztT105VEEof.jpg",
              meanScore: 58,
              episodes: 12,
              trailer: "VN8wVyc8Uf8",
              description:
                "The young warriors who protect the goddess Athena are known as the Knights of the Zodiac. One young orphan, Seiya, is destined to become the Pegasus Knight. Athena has been born into this world, but this time under a dark prophecy that she will lose the war against Poseidon and Hades, and lead mankind to ruin. Seiya stands up against the prophecy, willing to protect her at all cost. But now a god-killer arrow has struck her heart. To save her life, Seiya must ascend Sanctuary and defeat twelve legendary Gold Knights - and he only has twelve hours to do it. Will he make it? And what will happen to the dark prophecy if he succeeds?",
              startDate: {
                year: 2022,
                month: 7,
                day: 31,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred:
                  "Saint Seiya: Knights of the Zodiac Battle Sanctuary",
                english:
                  "Saint Seiya: Knights of the Zodiac - Battle for Sanctuary",
                romaji: "Saint Seiya: Knights of the Zodiac Battle Sanctuary",
              },
              anilistID: 151659,
              slug: "saint-seiya-knights-of-the-zodiac-battle-sanctuary",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1254.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1254.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1254-8sEdD7gwYipm.jpg",
              meanScore: 73,
              episodes: 114,
              description:
                "Ages ago, the goddess Athena was served by fighters called Saints who channeled the power of the Cosmos within them. Now a youth named Seiya has trained to become a Saint himself by earning the mystical Cloth of Pegasus. He is joined by other Saints with Cloths of their own to fight for Athena. ",
              startDate: {
                year: 1986,
                month: 10,
                day: 11,
              },
              seasonYear: 1986,
              animeName: {
                userPreferred: "Saint Seiya",
                english: "Saint Seiya: Knights of the Zodiac",
                romaji: "Saint Seiya",
              },
              anilistID: 1254,
              slug: "saint-seiya",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 1,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711960892,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158988-e4Z8K2MyQCau.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158988-e4Z8K2MyQCau.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx158988-e4Z8K2MyQCau.png",
          },
          bannerImage: null,
          scheduledEpisode: 2,
          airingTime: 1711959060000,
          delayed: false,
        },
        {
          slug: "shuumatsu-train-doko-e-iku",
          title: {
            english: "Train to the End of the World",
            native: "終末トレインどこへいく？",
            romaji: "Shuumatsu Train Doko e Iku?",
            userPreferred: "Shuumatsu Train Doko e Iku?",
          },
          type: "TV",
          anilistID: "155657",
          malID: "53356",
          synonyms: ["Where Does the Doomsday Train Go?", null],
          description:
            'The anime\'s story is set in a town in a not-so-ordinary countryside, where a big and strange occurrence is happening to its residents. But a young girl named Shizuru Chikura has a strong desire to see her lost friend again. Shizuru and three other girls board an abandoned train, and they set out to the outside world, where survival is not certain. What awaits them at the last stop of the "Doomsday Train?"<br><br>\n\n(Source: Anime News Network)',
          episodeNum: 1,
          animeLength: 12,
          genres: [],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712577600,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 1,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711975999,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/9eyKUHjD3roRqyypM8FbsUV5iKT.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/9eyKUHjD3roRqyypM8FbsUV5iKT.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/9eyKUHjD3roRqyypM8FbsUV5iKT.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/lIryvAPvyTkM6Iba7u9HBrSfKZ0.jpg",
          airingTime: 1711975200000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "kami-wa-game-ni-ueteiru",
          title: {
            english: "Gods' Games We Play",
            native: "神は遊戯に飢えている。",
            romaji: "Kami wa Game ni Ueteiru.",
            userPreferred: "Kami wa Game ni Ueteiru.",
          },
          type: "TV",
          anilistID: "144176",
          malID: "50869",
          synonyms: [
            "Gods' Game We Play The Animation",
            " เกมอัจฉริยะ คนปะทะเทพ",
            null,
          ],
          description:
            "In their (overabundance of) free time, the gods grew bored and decided to create challenging battles of wits to spice things up! Their opponent? Humanity! A select few players called “apostles” meet the gods on the spiritual realm’s playing field to beat the deities at their own games. A former god named Leoleshea has woken after sleeping for thousands of years, and her first demand is to meet “this era’s very best player!” She is introduced to Fay, an acclaimed rookie apostle. Together, they plan to challenge the gods and win the ultimate prize, but no one in human history has managed to clear ten games—because the gods can be capricious, outrageous, and sometimes downright incomprehensible! In the face of absurdity, what can the apostles do but enjoy the contest to its fullest?<br><br>\n(Source: Yen Press)",
          episodeNum: 1,
          animeLength: 13,
          genres: ["Comedy", "Drama", "Ecchi", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712579400,
            episode: 2,
          },
          duration: null,
          trailerVideo: "bee4eJJ0s3Q",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 1,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711979336,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/uXirDcJ3wTkpL4tMxEoIMWndFxM.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/uXirDcJ3wTkpL4tMxEoIMWndFxM.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/uXirDcJ3wTkpL4tMxEoIMWndFxM.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/144176-pI0FHoCJ5Rxc.jpg",
          airingTime: 1711978800000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "tsuki-ga-michibiku-isekai-douchuu-2",
          title: {
            english: "TSUKIMICHI -Moonlit Fantasy- Season 2",
            native: "月が導く異世界道中 第二幕",
            romaji: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
            userPreferred: "Tsuki ga Michibiku Isekai Douchuu 2nd Season",
          },
          type: "TV",
          anilistID: "139518",
          malID: "49889",
          synonyms: [
            "TSUKIMICHI -Moonlit Fantasy- Season 2",
            "จันทรานำพาสู่ต่างโลก ภาค 2",
            null,
          ],
          description:
            "The second season of <i>Tsuki ga Michibiku Isekai Douchuu</i>.<br>\n<br>\nAfter Makoto Misumi defeats Mitsurugi and Sofia Bulga, humanity is saved from the attacking demon army—for the time being. The goddess is aware of Makoto’s growing power, and she sees him as less of a nuisance and more of a rival. Makoto continues his journey to further expand his community of outcasts and connect with more hyumans. But will he be strong enough to hold off the coming storm?<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 25,
          genres: ["Action", "Adventure", "Comedy", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "76",
          nextAiringEpisode: {
            airingAt: 1712584800,
            episode: 14,
          },
          duration: 24,
          trailerVideo: "WuqnD0LKdGQ",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx125206-O2MsOWdW1lVi.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125206-O2MsOWdW1lVi.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/125206-UdWijVTgcC5t.jpg",
              meanScore: 76,
              episodes: 12,
              trailer: "U8T63kIny7E",
              description:
                'Makoto Misumi was just an average teenager who happened to suddenly be summoned to another world as a "hero." But the goddess of this world called him ugly and took his hero status away from him then sent him to the ends of the world. In the wastelands, he meets dragons, spiders, orcs, dwarves and many other non-human races. Makoto manages to show promises in the use of magic and fighting, which he wouldn\'t have been able to do in his former world. He has numerous encounters, but will he be able to survive this new world? A fantasy where a guy who had been abandoned by gods and humanity tries to reset his life in this new world is about to begin!',
              startDate: {
                year: 2021,
                month: 7,
                day: 7,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "Tsuki ga Michibiku Isekai Douchuu",
                english: "TSUKIMICHI -Moonlit Fantasy-",
                romaji: "Tsuki ga Michibiku Isekai Douchuu",
              },
              anilistID: 125206,
              slug: "tsuki-ga-michibiku-isekai-douchuu",
            },
          ],
          startDate: {
            year: 2024,
            month: 1,
            day: 8,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711984213,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/7AEti7vnCyfsvkp99g3pxvYsUqw.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300/7AEti7vnCyfsvkp99g3pxvYsUqw.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/7AEti7vnCyfsvkp99g3pxvYsUqw.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/ciPDoPMqd3icCBHsIlhIb3UyOd2.jpg",
          scheduledEpisode: 13,
          airingTime: 1711984200000,
          delayed: false,
        },
        {
          slug: "remonster",
          title: {
            english: "Re:Monster",
            native: "Re:Monster",
            romaji: "Re:Monster",
            userPreferred: "Re:Monster",
          },
          type: "TV",
          anilistID: "169417",
          malID: "56690",
          synonyms: ["リ・モンスター", null],
          description:
            "After meeting an untimely death, Tomokui Kanata is reincarnated as a lowly goblin, but he’s worked up a monstrous appetite. Thanks to his new ability that allows him to grow stronger the more he feeds, his feeble status quickly changes, and he rises to become the goblin leader. With a mix of his past memories, new body, and strong stomach, he’s taking a bite out of this new fantastical world!. <br><br>\n(Source: Crunchyroll)<br><br>\n<i>The episodes were streamed several days ahead than the TV broadcast on U-NEXT, Anime Houdai, and Crunchyroll beginning on April 2nd, 2024 at 0:00 JST. The regular TV broadcast begins on April 5th, 2024.",
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Adventure", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712502000,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711986227,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/jPKYAXFJm78QTQYdyPuwHerzROE.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/jPKYAXFJm78QTQYdyPuwHerzROE.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/jPKYAXFJm78QTQYdyPuwHerzROE.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169417-NaD0wR83gTbm.jpg",
          scheduledEpisode: 1,
          airingTime: 1711986000000,
          delayed: false,
        },
        {
          slug: "tensei-shitara-dai-nana-ouji-dattanode-kimamani-majutsu-wo-kiwamemasu",
          title: {
            english:
              "I Was Reincarnated as the 7th Prince So I Can Take My Time Perfecting My Magical Ability",
            native: "転生したら第七王子だったので、気ままに魔術を極めます",
            romaji:
              "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
            userPreferred:
              "Tensei Shitara Dai Nana Ouji Dattanode, Kimamani Majutsu wo Kiwamemasu",
          },
          type: "TV",
          anilistID: "156415",
          malID: "53516",
          synonyms: [null],
          description:
            "The qualities valued most in the study of magic are bloodline, aptitude, and effort. There was one sorcerer who, despite his deep love for magic, was born a commoner and thus lacked the bloodline and aptitude for it. As he died an unnatural death, he wished he had studied magic more while he had the chance. Then, he was reincarnated as Lloyd, the seventh prince of the Kingdom of Saloum and one blessed with a strong magical bloodline. Reborn with all his memories intact, along with the perfect bloodline and immense talent, he was determined to enjoy his new life, using his extraordinary magical abilities to master the study of magic that was beyond his reach in his previous life!\n<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Adventure", "Fantasy", "Slice of Life"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712588400,
            episode: 2,
          },
          duration: null,
          trailerVideo: "PzsBkhOa6JM",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711990027,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/kMDJ2hdBTLZn33O53xCtE14fFD1.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/kMDJ2hdBTLZn33O53xCtE14fFD1.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/kMDJ2hdBTLZn33O53xCtE14fFD1.jpg",
          },
          bannerImage: null,
          scheduledEpisode: 1,
          airingTime: 1711989600000,
          delayed: false,
        },
        {
          slug: "ookami-to-koushinryou-merchant-meets-the-wise-wolf",
          title: {
            english: "Spice and Wolf: merchant meets the wise wolf",
            native: "狼と香辛料 merchant meets the wise wolf",
            romaji: "Ookami to Koushinryou: merchant meets the wise wolf",
            userPreferred:
              "Ookami to Koushinryou: merchant meets the wise wolf",
          },
          type: "TV",
          anilistID: "145728",
          malID: "51122",
          synonyms: [
            "Spice and Wolf: Merchant Meets the Wise Wolf",
            "Spice and Wolf (2024)",
            "Ookami to Koushinryou (2024)",
            null,
          ],
          description:
            "Lawrence is a traveling merchant selling various goods from a horse-drawn cart. One day, he arrives at a village and meets a beautiful girl with the ears and tail of an animal! Her name is Holo the Wisewolf and she brings bountiful harvests. She wishes to return to her homeland, and Lawrence offers to take her. Now, the once-lonely merchant and the once-lonely wisewolf begin their journey north.<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Adventure", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712593800,
            episode: 2,
          },
          duration: null,
          trailerVideo: "DuWQOwwI9z4",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2966-BDusgFy0UzDy.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2966-BDusgFy0UzDy.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2966-h1ZiL7o7oYPs.jpg",
              meanScore: 80,
              episodes: 13,
              description:
                'The peddler Kraft Lawrence travels through the world selling all kinds of things. After visiting a village, he discovers a sleeping girl under the pelts in his cart. She has wolf ears and a tail. The wolf girl explains that she has been called a "god", but that her name is Holo and nothing more. Lawrence teases the girl a little, but after hearing more of her story, he is moved and decides to accompany her further north. On their travels the two have many adventures, often getting into trouble, but the bond between them grows stronger. ',
              startDate: {
                year: 2008,
                month: 1,
                day: 8,
              },
              seasonYear: 2008,
              animeName: {
                userPreferred: "Ookami to Koushinryou",
                english: "Spice and Wolf",
                romaji: "Ookami to Koushinryou",
              },
              anilistID: 2966,
              slug: "ookami-to-koushinryou",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711995202,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/bTY6l48wPXOFr4RHaEbs2muRZAq.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/bTY6l48wPXOFr4RHaEbs2muRZAq.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/bTY6l48wPXOFr4RHaEbs2muRZAq.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145728-uGKxkhr7XlZn.jpg",
          scheduledEpisode: 1,
          airingTime: 1711995000000,
          delayed: false,
        },
        {
          slug: "dekisokonai-to-yobareta-moto-eiyuu-wa-jikka-kara-tsuihou-sareta-node-suki-katte-ni-ikiru-koto-ni-shita",
          title: {
            english: "The Banished Former Hero Lives as He Pleases",
            native:
              "出来損ないと呼ばれた元英雄は、実家から追放されたので好き勝手に生きることにした",
            romaji:
              "Dekisokonai to Yobareta Moto Eiyuu wa, Jikka kara Tsuihou Sareta node Suki Katte ni Ikiru Koto ni Shita",
            userPreferred:
              "Dekisokonai to Yobareta Moto Eiyuu wa, Jikka kara Tsuihou Sareta node Suki Katte ni Ikiru Koto ni Shita",
          },
          type: "TV",
          anilistID: "166372",
          malID: "55717",
          synonyms: ["The Banished Former Hero Lives as He Pleases", null],
          description:
            '"I can finally go search for the peaceful life I\'ve been looking forward to since my past life." \n<br><br>\nAllen, a boy called a failure because he was not blessed with a "Gift" from god, is actually a former hero who still has the memories and powers of his past life?! Using his banishment from his family\'s duchy as an excuse, Allen is about to start a carefree journey to do whatever he wants when he comes across an attempt on the life of his ex-fiancée...?! \n<br><br>\nThe former hero wants to live a relaxing life this time around, but the heroic fantasy life he never wanted is about to begin! \n<br><br>\n(Source: Crunchyroll)',
          episodeNum: 2,
          animeLength: null,
          genres: ["Action", "Adventure", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712595600,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711997833,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/gUDkHsNzkjTBQ55fS9pUO1ng7vk.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/gUDkHsNzkjTBQ55fS9pUO1ng7vk.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/gUDkHsNzkjTBQ55fS9pUO1ng7vk.jpg",
          },
          bannerImage: null,
          airingTime: 1711996800000,
          delayed: false,
          scheduledEpisode: 2,
        },
      ],
      today: false,
    },
    {
      title: "Wednesday",
      animes: [
        {
          slug: "sand-land-the-series",
          title: {
            english: "Sand Land: The Series",
            native: "SAND LAND: THE SERIES",
            romaji: "SAND LAND: THE SERIES",
            userPreferred: "SAND LAND: THE SERIES",
          },
          type: "ONA",
          anilistID: "175642",
          malID: "57160",
          synonyms: [],
          description:
            "In the far future, war has destroyed the entire Earth, leaving only a barren wasteland where the supply of water is controlled by the greedy king. In search of a long-lost lake, Sheriff Rao asked the king of the demons for help...and got the king's son, Beelzebub, and his assistant, Thief. Together the unlikely trio sets off across the desert, facing dragons, bandits and the deadliest foe of all... the King's army itself! <br><br>\nThe first half of the <i>SAND LAND: THE SERIES</i> anime, episodes one to six, are titled “Akuma no Ooji” and is based on the film adaptation with some new footage, it will premiere alongside episode seven, which is the first episode of a brand-new arc titled “Tenshi no Yuusha”.<br><br>\n\n(Source: VIZ Media, Crunchyroll News, edited) ",
          episodeNum: 9,
          animeLength: 13,
          genres: ["Action", "Adventure", "Fantasy", "Supernatural"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "71",
          nextAiringEpisode: {
            airingAt: 1712155500,
            episode: 9,
          },
          duration: 24,
          trailerVideo: "eoIceltMvH0",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 3,
            day: 20,
          },
          endDate: {
            year: 2024,
            month: 5,
            day: 1,
          },
          updatedAt: 1712129849,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/175642-9GbVSmu7ht7e.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/fxBu818TRNHjHkUwGQctH775Ro3.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fxBu818TRNHjHkUwGQctH775Ro3.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/fxBu818TRNHjHkUwGQctH775Ro3.jpg",
          },
          airingTime: 1712156100000,
          delayed: false,
          scheduledEpisode: 9,
        },
        {
          slug: "sengoku-youko",
          title: {
            english: "Sengoku Youko",
            native: "戦国妖狐",
            romaji: "Sengoku Youko",
            userPreferred: "Sengoku Youko",
          },
          type: "TV",
          anilistID: "168194",
          malID: "56242",
          synonyms: [null],
          description:
            "The world is divided into two factions: humans and monsters called katawara. Despite being a katawara, Tama loves humans and vows to protect them from evil, even if it means fighting her own kind. Her brother Jinka, however, hates humans, despite mostly being one. The siblings are joined by a cowardly swordsman named Shinsuke, who wants to learn how to become strong.<br>\n<br>\nWhen the group uncovers a plot to experiment on humans and transform them into monsters, they vow to defeat whoever is behind it... Even if it means battling an entire army of warriors.<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 13,
          genres: ["Action", "Adventure", "Fantasy"],
          status: "FINISHED",
          season: "WINTER",
          averageScore: "65",
          nextAiringEpisode: null,
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 11,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 4,
          },
          updatedAt: 1712159343,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/9g4q1OX4GAkTZH9wSSc3t6Be03p.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300/9g4q1OX4GAkTZH9wSSc3t6Be03p.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/9g4q1OX4GAkTZH9wSSc3t6Be03p.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/168194-ynjLJ3TembGL.jpg",
          scheduledEpisode: 13,
          airingTime: 1712158800000,
          delayed: false,
        },
        {
          slug: "bartender-kami-no-glass",
          title: {
            english: "BARTENDER Glass of God",
            native: "バーテンダー 神のグラス",
            romaji: "Bartender: Kami no Glass",
            userPreferred: "Bartender: Kami no Glass",
          },
          type: "TV",
          anilistID: "155890",
          malID: "53407",
          synonyms: ["Bartender (New Anime)", null],
          description:
            "At Eden Hall, each glass has a story. A quiet bar lies tucked away in the streets of Tokyo, and it seems only the most desperate souls burdened by their own troubles manage to find its doors. But after a glass of God poured by the brilliant bartender Ryuu, they leave renewed. Ryuu has a gift—he knows how to soothe the soul with the perfect drink. Who will he meet next?<br><br>\n\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Drama", "Slice of Life"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712761200,
            episode: 2,
          },
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PARENT",
              relationName: "Parent",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1589-DNBuqRpnVu8Y.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1589-DNBuqRpnVu8Y.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1589-u7jza0OrNy7T.jpg",
              meanScore: 69,
              episodes: 11,
              description:
                'Genius bartender, Sasakura Ryuu makes the most incredible cocktails anyone has ever tasted. Seeking his "Glass of God", individuals from all different walks of life visit his bar. With both a compassionate ear and a godly drink, Ryuu helps people with their problems.',
              startDate: {
                year: 2006,
                month: 10,
                day: 15,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred: "Bartender",
                english: "Bartender",
                romaji: "Bartender",
              },
              anilistID: 1589,
              slug: "bartender",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 4,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712162685,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/lmz7qVUFYQkwk5dsCYNNWlR6dZB.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/lmz7qVUFYQkwk5dsCYNNWlR6dZB.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/lmz7qVUFYQkwk5dsCYNNWlR6dZB.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/zdwUGj94cdxhJYNMfpPVamiYTaa.jpg",
          airingTime: 1712162400000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "metallic-rouge",
          title: {
            english: "Metallic Rouge",
            native: "メタリックルージュ",
            romaji: "Metallic Rouge",
            userPreferred: "Metallic Rouge",
          },
          type: "TV",
          anilistID: "162985",
          malID: "54794",
          synonyms: [null],
          description:
            "In a world where humans coexist with androids called Neans, a group known as the Immortal Nine rises up against society. Tasked with disposing of the revolters, a Nean named Rouge Redstar (aka Metal Rouge) and investigator Naomi Orthmann head to Mars to track them down…but first, Rouge wants some chocolate. <br><br>\n(Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 13,
          genres: ["Action", "Mystery", "Sci-Fi"],
          status: "FINISHED",
          season: "WINTER",
          averageScore: "62",
          nextAiringEpisode: null,
          duration: 23,
          trailerVideo: "m7teRMkFdao",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 11,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 4,
          },
          updatedAt: 1712166084,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/dcUWxOeCiEM7n7KdIYk1O8Xzgzp.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/dcUWxOeCiEM7n7KdIYk1O8Xzgzp.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/dcUWxOeCiEM7n7KdIYk1O8Xzgzp.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/wlHjte7xC8ZfgAMxUKxLL77ejyC.jpg",
          scheduledEpisode: 13,
          airingTime: 1712165700000,
          delayed: false,
        },
      ],
      today: false,
    },
    {
      title: "Thursday",
      animes: [
        {
          slug: "dungeon-meshi",
          title: {
            english: "Delicious in Dungeon",
            native: "ダンジョン飯",
            romaji: "Dungeon Meshi",
            userPreferred: "Dungeon Meshi",
          },
          type: "TV",
          anilistID: "153518",
          malID: "52701",
          synonyms: [
            "Dungeon Food",
            "Dungeon Meal",
            "Tragones y Mazmorras",
            "Gloutons et Dragons",
            "Подземное питание",
            "던전밥",
            "สูตรลับตำรับดันเจียน",
            "Mỹ vị hầm ngục",
            null,
          ],
          description:
            "When young adventurer Laios and his company are attacked and soundly thrashed by a dragon deep in a dungeon, the party loses all its money and provisions...and a member! They're eager to go back and save her, but there is just one problem: If they set out with no food or coin to speak of, they're sure to starve on the way! But Laios comes up with a brilliant idea: \"Let's eat the monsters!\" Slimes, basilisks, and even dragons...none are safe from the appetites of these dungeon-crawling gourmands! <br>\n<br>\n(Source: Yen Press)\n<br><br>\n<i>Note: A world premiere screening of Episode 1 was shown in the Studio TRIGGER panel at Anime Expo on July 1, 2023.</i>",
          episodeNum: 14,
          animeLength: 24,
          genres: ["Adventure", "Comedy", "Fantasy"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "79",
          nextAiringEpisode: {
            airingAt: 1712842200,
            episode: 15,
          },
          duration: 25,
          trailerVideo: "WaIau6W2g98",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 4,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: null,
          },
          updatedAt: 1712240539,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/9t3DYdGxK3i4WRzKvIZwJd4kBnr.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300/9t3DYdGxK3i4WRzKvIZwJd4kBnr.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/9t3DYdGxK3i4WRzKvIZwJd4kBnr.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/9qngg89Hohbdib3bZEdLZa5qhOl.jpg",
          logoart:
            "https://image.tmdb.org/t/p/original/xiNezajnlUlKafC9Au3IMwmOICK.png",
          style: ["-1%", "-.5vw"],
          scheduledEpisode: 14,
          airingTime: 1712238060000,
          delayed: false,
        },
        {
          slug: "yuru-camp-3rd-season",
          title: {
            english: "Laid-Back Camp Season 3",
            native: "ゆるキャン△ SEASON３",
            romaji: "Yuru Camp△ SEASON 3",
            userPreferred: "Yuru Camp△ SEASON 3",
          },
          type: "TV",
          anilistID: "155908",
          malID: "53410",
          synonyms: ["Laid-Back Camp Season 3", null],
          description: "The third season of <i>Yuru Camp△</i>.",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Comedy", "Slice of Life"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712844000,
            episode: 2,
          },
          duration: 24,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104459-pywEKGQON613.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104459-pywEKGQON613.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104459-5SsUaCzOb3HC.jpg",
              meanScore: 84,
              episodes: 13,
              trailer: "TkRBk94fMwA",
              description:
                "Having spent Christmas camping with her new friends, Rin Shima embarks on a solo-camping trip to see the New Year sunrise by the sea. All goes according to plan until unforeseen weather blocks the roads back home, making a return trip impossible. Rin, who is now stranded for a few days, is invited by Nadeshiko Kagamihara to stay at her grandmother's house.What is supposed to be a two-day trip becomes an extended period of sightseeing and new experiences for Rin, and she encounters some new and old faces along the way.",
              startDate: {
                year: 2021,
                month: 1,
                day: 7,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "Yuru Camp△ SEASON 2",
                english: "LAID-BACK CAMP SEASON2",
                romaji: "Yuru Camp△ SEASON 2",
              },
              anilistID: 104459,
              slug: "yuru-camp-season-2",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 4,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 20,
          },
          updatedAt: 1712279344,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/jRZgkki3duWxgHpsKHTYlwuzfX6.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/jRZgkki3duWxgHpsKHTYlwuzfX6.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/jRZgkki3duWxgHpsKHTYlwuzfX6.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155908-K8ZgYWWJj3P4.jpg",
          disableVaryg: true,
          airingTime: 1712243400000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii",
          title: {
            english: "An Archdemon's Dilemma: How to Love Your Elf Bride",
            native: "魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？",
            romaji:
              "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
            userPreferred:
              "Maou no Ore ga Dorei Elf wo Yome ni Shitanda ga, Dou Medereba Ii?",
          },
          type: null,
          anilistID: "156023",
          malID: "53434",
          synonyms: [
            "An Archdemon's Dilemma: How to Love Your Elf Bride",
            "จอมมารอย่างข้า ควรรักภรรยาเอลฟ์อย่างไรดี",
            null,
          ],
          description:
            "Zagan might be the most feared evil sorcerer, but when it comes to social interactions, he’s the most inept. All those days studying the dark arts won’t help him when he falls in love at first sight with Nephelia, the beautiful elven slave, and spends his entire fortune to purchase her. With no clue how to talk to each other, the awkward arrangement for a bumbling sorcerer and timid elf begins.<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 2,
          animeLength: 12,
          genres: ["Action", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712847600,
            episode: 2,
          },
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 21,
          },
          updatedAt: 1712277049,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/7WDqjQyBkegbaDPgucfA6Rvj32x.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WDqjQyBkegbaDPgucfA6Rvj32x.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/7WDqjQyBkegbaDPgucfA6Rvj32x.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/fh9awPSGwVOqo9veBi10qTmxzTY.jpg",
          airingTime: 1712247000000,
          delayed: false,
          scheduledEpisode: 2,
        },
        {
          slug: "hananoi-kun-to-koi-no-yamai",
          title: {
            english: "A Condition Called Love",
            native: "花野井くんと恋の病",
            romaji: "Hananoi-kun to Koi no Yamai",
            userPreferred: "Hananoi-kun to Koi no Yamai",
          },
          type: "TV",
          anilistID: "165855",
          malID: "55597",
          synonyms: [
            "A Condition Called Love",
            " I'm addicted to you",
            "A tes côtés",
            "Ein Gefühl namens Liebe",
            "Adicto a ti",
            "รักติดหนึบของฮานาโนอิคุง",
            "Una enfermedad llamada amor",
            null,
          ],
          description:
            "Hotaru Hinase is a first-year in high school that has a great family and wonderful friends, but not much luck when it comes to romance.\nOne day, she happens to see the hot boy from the class next door, Hananoi, get dumped. Seeing Hananoi standing in the middle of a park all alone, Hotaru decides to hand him an umbrella.<br><br>\nThat little act causes Hananoi to ask her out soon after.\n<br><br>\nWhat does love even mean? What does it mean to be in love? Hotaru is flustered at suddenly being asked out by Hananoi, who has an endless amount of love for the person he loves and wants to do everything he can for them. This is a story about first love between a girl who doesn't understand romantic love and a boy that may be a bit too heavy-handed when it comes to love.<br>\n<br>\n(Source: Kodansha USA)",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Drama", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712847360,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 4,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 20,
          },
          updatedAt: 1712250878,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/e1ao8YAdgbN0wCUSatCESTPwaAh.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/e1ao8YAdgbN0wCUSatCESTPwaAh.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/e1ao8YAdgbN0wCUSatCESTPwaAh.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/cV6nwJT6Xh0Aam47CIAFupqELyU.jpg",
          airingTime: 1712250600000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "majo-to-yajuu",
          title: {
            english: "The Witch and the Beast",
            native: "魔女と野獣",
            romaji: "Majo to Yajuu",
            userPreferred: "Majo to Yajuu",
          },
          type: null,
          anilistID: "153818",
          malID: "52816",
          synonyms: ["The Witch and the Beast", null],
          description:
            'It all started with the 17 "Origins," whose powers were passed down to individuals who still exist around the world today. A man carrying a coffin and a girl with the eyes of a beast appear in a town. The girl was once cursed by a witch and now searches for her in order to undo the curse. Is the witch who appears before them the quarry they\'ve been searching for? And how can the curse be undone? This quest for revenge against an evil witch begins rolling when the beast captures the witch. This magnificent and intense dark fantasy begins now!<br>\n<br>\n(Source: Crunchyroll)',
          episodeNum: 12,
          animeLength: 12,
          genres: ["Action", "Adventure", "Drama", "Fantasy"],
          status: "FINISHED",
          season: null,
          averageScore: "68",
          nextAiringEpisode: null,
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 12,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          updatedAt: 1712278134,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/ooSzpaJkU8MnfuLKn0IThcACv57.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/ooSzpaJkU8MnfuLKn0IThcACv57.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/ooSzpaJkU8MnfuLKn0IThcACv57.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/lDLELq7XAi36qe204A3kbV7g88a.jpg",
          scheduledEpisode: 12,
          airingTime: 1712251500000,
          delayed: false,
        },
        {
          slug: "wind-breaker",
          title: {
            english: "WIND BREAKER",
            native: "WIND BREAKER",
            romaji: "WIND BREAKER",
            userPreferred: "WIND BREAKER",
          },
          type: "TV",
          anilistID: "163270",
          malID: "54900",
          synonyms: [null],
          description:
            "Where the average scores are the lowest, but the fights are the strongest. Furin High School is renowned as a super school of delinquents. Haruka Sakura, a first-year student, came from outside the city to fight to the top. However, Furin High School has become a group that protects the town called the “Chime of the Wind Breaker” – Bofurin. The heroic legend of high school delinquent Sakura begins here!\n<br><br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Comedy", "Drama"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712849160,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712253099,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/3kTFL3PAeTyS8gGZAh0iYG6NNjt.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3kTFL3PAeTyS8gGZAh0iYG6NNjt.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/3kTFL3PAeTyS8gGZAh0iYG6NNjt.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163270-QshLCttd04s6.jpg",
          airingTime: 1712252400000,
          delayed: false,
          scheduledEpisode: 1,
          logoart:
            "https://image.tmdb.org/t/p/original/z0ElfwMAOkQWvDw7miVBD3a3iOA.png",
          style: ["-1%", "-.5vw"],
        },
        {
          slug: "urusei-yatsura-2022-2nd-season",
          title: {
            english: "Urusei Yatsura (2022) Season 3",
            native: "うる星やつら (2022) 第2期",
            romaji: "Urusei Yatsura (2022) 2nd Season",
            userPreferred: "Urusei Yatsura (2022) 2nd Season",
          },
          type: "TV",
          anilistID: "155645",
          malID: "54829",
          synonyms: [
            "Urusei Yatsura: All Stars Season 2",
            "Lum, the Invader Girl Season 2",
            null,
          ],
          description:
            "The second season of <i>Urusei Yatsura (2022)</i>.<br><br>\n\nLum, the gorgeous daughter of an invading race of Oni Aliens is smitten with High School student Ataru Moroboshi. A dedicated womanizer, Ataru is unfazed by Lum’s fierce electric shock attacks and continues his daily hunt for pretty girls. With a host of other unique characters, including classmate Shinobu, elegant shrine maiden Sakura, Lum’s best friend’s Oyuki, Benten and Ran, Buddhist Monk Cherry, Ten, the little brat, heir to a wealthy family Shuutaro Mendou and the secretly female beauty Ryunosuke… A classic slapstick love comedy where anything goes!<br><br>(Source: Fuji Creative)<br>\n<br>\n<i>Note: HIDIVE has labeled the first cour of this season as “Season 3.” They labeled the 1st and 2nd cours of the 1st season as “Season 1” and “Season 2.”</i>",
          episodeNum: 12,
          animeLength: 23,
          genres: ["Comedy", "Romance", "Sci-Fi", "Supernatural"],
          status: "RELEASING",
          season: null,
          averageScore: "75",
          nextAiringEpisode: {
            airingAt: 1712251800,
            episode: 13,
            delayed: true,
            delayedText:
              "Episode 13 has been delayed by a week due to a split-cour break. Episode 13 will air on April 11th.",
          },
          duration: 23,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143277-BJYg1aFUE8tV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143277-BJYg1aFUE8tV.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/143277-tdi4PEWPbuuB.jpg",
              meanScore: 72,
              episodes: 23,
              trailer: "LXlFsAI3sYQ",
              description:
                "When an alien race known as the Oni invade Earth, the chronically unlucky and unapologetically lecherous Ataru Moroboshi is selected as humanity’s representative in a duel for the fate of the planet! His opponent is Lum, the Oni’s very pretty princess, and it’s only thanks to Ataru’s unscrupulous behavior that he’s able to scrape out a win in a treacherous game of tag against her. Ataru thinks he’s had his lucky break at last, but when Lum takes a shine to him off the battlefield, the conflict follows him home as Lum invades not only planet Earth, but also the womanizing Ataru’s love life!",
              startDate: {
                year: 2022,
                month: 10,
                day: 14,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Urusei Yatsura (2022)",
                english: "Urusei Yatsura (2022)",
                romaji: "Urusei Yatsura (2022)",
              },
              anilistID: 143277,
              slug: "urusei-yatsura-2022",
            },
          ],
          startDate: {
            year: 2024,
            month: 1,
            day: 12,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711647841,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155645-Wl60JjmslUrL.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/vzOSTRN7ThklByHIMKHRYDO2cfV.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/vzOSTRN7ThklByHIMKHRYDO2cfV.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/vzOSTRN7ThklByHIMKHRYDO2cfV.jpg",
          },
          airingTime: 1712252400000,
          delayed: true,
          scheduledEpisode: 13,
        },
        {
          slug: "henjin-no-salad-bowl",
          title: {
            english: "A Salad Bowl of Eccentrics",
            native: "変人のサラダボウル",
            romaji: "Henjin no Salad Bowl",
            userPreferred: "Henjin no Salad Bowl",
          },
          type: "TV",
          anilistID: "166828",
          malID: "55877",
          synonyms: ["Salad Bowl of Eccentrics", null],
          description:
            "Sousuke Kaburaya, an impoverished detective, met Sara, a princess from another world with magical powers.\n<br><br>\nSara began living with Sousuke, and she quickly adjusted to life in modern Japan.<br>\nMeanwhile, Livia, a female knight who came from the same world as Sara, found herself lost and homeless, but surprisingly enjoyed her days here.\n<br><br>\nThese two people, who live a positive life despite their situation, began to have an impact on Sousuke and the other oddballs in the neighborhood, including a devilish lawyer, a divorce agent, and a cult leader. <br><br>\n(Source: Shogakukan, translated)",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Comedy", "Fantasy", "Slice of Life"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712852880,
            episode: 2,
          },
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 21,
          },
          updatedAt: 1712277592,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/6dumHhfa0BMzjwEZpj9o4uVcGpP.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/6dumHhfa0BMzjwEZpj9o4uVcGpP.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/6dumHhfa0BMzjwEZpj9o4uVcGpP.jpg",
          },
          bannerImage: null,
          airingTime: 1712256900000,
          delayed: false,
          scheduledEpisode: 1,
        },
      ],
      today: false,
    },
    {
      title: "Friday",
      animes: [
        {
          slug: "ninjala",
          title: {
            english: null,
            native: "ニンジャラ",
            romaji: "Ninjala",
            userPreferred: "Ninjala",
          },
          type: "TV",
          anilistID: "142274",
          malID: "50418",
          synonyms: [],
          description:
            "The year is 20XX. The ninja, who once forged the history of Japan, were scattered across the country during the Meiji Restoration. As these ninja mingled with the other clans, their bloodline thinned, and they gradually faded from sight. The descendants of these ninja clans, seeking to preserve their heritage, formed the WNA (World Ninja Association) in the hope of carrying on their legacy.\n<br><br>\nAnd so it was that the WNA succeeded in developing Ninja-Gum, an art which could summon forth the strength of the Shinobi. And yet creating the most powerful Ninja-Gum requires the strongest of ninja DNA. So it was that the Ninjala Tournament was held, that the mightiest of all ninjas could be found...\n<br><br>\n(Source: Official Game website)",
          episodeNum: 105,
          genres: ["Action", "Comedy", "Sci-Fi"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "46",
          nextAiringEpisode: {
            airingAt: 1712286000,
            episode: 111,
          },
          duration: 23,
          relatedAnime: [],
          startDate: {
            year: 2022,
            month: 1,
            day: 8,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1708868859,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/2EkTiYPBvW3R1221Sk4436PkoHt.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/2EkTiYPBvW3R1221Sk4436PkoHt.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/2EkTiYPBvW3R1221Sk4436PkoHt.jpg",
          },
          airingTime: 1712286600000,
          delayed: false,
          scheduledEpisode: 111,
        },
        {
          slug: "nijiyon-animation-2",
          title: {
            english: "NIJIYON ANIMATION Season 2",
            native: "にじよん あにめーしょん2",
            romaji: "NIJIYON ANIMATION 2",
            userPreferred: "NIJIYON ANIMATION 2",
          },
          type: "TV_SHORT",
          anilistID: "172242",
          malID: "57623",
          synonyms: [],
          description:
            'The second season of <i>NIJIYON ANIMATION</i>. <br><br>\n\n<i>Note: Anime announced in the "LoveLive! Nijigasaki High School Idol Club 6th Live! I love You ⇆ You love Me" Day 2 concert at Aichi Sky Expo.</i>',
          episodeNum: 1,
          animeLength: null,
          genres: ["Comedy", "Music", "Slice of Life"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712926440,
            episode: 2,
          },
          duration: null,
          trailerVideo: "IfVoRXUfiAU",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712323604,
          bannerImage: null,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx172242-1VjrQuON0Zfu.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx172242-1VjrQuON0Zfu.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx172242-1VjrQuON0Zfu.png",
          },
          scheduledEpisode: 1,
          airingTime: 1712325840000,
          delayed: false,
        },
        {
          slug: "astro-note",
          title: {
            english: "Astro Note",
            native: "アストロノオト",
            romaji: "Astro Note",
            userPreferred: "Astro Note",
          },
          type: "TV",
          anilistID: "171040",
          malID: "57391",
          synonyms: [],
          description:
            "Takumi, a gifted chef, was just let go from his job. He lands a gig at an old boarding house called Astro-sou, but hesitates to accept after learning he must also live there full-time. That is until he meets the beautiful and charming caretaker, Mira, and he’s sold. The two begin to work together and their connection deepens. But Mira has a secret: she isn’t from this world!<br><br>\n\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Comedy", "Romance", "Sci-Fi"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712928600,
            episode: 2,
          },
          duration: null,
          trailerVideo: "2_CrvGBSsAg",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 21,
          },
          updatedAt: 1712326464,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/f1ubIMALVWRvIUxho9yHhoHb9qb.jpg",
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171040-o1oMiDGZT98Z.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx171040-o1oMiDGZT98Z.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx171040-o1oMiDGZT98Z.jpg",
          },
          scheduledEpisode: 1,
          airingTime: 1712326200000,
          delayed: false,
        },
        {
          slug: "tensei-shitara-slime-datta-ken-3rd-season",
          title: {
            english: "That Time I Got Reincarnated as a Slime Season 3",
            native: "転生したらスライムだった件 第3期",
            romaji: "Tensei Shitara Slime Datta Ken 3rd Season",
            userPreferred: "Tensei Shitara Slime Datta Ken 3rd Season",
          },
          type: "TV",
          anilistID: "156822",
          malID: "53580",
          synonyms: [
            "That Time I Got Reincarnated as a Slime Season 3",
            "Tensura 3",
            "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว ภาค 3",
            null,
          ],
          description:
            "The third season of <i>Tensei Shitara Slime Datta Ken</i>.<br><br>\nRimuru has officially become a Demon Lord after defeating Clayman. Following Walpurgis, the Demon Lords' banquet, Rimuru's domain is expanded to include the entire Great Forest of Jura. Anticipating a flood of representatives from all races showing up to pay their respects, Rimuru decides to throw a festival to commemorate the opening of Tempest, using it as an opportunity to gain new citizens and present Demon Lord Rimuru to the world. Meanwhile, in the Holy Empire of Lubelius, home base of the monster-hating cult of Luminism, Holy Knight Captain Hinata receives a message from Rimuru. But the message is actually a fabricated declaration of war sent by some unknown party. Upon learning that Hinata is heading for Tempest, Rimuru makes a decision... Thus begins a new challenge for Rimuru, striving to distinguish friend from foe in his pursuit of the ideal nation where humans and monsters can prosper together. <br><br>\n(Source: Crunchyroll)\n",
          episodeNum: 2,
          animeLength: 24,
          genres: ["Action", "Adventure", "Comedy", "Fantasy"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712930400,
            episode: 2,
          },
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116742-jn0dW23ftehq.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx116742-jn0dW23ftehq.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/116742-yJjsZw2UppWO.jpg",
              meanScore: 83,
              episodes: 12,
              trailer: "S4VDmPgxpTs",
              description:
                'The second cour of Tensei Shitara Slime Datta Ken 2nd Season.The nation of Tempest is in a festive mood after successfully overcoming the surprise attack from the Falmuth Army and the Western Holy Church. Beyond the festivities lies a meeting between Tempest and its allies to decide the future of the Nation of Monsters. The aftermath of the Falmuth invasion, Milim Nava\'s suspicious behavior, and the disappearance of Demon Lord Carrion—the problems seem to keep on piling up.Rimuru Tempest, now awakened as a "True Demon Lord," decides to go on the offensive against Clayman. With the fully revived "Storm Dragon" Veldora, "Ultimate Skill" Raphael, and other powerful comrades, the ruler of the Tempest is confident in taking down his enemies one by one until he can face the man pulling the strings.',
              startDate: {
                year: 2021,
                month: 7,
                day: 6,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred:
                  "Tensei Shitara Slime Datta Ken 2nd Season Part 2",
                english:
                  "That Time I Got Reincarnated as a Slime Season 2 Part 2",
                romaji: "Tensei Shitara Slime Datta Ken 2nd Season Part 2",
              },
              anilistID: 116742,
              slug: "tensei-shitara-slime-datta-ken-2nd-season-part-2",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712331827,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/gD7xiNAtup59rg8PYhJ17W1iydg.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/gD7xiNAtup59rg8PYhJ17W1iydg.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/gD7xiNAtup59rg8PYhJ17W1iydg.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/156822-y0wPQIl3AHDA.jpg",
          airingTime: 1712331600000,
          delayed: false,
          scheduledEpisode: 1,
        },
        {
          slug: "mahouka-koukou-no-rettousei-3",
          title: {
            english: "The Irregular at Magic High School Season 3",
            native: "魔法科高校の劣等生 第3シーズン",
            romaji: "Mahouka Koukou no Rettousei 3rd Season",
            userPreferred: "Mahouka Koukou no Rettousei 3rd Season",
          },
          type: null,
          anilistID: "143271",
          malID: "50713",
          synonyms: [
            "Mahouka Koukou no Rettousei Zoku-hen",
            "魔法科高校の劣等生 続編",
            null,
          ],
          description:
            'The third season of <i>Mahouka Koukou no Rettousei.</i><br><br>\n\nAfter the battle against The New Breed Front, Tatsuya and Miyuki enter the new "Magic Engineering Department."<br><br>\n\n(Source: Crunchyroll)',
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Sci-Fi", "Supernatural"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712932200,
            episode: 2,
          },
          duration: null,
          trailerVideo: "D2ZwR6cZVQQ",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112300-I5ucx66OvqWX.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112300-I5ucx66OvqWX.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112300-qYRRTys8bmeS.jpg",
              meanScore: 72,
              episodes: 13,
              trailer: "OWvSWvvmRS8",
              description:
                "The second season of Mahouka Koukou no Rettousei.Miyuki Shiba’s classmate Kitayama Shizuku is on her way to study abroad. For magicians, this is normally impossible, since allowing the genes of someone who can use magic outside their home country’s borders is tantamount to giving up national secrets. But it’s allowed to happen in one case—exchange programs.And that’s how Angelina Kudou Shields, known as Lina, has arrived in Japan from the USNA to study at First High. Around the time Lina arrived in Japan, magicians began getting attacked by a mysterious being who leaves his victims drained of blood. Will Tatsuya and Miyuki Shiba be able to discover the identity of the “Vampire”?",
              startDate: {
                year: 2020,
                month: 10,
                day: 4,
              },
              seasonYear: 2020,
              animeName: {
                userPreferred: "Mahouka Koukou no Rettousei: Raihousha-hen",
                english: "The Irregular at Magic High School: Visitor Arc",
                romaji: "Mahouka Koukou no Rettousei: Raihousha-hen",
              },
              anilistID: 112300,
              slug: "mahouka-koukou-no-rettousei-raihousha-hen",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 5,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712333714,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx143271-o5wry0ohH9R3.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx143271-o5wry0ohH9R3.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx143271-o5wry0ohH9R3.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/lpLZuBJuGDGSzLDVvIDKkdOpLuD.jpg",
          scheduledEpisode: 1,
          airingTime: 1712333400000,
          delayed: false,
        },
        {
          slug: "snack-basue",
          title: {
            english: "Snack Basue",
            native: "スナックバス江",
            romaji: "Snack Basue",
            userPreferred: "Snack Basue",
          },
          type: null,
          anilistID: "166093",
          malID: "55636",
          synonyms: [null],
          description:
            "Welcome to Snack Basue! Delight yourself in this charming snack bar, just five stations away from Hokkaido's largest downtown area, Susukino. Run by the quirky proprietress, Basue, and her junior hostess, Akemi, the place is filled with laughter and smiles from its oddball regulars and walk-ins as they regale tales of their lives. So, pull up a seat and have a drink—is shochu OK? <br><br>\n(Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 13,
          genres: ["Comedy"],
          status: "FINISHED",
          season: null,
          averageScore: "54",
          nextAiringEpisode: null,
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 13,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 6,
          },
          updatedAt: 1712338269,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/9QNmG6cv0UG0GP3Q4wQCrhkxwK4.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/9QNmG6cv0UG0GP3Q4wQCrhkxwK4.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/9QNmG6cv0UG0GP3Q4wQCrhkxwK4.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/kvsmDwZxVt094tX5M9tqtGvNuT3.jpg",
          airingTime: 1712337900000,
          delayed: false,
          scheduledEpisode: 13,
        },
        {
          slug: "highspeed-etoile",
          title: {
            english: "HIGHSPEED Étoile",
            native: "HIGHSPEED Étoile",
            romaji: "HIGHSPEED Étoile",
            userPreferred: "HIGHSPEED Étoile",
          },
          type: "TV",
          anilistID: "152302",
          malID: "52405",
          synonyms: ["ハイスピード エトワール", null],
          description:
            "Rin Rindou, who once dreamt of becoming a ballet dancer before being sidelined by injury, is embracing a quiet life with her grandmother until she is unexpectedly thrust into the high-speed world of racing. Now, she faces a new adrenaline-fueled reality in the NEX Race, a revolutionary motorsport event exceeding speeds of 500 km/h.<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Sports"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1712940780,
            episode: 2,
          },
          duration: null,
          trailerVideo: "F4VJttn-xEA",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 6,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712341183,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx152302-afLOVyltWMSq.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx152302-afLOVyltWMSq.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx152302-afLOVyltWMSq.jpg",
          },
          bannerImage: null,
          scheduledEpisode: 1,
          airingTime: 1712340600000,
          delayed: false,
        },
        {
          slug: "cardfight-vanguard-willdress-season-4",
          title: {
            english: "CARDFIGHT!! VANGUARD Divinez",
            native: "カードファイト!! ヴァンガード Divinez",
            romaji: "Cardfight!! Vanguard: Divinez",
            userPreferred: "Cardfight!! Vanguard: Divinez",
          },
          type: "TV",
          anilistID: "164204",
          malID: "54142",
          synonyms: [null],
          description:
            'One day, six cards known as the "Six Desires" were born with the power to change fate.<br>\nSix fighters were chosen, and would come to possess those six cards. What awaited them was the “Fated Clash“, where they would fight each other until the end, and the last one standing would have any wish granted. A youth named Akina Myodo, who wants to help his frail sister, participates in the Fated Clash to have his wish granted.\n<br><br>\nAnd thus, he throws himself into battles with powerful fighters.<br><br>\n(Source: Crunchyroll)',
          episodeNum: 11,
          animeLength: 13,
          genres: ["Action", "Adventure"],
          status: "RELEASING",
          season: null,
          averageScore: "57",
          nextAiringEpisode: {
            airingAt: 1712360400,
            episode: 12,
            delayed: true,
            delayedText:
              "Episode 12 has been delayed by a week. Episode 12 will air on April 12th, 2024.",
          },
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150970-EnW0c0Gwaa4P.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150970-EnW0c0Gwaa4P.png",
              },
              bannerImage: null,
              meanScore: 65,
              episodes: 13,
              trailer: "qhbU0zVtr58",
              description:
                "The third season of Cardfight!! Vanguard: will+Dress.Vanguard becomes dominated by the Uniformers. A world where everyone can become the strongest... Is the world envisioned by AI GUI ideal? Yu-yu and his friends fight for the sake of enjoyable cardfights with individuality!",
              startDate: {
                year: 2023,
                month: 7,
                day: 8,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Cardfight!! Vanguard: will+Dress Season 3",
                english: "Cardfight!! Vanguard will+Dress Season 3",
                romaji: "Cardfight!! Vanguard: will+Dress Season 3",
              },
              anilistID: 150970,
              slug: "cardfight-vanguard-willdress-season-3",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "SEQUEL",
              relationName: "Sequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b165681-hVWwAIBiU1lx.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b165681-hVWwAIBiU1lx.png",
              },
              bannerImage: null,
              meanScore: null,
              episodes: null,
              description:
                "The seventh season of Cardfight!! Vanguard: overDress.",
              startDate: {
                year: 2024,
                month: 7,
                day: null,
              },
              seasonYear: 2024,
              animeName: {
                userPreferred: "Cardfight!! Vanguard: will+Dress Season 5",
                english: null,
                romaji: "Cardfight!! Vanguard: will+Dress Season 5",
              },
              anilistID: 165681,
              slug: "cardfight-vanguard-willdress-season-5",
            },
          ],
          startDate: {
            year: 2024,
            month: 1,
            day: 13,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 20,
          },
          updatedAt: 1711756630,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/6J6MwMiP3mfO3d6TOghd9fqaDiI.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/6J6MwMiP3mfO3d6TOghd9fqaDiI.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/6J6MwMiP3mfO3d6TOghd9fqaDiI.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/1uuWlEEAZHnPX1VnwqJc7pfo2YM.jpg",
          airingTime: 1712361000000,
          delayed: true,
          scheduledEpisode: 12,
        },
      ],
      today: false,
    },
    {
      title: "Saturday",
      animes: [
        {
          slug: "ooi-tonbo",
          title: {
            english: null,
            native: "オーイ! とんぼ",
            romaji: "Ooi! Tonbo",
            userPreferred: "Ooi! Tonbo",
          },
          type: "TV",
          anilistID: "164440",
          malID: "55194",
          synonyms: ["Hey! Tonbo", null],
          description:
            " The story begins with Igarashi, who was disqualified as a pro golfer after a certain \"incident\" and thus moves to Kagoshima Prefecture's Tokara Islands to step out of the limelight. On these islands known as \"Japan's last unexplored wilderness,\" he encounters a naive girl named Tonbo.\n<br><br>\nAs it turns out, these supposedly unexplored islands have a homemade golf course, where Tonbo plays every day. She demonstrates genius-level prowess, playing every kind of shot with just one golf club, a 3-iron. Igarashi is amazed at Tonbo's talent, even as he harbors doubts about her only using a 3-iron. Yet, hidden deep in Tonbo's heart lies a painful, sad past…. <br><br>\n(Source: Anime News Network)",
          episodeNum: null,
          animeLength: null,
          genres: ["Drama", "Sports"],
          status: "NOT_YET_RELEASED",
          season: null,
          averageScore: null,
          nextAiringEpisode: null,
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: null,
            day: null,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1688547644,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164440-0OEblpcn9n6m.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx164440-0OEblpcn9n6m.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx164440-0OEblpcn9n6m.jpg",
          },
          scheduledEpisode: 1,
          airingTime: 1712367600000,
          delayed: false,
        },
        {
          slug: "meitantei-conan",
          title: {
            english: "Case Closed",
            native: "名探偵コナン",
            romaji: "Meitantei Conan",
            userPreferred: "Meitantei Conan",
          },
          type: "TV",
          anilistID: "235",
          malID: "235",
          synonyms: [
            "Detective Conan",
            "Detectiu Conan",
            "הבלש קונאן",
            "Detektyw Conan",
            "المحقق كونان",
            "名侦探柯南",
            "Meitantei Conan: Keisaku Gakkou Hen - Wild Police Story",
            "名探偵コナン 警察学校編 Wild Police Story",
            "Détective Conan",
            "ยอดนักสืบจิ๋วโคนัน",
            "Thám Tử Lừng Danh Conan",
            "Case Closed: One Truth Prevails",
          ],
          description:
            'Kudo Shinichi is a seventeen year-old high school detective whom people call the "Modern Sherlock Holmes." However, one night after a date with his childhood sweetheart, Ran, Shinichi witnessed an illegal trade and, caught off his guard, was knocked unconscious and fed a drug that was supposed to kill him... but he woke up and found himself shrunken to a seven year-old. In order to track down the men who did this to him, Shinichi hid his identity and lived with Ran, whose father happened to be a hopeless detective, and with that came a series of murders and mysteries that he must solve. <br><br>\n(Source: Anime News Network)\n<br><br>\n<i>Note:<br>\n- Includes Keisatsu Gakkou-hen - Wild Police Story in episodes 1029, 1038, 1042, 1061<br>\n- Episodes 11, 52, 76, 118, 162, 184, 208, 342, 356, 449, 452, 487, 488, 489, 490, 515, 516, 521, 522, 651, 734, 804, 805, 927, 928 aired with a runtime of ~50 minutes as opposed to the standard 25 minute long episode.<br>\n- Episodes 96, 129, 174, 219, 263, 304, 383, 479 aired with a runtime of ~90 minutes as opposed to the standard 25 minute long episode.<br>\n- Episode 345, 425 aired with a runtime of ~115 minutes as opposed to the standard 25 minute long episode.<br>\n</i>',
          episodeNum: 1119,
          genres: ["Adventure", "Comedy", "Mystery", "Psychological"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "81",
          nextAiringEpisode: {
            airingAt: 1712998800,
            episode: 1120,
          },
          duration: 25,
          trailerVideo: "iR2l9M0KzuQ",
          relatedAnime: [
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx779-xc5cHSos8DKn.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx779-xc5cHSos8DKn.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n779-6gM60BQ03PQZ.jpg",
              meanScore: 76,
              episodes: 1,
              description:
                "Taking the original story of Detective Conan, this first Conan film follows his adventures as he struggles to find and capture a mad bomber who's loose in his home town. Chasing bomb after bomb, Conan must stop him before he destroys a skyscraper in the middle of the city, which has the potential to cause millions of dollars in damage and kill hundreds. Who's planting the bombs? What are his motives? Gather clues with Conan and find out!",
              startDate: {
                year: 1997,
                month: 4,
                day: 19,
              },
              seasonYear: 1997,
              animeName: {
                userPreferred: "Meitantei Conan: Tokei Jikake no Matenrou",
                english: "Case Closed: The Time Bombed Skyscraper",
                romaji: "Meitantei Conan: Tokei Jikake no Matenrou",
              },
              anilistID: 779,
              slug: "meitantei-conan-tokei-jikake-no-matenrou",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1505-1ARTmIc0Ryh6.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1505-1ARTmIc0Ryh6.png",
              },
              bannerImage: null,
              meanScore: 75,
              episodes: 1,
              description:
                "15 years ago, Daiichi Yachiyo Maru, a cargo ship, was crashed into a large iceberg in northern the Pacific Ocean, and sank. The captain and a crew were died.Now, in Nishitama, a ship designer of Yatsushiro Shipbuilder, which belonged to Yatsushiro Financial Combine, was suffered from a sudden heart attack while he was driving, and died in a traffic accident.Six months has passed since then. Conan, Ran, and Kogoro are enjoying their trip in the Aphrodite. The Aphrodite is a luxury liner, and it is sailing for the Pacific Ocean as its maiden voyage. However, there is a suspicious person, and finally a murder occurs.It is the beginning of a horrible plot occurred in the ocean where there is no place to escape from.",
              startDate: {
                year: 2005,
                month: 4,
                day: 9,
              },
              seasonYear: 2005,
              animeName: {
                userPreferred: "Meitantei Conan: Suihei Senjou no Sutoratejii",
                english: "Case Closed: Strategy Above the Depths",
                romaji: "Meitantei Conan: Suihei Senjou no Sutoratejii",
              },
              anilistID: 1505,
              slug: "meitantei-conan-suihei-senjou-no-sutoratejii",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2171-WiAcCpinTRvs.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2171-WiAcCpinTRvs.jpg",
              },
              bannerImage: null,
              meanScore: 71,
              episodes: 1,
              description:
                "The Isle of Koumi, a beautiful island in the Pacific Ocean. On the island, people pass an old legend down from generation to generation that there was the Seabed Palace, an ancient ruin at the bottom of the sea, where the treasure of 2 female pirates, Anne Bonnie &amp; Mary Reed (who really existed 300 years ago), was left. When Conan and his friends visit Koumi Island while on vacation, they meet some treasure hunters. There was something suspicious about them.",
              startDate: {
                year: 2007,
                month: 4,
                day: 21,
              },
              seasonYear: 2007,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Konpeki no Hitsugi (Jolly Roger)",
                english: "Case Closed: Jolly Roger in the Deep Azure",
                romaji: "Meitantei Conan: Konpeki no Hitsugi (Jolly Roger)",
              },
              anilistID: 2171,
              slug: "meitantei-conan-konpeki-no-hitsugi-jolly-roger",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20546-3etnJUBqpEdJ.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20546-3etnJUBqpEdJ.jpg",
              },
              bannerImage: null,
              meanScore: 78,
              episodes: 1,
              trailer: "XQG4DG7zCH0",
              description:
                "Shuichi Akai is targeted by a mysterious sniper and Masumi Sera is shot. Tokyo is in panic, citizens are taken in the shooting of a sniper. Nothing is known about him. Why was Sera targeted? Will Akai survive from this? Jodie Starling and Subaru Okiya are also in this one. Will Conan be able to find and apprehend the culprit?",
              startDate: {
                year: 2014,
                month: 4,
                day: 19,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred: "Meitantei Conan: Ijigen no Sniper",
                english: "Case Closed: The Sniper from Another Dimension",
                romaji: "Meitantei Conan: Ijigen no Sniper",
              },
              anilistID: 20546,
              slug: "meitantei-conan-ijigen-no-sniper",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx781-5VSeE53N40BF.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx781-5VSeE53N40BF.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n781-p47e6Uf1RG6d.jpg",
              meanScore: 78,
              episodes: 1,
              description:
                "Kaitou Kid announces to the police that he intends to steal the Russian Imperial Easter Egg, which is currently being held in Osaka. As Conan pursues his rival, he discovers that there's more to this case then simply stopping a robbery.",
              startDate: {
                year: 1999,
                month: 4,
                day: 17,
              },
              seasonYear: 1999,
              animeName: {
                userPreferred: "Meitantei Conan: Seikimatsu no Majutsushi",
                english: "Case Closed: The Last Wizard of the Century",
                romaji: "Meitantei Conan: Seikimatsu no Majutsushi",
              },
              anilistID: 781,
              slug: "meitantei-conan-seikimatsu-no-majutsushi",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6467-P24FJYtNRpyE.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6467-P24FJYtNRpyE.jpg",
              },
              bannerImage: null,
              meanScore: 78,
              episodes: 1,
              description:
                'The fourteenth movies in the series, The Lost Ship in the Sky, will be released on April 17, 2010. In the film\'s story, Kid has his eyes set on the "Lady of the Sky" jewel aboard Bell 3, the largest airship in the world. However, a mysterious terrorist group called Red Shamu-neko [Red Siamese Cat] has hijacked the airship itself, along with Conan and his allies Kogoro and Ran.',
              startDate: {
                year: 2010,
                month: 4,
                day: 17,
              },
              seasonYear: 2010,
              animeName: {
                userPreferred: "Meitantei Conan: Tenkuu no Lost Ship",
                english: "Case Closed: The Lost Ship in the Sky",
                romaji: "Meitantei Conan: Tenkuu no Lost Ship",
              },
              anilistID: 6467,
              slug: "meitantei-conan-tenkuu-no-lost-ship",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20878-p6VBv7uw1QFV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20878-p6VBv7uw1QFV.jpg",
              },
              bannerImage: null,
              meanScore: 76,
              episodes: 1,
              description:
                'It\'s been announced that a new Detective Conan anime special project is launching. The "astonishing collaboration" is titled "Edogawa Conan Shissou Jiken: Shijou Saiaku no Futsukakan" (The Disappearance of Conan Edogawa: The Worst Two Days in History).\r\rThe anime special will celebrate the 20th anniversary of Gosho Aoyama\'s original manga, and it will recount a previously untold story from Conan\'s past.',
              startDate: {
                year: 2014,
                month: 12,
                day: 26,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Edogawa Conan Shissou Jiken - Shijou Saiaku no Futsukakan",
                english:
                  "The Disappearance of Conan Edogawa: The Worst Two Days in History",
                romaji:
                  "Meitantei Conan: Edogawa Conan Shissou Jiken - Shijou Saiaku no Futsukakan",
              },
              anilistID: 20878,
              slug: "meitantei-conan-edogawa-conan-shissou-jiken-shijou-saiaku-no-futsukakan",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5460-z2qeEVBe01dW.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5460-z2qeEVBe01dW.jpg",
              },
              bannerImage: null,
              meanScore: 79,
              episodes: 1,
              description:
                "Kudou Shinichi is living his life as Edogawa Conan, but those days seem to might end pretty soon. The Black Syndicate is coming dangerously close to learning the truth about Shinichi having survived. Conan and everybody around him may end up dead if he doesn't manage to find Irish - a member of the Black Organisation who has infiltrated the police forces, currently investigating a big serial murders case.",
              startDate: {
                year: 2009,
                month: 4,
                day: 18,
              },
              seasonYear: 2009,
              animeName: {
                userPreferred: "Meitantei Conan: Shikkoku no Chaser",
                english: "Case Closed: The Jet Black Chaser",
                romaji: "Meitantei Conan: Shikkoku no Chaser",
              },
              anilistID: 5460,
              slug: "meitantei-conan-shikkoku-no-chaser",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9963-U5oy6aGrpTch.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9963-U5oy6aGrpTch.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9963-zsQuOBFKNXc2.jpg",
              meanScore: 77,
              episodes: 1,
              description:
                "The story begins with a threat against the Tokyo governor, but Conan's quick thinking prevents any fatalities when a subway tunnel is blown up. Conan learns there may be a connection to a village that was relocated for the construction of a dam, and he races to stop the criminal before the next attack.",
              startDate: {
                year: 2011,
                month: 4,
                day: 16,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "Meitantei Conan: Chinmoku no Quarter",
                english: "Case Closed: Quarter of Silence",
                romaji: "Meitantei Conan: Chinmoku no Quarter",
              },
              anilistID: 9963,
              slug: "meitantei-conan-chinmoku-no-quarter",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1364-tlZLDeDo8W0z.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1364-tlZLDeDo8W0z.jpg",
              },
              bannerImage: null,
              meanScore: 78,
              episodes: 1,
              description:
                "As a pair of towers in Tokyo are being prepared for their grand opening, there is a series of murders of people connected to the towers. Conan suspects that the mysterious Syndicate may also be involved.",
              startDate: {
                year: 2001,
                month: 4,
                day: 21,
              },
              seasonYear: 2001,
              animeName: {
                userPreferred: "Meitantei Conan: Tengoku e no Count Down",
                english: "Case Closed: Countdown to Heaven",
                romaji: "Meitantei Conan: Tengoku e no Count Down",
              },
              anilistID: 1364,
              slug: "meitantei-conan-tengoku-e-no-count-down",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1363-KeaIofC3kYaZ.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1363-KeaIofC3kYaZ.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1363-rP3Ks2HcfzEJ.jpg",
              meanScore: 78,
              episodes: 1,
              description:
                "A series of murders have occurred with police officers as victims. One of the officers is shot right in front of Ran's eyes, and the shock of the incident causes Ran to lose her memory of everyone and everything around her. Now Conan must help Ran regain her lost memories, while also protecting her from the murderer, who is targeting Ran for witnessing the crime.",
              startDate: {
                year: 2000,
                month: 4,
                day: 22,
              },
              seasonYear: 2000,
              animeName: {
                userPreferred: "Meitantei Conan: Hitomi no Naka no Ansatsusha",
                english: "Case Closed: Captured In Her Eyes",
                romaji: "Meitantei Conan: Hitomi no Naka no Ansatsusha",
              },
              anilistID: 1363,
              slug: "meitantei-conan-hitomi-no-naka-no-ansatsusha",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1365-FLEpMCC8Ghhk.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1365-FLEpMCC8Ghhk.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1365-o7WI3BxstabV.jpg",
              meanScore: 80,
              episodes: 1,
              description:
                "Conan was invited to a party with many other guests. They were there to test a new virtual game system, when a murder mystery occured. Now Conan must go into the game system to figure out who the murderer is with the help of the famous book character Sherlock Holmes. The lives of 49 kids testing the game are in his hands.",
              startDate: {
                year: 2002,
                month: 4,
                day: 20,
              },
              seasonYear: 2002,
              animeName: {
                userPreferred: "Meitantei Conan: Baker Street no Bourei",
                english: "Case Closed: The Phantom of Baker Street",
                romaji: "Meitantei Conan: Baker Street no Bourei",
              },
              anilistID: 1365,
              slug: "meitantei-conan-baker-street-no-bourei",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1366-76LNoYLEqaxv.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1366-76LNoYLEqaxv.jpg",
              },
              bannerImage: null,
              meanScore: 75,
              episodes: 1,
              description:
                "Mouri Kogoro is called to a special case in the ancient capital of Kyoto. There, Conan meets Heiji and they team up once again to solve the case, recover the stolen Healing Buddha statue, and even discover the identity of Heiji's first love.",
              startDate: {
                year: 2003,
                month: 4,
                day: 19,
              },
              seasonYear: 2003,
              animeName: {
                userPreferred: "Meitantei Conan: Meikyuu no Crossroad",
                english: "Case Closed: Crossroad in the Ancient Capital",
                romaji: "Meitantei Conan: Meikyuu no Crossroad",
              },
              anilistID: 1366,
              slug: "meitantei-conan-meikyuu-no-crossroad",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14735-RIyq7XzIIzcc.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14735-RIyq7XzIIzcc.jpg",
              },
              bannerImage: null,
              meanScore: 74,
              episodes: 1,
              trailer: "zL0pX3caP_A",
              description:
                'The movie is set on a state-of-the art Aegis vessel with the full cooperation of Japan\'s real-life Ministry of Defense and Maritime Self-Defense Force. The corpse of a Self-Defense Force member has been found &mdash; minus the left arm &mdash; and a spy has infiltrated the Aegis vessel. The heroine Ran is put in jeopardy, and Conan is forced to stand up against the dangerous Spy "X."',
              startDate: {
                year: 2013,
                month: 4,
                day: 20,
              },
              seasonYear: 2013,
              animeName: {
                userPreferred: "Meitantei Conan: Sekkai no Private Eye",
                english: "Case Closed: Private Eye in the Distant Sea",
                romaji: "Meitantei Conan: Sekkai no Private Eye",
              },
              anilistID: 14735,
              slug: "meitantei-conan-sekkai-no-private-eye",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/6115.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/6115.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6115-UOroY5JEir6l.jpg",
              meanScore: 75,
              episodes: 1,
              description:
                "Beloved criminal Lupin III has his sights set on a new score: the crown of the Vespanian royal family! His timing, however, couldn't be worse. The sudden death of the queen and prince of Vespania has thrown the country into disarray, and while that won't hurt the gentleman burglar's efforts, it comes with a small problem... and that problem's name is Conan Edogawa! Throw in a royal case of mistaken identity, along with a shadowy plot born from greed, and it's a stage appropriately set for a clash between the world's greatest thief and the world's greatest detective!",
              startDate: {
                year: 2009,
                month: 3,
                day: 27,
              },
              seasonYear: 2009,
              animeName: {
                userPreferred: "Lupin III vs Meitantei Conan",
                english: "Lupin the 3rd Vs Detective Conan",
                romaji: "Lupin III vs Meitantei Conan",
              },
              anilistID: 6115,
              slug: "lupin-iii-vs-meitantei-conan",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4447-aztQrCRbw1OK.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4447-aztQrCRbw1OK.jpg",
              },
              bannerImage: null,
              meanScore: 75,
              episodes: 1,
              description:
                'Serial murders involving all kinds have happened. All the victims are from a Music School led by a famous pianist. Conan and company have been invited to a opening concert of the Music Hall built by the pianist. The biggest attraction of this concert is the world famous violin called "Stradivarius" and a special appearance of a singer who has perfect pitch.',
              startDate: {
                year: 2008,
                month: 4,
                day: 19,
              },
              seasonYear: 2008,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Senritsu no Gakufu (Full Score)",
                english: "Case Closed: Full Score of Fear",
                romaji: "Meitantei Conan: Senritsu no Gakufu (Full Score)",
              },
              anilistID: 4447,
              slug: "meitantei-conan-senritsu-no-gakufu-full-score",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98222-PT0Ob1qkGDUW.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98222-PT0Ob1qkGDUW.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98222-ZpgGg9E0KK8l.png",
              meanScore: 75,
              episodes: 1,
              trailer: "d44tuuPbAw8",
              description:
                "A bombing case at Nichiuri TV in autumn. The Satsuki Cup, which crowns the winner of Japan's Ogura Hyakunin Isshu based competitive karuta tournament, is currently being filmed inside the facility. The incident results in a big commotion and, while the building is burning to ashes, the only people left inside are Heiji and Kazuha. They get rescued just in time by Conan, who rushes to the scene. Both the identity and motive of the bomber are unknown.While confusion takes over due to the explosion, Conan meets a mysterious beautiful girl who claims she is \"Heiji's fiancée\". Her name is Momiji Ooka and she is the Kyoto High School karuta champion. As fate would have it, Kazuha is going to face Momiji in the Hyakunin Isshu competition, so she begins to train with the help of Heiji's mother, Shizuka, who is a skilled karuta player.At the same time, in a Japanese house in Arashiyama, Kyoto's outskirts, the reigning Satsuki Cup champion is murdered. Pictures of the crime scene reveal Momji's presence. Additionally, several karuta cards were spread around the victim.Conan and Heiji, along with the Osaka and Kyoto police departments, begin their investigation on the Satsuki Cup and the related murder case. As the inquiry goes on, they come across a secret connected with the Hyakunin Isshu.",
              startDate: {
                year: 2017,
                month: 4,
                day: 15,
              },
              seasonYear: 2017,
              animeName: {
                userPreferred: "Meitantei Conan: Kara Kurenai Love Letter",
                english: "Case Closed: Crimson Love Letter",
                romaji: "Meitantei Conan: Kara Kurenai Love Letter",
              },
              anilistID: 98222,
              slug: "meitantei-conan-kara-kurenai-love-letter",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12117-wCtSIeqrMhTZ.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12117-wCtSIeqrMhTZ.jpg",
              },
              bannerImage: null,
              meanScore: 74,
              episodes: 1,
              description:
                "After an interaction with J-League professional players, Conan and co watches the big match between Tokyo Spirits and Gamba Osaka, only to find out that a bomb has been planted in the stadium. It is now up to Conan once again to foil the culprit's plans and reveal his/her true identity.",
              startDate: {
                year: 2012,
                month: 4,
                day: 14,
              },
              seasonYear: 2012,
              animeName: {
                userPreferred: "Meitantei Conan: 11 Nin-me no Striker",
                english: "Case Closed: The Eleventh Striker",
                romaji: "Meitantei Conan: 11 Nin-me no Striker",
              },
              anilistID: 12117,
              slug: "meitantei-conan-11-nin-me-no-striker",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21470-huY2vyX3Ej2z.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21470-huY2vyX3Ej2z.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21470-rL2cM130DLfc.jpg",
              meanScore: 79,
              episodes: 1,
              trailer: "bXkzfhqEKa8",
              description:
                "On a dark night, the Japanese police is raided by a spy. Different countries' intelligence agencies—such as England's MI6, Germany's BDN, and America's CIA—as well as the FBI's secret files are going to be taken, but public safety officers lead by Tooru Amuro arrive just in time. The spy steals a car and escapes. The spy and Amuro are then locked in a dead heat on the highway, and just as it is about to cause an accident with multiple cars, the spy's car is hit by FBI agent Shuichi Akai's rifle bullet and falls off the roadway.The next day, Conan and his friends go to a newly-remodeled aquarium in Tokyo. Under the main attraction, a Ferris wheel, Conan finds an attractive woman alone and injured. Her left and right eyes are different colors.But the woman is in a state of amnesia where she doesn't even remember her own name, and the cellphone she's carrying is broken. Conan and his friends promise to help her regain her memory, so they stay with her.Throughout all this, Vermouth is watching behind the scenes. Afterwards, she pulls out a silencer and speaks into an attached intercom, \"It's as planned, Gin.\"",
              startDate: {
                year: 2016,
                month: 4,
                day: 16,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred: "Meitantei Conan: Junkoku no Nightmare",
                english: "Case Closed: The Darkest Nightmare",
                romaji: "Meitantei Conan: Junkoku no Nightmare",
              },
              anilistID: 21470,
              slug: "meitantei-conan-junkoku-no-nightmare",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1367-cJLBjSfqBmRY.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1367-cJLBjSfqBmRY.jpg",
              },
              bannerImage: null,
              meanScore: 78,
              episodes: 1,
              description:
                "Kaito Kid strikes again in this new annual installment of the Detective Conan movies. An actress asked for Mouri Kogoro to protect a precious jewel of hers which Kid has vowed to steal. On the day of the theft, Kaito Kid dressed up as Shinichi and matched wits with Conan, and fled in the end. To thank them, the actress invited Kogoro and family and friends to Sapporo, but a bigger scheme, and a great emergency is just about to unravel high above the clouds in the plane that they're taking...",
              startDate: {
                year: 2004,
                month: 4,
                day: 17,
              },
              seasonYear: 2004,
              animeName: {
                userPreferred: "Meitantei Conan: Ginyoku no Magician",
                english: "Case Closed: Magician of the Silver Sky",
                romaji: "Meitantei Conan: Ginyoku no Magician",
              },
              anilistID: 1367,
              slug: "meitantei-conan-ginyoku-no-magician",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1506-EHhN6loLBaau.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1506-EHhN6loLBaau.jpg",
              },
              bannerImage: null,
              meanScore: 78,
              episodes: 1,
              description:
                "After receiving a strange invitation, Kogorou Mouri pays a visit to the Miracle Land theme park along with his daughter Ran, Conan Edogawa, and the Detective Boys. Once there, Kogorou and Conan are tasked with finishing an unsolved case by a mysterious stranger. Realizing that the invitations were actually an elaborate trap, the two have just 12 hours to solve the case or face grave danger.With the help of familiar faces like Heiji Hattori, Kaitou Kid, and even Saguru Hakuba, the group of detectives must unravel the web of clues surrounding the case in order to find the culprit and bring them to justice before it's too late.",
              startDate: {
                year: 2006,
                month: 4,
                day: 15,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred: "Meitantei Conan: Tantei-tachi no Requiem",
                english: "Case Closed: Requiem of the Detectives",
                romaji: "Meitantei Conan: Tantei-tachi no Requiem",
              },
              anilistID: 1506,
              slug: "meitantei-conan-tantei-tachi-no-requiem",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21646-N6cVkCIx9KsP.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21646-N6cVkCIx9KsP.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n21646-5OEYC0jBD6n2.jpg",
              meanScore: 75,
              episodes: 1,
              description:
                "Conan tries to track down Kaito Kid, who supposedly steals a replica of one of Van Gogh's Sunflowers paintings during an auction. ",
              startDate: {
                year: 2015,
                month: 4,
                day: 18,
              },
              seasonYear: 2015,
              animeName: {
                userPreferred: "Meitantei Conan: Gouka no Himawari",
                english: "Case Closed: Sunflowers of Inferno",
                romaji: "Meitantei Conan: Gouka no Himawari",
              },
              anilistID: 21646,
              slug: "meitantei-conan-gouka-no-himawari",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b780-hxqAnXzg8DX4.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b780-hxqAnXzg8DX4.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n780-QYieD3ITbwFE.jpg",
              meanScore: 76,
              episodes: 1,
              description:
                "Ran has a nightmare about her mother dying, but starts to remember what really happened involving herself, her mother, and her father from 10 years ago. Meanwhile, people are being injured by a certain culprit. Conan soon realizes that these people all have some kind of relation to Mouri, and that they all had a number in their name corresponding to a playing card and were being targeted in order, from the king down to the ace. The police soon decide that a murderous card dealer who just got out of jail and wanted revenge on Mouri is behind it. However, as injuries become murders and it is a race to predict who the next victims will be, Conan soon finds that the truth is something completely different, while learning about the incident from 10 years ago in the process.",
              startDate: {
                year: 1998,
                month: 4,
                day: 18,
              },
              seasonYear: 1998,
              animeName: {
                userPreferred: "Meitantei Conan: Juuyonbanme no Target",
                english: "Case Closed: The Fourteenth Target",
                romaji: "Meitantei Conan: Juuyonbanme no Target",
              },
              anilistID: 780,
              slug: "meitantei-conan-juuyonbanme-no-target",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100653-keuPmvVKDkhx.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100653-keuPmvVKDkhx.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n100653-zxyI1eDBJjJz.jpg",
              meanScore: 77,
              episodes: 1,
              trailer: "i1EDdyF109c",
              description:
                "There is a sudden explosion at Tokyo Summit's giant Edge of Ocean facility. The shadow of Touru Amuro, who works for the National Police Agency Security Bureau as Zero, appears at the site. In addition, the \"triple-face\" character known as Rei Furuya, a detective, and Kogorou Mouri's apprentice, is also known as Bourbon, a Black Organization member. Kogorou is arrested as a suspect in the case of the explosion. Conan conducts an investigation to prove Kogorou's innocence, but Amuro gets in his way.",
              startDate: {
                year: 2018,
                month: 4,
                day: 14,
              },
              seasonYear: 2018,
              animeName: {
                userPreferred: "Meitantei Conan: Zero no Shikkounin",
                english: "Case Closed: Zero the Enforcer",
                romaji: "Meitantei Conan: Zero no Shikkounin",
              },
              anilistID: 100653,
              slug: "meitantei-conan-zero-no-shikkounin",
            },
            {
              type: "ANIME",
              format: "OVA",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/10703.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/10703.jpg",
              },
              bannerImage: null,
              meanScore: 70,
              episodes: 1,
              description:
                "A Secret Order from London is the eleventh OVA of the anime and manga franchise Detective Conan. The plot revolves about Ai Haibara spending her time with Ayumi while Conan and company travel to London, only to be beset by a group of sinister-looking persons.",
              startDate: {
                year: 2011,
                month: 5,
                day: 30,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "Meitantei Conan: London kara no Maru Hi Shirei",
                english: "Case Closed: A Secret Order from London",
                romaji: "Meitantei Conan: London kara no Maru Hi Shirei",
              },
              anilistID: 10703,
              slug: "meitantei-conan-london-kara-no-maru-hi-shirei",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106206-OPpExaXYKUAD.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx106206-OPpExaXYKUAD.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106206-w7kU9ojcV3ls.jpg",
              meanScore: 77,
              episodes: 1,
              trailer: "2X-JSRWnH1Y",
              description:
                "The world's greatest blue sapphire, the \"blue lapis fist\", said to have sunk in a pirate ship in the late 19th century, on the coasts of Singapore. A local millionaire plots to retrieve it, and when it's exhibited in an exhibition at the Singaporean Marina Sands hotel, a murder takes place. A bloody Kaitou Kid announcement card is found in the crime scene.",
              startDate: {
                year: 2019,
                month: 4,
                day: 12,
              },
              seasonYear: 2019,
              animeName: {
                userPreferred: "Meitantei Conan: Konjou no Fist",
                english: "Case Closed: The Fist of Blue Sapphire",
                romaji: "Meitantei Conan: Konjou no Fist",
              },
              anilistID: 106206,
              slug: "meitantei-conan-konjou-no-fist",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158997-9HkllZFhiV5K.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158997-9HkllZFhiV5K.png",
              },
              bannerImage: null,
              meanScore: 74,
              episodes: 1,
              trailer: "-WIKbdURi4c",
              description:
                "The movie will focus on Ai Haibara's past and will reconstruct the Mystery Train arc from the television anime, which shows Haibara and Conan meeting for the first time. The movie will also include scenes from the Kurogane no Submarine (Black Iron Submarine) film.",
              startDate: {
                year: 2023,
                month: 1,
                day: 6,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Haibara Ai Monogatari - Kurogane no Mystery Train",
                english: null,
                romaji:
                  "Meitantei Conan: Haibara Ai Monogatari - Kurogane no Mystery Train",
              },
              anilistID: 158997,
              slug: "meitantei-conan-haibara-ai-monogatari-kurogane-no-mystery-train",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113653-HY0suLnhIlA6.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113653-HY0suLnhIlA6.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113653-fBVZxVTxxNHv.jpg",
              meanScore: 77,
              episodes: 1,
              trailer: "dwod6qZTVbQ",
              description:
                "Japan is celebrating the upcoming World Sports Games (WSG), the world's largest sporting event, in Tokyo. The \"Japanese Bullet,\" the world's first vacuum-tube super-conducting linear train, is built with the latest Japanese technology and timed to coincide with the WSG opening ceremonies. The train is set to run from Shin Nagoya Station to Tokyo Station at up to 1,000 kilometers per hour (about 600 miles per hour). However, a bizarre incident occurs during a party held by famous major sponsors, leading to a string of kidnappings of top executives. Conan deduces a possible link to serial abductions in the WSG 15 years earlier in Boston.",
              startDate: {
                year: 2021,
                month: 4,
                day: 16,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "Meitantei Conan: Hiiro no Dangan",
                english: "Case Closed: The Scarlet Bullet",
                romaji: "Meitantei Conan: Hiiro no Dangan",
              },
              anilistID: 113653,
              slug: "meitantei-conan-hiiro-no-dangan",
            },
            {
              type: "ANIME",
              format: "TV_SHORT",
              relationType: "SPIN_OFF",
              relationName: "Spin Off",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140005-BMmsl94sUPsw.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140005-BMmsl94sUPsw.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140005-CjhEaR3bgg39.jpg",
              meanScore: 69,
              episodes: 12,
              trailer: "QSFAnqVGm4o",
              description:
                "A town of crime, Beika Town. A mysterious Dark Shadow descends onto this town that ranks among the highest crime rates in the world. His (or her?) goal is to kill a “certain man.” That key player in Detective Conan is now a protagonist! Clad in tights and possessing a pure intellect, this person’s name is… the (pseudonymous) Culprit Hanzawa!",
              startDate: {
                year: 2022,
                month: 10,
                day: 4,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Meitantei Conan: Hannin no Hanzawa-san",
                english: "Detective Conan: The Culprit Hanzawa",
                romaji: "Meitantei Conan: Hannin no Hanzawa-san",
              },
              anilistID: 140005,
              slug: "meitantei-conan-hannin-no-hanzawa-san",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9785.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9785.jpg",
              },
              bannerImage: null,
              meanScore: 73,
              episodes: 1,
              description:
                "3D IMAX movie, shown only at the Suntory Museum in Osaka.",
              startDate: {
                year: 2005,
                month: 7,
                day: 29,
              },
              seasonYear: 2005,
              animeName: {
                userPreferred: "Meitantei Conan: Conan vs. Kid - SHARK & JEWEL",
                english: null,
                romaji: "Meitantei Conan: Conan vs. Kid - SHARK & JEWEL",
              },
              anilistID: 9785,
              slug: "meitantei-conan-conan-vs-kid-shark-and-jewel",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18429-vJz2zjLRRve8.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18429-vJz2zjLRRve8.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18429-BnsaK1zzlto4.jpg",
              meanScore: 77,
              episodes: 1,
              description:
                "They say it takes a thief to catch a thief, but the world's greatest detective begs to differ! In this sequel to the crossover special, Lupin III once again faces off against the tiny genius Conan Edogawa, and the stakes have never been higher. An unknown enemy has kidnapped Fujiko, and the only way for Lupin to save her is by stealing a certain jewel. Meanwhile, Fujiko isn't the only one in danger, as a popular Italian singer receives a note that promises to take his life. It's up to Conan Edogawa to get to the bottom of the mystery, but these two tales have more in common than it might seem! Who is really playing who, and who will come out ahead of the game?",
              startDate: {
                year: 2013,
                month: 12,
                day: 7,
              },
              seasonYear: 2013,
              animeName: {
                userPreferred: "Lupin III vs. Meitantei Conan: THE MOVIE",
                english: "Lupin the 3rd Vs Detective Conan: The Movie",
                romaji: "Lupin III vs. Meitantei Conan: THE MOVIE",
              },
              anilistID: 18429,
              slug: "lupin-iii-vs-meitantei-conan-the-movie",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166060-aIhHMEwqLNi4.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166060-aIhHMEwqLNi4.png",
              },
              bannerImage: null,
              meanScore: 67,
              episodes: 1,
              description:
                "Rei Furuya, Jinpei Matsuda, Hiromitsu Morofushi, Wataru Date and Kenji Hagiwara are now graduated from the police academy.Note:- This episode is the fifth and final episode of the Keisatsu Gakkou-hen - Wild Police Story arc.- It was supposed to be episode 1077 in its parent story Meitantei Conan",
              startDate: {
                year: 2023,
                month: 3,
                day: 11,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Keisatsu Gakkou-hen - Wild Police Story CASE. Furuya Rei",
                english: null,
                romaji:
                  "Meitantei Conan: Keisatsu Gakkou-hen - Wild Police Story CASE. Furuya Rei",
              },
              anilistID: 166060,
              slug: "meitantei-conan-keisatsu-gakkou-hen-wild-police-story-case-furuya-rei",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "SPIN_OFF",
              relationName: "Spin Off",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140002-zbEoTkcXifOa.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140002-zbEoTkcXifOa.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140002-h4EoBJ2PfeKw.jpg",
              meanScore: 69,
              episodes: 6,
              trailer: "JofxV0ehN2s",
              description:
                'A detective who\'s also a public security agent and a member of a shadowy organization juggles his triple identities in this "Detective Conan" spinoff.',
              startDate: {
                year: 2022,
                month: 4,
                day: 5,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Meitantei Conan: Zero no Tea Time",
                english: "Case Closed: Zero's Tea Time",
                romaji: "Meitantei Conan: Zero no Tea Time",
              },
              anilistID: 140002,
              slug: "meitantei-conan-zero-no-tea-time",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8310-FfunDT6K2wZb.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx8310-FfunDT6K2wZb.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/8310-FTCEpjqUw8Ao.jpg",
              meanScore: 75,
              episodes: 12,
              description:
                'Kaito Kuroba, a normal teenage student whose father is often absent for vaguely defined reasons. When his father dies under mysterious circumstances, he is made aware of his father\'s secret identity; a famous international criminal known as International Criminal 1412: the Phantom Thief, and that he was murdered by a mysterious organization for refusing to aid them in retrieving the "Pandora Gem"; a mystical stone said to shed a "tear" during the passing of a particular comet, the consumption of which bestows immortality. He vows to prevent the organization from gaining immortality, and assumes his father\'s identity as he begins his quest for the gem. His only clues as to the gem\'s location are that it glows red under the full moon and that it is a doublet: a gem hidden within a larger gem. Thus, it would have to be a relatively large one with a bizarre history, and always stored in a place that never receives moonlight. He thus researches and steals famous priceless gems with odd histories from incredibly well-defended areas, and always returns them after the very next full moon. ',
              startDate: {
                year: 2010,
                month: 4,
                day: 17,
              },
              seasonYear: 2010,
              animeName: {
                userPreferred: "Magic Kaito",
                english: null,
                romaji: "Magic Kaito",
              },
              anilistID: 8310,
              slug: "magic-kaito",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141208-On0qHKxo6P5t.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141208-On0qHKxo6P5t.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141208-06bpzVXG9vqO.jpg",
              meanScore: 76,
              episodes: 12,
              trailer: "9mEaa65_iMI",
              description:
                "The sweet story of Nasa and Tsukasa continues! After surviving some awkward first nights together, dealing with doubters, and recovering from their apartment fire, it's clear the fate of these lovers was written in the stars. Now, they're ready to settle back into domestic bliss and finally plan their wedding ceremony! But with plenty of new friends on the way, what will their big day look like?!",
              startDate: {
                year: 2023,
                month: 4,
                day: 8,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Tonikaku Kawaii Season 2",
                english: "TONIKAWA: Over The Moon For You Season 2",
                romaji: "Tonikaku Kawaii Season 2",
              },
              anilistID: 141208,
              slug: "tonikaku-kawaii-season-2",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5578-kcxJ0LgO7zql.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5578-kcxJ0LgO7zql.jpg",
              },
              bannerImage: null,
              meanScore: 70,
              episodes: 7,
              description:
                "GOSHO collection reveals the origin of the smash hit &ldquo;Detective Conan.&rdquo;&ldquo;GO&rdquo; into his world, and we will &ldquo;SHO&rdquo; you SEVEN romantic and exciting stories created by GOSHO AOYAMA.WAIT FOR ME (30 min.)A genius inventor, who is still a high school student, has a girlfriend two years older than him. One day, he invents a time machine and attempts to go two years back into the past, to become the same age as her.However, it is she who ultimately uses the machine to travel through time!TEN PLANETS IN THE NIGHT SKY (10 min.)Meet Baby Conan!Yukiko Kudo is looking for her missing husband. The only clue to find him again is to decipher a mysterious message left for her. Their baby, Shinichi Kudo, one who later becomes the famous high school Detective Conan, will at this age already be offering some important hints for her.THE WANDERING RED BUTTERFLY (7 min.)A handsome detective, Yusaku Kitakata, receives phone calls from a mysterious woman day after day, with a new case each day. He of course solves them one by one. But the biggest mystery is who is this mysterious woman?PLAY IT AGAIN (30 min.)Thanks to the mystical powers of a Cherry Blossom Tree, a 70-year-old man with a secret sword technique goes back into the past and becomes the same age as his granddaughter. While enjoying his youth for the second time around, he notices that a player is after his granddaughter.SANTA CLAUS IN SUMMER (30 min.)Keisuke, a young man of 17, accidentally activates the Earth Destruction System. The destiny of the Earth now depends on whether he can stop the system within 24 hours. However, suddenly amnesia strikes him and he forgets the pin number to stop the system. The time is running out...DETECTIVE GEORGE&rsquo;S SPECIAL CASE (30 min.)A girl is fleeing from men in black. She runs into a detective agency and discovers that the detective there is a super-miniature-size, cool dude. He risks his life trying to solve a case for this client. Will they come through in the end?MAKING OF DETECTIVE CONAN (7 min.)Do you know how to make animation?Everybody wants to see the workings of an animation studio.Based on the concept of Detective Conan, the three sub-characters visit the animation studio of Detective Conan. This episode will surely catch the hearts of Detective Conan fans! [The actual animation is also involved in this special.]",
              startDate: {
                year: 1999,
                month: 3,
                day: 17,
              },
              seasonYear: 1999,
              animeName: {
                userPreferred: "Aoyama Goushou Tanpenshuu",
                english: null,
                romaji: "Aoyama Goushou Tanpenshuu",
              },
              anilistID: 5578,
              slug: "aoyama-goushou-tanpenshuu",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169754-G2nYpV0r8FUa.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169754-G2nYpV0r8FUa.png",
              },
              bannerImage: null,
              meanScore: null,
              episodes: null,
              trailer: "4C6ua9gmShE",
              startDate: {
                year: 2024,
                month: null,
                day: null,
              },
              seasonYear: null,
              animeName: {
                userPreferred: "Meitantei Conan (2024)",
                english: null,
                romaji: "Meitantei Conan (2024)",
              },
              anilistID: 169754,
              slug: "meitantei-conan-2024",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142219-Nu9bWFhIKn0q.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142219-Nu9bWFhIKn0q.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142219-EQ9aQxmFT7oL.jpg",
              meanScore: 80,
              episodes: 1,
              trailer: "sJwIGd22Cew",
              description:
                "The movie takes place in Shibuya on Halloween. At the Shibuya Hikarie building, a certain wedding ceremony is taking place, where Miwako Sato is in a wedding dress. Suddenly, an intruder bursts in, and Wataru Takagi is injured from protecting Miwako. At the same time, the serial bombing criminal from the incident three years ago that killed Jinpei Matsuda, whom Miwako was in love with, escapes. Is this really a coincidence?",
              startDate: {
                year: 2022,
                month: 4,
                day: 15,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Meitantei Conan: Halloween no Hanayome",
                english: null,
                romaji: "Meitantei Conan: Halloween no Hanayome",
              },
              anilistID: 142219,
              slug: "meitantei-conan-halloween-no-hanayome",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20790-yR5kJrai3zPg.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20790-yR5kJrai3zPg.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20790-sOvsLAJ6x53e.jpg",
              meanScore: 76,
              episodes: 24,
              description:
                "Kaito Kuroba, a normal teenage student whose father is often absent. When his father dies under mysterious circumstances, he is made aware of his father's secret identity; a famous international criminal known as International Criminal 1412: the Phantom Thief, and that he was murdered by a mysterious organization for refusing to aid them in retrieving the \"Pandora Gem\"; a mystical stone said to shed a \"tear\" during the passing of a particular comet (often called the 'Volley Comet'), the consumption of which bestows immortality. He vows to prevent the organization from gaining immortality, and assumes his father's identity as he begins his quest for the gem. His only clues as to the gem's location are that it glows red under the full moon and that it is a doublet: a gem hidden within a larger gem. Thus, it would have to be a relatively large one with a bizarre history, and always stored in a place that never receives moonlight. He thus researches and steals famous priceless gems with odd histories from incredibly well-defended areas, and always returns them after the very next full moon.",
              startDate: {
                year: 2014,
                month: 10,
                day: 4,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred: "Magic Kaito 1412",
                english: "Magic Kaito 1412",
                romaji: "Magic Kaito 1412",
              },
              anilistID: 20790,
              slug: "magic-kaito-1412",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1293-T6Ev080pKoum.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx1293-T6Ev080pKoum.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1293-XmAkK3xVNmQh.jpg",
              meanScore: 73,
              episodes: 195,
              trailer: "q7JAFmRs2es",
              description:
                "Urusei Yatsura concerns the tempestuous relationship between two focal characters: Ataru Moroboshi who is possibly the most unfaithful, unlucky and lecherous idiot to have ever been born, and there's Lum, a tigerskin-bikini clad alien package of sex appeal, jealousy and electricity who's fallen for him. The series chronicles the misadventures of these two stubborn teenagers along with a veritable entourage of weird characters. Among these characters is the richest boy on the planet, a superhuman schoolgirl, a fire-breathing baby, a powerful priestess/school nurse, a cute and psychotic alien vixen with a split personality, a gender-bending martial artist, an alien biker chick, an ice queen of Neptune, a deranged monk, a giant ghost cat and hundreds of other lunatic personalities; aliens, humans and inhumans alike interract in endless hysteria in a town named Tomobiki.",
              startDate: {
                year: 1981,
                month: 10,
                day: 14,
              },
              seasonYear: 1981,
              animeName: {
                userPreferred: "Urusei Yatsura",
                english: "Urusei Yatsura",
                romaji: "Urusei Yatsura",
              },
              anilistID: 1293,
              slug: "urusei-yatsura",
            },
            {
              type: "ANIME",
              format: "OVA",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1368.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1368.jpg",
              },
              bannerImage: null,
              meanScore: 69,
              episodes: 1,
              description:
                "One day Mori Kogoro's private dective agency receives a blackmail call. It turns out that the caller has dialed the wrong number. Conan is able to identify the voice on the phone, it's similar to that of his old friend Heiji, who's also a high school detective but in Osaka. They join once again forces to solve the case and find the jewel which was stolen. But they are not the only ones who are after the jewel. The notorious master thief Kaitou Kid has taken an interest in this piece, which is worth 100,000 Yen, as well and now it's up to Heiji and Conan to be the first to find the culprit and acquire the jewel. ",
              startDate: {
                year: 2006,
                month: 3,
                day: 15,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred:
                  "Meitantei Conan: Kieta Daiya wo Oe! Conan & Heiji vs Kid!",
                english: null,
                romaji:
                  "Meitantei Conan: Kieta Daiya wo Oe! Conan & Heiji vs Kid!",
              },
              anilistID: 1368,
              slug: "meitantei-conan-kieta-daiya-wo-oe-conan-and-heiji-vs-kid",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98604-rf0L8MoJ8FJB.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98604-rf0L8MoJ8FJB.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98604-5B3gvbsNmbf6.jpg",
              meanScore: 81,
              episodes: 1,
              description:
                "A special commemorating the 20th anniversary of the anime series. The special is a retelling of how Kudo Shinichi was transformed into a child.",
              startDate: {
                year: 2016,
                month: 12,
                day: 9,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred:
                  'Meitantei Conan Episode "ONE" Chiisakunatta Meitantei',
                english:
                  "Case Closed: Episode One - The Great Detective Turned Small",
                romaji: 'Meitantei Conan Episode "ONE" Chiisakunatta Meitantei',
              },
              anilistID: 98604,
              slug: "meitantei-conan-episode-one-chiisakunatta-meitantei",
            },
          ],
          startDate: {
            year: 1996,
            month: 1,
            day: 8,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712403618,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/235-MTmiz0uB0fMd.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg",
          },
          animeLength: null,
          scheduledEpisode: 1119,
          airingTime: 1712403600000,
          delayed: false,
        },
        {
          slug: "one-room-hi-atari-futsuu-tenshi-tsuki",
          title: {
            english: "Studio Apartment, Good Lighting, Angel Included",
            native: "ワンルーム、日当たり普通、天使つき。",
            romaji: "One Room, Hi Atari Futsuu, Tenshi Tsuki.",
            userPreferred: "One Room, Hi Atari Futsuu, Tenshi Tsuki.",
          },
          type: "TV",
          anilistID: "169927",
          malID: "56838",
          synonyms: [],
          description:
            "After a long day, high schooler Shintarou Tokumitsu’s plans for relaxing in his studio apartment take a turn when he discovers an angel on his balcony. The divine girl, Towa, reveals she’s there to study humanity, and yet despite his skepticism, he agrees to put her up. Prepare for the most heavenly and high jinks roommate experience of all time!<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 2,
          animeLength: 12,
          genres: ["Comedy", "Romance", "Slice of Life", "Supernatural"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "65",
          nextAiringEpisode: {
            airingAt: 1713015000,
            episode: 3,
          },
          duration: 24,
          trailerVideo: "O06j982UG58",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 3,
            day: 30,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 15,
          },
          updatedAt: 1712412928,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/1n7IFhSvYknCy34MBDKxTdTRifO.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/jhCmZmFmHxb7z6qVy13bvCpCRPY.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/jhCmZmFmHxb7z6qVy13bvCpCRPY.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/jhCmZmFmHxb7z6qVy13bvCpCRPY.jpg",
          },
          airingTime: 1712412600000,
          delayed: false,
          scheduledEpisode: 2,
        },
        {
          slug: "bucchigiri",
          title: {
            english: "BUCCHIGIRI?!",
            native: "ぶっちぎり?!",
            romaji: "BUCCHIGIRI?!",
            userPreferred: "BUCCHIGIRI?!",
          },
          type: "TV",
          anilistID: "165254",
          malID: "55358",
          synonyms: [null],
          description:
            "Arajin Tomoshibi's reunion with his old pal Matakara Asamine takes an unexpected turn when they stumble into a brawl with the toughest guys in town. And just when you thought things couldn't get weirder, a colossal genie decides to drop in. Brace yourself for the ultimate showdown. It's the clash of the cool and the magical!<br><br> (Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 12,
          genres: ["Action", "Supernatural"],
          status: "FINISHED",
          season: "WINTER",
          averageScore: "65",
          nextAiringEpisode: null,
          duration: 24,
          trailerVideo: "Kw6JkejW_Hw",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 13,
          },
          endDate: {
            year: 2024,
            month: 4,
            day: 6,
          },
          updatedAt: 1712418341,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/8Rb5cEDdurXD4iO7zQAwbnl1765.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/8Rb5cEDdurXD4iO7zQAwbnl1765.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/8Rb5cEDdurXD4iO7zQAwbnl1765.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/165254-YJ00wXUFxWTG.jpg",
          airingTime: 1712418000000,
          delayed: false,
          scheduledEpisode: 12,
        },
        {
          slug: "the-fable",
          title: {
            english: null,
            native: "ザ・ファブル",
            romaji: "The Fable",
            userPreferred: "The Fable",
          },
          type: "TV",
          anilistID: "166910",
          malID: "55911",
          synonyms: [null],
          description:
            "When you're the infamous prodigy hitman known only as “Fable,” many things come easy. Being a normal person, however, isn't one of them. In fact, being told that he can't kill anyone for a while may just be the hardest job Fable’s ever taken...<br>\n<br>\n(Source: Kodansha USA)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Comedy", "Drama", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713023700,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712422798,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166910-pdgLmHMLdzUR.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166910-pdgLmHMLdzUR.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx166910-pdgLmHMLdzUR.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166910-hmc3ZVLcnv9x.jpg",
          scheduledEpisode: 1,
          airingTime: 1712420700000,
          delayed: false,
        },
        {
          slug: "yoru-no-kurage-wa-oyogenai",
          title: {
            english: "Jellyfish Can’t Swim in the Night",
            native: "夜のクラゲは泳げない",
            romaji: "Yoru no Kurage wa Oyogenai",
            userPreferred: "Yoru no Kurage wa Oyogenai",
          },
          type: "TV",
          anilistID: "163078",
          malID: "54839",
          synonyms: ["Jellyfish Can't Swim in the Night", "YoruKura", null],
          description:
            '<i>"I want to find what I enjoy."</i>\n<br><br>\nShibuya is a city full of identity. It is here on Shibuya’s late night streets that illustrator Mahiru Kozuki, former idol Kano Yamanouchi, Vtuber Kiui Watase and composer Mei Kim Anouk Takanashi — four young women who are slightly outside the world — join together and form an anonymous artist group called JELEE. “I” also want to shine like someone else. If it\'s not me but “we” then we might be able to shine.<br>\n<br>\n(Source: Crunchyroll News, HIDIVE, edited)',
          episodeNum: 1,
          animeLength: 12,
          genres: ["Drama"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713024000,
            episode: 2,
          },
          duration: null,
          trailerVideo: "yWGlEDGvjpU",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 23,
          },
          updatedAt: 1712422232,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163078-kIhCmQARcoOD.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163078-kIhCmQARcoOD.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx163078-kIhCmQARcoOD.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163078-4dH1WfraZFO8.jpg",
          scheduledEpisode: 1,
          airingTime: 1712421600000,
          delayed: false,
        },
        {
          slug: "tonari-no-youkai-san",
          title: {
            english: "Tonari no Yokai-san",
            native: "となりの妖怪さん",
            romaji: "Tonari no Youkai-san",
            userPreferred: "Tonari no Youkai-san",
          },
          type: null,
          anilistID: "146867",
          malID: "51461",
          synonyms: [null],
          description:
            "Welcome to Engamori, the cozy town where supernatural beings are your friendly neighbors. For generations and to this day, the otherworldly Yokai and humans have continued to protect their easygoing way of life. Enjoy the mountain breeze and uncover the mysterious bonds that lie within.\n<br><br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Slice of Life", "Supernatural"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713027600,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712432736,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146867-PZrxvW84s1n1.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146867-PZrxvW84s1n1.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx146867-PZrxvW84s1n1.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/rNKcsqiMvu2CXH5ShsXGlYK8clp.jpg",
          scheduledEpisode: 1,
          airingTime: 1712429700000,
          delayed: false,
        },
      ],
      today: false,
    },
    {
      title: "Sunday",
      animes: [
        {
          slug: "wonderful-precure",
          title: {
            english: "Wonderful Precure!",
            native: "わんだふるぷりきゅあ！",
            romaji: "Wonderful Precure!",
            userPreferred: "Wonderful Precure!",
          },
          type: "TV",
          anilistID: "171030",
          malID: "57390",
          synonyms: [],
          description:
            "The 21st installment in the <i>Precure</i> series. <br><br>\n\nAnimal Town is a town where animals and people live together. Iroha loves animals and is good friends with her dog, Komugi! One day, a mysterious creature, Garugaru, wreaks havoc in the town! However, in order to protect Iroha, Komugi transformed into human form and became a Precure...! I have to save the child animal whose heart is being garugaru-ed...! Let's join forces and return the animals to Niko Garden!<br><br>\n(Source: Crunchyroll News)",
          episodeNum: 10,
          animeLength: null,
          genres: ["Fantasy", "Mahou Shoujo"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "68",
          nextAiringEpisode: {
            airingAt: 1713051000,
            episode: 11,
          },
          duration: 24,
          trailerVideo: "BPRbvtFnkYs",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 2,
            day: 4,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712454228,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/u28izLFeMVNQhe5cxdubcS7ztjB.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/n54Wc92wS1sjZQEQHTDiHXGeruV.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/n54Wc92wS1sjZQEQHTDiHXGeruV.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/n54Wc92wS1sjZQEQHTDiHXGeruV.jpg",
          },
          airingTime: 1712454000000,
          delayed: false,
          scheduledEpisode: 10,
        },
        {
          title: {
            english: "ONE PIECE",
            native: "ONE PIECE",
            romaji: "ONE PIECE",
            userPreferred: "ONE PIECE",
          },
          type: "TV",
          anilistID: "21",
          malID: "21",
          synonyms: [
            "ワンピース",
            "海贼王",
            "וואן פיס",
            "ون بيس",
            "วันพีซ",
            "Vua Hải Tặc",
            "All'arrembaggio!",
            "Tutti all'arrembaggio!",
            "Ντρέηκ, το Κυνήγι του Θησαυρού",
            null,
          ],
          description:
            "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
          episodeNum: 1100,
          genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
          status: "RELEASING",
          season: "FALL",
          averageScore: "88",
          nextAiringEpisode: {
            airingAt: 1713054600,
            episode: 1101,
          },
          trailerVideo: "AhcE7VWVblc",
          relatedAnime: [
            {
              type: "ANIME",
              format: "OVA",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx466-bVP54I7dCB2F.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx466-bVP54I7dCB2F.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/466-uS8J4XwJ35Ws.png",
              meanScore: 64,
              episodes: 1,
              description:
                "While Luffy and his crew of Zoro and Nami are starving on their small boat, they are attacked by a large monster. Nami is taken away, while Luffy and Zoro wash up on shore. There they meet a young girl, Medaka, and learn of the sad history of the island. The evil Pirate Ganzack has taken away all the men in the village and enslaved them, including Medaka's father. Now Luffy, Zoro, and Medaka must infiltrate Ganzack's base in order to rescue the villagers and Nami. ",
              startDate: {
                year: 1998,
                month: 7,
                day: 26,
              },
              seasonYear: 1998,
              animeName: {
                userPreferred: "ONE PIECE: Taose! Kaizoku Ganzack",
                english: "One Piece: Defeat the Pirate Ganzack!",
                romaji: "ONE PIECE: Taose! Kaizoku Ganzack",
              },
              anilistID: 466,
              slug: "one-piece-taose-kaizoku-ganzack",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1238-Rf2wqBrCwgvO.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1238-Rf2wqBrCwgvO.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1238-HdBlNr5vwNau.jpg",
              meanScore: 69,
              episodes: 1,
              description:
                "For many years, Ex-Marine Lieutenant Randolph and his troupe have put on a play aboard his ship. Having lost his family to pirates, Randolph wishes to put on plays that will give courage to those who have also lost their loved ones to pirates. Unfortunately, Randolph must retire soon, and he is now giving his last performance. Luffy and his crew come to see the play, and somehow manage to take part in it themselves. But from Randolph's past comes a vengeful subordinate with a diabolical plan who has finally become commander in order to capture Randolph. Luffy and his nakama now must prove to the people that not all pirates are scum, and protect Randolph's final farewell performance from the bitter commander. (aired after Episode 174)",
              startDate: {
                year: 2003,
                month: 12,
                day: 14,
              },
              seasonYear: 2003,
              animeName: {
                userPreferred:
                  "ONE PIECE TV Special 3: Mamore! Saigo no Oobutai",
                english:
                  "One Piece Special: Protect! The Last Great Performance",
                romaji: "ONE PIECE TV Special 3: Mamore! Saigo no Oobutai",
              },
              anilistID: 1238,
              slug: "one-piece-tv-special-3-mamore-saigo-no-oobutai",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/15323.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/15323.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/15323-zrax5OGlGepE.png",
              meanScore: 78,
              episodes: 1,
              description:
                "A retelling of the Arlong Park arc, with new animation.",
              startDate: {
                year: 2012,
                month: 8,
                day: 25,
              },
              seasonYear: 2012,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna",
                english: null,
                romaji:
                  "ONE PIECE: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna",
              },
              anilistID: 15323,
              slug: "one-piece-episode-of-nami-koukaishi-no-namida-to-nakama-no-kizuna",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1094-H3YFJ1TR0ZZi.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1094-H3YFJ1TR0ZZi.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1094-IAIqiFbLBsig.jpg",
              meanScore: 68,
              episodes: 1,
              description:
                "The Straw Hats encounter a city in the middle of a whirlpool, called the Ocean's Navel, that is being destroyed by giant monsters. These monsters supposedly protect a treasure capable of granting wishes, but in the process of defeating these guardians, the crew ends up releasing another evil.  (aired after Episode 53)",
              startDate: {
                year: 2000,
                month: 12,
                day: 20,
              },
              seasonYear: 2000,
              animeName: {
                userPreferred:
                  "ONE PIECE TV Special: Umi no Heso no Daibouken-hen",
                english: "One Piece: Umi no Heso no Daibouken-hen",
                romaji: "ONE PIECE TV Special: Umi no Heso no Daibouken-hen",
              },
              anilistID: 1094,
              slug: "one-piece-tv-special-umi-no-heso-no-daibouken-hen",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b16239-XzoVjd7JK8xJ.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b16239-XzoVjd7JK8xJ.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16239-pov53U1T1dRm.jpg",
              meanScore: 72,
              episodes: 1,
              description:
                'The story of the Hand Island no Bouken special is set a little before the events of One Piece Film Z and depicts a major "Hand Island" incident during the New World storyline. The story is set at "Cannon Town" where a parent and a child work as craftspeople. The incident revolves around them and a commodore of a marine base. The special will also have a flashback scene to the story in the first chapter of the manga, but with new animation.  ',
              startDate: {
                year: 2012,
                month: 12,
                day: 15,
              },
              seasonYear: 2012,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Luffy - Hand Island no Bouken",
                english: "One Piece: Episode of Luffy - Hand Island Adventure",
                romaji: "ONE PIECE: Episode of Luffy - Hand Island no Bouken",
              },
              anilistID: 16239,
              slug: "one-piece-episode-of-luffy-hand-island-no-bouken",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21485-KR1sv4rYSe6V.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21485-KR1sv4rYSe6V.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21485-lPFbmxGrFsBX.jpg",
              meanScore: 69,
              episodes: 1,
              description:
                "The Davy Back Fight Arc competitors journey to New World with new crew members Dojaku, Kansho and tactical genius Komei for a meeting that will take place on a foggy island that makes devil fruit users unable to use to their abilities.",
              startDate: {
                year: 2015,
                month: 12,
                day: 19,
              },
              seasonYear: 2015,
              animeName: {
                userPreferred: "ONE PIECE: Adventure of Nebulandia",
                english: "One Piece: Adventure of Nebulandia",
                romaji: "ONE PIECE: Adventure of Nebulandia",
              },
              anilistID: 21485,
              slug: "one-piece-adventure-of-nebulandia",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19123-leET1CrSJknT.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx19123-leET1CrSJknT.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19123-QyRShJCfnIWD.jpg",
              meanScore: 78,
              episodes: 1,
              description:
                "The story arcs aboard the Straw Hat Crew's first ship Going Merry (Merry Go in some adaptations) are recreated with brand-new animation, from Luffy and Usopp's fight and Robin's disappearance to the crew's final farewell to the ship. Going Merry is treated as another member of the Straw Hats as Luffy, Zoro, Nami, and the rest of the crew set sail for the legendary treasure, the One Piece.",
              startDate: {
                year: 2013,
                month: 8,
                day: 24,
              },
              seasonYear: 2013,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Merry - Mou Hitori no Nakama no Monogatari",
                english:
                  "One Piece: Episode of Merry - The Tale of One More Friend",
                romaji:
                  "ONE PIECE: Episode of Merry - Mou Hitori no Nakama no Monogatari",
              },
              anilistID: 19123,
              slug: "one-piece-episode-of-merry-mou-hitori-no-nakama-no-monogatari",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1237.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1237.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1237-hHWuRsuVsVpr.jpg",
              meanScore: 68,
              episodes: 1,
              description:
                "The story opens on Pirate Zap's ship, where two of his crew, Bonnie and Max, are tired and want to escape, but unfortunately they have no money. Three children were being held captive on the ship overhear them. The eldest, Amanda, who's father was a pro treasure hunter, knows the whereabouts of a great treasure, and offers them a deal. If they help them make a clean escape, they could take all the treasure they wanted. They agree, and the five of them barely escape and make it onto a small island where they meet Luffy and his crew. Unfortunately they were pursued and Luffy and Amanda are captured and brought back to their boss, the head of the Bayan Pirates, who is also after the treasure. Now Luffy and the others must battle the Bayan pirates and find the treasure that Amanda's father had left for his children. Amanda, who has always resented adventure and treasure because her father was constantly gone in search for it, finally understands his feelings. ",
              startDate: {
                year: 2003,
                month: 4,
                day: 6,
              },
              seasonYear: 2003,
              animeName: {
                userPreferred:
                  "ONE PIECE: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!",
                english:
                  "One Piece Special: Open Upon the Great Sea! A Father's Huge, HUGE Dream!",
                romaji:
                  "ONE PIECE: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!",
              },
              anilistID: 1237,
              slug: "one-piece-oounabara-ni-hirake-dekkai-dekkai-chichi-no-yume",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20835-QVV6LpJlqe1A.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20835-QVV6LpJlqe1A.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20835-aR8CuXvtzqND.jpg",
              meanScore: 76,
              episodes: 1,
              description:
                'This new TV special tells the two years of Luffy\'s training with Silvers Rayleigh in Rusukaina Island after the Battle of Marineford, which has never been told in the manga or TV anime. It also features a new villain named Burndy World who is known as "The Destroyer of the World" and has the power of the MoaMoa Fruit (its ability is still unknown). Luffy has to protect Boa Hancock from the new enemy who escaped from the level 6 of Impel Down. He is newly designed by the original creator of the manga, Eiichiro Oda.\r\r',
              startDate: {
                year: 2014,
                month: 8,
                day: 30,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred:
                  'ONE PIECE "3D2Y": Ace no shi wo Koete! Luffy Nakama to no Chikai',
                english:
                  "One Piece 3D2Y: Overcome Ace’s Death! Luffy’s Vow to his Friends",
                romaji:
                  'ONE PIECE "3D2Y": Ace no shi wo Koete! Luffy Nakama to no Chikai',
              },
              anilistID: 20835,
              slug: "one-piece-3d2y-ace-no-shi-wo-koete-luffy-nakama-to-no-chikai",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21831-qj5IKYiPOupF.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21831-qj5IKYiPOupF.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21831-Xl4r2uBaaKU4.png",
              meanScore: 73,
              episodes: 1,
              description:
                "The Straw Hat Pirates meet Olga, a girl who has escaped the island Alchemi. Alchemi was known for its metal production, and for the creation of the extremely valuable Pure Gold, but the island disappeared two hundred years ago. Olga is now being pursued by Marines, interested in Pure Gold. Gildo Tesoro, who controls the Navy HQ and black market, hears of Olga and hires treasure hunter Mad Treasure to track her down. The Straw Hats join forces with Olga in search of the Pure Gold, while she plots to takes advantage of them and use the treasure to become rich herself.",
              startDate: {
                year: 2016,
                month: 7,
                day: 16,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred: "ONE PIECE: Heart of Gold",
                english: "One Piece: Heart of Gold",
                romaji: "ONE PIECE: Heart of Gold",
              },
              anilistID: 21831,
              slug: "one-piece-heart-of-gold",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2020.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2020.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n2020-k3lHutyP9i06.jpg",
              meanScore: 68,
              episodes: 1,
              description:
                'Unlike the other specials, this story takes place in an alternate reality version of 19th century Japan, in "The Grand Jipangu", an alternate version of The Grand Line as opposed to simply being hour-long filler episodes.The story is divided into two halves: in the first, Buggy the Clown makes trouble in the town where Detective Luffy is stationed, and in the second a mysterious girl named Vivi appears. These stories feature cameos from several minor characters in the normal series. Surprisingly the "Oyabun" (Boss) specials did not stop there as five more specials were made following the first one, mostly as Christmas and New Years specials as well as fillers once in awhile.',
              startDate: {
                year: 2005,
                month: 12,
                day: 18,
              },
              seasonYear: 2005,
              animeName: {
                userPreferred:
                  "ONE PIECE: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou",
                english:
                  "One Piece Special: The Detective Memoirs of Chief Straw Hat Luffy",
                romaji:
                  "ONE PIECE: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou",
              },
              anilistID: 2020,
              slug: "one-piece-nenmatsu-tokubetsu-kikaku-mugiwara-no-luffy-oyabun-torimonochou",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2386-NQQkq1taHJ08.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2386-NQQkq1taHJ08.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2386-jtduFM8raO2z.jpg",
              meanScore: 66,
              episodes: 1,
              description:
                "Luffy and his crew take on the Villain All-Stars in a game of soccer in order to become the Dream Soccer King. The game comes down to a pk tie-breaker shoot-out with Coby as goalie and Helmeppo refereeing. ",
              startDate: {
                year: 2002,
                month: 3,
                day: 2,
              },
              seasonYear: 2002,
              animeName: {
                userPreferred: "ONE PIECE: Yume no Soccer Ou!",
                english: null,
                romaji: "ONE PIECE: Yume no Soccer Ou!",
              },
              anilistID: 2386,
              slug: "one-piece-yume-no-soccer-ou",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx461-DC9fMDl3AaK1.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx461-DC9fMDl3AaK1.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/461-0pvcIaXC0p70.jpg",
              meanScore: 64,
              episodes: 1,
              description:
                "The crew comes upon Crown Island where the animals can talk and they makes Chopper their new king. But there are human hunters there also looking for the legendary horns that will give the person who consumes it immense power. Luffy and friends must stop them from destroying this animal kingdom.",
              startDate: {
                year: 2002,
                month: 3,
                day: 2,
              },
              seasonYear: 2002,
              animeName: {
                userPreferred: "ONE PIECE: Chinjuu-jima no Chopper Oukoku",
                english:
                  "One Piece: Chopper’s Kingdom on the Island of Strange Animals",
                romaji: "ONE PIECE: Chinjuu-jima no Chopper Oukoku",
              },
              anilistID: 461,
              slug: "one-piece-chinjuu-jima-no-chopper-oukoku",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2490-AL4WmnCJ5zvE.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2490-AL4WmnCJ5zvE.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2490-wlPYONPyTibY.jpg",
              meanScore: 65,
              episodes: 1,
              description:
                "Luffy and crew takes on Arlong's crew in baseball. Announced by Bon Clay and Buggy.",
              startDate: {
                year: 2004,
                month: 3,
                day: 6,
              },
              seasonYear: 2004,
              animeName: {
                userPreferred: "ONE PIECE: Mezase! Kaizoku Yakyuu Ou",
                english: null,
                romaji: "ONE PIECE: Mezase! Kaizoku Yakyuu Ou",
              },
              anilistID: 2490,
              slug: "one-piece-mezase-kaizoku-yakyuu-ou",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx12001-XX0NNNfaKZ3e.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx12001-XX0NNNfaKZ3e.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n12001-IljdXqN8CTU7.jpg",
              meanScore: 62,
              episodes: 1,
              description:
                "Toei Animation released a new 3D anime short at events starting December 1, 2011. The short run about 12 minutes long and played at stereoscopic 3D theaters at Aichi Prefecture's Lagunasia theme park, Nagasaki Prefecture's Huis Ten Bosch theme park, Kanagawa Prefecture's Yokohama Landmark Tower, and Hiroshima Prefecture's NTT CRED Hall.",
              startDate: {
                year: 2011,
                month: 12,
                day: 1,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "ONE PIECE 3D: Gekisou! Trap Coaster",
                english: null,
                romaji: "ONE PIECE 3D: Gekisou! Trap Coaster",
              },
              anilistID: 12001,
              slug: "one-piece-3d-gekisou-trap-coaster",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx459-Ivw65mUXackh.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx459-Ivw65mUXackh.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/459-c4uuz0LPvzkS.jpg",
              meanScore: 67,
              episodes: 1,
              description:
                "There once was a pirate known as the Great Gold Pirate Woonan, who obtained almost 1/3 of the world's gold. Over the course of a few years, the pirate's existence faded, and a legend grew that he disappeared with his gold to a remote island, an island pirates continue to search for. Aboard the Going Merry, Luffy and his crew, starved and reckless, are robbed of their treasure. In an attempt to get it back, they wreck the getaway ship, guided by a young boy named Tabio, who's a captured part of El Drago's pirate crew. El Drago's love for gold has driven him to look for Woonan's island, and thanks to Woonan's treasure map, he finds it. During this time, Luffy's crew have been split up, and despite their own circumstances, they must find a way to stop El Drago from obtaining Woonan's gold. ",
              startDate: {
                year: 2000,
                month: 3,
                day: 4,
              },
              seasonYear: 2000,
              animeName: {
                userPreferred: "ONE PIECE (Movie)",
                english: "ONE PIECE: The Movie",
                romaji: "ONE PIECE (Movie)",
              },
              anilistID: 459,
              slug: "one-piece-movie",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx460-p9HObfGUhWn0.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx460-p9HObfGUhWn0.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/460-ruLnAj6wDrTL.png",
              meanScore: 67,
              episodes: 1,
              description:
                "Informed by the Thief Brothers his ship has been stolen by the Trump Kyoudai (Trump Siblings) who have set up base on Clockwork Island. Monkey D. Luffy, Captain of the Going Merry and aspiring Pirate King works with his crew - Ussop, Zoro, Sanji and Nami to battle their way up Clockwork Island to reclaim their ship.",
              startDate: {
                year: 2001,
                month: 3,
                day: 3,
              },
              seasonYear: 2001,
              animeName: {
                userPreferred: "ONE PIECE: Nejimaki-jima no Bouken",
                english: "One Piece: Clockwork Island Adventure",
                romaji: "ONE PIECE: Nejimaki-jima no Bouken",
              },
              anilistID: 460,
              slug: "one-piece-nejimaki-jima-no-bouken",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx465-qSRr0MKYhS0I.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx465-qSRr0MKYhS0I.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/465-dYMZ6SHNeOkL.jpg",
              meanScore: 67,
              episodes: 1,
              description:
                "The crew salvages a treasure chest from a sinking wreck, but inside turns out to be an old lady hiding. To get the Straw Hat Pirates to take her home, she promises them the treasure of a golden crown on her island, Mecha Island. When they arrive, their ship is first attacked by the lord of the island. But later he decides to use the pirates to help him solve the riddle of the Golden Crown.",
              startDate: {
                year: 2006,
                month: 3,
                day: 4,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred:
                  "ONE PIECE THE MOVIE: Karakuri-jou no Mecha Kyohei",
                english: "One Piece: Mega Mecha Soldier of Karakuri Castle",
                romaji: "ONE PIECE THE MOVIE: Karakuri-jou no Mecha Kyohei",
              },
              anilistID: 465,
              slug: "one-piece-the-movie-karakuri-jou-no-mecha-kyohei",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx462-Ig8zfdsFWcql.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx462-Ig8zfdsFWcql.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/462-Z074owEvilUu.jpg",
              meanScore: 72,
              episodes: 1,
              description:
                "Luffy and crew arrive at the harbour of Anabaru. The local casino is holding a competition in which the winner will obtain a huge monetary reward if he reaches the finishing line first. Nami is elated and decides to participate in the competition. However, there is a conspiracy going behind the competition and the mastermind is an ex-military commander, Gasparde. His plan is to lure all the pirates to the military base and send them to their deaths. Luffy and gang have to overcome the numerous tests and tribulations along the way to complete this dead-end adventure. ",
              startDate: {
                year: 2003,
                month: 3,
                day: 1,
              },
              seasonYear: 2003,
              animeName: {
                userPreferred: "ONE PIECE THE MOVIE: Dead End no Bouken",
                english: "One Piece The Movie: The Dead End Adventure",
                romaji: "ONE PIECE THE MOVIE: Dead End no Bouken",
              },
              anilistID: 462,
              slug: "one-piece-the-movie-dead-end-no-bouken",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4155-P5TDf6t6qFwX.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4155-P5TDf6t6qFwX.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4155-2PkLjTHddz2s.jpg",
              meanScore: 78,
              episodes: 1,
              description:
                "The story begins somewhere between the Thriller Bark arc and the Sabaody Archipelago arc. The main villain's name is \"Golden Lion\" Shiki. 20 years ago he lost a battle against Monkey D. Garp and Sengoku and was imprisoned in Impel Down, but managed to escape. After that he starts to collect his crew and steals Nami to make her his navigator. Luffy tries to get to Shiki's hideout to free his friend. ",
              startDate: {
                year: 2009,
                month: 12,
                day: 12,
              },
              seasonYear: 2009,
              animeName: {
                userPreferred: "ONE PIECE FILM: STRONG WORLD",
                english: "One Piece Film: Strong World",
                romaji: "ONE PIECE FILM: STRONG WORLD",
              },
              anilistID: 4155,
              slug: "one-piece-film-strong-world",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx464-g4wcZPjbhY5j.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx464-g4wcZPjbhY5j.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/464-wmQoE1Ywxghs.jpg",
              meanScore: 77,
              episodes: 1,
              description:
                "The Straw Hat crew obtain an advertisement for a recreational island on the Grand Line run by the Baron Omatsuri. Luffy decides to take this opportunity to kick back and relax. Unfortunately, when they arrive at the island, they are asked to compete in contests through unity for access to relaxation. However, there seems to be a mysterious air on the island, as the Straw Hat Pirates begin to fight amongst themselves, while Robin, Chopper, and Luffy individually search for the secret behind Baron Omatsuri's island.",
              startDate: {
                year: 2005,
                month: 3,
                day: 5,
              },
              seasonYear: 2005,
              animeName: {
                userPreferred:
                  "ONE PIECE THE MOVIE: Omatsuri Danshaku to Himitsu no Shima",
                english: "One Piece: Baron Omatsuri and the Secret Island",
                romaji:
                  "ONE PIECE THE MOVIE: Omatsuri Danshaku to Himitsu no Shima",
              },
              anilistID: 464,
              slug: "one-piece-the-movie-omatsuri-danshaku-to-himitsu-no-shima",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101918-3uyCYHw1syki.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101918-3uyCYHw1syki.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101918-jUG4Mb1hCxVS.jpg",
              meanScore: 69,
              episodes: 1,
              description:
                'The special will be the first in the "Episode of" series to cover the Skypeia arc, and will feature a character who did not appear in the original Skypeia arc from the anime.',
              startDate: {
                year: 2018,
                month: 8,
                day: 25,
              },
              seasonYear: 2018,
              animeName: {
                userPreferred: "ONE PIECE: Episode of Sorajima",
                english: "One Piece: Episode of Skypiea",
                romaji: "ONE PIECE: Episode of Sorajima",
              },
              anilistID: 101918,
              slug: "one-piece-episode-of-sorajima",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99302-b40WIhc5dylo.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99302-b40WIhc5dylo.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99302-v3NwmsSnjj94.jpg",
              meanScore: 77,
              episodes: 1,
              trailer: "XcWmgU7X-Is",
              description:
                "The special will be a completely new work, featuring reanimated scenes from the beginning of the series through when the crew enters the Grand Line.The special is commemorating the manga's 20th anniversary, and will also feature anime versions of the original manga's chapter cover stories as part of the special's ending credits. The staff haven't yet clarified which cover story or stories will be animated. Additionally, the anime will feature a special 20th anniversary commemoration version of the original opening theme song \"We Are!\".",
              startDate: {
                year: 2017,
                month: 8,
                day: 26,
              },
              seasonYear: 2017,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken",
                english: "One Piece: Episode of East Blue",
                romaji:
                  "ONE PIECE: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken",
              },
              anilistID: 99302,
              slug: "one-piece-episode-of-east-blue-luffy-to-4-nin-no-nakama-no-daibouken",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx463-QDnETPoHp9oD.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx463-QDnETPoHp9oD.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/463-zgU5XjUCR7Kv.jpg",
              meanScore: 67,
              episodes: 1,
              description:
                "Luffy and crew go to an island searching for a legendary sword, said to be the most expensive in the world. Soon attacking marines and beautiful maidens split the crew. Zoro betrays the crew to help an old friend, Luffy and Usopp wander through a cave, and the rest help a village fight marines. When Zoro defeats Sanji he takes the sacred pearls that are the only defense against the evil sword that will plunge the world into darkness. ",
              startDate: {
                year: 2004,
                month: 3,
                day: 6,
              },
              seasonYear: 2004,
              animeName: {
                userPreferred: "ONE PIECE: Norowareta Seiken",
                english: "One Piece: The Curse of the Sacred Sword",
                romaji: "ONE PIECE: Norowareta Seiken",
              },
              anilistID: 463,
              slug: "one-piece-norowareta-seiken",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21230-rfoUZud1Jn0L.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21230-rfoUZud1Jn0L.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21230-5yju21iK6aMW.jpg",
              meanScore: 74,
              episodes: 1,
              description:
                "The anime will explore the childhood bond between Luffy, Ace and Sabo.",
              startDate: {
                year: 2015,
                month: 8,
                day: 22,
              },
              seasonYear: 2015,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Sabo - 3-Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi",
                english:
                  "One Piece - Episode of Sabo: Bond of Three Brothers - A Miraculous Reunion and an Inherited Will",
                romaji:
                  "ONE PIECE: Episode of Sabo - 3-Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi",
              },
              anilistID: 21230,
              slug: "one-piece-episode-of-sabo-3-kyoudai-no-kizuna-kiseki-no-saikai-to-uketsugareru-ishi",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2107-H8bRuRRbhCIJ.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2107-H8bRuRRbhCIJ.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2107-Je0JIEoxx1VF.jpg",
              meanScore: 70,
              episodes: 1,
              description:
                "A retelling of the Alabasta arc. Revolution is brewing in the desert country of Alabasta, but the Straw Hats and Princess Vivi know the truth: it's all a plot cooked up by Crocodile. ",
              startDate: {
                year: 2007,
                month: 3,
                day: 3,
              },
              seasonYear: 2007,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
                english:
                  "One Piece: The Desert Princess and the Pirates, Adventures in Alabasta",
                romaji:
                  "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
              },
              anilistID: 2107,
              slug: "one-piece-episode-of-alabasta-sabaku-no-oujo-to-kaizoku-tachi",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105143-5uBDmhvMr6At.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105143-5uBDmhvMr6At.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105143-y8oSKa8PSsgK.jpg",
              meanScore: 81,
              episodes: 1,
              trailer: "-f3_oA0uwY0",
              description:
                "The 14th One Piece movie, which commemorates the anime's 20th anniversary, takes place during the Pirates Festival, an epic treasure hunt in which pirates from across the globe race to find an item that once belonged to Gol D. Roger himself!",
              startDate: {
                year: 2019,
                month: 8,
                day: 9,
              },
              seasonYear: 2019,
              animeName: {
                userPreferred: "ONE PIECE STAMPEDE",
                english: "One Piece: Stampede",
                romaji: "ONE PIECE STAMPEDE",
              },
              anilistID: 105143,
              slug: "one-piece-stampede",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21335-XsXdE0AeOkkZ.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21335-XsXdE0AeOkkZ.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21335-ps20iVSGUXbD.jpg",
              meanScore: 77,
              episodes: 1,
              description:
                "In One Piece Film Gold, The Straw Hats are at it again in an all-new high-flying adventure! A gripping tale unfolds in the spectacular city of Gran Tesoro, where Luffy and his crew are drawn by dreams of hitting the jackpot. With so much luck, Luffy's winning streak can't possibly end. But behind the gilded curtains lies a powerful king whose deep pockets and deeper ambitions spell disaster for all.",
              startDate: {
                year: 2016,
                month: 7,
                day: 23,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred: "ONE PIECE FILM: GOLD",
                english: "One Piece Film: Gold",
                romaji: "ONE PIECE FILM: GOLD",
              },
              anilistID: 21335,
              slug: "one-piece-film-gold",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n106572-k1gqIsDcqGaV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n106572-k1gqIsDcqGaV.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n106572-kY1X9fF5zJZz.jpg",
              meanScore: 69,
              episodes: 1,
              description:
                'Prologue to the movie, showing the Whiskey Peak arc. Released as a new cut for the movie\'s TV showing on "Premium Saturday".',
              startDate: {
                year: 2007,
                month: 3,
                day: 3,
              },
              seasonYear: 2007,
              animeName: {
                userPreferred:
                  "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
                english: null,
                romaji:
                  "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
              },
              anilistID: 106572,
              slug: "one-piece-episode-of-alabasta-sabaku-no-oujo-to-kaizoku-tachi-3005",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12859-uQFENDPzMWz6.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12859-uQFENDPzMWz6.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12859-XjlBW6o2YwUb.jpg",
              meanScore: 79,
              episodes: 1,
              description:
                "Said to be comparable to the Ancient Weapons of old, the Marines’ trump card, the “Dyna Stones,” have suddenly been stolen by a group of renegade vigilantes. The terrifyingly powerful man responsible, former Marine Admiral “Z”, now stands in the path of Luffy and his Straw Hat Pirates. Can the Straw Hats defeat “Z” and his crew, or will the New World meet its end at the hands of this mad man? ",
              startDate: {
                year: 2012,
                month: 12,
                day: 15,
              },
              seasonYear: 2012,
              animeName: {
                userPreferred: "ONE PIECE FILM: Z",
                english: "One Piece Film: Z",
                romaji: "ONE PIECE FILM: Z",
              },
              anilistID: 12859,
              slug: "one-piece-film-z",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SUMMARY",
              relationName: "Summary",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3848-SCnYGTn34Llt.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx3848-SCnYGTn34Llt.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/3848-LXsSQtSFu4e9.jpg",
              meanScore: 71,
              episodes: 1,
              description:
                "The movie is a retelling of the Drum Island arc with new music and animation. Vivi has been removed from the plot while both Nico Robin and Franky, who joined the crew after the Drum Island arc, have been added. The movie also has the Straw Hat's new ship, the Thousand Sunny. It has been stated that Oda will be creating a new character for this movie, Wapol's older brother, Mushul, who also appears to be a Devil Fruit user. ",
              startDate: {
                year: 2008,
                month: 3,
                day: 1,
              },
              seasonYear: 2008,
              animeName: {
                userPreferred:
                  "ONE PIECE THE MOVIE: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura",
                english:
                  "One Piece: Episode Of Chopper +: The Miracle Winter Cherry Blossom",
                romaji:
                  "ONE PIECE THE MOVIE: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura",
              },
              anilistID: 3848,
              slug: "one-piece-the-movie-episode-of-chopper-plus-fuyu-ni-saku-kiseki-no-sakura",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9999.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9999.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9999-T5jCX3o3cxeN.jpg",
              meanScore: 65,
              episodes: 1,
              description:
                "The entire Straw Hat crew began to search for Luffy's important straw hat after he woke up finding it missing.",
              startDate: {
                year: 2011,
                month: 3,
                day: 19,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "ONE PIECE 3D: Mugiwara Chase",
                english: "One Piece 3D: Mugiwara Chase",
                romaji: "ONE PIECE 3D: Mugiwara Chase",
              },
              anilistID: 9999,
              slug: "one-piece-3d-mugiwara-chase",
            },
            {
              type: "ANIME",
              format: "OVA",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8740-oZajT3brPn7b.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8740-oZajT3brPn7b.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/8740-MlFelJndh6Yr.png",
              meanScore: 76,
              episodes: 1,
              description:
                "Set over 20 years prior to the main One Piece story, this limited release OVA chronicles the confrontation between Gold Lion Shiki and Gold Roger as well as other events around the world around the time of the Pirate King's execution. ",
              startDate: {
                year: 2010,
                month: 4,
                day: 16,
              },
              seasonYear: 2010,
              animeName: {
                userPreferred: "ONE PIECE FILM: STRONG WORLD - EPISODE:0",
                english: null,
                romaji: "ONE PIECE FILM: STRONG WORLD - EPISODE:0",
              },
              anilistID: 8740,
              slug: "one-piece-film-strong-world-episode0",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21880-uxsZ880LXSdY.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21880-uxsZ880LXSdY.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21880-9gGzVvnzqiNA.jpg",
              meanScore: 70,
              episodes: 1,
              description:
                "A short prequel to One Piece Film: Gold featuring the nine Straw hat crew members on the ship, planning what to do when they arrive the Casino.",
              startDate: {
                year: 2016,
                month: 7,
                day: 2,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred: "ONE PIECE FILM: GOLD - episode 0 711ver.",
                english: null,
                romaji: "ONE PIECE FILM: GOLD - episode 0 711ver.",
              },
              anilistID: 21880,
              slug: "one-piece-film-gold-episode-0-711ver",
            },
            {
              type: "ANIME",
              format: "OVA",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/5252.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/5252.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5252-tlTORLa2dR2u.jpg",
              meanScore: 70,
              episodes: 1,
              description:
                'The Straw Hat Pirates, searching for the great passage "Grand Line", are in trouble when their food runs out! Luffy, searching for food on his own, finds a ship belonging to the pirate, Gary, and takes it over!! He lands at a nearby town...Luffy was attacked by a young girl, Silk, who mistook him for a member of the other pirate gang. As the two eat a meal, they tell their stories. Meanwhile, Gary and his band are burning with anger at Luffy, demanding payment from the town\'s defenseless citizens...!!',
              startDate: {
                year: 2008,
                month: 11,
                day: 24,
              },
              seasonYear: 2008,
              animeName: {
                userPreferred: "ONE PIECE: ROMANCE DAWN STORY",
                english: "One Piece: Romance Dawn Story",
                romaji: "ONE PIECE: ROMANCE DAWN STORY",
              },
              anilistID: 5252,
              slug: "one-piece-romance-dawn-story",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141902-fTyoTk8F8qOl.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141902-fTyoTk8F8qOl.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141902-SvnRSXnN7DWC.jpg",
              meanScore: 79,
              episodes: 1,
              trailer: "YAN45KAL5lg",
              description:
                "An almighty voice. With fiery red locks.The story takes place on an island where Uta, the world’s favorite diva, performs for the first time in public. Uta’s singing voice, which she sings with while concealing her true identity, has been described as “otherworldly,” and while the venue is filled with the Straw Hats led by Luffy, pirates, navy, and fans from all over the world who have come to enjoy her voice, Uta’s voice is heard in a new light. The curtain rises on the story with the shocking revelation that she is “Shanks’ daughter!“ ",
              startDate: {
                year: 2022,
                month: 8,
                day: 6,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "ONE PIECE FILM: RED",
                english: "One Piece Film: Red",
                romaji: "ONE PIECE FILM: RED",
              },
              anilistID: 141902,
              slug: "one-piece-film-red",
            },
            {
              type: "ANIME",
              format: null,
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167404-QpAFnGPtdXYi.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx167404-QpAFnGPtdXYi.jpg",
              },
              bannerImage: null,
              meanScore: null,
              episodes: 1,
              trailer: "hCAHv4qEzmU",
              startDate: {
                year: null,
                month: null,
                day: null,
              },
              seasonYear: null,
              animeName: {
                userPreferred: "MONSTERS: Ippaku Sanjou Hiryuu Jigoku",
                english: null,
                romaji: "MONSTERS: Ippaku Sanjou Hiryuu Jigoku",
              },
              anilistID: 167404,
              slug: "monsters-ippaku-sanjou-hiryuu-jigoku",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx10033-V7xnlgAVtaVR.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx10033-V7xnlgAVtaVR.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n10033-u9ROjiLizrd4.jpg",
              meanScore: 69,
              episodes: 147,
              description:
                "In the world where the taste and texture of food are very important there is Toriko, a hunter of precious foods regularly hired by restaurants and the rich. A man with inhuman skills to capture the ferocious, evasive and rare animals to complete his ultimate dinner course and then the chef Komatsu, his current accomplice: a weak timid person who was inspired by Toriko's greatness and accompanies him on all his journeys on his quest for the course of his life.",
              startDate: {
                year: 2011,
                month: 4,
                day: 3,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "Toriko",
                english: null,
                romaji: "Toriko",
              },
              anilistID: 10033,
              slug: "toriko",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n2385-us99rub90MzL.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n2385-us99rub90MzL.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n2385-kYxcxwV0LTvq.jpg",
              meanScore: 67,
              episodes: 1,
              description:
                "Luffy and his crew are on Mirror Ball Island during a dance carnival. They are spotted by Marines just as Jango the hypnotist is running from them. Luffy and the others are caught up in the dance carnival as Jango, in his desperate attempt to escape, hypnotizes the entire island to dance the night away.",
              startDate: {
                year: 2001,
                month: 3,
                day: 3,
              },
              seasonYear: 2001,
              animeName: {
                userPreferred:
                  "ONE PIECE: Nejimaki-jima no Bouken - Jango no Dance Carnival",
                english: "One Piece: Django's Dance Carnival",
                romaji:
                  "ONE PIECE: Nejimaki-jima no Bouken - Jango no Dance Carnival",
              },
              anilistID: 2385,
              slug: "one-piece-nejimaki-jima-no-bouken-jango-no-dance-carnival",
            },
            {
              type: "ANIME",
              format: "SPECIAL",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b101099-3AoCbJWTj2cV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b101099-3AoCbJWTj2cV.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101099-KarIxewMysiK.jpg",
              meanScore: 61,
              episodes: 11,
              description:
                "Series of commercials launched by Nissin Foods' Cup Noodles brand. Among some original content, the commercials also featured characters from prominent anime series including:- Kiki's Delivery Service- Heidi: Girl of the Alps- Sazae-san- One Piece",
              startDate: {
                year: 2017,
                month: 6,
                day: 7,
              },
              seasonYear: null,
              animeName: {
                userPreferred: "HUNGRY DAYS: Aoharu ka yo.",
                english: null,
                romaji: "HUNGRY DAYS: Aoharu ka yo.",
              },
              anilistID: 101099,
              slug: "hungry-days-aoharu-ka-yo",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx813-QBIvCQgHcjcF.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx813-QBIvCQgHcjcF.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/813-03ZLvWJgR6Wd.jpg",
              meanScore: 79,
              episodes: 291,
              description:
                "Goku is back with his new son, Gohan, but just when things are getting settled down, the adventures continue. Whether he is facing enemies such as Freeza, Cell, or Boo, Goku is proven to be an elite of his own and discovers his race, Saiyan. He meets many new people, gaining allies as well as enemies, as he still finds time to raise a family and be the happy-go-lucky Saiyan he is.",
              startDate: {
                year: 1989,
                month: 4,
                day: 26,
              },
              seasonYear: 1989,
              animeName: {
                userPreferred: "Dragon Ball Z",
                english: "Dragon Ball Z",
                romaji: "Dragon Ball Z",
              },
              anilistID: 813,
              slug: "dragon-ball-z",
            },
          ],
          startDate: {
            year: 1999,
            month: 10,
            day: 20,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712456348,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
          },
          duration: 24,
          slug: "one-piece",
          logoart:
            "https://artworks.thetvdb.com/banners/v4/series/81797/clearlogo/611b6189d88b6.png",
          style: ["-2%", "-.5vw"],
          animeLength: null,
          bannerart: {
            large:
              "https://www.themoviedb.org/t/p/original/x3ZpEH6U3cim9Ekx4wIyOdSQDE5.jpg",
            medium:
              "https://www.themoviedb.org/t/p/original/oVfucXvhutTpYExG9k06NJqnpT9.jpg",
          },
          scheduledEpisode: 1100,
          airingTime: 1712455800000,
          delayed: false,
        },
        {
          slug: "ninja-kamui",
          title: {
            english: "Ninja Kamui",
            native: "Ninja Kamui",
            romaji: "Ninja Kamui",
            userPreferred: "Ninja Kamui",
          },
          type: "TV",
          anilistID: "151639",
          malID: "56285",
          synonyms: [null],
          description:
            "Higan is a Nukenin - a former ninja who escaped his clan and is hiding from his violent past in rural America with his family. One night, he is ambushed by a team of assassins from his former organization who exact a bloody retribution on Joe and his family for betraying their ancient code. Rising from his seeming “death,” Joe will re-emerge as his former self - Ninja Kamui - to avenge his family and friends. Kamui is a 21st century ninja, a shadowy anachronism who pits his ancient skills against high-tech weaponry with brutal finesse. He must face off against trained assassins, combat cyborgs, and rival ninjas to bring down the very clan that made him.\n<br><br>\n(Source: Warner Bros. Discovery)",
          episodeNum: 9,
          animeLength: 12,
          genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "78",
          nextAiringEpisode: {
            airingAt: 1713070800,
            episode: 10,
          },
          duration: 23,
          trailerVideo: "Sjs6MkX9ASU",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 2,
            day: 11,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712477008,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151639-6tcLh08KSsmJ.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/3dl7QFrpvtu9My4L6K7KtUMP8p1.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3dl7QFrpvtu9My4L6K7KtUMP8p1.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/3dl7QFrpvtu9My4L6K7KtUMP8p1.jpg",
          },
          airingTime: 1712466660000,
          delayed: false,
          scheduledEpisode: 9,
        },
        {
          slug: "yozakura-san-chi-no-daisakusen",
          title: {
            english: "Mission: Yozakura Family",
            native: "夜桜さんちの大作戦",
            romaji: "Yozakura-san Chi no Daisakusen",
            userPreferred: "Yozakura-san Chi no Daisakusen",
          },
          type: "TV",
          anilistID: "158898",
          malID: "53865",
          synonyms: [
            "Mission: Yozakura Family",
            "Missão: Família Yozakura",
            "Misión: Familia Yozakura",
            "ปฏิบัติการลับบ้านโยซากุระ",
            "La misión de la familia Yozakura",
            "Миссия семьи Ёдзакура",
            null,
          ],
          description:
            "Taiyou Asano is a super shy high school student and the only person he can talk to is his childhood friend, Mutsumi Yozakura. It turns out that Mutsumi is the daughter of the ultimate spy family! Even worse, Mutsumi is being harassed by her overprotective, nightmare of a brother, Kyouichirou. What drastic steps will Taiyou have to take to save Mutsumi?! A spy family comedy - the mission begins!<br>\n<br>\n(Source: MANGA Plus)",
          episodeNum: 1,
          animeLength: 27,
          genres: ["Action", "Comedy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713081600,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712477713,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158898-O3egiBNkxLQO.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158898-O3egiBNkxLQO.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx158898-O3egiBNkxLQO.png",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/5k5QemX3fDy1KGf7ZTcmfSg0JnQ.jpg",
          scheduledEpisode: 1,
          airingTime: 1712477460000,
          delayed: false,
        },
        {
          slug: "captain-tsubasa-season-2-junior-youth-hen",
          title: {
            english: "Captain Tsubasa: Junior Youth Arc",
            native: "キャプテン翼シーズン2 ジュニアユース編",
            romaji: "Captain Tsubasa: Season 2 - Junior Youth-hen",
            userPreferred: "Captain Tsubasa: Season 2 - Junior Youth-hen",
          },
          type: "TV",
          anilistID: "163024",
          malID: "54803",
          synonyms: [
            "Captain Tsubasa (2018) Season 2 - Junior Youth-hen",
            "Captain Tsubasa: Jr. Youth Arc",
            null,
          ],
          description:
            "The second season of <i>Captain Tsubasa (2018)</i>.\n<br><br>\nThe International Junior Youth Tournament in Paris, France, is about to begin, and Tsubasa, Misaki, Wakabayashi, Hyuga, and Wakashimazu are ready. Japan’s team of elite players is to face off against the best the soccer world has to offer. Germany’s Schneider, France’s Pierre, Argentina’s Diaz, and Italy’s Hernandez await, along with a host of other new rivals. Let the battle begin! <br><br>\n(Source: VIZ Media)",
          episodeNum: 27,
          animeLength: 39,
          genres: ["Action", "Sports"],
          status: "RELEASING",
          season: "FALL",
          averageScore: "69",
          nextAiringEpisode: {
            airingAt: 1713083400,
            episode: 28,
          },
          duration: 22,
          trailerVideo: "d41ni2IAPiE",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx100745-yXuUvH03TmCm.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100745-yXuUvH03TmCm.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100745-O7IJXNebsrK1.jpg",
              meanScore: 70,
              episodes: 52,
              trailer: "K6zQ1qs2hLY",
              description:
                "Remake of the first series.  Tsubasa Oozora is an 11-year-old elementary school student who is deeply in love with football and dreams of one day winning the FIFA World Cup for Japan. He lives together with his mother in Japan, while his father is a seafaring captain who travels around the world. Tsubasa Ozora moves to the town Nankatsu to increase his skills as a soccer player. He is challenged by the Super Goalkeeper Genzo Wakabayashi. He then agrees to compete and see who was the best soccer player there.",
              startDate: {
                year: 2018,
                month: 4,
                day: 3,
              },
              seasonYear: 2018,
              animeName: {
                userPreferred: "Captain Tsubasa (2018)",
                english: "Captain Tsubasa (2018)",
                romaji: "Captain Tsubasa (2018)",
              },
              anilistID: 100745,
              slug: "captain-tsubasa-2018",
            },
            {
              type: "ANIME",
              format: "OVA",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2117.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2117.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2117-9lrOT2l6OvW7.jpg",
              meanScore: 68,
              episodes: 13,
              description:
                "Shin CT takes place at the U-16 world cup in France. After some friendly matches in Germany, Japan defeats one opponent after another and finally reaches the final round against Germany. After hard matches against Italian and French top players, the German team seems to be even more supreme. The giant goal keeper Moeller, the all round ace Kalz and Europe's best player and forward Schneider offer the Japanese team an extremely hard match, but in the end Japan wins 3:2.",
              startDate: {
                year: 1989,
                month: 7,
                day: 1,
              },
              seasonYear: 1989,
              animeName: {
                userPreferred: "Shin Captain Tsubasa",
                english: null,
                romaji: "Shin Captain Tsubasa",
              },
              anilistID: 2117,
              slug: "shin-captain-tsubasa",
            },
          ],
          startDate: {
            year: 2023,
            month: 10,
            day: 1,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712481312,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/s4CTeDetytn3yCtvoRFuUeZlrgy.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/s4CTeDetytn3yCtvoRFuUeZlrgy.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/s4CTeDetytn3yCtvoRFuUeZlrgy.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163024-rFtOWsDQy12B.jpg",
          scheduledEpisode: 27,
          airingTime: 1712481000000,
          delayed: false,
        },
        {
          slug: "holo-no-graffiti",
          title: {
            english: null,
            native: "ホロのぐらふぃてぃ",
            romaji: "Holo no Graffiti",
            userPreferred: "Holo no Graffiti",
          },
          type: "ONA",
          anilistID: "118123",
          malID: "44042",
          synonyms: [
            "Hologra 3D Short Animation",
            "Hologra",
            "ホロぐら",
            "Hololive",
            "הולולייב",
          ],
          description:
            'From unraveling the secrets of opening and closing doors to defusing surprise packages more commonly known as bombs, there is never a dull day at the Hololive Production office! <i>Holo no Graffiti</i> follows an eccentric cast of Virtual YouTubers, also known as "VTubers," going about their absurd yet hilarious daily lives, detailing all their cute moments and mishaps.\n<br><br>\n(Source: MAL Rewrite)',
          episodeNum: 166,
          genres: ["Action", "Adventure", "Comedy"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "79",
          nextAiringEpisode: {
            airingAt: 1712480460,
            episode: 255,
          },
          duration: 2,
          trailerVideo: "Jnu8xZpHj00",
          relatedAnime: [
            {
              type: "ANIME",
              format: "ONA",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129963-mJHVwkn9NFoz.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129963-mJHVwkn9NFoz.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/129963-IDICpmMz0HqR.jpg",
              meanScore: 79,
              episodes: null,
              trailer: "3RxlzJWWzdY",
              description:
                "Welcome to an alternative world. Another possibility for hololive: hololive △lternativeIncludes:Note: A 30-second sneak peek of the first PV was previously released on February 17, 2021.  1) 『ホロライブ・オルタナティブ』 ティザーPV（Fullver）/ [hololive Alternative] Teaser PV (full ver.), released May 21 2021.2) 『ホロライブ・オルタナティブ』 2ndティザーPV / [hololive Alternative] 2nd Teaser, released June 11, 2022.",
              startDate: {
                year: 2021,
                month: 5,
                day: 21,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "HOLOLIVE ALTERNATIVE Teaser PVs",
                english: null,
                romaji: "HOLOLIVE ALTERNATIVE Teaser PVs",
              },
              anilistID: 129963,
              slug: "hololive-alternative-teaser-pvs",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146004-hH08KAB1yHlN.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146004-hH08KAB1yHlN.png",
              },
              bannerImage: null,
              meanScore: 76,
              episodes: null,
              trailer: "c3DcpEy3xd8",
              description:
                'A series of comedic YouTube shorts airing every Friday on Watame\'s YouTube channel.Notes:- Episodes 1-21 (Series 1) were originally released in a vertical format, later rereleased widescreen in 8 compilation videos.- Contains special episode "Best Girl？！スペシャル回！！！"',
              startDate: {
                year: 2022,
                month: 1,
                day: 7,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Girigiri Warukunai Watame",
                english: "Watame Did Borderline Nothing Wrong",
                romaji: "Girigiri Warukunai Watame",
              },
              anilistID: 146004,
              slug: "girigiri-warukunai-watame",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139342-s1dL11JftMrk.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139342-s1dL11JftMrk.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/139342-wBMyisg6YPiN.jpg",
              meanScore: 66,
              episodes: 4,
              trailer: "3WEdw0qbpcU",
              description:
                "Sharing the ocean theme, hololive JP and EN's summer collab group, UMISEA, will have story-based videos!Short animated series of videos featuring Minato Aqua, Houshou Marine, Gawr Gura, and Ninomae Ina'nis of hololive.",
              startDate: {
                year: 2021,
                month: 9,
                day: 15,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "UMISEA",
                english: null,
                romaji: "UMISEA",
              },
              anilistID: 139342,
              slug: "umisea",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "OTHER",
              relationName: "Other",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx144451-onp8x0xZbMg9.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx144451-onp8x0xZbMg9.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/144451-xf38KfQKYBO5.jpg",
              meanScore: 71,
              episodes: 62,
              trailer: "Y9ES7RY2uAU",
              description:
                "A new 3D anime featuring VTubers from hololive production's HOLOSTARS branch!Note: episode count includes the announcement animation released before episode 1.",
              startDate: {
                year: 2022,
                month: 1,
                day: 28,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "stars*collection",
                english: "stars*collection!",
                romaji: "stars*collection",
              },
              anilistID: 144451,
              slug: "starscollection",
            },
            {
              type: "ANIME",
              format: "ONA",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b153348-j6mNppNiAafF.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b153348-j6mNppNiAafF.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153348-nisBR2TOlNmW.jpg",
              meanScore: 65,
              episodes: 4,
              trailer: "fj6gBsBCZI8",
              description:
                "Animated manga-style shorts created for hololive Summer 2022.The crew heads to a tropical island to search for YAGOO after losing contact with him!But there, they found a mysterious sunglasses-wearing trio!What could they be after, and who is this Witch of Icy Smiles?Includes:• 【ホロライブ・サマー2022 #1】帰ってきた？センシティブサマー！？• 【ホロライブ・サマー2022 #3】わわわわ！　光に包まれていく……！？• 【ホロライブ・サマー2022 #5】……これが最後の戦いになりそうですね• 【ホロライブ・サマー2022 #7】3つの秘宝 ",
              startDate: {
                year: 2022,
                month: 8,
                day: 5,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "hololive Summer 2022",
                english: null,
                romaji: "hololive Summer 2022",
              },
              anilistID: 153348,
              slug: "hololive-summer-2022",
            },
          ],
          startDate: {
            year: 2019,
            month: 5,
            day: 5,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1708868853,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/118123-BvHyzWd850nZ.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/2Ix5Qwad4Zsdx6CC9yBl06rt3qt.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/2Ix5Qwad4Zsdx6CC9yBl06rt3qt.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/2Ix5Qwad4Zsdx6CC9yBl06rt3qt.jpg",
          },
          airingTime: 1712481060000,
          delayed: false,
          scheduledEpisode: 255,
        },
        {
          slug: "hibike-euphonium-kumiko-3-nensei-hen",
          title: {
            english: "Sound! Euphonium Season 3",
            native: "響け！ユーフォニアム３",
            romaji: "Hibike! Euphonium 3",
            userPreferred: "Hibike! Euphonium 3",
          },
          type: "TV",
          anilistID: "109731",
          malID: "39894",
          synonyms: [null],
          description:
            "The third season of <i>Hibike! Euphonium</i>.\n<br><br>\nKumiko's third year finally begins! With the concert band at Kitauji High School over 90 members, Kumiko is now the president and does her best with her final high school club activities to try to win her long-desired gold at nationals.\n<br><br>\n(Source: Crunchyroll, edited)",
          episodeNum: 1,
          animeLength: 13,
          genres: ["Drama", "Music", "Slice of Life"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713081600,
            episode: 2,
          },
          duration: null,
          trailerVideo: "_juRk_cAR9I",
          relatedAnime: [
            {
              type: "ANIME",
              format: "OVA",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150429-5KvbB5BBt2Yz.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150429-5KvbB5BBt2Yz.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/150429-Fc76D3oIqTdk.jpg",
              meanScore: 81,
              episodes: 1,
              trailer: "WOZVcPNaapo",
              description:
                'Along with the summer brass band competition, the ensemble contest, commonly known as "Ancon," is a place where exciting performances are held. The performance of several people in one group has a charm different from that of a competition.In order to participate in the Kyoto prefectural tournament of Ancon, a representative team is selected in the school\'s preliminary round. However, with over 50 members, the Kitauji High School brass band is facing a variety of problems! Will Kumiko, the newly appointed head of the club, be able to make it through the preliminary rounds?The days of struggle begin.',
              startDate: {
                year: 2023,
                month: 8,
                day: 4,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred:
                  "Tokubetsu-hen Hibike! Euphonium: Ensemble Contest",
                english: null,
                romaji: "Tokubetsu-hen Hibike! Euphonium: Ensemble Contest",
              },
              anilistID: 150429,
              slug: "tokubetsu-hen-hibike-euphonium-ensemble-contest",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712486648,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109731-PBjrX9CebGus.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109731-PBjrX9CebGus.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx109731-PBjrX9CebGus.png",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/109731-O9wpjWphEhKn.jpg",
          scheduledEpisode: 1,
          airingTime: 1712486400000,
          delayed: false,
        },
        {
          slug: "shinigami-bocchan-to-kuro-maid-3rd-season",
          title: {
            english: "The Duke of Death and His Maid Season 3",
            native: "死神坊ちゃんと黒メイド 第3期",
            romaji: "Shinigami Bocchan to Kuro Maid 3rd Season",
            userPreferred: "Shinigami Bocchan to Kuro Maid 3rd Season",
          },
          type: "TV",
          anilistID: "169584",
          malID: "56738",
          synonyms: ["The Duke of Death and His Maid Season 3", null],
          description:
            "The third season of <i>Shinigami Bocchan to Kuro Maid.</i> <br><br>\n\nThe Duke and Alice will have their fates collide as their untouchable relationship comes to its conclusion!<br><br>\n\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Comedy", "Drama", "Romance", "Supernatural"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713099600,
            episode: 2,
          },
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139435-7cLDzwDsRqAn.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139435-7cLDzwDsRqAn.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/139435-uSyuM2rDvvEC.jpg",
              meanScore: 75,
              episodes: 12,
              trailer: "kOn0uKfgZd4",
              description:
                "The second season of Shinigami Bocchan to Kuro Maid.",
              startDate: {
                year: 2023,
                month: 7,
                day: 9,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Shinigami Bocchan to Kuro Maid 2nd Season",
                english: "The Duke of Death and His Maid Season 2",
                romaji: "Shinigami Bocchan to Kuro Maid 2nd Season",
              },
              anilistID: 139435,
              slug: "shinigami-bocchan-to-kuro-maid-2nd-season",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712499643,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169584-e9X229cmrh8j.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169584-e9X229cmrh8j.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx169584-e9X229cmrh8j.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/jfO2pBpARfE7xjALilxUcIHcrcX.jpg",
          scheduledEpisode: 1,
          airingTime: 1712499000000,
          delayed: false,
        },
        {
          slug: "vampire-dormitory",
          title: {
            english: "Vampire Dormitory",
            native: "ヴァンパイア男子寮",
            romaji: "Vampire Dormitory",
            userPreferred: "Vampire Dormitory",
          },
          type: "TV",
          anilistID: "170604",
          malID: "57031",
          synonyms: [],
          description:
            "<i>“I want to become your thrall…!”</i><br>\n<br>\nA crossdressing girl and doting vampire’s dangerous cohabitation is about to begin!<br>\n<br>\nAfter losing her parents and being abandoned by her relatives, Mito is left all alone in the world. When she’s kicked out of the restaurant where she works with no money and no place to live, she is taken in by Ruka, a vampire. In exchange for giving Ruka her blood as his “food,” she ends up living with him in a boys’ dorm full of beautiful boys with unique personalities…?!<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Romance", "Supernatural"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713105000,
            episode: 2,
          },
          duration: null,
          trailerVideo: "TDOnrlYqYCI",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712513908,
          bannerImage: null,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170604-VwLdBL8Gip9Z.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx170604-VwLdBL8Gip9Z.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx170604-VwLdBL8Gip9Z.jpg",
          },
          scheduledEpisode: 1,
          airingTime: 1712501700000,
          delayed: false,
        },
        {
          slug: "jii-san-baa-san-wakagaeru",
          title: {
            english: "Grandpa and Grandma Turn Young Again",
            native: "じいさんばあさん若返る",
            romaji: "Jii-san Baa-san Wakagaeru",
            userPreferred: "Jii-san Baa-san Wakagaeru",
          },
          type: "TV",
          anilistID: "168138",
          malID: "56230",
          synonyms: [
            "A Story About a Grandpa and Grandma Who Returned Back to Their Youth",
            "おじいさんとおばあさんが若返った話。",
            "Ojiisan to Obaasan ga Wakagaetta Hanashi.",
            null,
          ],
          description:
            "The story of <i>Jii-san Baa-san Wakagaeru</i> follows Shouzou and Ine, an elderly couple who are living a quiet life in a farming village in Aomori Prefecture. After eating a mysterious apple that they discover on their apple farm, Shozo and Ine spontaneously regain their youth, but even after being reinvigorated they continue to live life at a grandparent-ly pace.<br>\n<br>\n(Source: Crunchyroll News, edited)",
          episodeNum: 1,
          animeLength: 11,
          genres: ["Comedy", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713101400,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: 16,
          },
          updatedAt: 1712503142,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx168138-jgMSP1rDkJhs.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx168138-jgMSP1rDkJhs.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx168138-jgMSP1rDkJhs.jpg",
          },
          bannerImage: null,
          scheduledEpisode: 1,
          airingTime: 1712502600000,
          delayed: false,
        },
        {
          slug: "tensei-kizoku-kantei-skill-de-nariagaru",
          title: {
            english:
              "As a Reincarnated Aristocrat, I'll Use My Appraisal Skill to Rise in the World",
            native: "転生貴族、鑑定スキルで成り上がる",
            romaji: "Tensei Kizoku, Kantei Skill de Nariagaru",
            userPreferred: "Tensei Kizoku, Kantei Skill de Nariagaru",
          },
          type: "TV",
          anilistID: "164702",
          malID: "55265",
          synonyms: [
            "As a Reincarnated Aristocrat, I’ll Use My Appraisal Skill to Rise in the World",
            null,
          ],
          description:
            "Our protagonist, Ars Louvent, was reincarnated in another world as the young son of a minor noble who owns a small domain. Ars was not particularly strong or intelligent, but he was born with the Appraisal Skill that's able to see others' abilities and statuses.He uses his skill to find the best hidden talents in the world to make their small, weak domain into the best. An isekai tale about unification is about to start, featuring the kind-hearted Ars and the unique talents he manages to find!<br><br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Adventure", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713105000,
            episode: 2,
          },
          duration: null,
          trailerVideo: "3-sXWlVc6ds",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 7,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1712513834,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx164702-FjpM96MPdzVm.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx164702-FjpM96MPdzVm.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx164702-FjpM96MPdzVm.jpg",
          },
          bannerImage: null,
          scheduledEpisode: 1,
          airingTime: 1712502600000,
          delayed: false,
        },
        {
          slug: "mushoku-tensei-ii-isekai-ittara-honki-dasu-part-2",
          title: {
            english: "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
            native: "無職転生 Ⅱ ～異世界行ったら本気だす～ 第2クール",
            romaji: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
            userPreferred: "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
          },
          type: "TV",
          anilistID: "166873",
          malID: "55888",
          synonyms: [
            "Mushoku Tensei: Jobless Reincarnation Season 2 Part 2",
            null,
          ],
          description:
            "The second cour of <i>Mushoku Tensei II: Isekai Ittara Honki Dasu</i>.",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Adventure", "Drama", "Ecchi", "Fantasy"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1713106800,
            episode: 2,
          },
          duration: null,
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx146065-IjirxRK26O03.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx146065-IjirxRK26O03.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146065-33RDijfuxLLk.jpg",
              meanScore: 83,
              episodes: 13,
              trailer: "ts5NGoDI1V0",
              description:
                "The second season of Mushoku Tensei: Isekai Ittara Honki Dasu. Rudeus heads north with new friends and powers in search of adventure and those he once knew.  Note: Includes episode 0.",
              startDate: {
                year: 2023,
                month: 7,
                day: 3,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
                english: "Mushoku Tensei: Jobless Reincarnation Season 2",
                romaji: "Mushoku Tensei II: Isekai Ittara Honki Dasu",
              },
              anilistID: 146065,
              slug: "mushoku-tensei-ii-isekai-ittara-honki-dasu",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 8,
          },
          endDate: {
            year: 2024,
            month: 6,
            day: null,
          },
          updatedAt: 1712513391,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166873-JC56ExYSC2YB.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166873-JC56ExYSC2YB.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx166873-JC56ExYSC2YB.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166873-GTi5imE5skM2.jpg",
          scheduledEpisode: 1,
          airingTime: 1712504400000,
          delayed: false,
        },
        {
          slug: "blue-archive-the-animation",
          title: {
            english: null,
            native: "ブルーアーカイブ The Animation",
            romaji: "Blue Archive The Animation",
            userPreferred: "Blue Archive The Animation",
          },
          type: "TV",
          anilistID: "160589",
          malID: "54309",
          synonyms: ["ブルアカ", null],
          description:
            "A live-streamed second anniversary special for Yostar and Nexon Games' <i>Blue Archive</i> smartphone role-playing game announced that production on a television anime, <i>Blue Archive The Animation</i>, has been green-lit.<br><br>\n(Source: Anime News Network)",
          episodeNum: null,
          animeLength: null,
          genres: [],
          status: "NOT_YET_RELEASED",
          season: null,
          averageScore: null,
          nextAiringEpisode: null,
          duration: null,
          relatedAnime: [],
          startDate: {
            year: null,
            month: null,
            day: null,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1688555540,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx160589-xtebwU6ihBg1.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx160589-xtebwU6ihBg1.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx160589-xtebwU6ihBg1.jpg",
          },
          scheduledEpisode: 1,
          airingTime: 1712505300000,
          delayed: false,
        },
        {
          slug: "yami-shibai-12",
          title: {
            english: "Theatre of Darkness: Yamishibai 12",
            native: "闇芝居 十二期",
            romaji: "Yami Shibai 12",
            userPreferred: "Yami Shibai 12",
          },
          type: "TV_SHORT",
          anilistID: "170953",
          malID: "57180",
          synonyms: [],
          description: "The twelfth season of Yami Shibai.",
          episodeNum: 12,
          animeLength: null,
          genres: ["Horror", "Supernatural"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "52",
          nextAiringEpisode: {
            airingAt: 1712519100,
            episode: 13,
          },
          duration: 4,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 1,
            day: 15,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1711915047,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/kdgX5uDV5HoaiIo8HsCEyx6ncH6.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/cGBwUshccdU6uTWC6JDMSrKYyYK.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/cGBwUshccdU6uTWC6JDMSrKYyYK.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/cGBwUshccdU6uTWC6JDMSrKYyYK.jpg",
          },
          airingTime: 1712519700000,
          delayed: false,
          scheduledEpisode: 13,
        },
      ],
      today: true,
    },
  ];
  const renderSchedule = () => {
    switch (activeDay) {
      case "Monday":
        return d[0].animes;
      case "Tuesday":
        return [];
      case "Wednesday":
        return d[1].animes;
      case "Thursday":
        return d[2].animes;
      case "Friday":
        return d[3].animes;
      case "Saturday":
        return d[4].animes;
      case "Sunday":
        return d[5].animes;
      default:
        return d[5].animes; // Handle the case when activeDay is not one of the specified days
    }
  };

  const handleTabSelect = (index: any) => {
    setSelectedTab(index);
  };

  const fetchSchedule = async () => {
    // let url = `https://ottoscraper.vercel.app/`
    const { data }: any = await supabase.from("schedule").select("*");
    setScheduleData(data[0].data);
  };

  return (
    <div className="text-white py-3 home_container">
      <div className="w-full px-2  sm:px-0">
        <Tab.Group>
          <Tab.List className="grid grid-cols-3 lg:grid-cols-7 gap-2 w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto place-self-center">
            {days.map((day, index) => {
              const isToday = day.i === (index as any);

              return (
                <Tab
                  key={index}
                  onClick={() => setActiveDay(day.name)}
                  className={`
                px-4 py-2 rounded-full cursor-pointer hover:bg-white border-[2px] border-neutral-800 hover:text-black transition duration-300
                ${todayIndex == day.i && "txt-primary border-white "}
              `}
                >
                  {day.name}
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {days.map((day, index) => {
              return (
                <Tab.Panel key={index}>
                  <Transition
                    appear={true}
                    as={"div"}
                    show={true}
                    enter="transform transition duration-[500ms]"
                    enterFrom="opacity-0 scale-[0.90]"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                  >
                    <GridContainer data={renderSchedule()} heading="" />
                  </Transition>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Airing;
