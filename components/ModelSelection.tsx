// swr is react hook for data fetching
"use client";
import Select from "react-select";
import useSWR from "swr";
// getting all engines for openAI
const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="mt-2">
      <Select
        /// we get models from getEngines in form of array of objects
        //swr caches the value
        className="mt-2"
        isSearchable
        defaultValue={model}
        placeholder={model}
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        options={models?.modelOptions}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
};

export default ModelSelection;
