// stats section on homepage
import { stats } from '@/api/data.json';
import StatsCard from "@/components/StatsCard";

const Stats = () => {
  return (
    <div id="stats" className="bg-off-white px-6 py-6 lg:px-12 flex flex-wrap flex-col justify-center items-center lg:min-h-[36vh]">
      <h3 className="text-center p-2 uppercase font-[500]">Let our statistic speak for itself</h3>
      <div className="flex flex-wrap gap-4 min-h-[24vh] justify-evenly items-center">
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