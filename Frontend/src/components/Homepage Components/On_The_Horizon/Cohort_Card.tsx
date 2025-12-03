// CohortCard.tsx
import Link from "next/link";

export function CohortCard({ cohort }: { cohort: any }) {
  return (
    <Link href={`/cohorts/${cohort.cohort_id}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 
                      flex flex-col h-full">          {/* ← important */}
        {/* Image - fixed height */}
        <div className="w-full h-48 mb-4">
          <img 
            src={cohort.imageSrc} 
            alt={cohort.cohortTitle} 
            className="w-full h-full object-cover rounded-xl" 
          />
        </div>

        <span className="badge mb-2">{cohort.tag}</span>
        <h3 className="text-xl font-bold mt-2 flex-1">{cohort.cohortTitle}</h3>   {/* flex-1 pushes price to bottom */}
        
        <p className="text-gray-600 mt-2">{cohort.startDate} • {cohort.duration}</p>
        
        <p className="text-2xl font-bold text-green-600 mt-4">₹{cohort.fees}</p>
      </div>
    </Link>
  );
}