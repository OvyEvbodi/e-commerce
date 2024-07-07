// stats section on homepage
import { stats } from '@/api/data.json';
import StatsCard from "@/components/StatsCard";

const Stats = () => {
  return (
    <div id="stats" className="bg-off-white px-4 py-6 lg:px-12 w-full lg:min-h-[36vh]">
      <h3 className="text-center p-2 uppercase font-[500]">Let our statistic speak for itself </h3>
      <div className="flex flex-wrap gap-4 w-full min-h-[24vh] justify-evenly">
        {
          stats.map(item => (
            <div className="" key={item.id}>
              <StatsCard { ...item } />
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Stats;