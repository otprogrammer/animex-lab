import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../../utils/supabase";

export async function GET(request: NextRequest, { params }: any) {
    const { searchParams } = new URL(request.url)
    
    const  year  =
    searchParams.get("year");
    const  type  =
    searchParams.get("type");
    const  countryoforigin  =
    searchParams.get("countryoforigin");
    const  rating  =
    searchParams.get("rating");
    const  status  =
    searchParams.get("status");
    const  genres  =
    searchParams.get("genres");
    const  page  =
    searchParams.get("page");
    const  sort  =
    searchParams.get("sort");

    console.log(year)
    
  const itemsPerPage = 40; // Number of items per page
  const currentPage = parseInt(page) || 1;

  let typeList = [];
  if (type) {
    typeList = type.split(",");
  }

  let yearList = [];
  if (year) {
    yearList = year.split(",");
  }

  let originList = [];
  if (countryoforigin) {
    originList = countryoforigin.split(",");
  }

  let ratingList = [];
  if (rating) {
    ratingList = rating.split(",");
  }

  let statusList = [];
  if (status) {
    statusList = status.split(",");
  }

  let genreList = [];
  if (genres) {
    genreList = genres.split(",");
  }

  let sortList = [];
  if (sort) {
    sortList = sort.split(",");
  }
  const offset = (currentPage - 1) * itemsPerPage;
  const countQuery = {
    from: "anime",
    select: "*",
    match: {
      type: { in: typeList.length === 0 ? null : typeList },
      year: { in: yearList.length === 0 ? null : yearList },
      // ... similar match conditions for other filters
      title: { notLike: "%(Dub)%" },
      yearList: { notNull: true },
    },
  };
  const sortDirection =
    sort === "rank" || sort === "popularity" ? "asc" : "desc";

  const dataQuery = {
    from: "anime",
    select: `
      anime_id, 
      title, 
      mal_id, 
      coverimage, 
      bannerimage, 
      slug, 
      type, 
      score, 
      rank, 
      rating, 
      year, 
      status, 
      image_url, 
      members, 
      favorites, 
      popularity, 
      episodes
    `,
    order: `${sort || "score"} ${sortDirection}`,
    limit: itemsPerPage,
    offset: offset,
  };

  // If filtering by rating, apply logic within the query (assuming a "ratings" column):
  if (ratingList.length > 0) {
    const modifiedRatings = ratingList.map((rating) => {
      if (rating === "R - Mild Nudity") {
        return "R+ - Mild Nudity";
      } else if (rating === "R - Violence") {
        return "R - 17+ (violence & profanity)";
      }
      return rating;
    });
    dataQuery.match.ratings = { in: modifiedRatings };
  }

  try {
    const { data: countData, error: countError } = await supabase
      .from("anime")
      .select("*");

    if (countError) {
      console.error("Error fetching total count:", countError);
      return NextResponse.json(
        { message: "Error", error: "Failed to retrieve anime count" },
        { status: 500 }
      );
    }

    const totalCount = parseInt(countData[0].count);
    const totalPages = Math.ceil(totalCount / itemsPerPage);

    const { data: animeData, error: dataError } = await supabase
  .from('anime')
  .select(...dataQuery.select)
  .order(dataQuery.order)
  .limit(dataQuery.limit)
//   .offset(dataQuery.offset);

    if (dataError) {
      console.error("Error fetching anime data:", dataError);
      return NextResponse.json(
        { message: "Error", error: "Failed to retrieve anime data" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        data: animeData,
        total_pages: totalPages,
        current_page: currentPage,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
