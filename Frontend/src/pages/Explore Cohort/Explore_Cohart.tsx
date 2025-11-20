import { useEffect, useState } from "react";
import OfferCarousel from "../../utils/custom/offer-carousel";
import Loading from "../../utils/ui/Loading/Loading";

interface Offer {
  cohort_id: string | number;
  imageSrc: string;
  imageAlt?: string;
  tag: string;
  title: string;
  description: string;
  cohortTitle: string;
  startDate: string;
  duration: string;
  skills: string;
}

const Explore_Cohort = () => {
  const [sampleOffers, setSampleOffers] = useState<Offer[]>([]);
  const [tagArray, setTagArray] = useState<string[]>([]);

  // Fetch data
  const fetching = async () => {
    try {
      const res = await fetch("http://localhost:3000/");
      const json = await res.json();

      if (json?.data && Array.isArray(json.data)) {
        setSampleOffers(json.data);
      } else {
        console.warn("Unexpected response format:", json);
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  // Extract and sort tags
  useEffect(() => {
    if (sampleOffers.length === 0) return;

    // Extract unique tags
    const uniqueTags = Array.from(new Set(sampleOffers.map((e) => e.tag.trim())));

    // Define the exact desired order (case-insensitive match)
    const desiredOrder = [
      "industry cohorts",
      "foundational cohorts",
      "webinars",
    ];

    // Sort tags robustly
    const sortedTags = uniqueTags.sort((a, b) => {
      const aIndex = desiredOrder.findIndex(
        (t) => t.toLowerCase() === a.toLowerCase()
      );
      const bIndex = desiredOrder.findIndex(
        (t) => t.toLowerCase() === b.toLowerCase()
      );

      // Unknown tags go after the known ones
      if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;

      return aIndex - bIndex;
    });

    setTagArray(sortedTags);
  }, [sampleOffers]);

  // Component render
  return (
    <div className="font-open-sans bg-[#F6F5ED] py-5 w-full">
      {sampleOffers.length === 0 ? (
        <div className="text-center text-lg font-semibold py-10 w-full h-[351px]">
          <Loading />
        </div>
      ) : (
        tagArray.map((tag) => {
          const associatedCards = sampleOffers
            .filter(
              (each) => each.tag.trim().toLowerCase() === tag.toLowerCase()
            )
            .map((each) => ({
              cohort_id: each.cohort_id,
              imageSrc: each.imageSrc,
              tag: each.tag,
              title: each.title,
              description: each.description,
              cohortTitle: each.cohortTitle,
              startDate: each.startDate,
              duration: each.duration,
              skills: Array.isArray((each as any).skill_tags)
                ? (each as any).skill_tags.join(", ")
                : "",
            }));

          if (associatedCards.length === 0) return null;

          const sectionId = tag.toLowerCase().replace(/\s+/g, "-");

          return (
            <div
              key={tag}
              id={sectionId}
              className="flex flex-col items-center scroll-mt-20"
            >
              <h2 className="text-[#25473A] text-2xl font-[600] sm:text-3xl lg:text-4xl leading-snug mb-6 font-open-sans underline decoration-[#25473A]/50 underline-offset-8 capitalize">
                {tag}
              </h2>
              <div className="w-[85vw] p-10">
                <OfferCarousel cohort={associatedCards} />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Explore_Cohort;
