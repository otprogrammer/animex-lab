"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HoverScreen from "@/components/HoverScreen";
import { GridBreakPoints } from "../../../utils/Vars";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// @ts-ignore
import SwiperCore from "swiper";
SwiperCore.use([]);
import { Navigation, Pagination, Grid } from "swiper/modules";
import { Icon } from "@iconify/react/dist/iconify.js";
import LatestContainer from "@/components/container/LatestContainer";

const MediaScreen = ({
  heading,
  fetchURL,
  API_KEY,
  genre = -1,
  moveCount,
  media_type,
  swiperId,
}: any) => {
  const [data, setData] = useState([
    {
      logo: "/sx8b0dphgKY50lr0wfNSHnbGTDl.png",
      type: "TV",
      year: 2023,
      score: null,
      title: "Goblin Slayer 2nd Season",
      genres: ["Action", "Adventure", "Fantasy"],
      mal_id: "47160",
      status: "Not yet aired",
      tmdb_id: 82591,
      anime_id: "goblin-slayer-2nd-season",
      synopsis: "Second season of Goblin Slayer.",
      anilistid: 129188,
      poster_path: "/x8ZQyxAFjz9jtCGivbOMYUC4Tp3.jpg",
      trailer_url:
        "https://www.youtube.com/embed/Dc3U12kH3WA?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/pi2pVLnahwX7djloMLq06OLQLOP.jpg",
    },
    {
      logo: "/kdopeFfzVaDaVn6noTEXxgKya49.png",
      type: "TV",
      year: 2023,
      score: 9.04,
      title: "Sousou no Frieren",
      genres: ["Adventure", "Drama", "Fantasy"],
      mal_id: "52991",
      status: "Currently Airing",
      tmdb_id: 209867,
      anime_id: "sousou-no-frieren",
      synopsis:
        "The demon king has been defeated, and the victorious hero party returns home before disbanding. The four—mage Frieren, hero Himmel, priest Heiter, and warrior Eisen—reminisce about their decade-long journey as the moment to bid each other farewell arrives. But the passing of time is different for elves, thus Frieren witnesses her companions slowly pass away one by one.\n\nBefore his death, Heiter manages to foist a young human apprentice called Fern onto Frieren. Driven by the elf's passion for collecting a myriad of magic spells, the pair embarks on a seemingly aimless journey, revisiting the places that the heroes of yore had visited. Along their travels, Frieren slowly confronts her regrets of missed opportunities to form deeper bonds with her now-deceased comrades.\n\n[Written by MAL Rewrite]",
      anilistid: 154587,
      poster_path: "/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
      trailer_url:
        "https://www.youtube.com/embed/tR8YH0G67Rk?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/96RT2A47UdzWlUfvIERFyBsLhL2.jpg",
    },
    {
      logo: "/7QOjpeoEvit56UEkTluVsYmO17z.png",
      type: "TV",
      year: 2022,
      score: 8.33,
      title: "Kage no Jitsuryokusha ni Naritakute!",
      genres: ["Comedy", "Action", "Fantasy"],
      mal_id: "48316",
      status: "Finished Airing",
      tmdb_id: 119495,
      anime_id: "kage-no-jitsuryokusha-ni-naritakute",
      synopsis:
        'For as long as he can remember, Minoru Kagenou has been fixated on becoming as strong as possible, which has led him to undertake all kinds of rigorous training. This wish, however, does not stem from a desire to be recognized by others; rather, Minoru does everything he can to blend in with the crowd. So, while pretending to be a completely average student during the day, he arms himself with a crowbar and ruthlessly thrashes local biker gangs at night. Yet when Minoru finds himself in a truck accident, his ambitions seemingly come to a sudden end. In his final moments, he laments his powerlessness—no matter how much he trained, there was nothing he could do to overcome his human limitations.\n\nBut instead of dying, Minoru reawakens as Cid, the second child of the noble Kagenou family, in another world—one where magic is commonplace. With the power he so desired finally within his grasp, he dons the moniker "Shadow" and establishes Shadow Garden: a group whose sole purpose is to combat the enigmatic Cult of Diablos, an organization born from Cid\'s imagination. However, as Shadow Garden grows in both membership and influence, it becomes increasingly apparent that the Cult of Diablos is not as fictional as Cid had intended.\n\n[Written by MAL Rewrite]',
      anilistid: 130298,
      poster_path: "/7JKYmtLydAwo9ZsEmAknZiO4U8g.jpg",
      trailer_url:
        "https://www.youtube.com/embed/H-3fre7943U?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/htD5SJpPOvkmAowU80KrWnN59WO.jpg",
    },
    {
      logo: "/he5MlrY4TeMgrGR9r69EijOsOZz.svg",
      type: "TV",
      year: 2023,
      score: null,
      title: "Undead Unluck",
      genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
      mal_id: "52741",
      status: "Not yet aired",
      tmdb_id: 209077,
      anime_id: "undead-unluck",
      synopsis:
        "After reading the conclusion of her favorite manga series, Fuuko Izumo finally feels ready to end her existence. For the past 10 years, Fuuko has been afflicted by a condition that brings extreme misfortune to anyone who touches her. This has had a drastic effect on her surroundings, even inadvertently resulting in the deaths of those around her—including her parents.\n\nAs she stands on a bridge above train tracks, Fuuko is touched by a strange man, causing the footing underneath him to break and dropping him in front of an oncoming train. However, when Fuuko finds the man's corpse, she discovers that his body is regenerating and that he is coming back to life.\n\nThe man, whom Fuuko names Andy, is immortal—and like her, he also wishes for death. Initially dismissive, Fuuko eventually decides to team up with Andy to give him the best death possible; but a mysterious organization lurks in the shadows, hoping to take advantage of the duo's bizarre abilities.\n\n[Written by MAL Rewrite]",
      anilistid: 154116,
      poster_path: "/vcd9WHPHOEoiFEbz2EBN58IT7ab.jpg",
      trailer_url:
        "https://www.youtube.com/embed/bZGXu-Ts_o4?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/8uoNGqXeJCBoG2gLOsKW3qUDuaI.jpg",
    },
    {
      logo: "/j7np3f0CAtGJ27whs3Ku47uyS98.png",
      type: "TV",
      year: 2023,
      score: 8.37,
      title: "Mushoku Tensei: Isekai Ittara Honki Dasu 2nd Season",
      genres: ["Adventure", "Drama", "Ecchi", "Fantasy"],
      mal_id: "51179",
      status: "Finished Airing",
      tmdb_id: 94664,
      anime_id: "mushoku-tensei-isekai-ittara-honki-dasu-2nd-seasons",
      synopsis:
        "After his relationship with Eris Boreas Greyrat reaches new heights, Rudeus Greyrat is ecstatic. Unfortunately, his joy is short-lived, as Eris suddenly abandons him to embark on her own journey. Believing that Eris has lost all interest in him, a heartbroken and depressed Rudeus sets forth to the Northern Territories. With his sole goal being to locate his mother on the vast continent, Rudeus wonders if persisting through daily life is worth the pain, falling into a robotic routine as he endlessly ruminates on his lost love.\n\nHowever, the dangers of the North soon prove that one cannot survive with a dulled mind. While on a quest with the party Counter Arrow, with whom he recently became acquainted, Rudeus has a brush with death—an experience that forces him to finally snap out of his despair. With his newfound teammates, Rudeus rediscovers the pleasure of daily adventuring and moves forward with his original goal of living his second lease on life to the fullest.\n\n[Written by MAL Rewrite]",
      anilistid: 146065,
      poster_path: "/z4rvmhoqQiGMnwuBHY1QcH3OqUo.jpg",
      trailer_url:
        "https://www.youtube.com/embed/keti2rbgI6c?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/j9fRIimor0AMFJR9kjZubXcABzZ.jpg",
    },
    {
      logo: "/vaqar9j5QMcQBJSdJCuvPC697U0.png",
      type: "TV",
      year: 2021,
      score: 8,
      title: "Tokyo Revengers",
      genres: ["Drama", "Action", "Supernatural", "Romance"],
      mal_id: "42249",
      status: "Finished Airing",
      tmdb_id: 105009,
      anime_id: "tokyo-revengers",
      synopsis:
        "Takemichi Hanagaki's second year of middle school was the highest point in his life. He had respect, a gang of friends he could count on, and even a girlfriend. But that was twelve years ago. Today, he's a nobody: a washed-up nonentity made fun of by children and always forced to apologize to his younger boss. A sudden news report on the Tokyo Manji Gang's cruel murder of the only girlfriend he ever had alongside her brother only adds insult to injury. Half a second before a train ends his pitiful life for good, Takemichi flashes back to that same day 12 years ago, when he was still dating Hinata Tachibana.\n\nAfter being forced to relive the very same day that began his downward spiral, Takemichi meets Hinata's younger brother. Without thinking, he admits to his seeming death before flashing back to the past. Takemichi urges him to protect his sister before inexplicably returning to the future. Miraculously, he is not dead. Stranger still, the future has changed. It seems as though Takemichi can alter the flow of time. Given the chance to prevent his ex-girlfriend's tragic death at the hands of the Tokyo Manji Gang, Takemichi decides to fly through time to change the course of the future.\n\n[Written by MAL Rewrite]",
      anilistid: 120120,
      poster_path: "/arB3L9pZZBSzUPSC8BEv8c3X0bF.jpg",
      trailer_url:
        "https://www.youtube.com/embed/r9M34VgTfzY?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/zYIFOocMfsKAEysBjhZ8akfXFdB.jpg",
    },
    {
      logo: "/7nVigkXfNfGb5fHtZttJoHrTyoL.svg",
      type: "TV",
      year: 2022,
      score: 8.62,
      title: "Spy x Family",
      genres: ["Comedy", "Slice of Life", "Action", "Supernatural"],
      mal_id: "50265",
      status: "Finished Airing",
      tmdb_id: 120089,
      anime_id: "spy-x-family",
      synopsis:
        'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. In spite of their plots, renowned spy and master of disguise "Twilight" fulfills dangerous missions one after another in the hope that no child will have to experience the horrors of war.\n\nIn the bustling Ostanian city of Berlint, Twilight dons the alias of "Loid Forger," an esteemed psychiatrist. However, his true intention is to gather intelligence on prominent politician Donovan Desmond, who only appears rarely in public at his sons\' school: the prestigious Eden Academy. Enlisting the help of unmarried city hall clerk Yor Briar to act as his wife and adopting the curious six-year-old orphan Anya as his daughter, Loid enacts his master plan. He will enroll Anya in Eden Academy, where Loid hopes she will excel and give him the opportunity to meet Donovan without arousing suspicion. \n\nUnfortunately for Loid, even a man of his talents has trouble playing the figure of a loving father and husband. And just like Loid is hiding his true identity, Yor—who is an underground assassin known as "Thorn Princess"—and Anya—an esper who can read people\'s minds—have no plans to disclose their own secrets either. Although this picture-perfect family is founded on deception, the Forgers gradually come to understand that the love they share for one another trumps all else.\n\n[Written by MAL Rewrite]',
      anilistid: 140960,
      poster_path: "/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg",
      trailer_url:
        "https://www.youtube.com/embed/ofXigq9aIpo?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/tUyMPMJlql8Ec7d58EIhX5WEGG4.jpg",
    },
    {
      logo: "/n0xjdQWNVVUCXyIEJjpUDqWDcw.png",
      type: "TV",
      year: 2023,
      score: 8.82,
      title: "Jujutsu Kaisen 2nd Season",
      genres: ["Action", "Drama", "Supernatural"],
      mal_id: "51009",
      status: "Currently Airing",
      tmdb_id: 95479,
      anime_id: "jujutsu-kaisen-tv-2nd-season",
      synopsis: "Second season of Jujutsu Kaisen.",
      anilistid: 145064,
      poster_path: "/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
      trailer_url:
        "https://www.youtube.com/embed/PKHQuQF1S8k?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/gmECX1DvFgdUPjtio2zaL8BPYPu.jpg",
    },
    {
      logo: "/lEb6nNESN0QlsLQmyQQIAXcYOyS.svg",
      type: "TV",
      year: 2023,
      score: null,
      title: "Under Ninja",
      genres: ["Action", "Comedy"],
      mal_id: "49766",
      status: "Not yet aired",
      tmdb_id: 132917,
      anime_id: "under-ninja",
      synopsis:
        "A high school loner is given the part-time job of a lifetime as a modern day ninja tasked to perform international assassinations.\n\nAfter World War II, Allied Command in Japan developed a new agency to help manage terrorism and violence within the Pacific region. The agency was staffed with ninja and they were initially tasked to handle domestic affairs. Eventually that program grew to its current form, managing 20,000 ninja across a range of domestic and international affairs. One of those ninjas happens to be Kudo. The seventeen-year-old high school loser is now poised to be the next line of defense against a potential surge in foreign assassins invading Tokyo. \n\n(Source: Denpa, edited)",
      anilistid: 138788,
      poster_path: "/sGfndf3p37aSZ7RbV3t6n21xEjM.jpg",
      trailer_url:
        "https://www.youtube.com/embed/VekwkmxMBS4?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/sMxNwnpV2PqnIBVjPh8czXzeiIF.jpg",
    },
    {
      logo: "/xLPkKZDh3dI0pxYL4QCRfmGdYtp.png",
      type: "TV",
      year: 2023,
      score: 6.68,
      title: "Nanatsu no Maken ga Shihai suru",
      genres: ["Action", "Fantasy"],
      mal_id: "50582",
      status: "Currently Airing",
      tmdb_id: 153337,
      anime_id: "nanatsu-no-maken-ga-shihai-suru",
      synopsis:
        "Impressed by Nanao Hibiya's skill with a sword, Kimberly Magic Academy instructor Theodore McFarlane saves the samurai from certain death amid a fierce battle. With his encouragement, Nanao enrolls in the academy, where she instantly becomes a celebrity after she and four of her peers save a student from an enraged troll. Under the leadership of Oliver Horn, a young man who seems to hide a troubled past, Nanao and her newfound friends start their magical apprenticeship at Kimberly—where only four out of five students make it to graduation in one piece.\n\nIt does not take long for Oliver and his friends to experience the dangers of the academy firsthand, as a near-death encounter in the labyrinth under the school leaves Nanao grappling with her bloody past. The inexperienced yet determined students must stick together if they want to have a chance to survive and uncover the mysteries that the academy holds.\n\n[Written by MAL Rewrite]",
      anilistid: 142598,
      poster_path: "/kqjLHtt539Sm6aasMvlJ7tuBr4i.jpg",
      trailer_url:
        "https://www.youtube.com/embed/AWXNK89uVco?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/kOSzgGeLTTxvmuci1yJvfhFBYtW.jpg",
    },
    {
      logo: "/6wt3pSDEAyfWZYDS8YP1mzkNFnk.png",
      type: "TV",
      year: 2019,
      score: 7.98,
      title: "Tate no Yuusha no Nariagari",
      genres: ["Action", "Fantasy", "Adventure"],
      mal_id: "35790",
      status: "Finished Airing",
      tmdb_id: 83095,
      anime_id: "tate-no-yuusha-no-nariagari",
      synopsis:
        "The Four Cardinal Heroes are a group of ordinary men from modern-day Japan summoned to the kingdom of Melromarc to become its saviors. Melromarc is a country plagued by the Waves of Catastrophe that have repeatedly ravaged the land and brought disaster to its citizens for centuries. The four heroes are respectively bestowed a sword, spear, bow, and shield to vanquish these Waves. Naofumi Iwatani, an otaku, becomes cursed with the fate of being the \"Shield Hero.\" Armed with only a measly shield, Naofumi is belittled and ridiculed by his fellow heroes and the kingdom's people due to his weak offensive capabilities and lackluster personality.\n\nWhen the heroes are provided with resources and comrades to train with, Naofumi sets out with the only person willing to train alongside him, Malty Melromarc. He is soon betrayed by her, however, and becomes falsely accused of taking advantage of her. Naofumi then becomes heavily discriminated against and hated by the people of Melromarc for something he didn't do. With a raging storm of hurt and mistrust in his heart, Naofumi begins his journey of strengthening himself and his reputation. Further along however, the difficulty of being on his own sets in, so Naofumi buys a demi-human slave on the verge of death named Raphtalia to accompany him on his travels.\n\nAs the Waves approach the kingdom, Naofumi and Raphtalia must fight for the survival of the kingdom and protect the people of Melromarc from their ill-fated future.\n\n[Written by MAL Rewrite]",
      anilistid: 99263,
      poster_path: "/ftavpq2PJn5pyo5opJEmj8QleKD.jpg",
      trailer_url:
        "https://www.youtube.com/embed/h3n-chI028E?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/mCQNV4LZWhIpWhLqjIjC13S5lNq.jpg",
    },
    {
      logo: "/fUz5YX640jZJEdZxRk3rwGsnxvw.png",
      type: "TV",
      year: 2023,
      score: null,
      title: "Hametsu no Oukoku",
      genres: ["Action", "Drama", "Fantasy"],
      mal_id: "54362",
      status: "Not yet aired",
      tmdb_id: 219673,
      anime_id: "hametsu-no-oukoku",
      synopsis:
        "For ages, humanity flourished through the power of magic, a gift from witches to aid mankind. But times have changed. The scientific Gear Expansion has made both magic and witches obsolete. In order to liberate humanity from the blight of magic, the mighty Redia Empire began a ruthless hunt to exterminate all witches. Adonis was only a boy when the hunt began, apprentice to a witch he dearly loved. When she perishes at the hands of the empire, Adonis vows revenge. By this furious wizard's power, blood will flow!\n\n(Source: Seven Seas Entertainment)",
      anilistid: 160900,
      poster_path: "/uHSFGSZFR1VH3nG5x48gImWePeL.jpg",
      trailer_url:
        "https://www.youtube.com/embed/UOtC17c8Xaw?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/kcCVMHdKj3mujbBJ0RdqZ32av65.jpg",
    },
    {
      logo: "/vhe4CO354fnUJoyd30yNrepfKsS.png",
      type: "TV",
      year: 2023,
      score: 8.13,
      title: "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
      genres: ["Action", "Comedy", "Horror"],
      mal_id: "54112",
      status: "Currently Airing",
      tmdb_id: 217766,
      anime_id: "zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
      synopsis:
        "After graduating from a top university with an impressive extracurricular record in the rugby club, Akira Tendou has nailed every step of the way to securing his dream job. On top of that, a beautiful and kind co-worker always brightens his day in the office! Life seems to be going very well for Akira until he slowly realizes that sleepless nights and brutal work are his new reality.\n\nDue to three years of mind-numbing labor in an exploitative company, Akira is unable to recognize the tired, unaccomplished person he has become. On track to losing all passion in life like several of his overworked colleagues, Akira finds his saving grace in the most unexpected way possible—the breakout of a zombie apocalypse.\n\nWith the free time he finally has, Akira decides to complete a bucket list of a hundred things he wants to do before he eventually gets turned into a zombie. Although he is surrounded by the dead, Akira has never felt more alive!\n\n[Written by MAL Rewrite]",
      anilistid: 159831,
      poster_path: "/XzOeAppGpnsSAiK82idkg0BoCt.jpg",
      trailer_url:
        "https://www.youtube.com/embed/GAMrUx-esS8?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/u0ijYWX50bvbaUOWr3mpqZ9OcUK.jpg",
    },
    {
      logo: "/9F7daAmibx8ZHTE17CdM5FAwiHE.png",
      type: "TV",
      year: 1999,
      score: 8.7,
      title: "One Piece",
      genres: ["Drama", "Comedy", "Action", "Fantasy", "Adventure"],
      mal_id: "21",
      status: "Currently Airing",
      tmdb_id: 37854,
      anime_id: "one-piece",
      synopsis:
        "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\n\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\n\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.\n\n[Written by MAL Rewrite]",
      anilistid: 21,
      poster_path: "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
      trailer_url:
        "https://www.youtube.com/embed/l_98K4_6UQ0?enablejsapi=1&wmode=opaque&autoplay=1",
      backdrop_path: "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
    },
  ]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  var count = 0;

  const swiper = useSwiper();
  const currentSwiper = useRef(null);
  const parentCardRef = useRef(null);
  const dynamicCardRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [hover, setHover] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const parentCardElement = parentCardRef.current;
    if (parentCardElement) {
      setIsOverflow(
        parentCardElement.scrollWidth > parentCardElement.clientWidth
      );
    }
  }, [data]); // Re-run the effect whenever data changes

  console.log(isOverflow);

  // const setPosition = (item: never) => {
  //   var x = document.getElementById(`1${item.id}`);
  //   var divItem = document.getElementById(`2${item.id}`);
  //   const ele = document.getElementById("bannerDiv" + moveCount?.toString());
  //   if (divItem) {
  //     divItem.style.position = "absolute";
  //     divItem.style.top = x.offsetTop + "px";
  //     divItem.style.left = x.offsetLeft - ele.scrollLeft + "px";
  //   }
  // };

  return (
    <div ref={parentCardRef} className="mediaScreen mx-10">
<iframe src="https://animeflix.live" className="w-full h-screen" ></iframe>


      <div className="flex items-center gap-[2px] mx-1 p-2.5">
        <button className="   " id={`swiper-back-${swiperId}`}>
          <Icon icon="mingcute:left-fill" width={24} />
        </button>
        <button className="     " id={`swiper-forward-${swiperId}`}>
          <Icon icon="mingcute:right-fill" width={24} />
        </button>
      </div>

      <div
        className="banner grid grid-cols-6"
        id={"bannerDiv" + moveCount?.toString()}
      >
        {data?.map((item) => {
          return (
            <div className="mediaDiv" key={item.mal_id}>
              <div
                onMouseEnter={() => setTitle(item.title)}
                onMouseLeave={() => setHover((t) => !t)}
                key={item.mal_id}
              >
                <div
                  className=""
                  id={`1${item.mal_id}`}
                  // onMouseEnter={() => {
                  //   setPosition(item);
                  // }}
                >
                  <img
                    src={`${base_url}${item.poster_path}`}
                    alt={item.title}
                    className="mediaImg"
                  />

                  <div ref={dynamicCardRef} className="displayhoverScreen">
                    <HoverScreen
                      backdrop_path={`${base_url}${item.backdrop_path}`}
                      title={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      if</div>
    </div>
  );
};

export default MediaScreen;
