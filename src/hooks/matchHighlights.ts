import { footballFixtures } from "@src/constants/fixtures";
import { extractYouTubeVideoId } from "@src/helper/utils";
import {
  apiYouTubeVideoResponse,
  matchHightLightDataType,
} from "@src/types/types";
import { useState } from "react";

export const useMatchHighlights = (highLightId: any, fixtureId: any) => {
  const [videoDetails, setVideoDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [highLightData, setHighlightData] =
    useState<matchHightLightDataType | null>(null);

  const getMatchHighLightData = () => {
    try {
      const allMatchHighlights = footballFixtures.find(
        (item) => item.id === fixtureId
      );
      const matchHighlights = allMatchHighlights?.matchHighLights.find(
        (item) => item.id === highLightId
      );
      if (matchHighlights) {
        setHighlightData(matchHighlights);
      } else {
        setHighlightData(null);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const getYouTubeVideoData = async (
    url: string
  ): Promise<{
    videoId: string;
    videoTitle: string;
    videoImgUrl: string;
    channelTitle: string;
  } | null> => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const videoId = extractYouTubeVideoId(url);
      const apiKey = "AIzaSyD5K_Tef5PH7AEAzH6iO5ol0schHbDFkVU";

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: apiYouTubeVideoResponse = await response.json();

      if (data?.items?.length === 0) return null;

      const item = data.items[0];

      return {
        videoId: item.id,
        videoTitle: item.snippet.title,
        videoImgUrl: item.snippet.thumbnails.medium.url,
        channelTitle: item.snippet.channelTitle,
      };
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    getMatchHighLightData,
    getYouTubeVideoData,
    videoDetails,
    setVideoDetails,
    playing,
    setPlaying,
    highLightData,
    loading,
  };
};
