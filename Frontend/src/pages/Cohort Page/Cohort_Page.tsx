import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../utils/ui/Loading/Loading";

const Cohort_Page = () => {
  const { id } = useParams();
  const [cohort, setCohort] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3000/cohort/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const data = json.data
        setCohort(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return (
      <div className="w-full h-[351px] bg-[#F6F5ED] ">
        <div className="h-[351px] flex items-center justify-center text-2xl">
          <Loading/>
        </div>
      </div>
    );

  if (!cohort)
    return (
      <div className="w-full h-[351px] bg-[#F6F5ED] ">
        <div className="flex h-[351px] items-center justify-center text-2xl">
          Cohort not found.
        </div>
      </div>
    );

  const key_learnings = cohort.key_learnings?.split(",") ?? [];
  const milestones = Array.isArray(cohort.milestones) ? cohort.milestones : [];
  const skill_tags = Array.isArray(cohort.skill_tags) ? cohort.skill_tags : [];

  return (
    <div className="min-h-screen bg-[#F6F5ED] font-open-sans flex flex-col w-full py-10">
      <main className="flex flex-col lg:flex-row mx-auto w-full max-w-5xl p-4 gap-6">
        <section className="flex-1 rounded-2xl">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-5xl font-bold mb-2">{cohort.cohortTitle}</h2>
            <p className="text-2xl font-medium">{cohort.tag}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between mb-6 gap-5">
            <div>
              <p className="text-2xl font-medium">Start Date & Duration</p>
              <p className="text-xl">{cohort.startDate} | {cohort.duration}</p>
            </div>
            <button
              type="button"
              className="transition-transform sm:w-60 flex items-center justify-center px-4 py-3 rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium"
            >
              Register
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-2xl mb-1">Overview</h3>
            <p className="text-xl leading-relaxed">{cohort.goal}</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-2xl mb-1">What You’ll Learn (Outcomes)</h3>
            <ul className="list-disc list-inside text-xl space-y-1">
              {key_learnings.map((item: string, i: number) => (
                <li key={i}>{item.trim()}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6 flex flex-col gap-5">
            <div>
              <h3 className="font-semibold text-2xl mb-1">Structure</h3>
              <ul className="list-disc list-inside text-xl space-y-1">
                {milestones.map((each: string, i: number) => <li key={i}>{each}</li>)}
              </ul>
            </div>
            <div className="mt-3 flex flex-col gap-5 text-xl">
              <p>
                <span className="text-2xl font-medium">Deliverables Expected:</span> {cohort.documents_list}
              </p>
              <p>
                <span className="text-2xl font-medium">Skills:</span> {skill_tags.join(", ")}
              </p>
            </div>
          </div>

          <div className="border-t pt-4 mt-4">
            <h3 className="text-3xl font-bold mb-2">Logistics Details</h3>
            <div className="flex flex-col gap-5">
              <p className="text-xl"><span className="text-2xl font-medium">Evaluation:</span> {cohort.evaluations}</p>
              <p className="text-xl"><span className="text-2xl font-medium">Fees:</span> <span className="bg-[#526B61] text-white p-2 rounded-2xl mx-3">₹{cohort.fees}</span></p>
            </div>
          </div>
        </section>

        <aside className="w-full lg:w-1/3 flex flex-col gap-4">
          <img src={cohort.imageSrc} alt={cohort.cohortTitle} className="rounded-2xl shadow-lg object-cover w-full h-64" />
          <div className="flex flex-wrap justify-center gap-10">
            <button type="button" className="transition-transform flex items-center justify-center px-4 py-3 rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium">Ask a Question</button>
            <button type="button" className="transition-transform flex items-center justify-center px-4 py-3 rounded-lg bg-[#526B61] hover:bg-[#25473A] text-white active:scale-95 font-medium">Save for Later</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Cohort_Page;
