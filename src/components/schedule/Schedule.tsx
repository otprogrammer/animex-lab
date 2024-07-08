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
          slug: "shy-tokyo-dakkan-hen",
          title: {
            english: "SHY Season 2",
            native: "SHY 東京奪還編 ",
            romaji: "SHY: Tokyo Dakkan-hen",
            userPreferred: "SHY: Tokyo Dakkan-hen",
          },
          type: "TV",
          anilistID: "171748",
          malID: "57567",
          synonyms: [],
          description:
            "The second season of <i>SHY</i>.<br><br>\nAs new threats emerge, can our shy heroine step up and save the day once again?<br><br>\n(Source: Crunchyroll News)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Drama"],
          status: "RELEASING",
          season: "SUMMER",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720450800,
            episode: 2,
          },
          duration: null,
          trailerVideo: "emJ1NveYEF8",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 7,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719851277,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/sA6L9bRLVpFEtralQY5UQmgsHOD.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/iITGiecHEXAAOCH0hpbq3fMxPgr.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/iITGiecHEXAAOCH0hpbq3fMxPgr.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/iITGiecHEXAAOCH0hpbq3fMxPgr.jpg",
          },
          languages: [],
          scheduledEpisode: 1,
          airingTime: 1719850200000,
          delayed: false,
        },
        {
          slug: "shinmai-ossan-bouken-sha-saikyou-party-ni-shinu-hodo-kitaerarete-muteki-ni-naru",
          title: {
            english:
              "The Ossan Newbie Adventurer, Trained to Death by the Most Powerful Party, Became Invincible",
            native:
              "新米オッサン冒険者、最強パーティに死ぬほど鍛えられて無敵になる。",
            romaji:
              "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru.",
            userPreferred:
              "Shinmai Ossan Bouken-sha, Saikyou Party ni Shinu Hodo Kitaerarete Muteki ni Naru.",
          },
          type: null,
          anilistID: "163292",
          malID: "54913",
          synonyms: [null],
          description:
            "<i>\"Why should it matter how old you are if you want to start something new?\"</i><br><br>\n\nThe strongest guy around, who also happens to be middle-aged, strives to be an adventurer! Everyone seems to think you should pursue your dreams while you're still young, but there's one man who just can't give up. In a world where most people who become adventurers do so in their teens, a guild employee in his thirties, Rick Gladiator, seeks to become an adventurer instead. After receiving unimaginably brutal training from the legendary party renowned as the strongest on the continent, Orichalcum Fist, he ends up with combat abilities worthy of S-rank status despite starting out as an F-rank rookie! <br><br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: null,
          genres: ["Action", "Adventure", "Comedy", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720458000,
            episode: 2,
          },
          duration: null,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 7,
            day: 2,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719853865,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/2JZRQpLVwpmPTgdaKf3dFvhNy8z.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/2JZRQpLVwpmPTgdaKf3dFvhNy8z.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/2JZRQpLVwpmPTgdaKf3dFvhNy8z.jpg",
          },
          bannerImage: null,
          languages: [],
          scheduledEpisode: 1,
          airingTime: 1719855600000,
          delayed: false,
        },
        {
          slug: "ookami-to-koushinryou-merchant-meets-the-wise-wolf",
          title: {
            english: "Spice and Wolf: MERCHANT MEETS THE WISE WOLF",
            native: "狼と香辛料 MERCHANT MEETS THE WISE WOLF",
            romaji: "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
            userPreferred:
              "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
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
          episodeNum: 14,
          animeLength: 25,
          genres: ["Adventure", "Fantasy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "78",
          nextAiringEpisode: {
            airingAt: 1720456200,
            episode: 15,
          },
          duration: 24,
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
              trailer: "6O90RABLVQo",
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
          updatedAt: 1719857826,
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
          languages: ["GER", "ENG", "FRE"],
          scheduledEpisode: 14,
          airingTime: 1719857400000,
          delayed: false,
        },
      ],
      today: false,
    },
    {
      title: "Tuesday",
      animes: [
        {
          slug: "boukyaku-battery-tv",
          title: {
            english: "Oblivion Battery",
            native: "忘却バッテリー (TV)",
            romaji: "Boukyaku Battery (TV)",
            userPreferred: "Boukyaku Battery (TV)",
          },
          type: "TV",
          anilistID: "167927",
          malID: "56165",
          synonyms: [null],
          description:
            'Iron-armed pitcher, Haruka Kiyomine, and the shrewd catcher, Kei Kaname, AKA the "Skilled General," were considered to be an unrivaled, monstrous battery duo in the middle-school baseball world. They were both scouted by various powerhouse high schools across the nation, but somehow, they both ended up at Tokyo Municipal Kotesashi High School, which wasn\'t known for baseball at all. On top of that, other star players who had lost to that duo in the past and completely strayed from baseball coincidentally also enrolled at that school, and…\n<br><br>\nTheir meeting sets everything into motion once again.\n<br><br>\nTheir high school baseball story begins now!\n<br><br>\n(Source: Crunchyroll)',
          episodeNum: 12,
          animeLength: 12,
          genres: ["Comedy", "Sports"],
          status: "FINISHED",
          season: null,
          averageScore: "67",
          nextAiringEpisode: null,
          duration: 24,
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 10,
          },
          endDate: {
            year: 2024,
            month: 7,
            day: 3,
          },
          updatedAt: 1719936854,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/8RxRx3teQkMj5tOdLPistAsmzir.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/8RxRx3teQkMj5tOdLPistAsmzir.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/8RxRx3teQkMj5tOdLPistAsmzir.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/oZywpK8VXRCOltaZZOFCZv6d691.jpg",
          airingTime: 1719936600000,
          delayed: false,
          scheduledEpisode: 12,
          languages: [],
        },
      ],
      today: false,
    },
    {
      title: "Wednesday",
      animes: [
        {
          slug: "maou-gun-saikyou-no-majutsushi-wa-ningen-datta",
          title: {
            english:
              "The Strongest Magician in the Demon Lord's Army was a Human",
            native: "魔王軍最強の魔術師は人間だった",
            romaji: "Maou Gun Saikyou no Majutsushi wa Ningen datta",
            userPreferred: "Maou Gun Saikyou no Majutsushi wa Ningen datta",
          },
          type: "TV",
          anilistID: "173584",
          malID: "57876",
          synonyms: [],
          description:
            "Ike is a powerful magician and the leader of the Immortal Brigade, part of the Seventh Corps of the Demon Lord’s Army. He single-handedly conquers fortresses and pushes back the armies of humanity. Neither Dairokuten, the Demon Lord, nor Ike’s loyal soldiers know his darkest secret—he is a human in hiding! But can he keep his secret safe and bring peaceful coexistence to demons and humans?<br><br>\n(Source: Crunchyroll)",
          episodeNum: 2,
          animeLength: null,
          genres: ["Action", "Adventure", "Drama", "Fantasy"],
          status: "RELEASING",
          season: "SUMMER",
          averageScore: "62",
          nextAiringEpisode: {
            airingAt: 1720618200,
            episode: 3,
          },
          languages: [],
          duration: 24,
          trailerVideo: "aJS0wtA0p0Q",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 6,
            day: 26,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1720015840,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/onodE2UfLfqWXhSuclWixb4p4z0.jpg",
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx173584-nyZElmr8218W.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx173584-nyZElmr8218W.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx173584-nyZElmr8218W.jpg",
          },
          scheduledEpisode: 2,
          airingTime: 1720015800000,
          delayed: false,
        },
        {
          slug: "oshi-no-ko-2nd-season",
          title: {
            english: "Oshi no Ko Season 2",
            native: "【推しの子】第2期",
            romaji: "[Oshi no Ko] 2nd Season",
            userPreferred: "[Oshi no Ko] 2nd Season",
          },
          type: "TV",
          anilistID: "166531",
          malID: "55791",
          synonyms: [null],
          description:
            "The second season of <i>[Oshi no Ko]</i>.<br><br>\n\nAqua’s desire for revenge takes center stage as he navigates the dark underbelly of the entertainment world alongside his twin sister, Ruby. While Ruby follows in their slain mother’s footsteps to become an idol, Aqua joins a famous theater troupe in hopes of uncovering clues to the identity of his father — the man who arranged their mother’s untimely death, and the man who once starred in the same troupe Aqua hopes to infiltrate.<br><br>\n\n(Source: HIDIVE)",
          episodeNum: 1,
          animeLength: 13,
          genres: ["Drama", "Mystery", "Psychological", "Supernatural"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720620000,
            episode: 2,
          },
          duration: null,
          trailerVideo: "Cxfr5hENj54",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150672-jguvEfP0vGfW.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx150672-jguvEfP0vGfW.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/150672-ISwoA0eS722H.jpg",
              meanScore: 85,
              episodes: 11,
              trailer: "gKWEUJ4r5do",
              description:
                "When a pregnant young starlet appears in Gorou Amemiya’s countryside medical clinic, the doctor takes it upon himself to safely (and secretly) deliver Ai Hoshino’s child so she can make a scandal-free return to the stage. But no good deed goes unpunished, and on the eve of her delivery, he finds himself slain at the hands of Ai’s deluded stalker — and subsequently reborn as Ai’s child, Aquamarine Hoshino! The glitz and glamor of showbiz hide the dark underbelly of the entertainment industry, threatening to dull the shine of his favorite star. Can he help his new mother rise to the top of the charts? And what will he do when unthinkable disaster strikes? Note: Episode 1【推しの子】Mother and Children was pre-screened in advance in Japanese theaters on March 17, 2023. The regular TV broadcast began on April 12, 2023. The first episode has an extended runtime of ~82 minutes.",
              startDate: {
                year: 2023,
                month: 4,
                day: 12,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "[Oshi no Ko]",
                english: "Oshi No Ko",
                romaji: "[Oshi no Ko]",
              },
              anilistID: 150672,
              slug: "oshi-no-ko",
            },
          ],
          startDate: {
            year: 2024,
            month: 7,
            day: 3,
          },
          endDate: {
            year: 2024,
            month: 9,
            day: 25,
          },
          updatedAt: 1720019495,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166531-vUu7iDwUkC67.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/zIqcqSzEVKnGipz9R6uqGFqqcwm.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/zIqcqSzEVKnGipz9R6uqGFqqcwm.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/zIqcqSzEVKnGipz9R6uqGFqqcwm.jpg",
          },
          languages: [],
          scheduledEpisode: 1,
          airingTime: 1720019400000,
          delayed: false,
        },
        {
          slug: "tokidoki-bosotto-russiago-de-dereru-tonari-no-alya-san",
          title: {
            english: "Alya Sometimes Hides Her Feelings in Russian",
            native: "時々ボソッとロシア語でデレる隣のアーリャさん",
            romaji: "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san",
            userPreferred:
              "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san",
          },
          type: "TV",
          anilistID: "162804",
          malID: "54744",
          synonyms: [
            "Alya Sometimes Hides Her Feelings in Russian",
            "Roshidere",
            null,
          ],
          description:
            "Alya is a transfer student enjoying popularity at her new high school, often sporting a cold shoulder while earning high marks in class. She ignores her nerdy classmate, Kuze Masachika, except for when she blurts out a flirtatious line to him in Russian. Little does she know, Kuze understands Russian, though he pretends not to. Let’s see where this wacky love story takes them!<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 1,
          animeLength: 12,
          genres: ["Comedy", "Romance", "Slice of Life"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720621800,
            episode: 2,
          },
          duration: null,
          trailerVideo: "fpA1NY7vRH4",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 7,
            day: 3,
          },
          endDate: {
            year: 2024,
            month: 9,
            day: 18,
          },
          updatedAt: 1720017520,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/hfnzByZIRj6rx8xaxzS2zDilei1.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/hfnzByZIRj6rx8xaxzS2zDilei1.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/hfnzByZIRj6rx8xaxzS2zDilei1.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/162804-NwvD3Lya8IZp.jpg",
          languages: [],
          scheduledEpisode: 1,
          airingTime: 1720019400000,
          delayed: false,
        },
        {
          slug: "maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii-part-2",
          title: {
            english: "The Misfit of Demon King Academy II (Cour 2)",
            native:
              "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ Ⅱ 2クール",
            romaji:
              "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II Part 2",
            userPreferred:
              "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II Part 2",
          },
          type: "TV",
          anilistID: "130590",
          malID: "48418",
          synonyms: [
            "The Misfit of Demon King Academy: History’s Strongest Demon King Reincarnates and Goes to School with His Descendants Season 2 Part 2",
            "ใครว่าข้าไม่เหมาะเป็นจอมมาร: ต้นตระกูลจอมมารที่เเกร่งที่สุดในประวัติศาสตร์เกิดใหม่ไปเรียนที่โรงเรียนลูกหลาน ภาค 2 Part 2",
            null,
          ],
          description:
            "The second cour of the second season of <i>Maou Gakuin no Futekigousha</i>. <br><br>\nThe academy's lessons are back in session with Anos Voldigoad fighting more powerful enemies!<br><br>\n(Source: Crunchyroll)",
          episodeNum: 11,
          animeLength: 12,
          genres: ["Action", "Fantasy"],
          status: "RELEASING",
          season: null,
          averageScore: "67",
          nextAiringEpisode: null,
          duration: 24,
          trailerVideo: "9u32S8C8L3g",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130588-zYz8Gp2kZfTm.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130588-zYz8Gp2kZfTm.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130588-TVZlsARgfLfm.jpg",
              meanScore: 69,
              episodes: 12,
              trailer: "yr0YpMLsEaA",
              description:
                'As peace returns to the demon realm, Anos Voldigoad wishes nothing more than to put his reputation as the Demon King of Tyranny to rest and go back to being a misfit at the prestigious Demon King Academy. Unfortunately, any tranquility is fleeting: sinister demons, kings, and deities plot Anos\'s demise from the shadows.Rumors spread about the "Child of God," a being whose power may rival that of Anos. To uncover the truth and eliminate the potential threat, Anos must journey deep into the land of spirits. However, the spirit world is shrouded in mystery, and it may only be entered after undergoing a series of difficult trials.With unrivaled power and confidence, Anos braces himself to defeat various formidable enemies with grandiose titles. But he—with the assistance of his trusted allies—will barely have to break a sweat as the true Demon King of Tyranny.',
              startDate: {
                year: 2023,
                month: 1,
                day: 8,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred:
                  "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
                english:
                  "The Misfit of Demon King Academy Ⅱ: History's Strongest Demon King Reincarnates and Goes to School with His Descendants",
                romaji:
                  "Maou Gakuin no Futekigousha: Shijou Saikyou no Maou no Shiso, Tensei shite Shison-tachi no Gakkou e Kayou II",
              },
              anilistID: 130588,
              slug: "maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e-kayou-ii",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 12,
          },
          endDate: {
            year: 2024,
            month: null,
            day: null,
          },
          updatedAt: 1720027054,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/4hOhYUovajbYeJoQDcQW72PjFIB.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/4hOhYUovajbYeJoQDcQW72PjFIB.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/4hOhYUovajbYeJoQDcQW72PjFIB.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/bxTRLwRy5E3d97loCxXp136vDDu.jpg",
          languages: ["ENG", "SPA", "FRE"],
          scheduledEpisode: 11,
          airingTime: 1720024800000,
          delayed: false,
        },
      ],
      today: false,
    },
    {
      title: "Thursday",
      animes: [
        {
          slug: "isekai-suicide-squad",
          title: {
            english: "Suicide Squad ISEKAI",
            native: "異世界スーサイド・スクワッド",
            romaji: "Isekai Suicide Squad",
            userPreferred: "Isekai Suicide Squad",
          },
          type: null,
          anilistID: "166710",
          malID: "55848",
          synonyms: ["Suicide Squad ISEKAI", null],
          description:
            "In the crime-ridden city of Gotham, Amanda Waller, the head of A.R.G.U.S., has assembled a group of notorious criminals for a mission: Harley Quinn, Deadshot, Peacemaker, Clayface, and King Shark. These Super-Villains are sent into an otherworldly realm that’s connected to this world through a gate. It’s a world of swords and magic where orcs rampage and dragons rule the skies—an “ISEKAI”!<br>\n<br>\nWith lethal explosives planted in their necks, there’s no running or hiding, and failing the mission means a one-way ticket to the afterlife! Can Harley Quinn and her crew conquer this perilous ISEKAI realm?! Brace yourselves for the pulse-pounding saga of the elite task force known as the “Suicide Squad” as they embark on a jaw-dropping adventure!<br>\n<br>\n(Source: Warner Bros. Japan)",
          episodeNum: 4,
          animeLength: 10,
          genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
          status: "RELEASING",
          season: null,
          averageScore: "68",
          nextAiringEpisode: {
            airingAt: 1720681200,
            episode: 5,
          },
          duration: 24,
          trailerVideo: "a9T3IzQjRow",
          relatedAnime: [
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b100248-SFN3cl5cmI9O.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b100248-SFN3cl5cmI9O.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100248-N2GCWVR4G0W0.jpg",
              meanScore: 59,
              episodes: 1,
              trailer: "QF031DwMffQ",
              description:
                "Gorilla Grodd's time displacement machine transports many of Batman's worst enemies to feudal Japan - along with the Dark Knight and a few of his allies. The villains take over the forms of the feudal lords that rule the divided land, with the Joker taking the lead among the warring factions. As his traditional high-tech weaponry is exhausted almost immediately, Batman must rely on his intellect and his allies - including Catwoman and the extended Bat-family - to restore order to the land, and return to present-day Gotham City.",
              startDate: {
                year: 2018,
                month: 4,
                day: 24,
              },
              seasonYear: 2018,
              animeName: {
                userPreferred: "Ninja Batman",
                english: "Batman Ninja",
                romaji: "Ninja Batman",
              },
              anilistID: 100248,
              slug: "ninja-batman",
            },
          ],
          startDate: {
            year: 2024,
            month: 6,
            day: 27,
          },
          endDate: {
            year: 2024,
            month: 8,
            day: 15,
          },
          updatedAt: 1720076932,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166710-pr7H0NvG6QHN.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/AbVwsBJnLoqJzPJn8dlGFSGfygy.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/AbVwsBJnLoqJzPJn8dlGFSGfygy.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/AbVwsBJnLoqJzPJn8dlGFSGfygy.jpg",
          },
          languages: ["ENG"],
          scheduledEpisode: 4,
          airingTime: 1720077060000,
          delayed: false,
        },
      ],
      today: true,
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
          episodeNum: 116,
          genres: ["Action", "Comedy", "Sci-Fi"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "46",
          nextAiringEpisode: {
            airingAt: 1720148400,
            episode: 124,
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
          airingTime: 1720149000000,
          delayed: false,
          scheduledEpisode: 124,
        },
        {
          slug: "dead-dead-demons-dededededestruction-2",
          title: {
            english: "DEAD DEAD DEMONS DEDEDEDE DESTRUCTION",
            native: "デッドデッドデーモンズデデデデデストラクション",
            romaji: "Dead Dead Demon's Dededededestruction",
            userPreferred: "Dead Dead Demon's Dededededestruction",
          },
          type: "ONA",
          anilistID: "177697",
          malID: "58883",
          synonyms: [],
          description:
            "As the world is threatened by the sudden appearance of a mysterious alien mothership, best friends Koyama Kadode and Nakagawa “Ontan” Oran carry on about their high school life. But as they grow up, they face existential questions, learning adulthood’s complexities and that the true threat may not be from above.<br>\n<br>\n(Source: Crunchyroll)<br><br>\n<i>Note: Includes Episode 0.</i>",
          episodeNum: 5,
          animeLength: null,
          genres: ["Comedy", "Drama", "Sci-Fi", "Slice of Life"],
          status: "RELEASING",
          season: null,
          averageScore: "74",
          nextAiringEpisode: {
            airingAt: 1720148460,
            episode: 7,
          },
          duration: 24,
          trailerVideo: "NqSpaLIMJvY",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 5,
            day: 24,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719544360,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/ld1UMkzjVsA1midityNjHTAX79v.jpg",
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b177697-Gxdbz8IoI3Gd.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b177697-Gxdbz8IoI3Gd.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b177697-Gxdbz8IoI3Gd.png",
          },
          languages: ["ENG"],
          scheduledEpisode: 7,
          airingTime: 1720149060000,
          delayed: false,
        },
        {
          slug: "code-geass-dakkan-no-z",
          title: {
            english: "Code Geass: Rozé of the Recapture",
            native: "コードギアス 奪還のロゼ",
            romaji: "Code Geass: Dakkan no Rozé",
            userPreferred: "Code Geass: Dakkan no Rozé",
          },
          type: null,
          anilistID: "126830",
          malID: "56835",
          synonyms: ["Code Geass: Z of the Recapture", null],
          description:
            "Year Seven of the Kowa Period, in the former Hokkaido Block occupied by the Neo-Britannian Empire, live mercenary brothers known as the Nameless Mercenaries. The eldest, Ash, has excellent athletic ability and advanced Knightmare Frame controlling skills, while the youngest, Rozé, is clearheaded and oversees intel gathering and devising strategies. Due to an impregnable wall of energy called the Situmpe Wall, for four years the 100th emperor who stopped the Black Knights' liberation plan, Callis al Britannia, has been trying to plunge the world into chaos once again with the help of his servant, Norland, and his Einberg Knights. Upon receiving a request, Rozé and Ash, along with the Seven Shining Stars resistance group confront the Empire to recapture Princess Sakuya.<br><br>\n\n(Source: Hulu)<br><br>\n\n<i>Note: The series had a four-part theatrical pre-screening in Japan starting in May 2024. Streaming worldwide release begins in June 2024.<br><br>\n\n• Part 1 releasing theatrically on May 10, 2024.<br>\n• Part 2 releasing theatrically on June 7, 2024.<br>\n• Part 3 releasing theatrically on July 5, 2024.<br>\n• Final Part releasing theatrically on August 2, 2024.\n",
          episodeNum: 2,
          animeLength: 12,
          genres: ["Action", "Drama", "Mecha", "Sci-Fi", "Thriller"],
          status: "RELEASING",
          season: null,
          averageScore: "68",
          nextAiringEpisode: {
            airingAt: 1720162860,
            episode: 3,
          },
          duration: 24,
          trailerVideo: "MlcXFr8tcrw",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PARENT",
              relationName: "Parent",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1575-dG7vMMZMF3wk.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1575-dG7vMMZMF3wk.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1575.jpg",
              meanScore: 84,
              episodes: 25,
              description:
                "On August 10th of the year 2010 the Holy Empire of Britannia began a campaign of conquest, its sights set on Japan. Operations were completed in one month thanks to Britannia's deployment of new mobile humanoid armor vehicles dubbed Knightmare Frames. Japan's rights and identity were stripped away, the once proud nation now referred to as Area 11. Its citizens, Elevens, are forced to scratch out a living while the Britannian aristocracy lives comfortably within their settlements. Pockets of resistance appear throughout Area 11, working towards independence for Japan. Lelouch, an exiled Imperial Prince of Britannia posing as a student, finds himself in the heart of the ongoing conflict for the island nation. Through a chance meeting with a mysterious girl named C.C., Lelouch gains his Geass, the power of the king. Now endowed with absolute dominance over any person, Lelouch may finally realize his goal of bringing down Britannia from within!",
              startDate: {
                year: 2006,
                month: 10,
                day: 6,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred: "Code Geass: Hangyaku no Lelouch",
                english: "Code Geass: Lelouch of the Rebellion",
                romaji: "Code Geass: Hangyaku no Lelouch",
              },
              anilistID: 1575,
              slug: "code-geass-hangyaku-no-lelouch",
            },
          ],
          startDate: {
            year: 2024,
            month: 6,
            day: 21,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719559902,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126830-Mx56p5DMIjiq.png",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126830-Mx56p5DMIjiq.png",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx126830-Mx56p5DMIjiq.png",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/126830-uXNHmw6QRssj.jpg",
          languages: ["ENG", "SPA", "POR"],
          scheduledEpisode: 3,
          airingTime: 1720163460000,
          delayed: false,
        },
        {
          slug: "25-jigen-no-ririsa",
          title: {
            english: null,
            native: "2.5次元の誘惑",
            romaji: "2.5 Jigen no Ririsa",
            userPreferred: "2.5 Jigen no Ririsa",
          },
          type: "TV",
          anilistID: "158559",
          malID: "53802",
          synonyms: [
            "2.5 Dimensional Seduction",
            "2.5 Jigen no Yuuwaku",
            "2.5 มิติ ริริสะ",
            "Ririsa of 2.5 Dimension",
            null,
          ],
          description:
            "“I have no interest in real girls!” So claims Okumura, the president of the school’s manga club. He’s your typical otaku, obsessed with a sexy (fictional) 2D manga character known as Lilliel. Then the new school year starts, and a (real!) 3D girl named Lilysa whose passion is cosplay joins the club. Lilysa convinces Okumura to become her photographer–and guess who her favorite manga character is? Not only that, but Lilysa is into modeling the fetishy stuff! The boundaries between 2D and 3D start to blur as this hot-blooded romantic comedy unfolds.<br>\n<br>\n(Source: Seven Seas Entertainment)",
          episodeNum: null,
          animeLength: null,
          genres: ["Comedy", "Ecchi", "Romance", "Slice of Life"],
          status: "NOT_YET_RELEASED",
          season: null,
          averageScore: null,
          nextAiringEpisode: {
            airingAt: 1720186260,
            episode: 1,
          },
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
          updatedAt: 1688580790,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158559-HPfJyLo0HIXt.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx158559-HPfJyLo0HIXt.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx158559-HPfJyLo0HIXt.jpg",
          },
          scheduledEpisode: 1,
          airingTime: 1720186860000,
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
          episodeNum: 14,
          animeLength: 24,
          genres: ["Action", "Adventure", "Comedy", "Fantasy"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "79",
          nextAiringEpisode: {
            airingAt: 1720193400,
            episode: 14,
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
          updatedAt: 1719587158,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/p1t65WL9w6ZUB3axHmlP5V9t5gA.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/p1t65WL9w6ZUB3axHmlP5V9t5gA.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/p1t65WL9w6ZUB3axHmlP5V9t5gA.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/156822-y0wPQIl3AHDA.jpg",
          airingTime: 1720194000000,
          delayed: false,
          scheduledEpisode: 14,
          languages: ["ENG"],
        },
        {
          slug: "dungeon-no-naka-no-hito",
          title: {
            english: null,
            native: "ダンジョンの中のひと",
            romaji: "Dungeon no Naka no Hito",
            userPreferred: "Dungeon no Naka no Hito",
          },
          type: "TV",
          anilistID: "168345",
          malID: "56348",
          synonyms: ["Dungeon People", null],
          description:
            "Clay was trained by her father to be an expert member of the thieves’ guild. Since her father disappeared three years ago, she’s been using her skills to search for him in a dungeon filled with goblins, a Minotaur, and all manner of other dangerous creatures. When Clay reaches deeper than anyone ever has before, she meets the caretaker of the dungeon. To her surprise, Clay is invited to join the staff! And thus begins Clay’s new job–to learn the inner workings and behind-the-scenes secrets of the dungeon from the inside.\n<br><br>\n(Source: Seven Seas Entertainment)",
          episodeNum: null,
          animeLength: null,
          genres: ["Adventure", "Comedy", "Fantasy"],
          status: "NOT_YET_RELEASED",
          season: null,
          averageScore: null,
          nextAiringEpisode: {
            airingAt: 1720200600,
            episode: 1,
          },
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
          updatedAt: 1692594721,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/kskqKldSfWhV80wBb9iJqCAlk87.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/kskqKldSfWhV80wBb9iJqCAlk87.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/kskqKldSfWhV80wBb9iJqCAlk87.jpg",
          },
          languages: [],
          scheduledEpisode: 1,
          airingTime: 1720201200000,
          delayed: false,
        },
      ],
      today: false,
    },
    {
      title: "Saturday",
      animes: [
        {
          slug: "shadowverse-flame-arc-hen",
          title: {
            english: "Shadowverse Flame: Arc-hen",
            native: "シャドウバースF アーク編",
            romaji: "Shadowverse Flame: Arc-hen",
            userPreferred: "Shadowverse Flame: Arc-hen",
          },
          type: "TV",
          anilistID: "172187",
          malID: "57614",
          synonyms: [],
          description:
            'Sequel to <i>Shadowverse Flame: Seven Shadows-hen</i>. <br><br>\n\nArc Ruler has declared that he will remake the world, and has caused all the world\'s Digital Friends to run amok as "Shade". The mission given to Light and his friends is to neutralize the three towers that are leading the world to destruction. Having obtained the "Negza System" for use against the Shade, Light and his friends aim for each tower while defeating the Shade. Now, the battle for the fate of the world begins!<br><br>\n\n(Source: Crunchyroll News)',
          episodeNum: 11,
          animeLength: null,
          genres: ["Fantasy"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720233000,
            episode: 12,
          },
          duration: 24,
          trailerVideo: "qumhGwRQv4E",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx163136-Fk6VdfAlxjj0.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx163136-Fk6VdfAlxjj0.jpg",
              },
              bannerImage: null,
              meanScore: 70,
              episodes: 25,
              trailer: "MAoKkk0VRk8",
              description:
                'Sequel to Shadowverse Flame. Light has become the new "Strongest Shadowverse Player" by becoming the top-ranked player in the world rankings. After winning the right to challenge Seven Shadows, Light and his team are invited to the "Shadow Area," a huge floating island. It is a team battle between Light and Seven Shadows. The team that wins the first five battles against Seven Shadows placed in each area is the winner. Arc, Arc Ruler, and Seven Shadows. The truth of all will be revealed at the end of the battle. The great ordeal that will decide the fate of the world is about to begin!',
              startDate: {
                year: 2023,
                month: 7,
                day: 8,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Shadowverse Flame: Seven Shadows-hen",
                english: "Shadowverse Flame: Seven Shadows Arc",
                romaji: "Shadowverse Flame: Seven Shadows-hen",
              },
              anilistID: 163136,
              slug: "shadowverse-flame-seven-shadows-hen",
            },
          ],
          startDate: {
            year: 2024,
            month: 4,
            day: 13,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719629360,
          bannerImage: null,
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx172187-jy46HFMns8SD.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx172187-jy46HFMns8SD.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx172187-jy46HFMns8SD.jpg",
          },
          languages: [],
          scheduledEpisode: 12,
          airingTime: 1720233600000,
          delayed: false,
        },
        {
          slug: "boku-no-hero-academia-7",
          title: {
            english: "My Hero Academia Season 7",
            native: "僕のヒーローアカデミア 7",
            romaji: "Boku no Hero Academia 7",
            userPreferred: "Boku no Hero Academia 7",
          },
          type: "TV",
          anilistID: "163139",
          malID: "54789",
          synonyms: ["My Hero Academia Season 7", null],
          description:
            "The seventh season of <i>Boku no Hero Academia</i>.<br>\n<br>\n<i>Note: The season was preceded by a 4-episode special titled 'Boku no Hero Academia: Memories' recapping events from the 6th season along with adding a few minutes of new material each episode.</i>",
          episodeNum: 9,
          animeLength: 21,
          genres: ["Action", "Adventure"],
          status: "RELEASING",
          season: null,
          averageScore: "77",
          nextAiringEpisode: {
            airingAt: 1720258200,
            episode: 10,
            delayed: true,
            delayedText:
              "Episode 10 has been delayed by a week. Episode 10 will air on July 13th, 2024.",
          },
          duration: 24,
          trailerVideo: "DQp71pChp4s",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139630-3v4gxWtNZxLV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139630-3v4gxWtNZxLV.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/139630-XLc90c6CJjZv.jpg",
              meanScore: 83,
              episodes: 25,
              trailer: "WxCJMYbGtzA",
              description:
                'With Tomura Shigaraki at its helm, the former Liberation Army is now known as the Paranormal Liberation Front. This organized criminal group poses an immense threat to the Hero Association, not only because of its sheer size and strength, but also the overpowering quirks of Jin "Twice" Bubaigawara and Gigantomachia.As new intel from the covert hero Keigo "Hawks" Takami confirms that Shigaraki is nowhere to be seen, the Hero Association decides to strike the enemy headquarters with a surprise attack using the entirety of its assets—and the UA students find themselves on the battlefield once again. As the fight rages on, the unsuspecting villains must regroup and push back, but the brave heroes are determined to eradicate every last one of them.',
              startDate: {
                year: 2022,
                month: 10,
                day: 1,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Boku no Hero Academia 6",
                english: "My Hero Academia Season 6",
                romaji: "Boku no Hero Academia 6",
              },
              anilistID: 139630,
              slug: "boku-no-hero-academia-6",
            },
          ],
          startDate: {
            year: 2024,
            month: 5,
            day: 4,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719654288,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/7DkqCkoAtN5nFt0WYSGXOMSQfd8.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7DkqCkoAtN5nFt0WYSGXOMSQfd8.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/7DkqCkoAtN5nFt0WYSGXOMSQfd8.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/163139-I6UpRghBPVor.jpg",
          disableVaryg: true,
          languages: ["ENG"],
          scheduledEpisode: 10,
          airingTime: 1720258800000,
          delayed: true,
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
          episodeNum: 1129,
          genres: ["Adventure", "Comedy", "Mystery", "Psychological"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "81",
          nextAiringEpisode: {
            airingAt: 1720265400,
            episode: 1130,
            delayed: true,
            delayedText:
              "Episode 1130 has been delayed by two weeks. Episode 1130 will air on July 13th, 2024.",
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
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20546-3etnJUBqpEdJ.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20546-3etnJUBqpEdJ.jpg",
              },
              bannerImage: null,
              meanScore: 79,
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
              meanScore: 71,
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
              meanScore: 76,
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
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142219-Nu9bWFhIKn0q.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142219-Nu9bWFhIKn0q.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142219-FbJbKVMYwPBB.jpg",
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
                english: "Detective Conan: The Bride of Halloween",
                romaji: "Meitantei Conan: Halloween no Hanayome",
              },
              anilistID: 142219,
              slug: "meitantei-conan-halloween-no-hanayome",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156841-UyR9YBwsLaoH.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx156841-UyR9YBwsLaoH.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/156841-BV1wjpf495Lp.jpg",
              meanScore: 83,
              episodes: 1,
              trailer: "0jIpAPLbpt0",
              description:
                "This time's location is set in the sea near the Hachijo-jima island, Tokyo. Engineers from around the world have gathered for the full-scale operation of \"Pacific Buoy,\" an offshore facility to connect security cameras owned by the worldwide police forces. A test of a certain \"new technology\" based on a face recognition system is underway there.Meanwhile, Conan and the Detective Boys visit Hachijo-jima at Sonoko's invitation and receive a phone call from Subaru Okiya (a graduate student in the Graduate School of Engineering at Tokyo Metropolitan University, who is an FBI agent Shuichi Akai and a black-robed organization's Rye) informing them that a Europol employee was murdered in Germany by the Black Organization's Jin.Conan, who is disquieted, sneaks into the facility and finds that a female engineer has been kidnapped by the Black Organization...! Furthermore, a USB drive containing certain information in her possession ends up in the hands of the organization... A black shadow also creeps up on Ai Haibara (Detective Boys' Ai Haibara / Shiho Miyano / the Black Organization's Sherry),..",
              startDate: {
                year: 2023,
                month: 4,
                day: 14,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Meitantei Conan: Kurogane no Submarine",
                english: "Detective Conan: Black Iron Submarine",
                romaji: "Meitantei Conan: Kurogane no Submarine",
              },
              anilistID: 156841,
              slug: "meitantei-conan-kurogane-no-submarine",
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
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx166060-aIhHMEwqLNi4.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx166060-aIhHMEwqLNi4.png",
              },
              bannerImage: null,
              meanScore: 69,
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
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169754-QKY28ON9onrB.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169754-QKY28ON9onrB.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169754-xMWlFwvB9VuN.jpg",
              meanScore: 79,
              episodes: 1,
              trailer: "5sccnTD-KUg",
              description:
                "The 27th Detective Conan movie. A message has arrived from Kid the Phantom Thief, that he will steal a Japanese sword belonging to the wealthy Onoe Family in Hakodate, Hokkaido. Conan and Heiji Hattori, who happened to be in Hakodate, are on the case to capture Kid. Onoe Family's collections are associated with Toshizo Hijikata, a historic figure who perished in Hakodate. Why is Kid, who specializes in jewels, going after a Japanese sword?Coincidentally the family lawyer of Onoe is found murdered in the warehouse district, apparently slaughtered by a Japanese sword. The suspect is an investor/arms dealer who is said to be after Onoe family's hidden treasure.The grandfather of Onoe family's patriarch was deeply involved with the army industry during wartime, and it was rumored he hid some powerful weapon that could “change the course of war” somewhere in Hakodate. Is Kid after that weapon? Meanwhile, Heiji is trying to find a perfect viewpoint to declare his love to Kazuha…In the North among cherry blossoms, the exciting hunt for treasure begins!",
              startDate: {
                year: 2024,
                month: 4,
                day: 12,
              },
              seasonYear: 2024,
              animeName: {
                userPreferred: "Meitantei Conan: 100-man Dol no Michishirube",
                english: "Case Closed: The Million-dollar Pentagram",
                romaji: "Meitantei Conan: 100-man Dol no Michishirube",
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
          updatedAt: 1719661351,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/235-MTmiz0uB0fMd.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/cfDwAFwAaJblM3DcHj1raL4aWgU.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/cfDwAFwAaJblM3DcHj1raL4aWgU.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/cfDwAFwAaJblM3DcHj1raL4aWgU.jpg",
          },
          animeLength: null,
          languages: [],
          scheduledEpisode: 1130,
          airingTime: 1720266000000,
          delayed: true,
        },
        {
          slug: "boku-no-tsuma-wa-kanjou-ga-nai",
          title: {
            english: "My Wife Has No Emotion",
            native: "僕の妻は感情がない",
            romaji: "Boku no Tsuma wa Kanjou ga Nai",
            userPreferred: "Boku no Tsuma wa Kanjou ga Nai",
          },
          type: "TV",
          anilistID: "175450",
          malID: "58272",
          synonyms: [],
          description:
            "Takuma is a single guy who does nothing but go to work and come home. Too tired to do chores, he decides to get a robot to cook and keep house. “Mina-chan” is such a good housekeeper, Takuma jokes that she should become his wife. Mina takes Takuma’s joke seriously, and slowly the two start doing more things together, like having a picnic outside. As time goes by, Takuma starts to fall for Mina, but can a human and a robot ever have an equal, loving relationship? \n<br><br>\n(Source: Seven Seas Entertainment)<br><br>\n<i>Note: Boku no Tsuma wa Kanjou ga Nai was streamed 3 days in advance of the TV broadcast on ABEMA, dAnimestore, and Crunchyroll beginning June 29, 2024. Regular broadcasting began on July 2, 2024.</i>",
          episodeNum: 1,
          animeLength: null,
          genres: ["Comedy", "Romance", "Sci-Fi", "Slice of Life"],
          status: "RELEASING",
          season: "SUMMER",
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720278000,
            episode: 2,
          },
          languages: [],
          duration: null,
          trailerVideo: "etQRsUdjb0o",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 6,
            day: 29,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719673989,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/cQGq1oRSORK1xHnAvli4qXOBOTJ.jpg",
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175450-Wfjd6OqFOn2h.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx175450-Wfjd6OqFOn2h.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx175450-Wfjd6OqFOn2h.jpg",
          },
          scheduledEpisode: 2,
          airingTime: 1720278600000,
          delayed: false,
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
          episodeNum: 13,
          animeLength: 25,
          genres: ["Action", "Comedy", "Drama", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "67",
          nextAiringEpisode: {
            airingAt: 1720283400,
            episode: 14,
          },
          duration: 23,
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
          updatedAt: 1719678831,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/aQeVABaQ7gZedtmtDRwhrgOQwgq.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/aQeVABaQ7gZedtmtDRwhrgOQwgq.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/aQeVABaQ7gZedtmtDRwhrgOQwgq.jpg",
          },
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/166910-hmc3ZVLcnv9x.jpg",
          languages: [],
          logoart:
            "https://image.tmdb.org/t/p/original/l83KsDYZxV3917PffGLHc8Sz3xb.png",
          style: ["-1%", "-1vw"],
          bannerart: {
            large:
              "https://image.tmdb.org/t/p/original/6e9g9IwL9xga5RoCfHFzME2NOYb.jpg",
            medium:
              "https://image.tmdb.org/t/p/w1280/hbPUaAY6YQOmqMdwd5qm6JavqGk.jpg",
          },
          scheduledEpisode: 14,
          airingTime: 1720284000000,
          delayed: false,
        },
        {
          slug: "long-zu",
          title: {
            english: "Dragon Raja -The Blazing Dawn-",
            native: "龙族",
            romaji: "Long Zu",
            userPreferred: "Long Zu",
          },
          type: "ONA",
          anilistID: "122511",
          malID: "44408",
          synonyms: ["Dragon Raja"],
          description:
            "Lu Mingfei never expected to live an extraordinary life. He was content with his average achievements and took pride in his skill in Starcraft. However, all that is upended when he suddenly receives a scholarship to study in Chicago at a place called Cassell College.<br>\nIt all seems too good to be true, this can only be a scam! Little does he know, that when he does eventually accept the offer, it is but the beginning of the rest of his life, and the college's obscurity will be the least of his concerns once they start telling him about the dragons...\n<br><br>\n<i>Note: Episode 0 aired with a runtime of 49 minutes.</i>",
          episodeNum: 16,
          animeLength: 17,
          genres: ["Action", "Drama", "Fantasy"],
          status: "FINISHED",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720284300,
            episode: 17,
          },
          duration: 18,
          trailerVideo: "2o3WETDYBhc",
          relatedAnime: [
            {
              type: "ANIME",
              format: "ONA",
              relationType: "SEQUEL",
              relationName: "Sequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx157692-lihmnuJGcbM6.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx157692-lihmnuJGcbM6.png",
              },
              bannerImage: null,
              meanScore: null,
              episodes: null,
              description: "The second season of Long Zu.",
              startDate: {
                year: null,
                month: null,
                day: null,
              },
              seasonYear: null,
              animeName: {
                userPreferred: "Long Zu 2",
                english: null,
                romaji: "Long Zu 2",
              },
              anilistID: 157692,
              slug: "long-zu-2",
            },
          ],
          startDate: {
            year: 2022,
            month: 8,
            day: 19,
          },
          endDate: {
            year: 2022,
            month: 11,
            day: 25,
          },
          updatedAt: 1719679534,
          bannerImage:
            "https://s4.anilist.co/file/anilistcdn/media/anime/banner/122511-c2NEixtg4qHx.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/4OxjZt3Evt0UY65Ozr4C4S895CO.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/4OxjZt3Evt0UY65Ozr4C4S895CO.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/4OxjZt3Evt0UY65Ozr4C4S895CO.jpg",
          },
          airingTime: 1720284900000,
          delayed: false,
          scheduledEpisode: 17,
          languages: [],
        },
        {
          slug: "karasu-wa-aruji-wo-erabanai",
          title: {
            english: "YATAGARASU: The Raven Does Not Choose Its Master",
            native: "烏は主を選ばない",
            romaji: "Karasu wa Aruji wo Erabanai",
            userPreferred: "Karasu wa Aruji wo Erabanai",
          },
          type: "TV",
          anilistID: "170503",
          malID: "56980",
          synonyms: [],
          description:
            "Welcome to Yamauchi, a world inhabited by the Yatagarasu, a race of three-legged ravens who shapeshift into humans. The land is divided into four regions—North, South, East, and West—each ruled by a noble family. Yukiya, the son of a leader in the North, is shocked by a call to attend to the Imperial Prince. Murder, mysteries, and an invasion from an unexpected enemy await in this epic fantasy.<br>\n<br>\n(Source: Crunchyroll)",
          episodeNum: 13,
          animeLength: 20,
          genres: ["Action", "Drama", "Fantasy", "Supernatural"],
          status: "RELEASING",
          season: "SPRING",
          averageScore: "69",
          nextAiringEpisode: {
            airingAt: 1720290600,
            episode: 14,
            delayed: true,
            delayedText:
              "Episode 14 has been delayed by two weeks due to a recap episode and cour break. Episode 14 will air on July 20th, 2024.",
          },
          duration: null,
          trailerVideo: "x-L6oSJ9m3g",
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
          updatedAt: 1719686610,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/gJkm9jXc7Zb79PSda6xZyRKbmYh.jpg",
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/a1N1847cpLyuuVFlyQjiaxhBmtb.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/a1N1847cpLyuuVFlyQjiaxhBmtb.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/a1N1847cpLyuuVFlyQjiaxhBmtb.jpg",
          },
          airingTime: 1720291200000,
          delayed: true,
          scheduledEpisode: 14,
          languages: [],
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
          episodeNum: 22,
          animeLength: null,
          genres: ["Fantasy", "Mahou Shoujo"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "71",
          nextAiringEpisode: {
            airingAt: 1720315800,
            episode: 23,
          },
          duration: 24,
          trailerVideo: "BPRbvtFnkYs",
          relatedAnime: [
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1534-mbnVgJrquBQt.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1534-mbnVgJrquBQt.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1534-muVFeBIJVxYP.jpg",
              meanScore: 71,
              episodes: 49,
              description:
                "During the summer festival five years ago, two girls met at a mysterious tree and saw two glowing spheres. Now, these two girls--Saki Hyuuga, ace pitcher on the school softball team; and Mai Mishou, who prefers sketching over stargazing--are chosen by the spirits of flowers (Flappy) and birds (Choppy) to restore the Seven Fountains and save their worlds from Dark Autumn. Together, they are the NEW Pretty Cure.",
              startDate: {
                year: 2006,
                month: 2,
                day: 5,
              },
              seasonYear: 2006,
              animeName: {
                userPreferred: "Futari wa Precure: Splash☆Star",
                english: null,
                romaji: "Futari wa Precure: Splash☆Star",
              },
              anilistID: 1534,
              slug: "futari-wa-precure-splashstar",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12191-nWmjNC2appDV.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx12191-nWmjNC2appDV.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12191-LgdNcoafKDN2.png",
              meanScore: 68,
              episodes: 48,
              description:
                'Once upon a time, there was a kingdom of fairy tales called "M&auml;rchenland", where many fairy tale characters live together in joy. Suddenly, the evil emperor Pierrot made an invasion on M&auml;rchenland, sealing its Queen in the process. To revive the Queen, the symbol of happiness called Cure Decor, "the Queen\'s scattered power of light of happiness", is required. To collect the Cure Decor, a fairy named Candy searches for the Pretty Cures on Earth. There, Candy meets a girl, who decides to collect the Cure Decor. Now, will the world earn a "happy ending"?',
              startDate: {
                year: 2012,
                month: 2,
                day: 5,
              },
              seasonYear: 2012,
              animeName: {
                userPreferred: "Smile Precure!",
                english: "Glitter Force",
                romaji: "Smile Precure!",
              },
              anilistID: 12191,
              slug: "smile-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5684-jrSyAbr10ALo.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5684-jrSyAbr10ALo.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5684-zcd4LAzM7fiZ.jpg",
              meanScore: 73,
              episodes: 50,
              description:
                'Love Momozono is a 14-year-old student at Yotsuba Junior Highschool that tends to care more for others than for herself. One day she visits a show of the famous dance unit "Trinity" and decides to become a dancer, too. On the same event, subordinates of the Labyrinth Kingdom show up who want to collect the unhappiness of the audience. Love gets the power to change into Cure Peach and fights them. Soon after, she is joined by her good friends Miki, who is Cure Berry, and Inori, who becomes Cure Pine.',
              startDate: {
                year: 2009,
                month: 2,
                day: 1,
              },
              seasonYear: 2009,
              animeName: {
                userPreferred: "Fresh Precure!",
                english: null,
                romaji: "Fresh Precure!",
              },
              anilistID: 5684,
              slug: "fresh-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126905-dWGjQMt2DUp0.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126905-dWGjQMt2DUp0.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/126905-R4IsdMuUTlyr.jpg",
              meanScore: 73,
              episodes: 46,
              trailer: "EYmyfzHjaHI",
              description:
                "Manatsu Natsuumi is a first-year junior high school student born and raised on a small island. On the day she moves from the island, She meets Laura, a mermaid girl who has come to the earth alone in search of the legendary warrior, PreCure. Laura's hometown, Grand Ocean, is attacked by a witch who lives in the dark depths of the ocean, and all of their motivational power is taken away. It is said that if the motivational power of humans is also taken away, the world will be in deep trouble. Laura is captured by the witch's servant, and Manatsu transforms into Cure Summer to save her.",
              startDate: {
                year: 2021,
                month: 2,
                day: 28,
              },
              seasonYear: 2021,
              animeName: {
                userPreferred: "Tropical-Rouge! Precure",
                english: "Tropical-Rouge! Precure",
                romaji: "Tropical-Rouge! Precure",
              },
              anilistID: 126905,
              slug: "tropical-rouge-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx100661-XT2NWXKklV5T.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx100661-XT2NWXKklV5T.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/100661-U0cd3dR28mK9.jpg",
              meanScore: 78,
              episodes: 49,
              trailer: "My1u0ka_xck",
              description:
                "Nono Hana is an 8th grade student who wants to be a stylish and mature big sister like figure. She always puts on a lovely smile and loves to search for exciting things. One day, Hana meets a baby named Hug-tan and her guardian fairy named Harry who had fallen from the sky. At that exact moment, an evil organization called Dark Tomorrow suddenly appeared! They're trying to forcefully take Hug-tan's Mirai Crystal! In order to protect Hug-tan, Hana wishes to do something to help her, and her wish is granted, as she gains a Mirai Crystal and transforms into Cure Yell. The world is overflowed with Tomorrow Powerer, which is the power to create a brilliant tomorrow, which is crystallized into the Mirai Crystals. If it's stolen, everyone's future will not exist. To protect Hug-tan and everyone's future, Cure Yell will do her best!",
              startDate: {
                year: 2018,
                month: 2,
                day: 4,
              },
              seasonYear: 2018,
              animeName: {
                userPreferred: "HUGtto! Precure",
                english: null,
                romaji: "HUGtto! Precure",
              },
              anilistID: 100661,
              slug: "hugtto-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142080-YQEmfiA8D0Fy.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142080-YQEmfiA8D0Fy.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/142080-GMSelgwWq15N.jpg",
              meanScore: 66,
              episodes: 45,
              trailer: "hez_UB6ay5Y",
              description:
                "The mysterious, delicious world of CooKingdom, which rules over all the cuisine in this world. CooKingdom has closely guarded the Recipe-Bon, in which it's written how to prepare any dish. But, oh no! One day, it gets stolen by the Bundoru Gang! The Bundoru Gang plans to monopolize everything for themselves, and their next target is the Cuisine Fairy Recipeppi... The Energy Fairies have come to Oishi-Na Town in the human world in search of the Recipe-Bon. With their help, an unexpected turn of events leads to three ordinary girls transforming into Pretty Cures!",
              startDate: {
                year: 2022,
                month: 2,
                day: 6,
              },
              seasonYear: 2022,
              animeName: {
                userPreferred: "Delicious Party♡Precure",
                english: "Delicious Party Precure",
                romaji: "Delicious Party♡Precure",
              },
              anilistID: 142080,
              slug: "delicious-partyprecure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1932-gcO8umGwWn33.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx1932-gcO8umGwWn33.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1932-ptmkySyU0JNM.jpg",
              meanScore: 70,
              episodes: 49,
              description:
                "Yumehara Nozomi, a regular student, finds a magical book called the Dream Collet in the library and meets Coco and Nuts, two creatures from the Palmier Kingdom. They plead with Nozomi to restore their world, which has been destroyed by an organization called the Nightmares, by completing the Dream Collet and finding the 55 Pinkies to make any wish come true. Meanwhile, the Nightmares are moving into the real world. Once Nozomi agrees to help, Coco and Nuts transform her into the magical girl Cure Dream and turn four fellow students into her Pretty Cure team.",
              startDate: {
                year: 2007,
                month: 2,
                day: 4,
              },
              seasonYear: 2007,
              animeName: {
                userPreferred: "Yes! Precure 5",
                english: "Yes! Pretty Cure 5",
                romaji: "Yes! Precure 5",
              },
              anilistID: 1932,
              slug: "yes-precure-5",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7645-r8GbOkfHr0qj.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx7645-r8GbOkfHr0qj.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/7645-VzqxaDZ6D3vz.jpg",
              meanScore: 78,
              episodes: 49,
              description:
                "2nd year middle school student Tsubomi Hanasaki has just moved with her family to the town of Kibougahana to live with her grandma. She is shy and introverted, but is determined to start off her new school life at Myoudou Academy as confidently as possible.Lately she has been having the same mysterious dream again and again, of Cure Moonlight's defeat at the Great Heart Tree. She wonders what it all means. Then suddenly, two fairies from the dream appear to her, and before she knows it, she is transformed into the legendary Pretty Cure, Cure Blossom!Later joined by her high energy classmate and new friend Erika Kurumi as Cure Marine, the two girls vow work hard to protect everyone's Heart Flowers from the evil gang, The Desert Messengers. ",
              startDate: {
                year: 2010,
                month: 2,
                day: 7,
              },
              seasonYear: 2010,
              animeName: {
                userPreferred: "Heartcatch Precure!",
                english: "Heartcatch Precure!",
                romaji: "Heartcatch Precure!",
              },
              anilistID: 7645,
              slug: "heartcatch-precure",
            },
            {
              type: "ANIME",
              format: "MOVIE",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx169403-E3YZFNf6yS6t.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx169403-E3YZFNf6yS6t.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/169403-ew25CQtZdV98.jpg",
              meanScore: null,
              episodes: 1,
              trailer: "-tZdpaHmH0k",
              description:
                "Movie of Wonderful Precure!, first announced during screenings of Precure All Stars F.",
              startDate: {
                year: 2024,
                month: 9,
                day: 13,
              },
              seasonYear: 2024,
              animeName: {
                userPreferred: "Wonderful Precure! The Movie!",
                english: null,
                romaji: "Wonderful Precure! The Movie!",
              },
              anilistID: 169403,
              slug: "precure-shinsaku-eiga",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98059-n1fWRel1JlO7.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98059-n1fWRel1JlO7.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98059-rhfvEwucJvPq.jpg",
              meanScore: 71,
              episodes: 49,
              trailer: "rNbhD48fyVM",
              description:
                'Ichika Usami is a second-year middle school student who loves sweets, but struggles to bake. One day, she encounters a fairy named Pekorin, who is able to detect "Kirakiraru", an element residing in sweets. However, an evil fairy starts to steal the Kirakiraru for themselves, leaving the sweets black and lifeless. Determined to protect the sweets, Ichika gains the power of the Legendary Patisserie and transforms into the Pretty Cure, Cure Whip, to protect the Kirakiraru.',
              startDate: {
                year: 2017,
                month: 2,
                day: 5,
              },
              seasonYear: 2017,
              animeName: {
                userPreferred: "Kirakira☆Precure a la Mode",
                english: "KIRA KIRA☆PRECURE A LA MODE",
                romaji: "Kirakira☆Precure a la Mode",
              },
              anilistID: 98059,
              slug: "kirakiraprecure-a-la-mode",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21506-dANsNb1iHP8s.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21506-dANsNb1iHP8s.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21506-Dp3CCH9rP9ue.jpg",
              meanScore: 71,
              episodes: 50,
              description:
                'Mirai Asahina, a 13-year-old girl who\'s going into her second year of middle school, witnesses a mysterious object fall in to the park. Excitedly, she brings her stuffed bear Mofurun with her to see what it was. When she gets there she sees a girl named Riko flying on a broom. Mirai has a lot of questions, and Riko explains that she\'s searching for something. The two of them are wearing similar pendants. Then Batti, an ally of the dark magic user Dokurokushi, appears before them and demands the "Link Stone Emerald." Batti creates a monster called a "Yokubaru" and drives them into a corner. Mirai, Riko, and Mofurun join hands and speak the magic words "Cure-Up Rapapa," their pendants glow, and they become the legendary Precure.',
              startDate: {
                year: 2016,
                month: 2,
                day: 7,
              },
              seasonYear: 2016,
              animeName: {
                userPreferred: "Mahoutsukai Precure!",
                english: null,
                romaji: "Mahoutsukai Precure!",
              },
              anilistID: 21506,
              slug: "mahoutsukai-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21001-49nYJTr7Wnsu.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21001-49nYJTr7Wnsu.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21001-kzIWkehB7wQ2.jpg",
              meanScore: 77,
              episodes: 50,
              description:
                "The story is set in Noble Academy, the first boarding junior high school in the Precure franchise. The anime depicts the excitement of dorm life, coming of age while living with friends, and the anticipation and anxiety of a new life among roommates, separated from family.The heroine Haruka Haruno is a first-year student at Noble Academy. Even now, she has cherished a dream of becoming a princess, like those from her precious picture books. Long ago, she made a promise with a boy named Kanata to never give up the dream.One day, the \"Princess Precures\" were revived by the Princess Perfume (and Kanata's dress-shaped \"Dress-Up Key\" that unlocks the Princess Perfume's power), and Haruka transforms into the flower princess Cure Flora. When unleashing their special signature moves, the Princess Precures' outfits turn into magnificent princess-like Mode Elegant long dresses.Haruka also meets two new companions. Minami Kaidou is a second-year student and the student council president nicknamed the \"school princess.\" She also happens to transform into the sea princess Cure Mermaid.Haruka's classmate and popular model Kirara Amanogawa is also the star princess Cure Twinkle. The three princesses join forces in battle to protect people's dreams from the dreadful dark witch Dispia's plot to turn them into despair.Pafu and her older brother Aroma are fairies who came from Hope Kingdom in search of the Princess Precures.Haruka's childhood acquaintance Kanata happens to be Prince Hope Grand Kanata from the Hope Kingdom.",
              startDate: {
                year: 2015,
                month: 2,
                day: 1,
              },
              seasonYear: 2015,
              animeName: {
                userPreferred: "Go! Princess Precure",
                english: null,
                romaji: "Go! Princess Precure",
              },
              anilistID: 21001,
              slug: "go-princess-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16419-rWEwkEDnKYQ0.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16419-rWEwkEDnKYQ0.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16419-NNZOw7hmuSsc.jpg",
              meanScore: 66,
              episodes: 49,
              description:
                'Aida Mana is a girl who is always eager to do things for the sake of others.\rOne day, when she was visiting the Clover Tower during her school\'s orientation program, an enemy who called themselves "Selfish" appeared suddenly, and tried to manipulate her inner heart! To fight this enemy, she borrowed power from a magical fairy Sharuru to transform into Pretty Cure!\rTo protect the peace of the world, other legendary Pretty Cure soon joined her in battle! A mysterious baby also appears, making each day a "Heartthrob" experience! The 4 Cures, always holding "love" in their hearts, are battling for the world\'s fate!\r',
              startDate: {
                year: 2013,
                month: 2,
                day: 3,
              },
              seasonYear: 2013,
              animeName: {
                userPreferred: "Dokidoki! Precure",
                english: "Glitter Force Doki Doki",
                romaji: "Dokidoki! Precure",
              },
              anilistID: 16419,
              slug: "dokidoki-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20577-6MqRE2P5ZBuD.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20577-6MqRE2P5ZBuD.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20577.jpg",
              meanScore: 65,
              episodes: 49,
              description:
                "All around the world, Pretty Cures have been fighting against the invasion of the enemy known as Saiark!Shirayuki Hime, the princess of Blue Sky Kingdom is in fact a Pretty Cure, but unable to defeat the enemy alone, she is fallen behind the others and is in a quite a terrible situation.Then, on her quest to find a partner, she meets Aino Megumi (Cure Lovely) and they begin to battle the enemy together.Having learned that assembling all PreCards, you can get any one wish fulfilled, the team up with the fairy Ribbon to protect the world peace, transform, dress up and form change as they fight!With the dress-up theme beloved by girls, a completely different Pretty Cure story begins!",
              startDate: {
                year: 2014,
                month: 2,
                day: 2,
              },
              seasonYear: 2014,
              animeName: {
                userPreferred: "HappinessCharge Precure!",
                english: "Happiness Charge Pretty Cure!",
                romaji: "HappinessCharge Precure!",
              },
              anilistID: 20577,
              slug: "happinesscharge-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx603-OVKAQsIVEn7L.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx603-OVKAQsIVEn7L.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n603-FPlAxroSkLw5.jpg",
              meanScore: 70,
              episodes: 49,
              description:
                "Nagisa Misumi and Honoka Yukishiro couldn't be more different. Nagisa is sporty and Honoka bookish, and while they attend the same school, they have very little in common - until one day, a shower of shooting stars brings two very unlikely visitors into their lives: Mipple and Mepple, refugees from the Garden of Light, which has been conquered by Darkness. Endowed with new and startling powers, Nagisa and Honoka become Cure Black and Cure White, magical defenders of the light - together, they are Pretty Cure. ",
              startDate: {
                year: 2004,
                month: 2,
                day: 1,
              },
              seasonYear: 2004,
              animeName: {
                userPreferred: "Futari wa Precure",
                english: "Precure",
                romaji: "Futari wa Precure",
              },
              anilistID: 603,
              slug: "futari-wa-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9893-vqhj2M6aR3Bv.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9893-vqhj2M6aR3Bv.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/9893-FNmPQ8lKRDSI.jpg",
              meanScore: 71,
              episodes: 48,
              description:
                "Kanon Town is filled with music. Hibiki Houjou and Kanade Minamino have grown up in this town and have known each other since they were children. However, they no longer get along.One day the fairy Hummy from the land of music, Major Land, appears before them. The evil king Mephisto of Minor Land is planning to turn the legendary Melody of Happiness into the Melody of Misfortune. To prevent this from happening, Hibiki and Kanade transform themselves into Pretty Cure.Kanade and Hibiki have to learn to work together to collect the scattered notes of the Melody of Happiness in order to recreate the score!",
              startDate: {
                year: 2011,
                month: 2,
                day: 6,
              },
              seasonYear: 2011,
              animeName: {
                userPreferred: "Suite Precure♪",
                english: null,
                romaji: "Suite Precure♪",
              },
              anilistID: 9893,
              slug: "suite-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112748-UU9yEob7meZj.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112748-UU9yEob7meZj.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112748-dT6g0pgTY5u1.jpg",
              meanScore: 66,
              episodes: 45,
              trailer: "XGJTaiHFgqs",
              description:
                'Deep inside the Earth lies a magical place called the "Healing Garden", which cared for the planet for centuries and is been protected by animal-like fairies named "Healing Animals". However, the garden was attacked by the antagonistic group called Bjögens whose goal is to infect the garden and slowly poison the planet. In order to save the Healing Garden, Latte escaped to the human world alongside three "medical trainee" Healing Animals, on a mission to find three people who can partner with them. After they meet Nodoka, Chiyu and Hinata, Latte pleaded them to fight for the Healing Garden as they became Pretty Cures in order to fight against the threat of the Bjögens and protect all life on Earth and the Healing Garden. ',
              startDate: {
                year: 2020,
                month: 2,
                day: 2,
              },
              seasonYear: 2020,
              animeName: {
                userPreferred: "Healin' Good♥Precure",
                english: "Healin' Good Precure",
                romaji: "Healin' Good♥Precure",
              },
              anilistID: 112748,
              slug: "healin-goodloveprecure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105857-npfjeoYN9hPS.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105857-npfjeoYN9hPS.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105857-D1S4lCsrKFMT.jpg",
              meanScore: 74,
              episodes: 49,
              trailer: "VRHMhMU1S6Q",
              description:
                'The story begins when the protagonist Hikaru meets aliens Lala, Prunce, and Fuwa while watching the night sky. She learns of the "Star Palace," where the 12 Star Princesses of the constellations kept the balance of the universe until they were attacked. Lala is searching for the legendary Precure warriors to help find the 12 scattered "Princess Star Color Pens" and revive the princesses. When Fuwa is captured by an enemy, Hikaru wishes to save Fuwa, and a Star Color Pendent and a Star Color Pen appear to allow her to transform into Cure Star. From then on she works to collect the pens and raise Fuwa, who is the key to reviving the princesses.',
              startDate: {
                year: 2019,
                month: 2,
                day: 3,
              },
              seasonYear: 2019,
              animeName: {
                userPreferred: "Star☆Twinkle Precure",
                english: null,
                romaji: "Star☆Twinkle Precure",
              },
              anilistID: 105857,
              slug: "startwinkle-precure",
            },
            {
              type: "ANIME",
              format: "TV",
              relationType: "ALTERNATIVE",
              relationName: "Alternative",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx157883-ib9fXLLjUy5m.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx157883-ib9fXLLjUy5m.png",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/157883-u3gE5LKKXwb3.jpg",
              meanScore: 74,
              episodes: 50,
              trailer: "j0DUgBhsg_A",
              description:
                'A major incident has occurred in the peaceful Sky Land!? The young Princess Eru has been kidnapped by the monsters of Underg Empire! A brave young girl, Sora, follows the princess through a mysterious hole. "TV"? "Cars"? Are those some kind of magic tools!?!?But there\'s no time to be surprised! She has to get the princess back to the castle...! Flying between two worlds! The adventure with the Pretty Cure begins now!It\'s hero time!',
              startDate: {
                year: 2023,
                month: 2,
                day: 5,
              },
              seasonYear: 2023,
              animeName: {
                userPreferred: "Hirogaru Sky! Precure",
                english: "Soaring Sky! Precure",
                romaji: "Hirogaru Sky! Precure",
              },
              anilistID: 157883,
              slug: "hirogaru-sky-precure",
            },
          ],
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
          updatedAt: 1719712019,
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
          airingTime: 1720316400000,
          delayed: false,
          scheduledEpisode: 23,
          languages: [],
        },
        {
          slug: "sasayaku-you-ni-koi-wo-utau",
          title: {
            english: "Whisper Me a Love Song",
            native: "ささやくように恋を唄う",
            romaji: "Sasayaku You ni Koi wo Utau",
            userPreferred: "Sasayaku You ni Koi wo Utau",
          },
          type: "TV",
          anilistID: "160181",
          malID: "54233",
          synonyms: [
            "Whisper Me a Love Song",
            "Whispering You a Love Song",
            "SasaKoi",
            "Cicha piosenka o miłości",
            "กระซิบรักเป็นทำนองร้องบอกเธอ",
            "Flüster mir ein Liebeslied",
            null,
          ],
          description:
            "After performing a song at her school’s opening ceremony, musician Yori Asanagi receives an apparent love confession from freshman Himari Kino. But just as Yori decides she wants to return Himari’s feelings, Himari reveals that she did not “love” her, but “admires” her! But you can’t unring a bell once struck, and Yori is determined to make Himari fall for her, not just her music. Will their hearts ever beat as one, or will their love fall out of tune?<br>\n<br>\n(Source: HIDIVE)",
          episodeNum: 10,
          animeLength: 12,
          genres: ["Drama", "Music", "Romance"],
          status: "RELEASING",
          season: "WINTER",
          averageScore: "68",
          nextAiringEpisode: {
            airingAt: 1720315800,
            episode: 11,
            delayed: true,
            delayedText: "Episode 11 and 12 have been delayed indefinitely.",
          },
          duration: 23,
          trailerVideo: "RN1d3Ny2AgM",
          relatedAnime: [],
          startDate: {
            year: 2024,
            month: 4,
            day: 14,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719711649,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/3rxfd5kFRMjU0YWeSAKyyH48dbt.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3rxfd5kFRMjU0YWeSAKyyH48dbt.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/3rxfd5kFRMjU0YWeSAKyyH48dbt.jpg",
          },
          airingTime: 1720316400000,
          delayed: true,
          scheduledEpisode: 11,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/zrqnyKPzKhGHRw9GB6F6zL9R1v5.jpg",
          languages: [],
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
          episodeNum: 1110,
          genres: ["Action", "Adventure", "Comedy", "Drama", "Fantasy"],
          status: "RELEASING",
          season: "FALL",
          averageScore: "88",
          nextAiringEpisode: {
            airingAt: 1720317600,
            episode: 1111,
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
              meanScore: 80,
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
              meanScore: 67,
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
              format: "SPECIAL",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2385-06iBj9aNIadt.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx2385-06iBj9aNIadt.jpg",
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
              meanScore: 78,
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
              format: "ONA",
              relationType: "PREQUEL",
              relationName: "Prequel",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx167404-QMZJVARntkbv.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx167404-QMZJVARntkbv.jpg",
              },
              bannerImage:
                "https://s4.anilist.co/file/anilistcdn/media/anime/banner/167404-Hhvbg3APdan0.jpg",
              meanScore: 77,
              episodes: 1,
              trailer: "Q6tmyHjEFcE",
              description:
                "MONSTERS: 103 Mercies Dragon Damnation by Eiichiro Oda tells the tale of Ryuuma, the legendary swordsman that hails from the Land of Wano in One Piece. A samurai's path leads him to a young waitress whose hometown was destroyed by a dragon. He doesn't want any trouble - but it finds them anyway.",
              startDate: {
                year: 2024,
                month: 1,
                day: 21,
              },
              seasonYear: 2024,
              animeName: {
                userPreferred: "MONSTERS: Ippaku Sanjou Hiryuu Jigoku",
                english: "MONSTERS: 103 Mercies Dragon Damnation",
                romaji: "MONSTERS: Ippaku Sanjou Hiryuu Jigoku",
              },
              anilistID: 167404,
              slug: "monsters-ippaku-sanjou-hiryuu-jigoku",
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
              meanScore: 62,
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
              format: "TV",
              relationType: "CHARACTER",
              relationName: "Character",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx813-TsHyhR3EDd2x.png",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx813-TsHyhR3EDd2x.png",
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
                'Prologue to the movie, showing the Whiskey Peak arc. Released as part of a new cut for the movie\'s TV showing on "Premium Saturday".',
              startDate: {
                year: 2011,
                month: 8,
                day: 20,
              },
              seasonYear: 2011,
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
          updatedAt: 1719714240,
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
              "https://image.tmdb.org/t/p/original/x3ZpEH6U3cim9Ekx4wIyOdSQDE5.jpg",
            medium:
              "https://image.tmdb.org/t/p/w1280/x3ZpEH6U3cim9Ekx4wIyOdSQDE5.jpg",
          },
          languages: [],
          scheduledEpisode: 1111,
          airingTime: 1720318200000,
          delayed: false,
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
          episodeNum: 13,
          animeLength: 27,
          genres: ["Action", "Comedy", "Romance"],
          status: "RELEASING",
          season: null,
          averageScore: "70",
          nextAiringEpisode: {
            airingAt: 1720341000,
            episode: 14,
          },
          duration: 24,
          relatedAnime: [
            {
              type: "ANIME",
              format: "ONA",
              relationType: "SIDE_STORY",
              relationName: "Side Story",
              images: {
                large:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx176909-7e9gNUUJzTbw.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx176909-7e9gNUUJzTbw.jpg",
              },
              bannerImage: null,
              meanScore: 66,
              episodes: 27,
              trailer: "NGqdcd00pAM",
              description:
                "Mini anime shorts of Yozakura-san Chi no Daisakusen.",
              startDate: {
                year: 2024,
                month: 4,
                day: 11,
              },
              seasonYear: 2024,
              animeName: {
                userPreferred: "Yozakura-san Chi no Mini Sakusen",
                english: null,
                romaji: "Yozakura-san Chi no Mini Sakusen",
              },
              anilistID: 176909,
              slug: "yozakura-san-chi-no-mini-sakusen",
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
          updatedAt: 1719737120,
          images: {
            large:
              "https://image.tmdb.org/t/p/w440_and_h660_face/cVisjiKyY3i1ZfW1MhvePk65Sro.jpg",
            medium:
              "https://image.tmdb.org/t/p/w300_and_h450_bestv2/cVisjiKyY3i1ZfW1MhvePk65Sro.jpg",
            small:
              "https://image.tmdb.org/t/p/w92/cVisjiKyY3i1ZfW1MhvePk65Sro.jpg",
          },
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/5k5QemX3fDy1KGf7ZTcmfSg0JnQ.jpg",
          airingTime: 1720341600000,
          delayed: false,
          scheduledEpisode: 14,
          languages: [],
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
            airingAt: 1720342860,
            episode: 268,
          },
          duration: 2,
          trailerVideo: "Jnu8xZpHj00",
          relatedAnime: [
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
              meanScore: 72,
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
          airingTime: 1720343460000,
          delayed: false,
          scheduledEpisode: 268,
        },
        {
          slug: "chibi-maruko-chan-1995",
          title: {
            english: "Chibi Maruko-chan",
            native: "ちびまる子ちゃん",
            romaji: "Chibi Maruko-chan (1995)",
            userPreferred: "Chibi Maruko-chan (1995)",
          },
          type: "TV",
          anilistID: "6149",
          malID: "6149",
          synonyms: [],
          description:
            "Momoko Sakura is an elementary school student who likes popular idol Momoe Yamaguchi and mangas. She is often called \"Chibi Maruko-chan\" due to her young age and small size. She lives together with her parents, her grandparents and her elder sister in a little town. In school, she has many friends with whom she studies and plays together everyday, including her close pal, Tama-chan; the student committee members, Maruo-kun and Migiwa-san; and the B-class trio: 'little master' Hanawa-kun, Hamaji-Bu Taro and Sekiguchi-kun. This is a fun-loving and enjoyable anime that portrays the simple things in life.\n<br><br>\n(Source: Anime News Network)",
          episodeNum: 19,
          animeLength: null,
          genres: ["Comedy", "Slice of Life"],
          status: "RELEASING",
          season: "SUMMER",
          averageScore: "66",
          nextAiringEpisode: {
            airingAt: 1720350000,
            episode: 1438,
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
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/951.jpg",
                medium:
                  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/951.jpg",
              },
              bannerImage: null,
              meanScore: 71,
              episodes: 142,
              description:
                "Momoko Sakura is an elementary school student who likes popular idol Momoe Yamaguchi and mangas. She is often called \"Chibi Maruko-chan\" due to her young age and small size. She lives together with her parents, her grandparents and her elder sister in a little town. In school, she has many friends with whom she studies and plays together everyday, including her close pal, Tama-chan; the student committee members, Maruo-kun and Migiwa-san; and the B-class trio: 'little master' Hanawa-kun, Hamaji-Bu Taro and Sekiguchi-kun. This is a fun-loving and enjoyable anime that portrays the simple things in life.",
              startDate: {
                year: 1990,
                month: 1,
                day: 7,
              },
              seasonYear: 1990,
              animeName: {
                userPreferred: "Chibi Maruko-chan",
                english: null,
                romaji: "Chibi Maruko-chan",
              },
              anilistID: 951,
              slug: "chibi-maruko-chan",
            },
          ],
          startDate: {
            year: 1995,
            month: 8,
            day: 1,
          },
          endDate: {
            year: null,
            month: null,
            day: null,
          },
          updatedAt: 1719746221,
          bannerImage:
            "https://image.tmdb.org/t/p/w1920_and_h800_face/cqeeBvjpXu28JerXBItA73z5tqU.jpg",
          images: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6149-w9IRcMlFkn4i.jpg",
            medium:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6149-w9IRcMlFkn4i.jpg",
            small:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/b6149-w9IRcMlFkn4i.jpg",
          },
          languages: [],
          scheduledEpisode: 1438,
          airingTime: 1720350600000,
          delayed: false,
        },
      ],
      today: false,
    },
  ];
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
          <Tab.List className="grid grid-cols-3 lg:grid-cols-7 gap-1 w-full lg:max-w-[85%] xl:max-w-[75%] mx-auto place-self-center">
            {days.map((day, index) => {
              const isToday = day.i === (index as any);

              return (
                <Tab
                  key={index}
                  onClick={() => setActiveDay(day.name)}
                  className={`
                px-4 py-2 rounded-sm cursor-pointer hover:bg-white border-[1px] border-neutral-800/90 hover:text-black transition duration-300
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
                      heading=""
                      day={day.name}
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
