import { useRef } from "react";
import { useActiviyStore } from "../store/activity.store";
import ActivityItemCard from "../components/Activity/ActivityItemCard";
import Empty from "../Empty/Empty";

export default function Activity() {
  const { activities } = useActiviyStore();
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleActivityItem = (id: string) => {
    contentRefs.current.forEach((el) => {
      if (el) {
        if (el.parentElement?.getAttribute("id") === id) {
          el.classList.toggle("hidden");
        } else {
          el.classList.add("hidden");
        }
      }
    });
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      {activities.length > 0 ? (
        activities.map((activity) => (
          <ActivityItemCard
            activity={activity}
            toggleActivityHandler={toggleActivityItem}
            refs={contentRefs}
          />
        ))
      ) : (
        <Empty />
      )}
    </div>
  );
}
