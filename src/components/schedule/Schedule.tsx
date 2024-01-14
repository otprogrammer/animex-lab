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
        "title": "Monday",
        "animes": [
            {
                "slug": "isekai-de-mofumofu-nadenade-suru-tame-ni-ganbattemasu",
                "title": {
                    "english": "Fluffy Paradise",
                    "native": "異世界でもふもふなでなでするためにがんばってます。",
                    "romaji": "Isekai de Mofumofu Nadenade Suru Tame ni Ganbattemasu.",
                    "userPreferred": "Isekai de Mofumofu Nadenade Suru Tame ni Ganbattemasu."
                },
                "type": "TV",
                "anilistID": "152072",
                "malID": "52359",
                "synonyms": [
                    "Fluffy Paradise",
                    null
                ],
                "description": "Dead of overwork at age 27...<br>\n<br>\nMidori barely had time to lament having to die that way when a god appeared before her and said, \"You will reincarnate in another world and tell me whether you think humans deserve to continue existing there. In return, I will grant you a special power.\" Then Midori, hoping to relieve the exhaustion of the harsh life she'd lived, found herself asking... to cuddle cute, fluffy animals.<br>\n<br>\nThus Midori reincarnated in her new world as a young girl named Nefertima, with a power that causes her to be loved by all living things other than humans. That includes not only animals, but holy beasts like white tigers and dragons, and even monsters like goblins and frozen spiders! But there was also a cruel fate awaiting her...<br>\n<br>\nNefertima is determined to do her best to coexist with humans and all living creatures in her new life of petting and patting cute animals!<br>\n<br>\n(Source: Crunchyroll)\n<br><br>\n<i>Note: Each episode streamed 1 week early on ABEMA. The original TV broadcast started on January 7th, 2024.</i>",
                "episodeNum": 1,
                "animeLength": null,
                "genres": [
                    "Adventure",
                    "Fantasy",
                    "Slice of Life"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1704720600,
                    "episode": 2
                },
                "duration": null,
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 1
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704123237,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/hSFvUdWMw1eGNjgyh4jvjs02cAo.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/hSFvUdWMw1eGNjgyh4jvjs02cAo.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/hSFvUdWMw1eGNjgyh4jvjs02cAo.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 1,
                "airingTime": 1704121200000
            },
            {
                "slug": "kawagoe-boys-sing",
                "title": {
                    "english": "KAWAGOE BOYS SING -Now or Never-",
                    "native": "川越ボーイズ・シング",
                    "romaji": "Kawagoe Boys Sing",
                    "userPreferred": "Kawagoe Boys Sing"
                },
                "type": "TV",
                "anilistID": "162209",
                "malID": "54638",
                "synonyms": [
                    null
                ],
                "description": "Tenshi is a former choirboy who loves to sing, but can’t muster the courage to sing in front of people. So, he settles for a quiet, stress-free academic life. But his peaceful plans turn chaotic after meeting Haruo, an ex-conductor forming a boys choir to restore his name. Tenshi and others reluctantly join. Despite Haruo’s antics, they grow to love performing and aim to win the national contest!<br>\n<br>\n(Source: Crunchyroll)",
                "episodeNum": 11,
                "animeLength": 12,
                "genres": [
                    "Comedy",
                    "Music"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "47",
                "nextAiringEpisode": {
                    "airingAt": 1704117600,
                    "episode": 12
                },
                "duration": 24,
                "trailerVideo": "mNE47YmAHjs",
                "relatedAnime": [],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 9
                },
                "endDate": {
                    "year": 2023,
                    "month": 12,
                    "day": 25
                },
                "updatedAt": 1703519848,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162209-EdG4Pyn37Il8.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx162209-EdG4Pyn37Il8.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx162209-EdG4Pyn37Il8.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 11,
                "airingTime": 1704123900000
            }
        ],
        "today": false
    },
    {
        "title": "Tuesday",
        "animes": [],
        "today": false
    },
    {
        "title": "Wednesday",
        "animes": [
            {
                "slug": "tian-guan-ci-fu-2",
                "title": {
                    "english": "Heaven Official's Blessing Season 2",
                    "native": "天官赐福 第二季",
                    "romaji": "Tian Guan Ci Fu 2",
                    "userPreferred": "Tian Guan Ci Fu 2"
                },
                "type": "ONA",
                "anilistID": "127976",
                "malID": "50399",
                "synonyms": [
                    "Heaven Official's Blessing 2",
                    null
                ],
                "description": "The second season of <i>Tian Guan Ci Fu</i>.",
                "episodeNum": 9,
                "animeLength": null,
                "genres": [
                    "Adventure",
                    "Drama",
                    "Fantasy",
                    "Romance"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "85",
                "nextAiringEpisode": {
                    "airingAt": 1704286800,
                    "episode": 10
                },
                "duration": null,
                "trailerVideo": "MXQOM5aoX-A",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126356-Nt66D91sH3Cu.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126356-Nt66D91sH3Cu.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/126356-tuicojh0EsWR.jpg",
                        "meanScore": 85,
                        "episodes": 1,
                        "trailer": "O-584_wk3mw",
                        "description": "Xie Lian, crown prince of Xian Le Kingdom, ascends to Heaven despite successive demotions. However, he accidentally breaks the Gold Palace of heavenly officials. With no human worshiping him, Xie Lian must descend to the secular world to exorcise ghosts.",
                        "startDate": {
                            "year": 2021,
                            "month": 2,
                            "day": 16
                        },
                        "seasonYear": null,
                        "animeName": {
                            "userPreferred": "Tian Guan Ci Fu Special",
                            "english": "Heaven Official's Blessing Special Episode",
                            "romaji": "Tian Guan Ci Fu Special"
                        },
                        "anilistID": 126356,
                        "slug": "tian-guan-ci-fu-special"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 18
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1703682856,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/127976-dhwWiCREK7zU.jpg",
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127976-8PM1dCfqAWNc.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127976-8PM1dCfqAWNc.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx127976-8PM1dCfqAWNc.jpg"
                },
                "scheduledEpisode": 9,
                "airingTime": 1704286800000
            },
            {
                "slug": "jaku-chara-tomozaki-kun-2nd-stage",
                "title": {
                    "english": "Bottom-Tier Character Tomozaki 2nd Stage",
                    "native": "弱キャラ友崎くん 2nd STAGE",
                    "romaji": "Jaku-Chara Tomozaki-kun 2nd STAGE",
                    "userPreferred": "Jaku-Chara Tomozaki-kun 2nd STAGE"
                },
                "type": "TV",
                "anilistID": "143866",
                "malID": "50803",
                "synonyms": [
                    "Bottom-Tier Character Tomozaki Season 2",
                    "Jaku-Chara Tomozaki-kun 2nd Season",
                    "弱キャラ友崎くん２",
                    null
                ],
                "description": "The second season of <i>Jaku-Chara Tomozaki-kun</i>.",
                "episodeNum": 1,
                "animeLength": 13,
                "genres": [
                    "Comedy",
                    "Drama",
                    "Romance",
                    "Slice of Life"
                ],
                "status": "RELEASING",
                "season": "WINTER",
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1704888000,
                    "episode": 2
                },
                "duration": null,
                "trailerVideo": "3eMnlLtdmfs",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112443-UVB1oKdblsIx.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112443-UVB1oKdblsIx.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112443-w44XlUOHN5kh.jpg",
                        "meanScore": 70,
                        "episodes": 12,
                        "trailer": "DTyYETL1NjA",
                        "description": "Expert gamer Tomozaki Fumiya doesn’t exactly fit in, but he wishes he did. With no written rules for success and gameplay that doesn’t work in his favor, the real world seems impossible for someone like him. But, like any noob, all he really needs are some strategies and a seasoned player like Aoi Hinami to help him. Hopefully with her guidance, Tomozaki will gain the experience he needs.",
                        "startDate": {
                            "year": 2021,
                            "month": 1,
                            "day": 8
                        },
                        "seasonYear": 2021,
                        "animeName": {
                            "userPreferred": "Jaku-Chara Tomozaki-kun",
                            "english": "Bottom-Tier Character Tomozaki",
                            "romaji": "Jaku-Chara Tomozaki-kun"
                        },
                        "anilistID": 112443,
                        "slug": "jaku-chara-tomozaki-kun"
                    }
                ],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 3
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 27
                },
                "updatedAt": 1704313212,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/spDlNOiLxhcJ6ToZkcKgNUDwi3V.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/spDlNOiLxhcJ6ToZkcKgNUDwi3V.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/spDlNOiLxhcJ6ToZkcKgNUDwi3V.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/143866-dfIeGq0O9im5.jpg",
                "scheduledEpisode": 1,
                "airingTime": 1704288600000
            },
            {
                "slug": "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-3rd-season",
                "title": {
                    "english": "Classroom of the Elite Season 3",
                    "native": "ようこそ実力至上主義の教室へ 第3期",
                    "romaji": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
                    "userPreferred": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season"
                },
                "type": "TV",
                "anilistID": "146066",
                "malID": "51180",
                "synonyms": [
                    "You-Zitsu",
                    "Youjitsu",
                    "Classroom of the Elite Season 3",
                    "ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ภาค 3",
                    null
                ],
                "description": "The third season of <i>Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e</i>.<br>\n<br>\nThe third semester kicks off in high gear with a special boot camp deep in the mountains. Forcibly separated into groups along grade and gender lines, the first, second and third years alike must work together to survive the rugged terrain. Even worse? The leader of the group that comes in last will be expelled. Can Class D make it back to campus intact, or is this where they finally say goodbye to one of their own?<br>\n<br>\n(Source: Seven Seas Entertainment)",
                "episodeNum": 1,
                "animeLength": 13,
                "genres": [
                    "Drama",
                    "Psychological"
                ],
                "status": "RELEASING",
                "season": "WINTER",
                "averageScore": "79",
                "nextAiringEpisode": {
                    "airingAt": 1704893400,
                    "episode": 2
                },
                "duration": 24,
                "trailerVideo": "MLAbHM-ZJs0",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145545-DGl3LVvFlnHi.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx145545-DGl3LVvFlnHi.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145545-XeHhS7dJJLlj.jpg",
                        "meanScore": 80,
                        "episodes": 13,
                        "trailer": "0mM3lQytac4",
                        "description": "The second season of Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e.Tokyo Metropolitan Advanced Nurturing High School seems like a paradise, but in reality, it is an extreme meritocracy. In the class of underachievers, Kiyotaka has begun working with Suzune, who seeks to ascend higher. After a survival test on an uninhabited island, they get to enjoy a luxury liner, but a new class-scrambling test will begin.",
                        "startDate": {
                            "year": 2022,
                            "month": 7,
                            "day": 4
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season",
                            "english": "Classroom of the Elite Season 2",
                            "romaji": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season"
                        },
                        "anilistID": 145545,
                        "slug": "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season"
                    }
                ],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 3
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 27
                },
                "updatedAt": 1704383085,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/cnX4sZ6pz7CdbtxmIEb9Gds5c9E.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/cnX4sZ6pz7CdbtxmIEb9Gds5c9E.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/cnX4sZ6pz7CdbtxmIEb9Gds5c9E.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146066-gxjPUB1ofAO4.jpg",
                "scheduledEpisode": 1,
                "airingTime": 1704294000000
            },
            {
                "slug": "mahou-shoujo-ni-akogarete",
                "title": {
                    "english": "Gushing Over Magical Girls",
                    "native": "魔法少女にあこがれて",
                    "romaji": "Mahou Shoujo ni Akogarete",
                    "userPreferred": "Mahou Shoujo ni Akogarete"
                },
                "type": "TV",
                "anilistID": "162780",
                "malID": "54722",
                "synonyms": [
                    "Gushing over Magical Girls",
                    "I Admire Magical Girls, and...",
                    "Mahoako",
                    null
                ],
                "description": "Hiragi Utena is a major fangirl of the magical girls protecting her city, so when she has the chance to become one herself, she leaps at the chance to join their technicolor ranks… but when she transforms, she learns she isn’t fated to be a daring do-gooder, but rather a villain on the side of evil! At first she tries to quit her new gig as the leader of the local baddies, but she quickly realizes she enjoys it and is a total natural at tormenting the magical girls she loves so much. With both a bang and a whimper, Hiragi’s journey as a magical-girl-tormenting sadist has begun!<br>\n<br>\n(Source: HIDIVE)",
                "episodeNum": 1,
                "animeLength": 13,
                "genres": [
                    "Comedy",
                    "Ecchi",
                    "Mahou Shoujo",
                    "Slice of Life"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1704897000,
                    "episode": 2
                },
                "duration": null,
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 3
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 27
                },
                "updatedAt": 1704312718,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/szc47iGLakpP0Qz5nEWHpUZIl1x.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/szc47iGLakpP0Qz5nEWHpUZIl1x.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/szc47iGLakpP0Qz5nEWHpUZIl1x.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/162780-rZ0KpsfCg2IA.jpg",
                "scheduledEpisode": 1,
                "airingTime": 1704297600000
            }
        ],
        "today": false
    },
    {
        "title": "Thursday",
        "animes": [
            {
                "slug": "mato-seihei-no-slave",
                "title": {
                    "english": "Chained Soldier",
                    "native": "魔都精兵のスレイブ",
                    "romaji": "Mato Seihei no Slave",
                    "userPreferred": "Mato Seihei no Slave"
                },
                "type": "TV",
                "anilistID": "141821",
                "malID": "50392",
                "synonyms": [
                    "Chained Soldier",
                    "Slave of the Magic Capital's Elite Troops",
                    "Demon Slave",
                    "Slave of the Hell Soldiers",
                    "ทาสสุดแกร่งแห่งหน่วยป้องกันอสูร",
                    null
                ],
                "description": "Yuuki Wakura watches as dueling supernatural forces ravage the Earth. Mato are portals to another dimension, avenues from which dangerous monsters escape. Peaches are resources given to women granting them abilities. Chief of the Seventh Unity of the Anti-Demon Corp, Kyouka Uzen arrives to save Yuuki from a monster. Surprisingly, Yuuki holds the power to increase the Peaches effectiveness. But to save the world, Yuuki must be willing to become Kyouka’s servant both on the battlefield and at home.<br>\n<br>\n(Source: HIDIVE)",
                "episodeNum": 1,
                "animeLength": 12,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama",
                    "Ecchi",
                    "Fantasy",
                    "Romance"
                ],
                "status": "RELEASING",
                "season": "WINTER",
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1704981600,
                    "episode": 2
                },
                "duration": 24,
                "trailerVideo": "NdWFitNUsMw",
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 4
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 21
                },
                "updatedAt": 1704391525,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141821-KIRWH28jXINm.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/jRPj0lLdWEqXHoz8Z2TLGYcwHMT.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/jRPj0lLdWEqXHoz8Z2TLGYcwHMT.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/jRPj0lLdWEqXHoz8Z2TLGYcwHMT.jpg"
                },
                "scheduledEpisode": 1,
                "airingTime": 1704380400000
            },
            {
                "slug": "sokushi-cheat-ga-saikyou-sugite-isekai-no-yatsura-ga-marude-aite-ni-naranai-n-desu-ga",
                "title": {
                    "english": "My Instant Death Ability is Overpowered",
                    "native": "即死チートが最強すぎて、異世界のやつらがまるで相手にならないんですが。",
                    "romaji": "Sokushi Cheat ga Saikyou Sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga.",
                    "userPreferred": "Sokushi Cheat ga Saikyou Sugite, Isekai no Yatsura ga Marude Aite ni Naranai n desu ga."
                },
                "type": "TV",
                "anilistID": "158028",
                "malID": "53730",
                "synonyms": [
                    "My Instant Death Ability is So Overpowered, No One in This Other World Stands a Chance Against Me!",
                    null
                ],
                "description": "Yogiri Takatou missed out on a few things while napping during a school trip... mainly how his entire class got transported to another world and how a curious sage gave everyone special powers! When Yogiri wakes up, he and classmate Tomochika Dannoura must defend themselves against a dragon. Out of options, Yogiri reluctantly agrees to team up with Tomochika and fend off danger with his Instant Death ability. If he can keep his eyes open, that is...<br>\n<br>\n(Source: HIDIVE)",
                "episodeNum": 1,
                "animeLength": 12,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1704987000,
                    "episode": 2
                },
                "duration": 24,
                "trailerVideo": "lbF8d-bawNs",
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 5
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 22
                },
                "updatedAt": 1704390823,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158028-gQ2vnz7LEb0E.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158028-gQ2vnz7LEb0E.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx158028-gQ2vnz7LEb0E.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 1,
                "airingTime": 1704385800000
            },
            {
                "slug": "chiikawa",
                "title": {
                    "english": "Chiikawa",
                    "native": "ちいかわ",
                    "romaji": "Chiikawa",
                    "userPreferred": "Chiikawa"
                },
                "type": "TV_SHORT",
                "anilistID": "140842",
                "malID": "50250",
                "synonyms": [],
                "description": "The sometimes happy, sometimes sad, and a tad stressful daily life of \"some sort of small, cute creature\" known as Chiikawa. Chiikawa enjoys delicious food with bees and rabbits, toils hard every day for the rewards of work, and still maintains a smile.<br>\n<br>\n(Source: Anime News Network)\n",
                "episodeNum": 66,
                "animeLength": null,
                "genres": [
                    "Comedy"
                ],
                "status": "RELEASING",
                "season": "SPRING",
                "averageScore": "60",
                "nextAiringEpisode": {
                    "airingAt": 1704390900,
                    "episode": 122
                },
                "duration": 2,
                "trailerVideo": "m4yfCS_YBUU",
                "relatedAnime": [],
                "startDate": {
                    "year": 2022,
                    "month": 4,
                    "day": 4
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1701367004,
                "bannerImage": null,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140842-T0geOCa3zS0A.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140842-T0geOCa3zS0A.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx140842-T0geOCa3zS0A.jpg"
                },
                "disableMax": true,
                "disableMoon": true,
                "scheduledEpisode": 121,
                "airingTime": 1704390900000
            }
        ],
        "today": false
    },
    {
        "title": "Friday",
        "animes": [
            {
                "slug": "sasaki-to-pi-chan",
                "title": {
                    "english": "Sasaki and Peeps",
                    "native": "佐々木とピーちゃん",
                    "romaji": "Sasaki to Pi-chan",
                    "userPreferred": "Sasaki to Pi-chan"
                },
                "type": "TV",
                "anilistID": "152682",
                "malID": "52482",
                "synonyms": [
                    "Sasaki and Peeps",
                    "ซาซากิกับพีจัง",
                    null
                ],
                "description": "Sasaki is a middle-aged office worker living in Japan. Feeling drained by the vapid corporate world, he heads to the pet shop in search of a new companion. There he finds an adorable bird named Peeps and takes him home. But Sasaki quickly learns that Peeps isn’t your average bird…he’s a powerful mage from another world! Together, they embark on a magical adventure filled with swords and sorcery.<br>\n<br>\n(Source: Crunchyroll)\n<br>\n<i>Note: The first episode aired with a runtime of ~60 minutes.</i>",
                "episodeNum": 1,
                "animeLength": 12,
                "genres": [
                    "Comedy",
                    "Fantasy",
                    "Mahou Shoujo"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1705060800,
                    "episode": 2
                },
                "duration": null,
                "trailerVideo": "le6HaYq2UTk",
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 5
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 22
                },
                "updatedAt": 1704463308,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/kVp4PsyB8V839mGQjkn6kevBwKV.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/kVp4PsyB8V839mGQjkn6kevBwKV.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/kVp4PsyB8V839mGQjkn6kevBwKV.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 1,
                "airingTime": 1704465000000
            },
            {
                "slug": "momochi-san-chi-no-ayakashi-ouji",
                "title": {
                    "english": "The Demon Prince of Momochi House",
                    "native": "百千さん家のあやかし王子",
                    "romaji": "Momochi-san Chi no Ayakashi Ouji",
                    "userPreferred": "Momochi-san Chi no Ayakashi Ouji"
                },
                "type": "TV",
                "anilistID": "167146",
                "malID": null,
                "synonyms": [
                    null
                ],
                "description": "On her sixteenth birthday, orphan Himari Momochi inherits her ancestral estate that she's never seen. Momochi House exists on the barrier between the human and spiritual realms, and Himari is meant to act as guardian between the two worlds. But on the day she moves in, she finds three handsome squatters already living in the house, and one seems to have already taken over her role!\n<br><br>\n(Source: VIZ Media)",
                "episodeNum": 1,
                "animeLength": null,
                "genres": [
                    "Romance",
                    "Supernatural"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1705071600,
                    "episode": 2
                },
                "duration": null,
                "trailerVideo": "sT9rLoQpH_M",
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 6
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704476731,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/xSHn2ECie9ZyG3QCKL6fzfnLu2c.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/xSHn2ECie9ZyG3QCKL6fzfnLu2c.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/xSHn2ECie9ZyG3QCKL6fzfnLu2c.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 1,
                "airingTime": 1704470400000
            },
            {
                "slug": "sousou-no-frieren",
                "title": {
                    "english": "Frieren: Beyond Journey’s End",
                    "native": "葬送のフリーレン",
                    "romaji": "Sousou no Frieren",
                    "userPreferred": "Sousou no Frieren"
                },
                "type": "TV",
                "anilistID": "154587",
                "malID": "52991",
                "synonyms": [
                    "Frieren at the Funeral",
                    "장송의 프리렌",
                    "Frieren: Oltre la Fine del Viaggio",
                    "คำอธิษฐานในวันที่จากลา Frieren",
                    "Frieren e a Jornada para o Além",
                    "Frieren – Nach dem Ende der Reise",
                    "葬送的芙莉蓮",
                    "Frieren: Más allá del final del viaje",
                    "Frieren en el funeral",
                    "Sōsō no Furīren",
                    "Frieren. U kresu drogi",
                    "Frieren - Pháp sư tiễn táng",
                    "Фрирен, провожающая в последний путь",
                    null
                ],
                "description": "The adventure is over but life goes on for an elf mage just beginning to learn what living is all about. Elf mage Frieren and her courageous fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her? Decades after their victory, the funeral of one her friends confronts Frieren with her own near immortality. Frieren sets out to fulfill the last wishes of her comrades and finds herself beginning a new adventure…\n<br><br>\n(Source: Crunchyroll)",
                "episodeNum": 17,
                "animeLength": 28,
                "genres": [
                    "Adventure",
                    "Drama",
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "89",
                "nextAiringEpisode": {
                    "airingAt": 1705068000,
                    "episode": 18
                },
                "duration": 24,
                "trailerVideo": "qgQunxD0qCk",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170068-ijY3tCP8KoWP.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx170068-ijY3tCP8KoWP.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 74,
                        "episodes": null,
                        "trailer": "X3Y9esqDspY",
                        "description": "Chibi shorts posted on the official YouTube account of TOHO animation and Twitter account of the main series.",
                        "startDate": {
                            "year": 2023,
                            "month": 10,
                            "day": 11
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Sousou no Frieren: ●● no Mahou",
                            "english": null,
                            "romaji": "Sousou no Frieren: ●● no Mahou"
                        },
                        "anilistID": 170068,
                        "slug": "sousou-no-frieren-no-mahou"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 9,
                    "day": 29
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704471827,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/dqZENchTd7lp5zht7BdlqM7RBhD.jpg"
                },
                "scheduledEpisode": 17,
                "airingTime": 1704470400000
            },
            {
                "slug": "chiyu-mahou-no-machigatta-tsukaikata",
                "title": {
                    "english": "The Wrong Way to Use Healing Magic",
                    "native": "治癒魔法の間違った使い方",
                    "romaji": "Chiyu Mahou no Machigatta Tsukaikata",
                    "userPreferred": "Chiyu Mahou no Machigatta Tsukaikata"
                },
                "type": "TV",
                "anilistID": "137908",
                "malID": "49613",
                "synonyms": [
                    "The Wrong Way to Use Healing Magic",
                    null
                ],
                "description": "An ordinary walk home from school turns into an epic journey for Usato. After suddenly being dropped into another world with two fellow students, Usato learns he was summoned there by accident. But things turn around when he discovers a unique aptitude for healing magic! Now, he trains beyond human limitations, using his self-healing abilities to gain absurd strength and unrivaled stamina.<br>\n<br>\n(Source: Crunchyroll)",
                "episodeNum": 1,
                "animeLength": 13,
                "genres": [
                    "Action",
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": {
                    "airingAt": 1705073400,
                    "episode": 2
                },
                "duration": null,
                "trailerVideo": "WMBLLOa3Ldw",
                "relatedAnime": [],
                "startDate": {
                    "year": 2024,
                    "month": 1,
                    "day": 6
                },
                "endDate": {
                    "year": 2024,
                    "month": 3,
                    "day": 30
                },
                "updatedAt": 1704475095,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/k8f9pfHRi9HvYHj8Kd9aQndDp2n.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/k8f9pfHRi9HvYHj8Kd9aQndDp2n.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/k8f9pfHRi9HvYHj8Kd9aQndDp2n.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 1,
                "airingTime": 1704472200000
            }
        ],
        "today": false
    },
    {
        "title": "Saturday",
        "animes": [
            {
                "slug": "shadowverse-flame-seven-shadows-hen",
                "title": {
                    "english": "Shadowverse Flame: Seven Shadows Arc",
                    "native": "シャドウバースF セブンシャドウズ編",
                    "romaji": "Shadowverse Flame: Seven Shadows-hen",
                    "userPreferred": "Shadowverse Flame: Seven Shadows-hen"
                },
                "type": "TV",
                "anilistID": "163136",
                "malID": "54854",
                "synonyms": [
                    null
                ],
                "description": "Sequel to <i>Shadowverse Flame</i>.",
                "episodeNum": 25,
                "animeLength": null,
                "genres": [
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": "SUMMER",
                "averageScore": "58",
                "nextAiringEpisode": {
                    "airingAt": 1704511800,
                    "episode": 26
                },
                "duration": 24,
                "trailerVideo": "MAoKkk0VRk8",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140085-3VhIbUc8HKYi.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140085-3VhIbUc8HKYi.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140085-hLyuk7rMu1PG.jpg",
                        "meanScore": 65,
                        "episodes": 50,
                        "trailer": "zyjVtZGmoE4",
                        "description": "Shadowverse Flame features a new protagonist Light Tenryu and its story is set in Shadovar College, a facility that trains professional players of the Shadowverse game. Tenryu Light, a transfer student, decides to join \"Seventh Flame,\" one of the seven Shadovar clubs. However, Seventh Flame is on the verge of closure due to a lack of members! In order to avoid the club's demise, Light decides to look for new members. But what awaits him are powerful rivals who control a wide variety of cards...",
                        "startDate": {
                            "year": 2022,
                            "month": 4,
                            "day": 2
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Shadowverse Flame",
                            "english": "Shadowverse Flame",
                            "romaji": "Shadowverse Flame"
                        },
                        "anilistID": 140085,
                        "slug": "shadowverse-flame"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 7,
                    "day": 8
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1703303165,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163136-Fk6VdfAlxjj0.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163136-Fk6VdfAlxjj0.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx163136-Fk6VdfAlxjj0.jpg"
                },
                "bannerImage": null,
                "scheduledEpisode": 25,
                "airingTime": 1704511800000
            },
            {
                "slug": "megumi-no-daigo-kyuukoku-no-orange",
                "title": {
                    "english": "Firefighter Daigo: Rescuer in Orange",
                    "native": "め組の大吾 救国のオレンジ",
                    "romaji": "Megumi no Daigo: Kyuukoku no Orange",
                    "userPreferred": "Megumi no Daigo: Kyuukoku no Orange"
                },
                "type": "TV",
                "anilistID": "158791",
                "malID": "53848",
                "synonyms": [
                    "Firefighter! Daigo of Fire Company M: The Orange of National Salvation",
                    "烈焰先鋒 救國的橘衣消防員",
                    "Company M: The Orange of National Salvation"
                ],
                "description": "Toake Daigo burns with remarkable talent and unparalleled determination. Onoda Shun struggles against the walls blocking his own path. Nakamura Yuki hopes to become one of the few female members of the special rescue corps known as \"Orange.\" When these three young firefighters who share the goal of becoming members of Orange come together, the story of how Japan will one day be saved begins... and what looms before them is a crisis that endangers the entire country!<br>\n<br>\n(Source: Crunchyroll)",
                "episodeNum": 14,
                "animeLength": 24,
                "genres": [
                    "Action",
                    "Drama"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "63",
                "nextAiringEpisode": {
                    "airingAt": 1705134600,
                    "episode": 14
                },
                "duration": 24,
                "trailerVideo": "CnDZnNW8GW4",
                "relatedAnime": [],
                "startDate": {
                    "year": 2023,
                    "month": 9,
                    "day": 30
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704537722,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/158791-wj9hbRc0lslE.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/3gdaJacLTvi48ZoDsu7YSKb86mj.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/3gdaJacLTvi48ZoDsu7YSKb86mj.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/3gdaJacLTvi48ZoDsu7YSKb86mj.jpg"
                },
                "scheduledEpisode": 13,
                "airingTime": 1704535200000
            },
            {
                "slug": "meitantei-conan",
                "title": {
                    "english": "Case Closed",
                    "native": "名探偵コナン",
                    "romaji": "Meitantei Conan",
                    "userPreferred": "Meitantei Conan"
                },
                "type": "TV",
                "anilistID": "235",
                "malID": "235",
                "synonyms": [
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
                    "Case Closed: One Truth Prevails"
                ],
                "description": "Kudo Shinichi is a seventeen year-old high school detective whom people call the \"Modern Sherlock Holmes.\" However, one night after a date with his childhood sweetheart, Ran, Shinichi witnessed an illegal trade and, caught off his guard, was knocked unconscious and fed a drug that was supposed to kill him... but he woke up and found himself shrunken to a seven year-old. In order to track down the men who did this to him, Shinichi hid his identity and lived with Ran, whose father happened to be a hopeless detective, and with that came a series of murders and mysteries that he must solve. <br><br>\n(Source: Anime News Network)\n<br><br>\n<i>Note:<br>\n- Includes Keisatsu Gakkou-hen - Wild Police Story in episodes 1029, 1038, 1042, 1061<br>\n- Episodes 11, 52, 76, 118, 162, 184, 208, 342, 356, 449, 452, 487, 488, 489, 490, 515, 516, 521, 522, 651, 734, 804, 805, 927, 928 aired with a runtime of ~50 minutes as opposed to the standard 25 minute long episode.<br>\n- Episodes 96, 129, 174, 219, 263, 304, 383, 479 aired with a runtime of ~90 minutes as opposed to the standard 25 minute long episode.<br>\n- Episode 345, 425 aired with a runtime of ~115 minutes as opposed to the standard 25 minute long episode.<br>\n</i>",
                "episodeNum": 1109,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Mystery",
                    "Psychological"
                ],
                "status": "RELEASING",
                "season": "WINTER",
                "averageScore": "81",
                "nextAiringEpisode": {
                    "airingAt": 1705136400,
                    "episode": 1110
                },
                "duration": 25,
                "trailerVideo": "iR2l9M0KzuQ",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx779-xc5cHSos8DKn.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx779-xc5cHSos8DKn.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n779-6gM60BQ03PQZ.jpg",
                        "meanScore": 76,
                        "episodes": 1,
                        "description": "Taking the original story of Detective Conan, this first Conan film follows his adventures as he struggles to find and capture a mad bomber who's loose in his home town. Chasing bomb after bomb, Conan must stop him before he destroys a skyscraper in the middle of the city, which has the potential to cause millions of dollars in damage and kill hundreds. Who's planting the bombs? What are his motives? Gather clues with Conan and find out!",
                        "startDate": {
                            "year": 1997,
                            "month": 4,
                            "day": 19
                        },
                        "seasonYear": 1997,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Tokei Jikake no Matenrou",
                            "english": "Case Closed: The Time Bombed Skyscraper",
                            "romaji": "Meitantei Conan: Tokei Jikake no Matenrou"
                        },
                        "anilistID": 779,
                        "slug": "meitantei-conan-tokei-jikake-no-matenrou"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1505-1ARTmIc0Ryh6.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1505-1ARTmIc0Ryh6.png"
                        },
                        "bannerImage": null,
                        "meanScore": 75,
                        "episodes": 1,
                        "description": "15 years ago, Daiichi Yachiyo Maru, a cargo ship, was crashed into a large iceberg in northern the Pacific Ocean, and sank. The captain and a crew were died.Now, in Nishitama, a ship designer of Yatsushiro Shipbuilder, which belonged to Yatsushiro Financial Combine, was suffered from a sudden heart attack while he was driving, and died in a traffic accident.Six months has passed since then. Conan, Ran, and Kogoro are enjoying their trip in the Aphrodite. The Aphrodite is a luxury liner, and it is sailing for the Pacific Ocean as its maiden voyage. However, there is a suspicious person, and finally a murder occurs.It is the beginning of a horrible plot occurred in the ocean where there is no place to escape from.",
                        "startDate": {
                            "year": 2005,
                            "month": 4,
                            "day": 9
                        },
                        "seasonYear": 2005,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Suihei Senjou no Sutoratejii",
                            "english": "Case Closed: Strategy Above the Depths",
                            "romaji": "Meitantei Conan: Suihei Senjou no Sutoratejii"
                        },
                        "anilistID": 1505,
                        "slug": "meitantei-conan-suihei-senjou-no-sutoratejii"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2171-WiAcCpinTRvs.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2171-WiAcCpinTRvs.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 71,
                        "episodes": 1,
                        "description": "The Isle of Koumi, a beautiful island in the Pacific Ocean. On the island, people pass an old legend down from generation to generation that there was the Seabed Palace, an ancient ruin at the bottom of the sea, where the treasure of 2 female pirates, Anne Bonnie &amp; Mary Reed (who really existed 300 years ago), was left. When Conan and his friends visit Koumi Island while on vacation, they meet some treasure hunters. There was something suspicious about them.",
                        "startDate": {
                            "year": 2007,
                            "month": 4,
                            "day": 21
                        },
                        "seasonYear": 2007,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Konpeki no Hitsugi (Jolly Roger)",
                            "english": "Case Closed: Jolly Roger in the Deep Azure",
                            "romaji": "Meitantei Conan: Konpeki no Hitsugi (Jolly Roger)"
                        },
                        "anilistID": 2171,
                        "slug": "meitantei-conan-konpeki-no-hitsugi-jolly-roger"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20546-3etnJUBqpEdJ.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20546-3etnJUBqpEdJ.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 78,
                        "episodes": 1,
                        "trailer": "XQG4DG7zCH0",
                        "description": "Shuichi Akai is targeted by a mysterious sniper and Masumi Sera is shot. Tokyo is in panic, citizens are taken in the shooting of a sniper. Nothing is known about him. Why was Sera targeted? Will Akai survive from this? Jodie Starling and Subaru Okiya are also in this one. Will Conan be able to find and apprehend the culprit?",
                        "startDate": {
                            "year": 2014,
                            "month": 4,
                            "day": 19
                        },
                        "seasonYear": 2014,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Ijigen no Sniper",
                            "english": "Case Closed: The Sniper from Another Dimension",
                            "romaji": "Meitantei Conan: Ijigen no Sniper"
                        },
                        "anilistID": 20546,
                        "slug": "meitantei-conan-ijigen-no-sniper"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx781-5VSeE53N40BF.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx781-5VSeE53N40BF.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n781-p47e6Uf1RG6d.jpg",
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "Kaitou Kid announces to the police that he intends to steal the Russian Imperial Easter Egg, which is currently being held in Osaka. As Conan pursues his rival, he discovers that there's more to this case then simply stopping a robbery.",
                        "startDate": {
                            "year": 1999,
                            "month": 4,
                            "day": 17
                        },
                        "seasonYear": 1999,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Seikimatsu no Majutsushi",
                            "english": "Case Closed: The Last Wizard of the Century",
                            "romaji": "Meitantei Conan: Seikimatsu no Majutsushi"
                        },
                        "anilistID": 781,
                        "slug": "meitantei-conan-seikimatsu-no-majutsushi"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6467-P24FJYtNRpyE.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx6467-P24FJYtNRpyE.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "The fourteenth movies in the series, The Lost Ship in the Sky, will be released on April 17, 2010. In the film's story, Kid has his eyes set on the \"Lady of the Sky\" jewel aboard Bell 3, the largest airship in the world. However, a mysterious terrorist group called Red Shamu-neko [Red Siamese Cat] has hijacked the airship itself, along with Conan and his allies Kogoro and Ran.",
                        "startDate": {
                            "year": 2010,
                            "month": 4,
                            "day": 17
                        },
                        "seasonYear": 2010,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Tenkuu no Lost Ship",
                            "english": "Case Closed: The Lost Ship in the Sky",
                            "romaji": "Meitantei Conan: Tenkuu no Lost Ship"
                        },
                        "anilistID": 6467,
                        "slug": "meitantei-conan-tenkuu-no-lost-ship"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20878-p6VBv7uw1QFV.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20878-p6VBv7uw1QFV.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 76,
                        "episodes": 1,
                        "description": "It's been announced that a new Detective Conan anime special project is launching. The \"astonishing collaboration\" is titled \"Edogawa Conan Shissou Jiken: Shijou Saiaku no Futsukakan\" (The Disappearance of Conan Edogawa: The Worst Two Days in History).\r\rThe anime special will celebrate the 20th anniversary of Gosho Aoyama's original manga, and it will recount a previously untold story from Conan's past.",
                        "startDate": {
                            "year": 2014,
                            "month": 12,
                            "day": 26
                        },
                        "seasonYear": 2014,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Edogawa Conan Shissou Jiken - Shijou Saiaku no Futsukakan",
                            "english": "The Disappearance of Conan Edogawa: The Worst Two Days in History",
                            "romaji": "Meitantei Conan: Edogawa Conan Shissou Jiken - Shijou Saiaku no Futsukakan"
                        },
                        "anilistID": 20878,
                        "slug": "meitantei-conan-edogawa-conan-shissou-jiken-shijou-saiaku-no-futsukakan"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5460-z2qeEVBe01dW.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5460-z2qeEVBe01dW.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 79,
                        "episodes": 1,
                        "description": "Kudou Shinichi is living his life as Edogawa Conan, but those days seem to might end pretty soon. The Black Syndicate is coming dangerously close to learning the truth about Shinichi having survived. Conan and everybody around him may end up dead if he doesn't manage to find Irish - a member of the Black Organisation who has infiltrated the police forces, currently investigating a big serial murders case.",
                        "startDate": {
                            "year": 2009,
                            "month": 4,
                            "day": 18
                        },
                        "seasonYear": 2009,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Shikkoku no Chaser",
                            "english": "Case Closed: The Jet Black Chaser",
                            "romaji": "Meitantei Conan: Shikkoku no Chaser"
                        },
                        "anilistID": 5460,
                        "slug": "meitantei-conan-shikkoku-no-chaser"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9963-U5oy6aGrpTch.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9963-U5oy6aGrpTch.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9963-zsQuOBFKNXc2.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "description": "The story begins with a threat against the Tokyo governor, but Conan's quick thinking prevents any fatalities when a subway tunnel is blown up. Conan learns there may be a connection to a village that was relocated for the construction of a dam, and he races to stop the criminal before the next attack.",
                        "startDate": {
                            "year": 2011,
                            "month": 4,
                            "day": 16
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Chinmoku no Quarter",
                            "english": "Case Closed: Quarter of Silence",
                            "romaji": "Meitantei Conan: Chinmoku no Quarter"
                        },
                        "anilistID": 9963,
                        "slug": "meitantei-conan-chinmoku-no-quarter"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1364-tlZLDeDo8W0z.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1364-tlZLDeDo8W0z.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "As a pair of towers in Tokyo are being prepared for their grand opening, there is a series of murders of people connected to the towers. Conan suspects that the mysterious Syndicate may also be involved.",
                        "startDate": {
                            "year": 2001,
                            "month": 4,
                            "day": 21
                        },
                        "seasonYear": 2001,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Tengoku e no Count Down",
                            "english": "Case Closed: Countdown to Heaven",
                            "romaji": "Meitantei Conan: Tengoku e no Count Down"
                        },
                        "anilistID": 1364,
                        "slug": "meitantei-conan-tengoku-e-no-count-down"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1363-KeaIofC3kYaZ.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1363-KeaIofC3kYaZ.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1363-rP3Ks2HcfzEJ.jpg",
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "A series of murders have occurred with police officers as victims. One of the officers is shot right in front of Ran's eyes, and the shock of the incident causes Ran to lose her memory of everyone and everything around her. Now Conan must help Ran regain her lost memories, while also protecting her from the murderer, who is targeting Ran for witnessing the crime.",
                        "startDate": {
                            "year": 2000,
                            "month": 4,
                            "day": 22
                        },
                        "seasonYear": 2000,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Hitomi no Naka no Ansatsusha",
                            "english": "Case Closed: Captured In Her Eyes",
                            "romaji": "Meitantei Conan: Hitomi no Naka no Ansatsusha"
                        },
                        "anilistID": 1363,
                        "slug": "meitantei-conan-hitomi-no-naka-no-ansatsusha"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1365-FLEpMCC8Ghhk.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1365-FLEpMCC8Ghhk.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1365-o7WI3BxstabV.jpg",
                        "meanScore": 80,
                        "episodes": 1,
                        "description": "Conan was invited to a party with many other guests. They were there to test a new virtual game system, when a murder mystery occured. Now Conan must go into the game system to figure out who the murderer is with the help of the famous book character Sherlock Holmes. The lives of 49 kids testing the game are in his hands.",
                        "startDate": {
                            "year": 2002,
                            "month": 4,
                            "day": 20
                        },
                        "seasonYear": 2002,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Baker Street no Bourei",
                            "english": "Case Closed: The Phantom of Baker Street",
                            "romaji": "Meitantei Conan: Baker Street no Bourei"
                        },
                        "anilistID": 1365,
                        "slug": "meitantei-conan-baker-street-no-bourei"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1366-76LNoYLEqaxv.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1366-76LNoYLEqaxv.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 75,
                        "episodes": 1,
                        "description": "Mouri Kogoro is called to a special case in the ancient capital of Kyoto. There, Conan meets Heiji and they team up once again to solve the case, recover the stolen Healing Buddha statue, and even discover the identity of Heiji's first love.",
                        "startDate": {
                            "year": 2003,
                            "month": 4,
                            "day": 19
                        },
                        "seasonYear": 2003,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Meikyuu no Crossroad",
                            "english": "Case Closed: Crossroad in the Ancient Capital",
                            "romaji": "Meitantei Conan: Meikyuu no Crossroad"
                        },
                        "anilistID": 1366,
                        "slug": "meitantei-conan-meikyuu-no-crossroad"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14735-RIyq7XzIIzcc.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx14735-RIyq7XzIIzcc.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 74,
                        "episodes": 1,
                        "trailer": "zL0pX3caP_A",
                        "description": "The movie is set on a state-of-the art Aegis vessel with the full cooperation of Japan's real-life Ministry of Defense and Maritime Self-Defense Force. The corpse of a Self-Defense Force member has been found &mdash; minus the left arm &mdash; and a spy has infiltrated the Aegis vessel. The heroine Ran is put in jeopardy, and Conan is forced to stand up against the dangerous Spy \"X.\"",
                        "startDate": {
                            "year": 2013,
                            "month": 4,
                            "day": 20
                        },
                        "seasonYear": 2013,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Sekkai no Private Eye",
                            "english": "Case Closed: Private Eye in the Distant Sea",
                            "romaji": "Meitantei Conan: Sekkai no Private Eye"
                        },
                        "anilistID": 14735,
                        "slug": "meitantei-conan-sekkai-no-private-eye"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/6115.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/6115.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6115-UOroY5JEir6l.jpg",
                        "meanScore": 75,
                        "episodes": 1,
                        "description": "Beloved criminal Lupin III has his sights set on a new score: the crown of the Vespanian royal family! His timing, however, couldn't be worse. The sudden death of the queen and prince of Vespania has thrown the country into disarray, and while that won't hurt the gentleman burglar's efforts, it comes with a small problem... and that problem's name is Conan Edogawa! Throw in a royal case of mistaken identity, along with a shadowy plot born from greed, and it's a stage appropriately set for a clash between the world's greatest thief and the world's greatest detective!",
                        "startDate": {
                            "year": 2009,
                            "month": 3,
                            "day": 27
                        },
                        "seasonYear": 2009,
                        "animeName": {
                            "userPreferred": "Lupin III vs Meitantei Conan",
                            "english": "Lupin the 3rd Vs Detective Conan",
                            "romaji": "Lupin III vs Meitantei Conan"
                        },
                        "anilistID": 6115,
                        "slug": "lupin-iii-vs-meitantei-conan"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4447-aztQrCRbw1OK.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4447-aztQrCRbw1OK.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 75,
                        "episodes": 1,
                        "description": "Serial murders involving all kinds have happened. All the victims are from a Music School led by a famous pianist. Conan and company have been invited to a opening concert of the Music Hall built by the pianist. The biggest attraction of this concert is the world famous violin called \"Stradivarius\" and a special appearance of a singer who has perfect pitch.",
                        "startDate": {
                            "year": 2008,
                            "month": 4,
                            "day": 19
                        },
                        "seasonYear": 2008,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Senritsu no Gakufu (Full Score)",
                            "english": "Case Closed: Full Score of Fear",
                            "romaji": "Meitantei Conan: Senritsu no Gakufu (Full Score)"
                        },
                        "anilistID": 4447,
                        "slug": "meitantei-conan-senritsu-no-gakufu-full-score"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98222-PT0Ob1qkGDUW.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98222-PT0Ob1qkGDUW.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98222-ZpgGg9E0KK8l.png",
                        "meanScore": 75,
                        "episodes": 1,
                        "trailer": "d44tuuPbAw8",
                        "description": "A bombing case at Nichiuri TV in autumn. The Satsuki Cup, which crowns the winner of Japan's Ogura Hyakunin Isshu based competitive karuta tournament, is currently being filmed inside the facility. The incident results in a big commotion and, while the building is burning to ashes, the only people left inside are Heiji and Kazuha. They get rescued just in time by Conan, who rushes to the scene. Both the identity and motive of the bomber are unknown.While confusion takes over due to the explosion, Conan meets a mysterious beautiful girl who claims she is \"Heiji's fiancée\". Her name is Momiji Ooka and she is the Kyoto High School karuta champion. As fate would have it, Kazuha is going to face Momiji in the Hyakunin Isshu competition, so she begins to train with the help of Heiji's mother, Shizuka, who is a skilled karuta player.At the same time, in a Japanese house in Arashiyama, Kyoto's outskirts, the reigning Satsuki Cup champion is murdered. Pictures of the crime scene reveal Momji's presence. Additionally, several karuta cards were spread around the victim.Conan and Heiji, along with the Osaka and Kyoto police departments, begin their investigation on the Satsuki Cup and the related murder case. As the inquiry goes on, they come across a secret connected with the Hyakunin Isshu.",
                        "startDate": {
                            "year": 2017,
                            "month": 4,
                            "day": 15
                        },
                        "seasonYear": 2017,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Kara Kurenai Love Letter",
                            "english": "Case Closed: Crimson Love Letter",
                            "romaji": "Meitantei Conan: Kara Kurenai Love Letter"
                        },
                        "anilistID": 98222,
                        "slug": "meitantei-conan-kara-kurenai-love-letter"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12117-wCtSIeqrMhTZ.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12117-wCtSIeqrMhTZ.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 74,
                        "episodes": 1,
                        "description": "After an interaction with J-League professional players, Conan and co watches the big match between Tokyo Spirits and Gamba Osaka, only to find out that a bomb has been planted in the stadium. It is now up to Conan once again to foil the culprit's plans and reveal his/her true identity.",
                        "startDate": {
                            "year": 2012,
                            "month": 4,
                            "day": 14
                        },
                        "seasonYear": 2012,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: 11 Nin-me no Striker",
                            "english": "Case Closed: The Eleventh Striker",
                            "romaji": "Meitantei Conan: 11 Nin-me no Striker"
                        },
                        "anilistID": 12117,
                        "slug": "meitantei-conan-11-nin-me-no-striker"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21470-huY2vyX3Ej2z.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21470-huY2vyX3Ej2z.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21470-rL2cM130DLfc.jpg",
                        "meanScore": 79,
                        "episodes": 1,
                        "trailer": "bXkzfhqEKa8",
                        "description": "On a dark night, the Japanese police is raided by a spy. Different countries' intelligence agencies—such as England's MI6, Germany's BDN, and America's CIA—as well as the FBI's secret files are going to be taken, but public safety officers lead by Tooru Amuro arrive just in time. The spy steals a car and escapes. The spy and Amuro are then locked in a dead heat on the highway, and just as it is about to cause an accident with multiple cars, the spy's car is hit by FBI agent Shuichi Akai's rifle bullet and falls off the roadway.The next day, Conan and his friends go to a newly-remodeled aquarium in Tokyo. Under the main attraction, a Ferris wheel, Conan finds an attractive woman alone and injured. Her left and right eyes are different colors.But the woman is in a state of amnesia where she doesn't even remember her own name, and the cellphone she's carrying is broken. Conan and his friends promise to help her regain her memory, so they stay with her.Throughout all this, Vermouth is watching behind the scenes. Afterwards, she pulls out a silencer and speaks into an attached intercom, \"It's as planned, Gin.\"",
                        "startDate": {
                            "year": 2016,
                            "month": 4,
                            "day": 16
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Junkoku no Nightmare",
                            "english": "Case Closed: The Darkest Nightmare",
                            "romaji": "Meitantei Conan: Junkoku no Nightmare"
                        },
                        "anilistID": 21470,
                        "slug": "meitantei-conan-junkoku-no-nightmare"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1367-cJLBjSfqBmRY.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1367-cJLBjSfqBmRY.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "Kaito Kid strikes again in this new annual installment of the Detective Conan movies. An actress asked for Mouri Kogoro to protect a precious jewel of hers which Kid has vowed to steal. On the day of the theft, Kaito Kid dressed up as Shinichi and matched wits with Conan, and fled in the end. To thank them, the actress invited Kogoro and family and friends to Sapporo, but a bigger scheme, and a great emergency is just about to unravel high above the clouds in the plane that they're taking...",
                        "startDate": {
                            "year": 2004,
                            "month": 4,
                            "day": 17
                        },
                        "seasonYear": 2004,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Ginyoku no Magician",
                            "english": "Case Closed: Magician of the Silver Sky",
                            "romaji": "Meitantei Conan: Ginyoku no Magician"
                        },
                        "anilistID": 1367,
                        "slug": "meitantei-conan-ginyoku-no-magician"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1506-EHhN6loLBaau.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1506-EHhN6loLBaau.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "After receiving a strange invitation, Kogorou Mouri pays a visit to the Miracle Land theme park along with his daughter Ran, Conan Edogawa, and the Detective Boys. Once there, Kogorou and Conan are tasked with finishing an unsolved case by a mysterious stranger. Realizing that the invitations were actually an elaborate trap, the two have just 12 hours to solve the case or face grave danger.With the help of familiar faces like Heiji Hattori, Kaitou Kid, and even Saguru Hakuba, the group of detectives must unravel the web of clues surrounding the case in order to find the culprit and bring them to justice before it's too late.",
                        "startDate": {
                            "year": 2006,
                            "month": 4,
                            "day": 15
                        },
                        "seasonYear": 2006,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Tantei-tachi no Requiem",
                            "english": "Case Closed: Requiem of the Detectives",
                            "romaji": "Meitantei Conan: Tantei-tachi no Requiem"
                        },
                        "anilistID": 1506,
                        "slug": "meitantei-conan-tantei-tachi-no-requiem"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21646-N6cVkCIx9KsP.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21646-N6cVkCIx9KsP.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n21646-5OEYC0jBD6n2.jpg",
                        "meanScore": 75,
                        "episodes": 1,
                        "description": "Conan tries to track down Kaito Kid, who supposedly steals a replica of one of Van Gogh's Sunflowers paintings during an auction. ",
                        "startDate": {
                            "year": 2015,
                            "month": 4,
                            "day": 18
                        },
                        "seasonYear": 2015,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Gouka no Himawari",
                            "english": "Case Closed: Sunflowers of Inferno",
                            "romaji": "Meitantei Conan: Gouka no Himawari"
                        },
                        "anilistID": 21646,
                        "slug": "meitantei-conan-gouka-no-himawari"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b780-hxqAnXzg8DX4.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b780-hxqAnXzg8DX4.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n780-QYieD3ITbwFE.jpg",
                        "meanScore": 76,
                        "episodes": 1,
                        "description": "Ran has a nightmare about her mother dying, but starts to remember what really happened involving herself, her mother, and her father from 10 years ago. Meanwhile, people are being injured by a certain culprit. Conan soon realizes that these people all have some kind of relation to Mouri, and that they all had a number in their name corresponding to a playing card and were being targeted in order, from the king down to the ace. The police soon decide that a murderous card dealer who just got out of jail and wanted revenge on Mouri is behind it. However, as injuries become murders and it is a race to predict who the next victims will be, Conan soon finds that the truth is something completely different, while learning about the incident from 10 years ago in the process.",
                        "startDate": {
                            "year": 1998,
                            "month": 4,
                            "day": 18
                        },
                        "seasonYear": 1998,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Juuyonbanme no Target",
                            "english": "Case Closed: The Fourteenth Target",
                            "romaji": "Meitantei Conan: Juuyonbanme no Target"
                        },
                        "anilistID": 780,
                        "slug": "meitantei-conan-juuyonbanme-no-target"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100653-keuPmvVKDkhx.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100653-keuPmvVKDkhx.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n100653-zxyI1eDBJjJz.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "trailer": "i1EDdyF109c",
                        "description": "There is a sudden explosion at Tokyo Summit's giant Edge of Ocean facility. The shadow of Touru Amuro, who works for the National Police Agency Security Bureau as Zero, appears at the site. In addition, the \"triple-face\" character known as Rei Furuya, a detective, and Kogorou Mouri's apprentice, is also known as Bourbon, a Black Organization member. Kogorou is arrested as a suspect in the case of the explosion. Conan conducts an investigation to prove Kogorou's innocence, but Amuro gets in his way.",
                        "startDate": {
                            "year": 2018,
                            "month": 4,
                            "day": 14
                        },
                        "seasonYear": 2018,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Zero no Shikkounin",
                            "english": "Case Closed: Zero the Enforcer",
                            "romaji": "Meitantei Conan: Zero no Shikkounin"
                        },
                        "anilistID": 100653,
                        "slug": "meitantei-conan-zero-no-shikkounin"
                    },
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/10703.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/10703.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 70,
                        "episodes": 1,
                        "description": "A Secret Order from London is the eleventh OVA of the anime and manga franchise Detective Conan. The plot revolves about Ai Haibara spending her time with Ayumi while Conan and company travel to London, only to be beset by a group of sinister-looking persons.",
                        "startDate": {
                            "year": 2011,
                            "month": 5,
                            "day": 30
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: London kara no Maru Hi Shirei",
                            "english": "Case Closed: A Secret Order from London",
                            "romaji": "Meitantei Conan: London kara no Maru Hi Shirei"
                        },
                        "anilistID": 10703,
                        "slug": "meitantei-conan-london-kara-no-maru-hi-shirei"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106206-OPpExaXYKUAD.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx106206-OPpExaXYKUAD.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/106206-w7kU9ojcV3ls.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "trailer": "2X-JSRWnH1Y",
                        "description": "The world's greatest blue sapphire, the \"blue lapis fist\", said to have sunk in a pirate ship in the late 19th century, on the coasts of Singapore. A local millionaire plots to retrieve it, and when it's exhibited in an exhibition at the Singaporean Marina Sands hotel, a murder takes place. A bloody Kaitou Kid announcement card is found in the crime scene.",
                        "startDate": {
                            "year": 2019,
                            "month": 4,
                            "day": 12
                        },
                        "seasonYear": 2019,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Konjou no Fist",
                            "english": "Case Closed: The Fist of Blue Sapphire",
                            "romaji": "Meitantei Conan: Konjou no Fist"
                        },
                        "anilistID": 106206,
                        "slug": "meitantei-conan-konjou-no-fist"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158997-9HkllZFhiV5K.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158997-9HkllZFhiV5K.png"
                        },
                        "bannerImage": null,
                        "meanScore": 74,
                        "episodes": 1,
                        "trailer": "-WIKbdURi4c",
                        "description": "The movie will focus on Ai Haibara's past and will reconstruct the Mystery Train arc from the television anime, which shows Haibara and Conan meeting for the first time. The movie will also include scenes from the Kurogane no Submarine (Black Iron Submarine) film.",
                        "startDate": {
                            "year": 2023,
                            "month": 1,
                            "day": 6
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Haibara Ai Monogatari - Kurogane no Mystery Train",
                            "english": null,
                            "romaji": "Meitantei Conan: Haibara Ai Monogatari - Kurogane no Mystery Train"
                        },
                        "anilistID": 158997,
                        "slug": "meitantei-conan-haibara-ai-monogatari-kurogane-no-mystery-train"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113653-HY0suLnhIlA6.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx113653-HY0suLnhIlA6.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113653-fBVZxVTxxNHv.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "trailer": "dwod6qZTVbQ",
                        "description": "Japan is celebrating the upcoming World Sports Games (WSG), the world's largest sporting event, in Tokyo. The \"Japanese Bullet,\" the world's first vacuum-tube super-conducting linear train, is built with the latest Japanese technology and timed to coincide with the WSG opening ceremonies. The train is set to run from Shin Nagoya Station to Tokyo Station at up to 1,000 kilometers per hour (about 600 miles per hour). However, a bizarre incident occurs during a party held by famous major sponsors, leading to a string of kidnappings of top executives. Conan deduces a possible link to serial abductions in the WSG 15 years earlier in Boston.",
                        "startDate": {
                            "year": 2021,
                            "month": 4,
                            "day": 16
                        },
                        "seasonYear": 2021,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Hiiro no Dangan",
                            "english": "Case Closed: The Scarlet Bullet",
                            "romaji": "Meitantei Conan: Hiiro no Dangan"
                        },
                        "anilistID": 113653,
                        "slug": "meitantei-conan-hiiro-no-dangan"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV_SHORT",
                        "relationType": "SPIN_OFF",
                        "relationName": "Spin Off",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140005-BMmsl94sUPsw.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140005-BMmsl94sUPsw.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140005-CjhEaR3bgg39.jpg",
                        "meanScore": 69,
                        "episodes": 12,
                        "trailer": "QSFAnqVGm4o",
                        "description": "A town of crime, Beika Town. A mysterious Dark Shadow descends onto this town that ranks among the highest crime rates in the world. His (or her?) goal is to kill a “certain man.” That key player in Detective Conan is now a protagonist! Clad in tights and possessing a pure intellect, this person’s name is… the (pseudonymous) Culprit Hanzawa!",
                        "startDate": {
                            "year": 2022,
                            "month": 10,
                            "day": 4
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Hannin no Hanzawa-san",
                            "english": "Detective Conan: The Culprit Hanzawa",
                            "romaji": "Meitantei Conan: Hannin no Hanzawa-san"
                        },
                        "anilistID": 140005,
                        "slug": "meitantei-conan-hannin-no-hanzawa-san"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9785.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9785.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 73,
                        "episodes": 1,
                        "description": "3D IMAX movie, shown only at the Suntory Museum in Osaka.",
                        "startDate": {
                            "year": 2005,
                            "month": 7,
                            "day": 29
                        },
                        "seasonYear": 2005,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Conan vs. Kid - SHARK & JEWEL",
                            "english": null,
                            "romaji": "Meitantei Conan: Conan vs. Kid - SHARK & JEWEL"
                        },
                        "anilistID": 9785,
                        "slug": "meitantei-conan-conan-vs-kid-shark-and-jewel"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18429-vJz2zjLRRve8.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx18429-vJz2zjLRRve8.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/18429-BnsaK1zzlto4.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "description": "They say it takes a thief to catch a thief, but the world's greatest detective begs to differ! In this sequel to the crossover special, Lupin III once again faces off against the tiny genius Conan Edogawa, and the stakes have never been higher. An unknown enemy has kidnapped Fujiko, and the only way for Lupin to save her is by stealing a certain jewel. Meanwhile, Fujiko isn't the only one in danger, as a popular Italian singer receives a note that promises to take his life. It's up to Conan Edogawa to get to the bottom of the mystery, but these two tales have more in common than it might seem! Who is really playing who, and who will come out ahead of the game?",
                        "startDate": {
                            "year": 2013,
                            "month": 12,
                            "day": 7
                        },
                        "seasonYear": 2013,
                        "animeName": {
                            "userPreferred": "Lupin III vs. Meitantei Conan: THE MOVIE",
                            "english": "Lupin the 3rd Vs Detective Conan: The Movie",
                            "romaji": "Lupin III vs. Meitantei Conan: THE MOVIE"
                        },
                        "anilistID": 18429,
                        "slug": "lupin-iii-vs-meitantei-conan-the-movie"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166060-aIhHMEwqLNi4.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166060-aIhHMEwqLNi4.png"
                        },
                        "bannerImage": null,
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "Rei Furuya, Jinpei Matsuda, Hiromitsu Morofushi, Wataru Date and Kenji Hagiwara are now graduated from the police academy.Note:- This episode is the fifth and final episode of the Keisatsu Gakkou-hen - Wild Police Story arc.- It was supposed to be episode 1077 in its parent story Meitantei Conan",
                        "startDate": {
                            "year": 2023,
                            "month": 3,
                            "day": 11
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Keisatsu Gakkou-hen - Wild Police Story CASE. Furuya Rei",
                            "english": null,
                            "romaji": "Meitantei Conan: Keisatsu Gakkou-hen - Wild Police Story CASE. Furuya Rei"
                        },
                        "anilistID": 166060,
                        "slug": "meitantei-conan-keisatsu-gakkou-hen-wild-police-story-case-furuya-rei"
                    },
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "SPIN_OFF",
                        "relationName": "Spin Off",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140002-zbEoTkcXifOa.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140002-zbEoTkcXifOa.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/140002-h4EoBJ2PfeKw.jpg",
                        "meanScore": 69,
                        "episodes": 6,
                        "trailer": "JofxV0ehN2s",
                        "description": "A detective who's also a public security agent and a member of a shadowy organization juggles his triple identities in this \"Detective Conan\" spinoff.",
                        "startDate": {
                            "year": 2022,
                            "month": 4,
                            "day": 5
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Zero no Tea Time",
                            "english": "Case Closed: Zero's Tea Time",
                            "romaji": "Meitantei Conan: Zero no Tea Time"
                        },
                        "anilistID": 140002,
                        "slug": "meitantei-conan-zero-no-tea-time"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx8310-FfunDT6K2wZb.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx8310-FfunDT6K2wZb.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/8310-FTCEpjqUw8Ao.jpg",
                        "meanScore": 75,
                        "episodes": 12,
                        "description": "Kaito Kuroba, a normal teenage student whose father is often absent for vaguely defined reasons. When his father dies under mysterious circumstances, he is made aware of his father's secret identity; a famous international criminal known as International Criminal 1412: the Phantom Thief, and that he was murdered by a mysterious organization for refusing to aid them in retrieving the \"Pandora Gem\"; a mystical stone said to shed a \"tear\" during the passing of a particular comet, the consumption of which bestows immortality. He vows to prevent the organization from gaining immortality, and assumes his father's identity as he begins his quest for the gem. His only clues as to the gem's location are that it glows red under the full moon and that it is a doublet: a gem hidden within a larger gem. Thus, it would have to be a relatively large one with a bizarre history, and always stored in a place that never receives moonlight. He thus researches and steals famous priceless gems with odd histories from incredibly well-defended areas, and always returns them after the very next full moon. ",
                        "startDate": {
                            "year": 2010,
                            "month": 4,
                            "day": 17
                        },
                        "seasonYear": 2010,
                        "animeName": {
                            "userPreferred": "Magic Kaito",
                            "english": null,
                            "romaji": "Magic Kaito"
                        },
                        "anilistID": 8310,
                        "slug": "magic-kaito"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141208-On0qHKxo6P5t.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141208-On0qHKxo6P5t.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141208-06bpzVXG9vqO.jpg",
                        "meanScore": 76,
                        "episodes": 12,
                        "trailer": "9mEaa65_iMI",
                        "description": "The sweet story of Nasa and Tsukasa continues! After surviving some awkward first nights together, dealing with doubters, and recovering from their apartment fire, it's clear the fate of these lovers was written in the stars. Now, they're ready to settle back into domestic bliss and finally plan their wedding ceremony! But with plenty of new friends on the way, what will their big day look like?!",
                        "startDate": {
                            "year": 2023,
                            "month": 4,
                            "day": 8
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Tonikaku Kawaii Season 2",
                            "english": "TONIKAWA: Over The Moon For You Season 2",
                            "romaji": "Tonikaku Kawaii Season 2"
                        },
                        "anilistID": 141208,
                        "slug": "tonikaku-kawaii-season-2"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5578-kcxJ0LgO7zql.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5578-kcxJ0LgO7zql.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 70,
                        "episodes": 7,
                        "description": "GOSHO collection reveals the origin of the smash hit &ldquo;Detective Conan.&rdquo;&ldquo;GO&rdquo; into his world, and we will &ldquo;SHO&rdquo; you SEVEN romantic and exciting stories created by GOSHO AOYAMA.WAIT FOR ME (30 min.)A genius inventor, who is still a high school student, has a girlfriend two years older than him. One day, he invents a time machine and attempts to go two years back into the past, to become the same age as her.However, it is she who ultimately uses the machine to travel through time!TEN PLANETS IN THE NIGHT SKY (10 min.)Meet Baby Conan!Yukiko Kudo is looking for her missing husband. The only clue to find him again is to decipher a mysterious message left for her. Their baby, Shinichi Kudo, one who later becomes the famous high school Detective Conan, will at this age already be offering some important hints for her.THE WANDERING RED BUTTERFLY (7 min.)A handsome detective, Yusaku Kitakata, receives phone calls from a mysterious woman day after day, with a new case each day. He of course solves them one by one. But the biggest mystery is who is this mysterious woman?PLAY IT AGAIN (30 min.)Thanks to the mystical powers of a Cherry Blossom Tree, a 70-year-old man with a secret sword technique goes back into the past and becomes the same age as his granddaughter. While enjoying his youth for the second time around, he notices that a player is after his granddaughter.SANTA CLAUS IN SUMMER (30 min.)Keisuke, a young man of 17, accidentally activates the Earth Destruction System. The destiny of the Earth now depends on whether he can stop the system within 24 hours. However, suddenly amnesia strikes him and he forgets the pin number to stop the system. The time is running out...DETECTIVE GEORGE&rsquo;S SPECIAL CASE (30 min.)A girl is fleeing from men in black. She runs into a detective agency and discovers that the detective there is a super-miniature-size, cool dude. He risks his life trying to solve a case for this client. Will they come through in the end?MAKING OF DETECTIVE CONAN (7 min.)Do you know how to make animation?Everybody wants to see the workings of an animation studio.Based on the concept of Detective Conan, the three sub-characters visit the animation studio of Detective Conan. This episode will surely catch the hearts of Detective Conan fans! [The actual animation is also involved in this special.]",
                        "startDate": {
                            "year": 1999,
                            "month": 3,
                            "day": 17
                        },
                        "seasonYear": 1999,
                        "animeName": {
                            "userPreferred": "Aoyama Goushou Tanpenshuu",
                            "english": null,
                            "romaji": "Aoyama Goushou Tanpenshuu"
                        },
                        "anilistID": 5578,
                        "slug": "aoyama-goushou-tanpenshuu"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169754-G2nYpV0r8FUa.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169754-G2nYpV0r8FUa.png"
                        },
                        "bannerImage": null,
                        "meanScore": null,
                        "episodes": null,
                        "trailer": "4C6ua9gmShE",
                        "startDate": {
                            "year": 2024,
                            "month": null,
                            "day": null
                        },
                        "seasonYear": null,
                        "animeName": {
                            "userPreferred": "Meitantei Conan (2024)",
                            "english": null,
                            "romaji": "Meitantei Conan (2024)"
                        },
                        "anilistID": 169754,
                        "slug": "meitantei-conan-2024"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142219-Nu9bWFhIKn0q.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142219-Nu9bWFhIKn0q.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142219-EQ9aQxmFT7oL.jpg",
                        "meanScore": 80,
                        "episodes": 1,
                        "trailer": "sJwIGd22Cew",
                        "description": "The movie takes place in Shibuya on Halloween. At the Shibuya Hikarie building, a certain wedding ceremony is taking place, where Miwako Sato is in a wedding dress. Suddenly, an intruder bursts in, and Wataru Takagi is injured from protecting Miwako. At the same time, the serial bombing criminal from the incident three years ago that killed Jinpei Matsuda, whom Miwako was in love with, escapes. Is this really a coincidence?",
                        "startDate": {
                            "year": 2022,
                            "month": 4,
                            "day": 15
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Halloween no Hanayome",
                            "english": null,
                            "romaji": "Meitantei Conan: Halloween no Hanayome"
                        },
                        "anilistID": 142219,
                        "slug": "meitantei-conan-halloween-no-hanayome"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20790-yR5kJrai3zPg.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20790-yR5kJrai3zPg.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20790-sOvsLAJ6x53e.jpg",
                        "meanScore": 76,
                        "episodes": 24,
                        "description": "Kaito Kuroba, a normal teenage student whose father is often absent. When his father dies under mysterious circumstances, he is made aware of his father's secret identity; a famous international criminal known as International Criminal 1412: the Phantom Thief, and that he was murdered by a mysterious organization for refusing to aid them in retrieving the \"Pandora Gem\"; a mystical stone said to shed a \"tear\" during the passing of a particular comet (often called the 'Volley Comet'), the consumption of which bestows immortality. He vows to prevent the organization from gaining immortality, and assumes his father's identity as he begins his quest for the gem. His only clues as to the gem's location are that it glows red under the full moon and that it is a doublet: a gem hidden within a larger gem. Thus, it would have to be a relatively large one with a bizarre history, and always stored in a place that never receives moonlight. He thus researches and steals famous priceless gems with odd histories from incredibly well-defended areas, and always returns them after the very next full moon.",
                        "startDate": {
                            "year": 2014,
                            "month": 10,
                            "day": 4
                        },
                        "seasonYear": 2014,
                        "animeName": {
                            "userPreferred": "Magic Kaito 1412",
                            "english": "Magic Kaito 1412",
                            "romaji": "Magic Kaito 1412"
                        },
                        "anilistID": 20790,
                        "slug": "magic-kaito-1412"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1293-T6Ev080pKoum.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx1293-T6Ev080pKoum.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1293-XmAkK3xVNmQh.jpg",
                        "meanScore": 73,
                        "episodes": 195,
                        "trailer": "q7JAFmRs2es",
                        "description": "Urusei Yatsura concerns the tempestuous relationship between two focal characters: Ataru Moroboshi who is possibly the most unfaithful, unlucky and lecherous idiot to have ever been born, and there's Lum, a tigerskin-bikini clad alien package of sex appeal, jealousy and electricity who's fallen for him. The series chronicles the misadventures of these two stubborn teenagers along with a veritable entourage of weird characters. Among these characters is the richest boy on the planet, a superhuman schoolgirl, a fire-breathing baby, a powerful priestess/school nurse, a cute and psychotic alien vixen with a split personality, a gender-bending martial artist, an alien biker chick, an ice queen of Neptune, a deranged monk, a giant ghost cat and hundreds of other lunatic personalities; aliens, humans and inhumans alike interract in endless hysteria in a town named Tomobiki.",
                        "startDate": {
                            "year": 1981,
                            "month": 10,
                            "day": 14
                        },
                        "seasonYear": 1981,
                        "animeName": {
                            "userPreferred": "Urusei Yatsura",
                            "english": "Urusei Yatsura",
                            "romaji": "Urusei Yatsura"
                        },
                        "anilistID": 1293,
                        "slug": "urusei-yatsura"
                    },
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1368.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1368.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 69,
                        "episodes": 1,
                        "description": "One day Mori Kogoro's private dective agency receives a blackmail call. It turns out that the caller has dialed the wrong number. Conan is able to identify the voice on the phone, it's similar to that of his old friend Heiji, who's also a high school detective but in Osaka. They join once again forces to solve the case and find the jewel which was stolen. But they are not the only ones who are after the jewel. The notorious master thief Kaitou Kid has taken an interest in this piece, which is worth 100,000 Yen, as well and now it's up to Heiji and Conan to be the first to find the culprit and acquire the jewel. ",
                        "startDate": {
                            "year": 2006,
                            "month": 3,
                            "day": 15
                        },
                        "seasonYear": 2006,
                        "animeName": {
                            "userPreferred": "Meitantei Conan: Kieta Daiya wo Oe! Conan & Heiji vs Kid!",
                            "english": null,
                            "romaji": "Meitantei Conan: Kieta Daiya wo Oe! Conan & Heiji vs Kid!"
                        },
                        "anilistID": 1368,
                        "slug": "meitantei-conan-kieta-daiya-wo-oe-conan-and-heiji-vs-kid"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98604-rf0L8MoJ8FJB.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98604-rf0L8MoJ8FJB.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98604-5B3gvbsNmbf6.jpg",
                        "meanScore": 81,
                        "episodes": 1,
                        "description": "A special commemorating the 20th anniversary of the anime series. The special is a retelling of how Kudo Shinichi was transformed into a child.",
                        "startDate": {
                            "year": 2016,
                            "month": 12,
                            "day": 9
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "Meitantei Conan Episode \"ONE\" Chiisakunatta Meitantei",
                            "english": "Case Closed: Episode One - The Great Detective Turned Small",
                            "romaji": "Meitantei Conan Episode \"ONE\" Chiisakunatta Meitantei"
                        },
                        "anilistID": 98604,
                        "slug": "meitantei-conan-episode-one-chiisakunatta-meitantei"
                    }
                ],
                "startDate": {
                    "year": 1996,
                    "month": 1,
                    "day": 8
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704545189,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/235-MTmiz0uB0fMd.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/hSKD1ysKYJ36t6iUSf8dN3C76Se.jpg"
                },
                "animeLength": null,
                "scheduledEpisode": 1109,
                "airingTime": 1704544200000
            },
            {
                "slug": "ragna-crimson",
                "title": {
                    "english": "Ragna Crimson",
                    "native": "ラグナクリムゾン",
                    "romaji": "Ragna Crimson",
                    "userPreferred": "Ragna Crimson"
                },
                "type": "TV",
                "anilistID": "146493",
                "malID": "51297",
                "synonyms": [
                    "ตำนานนักล่ามังกร"
                ],
                "description": "Dragons reign terror over the earth, sea and sky. If sworn dragon hunters like Ragna are to have any hope of dealing death to these seemingly invincible, fire-breathing beasts, they must find a way to level the odds. Ragna teams up with a mysterious man named Crimson who has likewise sworn to stand against the dragons menacing the world. But although Crimson’s motivations may be mysterious, his goal and Ragna’s perfectly align, and together they’ll fight to vanquish the dragons once and for all.<br>\n<br>\n(Source: Sentai Filmworks)<br>\n<br>\n<i>Note: The first episode aired with a runtime of ~47 minutes.</i>",
                "episodeNum": 12,
                "animeLength": 24,
                "genres": [
                    "Action",
                    "Adventure",
                    "Fantasy",
                    "Mystery"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "72",
                "nextAiringEpisode": {
                    "airingAt": 1704556800,
                    "episode": 13
                },
                "duration": 24,
                "trailerVideo": "RdshFiWLQNs",
                "relatedAnime": [],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 1
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1702746843,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/oGmNWwV3wgp1DZXTOLSAYZZgh3X.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/oGmNWwV3wgp1DZXTOLSAYZZgh3X.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/oGmNWwV3wgp1DZXTOLSAYZZgh3X.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/146493-jw3ymus5NH5K.jpg",
                "scheduledEpisode": 12,
                "airingTime": 1704556800000
            },
            {
                "slug": "buta-no-liver-wa-kanetsu-shiro",
                "title": {
                    "english": "Butareba -The Story of a Man Turned into a Pig-",
                    "native": "豚のレバーは加熱しろ",
                    "romaji": "Buta no Liver wa Kanetsu Shiro",
                    "userPreferred": "Buta no Liver wa Kanetsu Shiro"
                },
                "type": "TV",
                "anilistID": "142599",
                "malID": "50583",
                "synonyms": [
                    "Heat the pig liver: the story of a man turned into a pig.",
                    "ถ้ามีเธออยู่ เป็นหมูก็ไม่เลวนะครับ"
                ],
                "description": "An unappealing otaku awakens in the body of a pig after he passes out while eating raw pig liver. Pig finds himself in the company of Jess, an innocent girl who can read people's minds, and she accepts him despite his boorish thoughts... although she does plan to eat him. When Jess is in danger of succumbing to a dark destiny, can Pig save her using only his quick wits, wisdom, and refined sense of smell?",
                "episodeNum": 11,
                "animeLength": 12,
                "genres": [
                    "Comedy",
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "55",
                "nextAiringEpisode": {
                    "airingAt": 1704564000,
                    "episode": 12
                },
                "duration": 24,
                "relatedAnime": [],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 8
                },
                "endDate": {
                    "year": 2023,
                    "month": 12,
                    "day": 24
                },
                "updatedAt": 1703355395,
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/qEyV0cNIjjRuu8kTmjWu5N9cU5r.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/qEyV0cNIjjRuu8kTmjWu5N9cU5r.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/qEyV0cNIjjRuu8kTmjWu5N9cU5r.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142599-0GW1mX8cAx6L.jpg",
                "trailerVideo": "qUDQJfax8mM",
                "scheduledEpisode": 11,
                "airingTime": 1704564000000
            },
            {
                "slug": "kusuriya-no-hitorigoto",
                "title": {
                    "english": "The Apothecary Diaries",
                    "native": "薬屋のひとりごと",
                    "romaji": "Kusuriya no Hitorigoto",
                    "userPreferred": "Kusuriya no Hitorigoto"
                },
                "type": "TV",
                "anilistID": "161645",
                "malID": "54492",
                "synonyms": [
                    "Drugstore Soliloquy",
                    "Les Carnets de l'Apothicaire",
                    "Zapiski zielarki",
                    "Diários de uma Apotecária",
                    "Il monologo della Speziale",
                    "Los diarios de la boticaria",
                    "สืบคดีปริศนา หมอยาตำรับโคมแดง",
                    null
                ],
                "description": "Maomao lived a peaceful life with her apothecary father. Until one day, she’s sold as a lowly servant to the emperor’s palace. But she wasn’t meant for a compliant life among royalty. So when imperial heirs fall ill, she decides to step in and find a cure! This catches the eye of Jinshi, a handsome palace official who promotes her. Now, she’s making a name for herself solving medical mysteries!\n<br><br>\n(Source: Crunchyroll)",
                "episodeNum": 13,
                "animeLength": 24,
                "genres": [
                    "Drama",
                    "Mystery"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "86",
                "nextAiringEpisode": {
                    "airingAt": 1705161900,
                    "episode": 14
                },
                "duration": 23,
                "trailerVideo": "oyHqh8ue4zw",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170508-72GLTka7NHeF.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx170508-72GLTka7NHeF.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 66,
                        "episodes": null,
                        "trailer": "iVAWwYzAlVs",
                        "description": "Chibi shorts to Kusuriya no Hitorigoto released on the TOHO animation YouTube channel and the Nippon television channel.",
                        "startDate": {
                            "year": 2023,
                            "month": 10,
                            "day": 23
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Maomao no Hitorigoto",
                            "english": null,
                            "romaji": "Maomao no Hitorigoto"
                        },
                        "anilistID": 170508,
                        "slug": "maomao-no-hitorigoto"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 22
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704568051,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/161645-oqzTZYIvviWI.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/qGObcxuXKcKhP43BqTeIC7KgRcM.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/qGObcxuXKcKhP43BqTeIC7KgRcM.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/qGObcxuXKcKhP43BqTeIC7KgRcM.jpg"
                },
                "bannerart": {
                    "large": "https://www.themoviedb.org/t/p/original/ASAtJGXmOE99YoAH0ZkF8rBNrF.jpg",
                    "medium": "https://www.themoviedb.org/t/p/original/gWXOBY0qF5LON44GtpyaDPFsCF0.jpg"
                },
                "logoart": "https://static.crunchyroll.com/fms/logo/85/png/09b6b5a5-9207-43fe-8e8a-99fed3afae1e.webp",
                "style": [
                    "0px",
                    "-1vw"
                ],
                "trailerStart": 15,
                "scheduledEpisode": 13,
                "airingTime": 1704566700000
            }
        ],
        "today": true
    },
    {
        "title": "Sunday",
        "animes": [
            {
                "title": {
                    "english": "Soaring Sky! Pretty Cure",
                    "native": "ひろがるスカイ！プリキュア",
                    "romaji": "Hirogaru Sky! Precure",
                    "userPreferred": "Hirogaru Sky! Precure"
                },
                "type": "TV",
                "anilistID": "157883",
                "malID": "53716",
                "synonyms": [
                    "Hirogaru Sky! Pretty Cure",
                    "Soaring Sky! Precure",
                    null
                ],
                "description": "A major incident has occurred in the peaceful Sky Land!? The young Princess Eru has been kidnapped by the monsters of Underg Empire! A brave young girl, Sora, follows the princess through a mysterious hole. \"TV\"? \"Cars\"? Are those some kind of magic tools!?!?\n<br><br>\nBut there's no time to be surprised! She has to get the princess back to the castle...! Flying between two worlds! The adventure with the Pretty Cure begins now!\n<br><br>\nIt's hero time!",
                "episodeNum": 46,
                "genres": [
                    "Action",
                    "Fantasy",
                    "Mahou Shoujo"
                ],
                "status": "RELEASING",
                "season": "WINTER",
                "averageScore": "73",
                "nextAiringEpisode": {
                    "airingAt": 1704591000,
                    "episode": 47
                },
                "duration": 24,
                "trailerVideo": "j0DUgBhsg_A",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9893-mMM3J10RicGB.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9893-mMM3J10RicGB.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9893-FNmPQ8lKRDSI.jpg",
                        "meanScore": 70,
                        "episodes": 48,
                        "description": "Kanon Town is filled with music. Hibiki Houjou and Kanade Minamino have grown up in this town and have known each other since they were children. However, they no longer get along.One day the fairy Hummy from the land of music, Major Land, appears before them. The evil king Mephisto of Minor Land is planning to turn the legendary Melody of Happiness into the Melody of Misfortune. To prevent this from happening, Hibiki and Kanade transform themselves into Pretty Cure.Kanade and Hibiki have to learn to work together to collect the scattered notes of the Melody of Happiness in order to recreate the score!",
                        "startDate": {
                            "year": 2011,
                            "month": 2,
                            "day": 6
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "Suite Precure♪",
                            "english": null,
                            "romaji": "Suite Precure♪"
                        },
                        "anilistID": 9893,
                        "slug": "suite-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5684-Xi5YtqeV7Hm8.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5684-Xi5YtqeV7Hm8.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5684-zcd4LAzM7fiZ.jpg",
                        "meanScore": 73,
                        "episodes": 50,
                        "description": "Love Momozono is a 14-year-old student at Yotsuba Junior Highschool that tends to care more for others than for herself. One day she visits a show of the famous dance unit \"Trinity\" and decides to become a dancer, too. On the same event, subordinates of the Labyrinth Kingdom show up who want to collect the unhappiness of the audience. Love gets the power to change into Cure Peach and fights them. Soon after, she is joined by her good friends Miki, who is Cure Berry, and Inori, who becomes Cure Pine.",
                        "startDate": {
                            "year": 2009,
                            "month": 2,
                            "day": 1
                        },
                        "seasonYear": 2009,
                        "animeName": {
                            "userPreferred": "Fresh Precure!",
                            "english": null,
                            "romaji": "Fresh Precure!"
                        },
                        "anilistID": 5684,
                        "slug": "fresh-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21001-0IOllqfFvBYc.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21001-0IOllqfFvBYc.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21001-kzIWkehB7wQ2.jpg",
                        "meanScore": 76,
                        "episodes": 50,
                        "description": "The story is set in Noble Academy, the first boarding junior high school in the Precure franchise. The anime depicts the excitement of dorm life, coming of age while living with friends, and the anticipation and anxiety of a new life among roommates, separated from family.The heroine Haruka Haruno is a first-year student at Noble Academy. Even now, she has cherished a dream of becoming a princess, like those from her precious picture books. Long ago, she made a promise with a boy named Kanata to never give up the dream.One day, the \"Princess Precures\" were revived by the Princess Perfume (and Kanata's dress-shaped \"Dress-Up Key\" that unlocks the Princess Perfume's power), and Haruka transforms into the flower princess Cure Flora. When unleashing their special signature moves, the Princess Precures' outfits turn into magnificent princess-like Mode Elegant long dresses.Haruka also meets two new companions. Minami Kaidou is a second-year student and the student council president nicknamed the \"school princess.\" She also happens to transform into the sea princess Cure Mermaid.Haruka's classmate and popular model Kirara Amanogawa is also the star princess Cure Twinkle. The three princesses join forces in battle to protect people's dreams from the dreadful dark witch Dispia's plot to turn them into despair.Pafu and her older brother Aroma are fairies who came from Hope Kingdom in search of the Princess Precures.Haruka's childhood acquaintance Kanata happens to be Prince Hope Grand Kanata from the Hope Kingdom.",
                        "startDate": {
                            "year": 2015,
                            "month": 2,
                            "day": 1
                        },
                        "seasonYear": 2015,
                        "animeName": {
                            "userPreferred": "Go! Princess Precure",
                            "english": null,
                            "romaji": "Go! Princess Precure"
                        },
                        "anilistID": 21001,
                        "slug": "go-princess-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12191-jb0kcikumHvA.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12191-jb0kcikumHvA.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12191-LgdNcoafKDN2.png",
                        "meanScore": 67,
                        "episodes": 48,
                        "description": "Once upon a time, there was a kingdom of fairy tales called \"M&auml;rchenland\", where many fairy tale characters live together in joy. Suddenly, the evil emperor Pierrot made an invasion on M&auml;rchenland, sealing its Queen in the process. To revive the Queen, the symbol of happiness called Cure Decor, \"the Queen's scattered power of light of happiness\", is required. To collect the Cure Decor, a fairy named Candy searches for the Pretty Cures on Earth. There, Candy meets a girl, who decides to collect the Cure Decor. Now, will the world earn a \"happy ending\"?",
                        "startDate": {
                            "year": 2012,
                            "month": 2,
                            "day": 5
                        },
                        "seasonYear": 2012,
                        "animeName": {
                            "userPreferred": "Smile Precure!",
                            "english": "Glitter Force",
                            "romaji": "Smile Precure!"
                        },
                        "anilistID": 12191,
                        "slug": "smile-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16419-iohyOs2lTdL4.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16419-iohyOs2lTdL4.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16419-NNZOw7hmuSsc.jpg",
                        "meanScore": 66,
                        "episodes": 49,
                        "description": "Aida Mana is a girl who is always eager to do things for the sake of others.\rOne day, when she was visiting the Clover Tower during her school's orientation program, an enemy who called themselves \"Selfish\" appeared suddenly, and tried to manipulate her inner heart! To fight this enemy, she borrowed power from a magical fairy Sharuru to transform into Pretty Cure!\rTo protect the peace of the world, other legendary Pretty Cure soon joined her in battle! A mysterious baby also appears, making each day a \"Heartthrob\" experience! The 4 Cures, always holding \"love\" in their hearts, are battling for the world's fate!\r",
                        "startDate": {
                            "year": 2013,
                            "month": 2,
                            "day": 3
                        },
                        "seasonYear": 2013,
                        "animeName": {
                            "userPreferred": "Dokidoki! Precure",
                            "english": "Glitter Force Doki Doki",
                            "romaji": "Dokidoki! Precure"
                        },
                        "anilistID": 16419,
                        "slug": "dokidoki-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126905-8l6vC6uItfJ2.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126905-8l6vC6uItfJ2.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/126905-R4IsdMuUTlyr.jpg",
                        "meanScore": 73,
                        "episodes": 46,
                        "trailer": "EYmyfzHjaHI",
                        "description": "Manatsu Natsuumi is a first-year junior high school student born and raised on a small island. On the day she moves from the island, She meets Laura, a mermaid girl who has come to the earth alone in search of the legendary warrior, PreCure. Laura's hometown, Grand Ocean, is attacked by a witch who lives in the dark depths of the ocean, and all of their motivational power is taken away. It is said that if the motivational power of humans is also taken away, the world will be in deep trouble. Laura is captured by the witch's servant, and Manatsu transforms into Cure Summer to save her.",
                        "startDate": {
                            "year": 2021,
                            "month": 2,
                            "day": 28
                        },
                        "seasonYear": 2021,
                        "animeName": {
                            "userPreferred": "Tropical-Rouge! Precure",
                            "english": "Tropical-Rouge! Pretty Cure",
                            "romaji": "Tropical-Rouge! Precure"
                        },
                        "anilistID": 126905,
                        "slug": "tropical-rouge-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100661-zrozfnaAgN1s.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100661-zrozfnaAgN1s.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100661-U0cd3dR28mK9.jpg",
                        "meanScore": 77,
                        "episodes": 49,
                        "trailer": "My1u0ka_xck",
                        "description": "Nono Hana is an 8th grade student who wants to be a stylish and mature big sister like figure. She always puts on a lovely smile and loves to search for exciting things. One day, Hana meets a baby named Hug-tan and her guardian fairy named Harry who had fallen from the sky. At that exact moment, an evil organization called Dark Tomorrow suddenly appeared! They're trying to forcefully take Hug-tan's Mirai Crystal! In order to protect Hug-tan, Hana wishes to do something to help her, and her wish is granted, as she gains a Mirai Crystal and transforms into Cure Yell. The world is overflowed with Tomorrow Powerer, which is the power to create a brilliant tomorrow, which is crystallized into the Mirai Crystals. If it's stolen, everyone's future will not exist. To protect Hug-tan and everyone's future, Cure Yell will do her best!",
                        "startDate": {
                            "year": 2018,
                            "month": 2,
                            "day": 4
                        },
                        "seasonYear": 2018,
                        "animeName": {
                            "userPreferred": "HUGtto! Precure",
                            "english": null,
                            "romaji": "HUGtto! Precure"
                        },
                        "anilistID": 100661,
                        "slug": "hugtto-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1932-3B7jaJSN7XXd.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1932-3B7jaJSN7XXd.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1932-ptmkySyU0JNM.jpg",
                        "meanScore": 70,
                        "episodes": 49,
                        "description": "Yumehara Nozomi, a regular student, finds a magical book called the Dream Collet in the library and meets Coco and Nuts, two creatures from the Palmier Kingdom. They plead with Nozomi to restore their world, which has been destroyed by an organization called the Nightmares, by completing the Dream Collet and finding the 55 Pinkies to make any wish come true. Meanwhile, the Nightmares are moving into the real world. Once Nozomi agrees to help, Coco and Nuts transform her into the magical girl Cure Dream and turn four fellow students into her Pretty Cure team.",
                        "startDate": {
                            "year": 2007,
                            "month": 2,
                            "day": 4
                        },
                        "seasonYear": 2007,
                        "animeName": {
                            "userPreferred": "Yes! Precure 5",
                            "english": "Yes! Pretty Cure 5",
                            "romaji": "Yes! Precure 5"
                        },
                        "anilistID": 1932,
                        "slug": "yes-precure-5"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx603-Ivgyjo8ZMuzT.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx603-Ivgyjo8ZMuzT.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n603-FPlAxroSkLw5.jpg",
                        "meanScore": 69,
                        "episodes": 49,
                        "description": "Nagisa Misumi and Honoka Yukishiro couldn't be more different. Nagisa is sporty and Honoka bookish, and while they attend the same school, they have very little in common - until one day, a shower of shooting stars brings two very unlikely visitors into their lives: Mipple and Mepple, refugees from the Garden of Light, which has been conquered by Darkness. Endowed with new and startling powers, Nagisa and Honoka become Cure Black and Cure White, magical defenders of the light - together, they are Pretty Cure. ",
                        "startDate": {
                            "year": 2004,
                            "month": 2,
                            "day": 1
                        },
                        "seasonYear": 2004,
                        "animeName": {
                            "userPreferred": "Futari wa Precure",
                            "english": "Pretty Cure",
                            "romaji": "Futari wa Precure"
                        },
                        "anilistID": 603,
                        "slug": "futari-wa-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98059-rT4gGYYPpJxH.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98059-rT4gGYYPpJxH.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98059-rhfvEwucJvPq.jpg",
                        "meanScore": 70,
                        "episodes": 49,
                        "trailer": "rNbhD48fyVM",
                        "description": "Ichika Usami is a second-year middle school student who loves sweets, but struggles to bake. One day, she encounters a fairy named Pekorin, who is able to detect \"Kirakiraru\", an element residing in sweets. However, an evil fairy starts to steal the Kirakiraru for themselves, leaving the sweets black and lifeless. Determined to protect the sweets, Ichika gains the power of the Legendary Patisserie and transforms into the Pretty Cure, Cure Whip, to protect the Kirakiraru.",
                        "startDate": {
                            "year": 2017,
                            "month": 2,
                            "day": 5
                        },
                        "seasonYear": 2017,
                        "animeName": {
                            "userPreferred": "Kirakira☆Precure a la Mode",
                            "english": "KIRA KIRA☆PRETTY CURE A LA MODE",
                            "romaji": "Kirakira☆Precure a la Mode"
                        },
                        "anilistID": 98059,
                        "slug": "kirakiraprecure-a-la-mode"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112748-TkfRFNCgQFQX.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112748-TkfRFNCgQFQX.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112748-dT6g0pgTY5u1.jpg",
                        "meanScore": 65,
                        "episodes": 45,
                        "trailer": "XGJTaiHFgqs",
                        "description": "Deep inside the Earth lies a magical place called the \"Healing Garden\", which cared for the planet for centuries and is been protected by animal-like fairies named \"Healing Animals\". However, the garden was attacked by the antagonistic group called Bjögens whose goal is to infect the garden and slowly poison the planet. In order to save the Healing Garden, Latte escaped to the human world alongside three \"medical trainee\" Healing Animals, on a mission to find three people who can partner with them. After they meet Nodoka, Chiyu and Hinata, Latte pleaded them to fight for the Healing Garden as they became Pretty Cures in order to fight against the threat of the Bjögens and protect all life on Earth and the Healing Garden. ",
                        "startDate": {
                            "year": 2020,
                            "month": 2,
                            "day": 2
                        },
                        "seasonYear": 2020,
                        "animeName": {
                            "userPreferred": "Healin' Good♥Precure",
                            "english": "Healin' Good Pretty Cure",
                            "romaji": "Healin' Good♥Precure"
                        },
                        "anilistID": 112748,
                        "slug": "healin-goodloveprecure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7645-YRvajw8WUsfJ.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7645-YRvajw8WUsfJ.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/7645-VzqxaDZ6D3vz.jpg",
                        "meanScore": 78,
                        "episodes": 49,
                        "description": "2nd year middle school student Tsubomi Hanasaki has just moved with her family to the town of Kibougahana to live with her grandma. She is shy and introverted, but is determined to start off her new school life at Myoudou Academy as confidently as possible.Lately she has been having the same mysterious dream again and again, of Cure Moonlight's defeat at the Great Heart Tree. She wonders what it all means. Then suddenly, two fairies from the dream appear to her, and before she knows it, she is transformed into the legendary Pretty Cure, Cure Blossom!Later joined by her high energy classmate and new friend Erika Kurumi as Cure Marine, the two girls vow work hard to protect everyone's Heart Flowers from the evil gang, The Desert Messengers. ",
                        "startDate": {
                            "year": 2010,
                            "month": 2,
                            "day": 7
                        },
                        "seasonYear": 2010,
                        "animeName": {
                            "userPreferred": "Heartcatch Precure!",
                            "english": "Heartcatch Precure!",
                            "romaji": "Heartcatch Precure!"
                        },
                        "anilistID": 7645,
                        "slug": "heartcatch-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105857-iziLS4e4rTaP.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105857-iziLS4e4rTaP.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105857-D1S4lCsrKFMT.jpg",
                        "meanScore": 74,
                        "episodes": 49,
                        "trailer": "VRHMhMU1S6Q",
                        "description": "The story begins when the protagonist Hikaru meets aliens Lala, Prunce, and Fuwa while watching the night sky. She learns of the \"Star Palace,\" where the 12 Star Princesses of the constellations kept the balance of the universe until they were attacked. Lala is searching for the legendary Precure warriors to help find the 12 scattered \"Princess Star Color Pens\" and revive the princesses. When Fuwa is captured by an enemy, Hikaru wishes to save Fuwa, and a Star Color Pendent and a Star Color Pen appear to allow her to transform into Cure Star. From then on she works to collect the pens and raise Fuwa, who is the key to reviving the princesses.",
                        "startDate": {
                            "year": 2019,
                            "month": 2,
                            "day": 3
                        },
                        "seasonYear": 2019,
                        "animeName": {
                            "userPreferred": "Star☆Twinkle Precure",
                            "english": null,
                            "romaji": "Star☆Twinkle Precure"
                        },
                        "anilistID": 105857,
                        "slug": "startwinkle-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20577-j4Up9EWBQFgE.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20577-j4Up9EWBQFgE.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20577.jpg",
                        "meanScore": 65,
                        "episodes": 49,
                        "description": "All around the world, Pretty Cures have been fighting against the invasion of the enemy known as Saiark!Shirayuki Hime, the princess of Blue Sky Kingdom is in fact a Pretty Cure, but unable to defeat the enemy alone, she is fallen behind the others and is in a quite a terrible situation.Then, on her quest to find a partner, she meets Aino Megumi (Cure Lovely) and they begin to battle the enemy together.Having learned that assembling all PreCards, you can get any one wish fulfilled, the team up with the fairy Ribbon to protect the world peace, transform, dress up and form change as they fight!With the dress-up theme beloved by girls, a completely different Pretty Cure story begins!",
                        "startDate": {
                            "year": 2014,
                            "month": 2,
                            "day": 2
                        },
                        "seasonYear": 2014,
                        "animeName": {
                            "userPreferred": "HappinessCharge Precure!",
                            "english": "Happiness Charge Pretty Cure!",
                            "romaji": "HappinessCharge Precure!"
                        },
                        "anilistID": 20577,
                        "slug": "happinesscharge-precure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1534-mclt4D2RhkpH.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b1534-mclt4D2RhkpH.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1534-WVonxP2Zn2Ie.jpg",
                        "meanScore": 70,
                        "episodes": 49,
                        "description": "During the summer festival five years ago, two girls met at a mysterious tree and saw two glowing spheres. Now, these two girls--Saki Hyuuga, ace pitcher on the school softball team; and Mai Mishou, who prefers sketching over stargazing--are chosen by the spirits of flowers (Flappy) and birds (Choppy) to restore the Seven Fountains and save their worlds from Dark Autumn. Together, they are the NEW Pretty Cure.",
                        "startDate": {
                            "year": 2006,
                            "month": 2,
                            "day": 5
                        },
                        "seasonYear": 2006,
                        "animeName": {
                            "userPreferred": "Futari wa Precure: Splash☆Star",
                            "english": null,
                            "romaji": "Futari wa Precure: Splash☆Star"
                        },
                        "anilistID": 1534,
                        "slug": "futari-wa-precure-splashstar"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142080-nCk0catlOELJ.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142080-nCk0catlOELJ.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142080-GMSelgwWq15N.jpg",
                        "meanScore": 65,
                        "episodes": 45,
                        "trailer": "hez_UB6ay5Y",
                        "description": "The mysterious, delicious world of CooKingdom, which rules over all the cuisine in this world. CooKingdom has closely guarded the Recipe-Bon, in which it's written how to prepare any dish. But, oh no! One day, it gets stolen by the Bundoru Gang! The Bundoru Gang plans to monopolize everything for themselves, and their next target is the Cuisine Fairy Recipeppi... The Energy Fairies have come to Oishi-Na Town in the human world in search of the Recipe-Bon. With their help, an unexpected turn of events leads to three ordinary girls transforming into Pretty Cures!",
                        "startDate": {
                            "year": 2022,
                            "month": 2,
                            "day": 6
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "Delicious Party♡Precure",
                            "english": "Delicious Party Pretty Cure",
                            "romaji": "Delicious Party♡Precure"
                        },
                        "anilistID": 142080,
                        "slug": "delicious-partyprecure"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21506-iZFCJgEd3cmk.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21506-iZFCJgEd3cmk.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21506-Dp3CCH9rP9ue.jpg",
                        "meanScore": 70,
                        "episodes": 50,
                        "description": "Mirai Asahina, a 13-year-old girl who's going into her second year of middle school, witnesses a mysterious object fall in to the park. Excitedly, she brings her stuffed bear Mofurun with her to see what it was. When she gets there she sees a girl named Riko flying on a broom. Mirai has a lot of questions, and Riko explains that she's searching for something. The two of them are wearing similar pendants. Then Batti, an ally of the dark magic user Dokurokushi, appears before them and demands the \"Link Stone Emerald.\" Batti creates a monster called a \"Yokubaru\" and drives them into a corner. Mirai, Riko, and Mofurun join hands and speak the magic words \"Cure-Up Rapapa,\" their pendants glow, and they become the legendary Precure.",
                        "startDate": {
                            "year": 2016,
                            "month": 2,
                            "day": 7
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "Mahoutsukai Precure!",
                            "english": null,
                            "romaji": "Mahoutsukai Precure!"
                        },
                        "anilistID": 21506,
                        "slug": "mahoutsukai-precure"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 2,
                    "day": 5
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1703414898,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/157883-u3gE5LKKXwb3.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/x01vDQ8VAmlEZYWJy6xCsU6035l.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/x01vDQ8VAmlEZYWJy6xCsU6035l.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/x01vDQ8VAmlEZYWJy6xCsU6035l.jpg"
                },
                "slug": "hirogaru-sky-precure",
                "animeLength": 48,
                "scheduledEpisode": 47,
                "airingTime": 1704591000000
            },
            {
                "title": {
                    "english": "ONE PIECE",
                    "native": "ONE PIECE",
                    "romaji": "ONE PIECE",
                    "userPreferred": "ONE PIECE"
                },
                "type": "TV",
                "anilistID": "21",
                "malID": "21",
                "synonyms": [
                    "ワンピース",
                    "海贼王",
                    "וואן פיס",
                    "ون بيس",
                    "วันพีซ",
                    "Vua Hải Tặc",
                    "All'arrembaggio!",
                    "Tutti all'arrembaggio!",
                    "Ντρέηκ, το Κυνήγι του Θησαυρού",
                    null
                ],
                "description": "Gold Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the location of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece (which promises an unlimited amount of riches and fame), and quite possibly the most coveted of titles for the person who found it, the title of the Pirate King.<br><br>\nEnter Monkey D. Luffy, a 17-year-old boy that defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate who ransacks villages for fun, Luffy’s reason for being a pirate is one of pure wonder; the thought of an exciting adventure and meeting new and intriguing people, along with finding One Piece, are his reasons of becoming a pirate. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach One Piece.<br><br>\n<b>*This includes following special episodes:</b><br>\n- Chopperman to the Rescue! Protect the TV Station by the Shore! (Episode 336)<br>\n- The Strongest Tag-Team! Luffy and Toriko's Hard Struggle! (Episode 492)<br>\n- Team Formation! Save Chopper (Episode 542)<br>\n- History's Strongest Collaboration vs. Glutton of the Sea (Episode 590)<br>\n- 20th Anniversary! Special Romance Dawn (Episode 907)",
                "episodeNum": 1088,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "88",
                "nextAiringEpisode": {
                    "airingAt": 1704592800,
                    "episode": 1089
                },
                "trailerVideo": "AhcE7VWVblc",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx466-bVP54I7dCB2F.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx466-bVP54I7dCB2F.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/466-uS8J4XwJ35Ws.png",
                        "meanScore": 64,
                        "episodes": 1,
                        "description": "While Luffy and his crew of Zoro and Nami are starving on their small boat, they are attacked by a large monster. Nami is taken away, while Luffy and Zoro wash up on shore. There they meet a young girl, Medaka, and learn of the sad history of the island. The evil Pirate Ganzack has taken away all the men in the village and enslaved them, including Medaka's father. Now Luffy, Zoro, and Medaka must infiltrate Ganzack's base in order to rescue the villagers and Nami. ",
                        "startDate": {
                            "year": 1998,
                            "month": 7,
                            "day": 26
                        },
                        "seasonYear": 1998,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Taose! Kaizoku Ganzack",
                            "english": "One Piece: Defeat the Pirate Ganzack!",
                            "romaji": "ONE PIECE: Taose! Kaizoku Ganzack"
                        },
                        "anilistID": 466,
                        "slug": "one-piece-taose-kaizoku-ganzack"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1238-Rf2wqBrCwgvO.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1238-Rf2wqBrCwgvO.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1238-HdBlNr5vwNau.jpg",
                        "meanScore": 69,
                        "episodes": 1,
                        "description": "For many years, Ex-Marine Lieutenant Randolph and his troupe have put on a play aboard his ship. Having lost his family to pirates, Randolph wishes to put on plays that will give courage to those who have also lost their loved ones to pirates. Unfortunately, Randolph must retire soon, and he is now giving his last performance. Luffy and his crew come to see the play, and somehow manage to take part in it themselves. But from Randolph's past comes a vengeful subordinate with a diabolical plan who has finally become commander in order to capture Randolph. Luffy and his nakama now must prove to the people that not all pirates are scum, and protect Randolph's final farewell performance from the bitter commander. (aired after Episode 174)",
                        "startDate": {
                            "year": 2003,
                            "month": 12,
                            "day": 14
                        },
                        "seasonYear": 2003,
                        "animeName": {
                            "userPreferred": "ONE PIECE TV Special 3: Mamore! Saigo no Oobutai",
                            "english": "One Piece Special: Protect! The Last Great Performance",
                            "romaji": "ONE PIECE TV Special 3: Mamore! Saigo no Oobutai"
                        },
                        "anilistID": 1238,
                        "slug": "one-piece-tv-special-3-mamore-saigo-no-oobutai"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/15323.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/15323.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/15323-zrax5OGlGepE.png",
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "A retelling of the Arlong Park arc, with new animation.",
                        "startDate": {
                            "year": 2012,
                            "month": 8,
                            "day": 25
                        },
                        "seasonYear": 2012,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna",
                            "english": null,
                            "romaji": "ONE PIECE: Episode of Nami - Koukaishi no Namida to Nakama no Kizuna"
                        },
                        "anilistID": 15323,
                        "slug": "one-piece-episode-of-nami-koukaishi-no-namida-to-nakama-no-kizuna"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1094-H3YFJ1TR0ZZi.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1094-H3YFJ1TR0ZZi.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1094-IAIqiFbLBsig.jpg",
                        "meanScore": 68,
                        "episodes": 1,
                        "description": "The Straw Hats encounter a city in the middle of a whirlpool, called the Ocean's Navel, that is being destroyed by giant monsters. These monsters supposedly protect a treasure capable of granting wishes, but in the process of defeating these guardians, the crew ends up releasing another evil.  (aired after Episode 53)",
                        "startDate": {
                            "year": 2000,
                            "month": 12,
                            "day": 20
                        },
                        "seasonYear": 2000,
                        "animeName": {
                            "userPreferred": "ONE PIECE TV Special: Umi no Heso no Daibouken-hen",
                            "english": "One Piece: Umi no Heso no Daibouken-hen",
                            "romaji": "ONE PIECE TV Special: Umi no Heso no Daibouken-hen"
                        },
                        "anilistID": 1094,
                        "slug": "one-piece-tv-special-umi-no-heso-no-daibouken-hen"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b16239-XzoVjd7JK8xJ.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b16239-XzoVjd7JK8xJ.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16239-pov53U1T1dRm.jpg",
                        "meanScore": 72,
                        "episodes": 1,
                        "description": "The story of the Hand Island no Bouken special is set a little before the events of One Piece Film Z and depicts a major \"Hand Island\" incident during the New World storyline. The story is set at \"Cannon Town\" where a parent and a child work as craftspeople. The incident revolves around them and a commodore of a marine base. The special will also have a flashback scene to the story in the first chapter of the manga, but with new animation.  ",
                        "startDate": {
                            "year": 2012,
                            "month": 12,
                            "day": 15
                        },
                        "seasonYear": 2012,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Luffy - Hand Island no Bouken",
                            "english": "One Piece: Episode of Luffy - Hand Island Adventure",
                            "romaji": "ONE PIECE: Episode of Luffy - Hand Island no Bouken"
                        },
                        "anilistID": 16239,
                        "slug": "one-piece-episode-of-luffy-hand-island-no-bouken"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21485-KR1sv4rYSe6V.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21485-KR1sv4rYSe6V.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21485-lPFbmxGrFsBX.jpg",
                        "meanScore": 69,
                        "episodes": 1,
                        "description": "The Davy Back Fight Arc competitors journey to New World with new crew members Dojaku, Kansho and tactical genius Komei for a meeting that will take place on a foggy island that makes devil fruit users unable to use to their abilities.",
                        "startDate": {
                            "year": 2015,
                            "month": 12,
                            "day": 19
                        },
                        "seasonYear": 2015,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Adventure of Nebulandia",
                            "english": "One Piece: Adventure of Nebulandia",
                            "romaji": "ONE PIECE: Adventure of Nebulandia"
                        },
                        "anilistID": 21485,
                        "slug": "one-piece-adventure-of-nebulandia"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19123-leET1CrSJknT.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx19123-leET1CrSJknT.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/19123-QyRShJCfnIWD.jpg",
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "The story arcs aboard the Straw Hat Crew's first ship Going Merry (Merry Go in some adaptations) are recreated with brand-new animation, from Luffy and Usopp's fight and Robin's disappearance to the crew's final farewell to the ship. Going Merry is treated as another member of the Straw Hats as Luffy, Zoro, Nami, and the rest of the crew set sail for the legendary treasure, the One Piece.",
                        "startDate": {
                            "year": 2013,
                            "month": 8,
                            "day": 24
                        },
                        "seasonYear": 2013,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Merry - Mou Hitori no Nakama no Monogatari",
                            "english": "One Piece: Episode of Merry - The Tale of One More Friend",
                            "romaji": "ONE PIECE: Episode of Merry - Mou Hitori no Nakama no Monogatari"
                        },
                        "anilistID": 19123,
                        "slug": "one-piece-episode-of-merry-mou-hitori-no-nakama-no-monogatari"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1237.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/1237.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n1237-hHWuRsuVsVpr.jpg",
                        "meanScore": 68,
                        "episodes": 1,
                        "description": "The story opens on Pirate Zap's ship, where two of his crew, Bonnie and Max, are tired and want to escape, but unfortunately they have no money. Three children were being held captive on the ship overhear them. The eldest, Amanda, who's father was a pro treasure hunter, knows the whereabouts of a great treasure, and offers them a deal. If they help them make a clean escape, they could take all the treasure they wanted. They agree, and the five of them barely escape and make it onto a small island where they meet Luffy and his crew. Unfortunately they were pursued and Luffy and Amanda are captured and brought back to their boss, the head of the Bayan Pirates, who is also after the treasure. Now Luffy and the others must battle the Bayan pirates and find the treasure that Amanda's father had left for his children. Amanda, who has always resented adventure and treasure because her father was constantly gone in search for it, finally understands his feelings. ",
                        "startDate": {
                            "year": 2003,
                            "month": 4,
                            "day": 6
                        },
                        "seasonYear": 2003,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!",
                            "english": "One Piece Special: Open Upon the Great Sea! A Father's Huge, HUGE Dream!",
                            "romaji": "ONE PIECE: Oounabara ni Hirake! Dekkai Dekkai Chichi no Yume!"
                        },
                        "anilistID": 1237,
                        "slug": "one-piece-oounabara-ni-hirake-dekkai-dekkai-chichi-no-yume"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20835-QVV6LpJlqe1A.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20835-QVV6LpJlqe1A.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20835-aR8CuXvtzqND.jpg",
                        "meanScore": 76,
                        "episodes": 1,
                        "description": "This new TV special tells the two years of Luffy's training with Silvers Rayleigh in Rusukaina Island after the Battle of Marineford, which has never been told in the manga or TV anime. It also features a new villain named Burndy World who is known as \"The Destroyer of the World\" and has the power of the MoaMoa Fruit (its ability is still unknown). Luffy has to protect Boa Hancock from the new enemy who escaped from the level 6 of Impel Down. He is newly designed by the original creator of the manga, Eiichiro Oda.\r\r",
                        "startDate": {
                            "year": 2014,
                            "month": 8,
                            "day": 30
                        },
                        "seasonYear": 2014,
                        "animeName": {
                            "userPreferred": "ONE PIECE \"3D2Y\": Ace no shi wo Koete! Luffy Nakama to no Chikai",
                            "english": "One Piece 3D2Y: Overcome Ace’s Death! Luffy’s Vow to his Friends",
                            "romaji": "ONE PIECE \"3D2Y\": Ace no shi wo Koete! Luffy Nakama to no Chikai"
                        },
                        "anilistID": 20835,
                        "slug": "one-piece-3d2y-ace-no-shi-wo-koete-luffy-nakama-to-no-chikai"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21831-qj5IKYiPOupF.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21831-qj5IKYiPOupF.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21831-Xl4r2uBaaKU4.png",
                        "meanScore": 73,
                        "episodes": 1,
                        "description": "The Straw Hat Pirates meet Olga, a girl who has escaped the island Alchemi. Alchemi was known for its metal production, and for the creation of the extremely valuable Pure Gold, but the island disappeared two hundred years ago. Olga is now being pursued by Marines, interested in Pure Gold. Gildo Tesoro, who controls the Navy HQ and black market, hears of Olga and hires treasure hunter Mad Treasure to track her down. The Straw Hats join forces with Olga in search of the Pure Gold, while she plots to takes advantage of them and use the treasure to become rich herself.",
                        "startDate": {
                            "year": 2016,
                            "month": 7,
                            "day": 16
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Heart of Gold",
                            "english": "One Piece: Heart of Gold",
                            "romaji": "ONE PIECE: Heart of Gold"
                        },
                        "anilistID": 21831,
                        "slug": "one-piece-heart-of-gold"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2020.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2020.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n2020-k3lHutyP9i06.jpg",
                        "meanScore": 68,
                        "episodes": 1,
                        "description": "Unlike the other specials, this story takes place in an alternate reality version of 19th century Japan, in \"The Grand Jipangu\", an alternate version of The Grand Line as opposed to simply being hour-long filler episodes.The story is divided into two halves: in the first, Buggy the Clown makes trouble in the town where Detective Luffy is stationed, and in the second a mysterious girl named Vivi appears. These stories feature cameos from several minor characters in the normal series. Surprisingly the \"Oyabun\" (Boss) specials did not stop there as five more specials were made following the first one, mostly as Christmas and New Years specials as well as fillers once in awhile.",
                        "startDate": {
                            "year": 2005,
                            "month": 12,
                            "day": 18
                        },
                        "seasonYear": 2005,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou",
                            "english": "One Piece Special: The Detective Memoirs of Chief Straw Hat Luffy",
                            "romaji": "ONE PIECE: Nenmatsu Tokubetsu Kikaku! Mugiwara no Luffy Oyabun Torimonochou"
                        },
                        "anilistID": 2020,
                        "slug": "one-piece-nenmatsu-tokubetsu-kikaku-mugiwara-no-luffy-oyabun-torimonochou"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2386-NQQkq1taHJ08.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2386-NQQkq1taHJ08.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2386-jtduFM8raO2z.jpg",
                        "meanScore": 66,
                        "episodes": 1,
                        "description": "Luffy and his crew take on the Villain All-Stars in a game of soccer in order to become the Dream Soccer King. The game comes down to a pk tie-breaker shoot-out with Coby as goalie and Helmeppo refereeing. ",
                        "startDate": {
                            "year": 2002,
                            "month": 3,
                            "day": 2
                        },
                        "seasonYear": 2002,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Yume no Soccer Ou!",
                            "english": null,
                            "romaji": "ONE PIECE: Yume no Soccer Ou!"
                        },
                        "anilistID": 2386,
                        "slug": "one-piece-yume-no-soccer-ou"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx461-DC9fMDl3AaK1.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx461-DC9fMDl3AaK1.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/461-0pvcIaXC0p70.jpg",
                        "meanScore": 64,
                        "episodes": 1,
                        "description": "The crew comes upon Crown Island where the animals can talk and they makes Chopper their new king. But there are human hunters there also looking for the legendary horns that will give the person who consumes it immense power. Luffy and friends must stop them from destroying this animal kingdom.",
                        "startDate": {
                            "year": 2002,
                            "month": 3,
                            "day": 2
                        },
                        "seasonYear": 2002,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Chinjuu-jima no Chopper Oukoku",
                            "english": "One Piece: Chopper’s Kingdom on the Island of Strange Animals",
                            "romaji": "ONE PIECE: Chinjuu-jima no Chopper Oukoku"
                        },
                        "anilistID": 461,
                        "slug": "one-piece-chinjuu-jima-no-chopper-oukoku"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2490-AL4WmnCJ5zvE.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2490-AL4WmnCJ5zvE.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2490-wlPYONPyTibY.jpg",
                        "meanScore": 65,
                        "episodes": 1,
                        "description": "Luffy and crew takes on Arlong's crew in baseball. Announced by Bon Clay and Buggy.",
                        "startDate": {
                            "year": 2004,
                            "month": 3,
                            "day": 6
                        },
                        "seasonYear": 2004,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Mezase! Kaizoku Yakyuu Ou",
                            "english": null,
                            "romaji": "ONE PIECE: Mezase! Kaizoku Yakyuu Ou"
                        },
                        "anilistID": 2490,
                        "slug": "one-piece-mezase-kaizoku-yakyuu-ou"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx12001-XX0NNNfaKZ3e.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx12001-XX0NNNfaKZ3e.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n12001-IljdXqN8CTU7.jpg",
                        "meanScore": 62,
                        "episodes": 1,
                        "description": "Toei Animation released a new 3D anime short at events starting December 1, 2011. The short run about 12 minutes long and played at stereoscopic 3D theaters at Aichi Prefecture's Lagunasia theme park, Nagasaki Prefecture's Huis Ten Bosch theme park, Kanagawa Prefecture's Yokohama Landmark Tower, and Hiroshima Prefecture's NTT CRED Hall.",
                        "startDate": {
                            "year": 2011,
                            "month": 12,
                            "day": 1
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "ONE PIECE 3D: Gekisou! Trap Coaster",
                            "english": null,
                            "romaji": "ONE PIECE 3D: Gekisou! Trap Coaster"
                        },
                        "anilistID": 12001,
                        "slug": "one-piece-3d-gekisou-trap-coaster"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx459-Ivw65mUXackh.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx459-Ivw65mUXackh.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/459-c4uuz0LPvzkS.jpg",
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "There once was a pirate known as the Great Gold Pirate Woonan, who obtained almost 1/3 of the world's gold. Over the course of a few years, the pirate's existence faded, and a legend grew that he disappeared with his gold to a remote island, an island pirates continue to search for. Aboard the Going Merry, Luffy and his crew, starved and reckless, are robbed of their treasure. In an attempt to get it back, they wreck the getaway ship, guided by a young boy named Tabio, who's a captured part of El Drago's pirate crew. El Drago's love for gold has driven him to look for Woonan's island, and thanks to Woonan's treasure map, he finds it. During this time, Luffy's crew have been split up, and despite their own circumstances, they must find a way to stop El Drago from obtaining Woonan's gold. ",
                        "startDate": {
                            "year": 2000,
                            "month": 3,
                            "day": 4
                        },
                        "seasonYear": 2000,
                        "animeName": {
                            "userPreferred": "ONE PIECE (Movie)",
                            "english": "ONE PIECE: The Movie",
                            "romaji": "ONE PIECE (Movie)"
                        },
                        "anilistID": 459,
                        "slug": "one-piece-movie"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx460-p9HObfGUhWn0.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx460-p9HObfGUhWn0.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/460-ruLnAj6wDrTL.png",
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "Informed by the Thief Brothers his ship has been stolen by the Trump Kyoudai (Trump Siblings) who have set up base on Clockwork Island. Monkey D. Luffy, Captain of the Going Merry and aspiring Pirate King works with his crew - Ussop, Zoro, Sanji and Nami to battle their way up Clockwork Island to reclaim their ship.",
                        "startDate": {
                            "year": 2001,
                            "month": 3,
                            "day": 3
                        },
                        "seasonYear": 2001,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Nejimaki-jima no Bouken",
                            "english": "One Piece: Clockwork Island Adventure",
                            "romaji": "ONE PIECE: Nejimaki-jima no Bouken"
                        },
                        "anilistID": 460,
                        "slug": "one-piece-nejimaki-jima-no-bouken"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx465-qSRr0MKYhS0I.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx465-qSRr0MKYhS0I.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/465-dYMZ6SHNeOkL.jpg",
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "The crew salvages a treasure chest from a sinking wreck, but inside turns out to be an old lady hiding. To get the Straw Hat Pirates to take her home, she promises them the treasure of a golden crown on her island, Mecha Island. When they arrive, their ship is first attacked by the lord of the island. But later he decides to use the pirates to help him solve the riddle of the Golden Crown.",
                        "startDate": {
                            "year": 2006,
                            "month": 3,
                            "day": 4
                        },
                        "seasonYear": 2006,
                        "animeName": {
                            "userPreferred": "ONE PIECE THE MOVIE: Karakuri-jou no Mecha Kyohei",
                            "english": "One Piece: Mega Mecha Soldier of Karakuri Castle",
                            "romaji": "ONE PIECE THE MOVIE: Karakuri-jou no Mecha Kyohei"
                        },
                        "anilistID": 465,
                        "slug": "one-piece-the-movie-karakuri-jou-no-mecha-kyohei"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx462-Ig8zfdsFWcql.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx462-Ig8zfdsFWcql.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/462-Z074owEvilUu.jpg",
                        "meanScore": 72,
                        "episodes": 1,
                        "description": "Luffy and crew arrive at the harbour of Anabaru. The local casino is holding a competition in which the winner will obtain a huge monetary reward if he reaches the finishing line first. Nami is elated and decides to participate in the competition. However, there is a conspiracy going behind the competition and the mastermind is an ex-military commander, Gasparde. His plan is to lure all the pirates to the military base and send them to their deaths. Luffy and gang have to overcome the numerous tests and tribulations along the way to complete this dead-end adventure. ",
                        "startDate": {
                            "year": 2003,
                            "month": 3,
                            "day": 1
                        },
                        "seasonYear": 2003,
                        "animeName": {
                            "userPreferred": "ONE PIECE THE MOVIE: Dead End no Bouken",
                            "english": "One Piece The Movie: The Dead End Adventure",
                            "romaji": "ONE PIECE THE MOVIE: Dead End no Bouken"
                        },
                        "anilistID": 462,
                        "slug": "one-piece-the-movie-dead-end-no-bouken"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4155-P5TDf6t6qFwX.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx4155-P5TDf6t6qFwX.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4155-2PkLjTHddz2s.jpg",
                        "meanScore": 78,
                        "episodes": 1,
                        "description": "The story begins somewhere between the Thriller Bark arc and the Sabaody Archipelago arc. The main villain's name is \"Golden Lion\" Shiki. 20 years ago he lost a battle against Monkey D. Garp and Sengoku and was imprisoned in Impel Down, but managed to escape. After that he starts to collect his crew and steals Nami to make her his navigator. Luffy tries to get to Shiki's hideout to free his friend. ",
                        "startDate": {
                            "year": 2009,
                            "month": 12,
                            "day": 12
                        },
                        "seasonYear": 2009,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: STRONG WORLD",
                            "english": "One Piece Film: Strong World",
                            "romaji": "ONE PIECE FILM: STRONG WORLD"
                        },
                        "anilistID": 4155,
                        "slug": "one-piece-film-strong-world"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx464-g4wcZPjbhY5j.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx464-g4wcZPjbhY5j.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/464-wmQoE1Ywxghs.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "description": "The Straw Hat crew obtain an advertisement for a recreational island on the Grand Line run by the Baron Omatsuri. Luffy decides to take this opportunity to kick back and relax. Unfortunately, when they arrive at the island, they are asked to compete in contests through unity for access to relaxation. However, there seems to be a mysterious air on the island, as the Straw Hat Pirates begin to fight amongst themselves, while Robin, Chopper, and Luffy individually search for the secret behind Baron Omatsuri's island.",
                        "startDate": {
                            "year": 2005,
                            "month": 3,
                            "day": 5
                        },
                        "seasonYear": 2005,
                        "animeName": {
                            "userPreferred": "ONE PIECE THE MOVIE: Omatsuri Danshaku to Himitsu no Shima",
                            "english": "One Piece: Baron Omatsuri and the Secret Island",
                            "romaji": "ONE PIECE THE MOVIE: Omatsuri Danshaku to Himitsu no Shima"
                        },
                        "anilistID": 464,
                        "slug": "one-piece-the-movie-omatsuri-danshaku-to-himitsu-no-shima"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101918-3uyCYHw1syki.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101918-3uyCYHw1syki.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101918-jUG4Mb1hCxVS.jpg",
                        "meanScore": 69,
                        "episodes": 1,
                        "description": "The special will be the first in the \"Episode of\" series to cover the Skypeia arc, and will feature a character who did not appear in the original Skypeia arc from the anime.",
                        "startDate": {
                            "year": 2018,
                            "month": 8,
                            "day": 25
                        },
                        "seasonYear": 2018,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Sorajima",
                            "english": "One Piece: Episode of Skypiea",
                            "romaji": "ONE PIECE: Episode of Sorajima"
                        },
                        "anilistID": 101918,
                        "slug": "one-piece-episode-of-sorajima"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99302-b40WIhc5dylo.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx99302-b40WIhc5dylo.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/99302-v3NwmsSnjj94.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "trailer": "XcWmgU7X-Is",
                        "description": "The special will be a completely new work, featuring reanimated scenes from the beginning of the series through when the crew enters the Grand Line.The special is commemorating the manga's 20th anniversary, and will also feature anime versions of the original manga's chapter cover stories as part of the special's ending credits. The staff haven't yet clarified which cover story or stories will be animated. Additionally, the anime will feature a special 20th anniversary commemoration version of the original opening theme song \"We Are!\".",
                        "startDate": {
                            "year": 2017,
                            "month": 8,
                            "day": 26
                        },
                        "seasonYear": 2017,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken",
                            "english": "One Piece: Episode of East Blue",
                            "romaji": "ONE PIECE: Episode of East Blue - Luffy to 4-nin no Nakama no Daibouken"
                        },
                        "anilistID": 99302,
                        "slug": "one-piece-episode-of-east-blue-luffy-to-4-nin-no-nakama-no-daibouken"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx463-QDnETPoHp9oD.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx463-QDnETPoHp9oD.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/463-zgU5XjUCR7Kv.jpg",
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "Luffy and crew go to an island searching for a legendary sword, said to be the most expensive in the world. Soon attacking marines and beautiful maidens split the crew. Zoro betrays the crew to help an old friend, Luffy and Usopp wander through a cave, and the rest help a village fight marines. When Zoro defeats Sanji he takes the sacred pearls that are the only defense against the evil sword that will plunge the world into darkness. ",
                        "startDate": {
                            "year": 2004,
                            "month": 3,
                            "day": 6
                        },
                        "seasonYear": 2004,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Norowareta Seiken",
                            "english": "One Piece: The Curse of the Sacred Sword",
                            "romaji": "ONE PIECE: Norowareta Seiken"
                        },
                        "anilistID": 463,
                        "slug": "one-piece-norowareta-seiken"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21230-rfoUZud1Jn0L.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21230-rfoUZud1Jn0L.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21230-5yju21iK6aMW.jpg",
                        "meanScore": 74,
                        "episodes": 1,
                        "description": "The anime will explore the childhood bond between Luffy, Ace and Sabo.",
                        "startDate": {
                            "year": 2015,
                            "month": 8,
                            "day": 22
                        },
                        "seasonYear": 2015,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Sabo - 3-Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi",
                            "english": "One Piece - Episode of Sabo: Bond of Three Brothers - A Miraculous Reunion and an Inherited Will",
                            "romaji": "ONE PIECE: Episode of Sabo - 3-Kyoudai no Kizuna Kiseki no Saikai to Uketsugareru Ishi"
                        },
                        "anilistID": 21230,
                        "slug": "one-piece-episode-of-sabo-3-kyoudai-no-kizuna-kiseki-no-saikai-to-uketsugareru-ishi"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2107-H8bRuRRbhCIJ.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2107-H8bRuRRbhCIJ.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2107-Je0JIEoxx1VF.jpg",
                        "meanScore": 70,
                        "episodes": 1,
                        "description": "A retelling of the Alabasta arc. Revolution is brewing in the desert country of Alabasta, but the Straw Hats and Princess Vivi know the truth: it's all a plot cooked up by Crocodile. ",
                        "startDate": {
                            "year": 2007,
                            "month": 3,
                            "day": 3
                        },
                        "seasonYear": 2007,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
                            "english": "One Piece: The Desert Princess and the Pirates, Adventures in Alabasta",
                            "romaji": "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi"
                        },
                        "anilistID": 2107,
                        "slug": "one-piece-episode-of-alabasta-sabaku-no-oujo-to-kaizoku-tachi"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105143-5uBDmhvMr6At.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105143-5uBDmhvMr6At.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105143-y8oSKa8PSsgK.jpg",
                        "meanScore": 81,
                        "episodes": 1,
                        "trailer": "-f3_oA0uwY0",
                        "description": "The 14th One Piece movie, which commemorates the anime's 20th anniversary, takes place during the Pirates Festival, an epic treasure hunt in which pirates from across the globe race to find an item that once belonged to Gol D. Roger himself!",
                        "startDate": {
                            "year": 2019,
                            "month": 8,
                            "day": 9
                        },
                        "seasonYear": 2019,
                        "animeName": {
                            "userPreferred": "ONE PIECE STAMPEDE",
                            "english": "One Piece: Stampede",
                            "romaji": "ONE PIECE STAMPEDE"
                        },
                        "anilistID": 105143,
                        "slug": "one-piece-stampede"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21335-XsXdE0AeOkkZ.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21335-XsXdE0AeOkkZ.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21335-ps20iVSGUXbD.jpg",
                        "meanScore": 77,
                        "episodes": 1,
                        "description": "In One Piece Film Gold, The Straw Hats are at it again in an all-new high-flying adventure! A gripping tale unfolds in the spectacular city of Gran Tesoro, where Luffy and his crew are drawn by dreams of hitting the jackpot. With so much luck, Luffy's winning streak can't possibly end. But behind the gilded curtains lies a powerful king whose deep pockets and deeper ambitions spell disaster for all.",
                        "startDate": {
                            "year": 2016,
                            "month": 7,
                            "day": 23
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: GOLD",
                            "english": "One Piece Film: Gold",
                            "romaji": "ONE PIECE FILM: GOLD"
                        },
                        "anilistID": 21335,
                        "slug": "one-piece-film-gold"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n106572-k1gqIsDcqGaV.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n106572-k1gqIsDcqGaV.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n106572-kY1X9fF5zJZz.jpg",
                        "meanScore": 69,
                        "episodes": 1,
                        "description": "Prologue to the movie, showing the Whiskey Peak arc. Released as a new cut for the movie's TV showing on \"Premium Saturday\".",
                        "startDate": {
                            "year": 2007,
                            "month": 3,
                            "day": 3
                        },
                        "seasonYear": 2007,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi",
                            "english": null,
                            "romaji": "ONE PIECE: Episode of Alabasta - Sabaku no Oujo to Kaizoku-tachi"
                        },
                        "anilistID": 106572,
                        "slug": "one-piece-episode-of-alabasta-sabaku-no-oujo-to-kaizoku-tachi-3005"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12859-uQFENDPzMWz6.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12859-uQFENDPzMWz6.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12859-XjlBW6o2YwUb.jpg",
                        "meanScore": 79,
                        "episodes": 1,
                        "description": "Said to be comparable to the Ancient Weapons of old, the Marines’ trump card, the “Dyna Stones,” have suddenly been stolen by a group of renegade vigilantes. The terrifyingly powerful man responsible, former Marine Admiral “Z”, now stands in the path of Luffy and his Straw Hat Pirates. Can the Straw Hats defeat “Z” and his crew, or will the New World meet its end at the hands of this mad man? ",
                        "startDate": {
                            "year": 2012,
                            "month": 12,
                            "day": 15
                        },
                        "seasonYear": 2012,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: Z",
                            "english": "One Piece Film: Z",
                            "romaji": "ONE PIECE FILM: Z"
                        },
                        "anilistID": 12859,
                        "slug": "one-piece-film-z"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SUMMARY",
                        "relationName": "Summary",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3848-SCnYGTn34Llt.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx3848-SCnYGTn34Llt.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/3848-LXsSQtSFu4e9.jpg",
                        "meanScore": 71,
                        "episodes": 1,
                        "description": "The movie is a retelling of the Drum Island arc with new music and animation. Vivi has been removed from the plot while both Nico Robin and Franky, who joined the crew after the Drum Island arc, have been added. The movie also has the Straw Hat's new ship, the Thousand Sunny. It has been stated that Oda will be creating a new character for this movie, Wapol's older brother, Mushul, who also appears to be a Devil Fruit user. ",
                        "startDate": {
                            "year": 2008,
                            "month": 3,
                            "day": 1
                        },
                        "seasonYear": 2008,
                        "animeName": {
                            "userPreferred": "ONE PIECE THE MOVIE: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura",
                            "english": "One Piece: Episode Of Chopper +: The Miracle Winter Cherry Blossom",
                            "romaji": "ONE PIECE THE MOVIE: Episode of Chopper Plus - Fuyu ni Saku, Kiseki no Sakura"
                        },
                        "anilistID": 3848,
                        "slug": "one-piece-the-movie-episode-of-chopper-plus-fuyu-ni-saku-kiseki-no-sakura"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9999.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/9999.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9999-T5jCX3o3cxeN.jpg",
                        "meanScore": 65,
                        "episodes": 1,
                        "description": "The entire Straw Hat crew began to search for Luffy's important straw hat after he woke up finding it missing.",
                        "startDate": {
                            "year": 2011,
                            "month": 3,
                            "day": 19
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "ONE PIECE 3D: Mugiwara Chase",
                            "english": "One Piece 3D: Mugiwara Chase",
                            "romaji": "ONE PIECE 3D: Mugiwara Chase"
                        },
                        "anilistID": 9999,
                        "slug": "one-piece-3d-mugiwara-chase"
                    },
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8740-oZajT3brPn7b.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b8740-oZajT3brPn7b.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/8740-MlFelJndh6Yr.png",
                        "meanScore": 76,
                        "episodes": 1,
                        "description": "Set over 20 years prior to the main One Piece story, this limited release OVA chronicles the confrontation between Gold Lion Shiki and Gold Roger as well as other events around the world around the time of the Pirate King's execution. ",
                        "startDate": {
                            "year": 2010,
                            "month": 4,
                            "day": 16
                        },
                        "seasonYear": 2010,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: STRONG WORLD - EPISODE:0",
                            "english": null,
                            "romaji": "ONE PIECE FILM: STRONG WORLD - EPISODE:0"
                        },
                        "anilistID": 8740,
                        "slug": "one-piece-film-strong-world-episode0"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21880-uxsZ880LXSdY.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21880-uxsZ880LXSdY.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21880-9gGzVvnzqiNA.jpg",
                        "meanScore": 70,
                        "episodes": 1,
                        "description": "A short prequel to One Piece Film: Gold featuring the nine Straw hat crew members on the ship, planning what to do when they arrive the Casino.",
                        "startDate": {
                            "year": 2016,
                            "month": 7,
                            "day": 2
                        },
                        "seasonYear": 2016,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: GOLD - episode 0 711ver.",
                            "english": null,
                            "romaji": "ONE PIECE FILM: GOLD - episode 0 711ver."
                        },
                        "anilistID": 21880,
                        "slug": "one-piece-film-gold-episode-0-711ver"
                    },
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/5252.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/5252.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5252-tlTORLa2dR2u.jpg",
                        "meanScore": 70,
                        "episodes": 1,
                        "description": "The Straw Hat Pirates, searching for the great passage \"Grand Line\", are in trouble when their food runs out! Luffy, searching for food on his own, finds a ship belonging to the pirate, Gary, and takes it over!! He lands at a nearby town...Luffy was attacked by a young girl, Silk, who mistook him for a member of the other pirate gang. As the two eat a meal, they tell their stories. Meanwhile, Gary and his band are burning with anger at Luffy, demanding payment from the town's defenseless citizens...!!",
                        "startDate": {
                            "year": 2008,
                            "month": 11,
                            "day": 24
                        },
                        "seasonYear": 2008,
                        "animeName": {
                            "userPreferred": "ONE PIECE: ROMANCE DAWN STORY",
                            "english": "One Piece: Romance Dawn Story",
                            "romaji": "ONE PIECE: ROMANCE DAWN STORY"
                        },
                        "anilistID": 5252,
                        "slug": "one-piece-romance-dawn-story"
                    },
                    {
                        "type": "ANIME",
                        "format": "MOVIE",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141902-fTyoTk8F8qOl.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141902-fTyoTk8F8qOl.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141902-SvnRSXnN7DWC.jpg",
                        "meanScore": 79,
                        "episodes": 1,
                        "trailer": "YAN45KAL5lg",
                        "description": "An almighty voice. With fiery red locks.The story takes place on an island where Uta, the world’s favorite diva, performs for the first time in public. Uta’s singing voice, which she sings with while concealing her true identity, has been described as “otherworldly,” and while the venue is filled with the Straw Hats led by Luffy, pirates, navy, and fans from all over the world who have come to enjoy her voice, Uta’s voice is heard in a new light. The curtain rises on the story with the shocking revelation that she is “Shanks’ daughter!“ ",
                        "startDate": {
                            "year": 2022,
                            "month": 8,
                            "day": 6
                        },
                        "seasonYear": 2022,
                        "animeName": {
                            "userPreferred": "ONE PIECE FILM: RED",
                            "english": "One Piece Film: Red",
                            "romaji": "ONE PIECE FILM: RED"
                        },
                        "anilistID": 141902,
                        "slug": "one-piece-film-red"
                    },
                    {
                        "type": "ANIME",
                        "format": null,
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167404-QpAFnGPtdXYi.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx167404-QpAFnGPtdXYi.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": null,
                        "episodes": 1,
                        "trailer": "hCAHv4qEzmU",
                        "startDate": {
                            "year": null,
                            "month": null,
                            "day": null
                        },
                        "seasonYear": null,
                        "animeName": {
                            "userPreferred": "MONSTERS: Ippaku Sanjou Hiryuu Jigoku",
                            "english": null,
                            "romaji": "MONSTERS: Ippaku Sanjou Hiryuu Jigoku"
                        },
                        "anilistID": 167404,
                        "slug": "monsters-ippaku-sanjou-hiryuu-jigoku"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx10033-V7xnlgAVtaVR.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx10033-V7xnlgAVtaVR.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n10033-u9ROjiLizrd4.jpg",
                        "meanScore": 69,
                        "episodes": 147,
                        "description": "In the world where the taste and texture of food are very important there is Toriko, a hunter of precious foods regularly hired by restaurants and the rich. A man with inhuman skills to capture the ferocious, evasive and rare animals to complete his ultimate dinner course and then the chef Komatsu, his current accomplice: a weak timid person who was inspired by Toriko's greatness and accompanies him on all his journeys on his quest for the course of his life.",
                        "startDate": {
                            "year": 2011,
                            "month": 4,
                            "day": 3
                        },
                        "seasonYear": 2011,
                        "animeName": {
                            "userPreferred": "Toriko",
                            "english": null,
                            "romaji": "Toriko"
                        },
                        "anilistID": 10033,
                        "slug": "toriko"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n2385-us99rub90MzL.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/n2385-us99rub90MzL.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n2385-kYxcxwV0LTvq.jpg",
                        "meanScore": 67,
                        "episodes": 1,
                        "description": "Luffy and his crew are on Mirror Ball Island during a dance carnival. They are spotted by Marines just as Jango the hypnotist is running from them. Luffy and the others are caught up in the dance carnival as Jango, in his desperate attempt to escape, hypnotizes the entire island to dance the night away.",
                        "startDate": {
                            "year": 2001,
                            "month": 3,
                            "day": 3
                        },
                        "seasonYear": 2001,
                        "animeName": {
                            "userPreferred": "ONE PIECE: Nejimaki-jima no Bouken - Jango no Dance Carnival",
                            "english": "One Piece: Django's Dance Carnival",
                            "romaji": "ONE PIECE: Nejimaki-jima no Bouken - Jango no Dance Carnival"
                        },
                        "anilistID": 2385,
                        "slug": "one-piece-nejimaki-jima-no-bouken-jango-no-dance-carnival"
                    },
                    {
                        "type": "ANIME",
                        "format": "SPECIAL",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b101099-3AoCbJWTj2cV.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b101099-3AoCbJWTj2cV.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101099-KarIxewMysiK.jpg",
                        "meanScore": 61,
                        "episodes": 11,
                        "description": "Series of commercials launched by Nissin Foods' Cup Noodles brand. Among some original content, the commercials also featured characters from prominent anime series including:- Kiki's Delivery Service- Heidi: Girl of the Alps- Sazae-san- One Piece",
                        "startDate": {
                            "year": 2017,
                            "month": 6,
                            "day": 7
                        },
                        "seasonYear": null,
                        "animeName": {
                            "userPreferred": "HUNGRY DAYS: Aoharu ka yo.",
                            "english": null,
                            "romaji": "HUNGRY DAYS: Aoharu ka yo."
                        },
                        "anilistID": 101099,
                        "slug": "hungry-days-aoharu-ka-yo"
                    },
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "CHARACTER",
                        "relationName": "Character",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx813-QBIvCQgHcjcF.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx813-QBIvCQgHcjcF.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/813-03ZLvWJgR6Wd.jpg",
                        "meanScore": 79,
                        "episodes": 291,
                        "description": "Goku is back with his new son, Gohan, but just when things are getting settled down, the adventures continue. Whether he is facing enemies such as Freeza, Cell, or Boo, Goku is proven to be an elite of his own and discovers his race, Saiyan. He meets many new people, gaining allies as well as enemies, as he still finds time to raise a family and be the happy-go-lucky Saiyan he is.",
                        "startDate": {
                            "year": 1989,
                            "month": 4,
                            "day": 26
                        },
                        "seasonYear": 1989,
                        "animeName": {
                            "userPreferred": "Dragon Ball Z",
                            "english": "Dragon Ball Z",
                            "romaji": "Dragon Ball Z"
                        },
                        "anilistID": 813,
                        "slug": "dragon-ball-z"
                    }
                ],
                "startDate": {
                    "year": 1999,
                    "month": 10,
                    "day": 20
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1702808437,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg"
                },
                "duration": 24,
                "slug": "one-piece",
                "logoart": "https://artworks.thetvdb.com/banners/v4/series/81797/clearlogo/611b6189d88b6.png",
                "style": [
                    "-2%",
                    "-.5vw"
                ],
                "animeLength": null,
                "bannerart": {
                    "large": "https://www.themoviedb.org/t/p/original/x3ZpEH6U3cim9Ekx4wIyOdSQDE5.jpg",
                    "medium": "https://www.themoviedb.org/t/p/original/oVfucXvhutTpYExG9k06NJqnpT9.jpg"
                },
                "scheduledEpisode": 1089,
                "airingTime": 1704592800000
            },
            {
                "slug": "xian-wang-de-richang-shenghuo-4",
                "title": {
                    "english": null,
                    "native": "仙王的日常生活 第四季",
                    "romaji": "Xian Wang De Richang Shenghuo 4",
                    "userPreferred": "Xian Wang De Richang Shenghuo 4"
                },
                "type": "ONA",
                "anilistID": "156110",
                "malID": "53450",
                "synonyms": [
                    "The Daily Life of the Immortal King Season 4",
                    null
                ],
                "description": "The fourth season of <i>Xian Wang De Richang Shenghuo</i>.",
                "episodeNum": 4,
                "animeLength": null,
                "genres": [
                    "Action",
                    "Comedy",
                    "Fantasy",
                    "Slice of Life"
                ],
                "status": "RELEASING",
                "season": null,
                "averageScore": "70",
                "nextAiringEpisode": null,
                "duration": null,
                "trailerVideo": "i9veqTXjQ-8",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141852-tgLX8S7fqy3G.png",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141852-tgLX8S7fqy3G.png"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141852-JaQdFfKAEqfB.jpg",
                        "meanScore": 73,
                        "episodes": 12,
                        "trailer": "rKsF7ASSC0s",
                        "description": "The third season of Xian Wang De Richang Shenghuo.",
                        "startDate": {
                            "year": 2022,
                            "month": 9,
                            "day": 30
                        },
                        "seasonYear": null,
                        "animeName": {
                            "userPreferred": "Xian Wang De Richang Shenghuo 3",
                            "english": "The Daily Life of the Immortal King Season 3",
                            "romaji": "Xian Wang De Richang Shenghuo 3"
                        },
                        "anilistID": 141852,
                        "slug": "xian-wang-de-richang-shenghuo-3"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 12,
                    "day": 17
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1704000407,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156110-AUzvJaExARiZ.png",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx156110-AUzvJaExARiZ.png",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx156110-AUzvJaExARiZ.png"
                },
                "bannerImage": null,
                "airingTime": 1704600000000
            },
            {
                "slug": "captain-tsubasa-season-2-junior-youth-hen",
                "title": {
                    "english": "Captain Tsubasa: Junior Youth Arc",
                    "native": "キャプテン翼シーズン2 ジュニアユース編",
                    "romaji": "Captain Tsubasa: Season 2 - Junior Youth-hen",
                    "userPreferred": "Captain Tsubasa: Season 2 - Junior Youth-hen"
                },
                "type": "TV",
                "anilistID": "163024",
                "malID": "54803",
                "synonyms": [
                    "Captain Tsubasa (2018) Season 2 - Junior Youth-hen",
                    "Captain Tsubasa: Jr. Youth Arc",
                    null
                ],
                "description": "The second season of <i>Captain Tsubasa (2018)</i>.\n<br><br>\nThe International Junior Youth Tournament in Paris, France, is about to begin, and Tsubasa, Misaki, Wakabayashi, Hyuga, and Wakashimazu are ready. Japan’s team of elite players is to face off against the best the soccer world has to offer. Germany’s Schneider, France’s Pierre, Argentina’s Diaz, and Italy’s Hernandez await, along with a host of other new rivals. Let the battle begin! <br><br>\n(Source: VIZ Media)",
                "episodeNum": 13,
                "animeLength": 39,
                "genres": [
                    "Action",
                    "Sports"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "67",
                "nextAiringEpisode": {
                    "airingAt": 1704618000,
                    "episode": 14
                },
                "duration": 22,
                "trailerVideo": "d41ni2IAPiE",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "TV",
                        "relationType": "PREQUEL",
                        "relationName": "Prequel",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx100745-yXuUvH03TmCm.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx100745-yXuUvH03TmCm.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100745-O7IJXNebsrK1.jpg",
                        "meanScore": 70,
                        "episodes": 52,
                        "trailer": "K6zQ1qs2hLY",
                        "description": "Remake of the first series.  Tsubasa Oozora is an 11-year-old elementary school student who is deeply in love with football and dreams of one day winning the FIFA World Cup for Japan. He lives together with his mother in Japan, while his father is a seafaring captain who travels around the world. Tsubasa Ozora moves to the town Nankatsu to increase his skills as a soccer player. He is challenged by the Super Goalkeeper Genzo Wakabayashi. He then agrees to compete and see who was the best soccer player there.",
                        "startDate": {
                            "year": 2018,
                            "month": 4,
                            "day": 3
                        },
                        "seasonYear": 2018,
                        "animeName": {
                            "userPreferred": "Captain Tsubasa (2018)",
                            "english": "Captain Tsubasa (2018)",
                            "romaji": "Captain Tsubasa (2018)"
                        },
                        "anilistID": 100745,
                        "slug": "captain-tsubasa-2018"
                    },
                    {
                        "type": "ANIME",
                        "format": "OVA",
                        "relationType": "ALTERNATIVE",
                        "relationName": "Alternative",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2117.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2117.jpg"
                        },
                        "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2117-9lrOT2l6OvW7.jpg",
                        "meanScore": 68,
                        "episodes": 13,
                        "description": "Shin CT takes place at the U-16 world cup in France. After some friendly matches in Germany, Japan defeats one opponent after another and finally reaches the final round against Germany. After hard matches against Italian and French top players, the German team seems to be even more supreme. The giant goal keeper Moeller, the all round ace Kalz and Europe's best player and forward Schneider offer the Japanese team an extremely hard match, but in the end Japan wins 3:2.",
                        "startDate": {
                            "year": 1989,
                            "month": 7,
                            "day": 1
                        },
                        "seasonYear": 1989,
                        "animeName": {
                            "userPreferred": "Shin Captain Tsubasa",
                            "english": null,
                            "romaji": "Shin Captain Tsubasa"
                        },
                        "anilistID": 2117,
                        "slug": "shin-captain-tsubasa"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 1
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1703414214,
                "images": {
                    "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163024-ZOvC0mgdXNm9.jpg",
                    "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163024-ZOvC0mgdXNm9.jpg",
                    "small": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx163024-ZOvC0mgdXNm9.jpg"
                },
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163024-rFtOWsDQy12B.jpg",
                "scheduledEpisode": 14,
                "airingTime": 1704618000000
            },
            {
                "slug": "shangri-la-frontier",
                "title": {
                    "english": "Shangri-La Frontier",
                    "native": "シャングリラ・フロンティア",
                    "romaji": "Shangri-La Frontier",
                    "userPreferred": "Shangri-La Frontier"
                },
                "type": "TV",
                "anilistID": "151970",
                "malID": "52347",
                "synonyms": [
                    "ShanFro",
                    "SHANGRI-LA FRONTIER ～เมื่อนักล่าเกมขยะท้าสู้ในเกมเทพ～",
                    null
                ],
                "description": " \"When was the last time I played a game that wasn't crap?\" This is a world in the near future where games that use display screens are classified as retro. Anything that can't keep up with state-of-the-art VR technology is called a \"crap game,\" and you see a large number of crap games coming out. Those who devote their lives to clearing these games are called \"crap-game hunters,\" and Rakuro Hizutome is one of them. The game he's chosen to tackle next is Shangri-La Frontier, a \"god-tier game\" that has a total of thirty million players. Online friends... An expansive world... Encounters with rivals... These are changing Rakuro and all the other players' fates! The best game adventure tale by the strongest \"crap game\" player begins now!<br>\n<br>\n(Source: Crunchyroll)",
                "episodeNum": 13,
                "animeLength": 25,
                "genres": [
                    "Action",
                    "Adventure",
                    "Comedy",
                    "Fantasy",
                    "Sci-Fi"
                ],
                "status": "RELEASING",
                "season": "FALL",
                "averageScore": "78",
                "nextAiringEpisode": {
                    "airingAt": 1704623400,
                    "episode": 14
                },
                "duration": 26,
                "trailerVideo": "ZMpfkJiQrGg",
                "relatedAnime": [
                    {
                        "type": "ANIME",
                        "format": "ONA",
                        "relationType": "SIDE_STORY",
                        "relationName": "Side Story",
                        "images": {
                            "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169750-x2ti7XEH5Ij5.jpg",
                            "medium": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169750-x2ti7XEH5Ij5.jpg"
                        },
                        "bannerImage": null,
                        "meanScore": 66,
                        "episodes": null,
                        "trailer": "rWptISpVhgc",
                        "startDate": {
                            "year": 2023,
                            "month": 9,
                            "day": 28
                        },
                        "seasonYear": 2023,
                        "animeName": {
                            "userPreferred": "Shangri-La Frontier Mini Anime",
                            "english": null,
                            "romaji": "Shangri-La Frontier Mini Anime"
                        },
                        "anilistID": 169750,
                        "slug": "shangri-la-frontier-mini-anime"
                    }
                ],
                "startDate": {
                    "year": 2023,
                    "month": 10,
                    "day": 1
                },
                "endDate": {
                    "year": null,
                    "month": null,
                    "day": null
                },
                "updatedAt": 1703415603,
                "bannerImage": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/151970-Tnnfp0f7NOzj.jpg",
                "images": {
                    "large": "https://image.tmdb.org/t/p/w440_and_h660_face/aCGdpgNkgz66R1winFkTFsMAhlC.jpg",
                    "medium": "https://image.tmdb.org/t/p/w300/aCGdpgNkgz66R1winFkTFsMAhlC.jpg",
                    "small": "https://image.tmdb.org/t/p/w92/aCGdpgNkgz66R1winFkTFsMAhlC.jpg"
                },
                "scheduledEpisode": 14,
                "airingTime": 1704623400000
            }
        ],
        "today": false
    }
]

  const renderSchedule = () => {
    switch (activeDay) {
      case "Monday":
        return d[0].animes;
      case "Tuesday":
        return d[1].animes;
      case "Wednesday":
        return d[2].animes;
      case "Thursday":
        return d[3].animes;
      case "Friday":
        return d[4].animes;
      case "Saturday":
        return d[5].animes;
      case "Sunday":
        return d[6].animes;
      default:
        return d[6].animes; // Handle the case when activeDay is not one of the specified days
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
                    <GridContainer
                      data={renderSchedule()}
                      heading={`Trending`}
                    />
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
